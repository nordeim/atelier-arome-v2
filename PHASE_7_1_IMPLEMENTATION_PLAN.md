# Phase 7.1 Implementation Plan: Product Detail Page
## "The Compendium Detail"

> **Goal:** Create a visually immersive, SEO-optimized Product Detail Page (PDP) at `/compendium/[slug]` that embodies the "Illuminated Manuscript" aesthetic while providing seamless e-commerce functionality.

---

### 1. Sub-Phase 7.1.1: Data Layer & Types
**Objective:** Ensure the frontend can fetch rich product details (including variants, images, and inventory) by slug.

#### Files to Create/Update:

*   **`src/types/api.ts`** (Update)
    *   **Purpose:** Add comprehensive types for the Product Detail response, including relations that might be lighter in the list view.
    *   **Features:** `ProductDetail` interface, `Variant` with inventory status, `Image` with sort order.
    *   **Checklist:**
        - [ ] Define `ProductDetail` extending `Product`
        - [ ] Ensure `Variant` includes `sku`, `price`, `capacity`, `inventory_count`

*   **`src/lib/api-client.ts`** (Update)
    *   **Purpose:** Add specific method to fetch product by slug.
    *   **Features:** `getProductBySlug(slug: string)` method handling 404s gracefully.
    *   **Checklist:**
        - [ ] Implement `getProductBySlug`
        - [ ] Add error handling for non-existent slugs

*   **`src/hooks/use-product-detail.ts`** (Create)
    *   **Purpose:** TanStack Query hook for client-side data management (prefetching, caching).
    *   **Features:** `useProductDetail(slug)` hook.
    *   **Checklist:**
        - [ ] Wrap `api.getProductBySlug`
        - [ ] Configure staleTime (5 minutes)

---

### 2. Sub-Phase 7.1.2: Atomic Components ("The Illuminations")
**Objective:** Build specific UI elements for the PDP, adhering to the design system (Gold/Ink/Parchment).

#### Files to Create:

*   **`src/components/catalog/detail/variant-selector.tsx`**
    *   **Purpose:** Allow user to select size (5ml, 15ml, 30ml).
    *   **Design:** Custom "Illuminated" radio buttons. Not standard browser radios. Gold border on selected state.
    *   **Checklist:**
        - [ ] Map through `variants`
        - [ ] Display capacity and price
        - [ ] Handle "Out of Stock" state visually (opacity/strikethrough)
        - [ ] Animation on selection change

*   **`src/components/catalog/detail/quantity-adjuster.tsx`**
    *   **Purpose:** Increment/Decrement purchase quantity.
    *   **Design:** Serif font numbers, gold `+` and `-` buttons.
    *   **Checklist:**
        - [ ] Min value 1, Max value (inventory limit)
        - [ ] Visual disabled state when at limits

*   **`src/components/catalog/detail/image-gallery.tsx`**
    *   **Purpose:** Display product imagery with an artistic touch.
    *   **Design:** Main image with "Gold Leaf" corner borders. Thumbnail strip below.
    *   **Checklist:**
        - [ ] Main image display with aspect ratio locking
        - [ ] Thumbnails list
        - [ ] Zoom/Lightbox capability (optional for V1, good for V2)
        - [ ] Fallback for missing images

*   **`src/components/catalog/detail/alchemical-properties.tsx`**
    *   **Purpose:** Visualize the Humour, Rarity, and Season.
    *   **Design:** Use the existing icons/symbols (Sun, Moon, Earth) in a decorative arrangement.
    *   **Checklist:**
        - [ ] Display Humour (Calming/Uplifting etc.) with icon
        - [ ] Display Season
        - [ ] Display Rarity (Gold text for 'Rare')

---

### 3. Sub-Phase 7.1.3: Orchestrator Component ("The Composition")
**Objective:** Assemble the atoms into the main product interaction area.

#### Files to Create:

*   **`src/components/catalog/product-detail.tsx`**
    *   **Purpose:** The interactive client component that holds the state (selected variant, quantity).
    *   **Features:**
        - Tracks `selectedVariantId`.
        - Tracks `quantity`.
        - Handles "Add to Vial" (Cart) click.
        - Calculates total price dynamically.
    *   **Checklist:**
        - [ ] Layout: Grid (Images Left, Details Right)
        - [ ] Integrate `VariantSelector`
        - [ ] Integrate `QuantityAdjuster`
        - [ ] Integrate `useCartStore` for "Add to Cart" action
        - [ ] Toast notification on successful add

---

### 4. Sub-Phase 7.1.4: Page Implementation & Routing
**Objective:** Integrate into the Next.js App Router with SEO and Loading states.

#### Files to Create:

*   **`src/app/(shop)/compendium/[slug]/page.tsx`**
    *   **Purpose:** The Server Component entry point.
    *   **Features:**
        - Fetches initial data on server (SEO).
        - Generates Metadata (Title, Description, OpenGraph).
        - Passes data to `ProductDetail` client component.
    *   **Checklist:**
        - [ ] `generateMetadata` function
        - [ ] Server-side data fetch
        - [ ] Pass hydration boundary to Client Component

*   **`src/app/(shop)/compendium/[slug]/loading.tsx`**
    *   **Purpose:** Skeleton state while fetching.
    *   **Design:** "Shimmering" parchment effect.
    *   **Checklist:**
        - [ ] Skeleton layout matching PDP structure

*   **`src/app/(shop)/compendium/[slug]/not-found.tsx`**
    *   **Purpose:** Graceful 404 when slug is invalid.
    *   **Design:** "The page you seek has been lost to the archives."
    *   **Checklist:**
        - [ ] User-friendly error message
        - [ ] Link back to Compendium

---

### 5. Sub-Phase 7.1.5: Verification
**Objective:** Ensure quality and correctness.

*   **Checklist:**
    - [ ] **Functional:** Can navigate from Grid -> Detail.
    - [ ] **Functional:** Can select different variants.
    - [ ] **Functional:** "Add to Vial" adds correct item/price/qty to Cart Store.
    - [ ] **Visual:** Typography uses Cormorant (headings) and Crimson (body).
    - [ ] **Visual:** Mobile responsiveness (stacking order).
    - [ ] **Tech:** No console errors (Hydration mismatches).
