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

export interface ProductDetail extends Product {
  variants: ProductVariant[];
  images: ProductImage[];
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

// ============================================================================
// Cart Types (Phase 8)
// ============================================================================

/**
 * Coupon applied to cart
 * Matches backend CouponResource.php
 */
export interface Coupon {
  id: string;
  code: string;
  type: 'percentage' | 'fixed_amount';
  value: number;
  minimum_amount: number | null;
  maximum_amount: number | null;
  description: string | null;
  starts_at: string;
  expires_at: string;
}

/**
 * Individual cart item with variant and product details
 * Matches backend CartItemResource.php
 */
export interface CartItem {
  id: string;
  variant: ProductVariant & {
    product: {
      id: string;
      name: string;
      slug: string;
      latin_name: string | null;
      primary_image: ProductImage | null;
    };
  };
  quantity: number;
  unit_price: number;
  unit_price_formatted: string;
  line_total: number;
  line_total_formatted: string;
}

/**
 * Full cart state from API
 * Matches backend CartResource.php
 */
export interface Cart {
  id: string;
  items: CartItem[];
  items_count: number;
  subtotal: number;
  subtotal_formatted: string;
  discount_amount: number;
  discount_amount_formatted: string;
  gst_amount: number;
  gst_amount_formatted: string;
  total: number;
  total_formatted: string;
  coupon: Coupon | null;
  expires_at: string | null;
  created_at: string;
  updated_at: string;
}

// ============================================================================
// Cart API Request Types
// ============================================================================

export interface AddToCartRequest {
  variant_id: string;
  quantity: number;
}

export interface UpdateCartItemRequest {
  quantity: number;
}

export interface ApplyCouponRequest {
  code: string;
}

