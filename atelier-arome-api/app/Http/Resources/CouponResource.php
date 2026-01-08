<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CouponResource extends JsonResource
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
            'code' => $this->code,
            'type' => $this->type,
            'value' => (float) $this->value,
            'value_formatted' => $this->type === 'percentage'
                ? $this->value . '%'
                : 'SGD ' . number_format($this->value, 2),
            'minimum_amount' => $this->minimum_amount ? (float) $this->minimum_amount : null,
            'minimum_amount_formatted' => $this->minimum_amount
                ? 'SGD ' . number_format($this->minimum_amount, 2)
                : null,
            'maximum_amount' => $this->maximum_amount ? (float) $this->maximum_amount : null,
            'max_uses' => $this->max_uses,
            'max_uses_per_user' => $this->max_uses_per_user,
            'starts_at' => $this->starts_at?->toIso8601String(),
            'expires_at' => $this->expires_at?->toIso8601String(),
            'is_active' => $this->is_active,
        ];
    }
}
