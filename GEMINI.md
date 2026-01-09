# GEMINI.md — Agent Operating Reference

**Last Updated:** January 9, 2026
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
| **Frontend** | Next.js 15 (App Router) + Tailwind 4.0 | ✅ Foundation Ready |
| **Backend** | Laravel 12 API | ✅ Core Complete |
| **Database** | PostgreSQL 16 (UUIDs, Soft Deletes) | ✅ Schema & Seeded |
| **State** | Zustand (Client) + TanStack Query (Server) | ✅ Configured |
| **Infra** | Docker (PostgreSQL, Redis, Mailhog) | ✅ Operational |

---

## 2. Codebase "Ground Truth" (Verified Jan 9, 2026)

*The backend is further along than previous documentation suggested.*

### ✅ Backend (Laravel 12)
- **Models:** **COMPLETE.** All 22+ models (Order, Product, User, etc.) exist in `app/Models/`.
- **Controllers:** **COMPLETE.** Full CRUD controllers exist in `app/Http/Controllers/Api/V1/` (including `ProductController`, `CartController`, `AuthController`).
- **API Resources:** **COMPLETE.** `ProductResource`, `CategoryResource`, etc., exist in `app/Http/Resources/`.
- **Routes:** **COMPLETE.** `routes/api.php` defines full V1 API endpoints (Products, Cart, Auth, Checkout).
- **Database:** **COMPLETE.** Migrations run, Seeders exist and work.

### ✅ Frontend (Next.js 15)
- **Structure:** **COMPLETE.** App Router (`(shop)`, `(marketing)`) is set up.
- **Components:** **PARTIAL.** Atomic components (`hero/`) exist. `ui/` (Shadcn) has `sheet.tsx`.
- **Config:** **COMPLETE.** `next.config.ts`, `tailwind.config.ts` are correct.
- **Integration:** **PENDING.** Frontend is not yet consuming the live API endpoints.

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
- **Loading:** Alchemical vessel bubbling (not standard spinners).
- **Transitions:** Slow, deliberate (500ms+), resembling page turning or ink spreading.
- **Animations:** `seal-rotate`, `liquid-wave`, `float-botanical` (defined in config).

---

## 4. Standard Operating Procedure ("The Meticulous Approach")

### Core Mandates
1.  **Construct and Conquer:** Never "patch" a broken file. Create a new, clean component file, verify it, then replace the broken one.
2.  **Atomic First:** Build the smallest part (e.g., `GoldBorderCorner.tsx`) before the whole (e.g., `HeroSection.tsx`).
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

**Current Phase:** Phase 7 Complete ✅ (Product Catalog Grid) -> Phase 7.1 (Product Detail Page)

**Recent Achievements:**
- **Product Catalog:** Integrated `Compendium` page with live API.
- **Components:** Created `ProductCard`, `ProductGrid`, `FilterSidebar` with "Illuminated" styling.
- **Infrastructure:** Implemented `api-client.ts` and TanStack Query hooks (`useProducts`).
- **State:** URL-based filtering fully implemented (Category, Humour, Rarity, Search).

**Immediate Actions Required:**
1.  **Product Detail Page:** Implement `/compendium/[slug]` to show full product details.
2.  **Cart Integration:** Ensure "Add to Vial" on Product Card works with the Cart Store (already wired, needs verification).
3.  **Real Data:** Verify images load correctly from the API (currently placeholders).

**Command to Resume:**
"The Product Catalog Grid is live and connected to the API. I am ready to build the Product Detail Page (`/compendium/[slug]`)."