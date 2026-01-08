<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Testimonial extends Model
{
    use HasUuids;

    protected $fillable = [
        'author_name',
        'author_title',
        'quote',
        'is_verified',
        'is_illuminated',
        'folio_reference',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'is_verified' => 'boolean',
        'is_illuminated' => 'boolean',
        'is_active' => 'boolean',
    ];
}
