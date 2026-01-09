# Frontend & Backend Integration Plan: Product Catalog

**Status:** Draft
**Phase:** 7 (Product Catalog Frontend)
**Date:** January 9, 2026
**Author:** Frontend Architect (Agent)

---

## 1. Executive Summary

This plan details the integration of the now-complete Laravel 12 Backend API with the Next.js 15 Frontend for the Product Catalog (Compendium) feature. The goal is to replace the current mock data and BEM-style styling in `compendium-section.tsx` with a robust, type-safe, real-time data fetching system using TanStack Query and a refactored, atomic component architecture styled with Tailwind CSS 4.0.

## 2. Technical Architecture

### 2.1 Data Flow
```mermaid
graph LR
    API[Laravel API] --JSON--> Fetch[API Client (fetch)]
    Fetch --Typed Data--> Hook[useProducts Query]
    Hook --State--> Grid[ProductGrid Component]
    Grid --Props--> Card[ProductCard Component]
    URL[URL Search Params] --Sync--> Filter[FilterSidebar]
    Filter --Update--> Hook
```

### 2.2 Integration Points
| Backend Endpoint | Frontend Hook | Component |
|------------------|---------------|-----------|
| `GET /api/v1/products` | `useProducts` | `CompendiumSection` / `ProductGrid` |
| `GET /api/v1/categories` | `useCategories` | `FilterSidebar` |
| `GET /api/v1/tags` | `useTags` | `FilterSidebar` |

---

## 3. Implementation Steps

### Step 1: Type Definitions (Contract Alignment)
**Goal:** Ensure Frontend types strictly match Backend API Resources.
**Action:** Create `src/types/api.ts`.
**Source of Truth:** `ProductResource.php`, `CategoryResource.php`, `TagResource.php`.

```typescript
// Draft Interface
export interface Product {
  id: string;
  name: string;
  slug: string;
  latin_name: string; // Note snake_case from API
  humour: 'calming' | 'uplifting' | 'grounding' | 'clarifying';
  rarity: 'common' | 'rare' | 'limited';
  season: 'spring' | 'summer' | 'autumn' | 'winter';
  price_sgd: number; // Derived from default_variant
  primary_image: { url: string; alt_text: string };
  category: { name: string; slug: string };
}
```

### Step 2: API Client Layer
**Goal:** specific, type-safe API client wrapper.
**Action:** Create `src/lib/api-client.ts`.
**Details:**
- Base URL from `NEXT_PUBLIC_API_URL`.
- Default headers (`Accept: application/json`, `Content-Type: application/json`).
- Error handling (throwing formatted errors).

### Step 3: Data Fetching Hooks (TanStack Query)
**Goal:** Reactive data fetching with caching and state management.
**Action:** Create `src/hooks/use-products.ts`.
**Details:**
- `useProducts(filters)`: Accepts filter object.
- `useCategories()`: For filter UI.
- `useTags()`: For filter UI.
- Implement `keepPreviousData: true` for smooth pagination/filtering.

### Step 4: Component Refactoring ("Construct and Conquer")
**Goal:** Replace monolithic, BEM-styled `compendium-section.tsx` with atomic, Tailwind-styled components.

**New Components:**
1.  `src/components/catalog/product-card.tsx`:
    -   **Visuals:** "Illuminated Manuscript" style (border, illumination glow).
    -   **Props:** `product: Product`.
    -   **State:** Hover effects (liquid sway).

2.  `src/components/catalog/product-grid.tsx`:
    -   **Layout:** Responsive grid (1col mobile -> 3col desktop).
    -   **State:** Loading skeletons.

3.  `src/components/catalog/filter-sidebar.tsx`:
    -   **UI:** Accordion-style filters (Shadcn Accordion?).
    -   **Logic:** Syncs with URL Search Params.

### Step 5: Integration & URL Sync
**Goal:** Ensure shareable URLs for filtered views.
**Action:** Update `src/app/(shop)/compendium/page.tsx` (or wherever the route is).
**Details:**
- Use `useSearchParams` to initialize state.
- Update URL on filter change.

---

## 4. Verification Checklist

- [ ] **Type Check:** `pnpm type-check` passes.
- [ ] **Data Verification:** Product data matches seeded database data.
- [ ] **Filtering:** Clicking "Calming" updates the list and the URL.
- [ ] **Performance:** Loading states are visible (skeletons), no layout shift.
- [ ] **Accessibility:** Focus management on filters, ARIA labels on cards.

## 5. Risk Assessment

| Risk | Mitigation |
|------|------------|
| **CORS Errors** | Ensure `config/cors.php` allows `localhost:3000`. |
| **Image Loading** | Ensure `next.config.ts` allows image domains (placehold.co). |
| **Type Mismatch** | Manually verify JSON response against TS interfaces. |

---

Completed the detailed comprehensive implementation plan for the Product Catalog integration.

Deliverables:
 1. Plan: Frontend_and_Backend_Integration_Plan.md created.
 2. Implementation: All steps from the plan executed (Types, API Client, Hooks, Components, Page).
 3. Documentation: GEMINI.md updated with the new status.

The Product Catalog (/compendium) is now fully integrated with the Laravel Backend, featuring:
 * Real-time data fetching via TanStack Query.
 * URL-synchronized filtering (Category, Humour, Rarity, Season, Search).
 * "Illuminated Manuscript" styling for cards and sidebar.
 * Robust error and loading states.

