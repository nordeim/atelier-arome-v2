import type { Metadata } from 'next';
import { Cormorant_Garamond, Crimson_Pro, Great_Vibes, Playfair_Display } from 'next/font/google';
import { ToastContainer } from '@/components/ui/toast';
import { VialDrawer } from '@/components/cart/vial-drawer';
import { Providers } from '@/components/providers/providers';
import './globals.css';
import './atelier.css';

// Renaissance Typography Stack
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const crimson = Crimson_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-crimson',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: 'Atelier Arôme — Artisanal Aromatherapy Essences',
    template: '%s — Atelier Arôme',
  },
  description:
    'Discover our meticulously curated collection of artisanal aromatherapy essences, blends, and alchemical preparations inspired by Renaissance botanical wisdom.',
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: 'http://localhost:3000',
    siteName: 'Atelier Arôme',
    title: 'Atelier Arôme — Artisanal Aromatherapy Essences',
    description:
      'Discover our meticulously curated collection of artisanal aromatherapy essences, blends, and alchemical preparations inspired by Renaissance botanical wisdom.',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Atelier Arôme',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atelier Arôme — Artisanal Aromatherapy Essences',
    description:
      'Discover our meticulously curated collection of artisanal aromatherapy essences, blends, and alchemical preparations inspired by Renaissance botanical wisdom.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${crimson.variable} ${greatVibes.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background font-body text-ink antialiased">
        {/* Parchment Texture Overlay - from static mockup */}
        <div className="texture-overlay" aria-hidden="true" />

        {/* Gold Leaf Accents */}
        <div className="gold-leaf gold-leaf--1" aria-hidden="true" />
        <div className="gold-leaf gold-leaf--2" aria-hidden="true" />
        <div className="gold-leaf gold-leaf--3" aria-hidden="true" />

        {/* Skip Navigation for Accessibility */}
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Providers (QueryClient, etc.) */}
        <Providers>
          {/* Toast Notifications */}
          <ToastContainer />

          {/* Cart Drawer */}
          <VialDrawer />

          {children}
        </Providers>
      </body>
    </html>
  );
}

