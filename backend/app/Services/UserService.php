<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Ramsey\Uuid\Uuid;

class UserService{
    public function handleUser(array $data){
        $user = User::where('email', $data['email'])->first();

        if (!$user) {
            $user = User::create([
                'id' => Uuid::uuid4()->toString(),
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
                'created_at' => now()
            ]);
        } else {
            if (!Hash::check($data['password'], $user->password)) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
        }

        $authToken = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['auth_token' => $authToken]);
    }
}
