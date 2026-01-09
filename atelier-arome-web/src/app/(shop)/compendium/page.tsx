'use client';

import { Suspense, useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { ProductGrid } from '@/components/catalog/product-grid';
import { FilterSidebar } from '@/components/catalog/filter-sidebar';
import { ProductFilters } from '@/types/api';

function CompendiumContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Parse filters from URL
  const filters: ProductFilters = {
    category: searchParams.get('category') || undefined,
    humour: searchParams.get('humour') || undefined,
    rarity: searchParams.get('rarity') || undefined,
    season: (searchParams.get('season') as any) || undefined,
    search: searchParams.get('search') || undefined,
    sort: searchParams.get('sort') || 'sort_order',
  };

  // Update URL when filters change
  const handleFilterChange = useCallback(
    (key: keyof ProductFilters, value: any) => {
      const params = new URLSearchParams(searchParams.toString());
      
      if (value === undefined || value === null || value === '') {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }

      // Reset page when filtering
      if (key !== 'page') {
        params.delete('page');
      }

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      {/* Header */}
      <div className="mb-16 text-center">
        <span className="font-display text-sm tracking-widest text-gold-dark uppercase">The First Folio</span>
        <h1 className="mt-4 font-display text-5xl font-medium text-ink md:text-6xl">
          Botanical Compendium
        </h1>
        <div className="mx-auto mt-6 h-px w-24 bg-gold/50" />
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-light font-serif">
          A curated collection of artisanal essences, extracted with patience and 
          precision from nature's most aromatic specimens.
        </p>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row">
        {/* Sidebar */}
        <FilterSidebar 
          filters={filters} 
          onFilterChange={handleFilterChange} 
        />

        {/* Grid */}
        <main className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm text-ink-muted">
              {/* Counter could go here */}
            </span>
            <select
              value={filters.sort}
              onChange={(e) => handleFilterChange('sort', e.target.value)}
              className="rounded-sm border-none bg-transparent text-sm font-medium text-ink focus:ring-0 cursor-pointer hover:text-gold-dark transition-colors"
            >
              <option value="sort_order">Folio Order</option>
              <option value="name">Name (A-Z)</option>
              <option value="created_at">Newest First</option>
            </select>
          </div>
          
          <ProductGrid filters={filters} />
        </main>
      </div>
    </div>
  );
}

export default function CompendiumPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-parchment" />}>
      <CompendiumContent />
    </Suspense>
  );
}
