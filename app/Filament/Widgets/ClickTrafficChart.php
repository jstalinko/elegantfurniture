<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ClickTrafficChart extends ChartWidget
{
    protected static ?string $heading = 'Statistik Klik 30 Hari';
    protected static ?int $sort = 4;
  //  protected int | string | array $columnSpan = 'full'; // Optional: Full width

    protected function getData(): array
    {
        // Fetch click data from Product model, grouped by day, over the last 30 days
        $clicks = Product::select(DB::raw('DATE(created_at) as date'), DB::raw('SUM(click) as total_clicks'))
                        ->where('created_at', '>=', Carbon::now()->subDays(30)) // Only last 30 days
                        ->groupBy('date')
                        ->orderBy('date', 'asc')
                        ->get();

        // Prepare the data for the chart
        $labels = [];
        $data = [];

        // Create a date range for the last 30 days
        $start = Carbon::now()->subDays(30);
        $end = Carbon::now();
        $dateRange = [];

        // Initialize all days in the last 30 days with 0 clicks
        for ($date = $start; $date->lte($end); $date->addDay()) {
            $dateRange[$date->format('Y-m-d')] = 0;
        }

        // Fill in the data from the query results
        foreach ($clicks as $click) {
            $dateRange[$click->date] = $click->total_clicks; // Add actual click counts
        }

        // Populate labels and data for the chart
        foreach ($dateRange as $date => $count) {
            $labels[] = Carbon::createFromFormat('Y-m-d', $date)->format('d M'); // Format the date as 'd M'
            $data[] = $count; // Add the total clicks for that date
        }

        return [
            'labels' => $labels, // The date labels (last 30 days)
            'datasets' => [
                [
                    'label' => 'Total Klik', // Dataset label
                    'data' => $data, // Click counts per day
                    'borderColor' => '#60a5fa', // Line color (optional)
                    'fill' => false, // Disable fill under the line
                ],
            ],
        ];
    }

    protected function getType(): string
    {
        return 'line'; // Set the chart type to line
    }
}
