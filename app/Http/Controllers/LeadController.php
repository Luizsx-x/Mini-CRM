<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;

class LeadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $leads = Lead::all();
        return response()->json($leads);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $dados = $request->validate([
            'nome' => 'required | string | max: 255',
            'telefone' => 'required | string | max: 255',
            'email' => 'nullable | string | email | max: 255',
            'empresa' => 'nullable | string | max: 255',
            'status' => ['required', Rule::in([
                'Novo', 'Contato Realizado', 'Negociação', 'Fechado', 'Perdido',
                ])],
            'observacao' => 'nullable | text',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Lead $lead)
    {
        $lead = Lead::create($dados);

        return response()->json($lead, 201);  
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Lead $lead)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lead $lead)
    {
        //
    }
}
