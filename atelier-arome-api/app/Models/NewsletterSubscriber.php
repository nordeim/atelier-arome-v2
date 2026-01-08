<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class NewsletterSubscriber extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'email',
        'confirmation_token',
        'unsubscribe_token',
        'subscribed_at',
        'unsubscribed_at',
        'is_subscribed',
    ];

    protected function casts(): array
    {
        return [
            'subscribed_at' => 'datetime',
            'unsubscribed_at' => 'datetime',
            'is_subscribed' => 'boolean',
        ];
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($subscriber) {
            if (empty($subscriber->confirmation_token)) {
                $subscriber->confirmation_token = Str::random(64);
            }
            if (empty($subscriber->unsubscribe_token)) {
                $subscriber->unsubscribe_token = Str::random(64);
            }
        });
    }

    public function scopeWhereSubscribed($query)
    {
        return $query->where('is_subscribed', true);
    }

    public function scopeWherePending($query)
    {
        return $query->whereNull('subscribed_at');
    }

    public function scopeWhereEmail($query, string $email)
    {
        return $query->where('email', strtolower($email));
    }

    /**
     * Confirm the subscription.
     */
    public function confirm(): void
    {
        $this->update([
            'is_subscribed' => true,
            'subscribed_at' => now(),
        ]);
    }

    /**
     * Unsubscribe from the newsletter.
     */
    public function unsubscribe(): void
    {
        $this->update([
            'is_subscribed' => false,
            'unsubscribed_at' => now(),
        ]);
    }
}
