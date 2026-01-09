<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * List all orders for the authenticated user.
     */
    public function index(Request $request): JsonResponse
    {
        $perPage = min($request->input('per_page', 15), 50);

        $orders = $request->user()
            ->orders()
            ->with(['items', 'shippingAddress'])
            ->orderBy('created_at', 'desc')
            ->paginate($perPage);

        return $this->success(
            OrderResource::collection($orders)->response()->getData(true),
            'Orders retrieved successfully'
        );
    }

    /**
     * Get a single order by order number.
     */
    public function show(Request $request, string $orderNumber): JsonResponse
    {
        $order = $request->user()
            ->orders()
            ->with([
                'items',
                'shippingAddress',
                'billingAddress',
                'coupon',
                'payments',
            ])
            ->where('order_number', $orderNumber)
            ->firstOrFail();

        return $this->success(
            new OrderResource($order),
            'Order retrieved successfully'
        );
    }
}
