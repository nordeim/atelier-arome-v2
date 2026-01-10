'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { ShoppingBag, Sparkles } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { CartItem } from './cart-item';
import { CartLoading } from './cart-loading';

import { useCart, useUpdateCartItem, useRemoveCartItem } from '@/hooks/use-cart';
import { useCartStore } from '@/stores/cart-store';

/**
 * Vial Drawer - Cart Slide-out Panel
 * 
 * "Illuminated Manuscript" styled cart drawer using Shadcn Sheet.
 * Connects to backend Cart API via TanStack Query hooks.
 */
export function VialDrawer() {
    const { cartDrawerOpen, toggleCartDrawer } = useCartStore();
    const { data: cart, isLoading, isError } = useCart();
    const updateMutation = useUpdateCartItem();
    const removeMutation = useRemoveCartItem();

    // Track which items are being mutated for loading states
    const [updatingItemId, setUpdatingItemId] = useState<string | null>(null);
    const [removingItemId, setRemovingItemId] = useState<string | null>(null);

    const handleQuantityChange = async (itemId: string, quantity: number) => {
        if (quantity < 1) return;

        setUpdatingItemId(itemId);
        try {
            await updateMutation.mutateAsync({ itemId, quantity });
        } finally {
            setUpdatingItemId(null);
        }
    };

    const handleRemove = async (itemId: string) => {
        setRemovingItemId(itemId);
        try {
            await removeMutation.mutateAsync(itemId);
        } finally {
            setRemovingItemId(null);
        }
    };

    const isEmpty = !cart?.items || cart.items.length === 0;

    return (
        <Sheet open={cartDrawerOpen} onOpenChange={toggleCartDrawer}>
            {/* Cart Button Trigger (for header integration) */}
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="relative h-10 w-10 text-ink hover:text-gold-dark hover:bg-gold/10"
                    aria-label="Open cart"
                >
                    <ShoppingBag className="h-5 w-5" />
                    {cart?.items_count && cart.items_count > 0 && (
                        <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold text-ink text-xs font-display flex items-center justify-center">
                            {cart.items_count > 9 ? '9+' : cart.items_count}
                        </span>
                    )}
                </Button>
            </SheetTrigger>

            {/* Drawer Content */}
            <SheetContent
                side="right"
                className="w-full sm:max-w-md flex flex-col bg-parchment border-l-2 border-gold p-0"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gold/20">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-gold" />
                        </div>
                        <div>
                            <h2 className="font-display text-2xl text-ink">Collection Vial</h2>
                            {cart?.items_count !== undefined && (
                                <p className="text-sm text-ink-muted">
                                    {cart.items_count} {cart.items_count === 1 ? 'essence' : 'essences'}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    {isLoading ? (
                        <CartLoading count={2} />
                    ) : isError ? (
                        <div className="text-center py-12">
                            <p className="text-ink-muted font-body">
                                Unable to load your collection.
                            </p>
                            <Button
                                variant="ghost"
                                onClick={() => window.location.reload()}
                                className="mt-4 text-gold-dark"
                            >
                                Try Again
                            </Button>
                        </div>
                    ) : isEmpty ? (
                        <EmptyCart />
                    ) : (
                        <div className="space-y-4">
                            <AnimatePresence mode="popLayout">
                                {cart.items.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        onQuantityChange={handleQuantityChange}
                                        onRemove={handleRemove}
                                        isUpdating={updatingItemId === item.id}
                                        isRemoving={removingItemId === item.id}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                    )}
                </div>

                {/* Footer - Only show when cart has items */}
                {!isLoading && !isEmpty && cart && (
                    <div className="p-6 border-t border-gold/20 bg-parchment-dark/20 space-y-4">
                        {/* Price Breakdown */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm text-ink-light">
                                <span>Subtotal</span>
                                <span>${cart.subtotal.toFixed(2)}</span>
                            </div>

                            {cart.discount_amount > 0 && (
                                <div className="flex justify-between text-sm text-eucalyptus">
                                    <span>Discount</span>
                                    <span>-${cart.discount_amount.toFixed(2)}</span>
                                </div>
                            )}

                            <div className="flex justify-between text-sm text-ink-light">
                                <span>GST (9%)</span>
                                <span>${cart.gst_amount.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between items-baseline pt-2 border-t border-gold/10">
                                <span className="font-display text-xl text-ink">Total</span>
                                <span className="font-display text-2xl text-gold-dark">
                                    ${cart.total.toFixed(2)}
                                </span>
                            </div>
                        </div>

                        {/* Coupon Input (placeholder for future) */}
                        {/* <CouponInput /> */}

                        {/* Checkout Button */}
                        <Link href="/checkout" className="block">
                            <Button
                                variant="gold"
                                size="lg"
                                className="w-full text-lg h-14 relative overflow-hidden group"
                                onClick={() => toggleCartDrawer()}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <span>Proceed to Checkout</span>
                                    <span className="text-xs uppercase tracking-widest opacity-60">
                                        — ${cart.total.toFixed(2)}
                                    </span>
                                </span>
                            </Button>
                        </Link>

                        {/* Shipping Note */}
                        <p className="text-center text-xs text-ink-muted italic">
                            * Complimentary delivery within Singapore for orders above $100
                        </p>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}

/**
 * Empty Cart State
 */
function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            {/* Decorative Vial Icon */}
            <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full border-2 border-gold/30 flex items-center justify-center bg-parchment-dark/20">
                    <span className="font-display text-4xl text-gold/50" aria-hidden="true">
                        ⚱
                    </span>
                </div>
                {/* Decorative corners */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-gold opacity-40" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-gold opacity-40" />
            </div>

            <h3 className="font-display text-xl text-ink mb-2">
                Your Collection Vial Awaits
            </h3>

            <p className="font-body text-ink-light max-w-[200px] mb-6">
                Begin your aromatic journey by adding essences to your collection.
            </p>

            <Link href="/compendium">
                <Button variant="outline" className="border-gold text-gold-dark hover:bg-gold/10">
                    Browse Compendium
                </Button>
            </Link>
        </div>
    );
}
