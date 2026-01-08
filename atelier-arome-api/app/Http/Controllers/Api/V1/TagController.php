<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\TagResource;
use App\Models\Tag;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TagController extends Controller
{
    /**
     * Display a listing of tags.
     *
     * @queryParam type string Filter by tag type (scent_note, mood, benefit, etc.)
     */
    public function index(Request $request): JsonResponse
    {
        $query = Tag::query();

        if ($request->filled('type')) {
            $query->where('type', $request->type);
        }

        $tags = $query->orderBy('name')->get();

        return $this->success(
            TagResource::collection($tags),
            'Tags retrieved successfully'
        );
    }
}
