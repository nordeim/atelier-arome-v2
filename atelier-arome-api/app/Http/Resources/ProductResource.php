<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'latin_name' => $this->latin_name,
            'description' => $this->description,
            'long_description' => $this->long_description,
            'humour' => $this->humour,
            'rarity' => $this->rarity,
            'season' => $this->season,
            'extraction_method' => $this->extraction_method,
            'folio_number' => $this->folio_number,
            'is_featured' => $this->is_featured,
            'is_active' => $this->is_active,
            'sort_order' => $this->sort_order,
            'meta_data' => $this->meta_data,
            'category' => new CategoryResource($this->whenLoaded('category')),
            'default_variant' => new ProductVariantResource($this->whenLoaded('defaultVariant')),
            'primary_image' => new ProductImageResource($this->whenLoaded('primaryImage')),
            'variants' => ProductVariantResource::collection($this->whenLoaded('variants')),
            'images' => ProductImageResource::collection($this->whenLoaded('images')),
            'tags' => TagResource::collection($this->whenLoaded('tags')),
            'created_at' => $this->created_at->toIso8601String(),
            'updated_at' => $this->updated_at->toIso8601String(),
        ];
    }
}
