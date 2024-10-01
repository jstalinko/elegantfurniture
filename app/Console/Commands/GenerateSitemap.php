<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use App\Models\Product;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sitemap:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate the sitemap for active products';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // Create a new sitemap
        $sitemap = Sitemap::create();

        // Fetch all active products
        $products = Product::where('active', true)->get();

        // Loop through each product and add it to the sitemap
        foreach ($products as $product) {
            $sitemap->add(
                Url::create(url('/product/'.$product->slug)) // Assuming the route is named 'product.show'
                    ->setLastModificationDate($product->updated_at)
                    ->setPriority(0.8)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_DAILY)
            );
        }

        // Save the sitemap to a public directory (adjust path if necessary)
        $sitemap->writeToFile(public_path('sitemap.xml'));

        $this->info('Sitemap generated successfully.');

        return Command::SUCCESS;
    }
}
