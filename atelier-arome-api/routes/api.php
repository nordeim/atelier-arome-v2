<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group.
|
| API Prefix: /api/v1
|
*/

// Health check
Route::get('/health', function () {
    return response()->json([
        'success' => true,
        'message' => 'Atelier Arôme API is healthy',
        'version' => 'v1',
        'timestamp' => now()->toIso8601String(),
    ]);
});

/*
|--------------------------------------------------------------------------
| Public Routes (No Authentication Required)
|--------------------------------------------------------------------------
*/

// Products
Route::prefix('products')->group(function () {
    Route::get('/', fn() => response()->json(['message' => 'Product index - Coming soon']));
    Route::get('/{slug}', fn() => response()->json(['message' => 'Product show - Coming soon']));
});

// Categories
Route::prefix('categories')->group(function () {
    Route::get('/', fn() => response()->json(['message' => 'Category index - Coming soon']));
    Route::get('/{slug}', fn() => response()->json(['message' => 'Category show - Coming soon']));
});

// Tags
Route::get('/tags', fn() => response()->json(['message' => 'Tag index - Coming soon']));

// Testimonials
Route::get('/testimonials', fn() => response()->json(['message' => 'Testimonial index - Coming soon']));

// Newsletter
Route::prefix('newsletter')->group(function () {
    Route::post('/subscribe', fn() => response()->json(['message' => 'Newsletter subscribe - Coming soon']));
    Route::get('/confirm/{token}', fn() => response()->json(['message' => 'Newsletter confirm - Coming soon']));
    Route::get('/unsubscribe/{token}', fn() => response()->json(['message' => 'Newsletter unsubscribe - Coming soon']));
});

/*
|--------------------------------------------------------------------------
| Cart Routes (Session-based for guests, Auth for users)
|--------------------------------------------------------------------------
*/

Route::prefix('cart')->group(function () {
    Route::get('/', fn() => response()->json(['message' => 'Cart show - Coming soon']));
    Route::post('/items', fn() => response()->json(['message' => 'Cart add item - Coming soon']));
    Route::put('/items/{id}', fn() => response()->json(['message' => 'Cart update item - Coming soon']));
    Route::delete('/items/{id}', fn() => response()->json(['message' => 'Cart remove item - Coming soon']));
    Route::post('/coupon', fn() => response()->json(['message' => 'Cart apply coupon - Coming soon']));
    Route::delete('/coupon', fn() => response()->json(['message' => 'Cart remove coupon - Coming soon']));
});

/*
|--------------------------------------------------------------------------
| Authentication Routes
|--------------------------------------------------------------------------
*/

Route::prefix('auth')->group(function () {
    Route::post('/register', fn() => response()->json(['message' => 'Register - Coming soon']));
    Route::post('/login', fn() => response()->json(['message' => 'Login - Coming soon']));
    Route::post('/forgot-password', fn() => response()->json(['message' => 'Forgot password - Coming soon']));
    Route::post('/reset-password', fn() => response()->json(['message' => 'Reset password - Coming soon']));
});

/*
|--------------------------------------------------------------------------
| Protected Routes (Authentication Required)
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {
    // User profile
    Route::prefix('user')->group(function () {
        Route::get('/', fn() => response()->json(['message' => 'User profile - Coming soon']));
        Route::put('/', fn() => response()->json(['message' => 'Update profile - Coming soon']));
        Route::post('/logout', fn() => response()->json(['message' => 'Logout - Coming soon']));
    });

    // Addresses
    Route::prefix('addresses')->group(function () {
        Route::get('/', fn() => response()->json(['message' => 'Address index - Coming soon']));
        Route::post('/', fn() => response()->json(['message' => 'Address create - Coming soon']));
        Route::put('/{id}', fn() => response()->json(['message' => 'Address update - Coming soon']));
        Route::delete('/{id}', fn() => response()->json(['message' => 'Address delete - Coming soon']));
    });

    // Orders
    Route::prefix('orders')->group(function () {
        Route::get('/', fn() => response()->json(['message' => 'Order index - Coming soon']));
        Route::get('/{orderNumber}', fn() => response()->json(['message' => 'Order show - Coming soon']));
    });

    // Wishlist
    Route::prefix('wishlist')->group(function () {
        Route::get('/', fn() => response()->json(['message' => 'Wishlist show - Coming soon']));
        Route::post('/items', fn() => response()->json(['message' => 'Wishlist add - Coming soon']));
        Route::delete('/items/{productId}', fn() => response()->json(['message' => 'Wishlist remove - Coming soon']));
    });

    // Reviews
    Route::prefix('reviews')->group(function () {
        Route::post('/', fn() => response()->json(['message' => 'Review create - Coming soon']));
        Route::put('/{id}', fn() => response()->json(['message' => 'Review update - Coming soon']));
        Route::delete('/{id}', fn() => response()->json(['message' => 'Review delete - Coming soon']));
    });

    // Checkout
    Route::prefix('checkout')->group(function () {
        Route::post('/initiate', fn() => response()->json(['message' => 'Checkout initiate - Coming soon']));
        Route::post('/complete', fn() => response()->json(['message' => 'Checkout complete - Coming soon']));
    });
});
