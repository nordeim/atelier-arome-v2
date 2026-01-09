# GEMINI.md — Agent Operating Reference

**Last Updated:** January 10, 2026
**Agent Role:** Frontend Architect & Avant-Garde UI Designer
**Operating Mode:** Meticulous, Anti-Generic, "Construct and Conquer"

---

## 1. Project Identity: Atelier Arôme

**Concept:** A production-grade headless e-commerce platform for artisanal aromatherapy.
**Aesthetic:** "Illuminated Manuscript" (Renaissance-inspired).
**Philosophy:** **Anti-Generic.** We reject modern minimalist clichés (Inter font, vast whitespace, flat cards) in favor of texture, serif typography (`Cormorant Garamond`), rich colors (Gold/Ink/Parchment), and meaningful ornamentation.

### Core Tech Stack
| Layer | Tech | Status |
|-------|------|--------|
| **Frontend** | Next.js 15 (App Router) + Tailwind 4.0 | ✅ Phase 7.1 Complete |
| **Backend** | Laravel 12 API | ✅ Core Complete (100%) |
| **Database** | PostgreSQL 16 (UUIDs, Soft Deletes) | ✅ Schema & Seeded |
| **State** | Zustand (Client) + TanStack Query (Server) | ✅ Configured |
| **Infra** | Docker (PostgreSQL, Redis, Mailhog) | ✅ Operational |

---

## 2. Codebase "Ground Truth" (Verified Jan 10, 2026)

### ✅ Backend (Laravel 12)
- **Models:** **COMPLETE.** All 22 models (Order, Product, User, etc.) exist in `app/Models/`.
- **Controllers:** **COMPLETE.** Full CRUD controllers exist in `app/Http/Controllers/Api/V1/` (including `ProductController`, `CartController`, `AuthController`).
- **API Resources:** **COMPLETE.** `ProductResource`, `CategoryResource`, etc., exist in `app/Http/Resources/`.
- **Routes:** **COMPLETE.** `routes/api.php` defines full V1 API endpoints (Products, Cart, Auth, Checkout).
- **Database:** **COMPLETE.** Migrations run, Seeders exist and work.

### ✅ Frontend (Next.js 15)
- **Structure:** **COMPLETE.** App Router (`(shop)`, `(marketing)`) is set up.
- **Product Catalog:** **COMPLETE.** `filter-sidebar`, `product-card`, `product-grid` components are live.
- **Product Detail:** **COMPLETE.** `/compendium/[slug]` route implemented with server-side SEO and atomic components (`variant-selector`, `image-gallery`).
- **Cart:** **PENDING.** `vial-drawer` exists but needs refinement and full backend syncing.
- **Components:** **HIGH.** `ui/` contains custom Shadcn primitives. Atomic atoms (`hero/`, `catalog/detail/`) are robust.

---

## 3. The "Anti-Generic" Design System

**Do not use standard Tailwind colors.** Use these tokens (verified from `tailwind.config.ts`):

```typescript
colors: {
  ink: { DEFAULT: '#2A2D26', light: '#4A4D46', muted: '#545752' },
  gold: { DEFAULT: '#C9A769', light: '#E8D8B6', dark: '#A98750', muted: 'rgba(201, 167, 105, 0.3)', text: '#8B7355' },
  parchment: { DEFAULT: '#FAF8F5', dark: '#F5F1EB', darker: '#E8E4D9' },
  // Botanicals
  lavender: '#B8A9C9',
  eucalyptus: '#7CB9A0',
  bergamot: '#F5D489',
  rosehip: '#E8B4B8',
}
```

**Typography:**
- **Headlines:** `Cormorant Garamond` (Serif, display)
- **Body:** `Crimson Pro` (Serif, readable)
- **Accents:** `Great Vibes` (Script, use sparingly)

**Key Interaction Patterns:**
- **Hover:** "Liquid" sway or gold glow bloom (not simple opacity change).
- **Loading:** Shimmering parchment skeletons (not standard spinners).
- **Transitions:** Slow, deliberate (500ms+), resembling page turning or ink spreading.
- **Animations:** `seal-rotate`, `liquid-wave`, `float-botanical` (defined in config).

---

## 4. Standard Operating Procedure ("The Meticulous Approach")

### Core Mandates
1.  **Construct and Conquer:** Never "patch" a broken file. Create a new, clean component file, verify it, then replace the broken one.
2.  **Atomic First:** Build the smallest part (e.g., `VariantSelector.tsx`) before the whole (e.g., `ProductDetail.tsx`).
3.  **Library Discipline:** Use Shadcn primitives. Do not invent a new Modal. Style the Shadcn Dialog to look like an illuminated manuscript.
4.  **Deep Validation:** Before marking a task "Done", run the build (`pnpm build`) and check the database.

### Workflow
1.  **Analyze:** Deep requirement mining.
2.  **Plan:** Structured roadmap with checklists.
3.  **Validate:** Explicit confirmation before coding.
4.  **Implement:** Modular, tested, library-first.
5.  **Verify:** Rigorous QA (Lint, Build, Test).
6.  **Deliver:** Handoff with knowledge transfer.

---

## 5. Next Session Strategy

**Current Phase:** Phase 7.1 Complete ✅ (Product Detail Page) -> Phase 8 (Cart System Integration)

**Recent Achievements:**
- **Product Detail Page:** Full PDP implementation with `VariantSelector`, `QuantityAdjuster`, and `ImageGallery`.
- **Server Rendering:** Dynamic SEO metadata and server-side data fetching for products.
- **Design:** Implemented "Gold Leaf" styling for image containers and buttons.
- **State:** `useProductDetail` hook with caching and optimistic updates.

**Immediate Actions Required (Phase 8):**
1.  **Cart Drawer Refinement:** Polish `vial-drawer.tsx` to match the PDP quality (currently basic).
2.  **Item Removal:** Implement removal and quantity editing logic in the drawer.
3.  **Backend Sync:** Ensure cart state persists via the `CartController` API for authenticated users.

**Command to Resume:**
"Phase 7.1 is complete. I am ready to begin Phase 8: Cart System Integration."
