import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api-client';
import { 
  ApiResponse, 
  Product, 
  ProductFilters, 
  Category, 
  Tag 
} from '@/types/api';

// Hook for fetching product list with filters
export function useProducts(filters: ProductFilters = {}) {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => {
      // Convert filters to query string
      const params = new URLSearchParams();
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          params.append(key, String(value));
        }
      });

      return apiClient<ApiResponse<Product[]>>(`/products?${params.toString()}`);
    },
    placeholderData: (previousData) => previousData, // Keep previous data while fetching new data
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Hook for fetching a single product
export function useProduct(slug: string) {
  return useQuery({
    queryKey: ['product', slug],
    queryFn: () => apiClient<ApiResponse<Product>>(`/products/${slug}`),
    enabled: !!slug,
  });
}

// Hook for fetching categories (for filters)
export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => apiClient<ApiResponse<Category[]>>('/categories'),
    staleTime: 60 * 60 * 1000, // 1 hour
  });
}

// Hook for fetching tags (for filters)
export function useTags() {
  return useQuery({
    queryKey: ['tags'],
    queryFn: () => apiClient<ApiResponse<Tag[]>>('/tags'),
    staleTime: 60 * 60 * 1000, // 1 hour
  });
}
