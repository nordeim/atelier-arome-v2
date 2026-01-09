import { 
  Moon, Sun, Anchor, Wind, 
  Sprout, Leaf, Snowflake, 
  Sparkles, Hexagon
} from 'lucide-react';
import { ProductDetail } from '@/types/api';
import { cn } from '@/lib/utils';

interface AlchemicalPropertiesProps {
  product: ProductDetail;
}

const HUMOUR_ICONS = {
  calming: Moon,
  uplifting: Sun,
  grounding: Anchor,
  clarifying: Wind,
};

const SEASON_ICONS = {
  spring: Sprout,
  summer: Sun,
  autumn: Leaf,
  winter: Snowflake,
};

export function AlchemicalProperties({ product }: AlchemicalPropertiesProps) {
  const HumourIcon = product.humour ? HUMOUR_ICONS[product.humour] : Hexagon;
  const SeasonIcon = product.season ? SEASON_ICONS[product.season] : Hexagon;

  return (
    <div className="grid grid-cols-3 gap-4 border-y border-gold/20 py-6 my-8">
      {/* Humour */}
      <div className="flex flex-col items-center text-center space-y-2 group">
        <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold-dark group-hover:bg-gold/10 transition-colors">
          <HumourIcon className="w-5 h-5" />
        </div>
        <div>
          <span className="block text-xs uppercase tracking-widest text-ink-muted">Humour</span>
          <span className="font-display text-lg capitalize text-ink">{product.humour || 'Neutral'}</span>
        </div>
      </div>

      {/* Season */}
      <div className="flex flex-col items-center text-center space-y-2 group">
        <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold-dark group-hover:bg-gold/10 transition-colors">
          <SeasonIcon className="w-5 h-5" />
        </div>
        <div>
          <span className="block text-xs uppercase tracking-widest text-ink-muted">Season</span>
          <span className="font-display text-lg capitalize text-ink">{product.season || 'All'}</span>
        </div>
      </div>

      {/* Rarity */}
      <div className="flex flex-col items-center text-center space-y-2 group">
        <div className={cn(
          "w-10 h-10 rounded-full border flex items-center justify-center transition-colors",
          product.rarity === 'rare' || product.rarity === 'limited'
            ? "border-gold text-gold bg-gold/5"
            : "border-gold/30 text-gold-dark group-hover:bg-gold/10"
        )}>
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <span className="block text-xs uppercase tracking-widest text-ink-muted">Rarity</span>
          <span className={cn(
            "font-display text-lg capitalize",
            (product.rarity === 'rare' || product.rarity === 'limited') ? "text-gold-dark font-semibold" : "text-ink"
          )}>
            {product.rarity}
          </span>
        </div>
      </div>
    </div>
  );
}
