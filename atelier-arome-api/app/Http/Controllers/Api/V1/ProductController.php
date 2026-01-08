<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of products.
     *
     * @queryParam category string Filter by category slug
     * @queryParam humour string Filter by humour (calming, uplifting, grounding, balancing)
     * @queryParam rarity string Filter by rarity (common, uncommon, rare, legendary)
     * @queryParam featured boolean Filter featured products only
     * @queryParam per_page integer Items per page (default: 15, max: 50)
     */
    public function index(Request $request): JsonResponse
    {
        $query = Product::query()
            ->with(['category', 'defaultVariant', 'primaryImage', 'tags'])
            ->where('is_active', true);

        // Filter by category
        if ($request->filled('category')) {
            $query->whereHas('category', function ($q) use ($request) {
                $q->where('slug', $request->category);
            });
        }

        // Filter by humour
        if ($request->filled('humour')) {
            $query->where('humour', $request->humour);
        }

        // Filter by rarity
        if ($request->filled('rarity')) {
            $query->where('rarity', $request->rarity);
        }

        // Filter featured products
        if ($request->boolean('featured')) {
            $query->where('is_featured', true);
        }

        // Search by name or description
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'ilike', "%{$search}%")
                    ->orWhere('description', 'ilike', "%{$search}%")
                    ->orWhere('latin_name', 'ilike', "%{$search}%");
            });
        }

        // Sorting
        $sortBy = $request->input('sort', 'sort_order');
        $sortDir = $request->input('order', 'asc');

        if (in_array($sortBy, ['name', 'sort_order', 'created_at'])) {
            $query->orderBy($sortBy, $sortDir === 'desc' ? 'desc' : 'asc');
        }

        // Pagination
        $perPage = min($request->input('per_page', 15), 50);
        $products = $query->paginate($perPage);

        return $this->success(
            ProductResource::collection($products)->response()->getData(true),
            'Products retrieved successfully'
        );
    }

    /**
     * Display the specified product.
     *
     * @param string $slug Product slug
     */
    public function show(string $slug): JsonResponse
    {
        $product = Product::query()
            ->with([
                'category',
                'variants.inventory',
                'images',
                'tags',
                'reviews' => function ($query) {
                    $query->whereApproved()->latest()->limit(5);
                },
            ])
            ->where('slug', $slug)
            ->where('is_active', true)
            ->firstOrFail();

        return $this->success(
            new ProductResource($product),
            'Product retrieved successfully'
        );
    }

    /**
     * Display featured products for homepage.
     */
    public function featured(): JsonResponse
    {
        $products = Product::query()
            ->with(['category', 'defaultVariant', 'primaryImage', 'tags'])
            ->where('is_active', true)
            ->where('is_featured', true)
            ->orderBy('sort_order')
            ->limit(6)
            ->get();

        return $this->success(
            ProductResource::collection($products),
            'Featured products retrieved successfully'
        );
    }
}
