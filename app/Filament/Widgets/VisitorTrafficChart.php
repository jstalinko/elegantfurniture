<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use App\Models\Visitor;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class VisitorTrafficChart extends ChartWidget
{
    protected static ?string $heading = 'Statistik Pengunjung 30 Hari'; // Chart title
    protected static ?int $sort = 4; // Sort position in the dashboard
  //  protected int | string | array $columnSpan = 'full'; // Spans the full width of the dashboard

    protected function getData(): array
    {
        // Fetch the data from the Visitor model, grouping by date
        $visitors = Visitor::select(DB::raw('DATE(created_at) as date'), DB::raw('COUNT(*) as total'))
                        ->where('created_at', '>=', Carbon::now()->subDays(30)) // Only the last 30 days
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

        for ($date = $start; $date->lte($end); $date->addDay()) {
            $dateRange[$date->format('Y-m-d')] = 0; // Initialize all days with 0 visitors
        }

        // Fill in the data from the query results
        foreach ($visitors as $visitor) {
            $dateRange[$visitor->date] = $visitor->total; // Fill actual visit counts
        }

        // Populate labels and data for the chart
        foreach ($dateRange as $date => $count) {
            $labels[] = Carbon::createFromFormat('Y-m-d', $date)->format('d M'); // Format as 'd M'
            $data[] = $count; // Add the visit count for that day
        }

        return [
            'labels' => $labels, // Array of dates (formatted)
            'datasets' => [
                [
                    'label' => 'Jumlah Pengunjung', // Label for the dataset
                    'data' => $data, // Total visitors per date
                    'backgroundColor' => '#60a5fa', // Customize bar color (optional)
                ],
            ],
        ];
    }

    protected function getType(): string
    {
        return 'bar'; // Chart type (bar chart)
    }
}
