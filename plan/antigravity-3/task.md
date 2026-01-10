# Task: Phase 8 Cart System Integration Planning

## Objective
Create comprehensive implementation plan for Phase 8 (Cart System Integration) and prepare for execution.

---

## Previous Tasks Completed ✅

### README.md Update for Phase 7.1
- [x] Validated Phase 7.1 implementation (PDP route, atoms, hooks)
- [x] Created and executed README update plan
- [x] Phase 7.1 code review completed (95% score)

---

## Current: Phase 8 Planning

### 1. Codebase Validation
- [x] Review existing `CartController.php` (269 lines) — COMPLETE
- [x] Review existing `CartResource.php` — COMPLETE
- [x] Review existing `Cart.php` model — COMPLETE
- [x] Review existing `vial-drawer.tsx` (234 lines) — Uses localStorage only
- [x] Identify gap: Frontend not connected to backend API

### 2. Implementation Plan Creation
- [x] Define Sub-Phase 8.1: Frontend Types & API Client
- [x] Define Sub-Phase 8.2: Cart State Management Refactor
- [x] Define Sub-Phase 8.3: Vial Drawer Refinement
- [x] Define Sub-Phase 8.4: Guest/Auth Cart Merge
- [x] Incorporate Phase 7.1 observations (setTimeout removal, error boundary)
- [x] Create detailed file checklists for 11 files
- [x] Save implementation plan to project directory

### 3. User Review
- [ ] Submit plan for user approval

---

## Phase 8 Execution (Pending Approval)

### Sub-Phase 8.1: Types & API Client (0.5 day)
- [ ] Add Cart types to `types/api.ts`
- [ ] Add Cart API methods to `api-client.ts`
- [ ] Create `hooks/use-cart.ts`

### Sub-Phase 8.2: Cart Store Refactor (1.5 days)
- [ ] Refactor `cart-store.ts` for API sync
- [ ] Update `product-detail.tsx` with real API call

### Sub-Phase 8.3: Vial Drawer Refinement (2 days)
- [ ] Refactor `vial-drawer.tsx` with Shadcn Sheet
- [ ] Create `cart-item.tsx` atomic component
- [ ] Create `cart-loading.tsx` skeleton

### Sub-Phase 8.4: Integration (1 day)
- [ ] Create `cart-provider.tsx`
- [ ] Create `cart-error-boundary.tsx`
- [ ] Update `layout.tsx`

### Verification
- [ ] Run backend tests
- [ ] Run frontend type-check and build
- [ ] Manual E2E testing
