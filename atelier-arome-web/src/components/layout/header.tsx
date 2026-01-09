'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useCartStore } from '@/stores/cart-store'

export function Header() {
  const cartItems = useCartStore((state) => state.items)

  return (
    <header className="header" id="header">
      <div className="header__container">
        {/* Atelier Seal */}
        <a href="#hero" className="header__seal" aria-label="Atelier Arôme - Home">
          <div className="header__seal-inner">
            <svg className="header__seal-svg" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,2" />
              <text x="50" y="58" textAnchor="middle" className="header__seal-letter">A</text>
            </svg>
            <div className="header__seal-text">
              <span className="header__seal-name">Arôme</span>
            </div>
          </div>
          <span className="header__seal-tagline">Est. 2024</span>
        </a>

        {/* Navigation - Atelier Sections */}
        <nav className="header__nav" aria-label="Atelier navigation">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#compounds" className="header__nav-link">
                <span className="header__nav-number">— I —</span>
                <span className="header__nav-label">Compendium</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#process" className="header__nav-link">
                <span className="header__nav-number">— II —</span>
                <span className="header__nav-label">Alchemy</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#testimonials" className="header__nav-link">
                <span className="header__nav-number">— III —</span>
                <span className="header__nav-label">The Atelier</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#manuscript" className="header__nav-link">
                <span className="header__nav-number">— IV —</span>
                <span className="header__nav-label">Manuscript</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Atelier Tools */}
        <div className="header__tools">
          <button className="header__tool" aria-label="Search the compendium" data-tooltip="Magnifying Glass">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>

          <button
            className="header__tool"
            aria-label="View collected vials"
            data-tooltip="Vial Collection"
            data-count={cartItems.length > 0 ? cartItems.length : undefined}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 2h6v4H9z" />
              <path d="M9 6v5a3 3 0 003 3v0a3 3 0 003-3V6" />
              <path d="M6 22h12a2 2 0 002-2v-6a6 6 0 00-6-6h0a6 6 0 00-6 6v6a2 2 0 002 2z" />
            </svg>
          </button>

          <Sheet>
            <SheetTrigger asChild>
              <button className="header__menu-toggle" id="menuToggle" aria-label="Open atelier menu" aria-expanded="false" data-tooltip="Menu">
                <span className="header__menu-quill"></span>
              </button>
            </SheetTrigger>
            <SheetContent className="mobile-nav" side="right">
              <div className="mobile-nav__container">
                <div className="mobile-nav__header">
                  <div className="mobile-nav__seal" aria-hidden="true"></div>
                  <span className="mobile-nav__title">Atelier Folio</span>
                </div>

                <ul className="mobile-nav__list">
                  <li className="mobile-nav__item">
                    <a href="#compounds" className="mobile-nav__link">
                      <span className="mobile-nav__ornament">❖</span>
                      <span className="mobile-nav__label">Compendium</span>
                      <span className="mobile-nav__page">Folio I</span>
                    </a>
                  </li>
                  <li className="mobile-nav__item">
                    <a href="#process" className="mobile-nav__link">
                      <span className="mobile-nav__ornament">❖</span>
                      <span className="mobile-nav__label">Alchemy</span>
                      <span className="mobile-nav__page">Folio II</span>
                    </a>
                  </li>
                  <li className="mobile-nav__item">
                    <a href="#testimonials" className="mobile-nav__link">
                      <span className="mobile-nav__ornament">❖</span>
                      <span className="mobile-nav__label">The Atelier</span>
                      <span className="mobile-nav__page">Folio III</span>
                    </a>
                  </li>
                  <li className="mobile-nav__item">
                    <a href="#manuscript" className="mobile-nav__link">
                      <span className="mobile-nav__ornament">❖</span>
                      <span className="mobile-nav__label">Manuscript</span>
                      <span className="mobile-nav__page">Folio IV</span>
                    </a>
                  </li>
                </ul>

                <div className="mobile-nav__colophon">
                  <span className="mobile-nav__colophon-text">Atelier Arôme</span>
                  <span className="mobile-nav__colophon-year">Anno MMXXIV</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
