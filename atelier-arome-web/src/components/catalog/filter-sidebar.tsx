'use client';

import { useCategories } from '@/hooks/use-products';
import { ProductFilters } from '@/types/api';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface FilterSidebarProps {
  filters: ProductFilters;
  onFilterChange: (key: keyof ProductFilters, value: any) => void;
  className?: string;
}

const HUMOURS = ['calming', 'uplifting', 'grounding', 'clarifying'];
const RARITIES = ['common', 'rare', 'limited'];
const SEASONS = ['spring', 'summer', 'autumn', 'winter'];

export function FilterSidebar({ filters, onFilterChange, className }: FilterSidebarProps) {
  const { data: categories, isLoading: isCategoriesLoading } = useCategories();

  return (
    <aside className={cn("w-full space-y-8 lg:w-64", className)}>
      {/* Search */}
      <div className="space-y-3">
        <h3 className="font-display text-lg font-medium text-ink">Search</h3>
        <input
          type="search"
          placeholder="Search essences..."
          className="w-full rounded-sm border border-gold/30 bg-parchment px-3 py-2 text-sm text-ink placeholder:text-ink-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          value={filters.search || ''}
          onChange={(e) => onFilterChange('search', e.target.value)}
        />
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <h3 className="font-display text-lg font-medium text-ink">Categories</h3>
        {isCategoriesLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ) : (
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => onFilterChange('category', undefined)}
                className={cn(
                  "text-sm transition-colors hover:text-gold-dark",
                  !filters.category ? "font-medium text-gold-dark" : "text-ink-light"
                )}
              >
                All Categories
              </button>
            </li>
            {categories?.data?.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => onFilterChange('category', category.slug)}
                  className={cn(
                    "text-sm transition-colors hover:text-gold-dark",
                    filters.category === category.slug ? "font-medium text-gold-dark" : "text-ink-light"
                  )}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Humours */}
      <div className="space-y-3">
        <h3 className="font-display text-lg font-medium text-ink">Alchemical Humour</h3>
        <div className="space-y-2">
          {HUMOURS.map((humour) => (
            <label key={humour} className="flex items-center gap-2 text-sm text-ink-light cursor-pointer hover:text-ink">
              <input
                type="radio"
                name="humour"
                className="accent-gold"
                checked={filters.humour === humour}
                onChange={() => onFilterChange('humour', filters.humour === humour ? undefined : humour)}
                onClick={(e) => {
                  if (filters.humour === humour) {
                    // Allow deselecting radio button
                    onFilterChange('humour', undefined);
                  }
                }}
              />
              <span className="capitalize">{humour}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rarity */}
      <div className="space-y-3">
        <h3 className="font-display text-lg font-medium text-ink">Rarity</h3>
        <div className="space-y-2">
          {RARITIES.map((rarity) => (
            <label key={rarity} className="flex items-center gap-2 text-sm text-ink-light cursor-pointer hover:text-ink">
              <input
                type="checkbox"
                className="accent-gold rounded-sm"
                checked={filters.rarity === rarity}
                onChange={() => onFilterChange('rarity', filters.rarity === rarity ? undefined : rarity)}
              />
              <span className="capitalize">{rarity}</span>
            </label>
          ))}
        </div>
      </div>
      
       {/* Season */}
       <div className="space-y-3">
        <h3 className="font-display text-lg font-medium text-ink">Season</h3>
        <div className="flex flex-wrap gap-2">
          {SEASONS.map((season) => (
            <button
               key={season}
               onClick={() => onFilterChange('season', filters.season === season ? undefined : season)} // Note: Type needs update in hook to support season if missing
               className={cn(
                 "px-2 py-1 text-xs border rounded-sm transition-all",
                 filters.season === season // Note: Type needs update
                   ? "border-gold bg-gold/10 text-gold-dark"
                   : "border-gold/20 text-ink-muted hover:border-gold/50"
               )}
            >
              <span className="capitalize">{season}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
