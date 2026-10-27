<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Lead extends Model
{
    protected $fillable = [
        'nome',
        'telefone',
        'email',
        'empresa',
        'status',
        'observacao',
    ];

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }
}
