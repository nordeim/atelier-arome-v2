export function HeroFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Hand-drawn Border - BEM structure from styles.css */}
      <div className="hero__border" aria-hidden="true">
        <div className="hero__border-corner hero__border-corner--tl"></div>
        <div className="hero__border-corner hero__border-corner--tr"></div>
        <div className="hero__border-corner hero__border-corner--bl"></div>
        <div className="hero__border-corner hero__border-corner--br"></div>
      </div>

      {/* Watermark Illustration */}
      <div className="hero__watermark" aria-hidden="true">
        <svg className="hero__watermark-svg" viewBox="0 0 400 400">
          <path d="M200 100 Q300 150 300 250 Q250 350 200 350 Q150 350 100 250 Q100 150 200 100 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.1" />
          <path d="M200 120 Q280 160 280 240 Q240 320 200 320 Q160 320 120 240 Q120 160 200 120 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.08" />
        </svg>
      </div>

      {/* Hero Container */}
      <div className="hero__container">
        {children}
      </div>
    </>
  );
}
