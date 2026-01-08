<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of categories.
     */
    public function index(): JsonResponse
    {
        $categories = Category::query()
            ->where('is_active', true)
            ->withCount('products')
            ->orderBy('sort_order')
            ->get();

        return $this->success(
            CategoryResource::collection($categories),
            'Categories retrieved successfully'
        );
    }

    /**
     * Display the specified category with its products.
     *
     * @param string $slug Category slug
     */
    public function show(string $slug, Request $request): JsonResponse
    {
        $category = Category::query()
            ->where('slug', $slug)
            ->where('is_active', true)
            ->withCount('products')
            ->firstOrFail();

        // Get products in this category with pagination
        $perPage = min($request->input('per_page', 15), 50);

        $products = $category->products()
            ->with(['defaultVariant', 'primaryImage', 'tags'])
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->paginate($perPage);

        return $this->success([
            'category' => new CategoryResource($category),
            'products' => ProductResource::collection($products)->response()->getData(true),
        ], 'Category retrieved successfully');
    }
}
