<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LeadController;
use App\Http\Controllers\TagController;

Route::apiResource('leads', LeadController::class);
Route::get('tags', [TagController::class, 'index']);
