import Link from 'next/link'

export function Footer() {
  return (
    <footer className="colophon">
      <div className="colophon__container">
        {/* Atelier Information */}
        <div className="colophon__atelier">
          <a href="#hero" className="colophon__seal">
            <div className="colophon__seal-graphic"></div>
            <span className="colophon__atelier-name">Atelier Arôme</span>
          </a>
          <address className="colophon__address">
            <p>Rue des Alchimistes, 7</p>
            <p>Provence-Alpes-Côte d&apos;Azur</p>
            <p>France</p>
          </address>
          <div className="colophon__hours">
            <p>The Atelier is open by appointment only</p>
            <p>Correspondence welcome at all hours</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="colophon__navigation">
          <h3 className="colophon__heading">The Folios</h3>
          <ul className="colophon__list">
            <li><Link href="#compounds" className="colophon__link">Compendium</Link></li>
            <li><Link href="#process" className="colophon__link">Alchemy</Link></li>
            <li><Link href="#testimonials" className="colophon__link">The Atelier</Link></li>
            <li><Link href="#manuscript" className="colophon__link">Manuscript</Link></li>
          </ul>
        </div>

        {/* Correspondence */}
        <div className="colophon__correspondence">
          <h3 className="colophon__heading">Correspondence</h3>
          <ul className="colophon__list">
            <li>
              <svg className="colophon__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:correspondence@atelierarome.com">correspondence@atelierarome.com</a>
            </li>
            <li>
              <svg className="colophon__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Provence, France</span>
            </li>
          </ul>

          {/* Social Correspondence */}
          <div className="colophon__social">
            <a href="#" className="colophon__social-link" aria-label="Instagram correspondence">
              <svg className="colophon__social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="1" fill="currentColor" />
              </svg>
            </a>
            <a href="#" className="colophon__social-link" aria-label="Pinterest inspiration">
              <svg className="colophon__social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12c0-2.5 1.5-5 4-5s4 2.5 4 5-1.5 5-4 7l-1-4" />
              </svg>
            </a>
            <a href="#" className="colophon__social-link" aria-label="Newsletter subscription">
              <svg className="colophon__social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Colophon Proper */}
        <div className="colophon__details">
          <h3 className="colophon__heading">Colophon</h3>
          <div className="colophon__text">
            <p>This digital folio was typeset in Cormorant Garamond and Crimson Pro.</p>
            <p>Illustrations are original to the atelier.</p>
            <p>The alchemical processes described herein are both literal and metaphorical.</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="colophon__bottom">
        <div className="colophon__bottom-container">
          <p className="colophon__copyright">
            © Anno MMXXIV Atelier Arôme. All rights preserved.
          </p>
          <div className="colophon__legal">
            <Link href="#" className="colophon__legal-link">Manuscript Rights</Link>
            <Link href="#" className="colophon__legal-link">Correspondence Terms</Link>
            <Link href="#" className="colophon__legal-link">Atelier Visits</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
