<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'address_id',
        'user_id',
        'country',
        'postal_code',
        'region',
        'city',
        'federal_district',
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];

    public $incrementing = false;

    protected $primaryKey = 'address_id';

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
