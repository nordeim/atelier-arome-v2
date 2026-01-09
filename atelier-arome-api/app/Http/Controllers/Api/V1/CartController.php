<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\CartResource;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Coupon;
use App\Models\ProductVariant;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CartController extends Controller
{
    /**
     * Get the current cart.
     */
    public function show(Request $request): JsonResponse
    {
        $cart = $this->getOrCreateCart($request);

        $cart->load(['items.variant.product', 'items.variant.inventory', 'coupon']);

        return $this->success(
            new CartResource($cart),
            'Cart retrieved successfully'
        );
    }

    /**
     * Add item to cart.
     */
    public function addItem(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'variant_id' => ['required', 'uuid', 'exists:product_variants,id'],
            'quantity' => ['required', 'integer', 'min:1', 'max:99'],
        ]);

        $cart = $this->getOrCreateCart($request);
        $variant = ProductVariant::with('inventory')->findOrFail($validated['variant_id']);

        // Check stock
        if ($variant->inventory && $variant->inventory->quantity < $validated['quantity']) {
            return $this->error('Insufficient stock available', 422);
        }

        // Check if item already exists in cart
        $existingItem = $cart->items()->where('variant_id', $variant->id)->first();

        if ($existingItem) {
            $newQuantity = $existingItem->quantity + $validated['quantity'];

            // Check stock for total quantity
            if ($variant->inventory && $variant->inventory->quantity < $newQuantity) {
                return $this->error('Insufficient stock for total quantity', 422);
            }

            $existingItem->update(['quantity' => $newQuantity]);
        } else {
            $cart->items()->create([
                'variant_id' => $variant->id,
                'quantity' => $validated['quantity'],
                'unit_price' => $variant->price_sgd,
            ]);
        }

        $this->recalculateCart($cart);

        $cart->load(['items.variant.product', 'coupon']);

        return $this->success(
            new CartResource($cart),
            'Item added to cart'
        );
    }

    /**
     * Update cart item quantity.
     */
    public function updateItem(Request $request, string $id): JsonResponse
    {
        $validated = $request->validate([
            'quantity' => ['required', 'integer', 'min:1', 'max:99'],
        ]);

        $cart = $this->getOrCreateCart($request);
        $item = $cart->items()->findOrFail($id);

        // Check stock
        $variant = $item->variant;
        if ($variant->inventory && $variant->inventory->quantity < $validated['quantity']) {
            return $this->error('Insufficient stock available', 422);
        }

        $item->update(['quantity' => $validated['quantity']]);

        $this->recalculateCart($cart);

        $cart->load(['items.variant.product', 'coupon']);

        return $this->success(
            new CartResource($cart),
            'Cart item updated'
        );
    }

    /**
     * Remove item from cart.
     */
    public function removeItem(Request $request, string $id): JsonResponse
    {
        $cart = $this->getOrCreateCart($request);
        $item = $cart->items()->findOrFail($id);

        $item->delete();

        $this->recalculateCart($cart);

        $cart->load(['items.variant.product', 'coupon']);

        return $this->success(
            new CartResource($cart),
            'Item removed from cart'
        );
    }

    /**
     * Apply coupon to cart.
     */
    public function applyCoupon(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'code' => ['required', 'string'],
        ]);

        $cart = $this->getOrCreateCart($request);

        $coupon = Coupon::whereActive()
            ->whereCode($validated['code'])
            ->first();

        if (!$coupon) {
            return $this->error('Invalid or expired coupon code', 422);
        }

        // Check minimum amount
        if ($coupon->minimum_amount && $cart->subtotal < $coupon->minimum_amount) {
            return $this->error(
                'Minimum order amount of SGD ' . number_format($coupon->minimum_amount, 2) . ' required',
                422
            );
        }

        $cart->update(['coupon_id' => $coupon->id]);

        $this->recalculateCart($cart);

        $cart->load(['items.variant.product', 'coupon']);

        return $this->success(
            new CartResource($cart),
            'Coupon applied successfully'
        );
    }

    /**
     * Remove coupon from cart.
     */
    public function removeCoupon(Request $request): JsonResponse
    {
        $cart = $this->getOrCreateCart($request);

        $cart->update(['coupon_id' => null]);

        $this->recalculateCart($cart);

        $cart->load(['items.variant.product', 'coupon']);

        return $this->success(
            new CartResource($cart),
            'Coupon removed'
        );
    }

    /**
     * Get or create cart for current user/session.
     */
    private function getOrCreateCart(Request $request): Cart
    {
        $user = $request->user();

        if ($user) {
            // Authenticated user - get or create cart
            $cart = Cart::where('user_id', $user->id)
                ->whereActive()
                ->first();

            if (!$cart) {
                $cart = Cart::create([
                    'user_id' => $user->id,
                    'expires_at' => now()->addDays(30),
                ]);
            }

            return $cart;
        }

        // Guest user - use session
        $sessionId = $request->header('X-Session-Id') ?? $request->cookie('cart_session');

        if (!$sessionId) {
            $sessionId = Str::uuid()->toString();
        }

        $cart = Cart::where('session_id', $sessionId)
            ->whereActive()
            ->first();

        if (!$cart) {
            $cart = Cart::create([
                'session_id' => $sessionId,
                'expires_at' => now()->addDays(7),
            ]);
        }

        return $cart;
    }

    /**
     * Recalculate cart totals.
     */
    private function recalculateCart(Cart $cart): void
    {
        $cart->load('items');

        $subtotal = $cart->items->sum(function ($item) {
            return $item->quantity * $item->unit_price;
        });

        $discountAmount = 0;
        if ($cart->coupon) {
            if ($cart->coupon->type === 'percentage') {
                $discountAmount = $subtotal * ($cart->coupon->value / 100);
            } elseif ($cart->coupon->type === 'fixed_amount') {
                $discountAmount = $cart->coupon->value;
            }

            // Apply maximum discount cap
            if ($cart->coupon->maximum_amount) {
                $discountAmount = min($discountAmount, $cart->coupon->maximum_amount);
            }
        }

        $taxableAmount = $subtotal - $discountAmount;
        $gstAmount = round($taxableAmount * 0.09, 2); // Singapore GST 9%
        $total = $taxableAmount + $gstAmount;

        $cart->update([
            'subtotal' => $subtotal,
            'discount_amount' => $discountAmount,
            'gst_amount' => $gstAmount,
            'total' => $total,
        ]);
    }
}
