<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\Lib\Services\FeegowApiService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class AppointmentController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|min:5|max:255',
            'cpf' => 'required|string|max:11',
            'professional_id' => 'required',
            'specialty_id' => 'required',
            'date_time' => 'required',
            'birthdate' => 'required',
            'source_id' => 'required',
        ]);

        $appointment = Appointment::create([
            'name' => Crypt::encryptString($request->name),
            'cpf' => Crypt::encryptString($request->cpf),
            'professional_id' => $request->professional_id,
            'specialty_id' => $request->specialty_id,
            'date_time' => $request->date_time,
            'birthdate' => $request->birthdate,
            'source_id' => $request->source_id,
        ]);

        return response()->json($appointment, 201);
    }
}
