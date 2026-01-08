<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CouponUsage extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'coupon_id',
        'user_id',
        'order_id',
    ];

    public function coupon(): BelongsTo
    {
        return $this->belongsTo(Coupon::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    public function scopeWhereUser($query, string $userId)
    {
        return $query->where('user_id', $userId);
    }

    public function scopeWhereCoupon($query, string $couponId)
    {
        return $query->where('coupon_id', $couponId);
    }
}
