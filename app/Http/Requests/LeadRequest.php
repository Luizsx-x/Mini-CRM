<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class LeadRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    
    public function rules(): array
    {
        return [
            'nome' => 'required|string|max:255',
            'telefone' => 'required|string|max:255',
            'email' => 'nullable|string|email|max:255',
            'empresa' => 'nullable|string|max:255',
            'status' => ['required', Rule::in([
                'Novo', 'Contato Realizado', 'Negociação', 'Fechado', 'Perdido',
            ])],
            'observacao' => 'nullable|string',
        ];
    }
}