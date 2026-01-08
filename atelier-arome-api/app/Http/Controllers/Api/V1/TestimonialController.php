<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\TestimonialResource;
use App\Models\Testimonial;
use Illuminate\Http\JsonResponse;

class TestimonialController extends Controller
{
    /**
     * Display a listing of illuminated testimonials for the homepage.
     */
    public function index(): JsonResponse
    {
        $testimonials = Testimonial::query()
            ->where('is_illuminated', true)
            ->latest()
            ->limit(6)
            ->get();

        return $this->success(
            TestimonialResource::collection($testimonials),
            'Testimonials retrieved successfully'
        );
    }
}
