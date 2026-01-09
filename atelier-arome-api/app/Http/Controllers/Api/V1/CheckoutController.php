<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Models\Cart;
use App\Models\CouponUsage;
use App\Models\InventoryMovement;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CheckoutController extends Controller
{
    /**
     * Initiate checkout - validate cart and return summary.
     */
    public function initiate(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'shipping_address_id' => ['required', 'uuid', 'exists:addresses,id'],
            'billing_address_id' => ['nullable', 'uuid', 'exists:addresses,id'],
        ]);

        $user = $request->user();

        $cart = Cart::where('user_id', $user->id)
            ->whereActive()
            ->with(['items.variant.product', 'items.variant.inventory', 'coupon'])
            ->first();

        if (!$cart || $cart->items->isEmpty()) {
            return $this->error('Your cart is empty', 422);
        }

        // Validate addresses belong to user
        $shippingAddress = $user->addresses()->find($validated['shipping_address_id']);
        if (!$shippingAddress) {
            return $this->error('Invalid shipping address', 422);
        }

        $billingAddress = $validated['billing_address_id']
            ? $user->addresses()->find($validated['billing_address_id'])
            : $shippingAddress;

        // Check stock availability
        $stockIssues = [];
        foreach ($cart->items as $item) {
            $inventory = $item->variant->inventory;
            if (!$inventory || $inventory->quantity < $item->quantity) {
                $stockIssues[] = [
                    'product' => $item->variant->product->name,
                    'variant' => $item->variant->name,
                    'requested' => $item->quantity,
                    'available' => $inventory?->quantity ?? 0,
                ];
            }
        }

        if (!empty($stockIssues)) {
            return $this->error('Some items are out of stock', 422, ['stock_issues' => $stockIssues]);
        }

        // Calculate shipping (simplified - free for orders over SGD 100)
        $shippingAmount = $cart->subtotal >= 100 ? 0 : 8.00;

        return $this->success([
            'cart' => [
                'subtotal' => $cart->subtotal,
                'discount_amount' => $cart->discount_amount,
                'gst_amount' => $cart->gst_amount,
                'shipping_amount' => $shippingAmount,
                'total' => $cart->total + $shippingAmount,
            ],
            'shipping_address' => $shippingAddress,
            'billing_address' => $billingAddress,
            'coupon' => $cart->coupon?->code,
        ], 'Checkout summary');
    }

    /**
     * Complete checkout - create order.
     */
    public function complete(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'shipping_address_id' => ['required', 'uuid', 'exists:addresses,id'],
            'billing_address_id' => ['nullable', 'uuid', 'exists:addresses,id'],
            'payment_method' => ['required', 'in:stripe,paynow'],
            'notes' => ['nullable', 'string', 'max:500'],
        ]);

        $user = $request->user();

        $cart = Cart::where('user_id', $user->id)
            ->whereActive()
            ->with(['items.variant.product', 'items.variant.inventory', 'coupon'])
            ->first();

        if (!$cart || $cart->items->isEmpty()) {
            return $this->error('Your cart is empty', 422);
        }

        // Validate addresses
        $shippingAddress = $user->addresses()->find($validated['shipping_address_id']);
        $billingAddress = $validated['billing_address_id']
            ? $user->addresses()->find($validated['billing_address_id'])
            : $shippingAddress;

        if (!$shippingAddress) {
            return $this->error('Invalid shipping address', 422);
        }

        $shippingAmount = $cart->subtotal >= 100 ? 0 : 8.00;

        try {
            $order = DB::transaction(function () use ($user, $cart, $shippingAddress, $billingAddress, $shippingAmount, $validated) {
                // Create order
                $order = Order::create([
                    'user_id' => $user->id,
                    'shipping_address_id' => $shippingAddress->id,
                    'billing_address_id' => $billingAddress->id,
                    'coupon_id' => $cart->coupon_id,
                    'status' => 'pending',
                    'payment_status' => 'pending',
                    'subtotal' => $cart->subtotal,
                    'discount_amount' => $cart->discount_amount,
                    'gst_amount' => $cart->gst_amount,
                    'shipping_amount' => $shippingAmount,
                    'total' => $cart->total + $shippingAmount,
                    'notes' => $validated['notes'] ?? null,
                ]);

                // Create order items with snapshot data
                foreach ($cart->items as $cartItem) {
                    $variant = $cartItem->variant;
                    $product = $variant->product;

                    OrderItem::create([
                        'order_id' => $order->id,
                        'product_name' => $product->name,
                        'variant_name' => $variant->name,
                        'sku' => $variant->sku,
                        'quantity' => $cartItem->quantity,
                        'unit_price' => $cartItem->unit_price,
                        'total' => $cartItem->quantity * $cartItem->unit_price,
                    ]);

                    // Reduce inventory
                    if ($variant->inventory) {
                        $variant->inventory->decrement('quantity', $cartItem->quantity);

                        // Log inventory movement
                        InventoryMovement::create([
                            'inventory_id' => $variant->inventory->id,
                            'order_id' => $order->id,
                            'type' => 'sale',
                            'quantity' => -$cartItem->quantity,
                            'reference' => $order->order_number,
                            'notes' => 'Order placed',
                        ]);
                    }
                }

                // Record coupon usage
                if ($cart->coupon) {
                    CouponUsage::create([
                        'coupon_id' => $cart->coupon_id,
                        'user_id' => $user->id,
                        'order_id' => $order->id,
                    ]);
                }

                // Clear cart
                $cart->items()->delete();
                $cart->delete();

                return $order;
            });

            $order->load(['items', 'shippingAddress', 'billingAddress', 'coupon']);

            return $this->created(
                new OrderResource($order),
                'Order placed successfully'
            );

        } catch (\Exception $e) {
            return $this->error('Failed to create order: ' . $e->getMessage(), 500);
        }
    }
}
