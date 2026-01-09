import { HeroFrame } from './hero-frame';
import { AlchemicalVessel } from './alchemical-vessel';
import { BotanicalLayer } from './botanical-layer';

export function HeroSection() {
  return (
    <section className="hero" id="hero">
      <HeroFrame>
        {/* Illuminated Initial */}
        <div className="hero__initial" aria-hidden="true">
          <span className="hero__initial-letter">A</span>
          <div className="hero__initial-flourish"></div>
        </div>

        <div className="hero__content">
          {/* Calligraphic Title */}
          <h1 className="hero__title">
            <span className="hero__title-line hero__title-line--1">
              <span className="hero__title-word">The</span>
              <span className="hero__title-word">Art</span>
            </span>
            <span className="hero__title-line hero__title-line--2">
              <span className="hero__title-word">of</span>
              <span className="hero__title-word hero__title-word--emph">Scent</span>
            </span>
            <span className="hero__title-line hero__title-line--3">
              <span className="hero__title-word">as</span>
              <span className="hero__title-word">Alchemy</span>
            </span>
          </h1>

          {/* Subtitle with Flourish */}
          <div className="hero__subtitle">
            <div className="hero__subtitle-flourish hero__subtitle-flourish--left"></div>
            <span className="hero__subtitle-text">Where Botany Becomes Poetry</span>
            <div className="hero__subtitle-flourish hero__subtitle-flourish--right"></div>
          </div>

          {/* Manuscript Excerpt */}
          <div className="hero__excerpt">
            <p className="hero__excerpt-text">
              Within our atelier, time slows to the rhythm of distillation. Each botanical is treated
              as a verse in nature&apos;s manuscript, its essence carefully extracted and preserved.
              Our practice honors the ancient alchemical tradition—transforming raw botanical matter
              into olfactory gold through patience, precision, and profound respect for the natural world.
            </p>
            <div className="hero__excerpt-rule"></div>
            <cite className="hero__excerpt-citation">— Master Perfumer&apos;s Journal</cite>
          </div>

          {/* Atelier Actions */}
          <div className="hero__actions">
            <a href="#compounds" className="btn btn--primary" data-hover-text="Explore the Compendium">
              <span className="btn__text">Enter the Atelier</span>
              <svg className="btn__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#process" className="btn btn--secondary" data-hover-text="Witness the Alchemy">
              <span className="btn__text">Our Alchemy</span>
              <span className="btn__ornament">❧</span>
            </a>
          </div>

          {/* Atelier Credentials */}
          <div className="hero__credentials">
            <div className="hero__credential">
              <span className="hero__credential-number">72</span>
              <span className="hero__credential-label">Hour Distillation</span>
            </div>
            <div className="hero__credential">
              <span className="hero__credential-number">∞</span>
              <span className="hero__credential-label">Patience</span>
            </div>
            <div className="hero__credential">
              <span className="hero__credential-number">100%</span>
              <span className="hero__credential-label">Artisanal</span>
            </div>
          </div>
        </div>

        {/* Hero Visual - Hand-blown Vessel */}
        <div className="hero__visual">
          <AlchemicalVessel />
          <BotanicalLayer />

          {/* Alchemical Symbol */}
          <div className="hero__symbol" aria-hidden="true">
            <svg className="hero__symbol-svg" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1,2" />
              <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </HeroFrame>

      {/* Scroll Indicator - Quill */}
      <div className="hero__scroll-indicator">
        <div className="scroll-indicator__quill">
          <div className="quill__nib"></div>
          <div className="quill__shaft"></div>
          <div className="quill__feather"></div>
        </div>
        <span className="scroll-indicator__label">Continue Reading</span>
      </div>
    </section>
  );
}
