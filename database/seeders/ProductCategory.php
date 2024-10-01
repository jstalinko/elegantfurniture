<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Support\Str;

class ProductCategory extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Data untuk kategori furniture & meuble
        $categories = [
            ['name' => 'Kursi', 'slug' => Str::slug('Kursi')],
            ['name' => 'Meja', 'slug' => Str::slug('meja')],
            ['name' => 'Joglo', 'slug' => Str::slug('joglo')],
            ['name' => 'Set Meja & Kursi', 'slug' => Str::slug('set meja kursi')],
            ['name' => 'Gazebo', 'slug' => Str::slug('gazebo')],
        ];

        // Insert categories ke dalam database
        foreach ($categories as $categoryData) {
            $category = Category::create($categoryData);

            // Data untuk produk yang terkait dengan kategori ini (5 produk per kategori)
            for ($i = 1; $i <= 5; $i++) {
                Product::create([
                    'category_id' => $category->id,
                    'headline' => ($i === 1), // Produk pertama setiap kategori sebagai headline
                    'name' => 'Produk ' . $category->name . ' ' . $i,
                    'description' => 'Deskripsi lengkap tentang Produk ' . $category->name . ' ' . $i,
                    'views' => rand(10, 100), // Acak jumlah views
                    'main_image' => 'https://fakeimg.pl/500x500?text=Main+Image+' . $i,
                    'preview_images' => [
                        'https://fakeimg.pl/500x500?text=Preview+1+' . $i,
                        'https://fakeimg.pl/500x500?text=Preview+2+' . $i,
                        'https://fakeimg.pl/500x500?text=Preview+3+' . $i,
                    ],
                    'slug' => Str::slug('Produk ' . $category->name . ' ' . $i),
                    'tags' => ['furniture', 'meuble', $category->name],
                    'active' => true,
                    'price' => rand(0,3000000),
                ]);
            }
        }
    }
}
