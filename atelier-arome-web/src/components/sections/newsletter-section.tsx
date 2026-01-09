'use client'

import { useState } from 'react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !consent) return

    setSubscribed(true)
    setEmail('')
  }

  if (subscribed) {
    return (
      <section className="correspondence correspondence--confirmed" id="correspondence">
        <div className="correspondence__container">
          <div className="section-border" aria-hidden="true">
            <span className="section-border__ornament">✉</span>
          </div>
          <div className="correspondence__content">
            <h2 className="correspondence__title">
              <span className="correspondence__title-line">Subscription</span>
              <span className="correspondence__title-line correspondence__title-line--emph">Confirmed</span>
            </h2>
            <div className="correspondence__rule" aria-hidden="true"></div>
            <p className="correspondence__description">
              You shall receive tidings of new essences, alchemical revelations,
              and exclusive offers for the discerning patron.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="correspondence" id="correspondence">
      {/* Seal Decoration */}
      <div className="correspondence__seal" aria-hidden="true">
        <div className="correspondence__seal-ring"></div>
        <div className="correspondence__seal-center">A</div>
      </div>

      <div className="correspondence__container">
        {/* Section Border */}
        <div className="section-border" aria-hidden="true">
          <span className="section-border__ornament">✉</span>
        </div>

        {/* Content Area */}
        <div className="correspondence__content">
          <h2 className="correspondence__title">
            <span className="correspondence__title-line">Join Our</span>
            <span className="correspondence__title-line correspondence__title-line--emph">Correspondence</span>
          </h2>
          <div className="correspondence__rule" aria-hidden="true"></div>
          <p className="correspondence__description">
            Subscribe to our quarterly folio for exclusive essays on botanical alchemy,
            early access to new essences, and private atelier events.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="correspondence__form">
            <div className="correspondence__field">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.correspondence@example.com"
                required
                className="correspondence__input"
              />
              <div className="correspondence__field-ornament"></div>
            </div>

            <div className="correspondence__consent">
              <input
                type="checkbox"
                id="correspondenceConsent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="correspondence__checkbox"
                required
              />
              <label htmlFor="correspondenceConsent" className="correspondence__consent-label">
                I wish to receive the quarterly folio and occasional atelier updates.
                I understand I may withdraw my consent at any time.
              </label>
            </div>

            <button type="submit" className="correspondence__submit">
              <span className="correspondence__submit-text">Subscribe to Correspondence</span>
              <svg className="correspondence__submit-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 2L11 13" />
                <path d="M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>

        {/* Visual - Envelope */}
        <div className="correspondence__visual" aria-hidden="true">
          <div className="correspondence__envelope">
            <div className="envelope__flap"></div>
            <div className="envelope__body"></div>
            <div className="envelope__wax-seal">
              <div className="wax-seal__ring"></div>
              <div className="wax-seal__initial">A</div>
            </div>
          </div>

          <div className="correspondence__quill">
            <div className="quill__feather"></div>
            <div className="quill__shaft"></div>
            <div className="quill__nib"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
