<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductVariantResource extends JsonResource
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
            'name' => $this->name,
            'sku' => $this->sku,
            'price_sgd' => (float) $this->price_sgd,
            'price_sgd_formatted' => 'SGD ' . number_format($this->price_sgd, 2),
            'compare_at_price' => $this->compare_at_price ? (float) $this->compare_at_price : null,
            'compare_at_price_formatted' => $this->compare_at_price
                ? 'SGD ' . number_format($this->compare_at_price, 2)
                : null,
            'weight_grams' => $this->weight_grams,
            'is_default' => $this->is_default,
            'is_active' => $this->is_active,
            'inventory' => $this->when($this->relationLoaded('inventory'), function () {
                return [
                    'quantity' => $this->inventory->quantity,
                    'in_stock' => $this->inventory->quantity > 0,
                ];
            }),
        ];
    }
}
