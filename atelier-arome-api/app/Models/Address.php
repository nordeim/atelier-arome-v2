<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Address extends Model
{
    use HasFactory, HasUuids, SoftDeletes;

    protected $fillable = [
        'user_id',
        'type',
        'first_name',
        'last_name',
        'company',
        'address_line1',
        'address_line2',
        'city',
        'postal_code',
        'country',
        'phone',
        'is_default',
    ];

    protected function casts(): array
    {
        return [
            'type' => 'string',
            'is_default' => 'boolean',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function shippingOrders(): HasMany
    {
        return $this->hasMany(Order::class, 'shipping_address_id');
    }

    public function billingOrders(): HasMany
    {
        return $this->hasMany(Order::class, 'billing_address_id');
    }

    public function scopeWhereDefault($query)
    {
        return $query->where('is_default', true);
    }

    public function scopeWhereShipping($query)
    {
        return $query->where('type', 'shipping');
    }

    public function scopeWhereBilling($query)
    {
        return $query->where('type', 'billing');
    }
}
