import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/hero/hero-section';
import { CompendiumSection } from '@/components/sections/compendium-section';
import { AlchemySection } from '@/components/sections/alchemy-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { NewsletterSection } from '@/components/sections/newsletter-section';
import { Footer } from '@/components/layout/footer';

// Atelier Hours Banner Component (Gap 1 Fix)
function AtelierBanner() {
  return (
    <div className="atelier-banner" role="banner">
      <div className="atelier-banner__container">
        <span className="atelier-banner__icon" aria-hidden="true">✷</span>
        <span className="atelier-banner__text">The Atelier is Open</span>
        <span className="atelier-banner__subtext">
          Current Batch: <em>N° 724 • Lavandula × intermedia</em>
        </span>
        <span className="atelier-banner__icon" aria-hidden="true">✷</span>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative w-full min-h-screen bg-parchment text-ink-900 font-serif selection:bg-gold/20">
      <AtelierBanner />
      <Header />
      <HeroSection />
      <CompendiumSection />
      <AlchemySection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}

