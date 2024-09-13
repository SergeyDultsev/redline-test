<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Services\UserService;

class AuthController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService){
        $this->userService = $userService;
    }

    public function authenticate(AuthRequest $request)
    {
        try {
            $response = $this->userService->handleUser($request->all());
            return $response;
        } catch (\Exception $error) {
            return response()->json(['error' => $error->getMessage()], 500);
        }
    }
}
