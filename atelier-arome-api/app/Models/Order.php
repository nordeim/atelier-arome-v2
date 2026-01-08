<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Order extends Model
{
    use HasFactory, HasUuids, SoftDeletes;

    protected $fillable = [
        'user_id',
        'order_number',
        'status',
        'payment_status',
        'shipping_address_id',
        'billing_address_id',
        'coupon_id',
        'subtotal',
        'discount_amount',
        'gst_amount',
        'shipping_amount',
        'total',
        'tracking_number',
        'notes',
        'admin_notes',
    ];

    protected function casts(): array
    {
        return [
            'subtotal' => 'decimal:2',
            'discount_amount' => 'decimal:2',
            'gst_amount' => 'decimal:2',
            'shipping_amount' => 'decimal:2',
            'total' => 'decimal:2',
        ];
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($order) {
            if (empty($order->order_number)) {
                $date = now()->format('Ymd');
                $sequence = Order::whereDate('created_at', '>=', now()->startOfDay())->max('order_number') ?? 0;
                $sequence++;
                $order->order_number = 'AA-' . $date . '-' . str_pad($sequence, 4, '0');
            }
        });
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function shippingAddress(): BelongsTo
    {
        return $this->belongsTo(Address::class, 'shipping_address_id');
    }

    public function billingAddress(): BelongsTo
    {
        return $this->belongsTo(Address::class, 'billing_address_id');
    }

    public function coupon()
    {
        return $this->belongsTo(Coupon::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    public function payments(): HasMany
    {
        return $this->hasMany(Payment::class);
    }

    public function primaryPayment(): HasOne
    {
        return $this->hasOne(Payment::class)->where('status', 'completed')->latest();
    }

    public function scopeWhereStatus($query, string $status)
    {
        return $query->where('status', $status);
    }

    public function scopeWherePaymentStatus($query, string $status)
    {
        return $query->where('payment_status', $status);
    }

    public function scopeWhereUser($query, string $userId)
    {
        return $query->where('user_id', $userId);
    }

    public function getFormattedOrderNumberAttribute(): string
    {
        return strtoupper($this->order_number);
    }

    public function getStatusBadgeAttribute(): array
    {
        $badges = [
            'pending' => ['bg-yellow-100', 'text-yellow-800'],
            'processing' => ['bg-blue-100', 'text-blue-800'],
            'shipped' => ['bg-green-100', 'text-green-800'],
            'delivered' => ['bg-green-500', 'text-green-900'],
            'cancelled' => ['bg-red-100', 'text-red-800'],
        ];

        return $badges[$this->status] ?? ['bg-gray-100', 'text-gray-800'];
    }
}
