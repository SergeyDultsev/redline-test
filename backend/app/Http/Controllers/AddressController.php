<?php

namespace App\Http\Controllers;

use App\Http\Resources\AddressRequest;
use App\Http\Resources\AuthResource;
use App\Models\Address;
use App\Services\AddressService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AddressController extends Controller
{
    protected $addressService;

    public function __construct(AddressService $addressService){
        $this->addressService = $addressService;
    }

    public function standardize(Request $request)
    {
        try {
            $response = $this->addressService->searchAddress($request->all());
            return $response;
        } catch (\Exception $error) {
            return response()->json(['error' => $error->getMessage()], 500);
        }
    }

    public function index()
    {
        $userId = Auth::user()->id;
        $addresses = Address::where('user_id', $userId)->get();

        return AddressRequest::Collection($addresses);
    }

    public function create(Request $request)
    {
        try{
            $response = $this->addressService->saveAddress($request->all());
            return $response;
        } catch (\Exception $error){
            return response()->json(['error' => $error->getMessage()], 500);
        }
    }
}
