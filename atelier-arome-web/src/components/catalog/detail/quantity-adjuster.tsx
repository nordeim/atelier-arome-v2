import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuantityAdjusterProps {
  quantity: number;
  max: number;
  onIncrease: () => void;
  onDecrease: () => void;
  className?: string;
}

export function QuantityAdjuster({ quantity, max, onIncrease, onDecrease, className }: QuantityAdjusterProps) {
  return (
    <div className={cn("flex items-center space-x-4", className)}>
      <label className="text-sm font-display font-semibold tracking-wide text-ink-light uppercase mr-auto">
        Quantity
      </label>
      
      <div className="flex items-center border border-gold/30 rounded-sm bg-parchment">
        <Button
          variant="ghost"
          size="icon"
          onClick={onDecrease}
          disabled={quantity <= 1}
          className="h-10 w-10 text-gold-dark hover:text-ink hover:bg-gold/10 rounded-none"
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </Button>
        
        <div className="h-10 w-12 flex items-center justify-center border-x border-gold/30 bg-parchment-dark/30">
          <span className="font-display text-xl text-ink font-medium">
            {quantity}
          </span>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onIncrease}
          disabled={quantity >= max}
          className="h-10 w-10 text-gold-dark hover:text-ink hover:bg-gold/10 rounded-none"
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
