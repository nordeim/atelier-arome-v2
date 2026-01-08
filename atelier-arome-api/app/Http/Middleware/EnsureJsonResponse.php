<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureJsonResponse
{
    /**
     * Handle an incoming request.
     *
     * Ensure that the request expects JSON and returns JSON responses.
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Force Accept header to application/json for API routes
        $request->headers->set('Accept', 'application/json');

        return $next($request);
    }
}
