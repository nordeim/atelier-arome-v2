// Helper function to convert number to Roman numeral
const toRoman = (num: number): string => {
  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  return romanNumerals[num - 1] || String(num);
};

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
      {/* Watermark - Gap 4 Fix: "Ars Magna" text instead of SVG */}
      <div className="alchemy__watermark" aria-hidden="true">
        <span className="alchemy__watermark-text">Ars Magna</span>
      </div>

      <div className="alchemy__container">
        {/* Header */}
        <div className="alchemy__header">
          <span className="section-label">Second Folio</span>
          <h2 className="section-title">
            <span className="section-title__line">The Art of</span>
            <span className="section-title__line section-title__line--emph">Alchemical Transformation</span>
          </h2>
          <div className="alchemy__rule" aria-hidden="true"></div>
          <p className="section-description">
            Our practice follows the ancient alchemical principle: <em>solve et coagula</em>.
            To dissolve and reconstitute. To transform base botanical matter into olfactory
            gold through time, heat, and intention.
          </p>
        </div>

        {/* Process Steps - Gap 5 Fix: Roman numerals */}
        <div className="alchemy__process">
          {steps.map((step) => (
            <div className="alchemy-step" key={step.number}>
              <div className={`alchemy-step__number ${step.colorClass}`}>
                <span className="alchemy-step__roman">{toRoman(step.number)}</span>
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

        {/* Apparatus Illustrations - Gap 3 Fix: 3-item grid */}
        <div className="alchemy__apparatus">
          <div className="apparatus__item apparatus__item--still">
            <div className="apparatus__illustration">
              <svg viewBox="0 0 80 100" aria-hidden="true">
                {/* Copper Alembic Still */}
                <ellipse cx="40" cy="80" rx="25" ry="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M15 80 L15 50 Q15 35 40 25 Q65 35 65 50 L65 80" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M40 25 L40 10 Q50 5 55 10 L55 20" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <ellipse cx="55" cy="18" rx="5" ry="2" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            <div className="apparatus__caption">Copper Alembic Still</div>
          </div>
          <div className="apparatus__item apparatus__item--vessel">
            <div className="apparatus__illustration">
              <svg viewBox="0 0 80 100" aria-hidden="true">
                {/* Maturation Vessel */}
                <ellipse cx="40" cy="85" rx="20" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M20 85 L20 40 Q20 25 40 25 Q60 25 60 40 L60 85" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M35 25 L35 15 M45 25 L45 15" stroke="currentColor" strokeWidth="1.5" />
                <ellipse cx="40" cy="15" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1" />
                {/* Liquid level */}
                <path d="M22 60 Q40 55 58 60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
              </svg>
            </div>
            <div className="apparatus__caption">Maturation Vessels</div>
          </div>
          <div className="apparatus__item apparatus__item--tools">
            <div className="apparatus__illustration">
              <svg viewBox="0 0 80 100" aria-hidden="true">
                {/* Alchemist Tools */}
                {/* Mortar */}
                <ellipse cx="25" cy="75" rx="15" ry="5" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M10 75 Q10 60 25 60 Q40 60 40 75" fill="none" stroke="currentColor" strokeWidth="1.5" />
                {/* Pestle */}
                <path d="M28 55 L35 30 Q36 28 38 30 L42 50" fill="none" stroke="currentColor" strokeWidth="1.5" />
                {/* Dropper */}
                <path d="M55 80 L55 50 Q55 45 60 45 Q65 45 65 50 L65 55" fill="none" stroke="currentColor" strokeWidth="1" />
                <ellipse cx="60" cy="83" rx="4" ry="6" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            <div className="apparatus__caption">Alchemist&apos;s Tools</div>
          </div>
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
