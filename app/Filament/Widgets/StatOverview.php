<?php

namespace App\Filament\Widgets;

use App\Models\Product;
use App\Models\Category;
use App\Models\Testimonial;
use App\Models\Visitor;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;

class StatOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Products' , Product::count()),
            Stat::make('Total Category',Category::count()),
            Stat::make('Total Testimonial',Testimonial::count()),
        ];
    }
}
