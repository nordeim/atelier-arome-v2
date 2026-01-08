<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Super Admin',
            'email' => 'superadmin@atelierarome.sg',
            'password' => bcrypt('password123'),
            'phone' => '+6592345678',
            'role' => 'superadmin',
        ]);

        User::create([
            'name' => 'Admin User',
            'email' => 'admin@atelierarome.sg',
            'password' => bcrypt('password123'),
            'phone' => '+6591234567',
            'role' => 'admin',
        ]);

        User::create([
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'password' => bcrypt('password123'),
            'phone' => '+6581234567',
            'role' => 'customer',
        ]);

        User::create([
            'name' => 'John Smith',
            'email' => 'john@example.com',
            'password' => bcrypt('password123'),
            'phone' => '+6582345678',
            'role' => 'customer',
        ]);

        User::create([
            'name' => 'Alice Tan',
            'email' => 'alice@example.com',
            'password' => bcrypt('password123'),
            'phone' => '+6583456789',
            'role' => 'customer',
        ]);
    }
}
