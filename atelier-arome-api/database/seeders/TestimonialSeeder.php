<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Testimonial;

class TestimonialSeeder extends Seeder
{
    public function run(): void
    {
        Testimonial::create([
            'author_name' => 'Sarah Chen',
            'author_title' => 'Yoga Instructor',
            'quote' => 'The lavender oil transformed my sleep routine. I wake up feeling refreshed and centered every morning.',
            'is_verified' => true,
            'is_illuminated' => true,
            'folio_reference' => 'FOL-001',
            'sort_order' => 1,
            'is_active' => true,
        ]);

        Testimonial::create([
            'author_name' => 'Michael Lim',
            'author_title' => 'Software Engineer',
            'quote' => 'Best essential oils I have ever used. The bergamot instantly lifts my mood during stressful work days.',
            'is_verified' => true,
            'is_illuminated' => true,
            'folio_reference' => 'FOL-002',
            'sort_order' => 2,
            'is_active' => true,
        ]);

        Testimonial::create([
            'author_name' => 'Emily Wong',
            'author_title' => 'Meditation Guide',
            'quote' => 'The Peace & Harmony blend is perfectly balanced. Perfect for my evening meditation practice.',
            'is_verified' => true,
            'is_illuminated' => true,
            'folio_reference' => 'FOL-003',
            'sort_order' => 3,
            'is_active' => true,
        ]);

        Testimonial::create([
            'author_name' => 'James Lee',
            'author_title' => 'Fitness Coach',
            'quote' => 'I gifted the Complete Sleep Set to my sister for her birthday. She absolutely loves it!',
            'is_verified' => true,
            'is_illuminated' => false,
            'folio_reference' => null,
            'sort_order' => 4,
            'is_active' => true,
        ]);

        Testimonial::create([
            'author_name' => 'Amanda Tan',
            'author_title' => 'Wellness Blogger',
            'quote' => 'The Energy Boost blend has become my go-to for afternoon meetings. Crisp, clean, and revitalizing.',
            'is_verified' => true,
            'is_illuminated' => false,
            'folio_reference' => null,
            'sort_order' => 5,
            'is_active' => true,
        ]);
    }
}
