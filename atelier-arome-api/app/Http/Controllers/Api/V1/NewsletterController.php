<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\NewsletterSubscriber;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    /**
     * Subscribe to newsletter.
     */
    public function subscribe(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'email' => ['required', 'email', 'max:255'],
        ]);

        $email = strtolower($validated['email']);

        // Check if already subscribed
        $existing = NewsletterSubscriber::where('email', $email)->first();

        if ($existing) {
            if ($existing->is_subscribed) {
                return $this->success(null, 'You are already subscribed to our newsletter.');
            }

            // Re-subscribe
            $existing->update([
                'is_subscribed' => true,
                'subscribed_at' => now(),
                'unsubscribed_at' => null,
            ]);

            return $this->success(null, 'Welcome back! You have been re-subscribed.');
        }

        // Create new subscriber
        $subscriber = NewsletterSubscriber::create([
            'email' => $email,
            'is_subscribed' => false, // Pending confirmation
        ]);

        // TODO: Send confirmation email with $subscriber->confirmation_token

        return $this->success(null, 'Please check your email to confirm your subscription.', 201);
    }

    /**
     * Confirm newsletter subscription.
     */
    public function confirm(string $token): JsonResponse
    {
        $subscriber = NewsletterSubscriber::where('confirmation_token', $token)->first();

        if (!$subscriber) {
            return $this->notFound('Invalid confirmation token.');
        }

        if ($subscriber->is_subscribed) {
            return $this->success(null, 'Your subscription is already confirmed.');
        }

        $subscriber->confirm();

        return $this->success(null, 'Thank you! Your subscription has been confirmed.');
    }

    /**
     * Unsubscribe from newsletter.
     */
    public function unsubscribe(string $token): JsonResponse
    {
        $subscriber = NewsletterSubscriber::where('unsubscribe_token', $token)->first();

        if (!$subscriber) {
            return $this->notFound('Invalid unsubscribe token.');
        }

        if (!$subscriber->is_subscribed) {
            return $this->success(null, 'You are already unsubscribed.');
        }

        $subscriber->unsubscribe();

        return $this->success(null, 'You have been successfully unsubscribed.');
    }
}
