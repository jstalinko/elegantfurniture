<?php

namespace App\Filament\Widgets;

use App\Models\Product;
use App\Models\Visitor;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;

class StatOverviewTraffic extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Kunjungan Web',Visitor::count()),
            Stat::make('Total Click Pesan',Product::all()->sum('click')),
            Stat::make('Total Product Views',Product::all()->sum('views'))
        ];
    }
}
