'use client'

import { useState } from 'react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setSubscribed(true)
    setEmail('')
  }

  if (subscribed) {
    return (
      <section className="newsletter newsletter--confirmed" id="newsletter">
        <div className="newsletter__container">
          <div className="newsletter__confirmation">
            <div className="newsletter__seal" aria-hidden="true">
              <svg className="newsletter__seal-svg" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="40" cy="40" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M40,15 L40,65 M15,40 L65,40 M25,25 L55,55 M55,25 L25,55" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h2 className="newsletter__title">Subscription Confirmed</h2>
            <p className="newsletter__message">
              You shall receive tidings of new essences, alchemical revelations,
              and exclusive offers for the discerning patron.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="newsletter" id="newsletter">
      {/* Decorative Ornaments */}
      <div className="newsletter__ornament newsletter__ornament--tl" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50,0 Q50,50 100,50 Q50,50 50,100 Q50,50 0,50 Q50,50 50,0 Z" />
        </svg>
      </div>
      <div className="newsletter__ornament newsletter__ornament--br" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50,0 Q50,50 100,50 Q50,50 50,100 Q50,50 0,50 Q50,50 50,0 Z" />
        </svg>
      </div>

      <div className="newsletter__container">
        {/* Header */}
        <div className="newsletter__header">
          <span className="section-label">Fourth Folio</span>
          <h2 className="section-title">
            <span className="section-title__line">Join Our Circle</span>
            <span className="section-title__line section-title__line--emph">of Patrons</span>
          </h2>
          <p className="section-description">
            Receive alchemical revelations and exclusive offers
          </p>
          <p className="newsletter__subtitle">
            New essences, process insights, patron privileges
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="newsletter__form">
          <div className="newsletter__field">
            <label htmlFor="email" className="newsletter__label">
              Your Electronic Correspondence
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="patron@example.com"
              required
              className="newsletter__input"
            />
          </div>

          <button type="submit" className="btn btn--primary btn--large newsletter__submit">
            <span className="btn__text">Subscribe to the Circle</span>
            <span className="btn__ornament">❧</span>
          </button>
        </form>

        <p className="newsletter__privacy">
          Your privacy is sacred. We shall not share your correspondence with others.
        </p>

        {/* Rotating Seal */}
        <div className="newsletter__seal-container">
          <svg className="newsletter__seal-svg" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="24" cy="24" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M24,8 L24,40 M8,24 L40,24 M14,14 L34,34 M34,14 L14,34" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  )
}
