<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class CartItem extends Model
{
    use HasFactory, HasUuids;

    protected \$fillable = [
        'cart_id',
        'variant_id',
        'quantity',
        'unit_price',
    ];

    protected function casts(): array
    {
        return [
            'unit_price' => 'decimal:2',
            'quantity' => 'integer',
        ];
    }

    public function cart(): BelongsTo
    {
        return \$this->belongsTo(Cart::class);
    }

    public function variant(): BelongsTo
    {
        return \$this->belongsTo(ProductVariant::class);
    }

    public function product()
    {
        return \$this->variant->product;
    }

    public function getLineTotalAttribute(): string
    {
        return \$this->quantity * \$this->unit_price;
    }
}
HEREDOC
