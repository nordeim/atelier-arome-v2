<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
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
            'items' => CartItemResource::collection($this->whenLoaded('items')),
            'items_count' => $this->when($this->relationLoaded('items'), fn() => $this->items->count()),
            'subtotal' => (float) $this->subtotal,
            'subtotal_formatted' => 'SGD ' . number_format($this->subtotal, 2),
            'discount_amount' => (float) $this->discount_amount,
            'discount_amount_formatted' => 'SGD ' . number_format($this->discount_amount, 2),
            'gst_amount' => (float) $this->gst_amount,
            'gst_amount_formatted' => 'SGD ' . number_format($this->gst_amount, 2),
            'total' => (float) $this->total,
            'total_formatted' => 'SGD ' . number_format($this->total, 2),
            'coupon' => new CouponResource($this->whenLoaded('coupon')),
            'expires_at' => $this->expires_at?->toIso8601String(),
            'created_at' => $this->created_at->toIso8601String(),
            'updated_at' => $this->updated_at->toIso8601String(),
        ];
    }
}
