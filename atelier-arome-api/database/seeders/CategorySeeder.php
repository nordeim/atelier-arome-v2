<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        Category::create([
            'name' => 'Singles',
            'slug' => 'singles',
            'description' => 'Pure single essential oils',
            'sort_order' => 1,
            'is_active' => true,
        ]);

        Category::create([
            'name' => 'Blends',
            'slug' => 'blends',
            'description' => 'Curated essential oil blends',
            'sort_order' => 2,
            'is_active' => true,
        ]);

        Category::create([
            'name' => 'Sets',
            'slug' => 'sets',
            'description' => 'Essential oil gift sets',
            'sort_order' => 3,
            'is_active' => true,
        ]);

        Category::create([
            'name' => 'Gifts',
            'slug' => 'gifts',
            'description' => 'Aromatherapy gifts',
            'sort_order' => 4,
            'is_active' => true,
        ]);
    }
}
