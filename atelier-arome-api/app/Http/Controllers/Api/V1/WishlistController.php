<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Models\Wishlist;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class WishlistController extends Controller
{
    /**
     * Get the user's wishlist with items.
     */
    public function show(Request $request): JsonResponse
    {
        $wishlist = $this->getOrCreateWishlist($request->user());

        $wishlist->load('items.product.primaryImage', 'items.product.defaultVariant');

        $products = $wishlist->items->map(function ($item) {
            return new ProductResource($item->product);
        });

        return $this->success([
            'id' => $wishlist->id,
            'items' => $products,
            'items_count' => $wishlist->items->count(),
        ], 'Wishlist retrieved successfully');
    }

    /**
     * Add a product to the wishlist.
     */
    public function addItem(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'product_id' => ['required', 'uuid', 'exists:products,id'],
        ]);

        $wishlist = $this->getOrCreateWishlist($request->user());

        // Check if already in wishlist
        $existing = $wishlist->items()->where('product_id', $validated['product_id'])->first();

        if ($existing) {
            return $this->success(null, 'Product is already in your wishlist');
        }

        $wishlist->items()->create([
            'product_id' => $validated['product_id'],
        ]);

        return $this->created(null, 'Product added to wishlist');
    }

    /**
     * Remove a product from the wishlist.
     */
    public function removeItem(Request $request, string $productId): JsonResponse
    {
        $wishlist = $this->getOrCreateWishlist($request->user());

        $item = $wishlist->items()->where('product_id', $productId)->first();

        if (!$item) {
            return $this->notFound('Product not found in wishlist');
        }

        $item->delete();

        return $this->success(null, 'Product removed from wishlist');
    }

    /**
     * Get or create wishlist for user.
     */
    private function getOrCreateWishlist($user): Wishlist
    {
        $wishlist = Wishlist::where('user_id', $user->id)->first();

        if (!$wishlist) {
            $wishlist = Wishlist::create([
                'user_id' => $user->id,
                'name' => 'My Wishlist',
            ]);
        }

        return $wishlist;
    }
}
