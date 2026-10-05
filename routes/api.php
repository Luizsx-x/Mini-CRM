<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LeadController;

Route::apiResource('leads', LeadController::class);