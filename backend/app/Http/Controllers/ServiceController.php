<?php

namespace App\Http\Controllers;

use App\Lib\Services\FeegowApiService;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function professionals(Request $request, FeegowApiService $feegow)
    {
        $professionals = $feegow->get('professional/list', $request->all())->getContent();
        return response()->json($professionals);
    }

    public function specialties(FeegowApiService $feegow)
    {
        $specialties = $feegow->get('specialties/list')->getContent();
        return response()->json($specialties);
    }

    public function sources(FeegowApiService $feegow)
    {
        $sources = $feegow->get('patient/list-sources')->getContent();
        return response()->json($sources);
    }
}
