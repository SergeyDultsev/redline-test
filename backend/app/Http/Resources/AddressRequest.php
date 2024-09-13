<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AddressRequest extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'country' => $this->country,
            'postal_code' => $this->postal_code,
            'region' => $this->region,
            'city' => $this->city,
            'federal_district' => $this->federal_district,
        ];
    }
}
