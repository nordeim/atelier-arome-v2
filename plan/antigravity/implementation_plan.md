# BEM Class Migration Plan — Atelier Arôme

**Date:** January 9, 2026  
**Status:** Planning Phase  
**Objective:** Align Next.js components with static HTML mockup using BEM classes

---

## Executive Summary

This plan migrates **10 React component files** from Tailwind utility classes to the BEM (Block Element Modifier) methodology used in `styles.css` (4,212 lines). This will achieve **visual parity** with the static HTML mockup.

> [!IMPORTANT]
> The CSS is already imported via `atelier.css`. We only need to update the **className** attributes in React components to reference the BEM classes.

---

## Component Inventory

| Component | File Path | Static HTML Reference | Priority |
|-----------|-----------|----------------------|----------|
| **Header** | `layout/header.tsx` | `.header`, `.header__*` (40+ classes) | 🔴 P1 |
| **Hero Section** | `hero/hero-section.tsx` | `.hero`, `.hero__*` (50+ classes) | 🔴 P1 |
| **Hero Frame** | `hero/hero-frame.tsx` | `.hero__border`, `.hero__watermark` | 🔴 P1 |
| **Botanical Layer** | `hero/botanical-layer.tsx` | `.hero__botanical`, `.botanical__*` | 🟡 P2 |
| **Alchemical Vessel** | `hero/alchemical-vessel.tsx` | `.hero__vessel`, `.vessel__*` | 🟡 P2 |
| **Compendium Section** | `sections/compendium-section.tsx` | `.compendium`, `.essence-card__*` | 🔴 P1 |
| **Alchemy Section** | `sections/alchemy-section.tsx` | `.alchemy`, `.alchemy-step__*` | 🟡 P2 |
| **Testimonials Section** | `sections/testimonials-section.tsx` | `.manuscript`, `.manuscript-entry__*` | 🟡 P2 |
| **Newsletter Section** | `sections/newsletter-section.tsx` | `.newsletter`, custom form styles | 🟢 P3 |
| **Footer** | `layout/footer.tsx` | `.footer`, `.footer__*` (pending) | 🟢 P3 |

---

## Phase 1: Core Layout Components (HIGH IMPACT)

### 1.1 Header Component

**File:** `/src/components/layout/header.tsx`

**Current (Tailwind):**
```tsx
<header className="sticky top-0 z-50 bg-parchment/95 backdrop-blur-sm border-b-2 border-gold/20">
  <div className="container mx-auto px-4 py-4">
    <div className="flex items-center justify-between">
      ...
    </div>
  </div>
</header>
```

**Target (BEM):**
```tsx
<header className="header" id="header">
  <div className="header__container">
    <a href="#hero" className="header__seal" aria-label="Atelier Arôme - Home">
      <div className="header__seal-inner">
        <svg className="header__seal-svg">...</svg>
        <div className="header__seal-text">
          <span className="header__seal-name">Arôme</span>
        </div>
      </div>
      <span className="header__seal-tagline">Est. 2024</span>
    </a>
    
    <nav className="header__nav" aria-label="Atelier navigation">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <a href="#compounds" className="header__nav-link">
            <span className="header__nav-number">— I —</span>
            <span className="header__nav-label">Compendium</span>
          </a>
        </li>
        ...
      </ul>
    </nav>
    
    <div className="header__tools">
      <button className="header__tool" aria-label="Search">...</button>
      <button className="header__tool" data-count="3">...</button>
      <button className="header__menu-toggle">
        <span className="header__menu-quill"></span>
      </button>
    </div>
  </div>
</header>
```

**Key BEM Classes to Apply:**
- `.header` → sticky header with scroll effects
- `.header__container` → grid layout for seal/nav/tools
- `.header__seal`, `.header__seal-inner`, `.header__seal-svg` → rotating seal
- `.header__nav-link`, `.header__nav-number`, `.header__nav-label`
- `.header__tool`, `.header__menu-toggle`

---

### 1.2 Hero Section Component

**File:** `/src/components/hero/hero-section.tsx`

**Target Structure:**
```tsx
<section className="hero" id="hero">
  <HeroFrame>
    {/* Illuminated Initial */}
    <div className="hero__initial" aria-hidden="true">
      <span className="hero__initial-letter">A</span>
      <div className="hero__initial-flourish"></div>
    </div>
    
    <div className="hero__content">
      <h1 className="hero__title">
        <span className="hero__title-line hero__title-line--1">
          <span className="hero__title-word">The</span>
          <span className="hero__title-word">Art</span>
        </span>
        <span className="hero__title-line hero__title-line--2">
          <span className="hero__title-word">of</span>
          <span className="hero__title-word hero__title-word--emph">Scent</span>
        </span>
      </h1>
      
      <div className="hero__subtitle">
        <div className="hero__subtitle-flourish hero__subtitle-flourish--left"></div>
        <span className="hero__subtitle-text">Where Botany Becomes Poetry</span>
        <div className="hero__subtitle-flourish hero__subtitle-flourish--right"></div>
      </div>
      
      <div className="hero__excerpt">
        <p className="hero__excerpt-text">...</p>
        <div className="hero__excerpt-rule"></div>
        <cite className="hero__excerpt-citation">— Master Perfumer's Journal</cite>
      </div>
      
      <div className="hero__actions">
        <a href="#compounds" className="btn btn--primary">
          <span className="btn__text">Enter the Atelier</span>
          <svg className="btn__icon">...</svg>
        </a>
        <a href="#process" className="btn btn--secondary">
          <span className="btn__text">Our Alchemy</span>
          <span className="btn__ornament">❧</span>
        </a>
      </div>
      
      <div className="hero__credentials">
        <div className="hero__credential">
          <span className="hero__credential-number">72</span>
          <span className="hero__credential-label">Hour Distillation</span>
        </div>
        ...
      </div>
    </div>
    
    <div className="hero__visual">
      <AlchemicalVessel />
      <BotanicalLayer />
    </div>
  </HeroFrame>
  
  <div className="hero__scroll-indicator">
    <div className="scroll-indicator__quill">...</div>
    <span className="scroll-indicator__label">Continue Reading</span>
  </div>
</section>
```

---

### 1.3 Compendium Section (Products)

**File:** `/src/components/sections/compendium-section.tsx`

**Target Structure:**
```tsx
<section className="compendium" id="compounds">
  <div className="section-border" aria-hidden="true">
    <span className="section-border__ornament">❦</span>
  </div>
  
  <div className="compendium__container">
    <div className="compendium__header">
      <span className="section-label">First Folio</span>
      <h2 className="section-title">
        <span className="section-title__line">The Botanical</span>
        <span className="section-title__line section-title__line--emph">Compendium</span>
      </h2>
      <p className="section-description">...</p>
    </div>
    
    <div className="compendium__filters">
      <div className="compendium__filter-group">
        <span className="compendium__filter-label">Filter by Humour</span>
        <div className="compendium__filter-buttons">
          <button className="compendium__filter" aria-pressed="true">All</button>
          <button className="compendium__filter">Calming</button>
          ...
        </div>
      </div>
      
      <div className="compendium__sort">
        <select className="compendium__sort-select">...</select>
      </div>
    </div>
    
    <div className="compendium__grid">
      {essences.map(essence => (
        <article className="essence-card" key={essence.id}>
          <div className="essence-card__illumination"></div>
          <div className="essence-card__illustration">
            <svg className="essence-card__botanical-svg">...</svg>
          </div>
          <div className="essence-card__folio">Folio {essence.folio}</div>
          <div className="essence-card__badge">
            <span className="essence-card__badge-ornament">✦</span>
            <span>{essence.rarity}</span>
          </div>
          <div className="essence-card__content">
            <div className="essence-card__latin">
              <span className="essence-card__latin-name">{essence.latinName}</span>
              <div className="essence-card__latin-rule"></div>
            </div>
            <h3 className="essence-card__title">{essence.name}</h3>
            <div className="essence-card__humour">
              <span className="essence-card__humour-icon">{essence.elementIcon}</span>
              <span className="essence-card__humour-label">{essence.element}</span>
            </div>
            <p className="essence-card__description">{essence.description}</p>
          </div>
          <div className="essence-card__footer">
            <div className="essence-card__pricing">
              <span className="essence-card__price">${essence.price}</span>
              <span className="essence-card__measure">/ 15ml</span>
            </div>
            <button className="essence-card__action">
              <span className="essence-card__action-text">Add to Vial</span>
            </button>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
```

---

## Phase 2: Section Components

### 2.1 Hero Frame Component

**File:** `/src/components/hero/hero-frame.tsx`

**Target:**
```tsx
<>
  {/* Hand-drawn Border */}
  <div className="hero__border" aria-hidden="true">
    <div className="hero__border-corner hero__border-corner--tl"></div>
    <div className="hero__border-corner hero__border-corner--tr"></div>
    <div className="hero__border-corner hero__border-corner--bl"></div>
    <div className="hero__border-corner hero__border-corner--br"></div>
  </div>
  
  {/* Watermark */}
  <div className="hero__watermark" aria-hidden="true">
    <svg className="hero__watermark-svg" viewBox="0 0 400 400">...</svg>
  </div>
  
  <div className="hero__container">
    {children}
  </div>
</>
```

### 2.2 Alchemical Vessel Component

**File:** `/src/components/hero/alchemical-vessel.tsx`

**Target:**
```tsx
<div className="hero__vessel-container">
  <div className="hero__vessel">
    <div className="hero__vessel-neck"></div>
    <div className="hero__vessel-body">
      <div className="hero__vessel-liquid">
        <div className="vessel__meniscus"></div>
        <div className="vessel__reflection"></div>
      </div>
      <div className="hero__vessel-label">
        <span className="vessel-label__n">N°</span>
        <span className="vessel-label__number">724</span>
      </div>
    </div>
    <div className="hero__vessel-base"></div>
  </div>
  <div className="hero__vessel-stand"></div>
</div>
```

### 2.3 Alchemy Section

**File:** `/src/components/sections/alchemy-section.tsx`

**Target:**
```tsx
<section className="alchemy" id="process">
  <div className="alchemy__watermark" aria-hidden="true">...</div>
  
  <div className="alchemy__container">
    <div className="alchemy__header">
      <span className="section-label">Second Folio</span>
      <h2 className="section-title">Our Alchemical Process</h2>
    </div>
    
    <div className="alchemy__process">
      {steps.map((step, i) => (
        <div className="alchemy-step" key={i}>
          <div className="alchemy-step__number">{i + 1}</div>
          <div className="alchemy-step__content">
            <h3 className="alchemy-step__title">{step.name}</h3>
            <p className="alchemy-step__description">{step.description}</p>
          </div>
          <div className="alchemy-step__symbol">
            <svg>...</svg>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

### 2.4 Testimonials Section (Manuscript)

**File:** `/src/components/sections/testimonials-section.tsx`

**Target:**
```tsx
<section className="manuscript" id="testimonials">
  <div className="manuscript__paper">
    <div className="manuscript__stain manuscript__stain--1"></div>
    <div className="manuscript__stain manuscript__stain--2"></div>
  </div>
  
  <div className="manuscript__container">
    <div className="manuscript__header">
      <span className="section-label">Third Folio</span>
      <h2 className="section-title">The Patron's Manuscript</h2>
    </div>
    
    <div className="manuscript__entries">
      {testimonials.map((t, i) => (
        <article className="manuscript-entry manuscript-entry--illuminated" key={i}>
          <div className="manuscript-entry__border">
            <div className="manuscript-entry__corner manuscript-entry__corner--tl"></div>
            <div className="manuscript-entry__corner manuscript-entry__corner--tr"></div>
            <div className="manuscript-entry__corner manuscript-entry__corner--bl"></div>
            <div className="manuscript-entry__corner manuscript-entry__corner--br"></div>
          </div>
          <div className="manuscript-entry__content">
            <div className="manuscript-entry__initial">{t.name[0]}</div>
            <blockquote className="manuscript-entry__quote">
              <p>{t.quote}</p>
            </blockquote>
            <div className="manuscript-entry__attribution">
              <div className="manuscript-entry__author">
                <span className="manuscript-entry__name">{t.name}</span>
                <span className="manuscript-entry__title">{t.title}</span>
              </div>
              <div className="manuscript-entry__seal">
                <span className="manuscript-entry__seal-text">✓ Verified</span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
    
    <div className="manuscript__navigation">
      <button className="manuscript__nav-button">←</button>
      <div className="manuscript__pagination">
        <span className="manuscript__page-current">1</span>
        <span className="manuscript__page-separator">/</span>
        <span className="manuscript__page-total">3</span>
      </div>
      <button className="manuscript__nav-button">→</button>
    </div>
  </div>
</section>
```

---

## Phase 3: Supporting Components

### 3.1 Newsletter Section

Custom styling required (no `.newsletter` class in CSS). Use `.btn` and form input styles.

### 3.2 Footer

Create BEM-styled footer matching the elegance of other sections.

---

## Execution Order

| # | Component | Estimated Effort | Dependencies |
|---|-----------|------------------|--------------|
| 1 | `hero-frame.tsx` | 15 min | None |
| 2 | `hero-section.tsx` | 30 min | hero-frame |
| 3 | `alchemical-vessel.tsx` | 15 min | None |
| 4 | `botanical-layer.tsx` | 15 min | None |
| 5 | `header.tsx` | 30 min | None |
| 6 | `compendium-section.tsx` | 45 min | essence-card classes |
| 7 | `alchemy-section.tsx` | 25 min | None |
| 8 | `testimonials-section.tsx` | 35 min | manuscript classes |
| 9 | `newsletter-section.tsx` | 20 min | btn classes |
| 10 | `footer.tsx` | 25 min | None |

**Total Estimated Time:** ~4 hours

---

## Verification Plan

After each component update:

1. Run `npm run build` to check for TypeScript errors
2. Refresh browser at `http://localhost:3000`
3. Visually compare with static mockup side-by-side
4. Check responsive behavior (mobile/tablet/desktop)
5. Verify hover states and animations work

---

## Success Criteria

- [ ] All 10 components use BEM class names
- [ ] Visual appearance matches static HTML mockup
- [ ] Animations (seal rotation, vessel liquid, botanicals) working
- [ ] Responsive design intact
- [ ] No TypeScript/build errors
- [ ] Accessibility attributes preserved (ARIA labels, roles)
