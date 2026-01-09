<?php

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\CartController;
use App\Http\Controllers\Api\V1\CategoryController;
use App\Http\Controllers\Api\V1\NewsletterController;
use App\Http\Controllers\Api\V1\ProductController;
use App\Http\Controllers\Api\V1\TagController;
use App\Http\Controllers\Api\V1\TestimonialController;
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
    Route::get('/', [ProductController::class, 'index']);
    Route::get('/featured', [ProductController::class, 'featured']);
    Route::get('/{slug}', [ProductController::class, 'show']);
});

// Categories
Route::prefix('categories')->group(function () {
    Route::get('/', [CategoryController::class, 'index']);
    Route::get('/{slug}', [CategoryController::class, 'show']);
});

// Tags
Route::get('/tags', [TagController::class, 'index']);

// Testimonials
Route::get('/testimonials', [TestimonialController::class, 'index']);

// Newsletter
Route::prefix('newsletter')->group(function () {
    Route::post('/subscribe', [NewsletterController::class, 'subscribe']);
    Route::get('/confirm/{token}', [NewsletterController::class, 'confirm']);
    Route::get('/unsubscribe/{token}', [NewsletterController::class, 'unsubscribe']);
});

/*
|--------------------------------------------------------------------------
| Cart Routes (Works for both guests and authenticated users)
|--------------------------------------------------------------------------
*/

Route::prefix('cart')->group(function () {
    Route::get('/', [CartController::class, 'show']);
    Route::post('/items', [CartController::class, 'addItem']);
    Route::put('/items/{id}', [CartController::class, 'updateItem']);
    Route::delete('/items/{id}', [CartController::class, 'removeItem']);
    Route::post('/coupon', [CartController::class, 'applyCoupon']);
    Route::delete('/coupon', [CartController::class, 'removeCoupon']);
});

/*
|--------------------------------------------------------------------------
| Authentication Routes (Public)
|--------------------------------------------------------------------------
*/

Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
    Route::post('/reset-password', [AuthController::class, 'resetPassword']);
});

/*
|--------------------------------------------------------------------------
| Protected Routes (Authentication Required)
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {
    // User profile
    Route::prefix('user')->group(function () {
        Route::get('/', [AuthController::class, 'user']);
        Route::put('/', [AuthController::class, 'updateProfile']);
        Route::post('/logout', [AuthController::class, 'logout']);
    });

    // Addresses (placeholder - to be implemented)
    Route::prefix('addresses')->group(function () {
        Route::get('/', fn() => response()->json(['message' => 'Address index - Coming soon']));
        Route::post('/', fn() => response()->json(['message' => 'Address create - Coming soon']));
        Route::put('/{id}', fn() => response()->json(['message' => 'Address update - Coming soon']));
        Route::delete('/{id}', fn() => response()->json(['message' => 'Address delete - Coming soon']));
    });

    // Orders (placeholder - to be implemented)
    Route::prefix('orders')->group(function () {
        Route::get('/', fn() => response()->json(['message' => 'Order index - Coming soon']));
        Route::get('/{orderNumber}', fn() => response()->json(['message' => 'Order show - Coming soon']));
    });

    // Wishlist (placeholder - to be implemented)
    Route::prefix('wishlist')->group(function () {
        Route::get('/', fn() => response()->json(['message' => 'Wishlist show - Coming soon']));
        Route::post('/items', fn() => response()->json(['message' => 'Wishlist add - Coming soon']));
        Route::delete('/items/{productId}', fn() => response()->json(['message' => 'Wishlist remove - Coming soon']));
    });

    // Reviews (placeholder - to be implemented)
    Route::prefix('reviews')->group(function () {
        Route::post('/', fn() => response()->json(['message' => 'Review create - Coming soon']));
        Route::put('/{id}', fn() => response()->json(['message' => 'Review update - Coming soon']));
        Route::delete('/{id}', fn() => response()->json(['message' => 'Review delete - Coming soon']));
    });

    // Checkout (placeholder - to be implemented)
    Route::prefix('checkout')->group(function () {
        Route::post('/initiate', fn() => response()->json(['message' => 'Checkout initiate - Coming soon']));
        Route::post('/complete', fn() => response()->json(['message' => 'Checkout complete - Coming soon']));
    });
});
