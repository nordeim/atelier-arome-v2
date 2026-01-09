export function AlchemySection() {
  const steps = [
    {
      number: 1,
      name: 'Nigredo',
      subtitle: 'The Blackening',
      description: 'Preparation of botanical materials through gentle maceration, allowing the essence to emerge from darkness.',
      duration: '24–48h',
      method: 'Cold Maceration',
      colorClass: 'alchemy-step__number--nigredo'
    },
    {
      number: 2,
      name: 'Albedo',
      subtitle: 'The Whitening',
      description: 'Purification through slow distillation, separating the pure essence from earthly impurities.',
      duration: '72h',
      method: 'Steam Distillation',
      colorClass: 'alchemy-step__number--albedo'
    },
    {
      number: 3,
      name: 'Citrinitas',
      subtitle: 'The Yellowing',
      description: 'Transformation through careful aging and blending, developing depth and complexity.',
      duration: '2–4 weeks',
      method: 'Maturation',
      colorClass: 'alchemy-step__number--citrinitas'
    },
    {
      number: 4,
      name: 'Rubedo',
      subtitle: 'The Reddening',
      description: 'Final perfection where essence reaches its ultimate form, ready for the discerning patron.',
      duration: 'Variable',
      method: 'Final Blending',
      colorClass: 'alchemy-step__number--rubedo'
    }
  ]

  return (
    <section className="alchemy" id="process">
      {/* Watermark */}
      <div className="alchemy__watermark" aria-hidden="true">
        <svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,4" />
          <path d="M100 20 L180 100 L100 180 L20 100 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="alchemy__container">
        {/* Header */}
        <div className="alchemy__header">
          <span className="section-label">Second Folio</span>
          <h2 className="section-title">
            <span className="section-title__line">Our Alchemical</span>
            <span className="section-title__line section-title__line--emph">Process</span>
          </h2>
          <div className="alchemy__rule" aria-hidden="true"></div>
          <p className="section-description">
            Where Botany Becomes Poetry
          </p>
        </div>

        {/* Process Steps */}
        <div className="alchemy__process">
          {steps.map((step) => (
            <div className="alchemy-step" key={step.number}>
              <div className={`alchemy-step__number ${step.colorClass}`}>
                {step.number}
              </div>

              <div className="alchemy-step__content">
                <h3 className="alchemy-step__title">{step.name}</h3>
                <span className="alchemy-step__subtitle">{step.subtitle}</span>
                <p className="alchemy-step__description">{step.description}</p>

                <div className="alchemy-step__details">
                  <div className="alchemy-step__detail">
                    <span className="alchemy-step__detail-label">Duration</span>
                    <span className="alchemy-step__detail-value">{step.duration}</span>
                  </div>
                  <div className="alchemy-step__detail">
                    <span className="alchemy-step__detail-label">Method</span>
                    <span className="alchemy-step__detail-value">{step.method}</span>
                  </div>
                </div>
              </div>

              <div className="alchemy-step__symbol" aria-hidden="true">
                <svg viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
                  {step.number === 1 && <path d="M20 10 L20 30" stroke="currentColor" strokeWidth="2" />}
                  {step.number === 2 && <circle cx="20" cy="20" r="8" fill="currentColor" />}
                  {step.number === 3 && <path d="M12 20 L28 20 M20 12 L20 28" stroke="currentColor" strokeWidth="2" />}
                  {step.number === 4 && <path d="M14 14 L26 26 M26 14 L14 26" stroke="currentColor" strokeWidth="2" />}
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Apparatus Illustration Placeholder */}
        <div className="alchemy__apparatus" aria-hidden="true">
          <svg viewBox="0 0 300 200">
            <path d="M150 20 L150 60 Q100 100 100 150 Q100 180 150 180 Q200 180 200 150 Q200 100 150 60"
              fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Manifesto Quote */}
        <div className="alchemy__manifesto">
          <blockquote className="alchemy__quote">
            <p>
              Each essence undergoes this sacred alchemical journey, taking
              between 72 hours and several months to complete. We do not rush
              what nature cannot be hurried.
            </p>
            <cite className="alchemy__citation">— The Alchemist&apos;s Manifesto</cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
