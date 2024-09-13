<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::post("/login", [AuthController::class, "authenticate"]);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/address-create', [AddressController::class, 'create']);
    Route::get('/address-show', [AddressController::class, 'index']);
    Route::post('/standardize-address', [AddressController::class, 'standardize']);
});
