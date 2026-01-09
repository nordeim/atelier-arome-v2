export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  meta?: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
  links?: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  sort_order: number;
  is_active: boolean;
  products_count?: number;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  type: string;
}

export interface ProductImage {
  id: string;
  url: string;
  alt_text: string | null;
  is_primary: boolean;
  sort_order: number;
}

export interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  price_sgd: number;
  price_sgd_formatted: string;
  compare_at_price: number | null;
  compare_at_price_formatted: string | null;
  weight_grams: number;
  is_default: boolean;
  is_active: boolean;
  inventory?: {
    quantity: number;
    in_stock: boolean;
  };
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  latin_name: string | null;
  description: string;
  long_description: string | null;
  humour: 'calming' | 'uplifting' | 'grounding' | 'clarifying' | null;
  rarity: 'common' | 'rare' | 'limited';
  season: 'spring' | 'summer' | 'autumn' | 'winter' | null;
  extraction_method: string | null;
  folio_number: string | null;
  is_featured: boolean;
  is_active: boolean;
  sort_order: number;
  meta_data: Record<string, unknown> | null;
  category: Category;
  default_variant: ProductVariant;
  primary_image: ProductImage;
  variants?: ProductVariant[];
  images?: ProductImage[];
  tags?: Tag[];
  created_at: string;
  updated_at: string;
}

export interface ProductFilters {
  category?: string;
  humour?: string;
  rarity?: string;
  featured?: boolean;
  search?: string;
  season?: string;
  sort?: string;
  order?: 'asc' | 'desc';
  page?: number;
  per_page?: number;
}
