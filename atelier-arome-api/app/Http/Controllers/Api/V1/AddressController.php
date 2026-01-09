<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\AddressResource;
use App\Models\Address;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    /**
     * List all addresses for the authenticated user.
     */
    public function index(Request $request): JsonResponse
    {
        $addresses = $request->user()
            ->addresses()
            ->orderBy('is_default', 'desc')
            ->orderBy('created_at', 'desc')
            ->get();

        return $this->success(
            AddressResource::collection($addresses),
            'Addresses retrieved successfully'
        );
    }

    /**
     * Create a new address.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'type' => ['required', 'in:shipping,billing'],
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'company' => ['nullable', 'string', 'max:255'],
            'address_line1' => ['required', 'string', 'max:255'],
            'address_line2' => ['nullable', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'postal_code' => ['required', 'string', 'max:10', 'regex:/^\d{6}$/'], // Singapore postal code
            'country' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:20'],
            'is_default' => ['boolean'],
        ]);

        $user = $request->user();

        // If this is set as default, unset other defaults of same type
        if ($request->boolean('is_default')) {
            $user->addresses()
                ->where('type', $validated['type'])
                ->update(['is_default' => false]);
        }

        $address = $user->addresses()->create($validated);

        return $this->created(
            new AddressResource($address),
            'Address created successfully'
        );
    }

    /**
     * Update an existing address.
     */
    public function update(Request $request, string $id): JsonResponse
    {
        $address = $request->user()->addresses()->findOrFail($id);

        $validated = $request->validate([
            'type' => ['sometimes', 'in:shipping,billing'],
            'first_name' => ['sometimes', 'string', 'max:255'],
            'last_name' => ['sometimes', 'string', 'max:255'],
            'company' => ['nullable', 'string', 'max:255'],
            'address_line1' => ['sometimes', 'string', 'max:255'],
            'address_line2' => ['nullable', 'string', 'max:255'],
            'city' => ['sometimes', 'string', 'max:255'],
            'postal_code' => ['sometimes', 'string', 'max:10', 'regex:/^\d{6}$/'],
            'country' => ['sometimes', 'string', 'max:255'],
            'phone' => ['sometimes', 'string', 'max:20'],
            'is_default' => ['boolean'],
        ]);

        // If setting as default, unset other defaults
        if ($request->boolean('is_default')) {
            $type = $validated['type'] ?? $address->type;
            $request->user()->addresses()
                ->where('type', $type)
                ->where('id', '!=', $address->id)
                ->update(['is_default' => false]);
        }

        $address->update($validated);

        return $this->success(
            new AddressResource($address->fresh()),
            'Address updated successfully'
        );
    }

    /**
     * Delete an address.
     */
    public function destroy(Request $request, string $id): JsonResponse
    {
        $address = $request->user()->addresses()->findOrFail($id);

        $address->delete();

        return $this->success(null, 'Address deleted successfully');
    }
}
