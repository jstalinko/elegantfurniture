<?php

use App\Http\Controllers\JustOrangeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [JustOrangeController::class , 'index']);
Route::get('/products',[JustOrangeController::class , 'products'])->name('product.index');
Route::get('/product/{slug}',[JustOrangeController::class , 'product'])->name('product.detail');
Route::get('/category/{slug}',[JustOrangeController::class , 'category'])->name('product.category');
Route::get('/product/tag/{tag}',[JustOrangeController::class , 'productTags'])->name('product.tag');

Route::get('/wa-checkout/{id}' , [JustOrangeController::class , 'whatsappCheckout'])->name('whatsapp.checkout');

Route::group(['prefix' => '/p'] , function(){
    Route::get('/about',[JustOrangeController::class,'about']);
    Route::get('/contact', [JustOrangeController::class,'contact']);
});