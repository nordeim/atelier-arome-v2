import { useQuery } from '@tanstack/react-query';
import { getProductBySlug } from '@/lib/api-client';

export function useProductDetail(slug: string) {
  return useQuery({
    queryKey: ['product', slug],
    queryFn: () => getProductBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1, // Don't retry too many times for 404s
  });
}
