'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useCartStore } from '@/stores/cart-store'
import { useScroll, smoothScrollTo } from '@/hooks/use-scroll'

export function Header() {
  const cartItems = useCartStore((state) => state.items)
  const toggleCartDrawer = useCartStore((state) => state.toggleCartDrawer)
  const { isScrolled } = useScroll({ threshold: 20 })

  // Handle nav link clicks for smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    smoothScrollTo(href, 100)
    // Update URL without reload
    window.history.pushState({}, '', href)
  }

  // Handle cart button click
  const handleCartClick = () => {
    toggleCartDrawer()
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="header__container">
        {/* Atelier Seal */}
        <a href="#hero" className="header__seal" aria-label="Atelier Arôme - Home">
          <div className="header__seal-inner">
            <svg className="header__seal-svg" viewBox="0 0 100 100" aria-hidden="true">
              {/* Outer dashed circle */}
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
              {/* Ornate alchemical path */}
              <path d="M50 20 Q70 30 80 50 Q70 70 50 80 Q30 70 20 50 Q30 30 50 20 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {/* Inner circle */}
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
              {/* Cross pattern */}
              <path d="M50 35 L50 65 M35 50 L65 50" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="header__seal-text">
              <span className="header__seal-name">Atelier</span>
              <span className="header__seal-name">Arôme</span>
            </div>
          </div>
          <span className="header__seal-tagline">Est. 2024</span>
        </a>

        {/* Navigation - Atelier Sections */}
        <nav className="header__nav" aria-label="Atelier navigation">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#compounds" className="header__nav-link" onClick={(e) => handleNavClick(e, '#compounds')}>
                <span className="header__nav-number">— I —</span>
                <span className="header__nav-label">Compendium</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#process" className="header__nav-link" onClick={(e) => handleNavClick(e, '#process')}>
                <span className="header__nav-number">— II —</span>
                <span className="header__nav-label">Alchemy</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#testimonials" className="header__nav-link" onClick={(e) => handleNavClick(e, '#testimonials')}>
                <span className="header__nav-number">— III —</span>
                <span className="header__nav-label">The Atelier</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#manuscript" className="header__nav-link" onClick={(e) => handleNavClick(e, '#manuscript')}>
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
            aria-label="View collection vial"
            data-tooltip="Collection Vial"
            data-count={cartItems.length > 0 ? cartItems.length : undefined}
            onClick={handleCartClick}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 01-8 0" />
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
