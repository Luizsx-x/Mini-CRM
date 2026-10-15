<?php

namespace App\Http\Controllers;

use App\Http\Requests\LeadRequest;
use App\Models\Lead;

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
    public function store(LeadRequest $request)
    {
        $lead = Lead::create($request->validated());

        return response()->json($lead, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Lead $lead)
{
    return response()->json($lead);
}

    /**
     * Update the specified resource in storage.
     */
    public function update(LeadRequest $request, Lead $lead)
    {
        $lead->update($request->validated());

        return response()->json($lead);
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
