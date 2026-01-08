<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Cart extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'user_id',
        'session_id',
        'coupon_id',
        'subtotal',
        'discount_amount',
        'gst_amount',
        'total',
        'expires_at',
    ];

    protected function casts(): array
    {
        return [
            'expires_at' => 'datetime',
            'subtotal' => 'decimal:2',
            'discount_amount' => 'decimal:2',
            'gst_amount' => 'decimal:2',
            'total' => 'decimal:2',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function coupon(): BelongsTo
    {
        return $this->belongsTo(Coupon::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(CartItem::class);
    }

    public function activeCoupon(): HasOne
    {
        return $this->hasOne(Coupon::class)->where(function ($query) {
            $query->where('is_active', true)
                ->where('starts_at', '<=', now())
                ->where('expires_at', '>=', now());
        });
    }

    public function scopeWhereActive($query)
    {
        return $query->where('expires_at', '>', now());
    }

    public function getSubtotalAttribute(): string
    {
        return $this->items()->sum(function ($item) {
            return $item->quantity * $item->unit_price;
        });
    }

    public function getDiscountAmountAttribute(): string
    {
        return $this->coupon ? $this->coupon->value : 0;
    }

    public function getGstAmountAttribute(): string
    {
        return round($this->getSubtotalAttribute() * 0.09, 2);
    }

    public function getTotalAttribute(): string
    {
        return $this->getSubtotalAttribute() - $this->getDiscountAmountAttribute() + $this->getGstAmountAttribute();
    }
}
