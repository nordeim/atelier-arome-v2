<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class InventoryMovement extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'inventory_id',
        'order_id',
        'type',
        'quantity',
        'reference',
        'notes',
    ];

    protected function casts(): array
    {
        return [
            'quantity' => 'integer',
            'type' => 'string',
        ];
    }

    public function inventory(): BelongsTo
    {
        return $this->belongsTo(Inventory::class);
    }

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    public function scopeWhereType($query, string $type)
    {
        return $query->where('type', $type);
    }

    public function scopeWhereOrder($query, string $orderId)
    {
        return $query->where('order_id', $orderId);
    }

    public function scopeWherePurchase($query)
    {
        return $query->where('type', 'purchase');
    }

    public function scopeWhereSale($query)
    {
        return $query->where('type', 'sale');
    }

    public function scopeWhereAdjustment($query)
    {
        return $query->where('type', 'adjustment');
    }

    public function scopeWhereReturn($query)
    {
        return $query->where('type', 'return');
    }
}
