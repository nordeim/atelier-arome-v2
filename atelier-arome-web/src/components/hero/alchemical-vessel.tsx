export function AlchemicalVessel() {
  return (
    <div className="hero__vessel-container">
      {/* Vessel */}
      <div className="hero__vessel">
        <div className="hero__vessel-neck"></div>
        <div className="hero__vessel-body">
          <div className="hero__vessel-liquid">
            <div className="vessel__meniscus"></div>
            <div className="vessel__reflection"></div>
          </div>
          <div className="hero__vessel-label">
            <span className="vessel-label__n">N°</span>
            <span className="vessel-label__number">724</span>
          </div>
        </div>
        <div className="hero__vessel-base"></div>
      </div>

      {/* Vessel Stand */}
      <div className="hero__vessel-stand"></div>
    </div>
  );
}
