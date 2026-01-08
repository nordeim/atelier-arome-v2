<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderItemResource extends JsonResource
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
            'product_name' => $this->product_name,
            'variant_name' => $this->variant_name,
            'sku' => $this->sku,
            'quantity' => $this->quantity,
            'unit_price' => (float) $this->unit_price,
            'unit_price_formatted' => 'SGD ' . number_format($this->unit_price, 2),
            'total' => (float) $this->total,
            'total_formatted' => 'SGD ' . number_format($this->total, 2),
        ];
    }
}
