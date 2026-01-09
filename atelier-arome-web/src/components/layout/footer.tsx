import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="colophon">
      <div className="footer__container">
        {/* Main Footer Grid */}
        <div className="footer__grid">
          {/* Atelier Info */}
          <div className="footer__section footer__section--about">
            <h3 className="footer__title">Atelier Arôme</h3>
            <p className="footer__description">
              Where botany becomes poetry through the sacred art of alchemical distillation.
              Each essence is a testament to patience, precision, and botanical devotion.
            </p>
            <address className="footer__address">
              <p className="footer__address-line">
                <span className="footer__address-icon">📍</span>
                42 Orchard Road, Singapore 238823
              </p>
              <p className="footer__address-line">
                <span className="footer__address-icon">🕒</span>
                Tue–Sun: 10:00–18:00
              </p>
              <p className="footer__address-line">
                <span className="footer__address-icon">📞</span>
                +65 6789 0123
              </p>
            </address>
          </div>

          {/* Navigation */}
          <div className="footer__section footer__section--nav">
            <h4 className="footer__section-title">The Manuscript</h4>
            <ul className="footer__nav">
              <li className="footer__nav-item">
                <Link href="#compounds" className="footer__nav-link">
                  The Compendium
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link href="#process" className="footer__nav-link">
                  Our Alchemy
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link href="/about" className="footer__nav-link">
                  About the Atelier
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link href="/account" className="footer__nav-link">
                  Patron Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer__section footer__section--social">
            <h4 className="footer__section-title">Society</h4>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <svg className="footer__social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16,11.37 A4,4,0,1,1,12.63,8 A4,4,0,0,1,16,11.37 Z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Pinterest">
                <svg className="footer__social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12,6 L12,10 M10,8 L14,8" />
                  <path d="M12,18 L12,14" />
                </svg>
              </a>
            </div>
            <p className="footer__social-label">Follow our alchemical journey</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Atelier Arôme. All rights reserved.
          </p>
          <nav className="footer__legal">
            <Link href="#" className="footer__legal-link">Privacy</Link>
            <Link href="#" className="footer__legal-link">Terms</Link>
            <Link href="#" className="footer__legal-link">Shipping</Link>
            <Link href="#" className="footer__legal-link">Returns</Link>
          </nav>
        </div>

        {/* Colophon */}
        <div className="footer__colophon">
          <div className="footer__colophon-box">
            <p className="footer__colophon-label">— Colophon —</p>
            <p className="footer__colophon-text">Crafted with devotion in Singapore</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
