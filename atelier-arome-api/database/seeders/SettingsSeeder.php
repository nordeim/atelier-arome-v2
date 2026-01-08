<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Setting;

class SettingsSeeder extends Seeder
{
    public function run(): void
    {
        Setting::create([
            'key' => 'gst_rate',
            'value' => '0.09',
            'type' => 'string',
        ]);

        Setting::create([
            'key' => 'currency',
            'value' => 'SGD',
            'type' => 'string',
        ]);

        Setting::create([
            'key' => 'currency_symbol',
            'value' => '$',
            'type' => 'string',
        ]);

        Setting::create([
            'key' => 'store_name',
            'value' => 'Atelier Arôme',
            'type' => 'string',
        ]);

        Setting::create([
            'key' => 'store_email',
            'value' => 'hello@atelierarome.sg',
            'type' => 'string',
        ]);

        Setting::create([
            'key' => 'store_phone',
            'value' => '+6567890123',
            'type' => 'string',
        ]);

        Setting::create([
            'key' => 'free_shipping_threshold',
            'value' => '150.00',
            'type' => 'string',
        ]);
    }
}
