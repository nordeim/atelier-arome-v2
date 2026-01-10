'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    getCart,
    addToCart as addToCartApi,
    updateCartItem as updateCartItemApi,
    removeCartItem as removeCartItemApi,
    applyCoupon as applyCouponApi,
    removeCoupon as removeCouponApi,
} from '@/lib/api-client';
import { Cart, AddToCartRequest } from '@/types/api';
import { useToastStore } from '@/stores/toast-store';

// ============================================================================
// Query Keys
// ============================================================================

export const cartKeys = {
    all: ['cart'] as const,
    detail: () => [...cartKeys.all, 'detail'] as const,
};

// ============================================================================
// Cart Query Hook
// ============================================================================

/**
 * Fetch the current cart state.
 * Automatically creates a cart if none exists.
 */
export function useCart() {
    return useQuery({
        queryKey: cartKeys.detail(),
        queryFn: getCart,
        staleTime: 30 * 1000, // 30 seconds
        retry: 1,
        // Don't fetch on server - cart requires session
        enabled: typeof window !== 'undefined',
    });
}

// ============================================================================
// Cart Mutation Hooks
// ============================================================================

/**
 * Add an item to the cart.
 * Invalidates cart query on success.
 */
export function useAddToCart() {
    const queryClient = useQueryClient();
    const { showToast } = useToastStore();

    return useMutation({
        mutationFn: (request: AddToCartRequest) => addToCartApi(request),
        onSuccess: (newCart) => {
            // Update cache with new cart data
            queryClient.setQueryData(cartKeys.detail(), newCart);
        },
        onError: (error: Error) => {
            showToast(error.message || 'Failed to add item to cart', 'error');
        },
    });
}

/**
 * Update the quantity of a cart item.
 * Supports optimistic updates for instant UI feedback.
 */
export function useUpdateCartItem() {
    const queryClient = useQueryClient();
    const { showToast } = useToastStore();

    return useMutation({
        mutationFn: ({ itemId, quantity }: { itemId: string; quantity: number }) =>
            updateCartItemApi(itemId, { quantity }),

        // Optimistic update
        onMutate: async ({ itemId, quantity }) => {
            // Cancel outgoing refetches
            await queryClient.cancelQueries({ queryKey: cartKeys.detail() });

            // Snapshot previous value
            const previousCart = queryClient.getQueryData<Cart>(cartKeys.detail());

            // Optimistically update
            if (previousCart) {
                const updatedCart: Cart = {
                    ...previousCart,
                    items: previousCart.items.map(item =>
                        item.id === itemId
                            ? {
                                ...item,
                                quantity,
                                line_total: item.unit_price * quantity,
                                line_total_formatted: `SGD ${(item.unit_price * quantity).toFixed(2)}`,
                            }
                            : item
                    ),
                };
                queryClient.setQueryData(cartKeys.detail(), updatedCart);
            }

            return { previousCart };
        },

        // Rollback on error
        onError: (error: Error, _variables, context) => {
            if (context?.previousCart) {
                queryClient.setQueryData(cartKeys.detail(), context.previousCart);
            }
            showToast(error.message || 'Failed to update cart', 'error');
        },

        // Sync with server response
        onSuccess: (newCart) => {
            queryClient.setQueryData(cartKeys.detail(), newCart);
        },
    });
}

/**
 * Remove an item from the cart.
 * Supports optimistic removal with animation.
 */
export function useRemoveCartItem() {
    const queryClient = useQueryClient();
    const { showToast } = useToastStore();

    return useMutation({
        mutationFn: (itemId: string) => removeCartItemApi(itemId),

        // Optimistic removal
        onMutate: async (itemId) => {
            await queryClient.cancelQueries({ queryKey: cartKeys.detail() });

            const previousCart = queryClient.getQueryData<Cart>(cartKeys.detail());

            if (previousCart) {
                const updatedCart: Cart = {
                    ...previousCart,
                    items: previousCart.items.filter(item => item.id !== itemId),
                    items_count: previousCart.items_count - 1,
                };
                queryClient.setQueryData(cartKeys.detail(), updatedCart);
            }

            return { previousCart };
        },

        onError: (error: Error, _itemId, context) => {
            if (context?.previousCart) {
                queryClient.setQueryData(cartKeys.detail(), context.previousCart);
            }
            showToast(error.message || 'Failed to remove item', 'error');
        },

        onSuccess: (newCart) => {
            queryClient.setQueryData(cartKeys.detail(), newCart);
            showToast('Item removed from cart', 'info');
        },
    });
}

/**
 * Apply a coupon code to the cart.
 */
export function useApplyCoupon() {
    const queryClient = useQueryClient();
    const { showToast } = useToastStore();

    return useMutation({
        mutationFn: (code: string) => applyCouponApi(code),
        onSuccess: (newCart) => {
            queryClient.setQueryData(cartKeys.detail(), newCart);
            showToast('Coupon applied successfully!', 'success');
        },
        onError: (error: Error) => {
            showToast(error.message || 'Invalid or expired coupon code', 'error');
        },
    });
}

/**
 * Remove the applied coupon from the cart.
 */
export function useRemoveCoupon() {
    const queryClient = useQueryClient();
    const { showToast } = useToastStore();

    return useMutation({
        mutationFn: () => removeCouponApi(),
        onSuccess: (newCart) => {
            queryClient.setQueryData(cartKeys.detail(), newCart);
            showToast('Coupon removed', 'info');
        },
        onError: (error: Error) => {
            showToast(error.message || 'Failed to remove coupon', 'error');
        },
    });
}

// ============================================================================
// Cart Utilities
// ============================================================================

/**
 * Get the total number of items in the cart.
 * Uses the cached cart data.
 */
export function useCartItemCount(): number {
    const { data: cart } = useCart();
    return cart?.items_count ?? 0;
}
