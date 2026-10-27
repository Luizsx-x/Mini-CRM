<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LeadRequest;
use App\Models\Lead;

class LeadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Lead::query();

        if ($request->filled('nome')) {
            $query->where('nome', 'like', '%' . $request->nome . '%');
        }

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        if ($request->filled('tag')) {
            $query->whereHas('tags', function ($consulta) use ($request) {
                $consulta->where('tags.id', $request->tag);
            });
        }

        return response()->json($query->latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LeadRequest $request)
    {
        $lead = Lead::create($request->safe()->except('tags'));

        $lead->tags()->sync($request->input('tags', []));

        return response()->json($lead->load('tags'), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Lead $lead)
    {
        return response()->json($lead->load('tags'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(LeadRequest $request, Lead $lead)
    {
        $lead->update($request->safe()->except('tags'));

        $lead->tags()->sync($request->input('tags', []));

        return response()->json($lead->load('tags'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lead $lead)
    {
        $lead->delete();

        return response()->noContent();
    }
}
