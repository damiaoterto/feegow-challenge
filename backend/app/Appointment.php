<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable = [
        'name', 'cpf', 'professional_id',
        'specialty_id', 'source_id', 'date_time',
        'birthdate'
    ];
}
