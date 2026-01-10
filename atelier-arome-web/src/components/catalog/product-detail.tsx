'use client';

import { useState } from 'react';
import { ProductDetail as ProductDetailType } from '@/types/api';
import { useCartStore } from '@/stores/cart-store';
import { useToastStore } from '@/stores/toast-store';
import { useAddToCart } from '@/hooks/use-cart';
import { ImageGallery } from './detail/image-gallery';
import { VariantSelector } from './detail/variant-selector';
import { QuantityAdjuster } from './detail/quantity-adjuster';
import { AlchemicalProperties } from './detail/alchemical-properties';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface ProductDetailProps {
  product: ProductDetailType;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    product.default_variant?.id || product.variants?.[0]?.id || ''
  );
  const [quantity, setQuantity] = useState(1);

  const { toggleCartDrawer } = useCartStore();
  const { showToast } = useToastStore();
  const addToCartMutation = useAddToCart();

  const selectedVariant = product.variants?.find(v => v.id === selectedVariantId) || product.default_variant;

  // Calculate max quantity based on inventory (if available)
  const maxQuantity = selectedVariant?.inventory?.quantity || 10;
  const isOutOfStock = selectedVariant?.inventory?.quantity !== undefined && selectedVariant.inventory.quantity <= 0;

  const handleAddToCart = async () => {
    if (!selectedVariant) return;

    try {
      await addToCartMutation.mutateAsync({
        variant_id: selectedVariant.id,
        quantity: quantity,
      });

      showToast(`Added ${quantity}x ${product.name} (${selectedVariant.name}) to your vial.`, 'success');
      toggleCartDrawer();
      setQuantity(1); // Reset quantity after adding
    } catch {
      // Error is already handled by the mutation hook
    }
  };

  const isAdding = addToCartMutation.isPending;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
      {/* Left Column: Imagery */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ImageGallery
          images={product.images || [product.primary_image]}
          productName={product.name}
        />
      </motion.div>

      {/* Right Column: Details */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="space-y-4 border-b border-gold/20 pb-8">
          <div className="flex items-center space-x-2 text-ink-muted text-sm tracking-widest uppercase">
            <span>{product.category?.name}</span>
            <span>•</span>
            <span>Folio No. {product.folio_number || 'N/A'}</span>
          </div>

          <h1 className="font-display text-4xl lg:text-5xl text-ink">
            {product.name}
          </h1>

          {product.latin_name && (
            <p className="font-display italic text-xl text-ink-light font-light">
              {product.latin_name}
            </p>
          )}

          <div className="flex items-baseline space-x-4 pt-2">
            <span className="font-display text-3xl text-gold-dark font-medium">
              {selectedVariant?.price_sgd_formatted}
            </span>
            {selectedVariant?.compare_at_price && (
              <span className="font-display text-xl text-ink-muted line-through decoration-gold/50">
                {selectedVariant.compare_at_price_formatted}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="prose prose-p:text-ink-light prose-p:font-body prose-headings:font-display prose-headings:text-ink">
          <p className="lead">{product.description}</p>
          {product.long_description && (
            <div dangerouslySetInnerHTML={{ __html: product.long_description }} />
          )}
        </div>

        {/* Alchemical Properties */}
        <AlchemicalProperties product={product} />

        {/* Selection & Actions */}
        <div className="space-y-8 bg-parchment-dark/30 p-6 border border-gold/10 rounded-sm">
          {/* Variants */}
          {product.variants && product.variants.length > 0 && (
            <VariantSelector
              variants={product.variants}
              selectedId={selectedVariantId}
              onSelect={setSelectedVariantId}
            />
          )}

          {/* Quantity */}
          <QuantityAdjuster
            quantity={quantity}
            max={maxQuantity}
            onIncrease={() => setQuantity(q => Math.min(q + 1, maxQuantity))}
            onDecrease={() => setQuantity(q => Math.max(q - 1, 1))}
          />

          {/* Add to Cart */}
          <Button
            variant="gold"
            size="lg"
            className="w-full text-lg h-14 relative overflow-hidden group"
            onClick={handleAddToCart}
            disabled={isOutOfStock || isAdding}
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              {isAdding ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-5 h-5 border-2 border-ink border-t-transparent rounded-full"
                  />
                  <span>Inscribing...</span>
                </>
              ) : isOutOfStock ? (
                <span>Currently Unavailable</span>
              ) : (
                <>
                  <span>Add to Vial</span>
                  <span className="text-xs uppercase tracking-widest ml-2 opacity-60">
                    — {selectedVariant?.price_sgd_formatted}
                  </span>
                </>
              )}
            </span>
          </Button>

          {/* Shipping Note */}
          <p className="text-center text-xs text-ink-muted italic">
            * Complimentary delivery within Singapore for orders above $100
          </p>
        </div>
      </motion.div>
    </div>
  );
}
