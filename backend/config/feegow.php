<?php

return [
  'api' => [
      'base_url' => env('FEEGOW_API_HOST', 'https://api.feegow.com/v1/api/'),
      'token' => env('FEEGOW_API_TOKEN', 'secret')
  ]
];
