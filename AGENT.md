# AGENT.md

This file provides guidance to Claude Code (claude.ai/code) when working on code in this repository.

---

## Project Overview

**Atelier Arôme** is a production-grade headless e-commerce platform for a Singapore-based artisanal aromatherapy company featuring a distinctive "Illuminated Manuscript" Renaissance-inspired aesthetic.

### Architecture Pattern

```
┌─────────────────────────────────────────────────────┐
│              HEADLESS COMMERCE                      │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ┌──────────────┐          ┌──────────────────┐    │
│  │  Next.js 15  │◄──JSON──►│  Laravel 12 API  │    │
│  │  (Frontend)  │          │  (Backend)       │    │
│  │  Vercel Edge │          │  Forge/Vapor     │    │
│  └──────────────┘          └──────────────────┘    │
│         │                           │               │
│         │                           ▼               │
│         │                  ┌──────────────────┐    │
│         │                  │  PostgreSQL 16   │    │
│         │                  │  Redis 7.x       │    │
│         │                  │  Meilisearch     │    │
│         │                  └──────────────────┘    │
│         │                                          │
│         ▼                                          │
│  ┌──────────────┐                                  │
│  │  Stripe API  │                                  │
│  │  PayNow      │                                  │
│  │  SingPost    │                                  │
│  │  Cloudinary   │                                  │
│  └──────────────┘                                  │
└─────────────────────────────────────────────────────┘
```

### Technology Stack

**Backend (Laravel 12 API):**
- PHP 8.3+ with Laravel 12.x
- PostgreSQL 16 (primary database)
- Redis 7.x (cache, session, queue)
- Laravel Sanctum 4.x (API authentication)
- Filament 3.x (admin panel)
- Laravel Horizon 5.x (queue management)
- Meilisearch 1.x (full-text search)

**Frontend (Next.js 15):**
- Next.js 15.x with App Router
- React 19.x + TypeScript 5.x
- Tailwind CSS 4.0 (custom "Illuminated Manuscript" theme)
- Shadcn-UI + Radix primitives
- Zustand (client state) + TanStack Query (server state)
- React Hook Form + Zod (forms & validation)
- Framer Motion 11.x (animations)

---

## Repository Structure

This is a **monorepo** containing two separate projects:

```
atelier-arome/
├── atelier-arome-api/      # Laravel 12 backend API ✅
├── atelier-arome-web/      # Next.js 15 frontend ✅
├── docker/                 # Docker configuration
│   └── docker-compose.yml
├── docs/                   # Project documentation
│   └── Comprehensive_Project_Understanding.md
├── Updated_Project_Understanding.md  # Current project state
├── MASTER_EXECUTION_PLAN.md        # Phase-by-phase implementation plan
├── Project_Architecture_Document.md
├── index.html              # Static mockup reference
├── styles.css              # Design system reference
├── main.js                # JavaScript reference
└── AGENT.md               # This file
```

**Current Status:** Phase 8 Complete (Cart System Integration) ✅ (January 10, 2026)

---

## Component Architecture

### Atomic Design Pattern

The frontend uses an **atomic component architecture** for maintainability and scalability:

```
src/components/
├── catalog/                   # Product Catalog (Phase 7)
│   ├── detail/                # PDP Atomic Components (Phase 7.1)
│   │   ├── variant-selector.tsx
│   │   ├── quantity-adjuster.tsx
│   │   ├── image-gallery.tsx
│   │   └── alchemical-properties.tsx
│   ├── product-card.tsx       # Illuminated product card
│   ├── product-grid.tsx       # Responsive grid with skeletons
│   ├── filter-sidebar.tsx     # Filter sidebar with URL sync
│   └── product-detail.tsx     # PDP Orchestrator component
├── hero/                      # Atomic hero components
│   ├── hero-frame.tsx          # Layout + border ornaments
│   ├── alchemical-vessel.tsx    # Vessel + liquid animation
│   └── botanical-layer.tsx      # Parallax botanical elements
├── layout/                    # Orchestrator components
│   ├── header.tsx             # Navigation + scroll effects
│   └── footer.tsx             # Colophon footer
├── cart/                      # Cart components (Phase 8) ✅
│   ├── vial-drawer.tsx        # Shadcn Sheet + TanStack Query hooks
│   ├── cart-item.tsx          # Atomic cart item with Gold Leaf ornaments
│   └── cart-loading.tsx       # Skeleton loading state
├── sections/                  # Page sections
│   ├── compendium-section.tsx # Product grid
│   ├── alchemy-section.tsx    # Process steps
│   ├── testimonials-section.tsx
│   └── newsletter-section.tsx # Form validation + accessibility
└── ui/                        # Shadcn-UI primitives + custom
    ├── sheet.tsx              # Radix Dialog wrapper
    ├── button.tsx             # Styled button
    ├── skeleton.tsx           # Skeleton loading state
    ├── toast.tsx              # Toast notifications
    └── animate-in-view.tsx    # Scroll animations

src/hooks/                     # Custom React hooks
├── index.ts                   # Barrel export
├── use-scroll.ts              # useSyncExternalStore for scroll
├── use-intersection.ts        # IntersectionObserver wrapper
├── use-reduced-motion.ts      # Reduced motion detection
├── use-products.ts            # TanStack Query hook for products
├── use-product-detail.ts      # Hook for fetching single product
└── use-cart.ts                # Cart operations with optimistic updates (Phase 8)

src/stores/                    # Zustand stores
├── cart-store.ts              # Cart state with localStorage
└── toast-store.ts             # Toast notification queue

src/lib/                       # Utilities
├── utils.ts                   # cn() class merger
├── a11y.ts                    # Accessibility helpers
└── api-client.ts              # Fetch API client + Cart API methods (Phase 8)
```

**Atomic Components (Single Responsibility):**
- `variant-selector.tsx` - Custom radio-style selection for product sizes
- `image-gallery.tsx` - Main image with gold ornaments and thumbnails
- `hero-frame.tsx` - Layout frame with gold-leaf border corners

**Orchestrator Components (Composition):**
- `product-detail.tsx` - Composes PDP atoms, handles state and cart logic
- `hero-section.tsx` - Composes atomic components, typography, actions
- `header.tsx` - Navigation, mobile menu, cart integration

**State Management (Zustand):**
```typescript
// src/stores/cart-store.ts
export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      cartDrawerOpen: false,
      addToCart: (item) => { /* ... */ },
      removeFromCart: (id) => { /* ... */ },
      // ...
    }),
    { name: 'atelier-arome-cart' }
  )
);
```

**Key Principles:**
1. **Atomicity:** Each component has single responsibility (~60-150 lines)
2. **Composition:** Orchestrators compose atomic components
3. **Isolation:** Components can be tested in isolation
4. **Styling:** Tailwind utilities (not inline styles or globals.css)

---

## Visual UI/UX Alignment

### Overview

The dynamic Next.js landing page and product detail pages are aligned with the Renaissance "Illuminated Manuscript" aesthetic, using Cormorant Garamond, Byzantine Gold (#C9A769), and Ink (#2A2D26) on Parchment (#FAF8F5).

### Key PDP Visuals (Phase 7.1)

| Element | implementation |
|---------|----------------|
| Image Ornaments | Gold leaf border corners via absolute positioning |
| Alchemical Icons | Humour (Moon/Sun), Season, Rarity symbols |
| Variant Tiles | Custom gold-bordered tiles with active state corners |
| Loading Skeletons | Two-column shimmering layout matching final PDP |
| Metadata | Dynamic SEO titles like "Provence Lavender | Atelier Arôme" |

### BEM Class Architecture

The project continues to use **BEM (Block Element Modifier)** naming from the static reference where applicable in `atelier.css`.

---

## Development Workflow

### Backend (Laravel API)

**Common Commands:**
```bash
php artisan test                 # Run all tests
php artisan test tests/Feature/Api/ProductTest.php
./vendor/bin/phpstan analyse     # Static analysis
./vendor/bin/pint                # Code style fixer
php artisan migrate:fresh --seed # Reset database
```

### Frontend (Next.js)

**Common Commands:**
```bash
pnpm dev                 # Start dev server (localhost:3000)
pnpm build               # Production build
pnpm lint                # ESLint
pnpm type-check          # TypeScript type checking
pnpm format              # Prettier formatting
pnpm test                # Run unit tests
```

---

## Critical Architecture Patterns

### 1. UUID Primary Keys
**ALL tables use UUID primary keys.**

### 2. Soft Deletes
**Critical tables use soft deletes.**

### 3. Snapshot Pattern (Order Items)
**Order items store product data at purchase time.**

### 4. Alchemical Product Properties
Products categorized by humour, rarity, and season enums.

### 5. Singapore-Specific Commerce
GST (9%), PayNow, SingPost, SGD currency.

### 6. State Management Strategy
Zustand (client UI) + TanStack Query (server data).

---

## Design System: "Illuminated Manuscript"

### Core Design Tokens
- **Ink**: #2A2D26
- **Gold**: #C9A769
- **Parchment**: #FAF8F5
- **Fonts**: Cormorant Garamond (Display), Crimson Pro (Body), Great Vibes (Accent)

---

**Last Updated:** January 10, 2026
**Project Status:** Phase 8 Complete ✅ → Phase 9 Ready ⏳
**Architecture Type:** Headless Commerce (Laravel 12 API + Next.js 15)
**Backend Server:** http://localhost:8000 ✅
**Frontend Server:** http://localhost:3000 ✅
**Database:** PostgreSQL 16 (Docker: atelier_db) ✅
**Cache/Queue:** Redis 7.4 (Docker: atelier_redis) ✅
**Email Testing:** Mailhog (Docker: atelier_mailhog) ✅