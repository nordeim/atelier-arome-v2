<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartItemResource extends JsonResource
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
            'variant' => new ProductVariantResource($this->whenLoaded('variant')),
            'product' => $this->when($this->relationLoaded('variant') && $this->variant->relationLoaded('product'), function () {
                return new ProductResource($this->variant->product);
            }),
            'quantity' => $this->quantity,
            'unit_price' => (float) $this->unit_price,
            'unit_price_formatted' => 'SGD ' . number_format($this->unit_price, 2),
            'line_total' => (float) ($this->quantity * $this->unit_price),
            'line_total_formatted' => 'SGD ' . number_format($this->quantity * $this->unit_price, 2),
        ];
    }
}
