<?php

namespace App\Services;

use App\Models\Address;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Ramsey\Uuid\Nonstandard\Uuid;

class AddressService{
    public function saveAddress(array $data)
    {
        $user = Auth::user();
        $userId = $user->id;
        $addressCount = Address::where('user_id', $userId)->count();

        if ($addressCount >= 10) {
            return response()->json(['message' => 'Maximum address limit reached'], 400);
        }

        Address::create([
            'address_id' => Uuid::uuid4()->toString(),
            'user_id' => $userId,
            'country' => $data['country'],
            'postal_code' => $data['postal_code'],
            'region' => $data['region'],
            'city' => $data['city'],
            'federal_district' => $data['federal_district'],
            'created_at' => now(),
        ]);

        return response()->json(['message' => 'Address saved successfully']);
    }

    public function searchAddress(array $data)
    {
        $cacheKey = 'address_search_' . md5($data['query']);

        return Cache::remember($cacheKey, 600, function () use ($data) {
            try {
                $response = Http::withHeaders([
                    'Authorization' => 'Token ' . env('DADATA_TOKEN'),
                    'X-Secret' => env('DADATA_SECRET'),
                    'Content-Type' => 'application/json',
                ])->post('https://cleaner.dadata.ru/api/v1/clean/address', [$data['query']]);

                if ($response->successful()) {
                    return response()->json($response->json());
                } else {
                    return response()->json(['error' => $response->body()], $response->status());
                }
            } catch (\Exception $e) {
                return response()->json(['error' => 'Network Error: ' . $e->getMessage()], 500);
            }
        });
    }
}
