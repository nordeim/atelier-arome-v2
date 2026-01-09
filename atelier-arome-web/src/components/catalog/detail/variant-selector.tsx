import { ProductVariant } from '@/types/api';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function VariantSelector({ variants, selectedId, onSelect }: VariantSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-display font-semibold tracking-wide text-ink-light uppercase">
        Vial Capacity
      </label>
      <div className="grid grid-cols-3 gap-3">
        {variants.map((variant) => {
          const isSelected = selectedId === variant.id;
          const isOutOfStock = variant.inventory && variant.inventory.quantity <= 0;

          return (
            <button
              key={variant.id}
              onClick={() => !isOutOfStock && onSelect(variant.id)}
              disabled={isOutOfStock}
              className={cn(
                "relative group flex flex-col items-center justify-center p-3 border transition-all duration-300",
                "focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2",
                isSelected 
                  ? "border-gold bg-parchment-dark shadow-gold" 
                  : "border-gold/30 hover:border-gold/60 bg-parchment",
                isOutOfStock && "opacity-50 cursor-not-allowed grayscale"
              )}
              aria-pressed={isSelected}
            >
              <span className={cn(
                "font-display text-lg",
                isSelected ? "text-ink" : "text-ink-light"
              )}>
                {variant.name}
              </span>
              <span className={cn(
                "text-xs font-body mt-1",
                isSelected ? "text-gold-dark" : "text-ink-muted"
              )}>
                {variant.price_sgd_formatted}
              </span>

              {/* Decorative Corner (Top Right) */}
              {isSelected && (
                <motion.div
                  layoutId="variant-corner"
                  className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-gold"
                  transition={{ duration: 0.2 }}
                />
              )}
              
              {/* Decorative Corner (Bottom Left) */}
              {isSelected && (
                <motion.div
                  layoutId="variant-corner-bl"
                  className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-gold"
                  transition={{ duration: 0.2 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
