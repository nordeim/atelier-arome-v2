import {
  ApiResponse,
  ProductDetail,
  Cart,
  AddToCartRequest,
  UpdateCartItemRequest
} from '@/types/api';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';
const SESSION_ID_KEY = 'atelier-arome-session-id';

// ============================================================================
// Session Management (for guest carts)
// ============================================================================

/**
 * Get or create a session ID for guest cart tracking.
 * Stored in localStorage for persistence across page loads.
 */
function getSessionId(): string {
  if (typeof window === 'undefined') {
    return ''; // SSR - no session
  }

  let sessionId = localStorage.getItem(SESSION_ID_KEY);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem(SESSION_ID_KEY, sessionId);
  }
  return sessionId;
}

// ============================================================================
// API Error Class
// ============================================================================

export class ApiError extends Error {
  status: number;
  data: unknown;

  constructor(message: string, status: number, data: unknown) {
    super(message);
    this.status = status;
    this.data = data;
    this.name = 'ApiError';
  }
}

// ============================================================================
// Core API Client
// ============================================================================

interface ApiClientConfig extends Omit<RequestInit, 'body'> {
  body?: unknown;
}

export async function apiClient<T>(
  endpoint: string,
  { method = 'GET', body, headers = {}, ...customConfig }: ApiClientConfig = {}
): Promise<T> {
  const sessionId = getSessionId();

  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(sessionId && { 'X-Session-Id': sessionId }),
      ...(headers as Record<string, string>),
    },
    body: body ? JSON.stringify(body) : undefined,
    credentials: 'include', // Include cookies for auth
    ...customConfig,
  };

  // Clean up endpoint to avoid double slashes
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

  const response = await fetch(`${API_URL}${cleanEndpoint}`, config);
  const data = await response.json();

  if (response.ok) {
    return data;
  }

  throw new ApiError(
    data.message || 'An error occurred while fetching data.',
    response.status,
    data
  );
}

// ============================================================================
// Product API
// ============================================================================

export async function getProductBySlug(slug: string): Promise<ProductDetail> {
  const response = await apiClient<ApiResponse<ProductDetail>>(`/products/${slug}`);
  return response.data;
}

// ============================================================================
// Cart API (Phase 8)
// ============================================================================

/**
 * Get the current cart for the user/session.
 * Creates a new cart if none exists.
 */
export async function getCart(): Promise<Cart> {
  const response = await apiClient<ApiResponse<Cart>>('/cart');
  return response.data;
}

/**
 * Add an item to the cart.
 * If the variant already exists, quantity is incremented.
 */
export async function addToCart(request: AddToCartRequest): Promise<Cart> {
  const response = await apiClient<ApiResponse<Cart>>('/cart/items', {
    method: 'POST',
    body: request,
  });
  return response.data;
}

/**
 * Update the quantity of a cart item.
 */
export async function updateCartItem(
  itemId: string,
  request: UpdateCartItemRequest
): Promise<Cart> {
  const response = await apiClient<ApiResponse<Cart>>(`/cart/items/${itemId}`, {
    method: 'PUT',
    body: request,
  });
  return response.data;
}

/**
 * Remove an item from the cart.
 */
export async function removeCartItem(itemId: string): Promise<Cart> {
  const response = await apiClient<ApiResponse<Cart>>(`/cart/items/${itemId}`, {
    method: 'DELETE',
  });
  return response.data;
}

/**
 * Apply a coupon code to the cart.
 */
export async function applyCoupon(code: string): Promise<Cart> {
  const response = await apiClient<ApiResponse<Cart>>('/cart/coupon', {
    method: 'POST',
    body: { code },
  });
  return response.data;
}

/**
 * Remove the applied coupon from the cart.
 */
export async function removeCoupon(): Promise<Cart> {
  const response = await apiClient<ApiResponse<Cart>>('/cart/coupon', {
    method: 'DELETE',
  });
  return response.data;
}

