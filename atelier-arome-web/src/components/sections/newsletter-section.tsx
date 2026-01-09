'use client'

import { useState } from 'react'
import { showToast } from '@/stores/toast-store'
import { isValidEmail, announce } from '@/lib/a11y'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ email?: string }>({})

  // Validate email on blur
  const handleEmailBlur = () => {
    if (!email.trim()) {
      setErrors(prev => ({ ...prev, email: 'Please enter your email address' }))
    } else if (!isValidEmail(email)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }))
    } else {
      setErrors(prev => ({ ...prev, email: undefined }))
    }
  }

  // Clear error on input
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate
    if (!email.trim()) {
      setErrors({ email: 'Please enter your email address' })
      showToast('Please enter your email address', 'warning')
      return
    }

    if (!isValidEmail(email)) {
      setErrors({ email: 'Please enter a valid email address' })
      showToast('Please enter a valid email address', 'warning')
      return
    }

    if (!consent) {
      showToast('Please agree to receive correspondence', 'warning')
      return
    }

    // Submit
    setIsSubmitting(true)

    // Simulate API call (matching main.js CONFIG.API_DELAY)
    await new Promise(resolve => setTimeout(resolve, 500))

    setIsSubmitting(false)
    setSubscribed(true)
    setEmail('')
    setConsent(false)

    showToast('Thank you for subscribing to our correspondence', 'success')
    announce('Successfully subscribed to the quarterly folio')
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

          {/* Form with validation */}
          <form onSubmit={handleSubmit} className="correspondence__form" id="correspondenceForm">
            <div className={`correspondence__field ${errors.email ? 'correspondence__field--error' : ''}`}>
              <input
                type="email"
                id="correspondenceEmail"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                placeholder="your.correspondence@example.com"
                className="correspondence__input"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                disabled={isSubmitting}
              />
              <div className="correspondence__field-ornament"></div>
              {errors.email && (
                <span id="email-error" className="correspondence__field-error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="correspondence__consent">
              <input
                type="checkbox"
                id="correspondenceConsent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="correspondence__checkbox"
                disabled={isSubmitting}
              />
              <label htmlFor="correspondenceConsent" className="correspondence__consent-label">
                I wish to receive the quarterly folio and occasional atelier updates.
                I understand I may withdraw my consent at any time.
              </label>
            </div>

            <button
              type="submit"
              className="correspondence__submit"
              disabled={isSubmitting}
            >
              <span className="correspondence__submit-text">
                {isSubmitting ? 'Subscribing...' : 'Subscribe to Correspondence'}
              </span>
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
