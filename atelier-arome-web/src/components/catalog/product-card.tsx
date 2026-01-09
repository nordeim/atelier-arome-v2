'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/api';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/stores/cart-store';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const HUMOUR_ICONS = {
  calming: { icon: '☁️', label: 'Air' }, // Placeholder icons, ideally SVGs
  uplifting: { icon: '🔥', label: 'Fire' },
  grounding: { icon: '🌍', label: 'Earth' },
  clarifying: { icon: '💧', label: 'Water' },
};

export function ProductCard({ product, className }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    addToCart({
      id: product.id,
      variantId: product.default_variant.id,
      name: product.name,
      price: product.default_variant.price_sgd,
      quantity: 1,
      image: product.primary_image.url,
    });
  };

  const humourData = product.humour ? HUMOUR_ICONS[product.humour] : null;

  return (
    <Link 
      href={`/compendium/${product.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-sm border border-gold/30 bg-parchment p-4 transition-all duration-500 hover:border-gold hover:shadow-gold",
        className
      )}
    >
      {/* Illumination Glow (Hover Effect) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-gold/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {/* Folio Number */}
      <div className="mb-2 flex items-center justify-between text-xs font-medium text-ink-muted">
        <span className="font-display tracking-widest uppercase">Folio {product.folio_number}</span>
        {product.rarity !== 'common' && (
          <span className={cn(
            "flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] uppercase tracking-wider",
            product.rarity === 'rare' ? "border-gold text-gold-dark" : "border-rose-400 text-rose-600"
          )}>
            ✦ {product.rarity}
          </span>
        )}
      </div>

      {/* Illustration */}
      <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-parchment-dark/50 mb-4">
        {product.primary_image.url ? (
          <Image
            src={product.primary_image.url}
            alt={product.primary_image.alt_text || product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gold/20">
             {/* Fallback pattern */}
             <svg width="40" height="40" viewBox="0 0 100 100" className="animate-pulse">
                <circle cx="50" cy="50" r="40" stroke="currentColor" fill="none" />
             </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Latin Name */}
        <div className="mb-1 flex items-center gap-2">
          <span className="text-xs italic text-ink-light font-serif">{product.latin_name}</span>
          <div className="h-px flex-1 bg-gold/20" />
        </div>

        {/* Name */}
        <h3 className="font-display text-xl font-medium text-ink group-hover:text-gold-dark transition-colors duration-300">
          {product.name}
        </h3>

        {/* Humour & Notes */}
        <div className="mt-2 mb-4 flex items-center gap-3 text-sm text-ink-light">
          {humourData && (
            <div className="flex items-center gap-1.5" title={`Humour: ${product.humour}`}>
              <span className="text-base">{humourData.icon}</span>
              <span className="capitalize">{product.humour}</span>
            </div>
          )}
          {product.season && (
            <>
              <span className="text-gold/40">•</span>
              <span className="capitalize">{product.season}</span>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gold/10">
          <div className="flex flex-col">
             <span className="font-display text-lg text-ink">
               {product.default_variant.price_sgd_formatted.replace('SGD ', '$')}
             </span>
             <span className="text-[10px] text-ink-muted uppercase tracking-wider">
               {product.default_variant.name}
             </span>
          </div>
          
          <Button 
            onClick={handleAddToCart}
            variant="outline" 
            size="sm"
            className="border-gold/50 hover:bg-gold hover:text-white hover:border-gold transition-colors duration-300"
          >
            Add to Vial
          </Button>
        </div>
      </div>
    </Link>
  );
}
