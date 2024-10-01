<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'name',
        'description',
        'views',
        'main_image',
        'preview_images',
        'slug',
        'tags',
        'active',
        'price',
        'headline',
        'click'
    ];

    protected $casts = [
        'preview_images' => 'array',
        'tags' => 'array'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
