'use client'

import { useState } from 'react'

interface Essence {
  id: string
  folioNumber: number
  latinName: string
  commonName: string
  humour: 'fire' | 'earth' | 'air' | 'water'
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary'
  season: 'spring' | 'summer' | 'autumn' | 'winter'
  price: number
  notes: string
}

const MOCK_ESSENCES: Essence[] = [
  {
    id: '1',
    folioNumber: 1,
    latinName: 'Lavandula angustifolia',
    commonName: 'English Lavender',
    humour: 'air',
    rarity: 'common',
    season: 'summer',
    price: 45,
    notes: 'Floral, herbaceous, slightly sweet'
  },
  {
    id: '2',
    folioNumber: 2,
    latinName: 'Rosa damascena',
    commonName: 'Damask Rose',
    humour: 'fire',
    rarity: 'rare',
    season: 'spring',
    price: 125,
    notes: 'Rich, deep, velvety floral'
  },
  {
    id: '3',
    folioNumber: 3,
    latinName: 'Eucalyptus globulus',
    commonName: 'Blue Gum',
    humour: 'air',
    rarity: 'common',
    season: 'winter',
    price: 35,
    notes: 'Fresh, camphoraceous, clearing'
  }
]

const HUMOURS = {
  fire: { icon: '🔥', label: 'Fire' },
  earth: { icon: '🌍', label: 'Earth' },
  air: { icon: '💨', label: 'Air' },
  water: { icon: '💧', label: 'Water' }
}

export function CompendiumSection() {
  const [filter, setFilter] = useState<string>('all')
  const [sort, setSort] = useState<string>('folio')

  const filteredEssences = MOCK_ESSENCES.filter(essence => {
    if (filter === 'all') return true
    if (filter === 'calming') return ['air', 'water'].includes(essence.humour)
    if (filter === 'uplifting') return essence.humour === 'fire'
    if (filter === 'grounding') return essence.humour === 'earth'
    if (filter === 'clarifying') return essence.humour === 'air'
    return true
  })

  const sortedEssences = [...filteredEssences].sort((a, b) => {
    switch (sort) {
      case 'folio':
        return a.folioNumber - b.folioNumber
      case 'price':
        return a.price - b.price
      case 'rarity':
        const rarityOrder = ['common', 'uncommon', 'rare', 'legendary']
        return rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity)
      default:
        return 0
    }
  })

  return (
    <section className="compendium" id="compounds">
      {/* Section Border */}
      <div className="section-border" aria-hidden="true">
        <span className="section-border__ornament">❦</span>
      </div>

      <div className="compendium__container">
        {/* Compendium Header */}
        <div className="compendium__header">
          <span className="section-label">First Folio</span>
          <h2 className="section-title">
            <span className="section-title__line">The Botanical</span>
            <span className="section-title__line section-title__line--emph">Compendium</span>
          </h2>
          <div className="compendium__rule" aria-hidden="true"></div>
          <p className="section-description">
            A curated collection of botanical essences, each extracted with patience and precision
            from nature&apos;s most aromatic specimens.
          </p>
        </div>

        {/* Filters */}
        <div className="compendium__filters">
          <div className="compendium__filter-group">
            <span className="compendium__filter-label">Filter by Humour</span>
            <div className="compendium__filter-buttons">
              {['all', 'calming', 'uplifting', 'grounding', 'clarifying'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="compendium__filter"
                  aria-pressed={filter === f}
                >
                  <span className="compendium__filter-ornament">✧</span>
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="compendium__sort">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="compendium__sort-select"
            >
              <option value="folio">Folio Order</option>
              <option value="price">Price (Low to High)</option>
              <option value="rarity">Rarity</option>
            </select>
            <span className="compendium__sort-ornament">▾</span>
          </div>
        </div>

        {/* Essence Cards Grid */}
        <div className="compendium__grid">
          {sortedEssences.map(essence => (
            <article className="essence-card" key={essence.id}>
              {/* Illumination Glow */}
              <div className="essence-card__illumination"></div>

              {/* Illustration Placeholder */}
              <div className="essence-card__illustration">
                <svg className="essence-card__botanical-svg" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                </svg>
              </div>

              {/* Folio Number */}
              <div className="essence-card__folio">
                <span>Folio</span> {essence.folioNumber}
              </div>

              {/* Rarity Badge */}
              <div className={`essence-card__badge essence-card__badge--${essence.rarity}`}>
                <span className="essence-card__badge-ornament">✦</span>
                <span>{essence.rarity}</span>
              </div>

              {/* Content */}
              <div className="essence-card__content">
                <div className="essence-card__latin">
                  <span className="essence-card__latin-name">{essence.latinName}</span>
                  <div className="essence-card__latin-rule"></div>
                </div>

                <h3 className="essence-card__title">{essence.commonName}</h3>

                <div className="essence-card__humour">
                  <span className="essence-card__humour-icon">{HUMOURS[essence.humour].icon}</span>
                  <span className="essence-card__humour-label">{HUMOURS[essence.humour].label}</span>
                </div>

                <p className="essence-card__description">{essence.notes}</p>

                <div className="essence-card__notes">
                  <div className="essence-card__note">
                    <span className="essence-card__note-label">Season</span>
                    <span className="essence-card__note-value">{essence.season}</span>
                  </div>
                </div>
              </div>

              {/* Footer with Price and Action */}
              <div className="essence-card__footer">
                <div className="essence-card__pricing">
                  <span className="essence-card__price">${essence.price}</span>
                  <span className="essence-card__measure">/ 15ml</span>
                </div>
                <button className="essence-card__action">
                  <svg className="essence-card__action-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  <span className="essence-card__action-text">Add to Vial</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Counter */}
        <div className="compendium__footer">
          <div className="compendium__counter">
            <span className="compendium__counter-current">{sortedEssences.length}</span>
            <span className="compendium__counter-separator">/</span>
            <span className="compendium__counter-total">{MOCK_ESSENCES.length}</span>
            <span className="compendium__counter-label">Essences</span>
          </div>
        </div>
      </div>
    </section>
  )
}
