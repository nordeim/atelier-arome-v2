<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'order_number' => $this->order_number,
            'status' => $this->status,
            'payment_status' => $this->payment_status,
            'items' => OrderItemResource::collection($this->whenLoaded('items')),
            'items_count' => $this->when($this->relationLoaded('items'), fn() => $this->items->count()),
            'shipping_address' => new AddressResource($this->whenLoaded('shippingAddress')),
            'billing_address' => new AddressResource($this->whenLoaded('billingAddress')),
            'coupon' => new CouponResource($this->whenLoaded('coupon')),
            'subtotal' => (float) $this->subtotal,
            'subtotal_formatted' => 'SGD ' . number_format($this->subtotal, 2),
            'discount_amount' => (float) $this->discount_amount,
            'discount_amount_formatted' => 'SGD ' . number_format($this->discount_amount, 2),
            'gst_amount' => (float) $this->gst_amount,
            'gst_amount_formatted' => 'SGD ' . number_format($this->gst_amount, 2),
            'shipping_amount' => (float) $this->shipping_amount,
            'shipping_amount_formatted' => 'SGD ' . number_format($this->shipping_amount, 2),
            'total' => (float) $this->total,
            'total_formatted' => 'SGD ' . number_format($this->total, 2),
            'tracking_number' => $this->tracking_number,
            'notes' => $this->notes,
            'created_at' => $this->created_at->toIso8601String(),
            'updated_at' => $this->updated_at->toIso8601String(),
        ];
    }
}
