<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ReviewResource;
use App\Models\Order;
use App\Models\Product;
use App\Models\Review;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    /**
     * Create a new review.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'product_id' => ['required', 'uuid', 'exists:products,id'],
            'rating' => ['required', 'integer', 'min:1', 'max:5'],
            'title' => ['required', 'string', 'max:255'],
            'body' => ['required', 'string', 'max:2000'],
        ]);

        $user = $request->user();

        // Check if user already reviewed this product
        $existingReview = Review::where('user_id', $user->id)
            ->where('product_id', $validated['product_id'])
            ->first();

        if ($existingReview) {
            return $this->error('You have already reviewed this product', 422);
        }

        // Check if user has purchased this product (verified purchase)
        $verifiedPurchase = Order::where('user_id', $user->id)
            ->whereIn('status', ['completed', 'delivered'])
            ->whereHas('items', function ($query) use ($validated) {
                $query->whereHas('variant', function ($q) use ($validated) {
                    $q->where('product_id', $validated['product_id']);
                });
            })
            ->exists();

        // Find relevant order if verified
        $orderId = null;
        if ($verifiedPurchase) {
            $order = Order::where('user_id', $user->id)
                ->whereIn('status', ['completed', 'delivered'])
                ->whereHas('items', function ($query) use ($validated) {
                    $query->whereHas('variant', function ($q) use ($validated) {
                        $q->where('product_id', $validated['product_id']);
                    });
                })
                ->first();
            $orderId = $order?->id;
        }

        $review = Review::create([
            'user_id' => $user->id,
            'product_id' => $validated['product_id'],
            'order_id' => $orderId,
            'rating' => $validated['rating'],
            'title' => $validated['title'],
            'body' => $validated['body'],
            'is_verified_purchase' => $verifiedPurchase,
            'is_approved' => false, // Requires admin approval
        ]);

        return $this->created(
            new ReviewResource($review),
            'Review submitted for approval'
        );
    }

    /**
     * Update an existing review.
     */
    public function update(Request $request, string $id): JsonResponse
    {
        $review = Review::where('user_id', $request->user()->id)
            ->findOrFail($id);

        $validated = $request->validate([
            'rating' => ['sometimes', 'integer', 'min:1', 'max:5'],
            'title' => ['sometimes', 'string', 'max:255'],
            'body' => ['sometimes', 'string', 'max:2000'],
        ]);

        $review->update($validated);

        // Re-submit for approval if content changed
        if (isset($validated['title']) || isset($validated['body'])) {
            $review->update(['is_approved' => false]);
        }

        return $this->success(
            new ReviewResource($review->fresh()),
            'Review updated successfully'
        );
    }

    /**
     * Delete a review.
     */
    public function destroy(Request $request, string $id): JsonResponse
    {
        $review = Review::where('user_id', $request->user()->id)
            ->findOrFail($id);

        $review->delete();

        return $this->success(null, 'Review deleted successfully');
    }
}
