<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Coupon extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'code',
        'type',
        'value',
        'minimum_amount',
        'maximum_amount',
        'max_uses',
        'max_uses_per_user',
        'starts_at',
        'expires_at',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'value' => 'decimal:2',
            'minimum_amount' => 'decimal:2',
            'maximum_amount' => 'decimal:2',
            'max_uses' => 'integer',
            'max_uses_per_user' => 'integer',
            'starts_at' => 'datetime',
            'expires_at' => 'datetime',
            'is_active' => 'boolean',
            'type' => 'string',
        ];
    }

    public function usages(): HasMany
    {
        return $this->hasMany(CouponUsage::class);
    }

    public function carts(): HasMany
    {
        return $this->hasMany(Cart::class);
    }

    public function orders(): HasMany
    {
        return $this->hasMany(Order::class);
    }

    public function scopeWhereActive($query)
    {
        return $query->where('is_active', true)
            ->where(function ($query) {
                $query->where('starts_at', '<=', now())
                    ->where('expires_at', '>=', now());
            });
    }

    public function scopeWhereCode($query, string $code)
    {
        return $query->where('code', strtoupper($code));
    }

    public function getIsActiveAttribute(): bool
    {
        return $this->is_active
            && now()->between($this->starts_at, $this->expires_at);
    }

    public function getIsExpiredAttribute(): bool
    {
        return $this->expires_at->isPast();
    }
}
