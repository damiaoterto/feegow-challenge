<?php

namespace App\Lib\Services;

use Illuminate\Http\Client\RequestException;
use Illuminate\Support\Facades\Http;

class FeegowApiService
{
    private $basePath;

    private $apiToken;

    private $requestHeader;

    private $responseBody;

    public function __construct()
    {
        $this->basePath = config('feegow.api.base_url');
        $this->apiToken = config('feegow.api.token');

        $this->requestHeader = [
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'x-access-token' => $this->apiToken,
        ];
    }

    public function get(string $path, $params = []) {
        $url = sprintf('%s/%s', $this->basePath, $path);

        $response = Http::withHeaders($this->requestHeader)->get($url, $params);
        $this->responseBody = $response->object();

        return $this;
    }

    public function getContent()
    {
        return $this->responseBody->content;
    }
}
