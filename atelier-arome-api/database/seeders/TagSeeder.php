<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tag;

class TagSeeder extends Seeder
{
    public function run(): void
    {
        $tags = [
            'lavender', 'rose', 'jasmine', 'ylang-ylang',
            'bergamot', 'lemon', 'sweet-orange', 'grapefruit',
            'sandalwood', 'cedarwood', 'pine',
            'eucalyptus', 'peppermint', 'tea-tree',
            'cinnamon', 'clove', 'ginger',
            'vetiver', 'patchouli',
            'floral', 'citrus', 'woody', 'herbal',
            'calming', 'uplifting', 'grounding', 'clarifying',
        ];

        foreach ($tags as $tag) {
            Tag::create([
                'name' => ucfirst(str_replace('-', ' ', $tag)),
                'slug' => $tag,
            ]);
        }
    }
}
