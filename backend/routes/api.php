<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('services')->group(function () {
    // get professional services
    Route::get('professional/list', 'ServiceController@professionals');

    // get specialties services
    Route::get('specialties/list', 'ServiceController@specialties');

    // get sources services
    Route::get('sources/list', 'ServiceController@sources');
});

Route::resource('appointments', 'AppointmentController')->only('store');

