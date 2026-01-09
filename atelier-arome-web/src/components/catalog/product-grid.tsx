'use client';

import { ProductFilters } from '@/types/api';
import { useProducts } from '@/hooks/use-products';
import { ProductCard } from './product-card';
import { Skeleton } from '@/components/ui/skeleton';

interface ProductGridProps {
  filters: ProductFilters;
}

export function ProductGrid({ filters }: ProductGridProps) {
  const { data, isLoading, isError, error } = useProducts(filters);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-4 p-4 border border-stone-200 rounded-sm">
            <Skeleton className="h-[300px] w-full rounded-sm" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
            <div className="mt-auto flex justify-between">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-8 w-24" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-[400px] w-full flex-col items-center justify-center text-center text-ink-muted">
        <span className="text-4xl">❦</span>
        <h3 className="mt-4 text-xl font-display">The Archives are Unreachable</h3>
        <p className="mt-2 max-w-md text-sm">
          We could not retrieve the botanical records at this moment. 
          Please try again later.
        </p>
        <p className="mt-2 text-xs text-rose-500">{(error as Error).message}</p>
      </div>
    );
  }

  if (!data?.data || data.data.length === 0) {
    return (
      <div className="flex h-[400px] w-full flex-col items-center justify-center text-center text-ink-muted">
        <span className="text-4xl">∅</span>
        <h3 className="mt-4 text-xl font-display">No Essences Found</h3>
        <p className="mt-2 max-w-md text-sm">
          Your search yielded no results in our compendium. 
          Try adjusting your filters or search criteria.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Simple Pagination Feedback (Could be expanded to full pagination) */}
      <div className="mt-8 text-center text-xs text-ink-muted">
        Showing {data.data.length} of {data.meta?.total || data.data.length} essences
      </div>
    </>
  );
}
