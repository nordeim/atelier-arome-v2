import { useState } from 'react';
import Image from 'next/image';
import { ProductImage } from '@/types/api';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageGalleryProps {
  images: ProductImage[];
  productName: string;
}

export function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-parchment-dark/20 flex items-center justify-center border border-gold/20">
        <span className="font-display text-ink-muted italic">No Illustration</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Main Image Stage */}
      <div className="relative aspect-square w-full overflow-hidden bg-parchment-light border border-gold/20 p-8 group">
        
        {/* Corner Ornaments (Gold Leaf) */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold opacity-60" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold opacity-60" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold opacity-60" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold opacity-60" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={activeImage.url}
              alt={activeImage.alt_text || productName}
              fill
              className="object-contain drop-shadow-xl"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative w-20 h-20 flex-shrink-0 border transition-all duration-300",
              index === activeIndex 
                ? "border-gold opacity-100 ring-1 ring-gold ring-offset-2 ring-offset-parchment" 
                : "border-gold/20 opacity-60 hover:opacity-100 hover:border-gold/50"
            )}
            aria-label={`View image ${index + 1}`}
            aria-current={index === activeIndex}
          >
            <Image
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover p-1"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
