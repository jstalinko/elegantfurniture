<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->boolean('headline')->default(false);
            $table->string('name');
            $table->longText('description');
            $table->integer('views')->default(0);
            $table->string('main_image')->default('https://fakeimg.pl/477x681');
            $table->json('preview_images')->default(json_encode(['https://fakeimg.pl/477x681?text=preview+1','https://fakeimg.pl/477x681?text=preview+2','https://fakeimg.pl/477x681?text=preview+3']));
            $table->string('slug');
            $table->json('tags');
            $table->boolean('active')->default(true);
            $table->integer('price');
            $table->integer('click')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
