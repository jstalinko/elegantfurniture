<?php

namespace App\Http\Middleware;

use App\Models\Visitor;
use Closure;
use Illuminate\Http\Request;
use Karmendra\LaravelAgentDetector\AgentDetector;
use Symfony\Component\HttpFoundation\Response;

class VisitorRecord
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $ad = new AgentDetector($request->userAgent());
        Visitor::updateOrCreate(
            ['ip' => $request->ip()],
            [
                'useragent' => $request->userAgent(),
                'browser' => $ad->browser(),
                'platform' => $ad->platform(),
                'device' => $ad->device().' '.$ad->deviceBrand().' ' .$ad->deviceModel(),
                
            ]
            );
        return $next($request);
    }
}
