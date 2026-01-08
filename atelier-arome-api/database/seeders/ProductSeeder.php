<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\ProductVariant;
use App\Models\ProductImage;
use App\Models\Inventory;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $singlesCategory = \App\Models\Category::where('slug', 'singles')->first();
        $blendsCategory = \App\Models\Category::where('slug', 'blends')->first();
        $setsCategory = \App\Models\Category::where('slug', 'sets')->first();

        $tags = \App\Models\Tag::all()->keyBy('slug');

        $this->createLavenderOil($singlesCategory, $tags);
        $this->createBergamotOil($singlesCategory, $tags);
        $this->createPeaceHarmonyBlend($blendsCategory, $tags);
        $this->createEnergyBoostBlend($blendsCategory, $tags);
        $this->createCompleteSleepSet($setsCategory, $tags);
    }

    private function createLavenderOil($category, $tags)
    {
        $product = Product::create([
            'category_id' => $category->id,
            'name' => 'Lavender Essential Oil',
            'latin_name' => 'Lavandula angustifolia',
            'slug' => 'lavender-essential-oil',
            'description' => 'Pure lavender essential oil from Provence, France. Known for its calming properties and ability to promote restful sleep.',
            'long_description' => 'Our Lavender Essential Oil is steam-distilled from premium lavender flowers grown in the rolling hills of Provence. With its soothing floral aroma and therapeutic benefits, it is perfect for relaxation, stress relief, and promoting a peaceful night\'s sleep.',
            'humour' => 'calming',
            'rarity' => 'common',
            'season' => 'summer',
            'extraction_method' => 'Steam Distillation',
            'folio_number' => 'FOL-001',
            'is_featured' => true,
            'is_active' => true,
            'sort_order' => 1,
        ]);

        $this->createVariantsAndImages($product, 'LAV', [42.00, 98.00, 168.00]);
        $product->tags()->attach([$tags['lavender']->id, $tags['floral']->id, $tags['calming']->id]);
    }

    private function createBergamotOil($category, $tags)
    {
        $product = Product::create([
            'category_id' => $category->id,
            'name' => 'Bergamot Essential Oil',
            'latin_name' => 'Citrus bergamia',
            'slug' => 'bergamot-essential-oil',
            'description' => 'Cold-pressed bergamot essential oil from Calabria, Italy. Uplifting citrus scent that brightens mood and reduces anxiety.',
            'long_description' => 'Our Bergamot Essential Oil is cold-pressed from the peel of bergamot oranges grown in the sun-drenched groves of Calabria, Italy. Its bright, citrusy aroma instantly lifts the spirit and helps alleviate stress and anxiety.',
            'humour' => 'uplifting',
            'rarity' => 'common',
            'season' => 'spring',
            'extraction_method' => 'Cold Press',
            'folio_number' => 'FOL-002',
            'is_featured' => true,
            'is_active' => true,
            'sort_order' => 2,
        ]);

        $this->createVariantsAndImages($product, 'BER', [42.00, 98.00, 168.00]);
        $product->tags()->attach([$tags['bergamot']->id, $tags['citrus']->id, $tags['uplifting']->id]);
    }

    private function createPeaceHarmonyBlend($category, $tags)
    {
        $product = Product::create([
            'category_id' => $category->id,
            'name' => 'Peace & Harmony Blend',
            'slug' => 'peace-harmony-blend',
            'description' => 'A harmonious blend of lavender, ylang-ylang, and bergamot. Promotes tranquility and inner peace.',
            'long_description' => 'Our Peace & Harmony Blend is masterfully crafted to create a symphony of calming botanicals. Lavender brings its gentle floral notes, ylang-ylang adds deep, sweet undertones, while bergamot provides a bright citrus lift. Perfect for meditation, yoga, or unwinding after a long day.',
            'humour' => 'calming',
            'rarity' => 'limited',
            'season' => 'winter',
            'extraction_method' => 'Custom Blend',
            'folio_number' => 'FOL-010',
            'is_featured' => true,
            'is_active' => true,
            'sort_order' => 3,
        ]);

        $this->createVariantsAndImages($product, 'PHB', [48.00, 118.00, 198.00]);
        $product->tags()->attach([$tags['floral']->id, $tags['woody']->id, $tags['calming']->id]);
    }

    private function createEnergyBoostBlend($category, $tags)
    {
        $product = Product::create([
            'category_id' => $category->id,
            'name' => 'Energy Boost Blend',
            'slug' => 'energy-boost-blend',
            'description' => 'An invigorating blend of lemon, peppermint, and rosemary. Awakens the mind and sharpens focus.',
            'long_description' => 'Our Energy Boost Blend combines the zesty brightness of lemon, the cooling clarity of peppermint, and the herbal sharpness of rosemary. This powerful trio works synergistically to awaken your mind, enhance concentration, and provide natural energy without caffeine jitters.',
            'humour' => 'uplifting',
            'rarity' => 'rare',
            'season' => 'summer',
            'extraction_method' => 'Custom Blend',
            'folio_number' => 'FOL-011',
            'is_featured' => false,
            'is_active' => true,
            'sort_order' => 4,
        ]);

        $this->createVariantsAndImages($product, 'EBB', [45.00, 108.00, 188.00]);
        $product->tags()->attach([$tags['citrus']->id, $tags['herbal']->id, $tags['uplifting']->id]);
    }

    private function createCompleteSleepSet($category, $tags)
    {
        $product = Product::create([
            'category_id' => $category->id,
            'name' => 'Complete Sleep Set',
            'slug' => 'complete-sleep-set',
            'description' => 'A comprehensive sleep kit featuring Lavender, Chamomile, and Peace & Harmony Blend. Perfect for restful nights.',
            'long_description' => 'Our Complete Sleep Set is the ultimate gift for anyone seeking better sleep. Includes 15ml bottles of our premium Lavender and Chamomile essential oils, plus a 10ml Peace & Harmony Blend. Presented in a beautiful illuminated box with usage guide.',
            'humour' => 'calming',
            'rarity' => 'limited',
            'season' => 'winter',
            'extraction_method' => 'Curated Set',
            'folio_number' => 'FOL-020',
            'is_featured' => true,
            'is_active' => true,
            'sort_order' => 5,
        ]);

        $variant = ProductVariant::create([
            'product_id' => $product->id,
            'name' => 'Complete Set',
            'sku' => 'SLEEP-SET',
            'price_sgd' => 298.00,
            'weight_grams' => 500,
            'is_default' => true,
            'is_active' => true,
        ]);

        $this->createImages($product);
        $product->tags()->attach([$tags['floral']->id, $tags['herbal']->id, $tags['calming']->id]);

        Inventory::create([
            'variant_id' => $variant->id,
            'quantity' => 20,
            'reserved_quantity' => 0,
            'low_stock_threshold' => 5,
        ]);
    }

    private function createVariantsAndImages($product, $skuPrefix, $prices)
    {
        $sizes = ['5ml', '15ml', '30ml'];

        foreach ($sizes as $index => $size) {
            $variant = ProductVariant::create([
                'product_id' => $product->id,
                'name' => $size,
                'sku' => sprintf('%s-%03d', $skuPrefix, ($index + 1) * 5),
                'price_sgd' => $prices[$index],
                'weight_grams' => $index === 0 ? 20 : ($index === 1 ? 50 : 100),
                'is_default' => $index === 0,
                'is_active' => true,
            ]);

            Inventory::create([
                'variant_id' => $variant->id,
                'quantity' => $product->rarity === 'common' ? 100 : ($product->rarity === 'rare' ? 50 : 20),
                'reserved_quantity' => 0,
                'low_stock_threshold' => 5,
            ]);
        }

        $this->createImages($product);
    }

    private function createImages($product)
    {
        $images = [
            [
                'url' => 'https://res.cloudinary.com/atelier-arome/image/upload/v1/products/primary.jpg',
                'alt_text' => $product->name . ' - Primary Image',
                'sort_order' => 1,
                'is_primary' => true,
            ],
            [
                'url' => 'https://res.cloudinary.com/atelier-arome/image/upload/v1/products/angle-2.jpg',
                'alt_text' => $product->name . ' - Angle 2',
                'sort_order' => 2,
                'is_primary' => false,
            ],
            [
                'url' => 'https://res.cloudinary.com/atelier-arome/image/upload/v1/products/angle-3.jpg',
                'alt_text' => $product->name . ' - Angle 3',
                'sort_order' => 3,
                'is_primary' => false,
            ],
        ];

        foreach ($images as $image) {
            ProductImage::create(array_merge($image, ['product_id' => $product->id]));
        }
    }
}
