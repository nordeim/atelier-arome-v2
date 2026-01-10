'use client';

import Image from 'next/image';
import { CartItem as CartItemType } from '@/types/api';
import { Button } from '@/components/ui/button';
import { Minus, Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CartItemProps {
    item: CartItemType;
    onQuantityChange: (itemId: string, quantity: number) => void;
    onRemove: (itemId: string) => void;
    isUpdating?: boolean;
    isRemoving?: boolean;
}

/**
 * Individual Cart Item Card
 * Atomic component for cart drawer items.
 * Matches "Illuminated Manuscript" design system.
 */
export function CartItem({
    item,
    onQuantityChange,
    onRemove,
    isUpdating = false,
    isRemoving = false,
}: CartItemProps) {
    const product = item.variant.product;
    const isLoading = isUpdating || isRemoving;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isRemoving ? 0.5 : 1, x: 0 }}
            exit={{ opacity: 0, x: -20, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={cn(
                "relative flex gap-4 p-4 border border-gold/20 bg-parchment-dark/20 rounded-sm",
                isLoading && "pointer-events-none"
            )}
        >
            {/* Product Image */}
            <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden border border-gold/20 bg-parchment">
                {product.primary_image ? (
                    <Image
                        src={product.primary_image.url}
                        alt={product.primary_image.alt_text || product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="font-display text-ink-muted text-xs italic">No image</span>
                    </div>
                )}

                {/* Gold corner ornament */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold opacity-60" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold opacity-60" />
            </div>

            {/* Item Details */}
            <div className="flex-1 min-w-0 space-y-2">
                {/* Product Name */}
                <div>
                    <h4 className="font-display text-lg text-ink leading-tight truncate">
                        {product.name}
                    </h4>
                    {product.latin_name && (
                        <p className="font-body text-xs text-ink-muted italic truncate">
                            {product.latin_name}
                        </p>
                    )}
                </div>

                {/* Variant Name */}
                <p className="text-sm text-gold-dark font-medium">
                    {item.variant.name}
                </p>

                {/* Quantity Controls & Price */}
                <div className="flex items-center justify-between">
                    {/* Quantity Adjuster */}
                    <div className="flex items-center border border-gold/30 rounded-sm bg-parchment">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1 || isLoading}
                            className="h-7 w-7 text-gold-dark hover:text-ink hover:bg-gold/10 rounded-none"
                            aria-label="Decrease quantity"
                        >
                            <Minus className="h-3 w-3" />
                        </Button>

                        <div className="h-7 w-8 flex items-center justify-center border-x border-gold/30 bg-parchment-dark/30">
                            <span className={cn(
                                "font-display text-sm text-ink",
                                isUpdating && "opacity-50"
                            )}>
                                {item.quantity}
                            </span>
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                            disabled={isLoading}
                            className="h-7 w-7 text-gold-dark hover:text-ink hover:bg-gold/10 rounded-none"
                            aria-label="Increase quantity"
                        >
                            <Plus className="h-3 w-3" />
                        </Button>
                    </div>

                    {/* Line Total */}
                    <div className="text-right">
                        <span className="font-display text-lg text-ink">
                            ${item.line_total.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>

            {/* Remove Button */}
            <Button
                variant="ghost"
                size="icon"
                onClick={() => onRemove(item.id)}
                disabled={isLoading}
                className="absolute top-2 right-2 h-6 w-6 text-ink-muted hover:text-ink hover:bg-gold/10"
                aria-label={`Remove ${product.name} from cart`}
            >
                <X className="h-4 w-4" />
            </Button>
        </motion.div>
    );
}
