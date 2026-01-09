export function BotanicalLayer() {
  return (
    <div className="hero__botanicals">
      {/* Lavender */}
      <div className="hero__botanical hero__botanical--lavender">
        <div className="botanical__stem"></div>
        <div className="botanical__blossom"></div>
      </div>

      {/* Rose */}
      <div className="hero__botanical hero__botanical--rose">
        <div className="botanical__stem"></div>
        <div className="botanical__petals"></div>
      </div>

      {/* Eucalyptus */}
      <div className="hero__botanical hero__botanical--eucalyptus">
        <div className="botanical__stem"></div>
        <div className="botanical__leaves"></div>
      </div>
    </div>
  );
}
