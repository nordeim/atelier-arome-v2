'use client'

import { useState } from 'react'

interface Testimonial {
  id: string
  patron: string
  verified: boolean
  essence: string
  content: string
  date: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    patron: 'Lady Eleanor',
    verified: true,
    essence: 'Damask Rose',
    content: 'The rose essence transports me to an English garden at dawn. Sublime beyond measure.',
    date: 'December 2025'
  },
  {
    id: '2',
    patron: 'Sir William',
    verified: true,
    essence: 'English Lavender',
    content: 'A masterwork of botanical alchemy. The lavender essence calms my spirit like nothing else.',
    date: 'November 2025'
  },
  {
    id: '3',
    patron: 'Duchess Arabella',
    verified: true,
    essence: 'Blue Gum Eucalyptus',
    content: 'Exceptional clarity and purity. The eucalyptus essence clears both body and mind.',
    date: 'October 2025'
  }
]

export function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 3
  const totalPages = Math.ceil(TESTIMONIALS.length / testimonialsPerPage)

  const currentTestimonials = TESTIMONIALS.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  )

  return (
    <section className="manuscript" id="testimonials">
      {/* Paper Background */}
      <div className="manuscript__paper">
        <div className="manuscript__stain manuscript__stain--1"></div>
        <div className="manuscript__stain manuscript__stain--2"></div>
      </div>

      {/* Watermark */}
      <div className="manuscript__watermark" aria-hidden="true">
        <svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <text x="100" y="110" textAnchor="middle" fontSize="40" fill="currentColor" opacity="0.1">A</text>
        </svg>
      </div>

      <div className="manuscript__container">
        {/* Header */}
        <div className="manuscript__header">
          <span className="section-label">Third Folio</span>
          <h2 className="section-title">
            <span className="section-title__line">The Patron&apos;s</span>
            <span className="section-title__line section-title__line--emph">Manuscript</span>
          </h2>
          <div className="manuscript__rule" aria-hidden="true"></div>
          <p className="section-description">
            Verified Accounts of Alchemical Delight
          </p>
        </div>

        {/* Testimonial Entries */}
        <div className="manuscript__entries">
          {currentTestimonials.map(testimonial => (
            <article
              key={testimonial.id}
              className={`manuscript-entry ${testimonial.verified ? 'manuscript-entry--illuminated' : ''}`}
            >
              {/* Corner Decorations */}
              <div className="manuscript-entry__border">
                <div className="manuscript-entry__corner manuscript-entry__corner--tl"></div>
                <div className="manuscript-entry__corner manuscript-entry__corner--tr"></div>
                <div className="manuscript-entry__corner manuscript-entry__corner--bl"></div>
                <div className="manuscript-entry__corner manuscript-entry__corner--br"></div>
              </div>

              <div className="manuscript-entry__content">
                {/* Illuminated Initial */}
                <div className="manuscript-entry__initial" aria-hidden="true">
                  {testimonial.patron[0]}
                </div>

                {/* Quote */}
                <blockquote className="manuscript-entry__quote">
                  <p>{testimonial.content}</p>
                </blockquote>

                {/* Attribution */}
                <div className="manuscript-entry__attribution">
                  <div className="manuscript-entry__author">
                    <span className="manuscript-entry__name">{testimonial.patron}</span>
                    <span className="manuscript-entry__title">On {testimonial.essence}</span>
                  </div>

                  {testimonial.verified && (
                    <div className="manuscript-entry__seal">
                      <span className="manuscript-entry__seal-text">✓ Verified</span>
                    </div>
                  )}
                </div>

                {/* Folio Date */}
                <div className="manuscript-entry__folio">
                  <span className="manuscript-entry__folio-number">{testimonial.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Navigation */}
        <div className="manuscript__navigation">
          <button
            onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            className="manuscript__nav-button"
            aria-label="Previous page"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="manuscript__pagination">
            <span className="manuscript__page-current">{currentPage + 1}</span>
            <span className="manuscript__page-separator">/</span>
            <span className="manuscript__page-total">{totalPages}</span>
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage === totalPages - 1}
            className="manuscript__nav-button"
            aria-label="Next page"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
