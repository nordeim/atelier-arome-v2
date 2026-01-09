# atelier-arome-web/eslint.config.mjs
```mjs
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

```

# atelier-arome-web/public/vercel.svg
```svg
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
```

# atelier-arome-web/public/globe.svg
```svg
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
```

# atelier-arome-web/public/next.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
```

# atelier-arome-web/public/window.svg
```svg
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
```

# atelier-arome-web/public/file.svg
```svg
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
```

# atelier-arome-web/next.config.ts
```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/atelier-arome/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  async redirects() {
    return [
      {
        source: '/shop',
        destination: '/compendium',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

```

# atelier-arome-web/components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}

```

# atelier-arome-web/tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./src/*"
      ],
      "@/components/*": [
        "./src/components/*"
      ],
      "@/lib/*": [
        "./src/lib/*"
      ],
      "@/hooks/*": [
        "./src/hooks/*"
      ],
      "@/stores/*": [
        "./src/stores/*"
      ],
      "@/types/*": [
        "./src/types/*"
      ],
      "@/styles/*": [
        "./src/styles/*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": [
    "node_modules"
  ]
}

```

# atelier-arome-web/next-env.d.ts
```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference path="./.next/types/routes.d.ts" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

# atelier-arome-web/postcss.config.mjs
```mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;

```

# atelier-arome-web/package.json
```json
{
  "name": "atelier-arome-web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-toast": "^1.2.15",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@tailwindcss/typography": "^0.5.19",
    "@tanstack/react-query": "^5.90.16",
    "axios": "^1.13.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.23.26",
    "lucide-react": "^0.562.0",
    "next": "^15.5.9",
    "next-auth": "^4.24.13",
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "react-hook-form": "^7.70.0",
    "tailwind-merge": "^3.4.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^4.3.5",
    "zustand": "^5.0.9"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.18",
    "@types/node": "^22.19.3",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "eslint": "^9.39.2",
    "eslint-config-next": "^16.1.1",
    "tailwindcss": "^4.1.18",
    "typescript": "^5.9.3"
  }
}

```

# atelier-arome-web/README.md
```md
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

# atelier-arome-web/tailwind.config.ts
```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#2A2D26',
          light: '#4A4D46',
          muted: '#545752',
        },
        gold: {
          DEFAULT: '#C9A769',
          light: '#E8D8B6',
          dark: '#A98750',
          muted: 'rgba(201, 167, 105, 0.3)',
          text: '#8B7355',
        },
        parchment: {
          DEFAULT: '#FAF8F5',
          dark: '#F5F1EB',
          darker: '#E8E4D9',
        },
        bronze: '#9A8C6D',
        rose: '#B87D7D',
        sage: '#7C6354',
        slate: '#7A8C9D',
        lavender: '#B8A9C9',
        eucalyptus: '#7CB9A0',
        bergamot: '#F5D489',
        rosehip: '#E8B4B8',
      },
      
      fontFamily: {
        display: ['var(--font-display)', 'Cormorant Garamond', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Crimson Pro', 'Georgia', 'serif'],
        accent: ['var(--font-accent)', 'Great Vibes', 'cursive'],
        ornament: ['Playfair Display', 'serif'],
      },
      
      fontSize: {
        xs: ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.5' }],
        sm: ['clamp(0.875rem, 0.8rem + 0.35vw, 1rem)', { lineHeight: '1.5' }],
        base: ['clamp(1rem, 0.95rem + 0.25vw, 1.125rem)', { lineHeight: '1.6' }],
        lg: ['clamp(1.125rem, 1.1rem + 0.5vw, 1.25rem)', { lineHeight: '1.4' }],
        xl: ['clamp(1.25rem, 1.2rem + 0.75vw, 1.5rem)', { lineHeight: '1.3' }],
        '2xl': ['clamp(1.5rem, 1.4rem + 2.5vw, 2rem)', { lineHeight: '1.1' }],
        '3xl': ['clamp(2rem, 1.8rem + 2.5vw, 3rem)', { lineHeight: '0.9' }],
        '4xl': ['clamp(2.5rem, 2.25rem + 2.5vw, 4rem)', { lineHeight: '0.95' }],
        '5xl': ['clamp(3rem, 2.75rem + 2.5vw, 5rem)', { lineHeight: '1' }],
      },
      
      spacing: {
        '3xs': '0.125rem',
        '2xs': '0.25rem',
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
        '5xl': '8rem',
        '6xl': '12rem',
      },
      
      borderRadius: {
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.5rem',
        xl: '1rem',
        '2xl': '2rem',
        '3xl': '4rem',
      },
      
      boxShadow: {
        sm: '0 1px 2px rgba(42, 45, 38, 0.05)',
        md: '0 4px 12px rgba(42, 45, 38, 0.08)',
        lg: '0 8px 24px rgba(42, 45, 38, 0.1)',
        xl: '0 16px 48px rgba(42, 45, 38, 0.12)',
        gold: '0 40px rgba(201, 167, 105, 0.2)',
      },
      
      transitionDuration: {
        micro: '150ms',
        fast: '300ms',
        base: '500ms',
        slow: '800ms',
      },
      
      zIndex: {
        base: '1',
        elevated: '10',
        sticky: '100',
        overlay: '1000',
        modal: '2000',
        toast: '3000',
      },
      
      keyframes: {
        'liquid-wave': {
          '0%, 100%': { transform: 'translateY(0) scaleY(1)' },
          '50%': { transform: 'translateY(-10px) scaleY(1.05)' },
        },
        'float-botanical': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'rotate-seal': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'write-scroll': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(5deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
        'pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        'liquid-sway': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
        },
        'bubble-rise': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-40px)', opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'seal-rotate': 'seal-rotate 30s linear infinite',
        'rotate-seal': 'rotate-seal 3s ease-in-out infinite',
        'liquid-sway': 'liquid-sway 3s ease-in-out infinite',
        'bubble-rise': 'bubble-rise 2s ease-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
};

export default config;

```

# atelier-arome-web/src/app/(checkout)/layout.tsx
```tsx
'use client';

import Link from 'next/link';

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen w-full">
      <div className="max-w-container mx-auto px-4 py-16">
        <header>
          <Link href="/">
            <h1 className="font-display text-3xl text-ink">Atelier Arôme</h1>
          </Link>
        </header>
        
        <main className="max-w-container mx-auto px-4">
          {children}
          </main>
        
        <footer className="mt-20 border-t border-gold/30 pt-10 pb-10">
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} Atelier Arôme. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}

```

# atelier-arome-web/src/app/layout.tsx
```tsx
import type { Metadata } from 'next';
import { Cormorant_Garamond, Crimson_Pro, Great_Vibes, Playfair_Display } from 'next/font/google';
import { ToastContainer } from '@/components/ui/toast';
import { VialDrawer } from '@/components/cart/vial-drawer';
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

        {/* Toast Notifications */}
        <ToastContainer />

        {/* Cart Drawer */}
        <VialDrawer />

        {children}
      </body>
    </html>
  );
}

```

# atelier-arome-web/src/app/atelier.css
```css
/* ============================================
   ATELIER ARÔME - ILLUMINATED AROMATHERAPY
   Renaissance Manuscript CSS Architecture
   ============================================ */

/* CSS Reset & Custom Properties */
:root {
  /* Color System - Illuminated Manuscript */
  --color-ink: #2A2D26;
  --color-ink-light: #4A4D46;
  --color-ink-muted: #6A6D66;

  --color-gold: #C9A769;
  --color-gold-light: #E8D8B6;
  --color-gold-dark: #A98750;
  --color-gold-muted: rgba(201, 167, 105, 0.3);

  --color-parchment: #FAF8F5;
  --color-parchment-dark: #F5F1EB;
  --color-parchment-darker: #E8E4D9;

  --color-bronze: #9A8C6D;
  --color-rose: #B87D7D;
  --color-sage: #7C6354;
  --color-slate: #7A8C9D;

  /* Botanical Accents */
  --color-lavender: #B8A9C9;
  --color-eucalyptus: #7CB9A0;
  --color-bergamot: #F5D489;
  --color-rosehip: #E8B4B8;

  /* Typography - Renaissance Elegance */
  --font-display: 'Cormorant Garamond', 'Georgia', serif;
  --font-body: 'Crimson Pro', 'Georgia', serif;
  --font-accent: 'Great Vibes', cursive;
  --font-ornament: 'Playfair Display', serif;

  /* Fluid Typography Scale */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.5vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.25rem + 1.25vw, 2rem);
  --text-3xl: clamp(2rem, 1.5rem + 2.5vw, 3rem);
  --text-4xl: clamp(2.5rem, 2rem + 2.5vw, 4rem);
  --text-5xl: clamp(3rem, 2.5rem + 2.5vw, 5rem);

  /* Spacing - Golden Ratio */
  --space-3xs: 0.125rem;
  --space-2xs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
  --space-4xl: 6rem;
  --space-5xl: 8rem;
  --space-6xl: 12rem;

  /* Layout */
  --container-max: 1400px;
  --container-padding: clamp(1rem, 5vw, 2rem);

  /* Border Radius - Soft, Organic */
  --radius-sm: 0.125rem;
  --radius-md: 0.25rem;
  --radius-lg: 0.5rem;
  --radius-xl: 1rem;
  --radius-2xl: 2rem;
  --radius-3xl: 4rem;
  --radius-full: 9999px;

  /* Shadows - Subtle Depth */
  --shadow-sm: 0 1px 2px rgba(42, 45, 38, 0.05);
  --shadow-md: 0 4px 12px rgba(42, 45, 38, 0.08);
  --shadow-lg: 0 8px 24px rgba(42, 45, 38, 0.1);
  --shadow-xl: 0 16px 48px rgba(42, 45, 38, 0.12);
  --shadow-gold: 0 0 40px rgba(201, 167, 105, 0.2);

  /* Parchment Texture */
  --parchment-texture: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E");

  /* Transitions - Deliberate & Elegant */
  --transition-micro: 150ms ease;
  --transition-fast: 300ms ease;
  --transition-base: 500ms ease;
  --transition-slow: 800ms ease;
  --transition-bounce: 600ms cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Z-Index - Manuscript Layers */
  --z-base: 1;
  --z-elevated: 10;
  --z-sticky: 100;
  --z-overlay: 1000;
  --z-modal: 2000;
  --z-toast: 3000;
}

/* Base Styles */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-size-adjust: 100%;
  background-color: var(--color-parchment);
}

body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-ink);
  background-color: var(--color-parchment);
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
}

/* Parchment Texture Overlay */
.texture-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: var(--parchment-texture);
  opacity: 0.15;
  pointer-events: none;
  z-index: var(--z-base);
}

/* Gold Leaf Accents */
.gold-leaf {
  position: fixed;
  background: radial-gradient(circle, var(--color-gold-muted) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: var(--z-base);
}

.gold-leaf--1 {
  width: 400px;
  height: 400px;
  top: -200px;
  right: -200px;
  opacity: 0.4;
}

.gold-leaf--2 {
  width: 300px;
  height: 300px;
  bottom: -150px;
  left: -150px;
  opacity: 0.3;
}

.gold-leaf--3 {
  width: 200px;
  height: 200px;
  top: 50%;
  left: 10%;
  opacity: 0.2;
}

/* Focus Styles */
:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

/* Selection */
::selection {
  background-color: var(--color-gold-light);
  color: var(--color-ink);
}

/* Links */
a {
  color: inherit;
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-gold);
}

/* Images */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
  height: auto;
}

/* Lists */
ul,
ol {
  list-style: none;
}

/* Buttons */
button {
  font-family: inherit;
  font-size: inherit;
  background: none;
  border: none;
  cursor: pointer;
}

/* Form Elements */
input,
textarea,
select {
  font-family: inherit;
  font-size: inherit;
}

/* Accessibility */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.skip-link {
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-ink);
  color: var(--color-parchment);
  padding: var(--space-sm) var(--space-lg);
  font-weight: 500;
  text-decoration: none;
  border-radius: var(--radius-md);
  z-index: var(--z-toast);
  transition: top var(--transition-fast);
}

.skip-link:focus {
  top: var(--space-md);
}

/* ============================================
   ATELIER BANNER
   ============================================ */
.atelier-banner {
  background: linear-gradient(90deg,
      var(--color-ink) 0%,
      var(--color-sage) 50%,
      var(--color-ink) 100%);
  color: var(--color-parchment);
  padding: var(--space-sm) var(--container-padding);
  text-align: center;
  position: relative;
  z-index: var(--z-sticky);
}

.atelier-banner__container {
  max-width: var(--container-max);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  font-size: var(--text-sm);
}

.atelier-banner__icon {
  color: var(--color-gold);
  opacity: 0.8;
}

.atelier-banner__text {
  font-weight: 500;
  letter-spacing: 0.05em;
}

.atelier-banner__subtext {
  font-size: var(--text-xs);
  opacity: 0.8;
  display: none;
}

@media (min-width: 768px) {
  .atelier-banner__subtext {
    display: inline;
  }
}

.atelier-banner__subtext em {
  font-style: italic;
  color: var(--color-gold-light);
}

/* ============================================
   HEADER - ATELIER STUDIO
   ============================================ */
.header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  background: rgba(250, 248, 245, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-parchment-dark);
  transition: all var(--transition-base);
}

.header.scrolled {
  box-shadow: var(--shadow-md);
}

.header__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--space-md) var(--container-padding);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--space-xl);
}

/* Atelier Seal */
.header__seal {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  text-decoration: none;
  color: var(--color-ink);
  z-index: var(--z-elevated);
}

.header__seal-inner {
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__seal-svg {
  width: 100%;
  height: 100%;
  color: var(--color-ink);
  animation: rotateSeal 30s linear infinite;
}

@keyframes rotateSeal {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.header__seal-text {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.header__seal-name {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  line-height: 1;
}

.header__seal-tagline {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-ink-muted);
  letter-spacing: 0.1em;
}

/* Navigation */
.header__nav {
  display: none;
}

@media (min-width: 1024px) {
  .header__nav {
    display: block;
  }
}

.header__nav-list {
  display: flex;
  justify-content: center;
  gap: var(--space-2xl);
}

.header__nav-item {
  position: relative;
}

.header__nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--color-ink-muted);
  padding: var(--space-xs);
  transition: all var(--transition-fast);
}

.header__nav-number {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-gold);
  margin-bottom: var(--space-3xs);
  opacity: 0.6;
  text-shadow: 0 1px 1px rgba(42, 45, 38, 0.3);
  transition: opacity var(--transition-fast);
}

.header__nav-label {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  position: relative;
}

.header__nav-label::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-gold);
  transition: width var(--transition-base);
}

.header__nav-link:hover,
.header__nav-link:focus {
  color: var(--color-ink);
}

.header__nav-link:hover .header__nav-number,
.header__nav-link:focus .header__nav-number {
  opacity: 1;
}

.header__nav-link:hover .header__nav-label::after,
.header__nav-link:focus .header__nav-label::after {
  width: 100%;
}

/* Header Tools */
.header__tools {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.header__tool {
  position: relative;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--color-parchment-dark);
  border-radius: var(--radius-md);
  color: var(--color-ink);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.header__tool:hover {
  background: rgba(201, 167, 105, 0.1);
  border-color: var(--color-gold);
  color: var(--color-gold);
  transform: translateY(-2px);
}

.header__tool::before {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-8px);
  background: var(--color-ink);
  color: var(--color-parchment);
  padding: var(--space-xs) var(--space-sm);
  font-size: var(--text-xs);
  border-radius: var(--radius-sm);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-fast);
  white-space: nowrap;
  pointer-events: none;
}

.header__tool:hover::before {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-4px);
}

.header__tool[data-count]::after {
  content: attr(data-count);
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-gold);
  color: var(--color-ink);
  font-size: 0.65rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  padding: 0 4px;
}

/* Mobile Menu Toggle - Quill */
.header__menu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: 1px solid var(--color-parchment-dark);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  position: relative;
}

@media (min-width: 1024px) {
  .header__menu-toggle {
    display: none;
  }
}

.header__menu-toggle:hover {
  background: rgba(201, 167, 105, 0.1);
  border-color: var(--color-gold);
}

.header__menu-quill {
  width: 20px;
  height: 30px;
  position: relative;
  transition: all var(--transition-fast);
}

.header__menu-quill::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: var(--color-ink);
  transition: all var(--transition-fast);
}

.header__menu-quill::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 8px;
  background: var(--color-ink);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transition: all var(--transition-fast);
}

.header__menu-toggle[aria-expanded="true"] .header__menu-quill::before {
  transform: translateX(-50%) rotate(45deg);
}

.header__menu-toggle[aria-expanded="true"] .header__menu-quill::after {
  transform: translateX(-50%) rotate(-45deg);
  top: 12px;
}

/* Mobile Navigation - Manuscript Pages */
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-ink);
  color: var(--color-parchment);
  z-index: var(--z-modal);
  transform: translateX(100%);
  transition: transform var(--transition-base) cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
}

.mobile-nav.active {
  transform: translateX(0);
}

.mobile-nav__container {
  min-height: 100%;
  padding: var(--space-4xl) var(--container-padding) var(--space-2xl);
  display: flex;
  flex-direction: column;
  position: relative;
}

.mobile-nav__container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(201, 167, 105, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(124, 99, 84, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.mobile-nav__header {
  margin-bottom: var(--space-3xl);
  text-align: center;
  position: relative;
  z-index: var(--z-base);
}

.mobile-nav__seal {
  width: 80px;
  height: 80px;
  margin: 0 auto var(--space-lg);
  border: 1px solid var(--color-gold);
  border-radius: 50%;
  position: relative;
  animation: pulse 3s ease-in-out infinite;
}

.mobile-nav__seal::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border: 1px dashed var(--color-gold);
  border-radius: 50%;
}

.mobile-nav__title {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  color: var(--color-gold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.mobile-nav__list {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  position: relative;
  z-index: var(--z-base);
}

.mobile-nav__item {
  border-bottom: 1px solid rgba(201, 167, 105, 0.1);
  transition: border-color var(--transition-fast);
}

.mobile-nav__item:hover {
  border-bottom-color: var(--color-gold);
}

.mobile-nav__link {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg) 0;
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-fast);
}

.mobile-nav__link:hover,
.mobile-nav__link:focus {
  color: var(--color-gold-light);
}

.mobile-nav__ornament {
  color: var(--color-gold);
  font-size: var(--text-lg);
}

.mobile-nav__label {
  font-family: var(--font-body);
  font-size: var(--text-xl);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.mobile-nav__page {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-gold);
  opacity: 0.6;
}

.mobile-nav__colophon {
  margin-top: var(--space-2xl);
  padding-top: var(--space-lg);
  border-top: 1px solid rgba(201, 167, 105, 0.1);
  text-align: center;
  position: relative;
  z-index: var(--z-base);
}

.mobile-nav__colophon-text {
  display: block;
  font-family: var(--font-display);
  font-size: var(--text-lg);
  color: var(--color-gold-light);
  margin-bottom: var(--space-xs);
}

.mobile-nav__colophon-year {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
  letter-spacing: 0.1em;
}

/* ============================================
   HERO SECTION - ILLUMINATED MANUSCRIPT
   ============================================ */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg,
      var(--color-parchment) 0%,
      #F5F1EB 50%,
      var(--color-parchment) 100%);
  padding: var(--space-5xl) var(--container-padding);
}

/* Hand-drawn Border */
.hero__border {
  position: absolute;
  top: var(--space-2xl);
  right: var(--space-2xl);
  bottom: var(--space-2xl);
  left: var(--space-2xl);
  pointer-events: none;
  z-index: var(--z-base);
}

.hero__border-corner {
  position: absolute;
  width: 60px;
  height: 60px;
}

.hero__border-corner::before,
.hero__border-corner::after {
  content: '';
  position: absolute;
  background: var(--color-ink);
  opacity: 0.1;
}

.hero__border-corner--tl {
  top: 0;
  left: 0;
  border-top: 1px solid var(--color-ink);
  border-left: 1px solid var(--color-ink);
}

.hero__border-corner--tl::before {
  top: 10px;
  left: 0;
  width: 20px;
  height: 1px;
}

.hero__border-corner--tl::after {
  top: 0;
  left: 10px;
  width: 1px;
  height: 20px;
}

.hero__border-corner--tr {
  top: 0;
  right: 0;
  border-top: 1px solid var(--color-ink);
  border-right: 1px solid var(--color-ink);
}

.hero__border-corner--tr::before {
  top: 10px;
  right: 0;
  width: 20px;
  height: 1px;
}

.hero__border-corner--tr::after {
  top: 0;
  right: 10px;
  width: 1px;
  height: 20px;
}

.hero__border-corner--bl {
  bottom: 0;
  left: 0;
  border-bottom: 1px solid var(--color-ink);
  border-left: 1px solid var(--color-ink);
}

.hero__border-corner--bl::before {
  bottom: 10px;
  left: 0;
  width: 20px;
  height: 1px;
}

.hero__border-corner--bl::after {
  bottom: 0;
  left: 10px;
  width: 1px;
  height: 20px;
}

.hero__border-corner--br {
  bottom: 0;
  right: 0;
  border-bottom: 1px solid var(--color-ink);
  border-right: 1px solid var(--color-ink);
}

.hero__border-corner--br::before {
  bottom: 10px;
  right: 0;
  width: 20px;
  height: 1px;
}

.hero__border-corner--br::after {
  bottom: 0;
  right: 10px;
  width: 1px;
  height: 20px;
}

/* Watermark */
.hero__watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 80vw;
  max-width: 800px;
  max-height: 800px;
  opacity: 0.05;
  pointer-events: none;
}

.hero__watermark-svg {
  width: 100%;
  height: 100%;
  color: var(--color-ink);
}

/* Hero Container */
.hero__container {
  position: relative;
  z-index: var(--z-elevated);
  max-width: var(--container-max);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4xl);
  align-items: center;
}

@media (min-width: 1024px) {
  .hero__container {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-5xl);
  }
}

/* Illuminated Initial */
.hero__initial {
  position: absolute;
  top: -40px;
  left: -40px;
  width: 120px;
  height: 120px;
  display: none;
}

@media (min-width: 1024px) {
  .hero__initial {
    display: block;
  }
}

.hero__initial-letter {
  position: absolute;
  top: 0;
  left: 0;
  font-family: var(--font-accent);
  font-size: 8rem;
  color: var(--color-gold);
  opacity: 0.1;
  z-index: 1;
}

.hero__initial-flourish {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  border: 2px solid var(--color-gold);
  opacity: 0.2;
  border-radius: 50%;
}

/* Hero Content */
.hero__content {
  text-align: center;
  position: relative;
}

@media (min-width: 1024px) {
  .hero__content {
    text-align: left;
  }
}

/* Hero Title */
.hero__title {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: 300;
  line-height: 0.9;
  margin-bottom: var(--space-xl);
}

.hero__title-line {
  display: block;
  margin-bottom: var(--space-sm);
}

.hero__title-word {
  display: inline-block;
  margin-right: var(--space-sm);
  position: relative;
}

.hero__title-word--emph {
  color: var(--color-gold-dark);
  font-weight: 400;
  position: relative;
}

.hero__title-word--emph::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-gold);
  opacity: 0.3;
}

/* Hero Subtitle */
.hero__subtitle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  margin-bottom: var(--space-2xl);
}

@media (min-width: 1024px) {
  .hero__subtitle {
    justify-content: flex-start;
  }
}

.hero__subtitle-flourish {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg,
      transparent,
      var(--color-ink-light),
      transparent);
  opacity: 0.3;
}

.hero__subtitle-flourish--left {
  max-width: 60px;
}

.hero__subtitle-flourish--right {
  max-width: 60px;
}

.hero__subtitle-text {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-style: italic;
  color: var(--color-ink-muted);
  white-space: nowrap;
}

/* Hero Excerpt */
.hero__excerpt {
  max-width: 500px;
  margin: 0 auto var(--space-2xl);
  text-align: left;
}

@media (min-width: 1024px) {
  .hero__excerpt {
    margin-left: 0;
    margin-right: 0;
  }
}

.hero__excerpt-text {
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--color-ink-light);
  margin-bottom: var(--space-lg);
  font-style: italic;
}

.hero__excerpt-rule {
  width: 100px;
  height: 1px;
  background: linear-gradient(90deg,
      var(--color-gold),
      transparent);
  margin-bottom: var(--space-sm);
}

.hero__excerpt-citation {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-gold);
  font-style: normal;
}

/* Hero Actions */
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  justify-content: center;
  margin-bottom: var(--space-3xl);
}

@media (min-width: 1024px) {
  .hero__actions {
    justify-content: flex-start;
  }
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-xl);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: 0.02em;
  text-decoration: none;
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent);
  transition: left var(--transition-slow);
}

.btn:hover::before {
  left: 100%;
}

.btn__text {
  position: relative;
  z-index: 1;
}

.btn__icon {
  position: relative;
  z-index: 1;
  width: 16px;
  height: 16px;
}

.btn__ornament {
  position: relative;
  z-index: 1;
  font-size: var(--text-lg);
}

.btn--primary {
  background: var(--color-ink);
  color: var(--color-parchment);
  border: 1px solid var(--color-ink);
}

.btn--primary:hover {
  background: var(--color-ink-light);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn--secondary {
  background: transparent;
  color: var(--color-ink);
  border: 1px solid var(--color-parchment-dark);
}

.btn--secondary:hover {
  background: rgba(201, 167, 105, 0.1);
  border-color: var(--color-gold);
  color: var(--color-gold);
}

.btn--outline {
  background: transparent;
  color: var(--color-ink);
  border: 1px solid var(--color-ink);
}

.btn--outline:hover {
  background: var(--color-ink);
  color: var(--color-parchment);
}

/* Hero Credentials */
.hero__credentials {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xl);
  justify-content: center;
}

@media (min-width: 1024px) {
  .hero__credentials {
    justify-content: flex-start;
  }
}

.hero__credential {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero__credential-number {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--color-gold);
  margin-bottom: var(--space-xs);
}

.hero__credential-label {
  font-size: var(--text-xs);
  color: var(--color-ink-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Hero Visual */
.hero__visual {
  position: relative;
  order: -1;
}

@media (min-width: 1024px) {
  .hero__visual {
    order: 0;
  }
}

/* Vessel Container */
.hero__vessel-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

/* Vessel */
.hero__vessel {
  position: relative;
  width: 200px;
  margin: 0 auto;
  z-index: 2;
}

.hero__vessel-neck {
  width: 40px;
  height: 40px;
  margin: 0 auto;
  background: linear-gradient(180deg,
      rgba(250, 248, 245, 0.9) 0%,
      rgba(250, 248, 245, 0.7) 100%);
  border: 2px solid var(--color-parchment-dark);
  border-bottom: none;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -4px 12px rgba(42, 45, 38, 0.1);
}

.hero__vessel-body {
  position: relative;
  width: 200px;
  height: 300px;
  background: linear-gradient(180deg,
      rgba(250, 248, 245, 0.95) 0%,
      rgba(250, 248, 245, 0.8) 20%,
      rgba(250, 248, 245, 0.6) 100%);
  border: 2px solid var(--color-parchment-dark);
  border-top: none;
  border-radius: 0 0 60px 60px;
  box-shadow:
    inset 0 4px 20px rgba(255, 255, 255, 0.8),
    0 20px 60px rgba(42, 45, 38, 0.15);
  overflow: hidden;
}

.hero__vessel-liquid {
  position: absolute;
  bottom: 8px;
  left: 8px;
  right: 8px;
  top: 60%;
  background: linear-gradient(180deg,
      var(--color-lavender) 0%,
      #9584A8 50%,
      #7A6B8A 100%);
  border-radius: 40px 40px 50px 50px;
  animation: liquidWave 8s ease-in-out infinite;
}

@keyframes liquidWave {

  0%,
  100% {
    transform: translateY(0) scaleY(1);
    top: 60%;
  }

  50% {
    transform: translateY(-10px) scaleY(1.05);
    top: 55%;
  }
}

.vessel__meniscus {
  position: absolute;
  top: -20px;
  left: 0;
  right: 0;
  height: 40px;
  background: radial-gradient(ellipse at center,
      var(--color-lavender) 0%,
      transparent 70%);
  opacity: 0.6;
}

.vessel__reflection {
  position: absolute;
  top: 20%;
  left: 20%;
  right: 20%;
  bottom: 0;
  background: linear-gradient(180deg,
      rgba(255, 255, 255, 0.4) 0%,
      transparent 100%);
  border-radius: 40px;
}

.hero__vessel-label {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: rgba(250, 248, 245, 0.9);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  box-shadow: 0 4px 12px rgba(42, 45, 38, 0.1);
  border: 1px solid var(--color-parchment-dark);
}

.vessel-label__n {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-gold);
  margin-right: 2px;
}

.vessel-label__number {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--color-ink);
}

.hero__vessel-base {
  width: 240px;
  height: 20px;
  margin: -10px auto 0;
  background: linear-gradient(180deg,
      var(--color-bronze) 0%,
      #7A6B5A 100%);
  border-radius: var(--radius-md);
  box-shadow: 0 8px 24px rgba(42, 45, 38, 0.2);
}

/* Vessel Stand */
.hero__vessel-stand {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 10px;
  background: var(--color-ink);
  border-radius: var(--radius-sm);
  z-index: 1;
}

/* Botanical Specimens */
.hero__botanicals {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 3;
}

.hero__botanical {
  position: absolute;
  opacity: 0.8;
  animation: floatBotanical 6s ease-in-out infinite;
}

.hero__botanical--lavender {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.hero__botanical--rose {
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.hero__botanical--eucalyptus {
  bottom: 30%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes floatBotanical {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

.botanical__stem {
  width: 2px;
  height: 40px;
  background: var(--color-sage);
  margin: 0 auto;
  border-radius: var(--radius-full);
}

.botanical__blossom {
  width: 16px;
  height: 16px;
  background: var(--color-lavender);
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
}

.botanical__blossom::before,
.botanical__blossom::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  background: var(--color-lavender);
  border-radius: 50%;
  opacity: 0.8;
}

.botanical__blossom::before {
  top: -8px;
  left: 2px;
}

.botanical__blossom::after {
  top: 2px;
  left: -8px;
}

.botanical__petals {
  width: 24px;
  height: 24px;
  background: conic-gradient(var(--color-rose) 0deg 90deg,
      var(--color-rosehip) 90deg 180deg,
      var(--color-rose) 180deg 270deg,
      var(--color-rosehip) 270deg 360deg);
  border-radius: 50%;
  margin: 0 auto;
}

.botanical__leaves {
  width: 20px;
  height: 20px;
  background: var(--color-eucalyptus);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  margin: 0 auto;
}

/* Alchemical Symbol */
.hero__symbol {
  position: absolute;
  bottom: -40px;
  right: -20px;
  width: 120px;
  height: 120px;
  opacity: 0.1;
  pointer-events: none;
}

.hero__symbol-svg {
  width: 100%;
  height: 100%;
  color: var(--color-ink);
  animation: rotateSymbol 60s linear infinite;
}

@keyframes rotateSymbol {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Scroll Indicator - Quill */
.hero__scroll-indicator {
  position: absolute;
  bottom: var(--space-2xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
}

.scroll-indicator__quill {
  width: 40px;
  height: 60px;
  position: relative;
  animation: writeScroll 2s ease-in-out infinite;
}

@keyframes writeScroll {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(10px) rotate(5deg);
  }
}

.quill__nib {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 10px;
  background: var(--color-ink);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.quill__shaft {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 30px;
  background: var(--color-gold);
  border-radius: var(--radius-full);
}

.quill__feather {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg,
      transparent 40%,
      var(--color-gold-light) 50%,
      transparent 60%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.scroll-indicator__label {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-ink-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* ============================================
   COMPENDIUM SECTION
   ============================================ */
.compendium {
  padding: var(--space-5xl) var(--container-padding);
  background: var(--color-parchment);
  position: relative;
  overflow: hidden;
}

/* Section Border */
.section-border {
  position: absolute;
  top: var(--space-3xl);
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: var(--z-base);
}

.section-border__ornament {
  color: var(--color-gold);
  font-size: var(--text-2xl);
  opacity: 0.3;
}

.compendium__container {
  max-width: var(--container-max);
  margin: 0 auto;
  position: relative;
  z-index: var(--z-elevated);
}

/* Compendium Header */
.compendium__header {
  text-align: center;
  margin-bottom: var(--space-4xl);
  position: relative;
}

.compendium__header .section-label {
  margin-bottom: var(--space-sm);
}

.compendium__rule {
  width: 100px;
  height: 1px;
  background: linear-gradient(90deg,
      transparent,
      var(--color-gold),
      transparent);
  margin: var(--space-xl) auto;
}

.compendium__header .section-description {
  margin: 0 auto;
}

/* Section Label */
.section-label {
  display: inline-block;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-gold-dark);
}

.section-label--light {
  color: var(--color-gold-light);
}

/* Section Title */
.section-title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  line-height: 1.1;
  margin-bottom: var(--space-md);
}

.section-title__line {
  display: block;
}

.section-title__line--emph {
  color: var(--color-gold);
  font-weight: 400;
}

/* Section Description */
.section-description {
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--color-ink-light);
  max-width: 600px;
}

/* Compendium Filters */
.compendium__filters {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);
}

@media (min-width: 768px) {
  .compendium__filters {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.compendium__filter-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

@media (min-width: 640px) {
  .compendium__filter-group {
    flex-direction: row;
    align-items: center;
  }
}

.compendium__filter-label {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
  white-space: nowrap;
}

.compendium__filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.compendium__filter {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-sm) var(--space-lg);
  background: var(--color-parchment);
  border: 1px solid var(--color-parchment-dark);
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.compendium__filter:hover {
  background: rgba(201, 167, 105, 0.1);
  border-color: var(--color-gold);
  color: var(--color-ink);
}

.compendium__filter[aria-pressed="true"] {
  background: var(--color-ink);
  color: var(--color-parchment);
  border-color: var(--color-ink);
}

.compendium__filter[aria-pressed="true"] .compendium__filter-ornament,
.compendium__filter[aria-pressed="true"] .compendium__filter-icon {
  color: var(--color-gold);
}

.compendium__filter-ornament {
  color: var(--color-gold);
  font-size: var(--text-sm);
}

/* Gap 6 Fix: Filter text styling */
.compendium__filter-text {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
}

.compendium__filter-icon {
  font-size: var(--text-sm);
  margin-left: var(--space-xs);
}

/* Compendium Sort */
.compendium__sort {
  position: relative;
}

.compendium__sort-select {
  padding: var(--space-sm) var(--space-lg) var(--space-sm) var(--space-md);
  background: var(--color-parchment);
  border: 1px solid var(--color-parchment-dark);
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-ink);
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%232A2D26' stroke-width='1.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 40px;
  transition: all var(--transition-fast);
}

.compendium__sort-select:hover {
  background-color: rgba(201, 167, 105, 0.1);
  border-color: var(--color-gold);
}

.compendium__sort-ornament {
  position: absolute;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background: var(--color-gold);
  border-radius: 50%;
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.compendium__sort-select:focus+.compendium__sort-ornament {
  opacity: 1;
}

/* Compendium Grid */
.compendium__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-2xl);
  margin-bottom: var(--space-4xl);
}

@media (min-width: 768px) {
  .compendium__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .compendium__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Essence Card */
.essence-card {
  background: var(--color-parchment);
  border: 1px solid var(--color-parchment-dark);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all var(--transition-base);
  position: relative;
}

.essence-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-gold);
}

.essence-card--featured {
  grid-column: 1 / -1;
}

@media (min-width: 768px) {
  .essence-card--featured {
    grid-column: span 2;
  }
}

@media (min-width: 1024px) {
  .essence-card--featured {
    grid-column: span 1;
  }
}

/* Essence Card Illumination */
.essence-card__illumination {
  position: relative;
  height: 200px;
  background: linear-gradient(135deg,
      rgba(201, 167, 105, 0.05) 0%,
      transparent 100%);
  overflow: hidden;
}

.essence-card__illustration {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  opacity: 0.6;
}

.essence-card__botanical-svg {
  width: 100%;
  height: 100%;
  color: var(--color-ink);
  opacity: 0.3;
}

.essence-card__folio {
  position: absolute;
  top: var(--space-lg);
  left: var(--space-lg);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-gold);
  color: var(--color-parchment);
  border-radius: 50%;
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(201, 167, 105, 0.3);
}

.essence-card__badge {
  position: absolute;
  top: var(--space-lg);
  right: var(--space-lg);
  padding: var(--space-xs) var(--space-sm);
  background: var(--color-ink);
  color: var(--color-parchment);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.essence-card__badge-ornament {
  width: 4px;
  height: 4px;
  background: var(--color-gold);
  border-radius: 50%;
}

/* Essence Card Content */
.essence-card__content {
  padding: var(--space-xl);
}

/* Latin Name */
.essence-card__latin {
  margin-bottom: var(--space-md);
}

.essence-card__latin-name {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-style: italic;
  color: var(--color-gold-dark);
  margin-bottom: var(--space-xs);
}

.essence-card__latin-rule {
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg,
      var(--color-gold),
      transparent);
}

/* Title */
.essence-card__title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  line-height: 1.2;
  margin-bottom: var(--space-sm);
}

/* Humour */
.essence-card__humour {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
}

.essence-card__humour-icon {
  font-size: var(--text-lg);
  color: var(--color-gold);
  text-shadow: 0 1px 1px rgba(42, 45, 38, 0.3);
}

.essence-card__humour-label {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-ink-muted);
}

/* Description */
.essence-card__description {
  font-size: var(--text-sm);
  line-height: 1.6;
  color: var(--color-ink-light);
  margin-bottom: var(--space-lg);
}

/* Notes */
.essence-card__notes {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
  padding: var(--space-md);
  background: rgba(201, 167, 105, 0.05);
  border-radius: var(--radius-md);
}

.essence-card__note {
  display: flex;
  flex-direction: column;
}

.essence-card__note-label {
  font-size: var(--text-xs);
  color: var(--color-ink-muted);
  margin-bottom: var(--space-3xs);
}

.essence-card__note-value {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-ink);
}

/* Footer */
.essence-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.essence-card__pricing {
  display: flex;
  flex-direction: column;
}

.essence-card__price {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--color-ink);
}

.essence-card__measure {
  font-size: var(--text-xs);
  color: var(--color-ink-muted);
}

.essence-card__action {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-sm) var(--space-lg);
  background: var(--color-ink);
  color: var(--color-parchment);
  border: none;
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.essence-card__action:hover {
  background: var(--color-ink-light);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(42, 45, 38, 0.2);
}

.essence-card__action-icon {
  width: 16px;
  height: 16px;
}

.essence-card__action-text {
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Compendium Footer - Gap 7 Fix */
.compendium__footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xl);
  padding-top: var(--space-3xl);
  margin-top: var(--space-2xl);
  border-top: 1px solid var(--color-parchment-dark);
}

@media (min-width: 768px) {
  .compendium__footer {
    flex-direction: row;
    justify-content: space-between;
  }
}

.compendium__counter {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-ink-light);
}

.compendium__counter-current {
  font-weight: 600;
  color: var(--color-ink);
}

.compendium__counter-separator {
  opacity: 0.5;
}

.compendium__counter-total {
  font-weight: 600;
  color: var(--color-gold);
}

.compendium__counter-label {
  margin-left: var(--space-sm);
  font-size: var(--text-xs);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* ============================================
   ALCHEMY SECTION
   ============================================ */
.alchemy {
  padding: var(--space-5xl) var(--container-padding);
  background: var(--color-ink);
  color: var(--color-parchment);
  position: relative;
  overflow: hidden;
}

/* Watermark */
.alchemy__watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-accent);
  font-size: 40vw;
  color: rgba(201, 167, 105, 0.03);
  white-space: nowrap;
  pointer-events: none;
  z-index: var(--z-base);
}

/* Watermark Text - Gap 4 Fix */
.alchemy__watermark-text {
  display: block;
  font-family: var(--font-accent);
  font-size: clamp(15rem, 30vw, 40rem);
  color: rgba(201, 167, 105, 0.04);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.alchemy__container {
  max-width: var(--container-max);
  margin: 0 auto;
  position: relative;
  z-index: var(--z-elevated);
}

/* Alchemy Header */
.alchemy__header {
  text-align: center;
  margin-bottom: var(--space-4xl);
}

.alchemy__header .section-label {
  color: var(--color-gold-light);
}

.alchemy__rule {
  width: 100px;
  height: 1px;
  background: linear-gradient(90deg,
      transparent,
      var(--color-gold),
      transparent);
  margin: var(--space-xl) auto;
}

/* Alchemy Process */
.alchemy__process {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
  margin-bottom: var(--space-4xl);
}

.alchemy-step {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--space-xl);
  align-items: start;
  padding: var(--space-xl);
  background: rgba(201, 167, 105, 0.05);
  border: 1px solid rgba(201, 167, 105, 0.1);
  border-radius: var(--radius-xl);
  transition: all var(--transition-base);
}

.alchemy-step:hover {
  background: rgba(201, 167, 105, 0.1);
  border-color: var(--color-gold);
  transform: translateX(8px);
}

.alchemy-step__number {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-gold);
  color: var(--color-ink);
  border-radius: 50%;
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 600;
}

/* Roman Numeral Styling - Gap 5 Fix */
.alchemy-step__roman {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 500;
  letter-spacing: 0.05em;
}

.alchemy-step__content {
  flex: 1;
}

.alchemy-step__title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  margin-bottom: var(--space-sm);
  color: var(--color-gold-light);
}

.alchemy-step__title::after {
  content: '•';
  margin-left: var(--space-sm);
  color: var(--color-gold);
  opacity: 0.5;
}

.alchemy-step__description {
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--color-gold-light);
  opacity: 0.8;
  margin-bottom: var(--space-lg);
}

.alchemy-step__details {
  display: flex;
  gap: var(--space-xl);
}

.alchemy-step__detail {
  display: flex;
  flex-direction: column;
}

.alchemy-step__detail-label {
  font-size: var(--text-xs);
  color: var(--color-gold-light);
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-3xs);
}

.alchemy-step__detail-value {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-gold-light);
}

.alchemy-step__symbol {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-2xl);
  color: var(--color-gold);
  opacity: 0.5;
}

/* Alchemy Apparatus */
.alchemy__apparatus {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
  text-align: center;
}

.apparatus__item {
  padding: var(--space-xl);
  background: rgba(201, 167, 105, 0.05);
  border: 1px solid rgba(201, 167, 105, 0.1);
  border-radius: var(--radius-xl);
  transition: all var(--transition-base);
}

.apparatus__item:hover {
  background: rgba(201, 167, 105, 0.1);
  border-color: var(--color-gold);
  transform: translateY(-4px);
}

.apparatus__illustration {
  width: 100px;
  height: 120px;
  margin: 0 auto var(--space-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-md);
}

/* SVG styling within apparatus illustrations */
.apparatus__illustration svg {
  width: 100%;
  height: 100%;
  color: var(--color-gold);
  opacity: 0.7;
  transition: all var(--transition-base);
}

.apparatus__item:hover .apparatus__illustration svg {
  opacity: 1;
  transform: scale(1.05);
}

.apparatus__caption {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-gold-light);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* ============================================
   MANUSCRIPT SECTION
   ============================================ */
.manuscript {
  padding: var(--space-5xl) var(--container-padding);
  background: var(--color-parchment);
  position: relative;
  overflow: hidden;
}

/* Aged Paper Background */
.manuscript__paper {
  position: absolute;
  top: var(--space-3xl);
  right: var(--space-3xl);
  bottom: var(--space-3xl);
  left: var(--space-3xl);
  background: var(--color-parchment-dark);
  border-radius: var(--radius-xl);
  opacity: 0.3;
  pointer-events: none;
  z-index: var(--z-base);
}

.manuscript__stain {
  position: absolute;
  background: rgba(201, 167, 105, 0.1);
  border-radius: 50%;
  filter: blur(20px);
}

.manuscript__stain--1 {
  top: 20%;
  left: 10%;
  width: 200px;
  height: 200px;
}

.manuscript__stain--2 {
  bottom: 20%;
  right: 10%;
  width: 150px;
  height: 150px;
}

.manuscript__watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle,
      rgba(201, 167, 105, 0.05) 0%,
      transparent 70%);
  border-radius: 50%;
}

.manuscript__container {
  max-width: var(--container-max);
  margin: 0 auto;
  position: relative;
  z-index: var(--z-elevated);
}

/* Manuscript Header */
.manuscript__header {
  text-align: center;
  margin-bottom: var(--space-4xl);
}

.manuscript__rule {
  width: 100px;
  height: 1px;
  background: linear-gradient(90deg,
      transparent,
      var(--color-gold),
      transparent);
  margin: var(--space-xl) auto;
}

/* Manuscript Entries */
.manuscript__entries {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-2xl);
  margin-bottom: var(--space-3xl);
}

@media (min-width: 768px) {
  .manuscript__entries {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .manuscript__entries {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Manuscript Entry */
.manuscript-entry {
  background: var(--color-parchment);
  border: 1px solid var(--color-parchment-dark);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  transition: all var(--transition-base);
  position: relative;
}

.manuscript-entry:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-gold);
}

.manuscript-entry--illuminated {
  grid-column: 1 / -1;
}

@media (min-width: 768px) {
  .manuscript-entry--illuminated {
    grid-column: span 2;
  }
}

@media (min-width: 1024px) {
  .manuscript-entry--illuminated {
    grid-column: span 1;
  }
}

/* Manuscript Entry Border */
.manuscript-entry__border {
  position: absolute;
  top: 16px;
  right: 16px;
  bottom: 16px;
  left: 16px;
  pointer-events: none;
}

.manuscript-entry__corner {
  position: absolute;
  width: 20px;
  height: 20px;
}

.manuscript-entry__corner--tl {
  top: 0;
  left: 0;
  border-top: 1px solid var(--color-gold);
  border-left: 1px solid var(--color-gold);
  opacity: 0.3;
}

.manuscript-entry__corner--tr {
  top: 0;
  right: 0;
  border-top: 1px solid var(--color-gold);
  border-right: 1px solid var(--color-gold);
  opacity: 0.3;
}

.manuscript-entry__corner--bl {
  bottom: 0;
  left: 0;
  border-bottom: 1px solid var(--color-gold);
  border-left: 1px solid var(--color-gold);
  opacity: 0.3;
}

.manuscript-entry__corner--br {
  bottom: 0;
  right: 0;
  border-bottom: 1px solid var(--color-gold);
  border-right: 1px solid var(--color-gold);
  opacity: 0.3;
}

/* Manuscript Entry Content */
.manuscript-entry__content {
  position: relative;
  z-index: 1;
}

/* Illuminated Initial */
.manuscript-entry__initial {
  position: absolute;
  top: -20px;
  left: -20px;
  font-family: var(--font-accent);
  font-size: 6rem;
  color: var(--color-gold);
  opacity: 0.1;
  z-index: -1;
}

/* Quote */
.manuscript-entry__quote {
  margin-bottom: var(--space-xl);
}

.manuscript-entry__quote p {
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--color-ink-light);
  font-style: italic;
  position: relative;
  padding-left: var(--space-lg);
}

.manuscript-entry__quote p::before {
  content: '"';
  position: absolute;
  top: -10px;
  left: 0;
  font-family: var(--font-accent);
  font-size: var(--text-3xl);
  color: var(--color-gold);
  opacity: 0.3;
}

/* Attribution */
.manuscript-entry__attribution {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: var(--space-md);
}

.manuscript-entry__author {
  display: flex;
  flex-direction: column;
}

.manuscript-entry__name {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-ink);
  font-style: normal;
  margin-bottom: var(--space-3xs);
}

.manuscript-entry__title {
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
}

.manuscript-entry__seal {
  padding: var(--space-xs) var(--space-sm);
  background: rgba(201, 167, 105, 0.1);
  border-radius: var(--radius-full);
}

.manuscript-entry__seal-text {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-gold);
}

/* Folio */
.manuscript-entry__folio {
  margin-top: var(--space-xl);
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-parchment-dark);
}

.manuscript-entry__folio-number {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-ink-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* Manuscript Navigation */
.manuscript__navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xl);
}

.manuscript__nav-button {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-parchment);
  border: 1px solid var(--color-parchment-dark);
  border-radius: var(--radius-md);
  color: var(--color-ink);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.manuscript__nav-button:hover {
  background: rgba(201, 167, 105, 0.1);
  border-color: var(--color-gold);
  color: var(--color-gold);
  transform: translateY(-2px);
}

.manuscript__nav-button svg {
  width: 20px;
  height: 20px;
}

.manuscript__pagination {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-ink);
}

.manuscript__page-current {
  font-weight: 600;
}

.manuscript__page-separator {
  opacity: 0.5;
}

.manuscript__page-total {
  color: var(--color-gold);
  font-weight: 600;
}

/* ============================================
   CORRESPONDENCE SECTION
   ============================================ */
.correspondence {
  padding: var(--space-5xl) var(--container-padding);
  background: var(--color-ink);
  color: var(--color-parchment);
  position: relative;
  overflow: hidden;
}

/* Wax Seal Background */
.correspondence__seal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  opacity: 0.05;
  pointer-events: none;
  z-index: var(--z-base);
}

.correspondence__seal-ring {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid var(--color-gold);
  border-radius: 50%;
}

.correspondence__seal-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: var(--color-gold);
  border-radius: 50%;
}

.correspondence__container {
  max-width: var(--container-max);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4xl);
  align-items: center;
  position: relative;
  z-index: var(--z-elevated);
}

@media (min-width: 1024px) {
  .correspondence__container {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-5xl);
  }
}

/* Correspondence Content */
.correspondence__content {
  text-align: center;
}

@media (min-width: 1024px) {
  .correspondence__content {
    text-align: left;
  }
}

.correspondence__title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  line-height: 1.1;
  margin-bottom: var(--space-md);
}

.correspondence__title-line {
  display: block;
}

.correspondence__title-line--emph {
  color: var(--color-gold);
  font-weight: 400;
}

.correspondence__rule {
  width: 100px;
  height: 1px;
  background: linear-gradient(90deg,
      var(--color-gold),
      transparent);
  margin: var(--space-xl) 0;
}

@media (min-width: 1024px) {
  .correspondence__rule {
    margin-left: 0;
  }
}

.correspondence__description {
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--color-gold-light);
  margin-bottom: var(--space-2xl);
  max-width: 500px;
}

@media (min-width: 1024px) {
  .correspondence__description {
    margin-left: 0;
  }
}

/* Correspondence Form */
.correspondence__form {
  max-width: 500px;
}

@media (min-width: 1024px) {
  .correspondence__form {
    margin-left: 0;
  }
}

.correspondence__field {
  position: relative;
  margin-bottom: var(--space-lg);
}

.correspondence__input {
  width: 100%;
  padding: var(--space-md) var(--space-lg);
  background: rgba(250, 248, 245, 0.1);
  border: 1px solid rgba(201, 167, 105, 0.3);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-parchment);
  transition: all var(--transition-fast);
}

.correspondence__input:focus {
  outline: none;
  background: rgba(250, 248, 245, 0.15);
  border-color: var(--color-gold);
  box-shadow: 0 0 0 2px rgba(201, 167, 105, 0.2);
}

.correspondence__input::placeholder {
  color: rgba(201, 167, 105, 0.6);
}

.correspondence__field-ornament {
  position: absolute;
  top: 50%;
  right: var(--space-lg);
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background: var(--color-gold);
  border-radius: 50%;
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.correspondence__input:focus+.correspondence__field-ornament {
  opacity: 1;
}

.correspondence__consent {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  margin-bottom: var(--space-2xl);
}

.correspondence__checkbox {
  margin-top: 4px;
  accent-color: var(--color-gold);
}

.correspondence__consent-label {
  font-size: var(--text-sm);
  line-height: 1.5;
  color: var(--color-gold-light);
  cursor: pointer;
}

.correspondence__submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  width: 100%;
  padding: var(--space-md) var(--space-xl);
  background: var(--color-gold);
  color: var(--color-ink);
  border: none;
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-base);
}

.correspondence__submit:hover {
  background: var(--color-gold-light);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(201, 167, 105, 0.3);
}

.correspondence__submit-text {
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.correspondence__submit-icon {
  width: 20px;
  height: 20px;
}

/* Correspondence Visual */
.correspondence__visual {
  display: none;
}

@media (min-width: 1024px) {
  .correspondence__visual {
    display: block;
    position: relative;
    height: 400px;
  }
}

/* Envelope */
.correspondence__envelope {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
}

.envelope__flap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: var(--color-parchment);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  border: 1px solid rgba(201, 167, 105, 0.3);
  border-bottom: none;
}

.envelope__body {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-parchment);
  border: 1px solid rgba(201, 167, 105, 0.3);
  border-top: none;
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
}

.envelope__wax-seal {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  z-index: 2;
}

.wax-seal__ring {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-rose);
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(184, 125, 125, 0.3);
}

.wax-seal__initial {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-accent);
  font-size: var(--text-2xl);
  color: var(--color-parchment);
}

/* Quill */
.correspondence__quill {
  position: absolute;
  bottom: 20px;
  right: 40px;
  width: 40px;
  height: 120px;
  animation: writeQuill 4s ease-in-out infinite;
}

@keyframes writeQuill {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(-10deg);
  }
}

.quill__feather {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 40px;
  background: linear-gradient(45deg,
      var(--color-gold) 0%,
      var(--color-gold-light) 50%,
      var(--color-gold) 100%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  border-radius: 50% 50% 0 0;
}

.quill__shaft {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 60px;
  background: var(--color-sage);
  border-radius: var(--radius-full);
}

.quill__nib {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 20px;
  background: var(--color-ink);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

/* ============================================
   COLOPHON (FOOTER)
   ============================================ */
.colophon {
  background: var(--color-ink);
  color: var(--color-parchment);
  padding: var(--space-4xl) var(--container-padding) 0;
  position: relative;
}

.colophon__container {
  max-width: var(--container-max);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3xl);
  margin-bottom: var(--space-3xl);
}

@media (min-width: 768px) {
  .colophon__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .colophon__container {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Atelier Information */
.colophon__atelier {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.colophon__seal {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
  color: inherit;
}

.colophon__seal-graphic {
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-gold);
  border-radius: 50%;
  position: relative;
}

.colophon__seal-graphic::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border: 1px dashed var(--color-gold);
  border-radius: 50%;
  opacity: 0.5;
}

.colophon__atelier-name {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 600;
}

.colophon__address {
  font-style: normal;
  line-height: 1.6;
  color: var(--color-gold-light);
}

.colophon__address p {
  margin-bottom: var(--space-xs);
}

.colophon__hours {
  line-height: 1.6;
  color: var(--color-ink-muted);
  font-size: var(--text-sm);
}

.colophon__hours p {
  margin-bottom: var(--space-xs);
}

/* Navigation */
.colophon__navigation,
.colophon__correspondence,
.colophon__details {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.colophon__heading {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-gold-light);
  margin-bottom: var(--space-sm);
}

.colophon__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.colophon__link {
  color: var(--color-gold-light);
  text-decoration: none;
  transition: color var(--transition-fast);
  font-size: var(--text-sm);
}

.colophon__link:hover {
  color: var(--color-gold);
}

.colophon__list li {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.colophon__icon {
  flex-shrink: 0;
  color: var(--color-gold);
}

/* Social */
.colophon__social {
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-lg);
}

.colophon__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(201, 167, 105, 0.1);
  border-radius: var(--radius-md);
  color: var(--color-gold-light);
  transition: all var(--transition-fast);
}

.colophon__social-link:hover {
  background: var(--color-gold);
  color: var(--color-ink);
  transform: translateY(-2px);
}

.colophon__social-icon {
  width: 20px;
  height: 20px;
}

/* Colophon Details */
.colophon__text {
  font-size: var(--text-sm);
  line-height: 1.6;
  color: var(--color-ink-muted);
}

.colophon__text p {
  margin-bottom: var(--space-sm);
}

/* Colophon Bottom */
.colophon__bottom {
  background: rgba(0, 0, 0, 0.2);
  padding: var(--space-xl) var(--container-padding);
}

.colophon__bottom-container {
  max-width: var(--container-max);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  align-items: center;
  text-align: center;
}

@media (min-width: 768px) {
  .colophon__bottom-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
}

.colophon__copyright {
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
}

.colophon__legal {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-lg);
  justify-content: center;
}

@media (min-width: 768px) {
  .colophon__legal {
    justify-content: flex-end;
  }
}

.colophon__legal-link {
  font-size: var(--text-sm);
  color: var(--color-gold-light);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.colophon__legal-link:hover {
  color: var(--color-gold);
}

/* ============================================
   BACK TO TOP
   ============================================ */
.back-to-top {
  position: fixed;
  bottom: var(--space-xl);
  right: var(--space-xl);
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-ink);
  color: var(--color-parchment);
  border: 1px solid var(--color-parchment-dark);
  border-radius: var(--radius-md);
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all var(--transition-base);
  z-index: var(--z-overlay);
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  background: var(--color-ink-light);
  border-color: var(--color-gold);
  transform: translateY(-4px);
}

.back-to-top__icon {
  width: 24px;
  height: 24px;
}

/* ============================================
   VIAL DRAWER (CART)
   ============================================ */
.vial-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 400px;
  background: var(--color-parchment);
  box-shadow: var(--shadow-xl);
  transform: translateX(100%);
  transition: transform var(--transition-base) cubic-bezier(0.4, 0, 0.2, 1);
  z-index: var(--z-modal);
  display: flex;
  flex-direction: column;
}

@media (min-width: 640px) {
  .vial-drawer {
    width: 400px;
  }
}

.vial-drawer.active {
  transform: translateX(0);
}

.vial-drawer__container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.vial-drawer__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-xl);
  border-bottom: 1px solid var(--color-parchment-dark);
}

.vial-drawer__title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--color-ink);
}

.vial-drawer__close {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: var(--color-ink);
  cursor: pointer;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.vial-drawer__close:hover {
  background: rgba(201, 167, 105, 0.1);
}

.vial-drawer__content {
  flex: 1;
  overflow-y: auto;
  padding: var(--space-xl);
}

.vial-drawer__footer {
  padding: var(--space-xl);
  border-top: 1px solid var(--color-parchment-dark);
}

.vial-drawer__total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-lg);
}

.vial-drawer__total-label {
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
}

.vial-drawer__total-value {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--color-ink);
}

/* ============================================
   TOAST NOTIFICATION
   ============================================ */
.toast {
  position: fixed;
  bottom: var(--space-xl);
  left: 50%;
  transform: translateX(-50%) translateY(100px);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-lg);
  background: var(--color-ink);
  color: var(--color-parchment);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-base);
  z-index: var(--z-toast);
  max-width: calc(100% - var(--space-xl) * 2);
}

.toast.active {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.toast__content {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.toast__seal {
  position: relative;
  width: 20px;
  height: 20px;
}

.toast__seal-ring {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid var(--color-gold);
  border-radius: 50%;
}

.toast__message {
  font-size: var(--text-sm);
  font-weight: 500;
}

/* ============================================
   UTILITY CLASSES & ANIMATIONS
   ============================================ */
@keyframes pulse {

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .hero__title {
    font-size: var(--text-4xl);
  }

  .section-title {
    font-size: var(--text-2xl);
  }

  .alchemy-step {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .alchemy-step__symbol {
    display: none;
  }

  .alchemy__apparatus {
    grid-template-columns: 1fr;
  }
}

/* Print Styles */
@media print {

  .header,
  .atelier-banner,
  .hero__scroll-indicator,
  .back-to-top,
  .correspondence,
  .colophon__social,
  .vial-drawer,
  .toast,
  .texture-overlay,
  .gold-leaf {
    display: none !important;
  }

  body {
    color: #000;
    background: #fff;
  }

  .essence-card {
    break-inside: avoid;
    border: 1px solid #ddd;
  }

  .hero {
    min-height: auto;
    padding: var(--space-2xl) 0;
  }
}

/* ============================================
   ATELIER ARÔME - ACCESSIBILITY & PERFORMANCE PATCH
   Version: 1.1.0
   
   This patch addresses:
   - WCAG AAA reduced motion support
   - Color contrast failures (AA compliance)
   - Enhanced focus states
   - Mobile accessibility improvements
   - Performance optimizations
   ============================================ */

/* ============================================
   SECTION 1: COLOR CONTRAST FIXES
   Overrides for WCAG AA compliance
   ============================================ */

:root {
  /* PATCHED: Darkened muted colors for AA contrast compliance */
  --color-ink-muted-accessible: #545752;

  /* PATCHED: Accessible gold for text on light backgrounds */
  --color-gold-text: #8B7355;

  /* PATCHED: Accessible gold-dark for labels */
  --color-gold-dark-accessible: #7A6340;

  /* NEW: High contrast mode support */
  --color-focus-ring: #C9A769;
  --color-focus-ring-offset: #2A2D26;
}

/* Apply accessible colors to text elements */
.hero__subtitle-text,
.hero__excerpt-text,
.essence-card__description,
.essence-card__note-label,
.section-description,
.alchemy-step__description,
.manuscript-entry__quote p,
.colophon__hours,
.colophon__text,
.compendium__counter,
.correspondence__consent-label {
  color: var(--color-ink-muted-accessible);
}

/* Accessible gold text on light backgrounds */
.section-label,
.essence-card__latin-name,
.hero__excerpt-citation,
.compendium__filter-label {
  color: var(--color-gold-dark-accessible);
}

/* Ensure sufficient contrast for humour labels */
.essence-card__humour-label,
.essence-card__measure,
.manuscript-entry__title,
.alchemy-step__detail-label {
  color: var(--color-ink-muted-accessible);
}

/* ============================================
   SECTION 2: REDUCED MOTION SUPPORT
   WCAG 2.1 Success Criterion 2.3.3 (AAA)
   ============================================ */

@media (prefers-reduced-motion: reduce) {

  /* Global animation disable */
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Remove specific problematic animations */
  .header__seal-svg,
  .hero__symbol-svg {
    animation: none;
  }

  .hero__vessel-liquid {
    animation: none;
    top: 55%;
  }

  .hero__botanical {
    animation: none;
    transform: none;
  }

  .scroll-indicator__quill,
  .correspondence__quill {
    animation: none;
  }

  .mobile-nav__seal {
    animation: none;
  }

  /* Disable parallax effects */
  .gold-leaf {
    transform: none !important;
  }

  .hero__vessel-container {
    transform: none !important;
  }

  /* Simplify hover transitions */
  .btn::before {
    display: none;
  }

  .essence-card:hover,
  .manuscript-entry:hover,
  .alchemy-step:hover {
    transform: none;
  }

  /* Maintain visual feedback without motion */
  .essence-card:hover {
    border-color: var(--color-gold);
    box-shadow: var(--shadow-lg);
  }

  .btn--primary:hover,
  .btn--secondary:hover,
  .btn--outline:hover {
    transform: none;
  }

  /* Static scroll indicator */
  .hero__scroll-indicator {
    opacity: 0.7;
  }

  /* Disable liquid wave effect */
  .vessel__meniscus {
    opacity: 0.4;
  }
}

/* Provide alternative for users who CAN handle motion */
@media (prefers-reduced-motion: no-preference) {
  .hero__botanical {
    will-change: transform;
  }

  .hero__vessel-liquid {
    will-change: transform, top;
  }
}

/* ============================================
   SECTION 3: ENHANCED FOCUS STATES
   Improved visibility and consistency
   ============================================ */

:focus-visible {
  outline: 3px solid var(--color-focus-ring);
  outline-offset: 4px;
  border-radius: var(--radius-sm);
}

.btn:focus-visible,
.essence-card__action:focus-visible,
.correspondence__submit:focus-visible {
  outline: 3px solid var(--color-gold);
  outline-offset: 4px;
  box-shadow: 0 0 0 6px rgba(201, 167, 105, 0.25);
}

.correspondence__input:focus-visible {
  outline: none;
  border-color: var(--color-gold);
  box-shadow:
    0 0 0 3px rgba(201, 167, 105, 0.3),
    inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

.compendium__filter:focus-visible {
  outline: 3px solid var(--color-gold);
  outline-offset: 2px;
}

.header__nav-link:focus-visible,
.mobile-nav__link:focus-visible,
.colophon__link:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
  border-radius: var(--radius-sm);
}

.header__tool:focus-visible,
.header__menu-toggle:focus-visible,
.manuscript__nav-button:focus-visible,
.back-to-top:focus-visible,
.vial-drawer__close:focus-visible {
  outline: 3px solid var(--color-gold);
  outline-offset: 2px;
}

.alchemy .btn:focus-visible,
.correspondence .correspondence__submit:focus-visible,
.colophon .colophon__social-link:focus-visible {
  outline-color: var(--color-gold-light);
  box-shadow: 0 0 0 6px rgba(232, 216, 182, 0.3);
}

.skip-link:focus {
  top: var(--space-md);
  outline: 3px solid var(--color-gold);
  outline-offset: 2px;
}

/* ============================================
   SECTION 4: FORM VALIDATION STYLES
   Visual states for error handling
   ============================================ */

.correspondence__field--error .correspondence__input {
  border-color: var(--color-rose);
  background: rgba(184, 125, 125, 0.1);
}

.correspondence__field--error .correspondence__input:focus {
  border-color: var(--color-rose);
  box-shadow: 0 0 0 3px rgba(184, 125, 125, 0.3);
}

.correspondence__field-error {
  display: block;
  margin-top: var(--space-xs);
  font-size: var(--text-sm);
  color: #E8A0A0;
  font-weight: 500;
}

.correspondence__field--success .correspondence__input {
  border-color: var(--color-eucalyptus);
  background: rgba(124, 185, 160, 0.1);
}

.correspondence__field--success .correspondence__field-ornament {
  opacity: 1;
  background: var(--color-eucalyptus);
}

.correspondence__consent--error .correspondence__consent-label {
  color: #E8A0A0;
}

/* ============================================
   SECTION 5: CART/VIAL DRAWER ENHANCEMENTS
   Improved accessibility and UX
   ============================================ */

.cart-item {
  padding: var(--space-lg);
  border-bottom: 1px solid var(--color-parchment-dark);
  transition: background-color var(--transition-fast);
}

.cart-item:last-child {
  border-bottom: none;
}

.cart-item:hover {
  background: rgba(201, 167, 105, 0.05);
}

.cart-item__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.cart-item__info {
  flex: 1;
}

.cart-item__name {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-ink);
  margin-bottom: var(--space-xs);
}

.cart-item__meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  align-items: center;
}

.cart-item__latin {
  font-size: var(--text-xs);
  font-style: italic;
  color: var(--color-ink-muted-accessible);
}

.cart-item__humour {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2xs);
  font-size: var(--text-xs);
  color: var(--color-gold-dark-accessible);
  padding: var(--space-2xs) var(--space-xs);
  background: rgba(201, 167, 105, 0.1);
  border-radius: var(--radius-sm);
}

.cart-item__remove {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--color-parchment-dark);
  border-radius: var(--radius-sm);
  color: var(--color-ink-muted-accessible);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.cart-item__remove:hover {
  background: rgba(184, 125, 125, 0.1);
  border-color: var(--color-rose);
  color: var(--color-rose);
}

.cart-item__remove:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}

.cart-item__details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-md);
}

.cart-item__quantity {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.cart-item__quantity-btn {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-parchment-dark);
  border: 1px solid var(--color-parchment-darker);
  border-radius: var(--radius-sm);
  color: var(--color-ink);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.cart-item__quantity-btn:hover {
  background: rgba(201, 167, 105, 0.2);
  border-color: var(--color-gold);
}

.cart-item__quantity-btn:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 1px;
}

.cart-item__quantity-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.cart-item__quantity-value {
  min-width: 24px;
  text-align: center;
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-ink);
}

.cart-item__quantity-label {
  font-size: var(--text-xs);
  color: var(--color-ink-muted-accessible);
  margin-left: var(--space-xs);
}

.cart-item__price {
  text-align: right;
}

.cart-item__price-value {
  display: block;
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-ink);
}

.cart-item__price-unit {
  font-size: var(--text-xs);
  color: var(--color-ink-muted-accessible);
}

.vial-drawer__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-4xl) var(--space-xl);
  text-align: center;
}

.vial-drawer__empty-icon {
  font-size: 4rem;
  color: var(--color-gold);
  opacity: 0.3;
  margin-bottom: var(--space-lg);
}

.vial-drawer__empty-text {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-style: italic;
  color: var(--color-ink-muted-accessible);
}

.vial-drawer__dispatch:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

/* ============================================
   SECTION 6: MOBILE ACCESSIBILITY IMPROVEMENTS
   Touch targets, simplified UI
   ============================================ */

@media (max-width: 768px) {

  .header__tool,
  .header__menu-toggle,
  .manuscript__nav-button,
  .back-to-top,
  .compendium__filter,
  .essence-card__action,
  .cart-item__quantity-btn,
  .cart-item__remove {
    min-width: 44px;
    min-height: 44px;
  }

  .compendium__filter-buttons {
    gap: var(--space-md);
  }

  .hero__initial {
    display: none;
  }

  .hero__border {
    display: none;
  }

  .hero__watermark {
    opacity: 0.03;
  }

  .hero__botanicals {
    opacity: 0.5;
  }

  .essence-card__notes {
    grid-template-columns: 1fr;
  }

  .mobile-nav__link {
    padding: var(--space-xl) 0;
    min-height: 64px;
  }

  .correspondence__input {
    padding: var(--space-lg);
    font-size: var(--text-base);
  }

  .hero__actions {
    flex-direction: column;
    width: 100%;
  }

  .hero__actions .btn {
    width: 100%;
    justify-content: center;
  }

  .hero__scroll-indicator {
    display: none;
  }
}

@media (max-width: 480px) {
  .essence-card__footer {
    flex-direction: column;
    gap: var(--space-md);
  }

  .essence-card__action {
    width: 100%;
    justify-content: center;
  }

  .manuscript-entry__attribution {
    flex-direction: column;
    align-items: flex-start;
  }

  .cart-item__quantity-btn {
    width: 40px;
    height: 40px;
  }
}

/* ============================================
   SECTION 7: PERFORMANCE OPTIMIZATIONS
   Reduced paint/reflow costs
   ============================================ */

.texture-overlay {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGwSURBVGiB7Zq9TsMwFIW/2kgMiIWNjYWVlQdgYOANGHgDBjYWJgYGBgYGJh6gYmVgYGVhYGNhYqP8DEj8LLSVopbYvk7skEr+pCj2Ofd+dpzYDkIIBAJpHMT+G/gGsAc04tOOBD7wPDq1B/QCJkPIGbCVyhjYAXqBQWDUoX8bcB84CwwB7aljHAJ7gE3gKND7AzgBNgIHgR4ghBDqnEMc+2MhxLWU+mZgPISwK4TYC5wPIbYDw8BQCKEt5X5gF7ADOBxCmE9pfAvcAk4Bl0IIT0MIz4BLwNUQwnxKexO4FELY7rr2VvQN3AduJtS3hRBGA1uAkRDCNHAkhHAthLAK+ALcUNr1F/AvJccvAN+AFuB5yr5d4CXQCSxL6c8GVqV0HE1pM/A5pbEDeJtQ3wG8TulYC3RKaVyS0ng0pbEdeB8SjABvUnKsAb6m1P8GmJFSfzwxPjEA9Cb8vwP8TGlflFB/GNib0lgTQpgDzKfklQEzIcQoMBoS9AJdIYQh4BgwI6XxGLgcQugKIRwG5kIIS8A14EBCfTdQl1J3JLGuBfiW0lgNLEqoXwL0p+R1HQf+Af8A0TQr4V1ckF4AAAAASUVORK5CYII=");
  background-repeat: repeat;
  opacity: 0.08;
  will-change: opacity;
  transform: translateZ(0);
}

.hero__vessel-liquid,
.hero__botanical,
.gold-leaf {
  will-change: transform;
  transform: translateZ(0);
}

.essence-card {
  contain: layout style;
}

.alchemy-step {
  contain: layout style;
}

.header {
  will-change: transform;
  contain: layout style;
}

.back-to-top {
  will-change: opacity, transform;
}

/* ============================================
   SECTION 8: TOAST NOTIFICATION VARIANTS
   Type-specific styling
   ============================================ */

.toast--success {
  background: var(--color-ink);
  border-left: 4px solid var(--color-eucalyptus);
}

.toast--success .toast__seal-ring {
  border-color: var(--color-eucalyptus);
}

.toast--warning {
  background: var(--color-ink);
  border-left: 4px solid var(--color-bergamot);
}

.toast--warning .toast__seal-ring {
  border-color: var(--color-bergamot);
}

.toast--error {
  background: var(--color-ink);
  border-left: 4px solid var(--color-rose);
}

.toast--error .toast__seal-ring {
  border-color: var(--color-rose);
}

.toast--info {
  background: var(--color-ink);
  border-left: 4px solid var(--color-gold);
}

/* ============================================
   SECTION 9: HIGH CONTRAST MODE SUPPORT
   Windows High Contrast Mode compatibility
   ============================================ */

@media (forced-colors: active) {

  .btn,
  .essence-card__action,
  .correspondence__submit {
    border: 2px solid currentColor;
  }

  .essence-card {
    border: 2px solid currentColor;
  }

  :focus-visible {
    outline: 3px solid currentColor;
    outline-offset: 3px;
  }

  .correspondence__input {
    border: 2px solid currentColor;
  }

  .compendium__filter[aria-pressed="true"] {
    border: 3px solid currentColor;
  }
}

/* ============================================
   SECTION 10: PRINT ENHANCEMENTS
   Improved print stylesheet
   ============================================ */

@media print {

  body,
  .essence-card__description,
  .section-description,
  .hero__excerpt-text {
    color: #000 !important;
  }

  .section-title__line--emph,
  .essence-card__folio,
  .essence-card__humour-icon {
    color: #666 !important;
  }

  .essence-card {
    border: 1px solid #ccc !important;
    page-break-inside: avoid;
  }

  .essence-card__illumination {
    background: none !important;
  }

  .essence-card__notes {
    background: #f5f5f5 !important;
  }

  .colophon__link::after {
    content: " (" attr(href) ")";
    font-size: 0.8em;
    color: #666;
  }
}

/* ============================================
   END OF ACCESSIBILITY & PERFORMANCE PATCH
   ============================================ */
```

# atelier-arome-web/src/app/error.tsx
```tsx
'use client';

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-parchment">
      <main className="max-w-2xl mx-auto px-4 py-16 sm:px-6">
        <div className="text-center">
          <div className="mb-8">
            <svg
              className="w-24 h-24 mx-auto text-gold dark:text-zinc-800 dark:text-zinc-600"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M12 17.5a2 2.002 2.002 2.002s"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 9 5a2 2.002 6a.002 2.002s"
                strokeLinejoin="round"
              />
              <text
                x="15"
                y="15"
                text-anchor="middle"
                fontFamily="sans-serif"
                fill="none"
              >
                !
              </text>
            </svg>
          </div>
          <h1 className="font-display text-3xl font-semibold text-ink dark:text-zinc-900 mb-4">
            Something went wrong
          </h1>
          <p className="text-base text-muted-foreground text-center max-w-md text-zinc-600 mb-4">
            An unexpected error has occurred. We apologize for the inconvenience.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button
              className="px-6 py-2 border-2 border-solid border-ink rounded-md bg-parchment hover:bg-gold/50 transition-colors hover:text-ink dark:hover:text-zinc-800 dark:text-zinc-900"
              onClick={() => window.location.href = '/'}
            >
              Return Home
            </button>
            <button
              className="px-6 py-2 border-2 border-solid border-ink rounded-md bg-parchment hover:bg-gold/50 transition-colors hover:text-ink dark:hover:text-zinc-800 dark:text-zinc-900"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>
          <p className="text-sm text-muted-foreground text-center max-w-md text-zinc-600 mt-8">
            If the problem persists, please contact our support team or check the server logs.
          </p>
        </div>
      </main>
    </div>
  );
}

```

# atelier-arome-web/src/app/loading.tsx
```tsx
export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-parchment">
      <div className="animate-pulse flex-col items-center gap-4">
        <div className="w-16 h-16 border-2 border-gold/20 rounded bg-white/30 p-8">
          <svg
            className="animate-spin h-12 w-12 text-ink dark:text-zinc-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <circle
              className="opacity-75"
              cx="12"
              cy="12"
              r="10"
              fill="none"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

```

# atelier-arome-web/src/app/page.tsx
```tsx
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


```

# atelier-arome-web/src/app/(shop)/layout.tsx
```tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [, setIsCartOpen] = React.useState(false);

  return (
    <main className="min-h-screen bg-parchment">
      <header className="sticky top-0 z-50 border-b border-gold/30 pt-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="font-display text-3xl text-ink font-semibold">
                Atelier Arôme
              </h1>
            </Link>

            <div className="flex items-center gap-4">
              <nav className="hidden md:flex gap-6">
                <Link
                  href="/"
                  className="text-sm font-body text-ink-muted hover:text-gold-dark transition-colors"
                >
                  Compendium
                </Link>
                <Link
                  href="/collections"
                  className="text-sm font-body text-ink-muted hover:text-gold-dark transition-colors"
                >
                  Collections
                </Link>
                <Link
                  href="/search"
                  className="text-sm font-body text-ink-muted hover:text-gold-dark transition-colors"
                >
                  Search
                </Link>
              </nav>

              <button
                onClick={() => setIsCartOpen(true)}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l-4 4H2c-1.1 0-2-.9-2-2v4c0 1.1.9 2 2 2h4l4 4V6c0-1.1-.9-2-2-2zm14 0v-2a2 2 0 002 2v4c0 1.1.9 2 2 2h4l4 4V6c0-1.1-.9-2-2-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {children}
      </main>
    </main>
  );
}

```

# atelier-arome-web/src/app/(shop)/compendium/page.tsx
```tsx
'use client';

import { Suspense, useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { ProductGrid } from '@/components/catalog/product-grid';
import { FilterSidebar } from '@/components/catalog/filter-sidebar';
import { ProductFilters } from '@/types/api';

function CompendiumContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Parse filters from URL
  const filters: ProductFilters = {
    category: searchParams.get('category') || undefined,
    humour: searchParams.get('humour') || undefined,
    rarity: searchParams.get('rarity') || undefined,
    season: searchParams.get('season') || undefined,
    search: searchParams.get('search') || undefined,
    sort: searchParams.get('sort') || 'sort_order',
  };

  // Update URL when filters change
  const handleFilterChange = useCallback(
    (key: keyof ProductFilters, value: string | boolean | number | undefined) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value === undefined || value === null || value === '') {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }

      // Reset page when filtering
      if (key !== 'page') {
        params.delete('page');
      }

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      {/* Header */}
      <div className="mb-16 text-center">
        <span className="font-display text-sm tracking-widest text-gold-dark uppercase">The First Folio</span>
        <h1 className="mt-4 font-display text-5xl font-medium text-ink md:text-6xl">
          Botanical Compendium
        </h1>
        <div className="mx-auto mt-6 h-px w-24 bg-gold/50" />
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-light font-serif">
          A curated collection of artisanal essences, extracted with patience and
          precision from nature&apos;s most aromatic specimens.
        </p>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row">
        {/* Sidebar */}
        <FilterSidebar
          filters={filters}
          onFilterChange={handleFilterChange}
        />

        {/* Grid */}
        <main className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm text-ink-muted">
              {/* Counter could go here */}
            </span>
            <select
              value={filters.sort}
              onChange={(e) => handleFilterChange('sort', e.target.value)}
              className="rounded-sm border-none bg-transparent text-sm font-medium text-ink focus:ring-0 cursor-pointer hover:text-gold-dark transition-colors"
            >
              <option value="sort_order">Folio Order</option>
              <option value="name">Name (A-Z)</option>
              <option value="created_at">Newest First</option>
            </select>
          </div>

          <ProductGrid filters={filters} />
        </main>
      </div>
    </div>
  );
}

export default function CompendiumPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-parchment" />}>
      <CompendiumContent />
    </Suspense>
  );
}

```

# atelier-arome-web/src/app/(account)/layout.tsx
```tsx
import Link from 'next/link';

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen w-full bg-parchment">
      <header>
        <Link href="/">
          <h1 className="font-display text-3xl text-ink font-semibold mb-4">Account</h1>
        </Link>
      </header>

      <nav className="flex items-center gap-6">
        <Link href="/account/dashboard">
          Dashboard
        </Link>

        <Link href="/account/orders">
          Orders
        </Link>

        <Link href="/account/addresses">
          Addresses
        </Link>

        <Link href="/account/wishlist">
          Wishlist
        </Link>

        <Link href="/account/settings">
          Settings
        </Link>
      </nav>

      <div className="border-t border-gold/30 p-6 rounded-lg bg-white dark:text-zinc-200">
        <main className="max-w-7xl mx-auto px-4 py-16">
          {children}
        </main>
      </div>
    </main>
  );
}

```

# atelier-arome-web/src/app/(marketing)/layout.tsx
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Marketing — Atelier Arôme',
  description: 'Explore our atelier and alchemical preparations.',
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="min-h-screen w-full">
        <header>
          <Link href="/">
            <h1 className="font-display text-3xl text-ink">Atelier Arôme</h1>
          </Link>
        </header>

        <main className="max-w-container mx-auto px-4 py-16">
          {children}
        </main>

        <footer className="mt-20 border-t border-gold/30 pt-10 pb-10">
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} Atelier Arôme. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}

```

# atelier-arome-web/src/app/(marketing)/about/page.tsx
```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Atelier Arôme',
};

export default function AboutPage() {
  return (
    <div>
      <h1>Our Atelier</h1>
      <p>Test content</p>
    </div>
  );
}

```

# atelier-arome-web/src/app/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-display: var(--font-cormorant);
  --font-body: var(--font-crimson);
  --font-accent: var(--font-great-vibes);
  --color-ink: #2A2D26;
  --color-gold: #C9A769;
  --color-parchment: #FAF8F5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  color: var(--color-ink);
  background-color: var(--color-parchment);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 300;
  line-height: 1.1;
  color: var(--color-ink);
  margin-top: 2rem;
  margin-bottom: 1rem;
}

a {
  color: var(--color-gold);
  text-decoration: none;
  transition: text-decoration 0.3s ease;
}

a:hover {
  text-decoration: underline;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

*:focus-visible {
  outline: 3px solid var(--color-gold);
  outline-offset: 4px;
}

html {
  scroll-behavior: smooth;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-family: var(--font-display);
  font-weight: 500;
  border-radius: 0.125rem;
  transition: all 0.3s ease;
  text-decoration: none;
  border: none;
  cursor: pointer;
}

.btn--primary {
  background-color: var(--color-ink);
  color: var(--color-parchment);
}

.btn--primary:hover {
  background-color: var(--color-gold);
}

.btn--secondary {
  border: 2px solid var(--color-ink);
  color: var(--color-ink);
  background-color: transparent;
}

.btn--secondary:hover {
  background-color: var(--color-ink);
  color: var(--color-parchment);
}

.btn--outline {
  border: 2px solid var(--color-ink);
  color: var(--color-ink);
  background-color: transparent;
}

.btn--outline:hover {
  background-color: var(--color-ink);
  color: var(--color-parchment);
}

```

# atelier-arome-web/src/components/layout/header.tsx
```tsx
'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useCartStore } from '@/stores/cart-store'
import { useScroll, smoothScrollTo } from '@/hooks/use-scroll'

export function Header() {
  const cartItems = useCartStore((state) => state.items)
  const toggleCartDrawer = useCartStore((state) => state.toggleCartDrawer)
  const { isScrolled } = useScroll({ threshold: 20 })

  // Handle nav link clicks for smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    smoothScrollTo(href, 100)
    // Update URL without reload
    window.history.pushState({}, '', href)
  }

  // Handle cart button click
  const handleCartClick = () => {
    toggleCartDrawer()
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="header__container">
        {/* Atelier Seal */}
        <a href="#hero" className="header__seal" aria-label="Atelier Arôme - Home">
          <div className="header__seal-inner">
            <svg className="header__seal-svg" viewBox="0 0 100 100" aria-hidden="true">
              {/* Outer dashed circle */}
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
              {/* Ornate alchemical path */}
              <path d="M50 20 Q70 30 80 50 Q70 70 50 80 Q30 70 20 50 Q30 30 50 20 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {/* Inner circle */}
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
              {/* Cross pattern */}
              <path d="M50 35 L50 65 M35 50 L65 50" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="header__seal-text">
              <span className="header__seal-name">Atelier</span>
              <span className="header__seal-name">Arôme</span>
            </div>
          </div>
          <span className="header__seal-tagline">Est. 2024</span>
        </a>

        {/* Navigation - Atelier Sections */}
        <nav className="header__nav" aria-label="Atelier navigation">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#compounds" className="header__nav-link" onClick={(e) => handleNavClick(e, '#compounds')}>
                <span className="header__nav-number">— I —</span>
                <span className="header__nav-label">Compendium</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#process" className="header__nav-link" onClick={(e) => handleNavClick(e, '#process')}>
                <span className="header__nav-number">— II —</span>
                <span className="header__nav-label">Alchemy</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#testimonials" className="header__nav-link" onClick={(e) => handleNavClick(e, '#testimonials')}>
                <span className="header__nav-number">— III —</span>
                <span className="header__nav-label">The Atelier</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#manuscript" className="header__nav-link" onClick={(e) => handleNavClick(e, '#manuscript')}>
                <span className="header__nav-number">— IV —</span>
                <span className="header__nav-label">Manuscript</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Atelier Tools */}
        <div className="header__tools">
          <button className="header__tool" aria-label="Search the compendium" data-tooltip="Magnifying Glass">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>

          <button
            className="header__tool"
            aria-label="View collection vial"
            data-tooltip="Collection Vial"
            data-count={cartItems.length > 0 ? cartItems.length : undefined}
            onClick={handleCartClick}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>

          <Sheet>
            <SheetTrigger asChild>
              <button className="header__menu-toggle" id="menuToggle" aria-label="Open atelier menu" aria-expanded="false" data-tooltip="Menu">
                <span className="header__menu-quill"></span>
              </button>
            </SheetTrigger>
            <SheetContent className="mobile-nav" side="right">
              <div className="mobile-nav__container">
                <div className="mobile-nav__header">
                  <div className="mobile-nav__seal" aria-hidden="true"></div>
                  <span className="mobile-nav__title">Atelier Folio</span>
                </div>

                <ul className="mobile-nav__list">
                  <li className="mobile-nav__item">
                    <a href="#compounds" className="mobile-nav__link">
                      <span className="mobile-nav__ornament">❖</span>
                      <span className="mobile-nav__label">Compendium</span>
                      <span className="mobile-nav__page">Folio I</span>
                    </a>
                  </li>
                  <li className="mobile-nav__item">
                    <a href="#process" className="mobile-nav__link">
                      <span className="mobile-nav__ornament">❖</span>
                      <span className="mobile-nav__label">Alchemy</span>
                      <span className="mobile-nav__page">Folio II</span>
                    </a>
                  </li>
                  <li className="mobile-nav__item">
                    <a href="#testimonials" className="mobile-nav__link">
                      <span className="mobile-nav__ornament">❖</span>
                      <span className="mobile-nav__label">The Atelier</span>
                      <span className="mobile-nav__page">Folio III</span>
                    </a>
                  </li>
                  <li className="mobile-nav__item">
                    <a href="#manuscript" className="mobile-nav__link">
                      <span className="mobile-nav__ornament">❖</span>
                      <span className="mobile-nav__label">Manuscript</span>
                      <span className="mobile-nav__page">Folio IV</span>
                    </a>
                  </li>
                </ul>

                <div className="mobile-nav__colophon">
                  <span className="mobile-nav__colophon-text">Atelier Arôme</span>
                  <span className="mobile-nav__colophon-year">Anno MMXXIV</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

```

# atelier-arome-web/src/components/layout/footer.tsx
```tsx
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="colophon">
      <div className="colophon__container">
        {/* Atelier Information */}
        <div className="colophon__atelier">
          <a href="#hero" className="colophon__seal">
            <div className="colophon__seal-graphic"></div>
            <span className="colophon__atelier-name">Atelier Arôme</span>
          </a>
          <address className="colophon__address">
            <p>Rue des Alchimistes, 7</p>
            <p>Provence-Alpes-Côte d&apos;Azur</p>
            <p>France</p>
          </address>
          <div className="colophon__hours">
            <p>The Atelier is open by appointment only</p>
            <p>Correspondence welcome at all hours</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="colophon__navigation">
          <h3 className="colophon__heading">The Folios</h3>
          <ul className="colophon__list">
            <li><Link href="#compounds" className="colophon__link">Compendium</Link></li>
            <li><Link href="#process" className="colophon__link">Alchemy</Link></li>
            <li><Link href="#testimonials" className="colophon__link">The Atelier</Link></li>
            <li><Link href="#manuscript" className="colophon__link">Manuscript</Link></li>
          </ul>
        </div>

        {/* Correspondence */}
        <div className="colophon__correspondence">
          <h3 className="colophon__heading">Correspondence</h3>
          <ul className="colophon__list">
            <li>
              <svg className="colophon__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:correspondence@atelierarome.com">correspondence@atelierarome.com</a>
            </li>
            <li>
              <svg className="colophon__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Provence, France</span>
            </li>
          </ul>

          {/* Social Correspondence */}
          <div className="colophon__social">
            <a href="#" className="colophon__social-link" aria-label="Instagram correspondence">
              <svg className="colophon__social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="1" fill="currentColor" />
              </svg>
            </a>
            <a href="#" className="colophon__social-link" aria-label="Pinterest inspiration">
              <svg className="colophon__social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12c0-2.5 1.5-5 4-5s4 2.5 4 5-1.5 5-4 7l-1-4" />
              </svg>
            </a>
            <a href="#" className="colophon__social-link" aria-label="Newsletter subscription">
              <svg className="colophon__social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Colophon Proper */}
        <div className="colophon__details">
          <h3 className="colophon__heading">Colophon</h3>
          <div className="colophon__text">
            <p>This digital folio was typeset in Cormorant Garamond and Crimson Pro.</p>
            <p>Illustrations are original to the atelier.</p>
            <p>The alchemical processes described herein are both literal and metaphorical.</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="colophon__bottom">
        <div className="colophon__bottom-container">
          <p className="colophon__copyright">
            © Anno MMXXIV Atelier Arôme. All rights preserved.
          </p>
          <div className="colophon__legal">
            <Link href="#" className="colophon__legal-link">Manuscript Rights</Link>
            <Link href="#" className="colophon__legal-link">Correspondence Terms</Link>
            <Link href="#" className="colophon__legal-link">Atelier Visits</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

```

# atelier-arome-web/src/components/cart/vial-drawer.tsx
```tsx
"use client";

import { useEffect, useCallback } from 'react';
import { useCartStore, type CartItem } from '@/stores/cart-store';
import { showToast } from '@/stores/toast-store';

/**
 * Vial Drawer Component - Cart slide-out panel
 * Matches main.js lines 739-978: Cart & Vial Drawer System
 * Uses BEM classes from styles.css lines 3313-3971
 */
export function VialDrawer() {
    const {
        items,
        cartDrawerOpen,
        toggleCartDrawer,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal
    } = useCartStore();

    // Format currency matching main.js Utils.formatCurrency
    const formatCurrency = (amount: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    // Handle Escape key to close drawer
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape' && cartDrawerOpen) {
            toggleCartDrawer();
        }
    }, [cartDrawerOpen, toggleCartDrawer]);

    // Handle click outside to close
    const handleClickOutside = useCallback((e: MouseEvent) => {
        const drawer = document.querySelector('.vial-drawer');
        const cartButton = document.querySelector('[data-tooltip="Vial Collection"]');

        if (
            cartDrawerOpen &&
            drawer &&
            !drawer.contains(e.target as Node) &&
            cartButton &&
            !cartButton.contains(e.target as Node)
        ) {
            toggleCartDrawer();
        }
    }, [cartDrawerOpen, toggleCartDrawer]);

    // Add event listeners
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('click', handleClickOutside);

        // Lock body scroll when drawer is open
        if (cartDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('click', handleClickOutside);
            document.body.style.overflow = '';
        };
    }, [handleKeyDown, handleClickOutside, cartDrawerOpen]);

    // Handle quantity change
    const handleQuantityChange = (id: string, delta: number) => {
        const item = items.find(i => i.id === id);
        if (item) {
            updateQuantity(id, item.quantity + delta);
        }
    };

    // Handle checkout
    const handleCheckout = () => {
        if (items.length === 0) {
            showToast('Your collection vial is empty', 'warning');
            return;
        }

        showToast('Dispatching your essence collection to the atelier...', 'info');

        // Simulate API call
        setTimeout(() => {
            showToast('Your collection has been dispatched. The atelier will contact you shortly.', 'success');
            clearCart();
            toggleCartDrawer();
        }, 1000);
    };

    return (
        <aside
            className={`vial-drawer ${cartDrawerOpen ? 'active' : ''}`}
            id="vialDrawer"
            aria-hidden={!cartDrawerOpen}
            aria-modal={cartDrawerOpen}
            role="dialog"
            aria-label="Collection vial"
        >
            <div className="vial-drawer__container">
                {/* Header */}
                <div className="vial-drawer__header">
                    <h2 className="vial-drawer__title">Collection Vial</h2>
                    <button
                        className="vial-drawer__close"
                        id="vialClose"
                        onClick={() => toggleCartDrawer()}
                        aria-label="Close collection vial"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="vial-drawer__content" id="vialContent">
                    {items.length === 0 ? (
                        // Empty state
                        <div className="vial-drawer__empty">
                            <div className="vial-drawer__empty-icon" aria-hidden="true">⚱</div>
                            <p className="vial-drawer__empty-text">Your collection vial awaits</p>
                        </div>
                    ) : (
                        // Cart items
                        <div className="vial-drawer__items">
                            {items.map((item) => (
                                <CartItemCard
                                    key={item.id}
                                    item={item}
                                    onQuantityChange={handleQuantityChange}
                                    onRemove={removeFromCart}
                                    formatCurrency={formatCurrency}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="vial-drawer__footer">
                    <div className="vial-drawer__total">
                        <span className="vial-drawer__total-label">Total</span>
                        <span className="vial-drawer__total-value">{formatCurrency(getCartTotal())}</span>
                    </div>
                    <button
                        className="vial-drawer__dispatch btn btn--primary"
                        onClick={handleCheckout}
                        disabled={items.length === 0}
                    >
                        Dispatch to Atelier
                    </button>
                </div>
            </div>
        </aside>
    );
}

/**
 * Individual Cart Item Card
 * Matches main.js lines 864-914: createCartItemElement
 */
interface CartItemCardProps {
    item: CartItem;
    onQuantityChange: (id: string, delta: number) => void;
    onRemove: (id: string) => void;
    formatCurrency: (amount: number) => string;
}

function CartItemCard({ item, onQuantityChange, onRemove, formatCurrency }: CartItemCardProps) {
    return (
        <div className="cart-item" data-id={item.id}>
            <div className="cart-item__header">
                <div className="cart-item__info">
                    <h4 className="cart-item__name">{item.name}</h4>
                    <div className="cart-item__meta">
                        <span className="cart-item__latin">{item.latinName}</span>
                    </div>
                </div>
                <button
                    className="cart-item__remove"
                    onClick={() => onRemove(item.id)}
                    aria-label={`Remove ${item.name} from collection`}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>

            <div className="cart-item__details">
                <div className="cart-item__quantity">
                    <button
                        className="cart-item__quantity-btn"
                        onClick={() => onQuantityChange(item.id, -1)}
                        aria-label="Decrease quantity"
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <span className="cart-item__quantity-value">{item.quantity}</span>
                    <button
                        className="cart-item__quantity-btn"
                        onClick={() => onQuantityChange(item.id, 1)}
                        aria-label="Increase quantity"
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <span className="cart-item__quantity-label">phial{item.quantity !== 1 ? 's' : ''}</span>
                </div>

                <div className="cart-item__price">
                    <span className="cart-item__price-value">{formatCurrency(item.price * item.quantity)}</span>
                    <span className="cart-item__price-unit">{item.quantity} × {formatCurrency(item.price)}</span>
                </div>
            </div>
        </div>
    );
}

```

# atelier-arome-web/src/components/hero/botanical-layer.tsx
```tsx
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

```

# atelier-arome-web/src/components/hero/hero-frame.tsx
```tsx
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

```

# atelier-arome-web/src/components/hero/alchemical-vessel.tsx
```tsx
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

```

# atelier-arome-web/src/components/hero/hero-section.tsx
```tsx
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

```

# atelier-arome-web/src/components/ui/animate-in-view.tsx
```tsx
"use client";

import { type ReactNode, type HTMLAttributes } from 'react';
import { useIntersection } from '@/hooks/use-intersection';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { cn } from '@/lib/utils';

interface AnimateInViewProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    /** Animation variant */
    animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale';
    /** Delay before animation starts (in ms) */
    delay?: number;
    /** Animation duration (in ms) */
    duration?: number;
    /** Intersection observer threshold */
    threshold?: number;
    /** Whether to only animate once */
    once?: boolean;
}

/**
 * AnimateInView Component
 * Wrapper that animates children when they scroll into view.
 * Matches main.js lines 1600-1650: initScrollAnimations, initIntersectionObserver
 * 
 * Respects user's reduced motion preference.
 */
export function AnimateInView({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 600,
    threshold = 0.1,
    once = true,
    className,
    style,
    ...props
}: AnimateInViewProps) {
    const prefersReducedMotion = useReducedMotion();
    const { ref, isInView } = useIntersection({
        threshold,
        freezeOnceVisible: once
    });

    // If user prefers reduced motion, show content immediately without animation
    if (prefersReducedMotion) {
        return (
            <div className={className} style={style} {...props}>
                {children}
            </div>
        );
    }

    // Animation styles based on variant
    const getAnimationStyles = (): React.CSSProperties => {
        const baseStyles: React.CSSProperties = {
            transitionProperty: 'opacity, transform',
            transitionDuration: `${duration}ms`,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: `${delay}ms`,
        };

        if (!isInView) {
            switch (animation) {
                case 'fade-up':
                    return { ...baseStyles, opacity: 0, transform: 'translateY(30px)' };
                case 'fade-in':
                    return { ...baseStyles, opacity: 0 };
                case 'slide-left':
                    return { ...baseStyles, opacity: 0, transform: 'translateX(30px)' };
                case 'slide-right':
                    return { ...baseStyles, opacity: 0, transform: 'translateX(-30px)' };
                case 'scale':
                    return { ...baseStyles, opacity: 0, transform: 'scale(0.95)' };
                default:
                    return { ...baseStyles, opacity: 0 };
            }
        }

        // In view - final state
        return {
            ...baseStyles,
            opacity: 1,
            transform: 'translateY(0) translateX(0) scale(1)',
        };
    };

    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={cn(className, isInView && 'in-view')}
            style={{ ...getAnimationStyles(), ...style }}
            {...props}
        >
            {children}
        </div>
    );
}

```

# atelier-arome-web/src/components/ui/skeleton.tsx
```tsx
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-stone-200/50", className)}
      {...props}
    />
  )
}

export { Skeleton }

```

# atelier-arome-web/src/components/ui/button.tsx
```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-ink text-parchment hover:bg-ink/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gold: "bg-gold text-ink hover:bg-gold-dark border border-gold-dark",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

```

# atelier-arome-web/src/components/ui/toast.tsx
```tsx
"use client";

import { useToastStore, type Toast } from '@/stores/toast-store';

/**
 * Toast Container Component
 * Renders all active toasts in a fixed position.
 * Uses BEM classes from styles.css lines 3411-4135
 */
export function ToastContainer() {
    const toasts = useToastStore((state) => state.toasts);
    const removeToast = useToastStore((state) => state.removeToast);

    if (toasts.length === 0) return null;

    return (
        <div className="toast-container" aria-live="polite" aria-label="Notifications">
            {toasts.map((toast) => (
                <ToastItem key={toast.id} toast={toast} onDismiss={removeToast} />
            ))}
        </div>
    );
}

interface ToastItemProps {
    toast: Toast;
    onDismiss: (id: string) => void;
}

/**
 * Individual Toast Component
 * Matches .toast, .toast--success, .toast--warning, .toast--error classes
 */
function ToastItem({ toast, onDismiss }: ToastItemProps) {
    const handleDismiss = () => {
        onDismiss(toast.id);
    };

    // Get icon based on type
    const getIcon = () => {
        switch (toast.type) {
            case 'success':
                return '✓';
            case 'warning':
                return '⚠';
            case 'error':
                return '✕';
            case 'info':
            default:
                return '✦';
        }
    };

    return (
        <div
            className={`toast toast--${toast.type} active`}
            role="alert"
            aria-live="assertive"
        >
            <div className="toast__content">
                <div className="toast__seal" aria-hidden="true">
                    <span className="toast__seal-ring">{getIcon()}</span>
                </div>
                <p className="toast__message">{toast.message}</p>
                <button
                    className="toast__dismiss"
                    onClick={handleDismiss}
                    aria-label="Dismiss notification"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

```

# atelier-arome-web/src/components/ui/sheet.tsx
```tsx
"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & {
    side?: "left" | "right" | "top" | "bottom";
  }
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 gap-4 bg-parchment border-l-2 border-gold shadow-xl p-6 transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out duration-500",
        side === "left" &&
          "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        side === "right" &&
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        side === "top" &&
          "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        side === "bottom" &&
          "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        className
      )}
      {...props}
    >
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4 text-ink" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

export { Sheet, SheetTrigger, SheetContent, SheetClose, SheetOverlay };

```

# atelier-arome-web/src/components/catalog/filter-sidebar.tsx
```tsx
'use client';

import { useCategories } from '@/hooks/use-products';
import { ProductFilters } from '@/types/api';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface FilterSidebarProps {
  filters: ProductFilters;
  onFilterChange: (key: keyof ProductFilters, value: string | boolean | number | undefined) => void;
  className?: string;
}

const HUMOURS = ['calming', 'uplifting', 'grounding', 'clarifying'];
const RARITIES = ['common', 'rare', 'limited'];
const SEASONS = ['spring', 'summer', 'autumn', 'winter'];

export function FilterSidebar({ filters, onFilterChange, className }: FilterSidebarProps) {
  const { data: categories, isLoading: isCategoriesLoading } = useCategories();

  return (
    <aside className={cn("w-full space-y-8 lg:w-64", className)}>
      {/* Search */}
      <div className="space-y-3">
        <h3 className="font-display text-lg font-medium text-ink">Search</h3>
        <input
          type="search"
          placeholder="Search essences..."
          className="w-full rounded-sm border border-gold/30 bg-parchment px-3 py-2 text-sm text-ink placeholder:text-ink-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          value={filters.search || ''}
          onChange={(e) => onFilterChange('search', e.target.value)}
        />
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <h3 className="font-display text-lg font-medium text-ink">Categories</h3>
        {isCategoriesLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ) : (
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => onFilterChange('category', undefined)}
                className={cn(
                  "text-sm transition-colors hover:text-gold-dark",
                  !filters.category ? "font-medium text-gold-dark" : "text-ink-light"
                )}
              >
                All Categories
              </button>
            </li>
            {categories?.data?.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => onFilterChange('category', category.slug)}
                  className={cn(
                    "text-sm transition-colors hover:text-gold-dark",
                    filters.category === category.slug ? "font-medium text-gold-dark" : "text-ink-light"
                  )}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Humours */}
      <div className="space-y-3">
        <h3 className="font-display text-lg font-medium text-ink">Alchemical Humour</h3>
        <div className="space-y-2">
          {HUMOURS.map((humour) => (
            <label key={humour} className="flex items-center gap-2 text-sm text-ink-light cursor-pointer hover:text-ink">
              <input
                type="radio"
                name="humour"
                className="accent-gold"
                checked={filters.humour === humour}
                onChange={() => onFilterChange('humour', filters.humour === humour ? undefined : humour)}
                onClick={() => {
                  if (filters.humour === humour) {
                    // Allow deselecting radio button
                    onFilterChange('humour', undefined);
                  }
                }}
              />
              <span className="capitalize">{humour}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rarity */}
      <div className="space-y-3">
        <h3 className="font-display text-lg font-medium text-ink">Rarity</h3>
        <div className="space-y-2">
          {RARITIES.map((rarity) => (
            <label key={rarity} className="flex items-center gap-2 text-sm text-ink-light cursor-pointer hover:text-ink">
              <input
                type="checkbox"
                className="accent-gold rounded-sm"
                checked={filters.rarity === rarity}
                onChange={() => onFilterChange('rarity', filters.rarity === rarity ? undefined : rarity)}
              />
              <span className="capitalize">{rarity}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Season */}
      <div className="space-y-3">
        <h3 className="font-display text-lg font-medium text-ink">Season</h3>
        <div className="flex flex-wrap gap-2">
          {SEASONS.map((season) => (
            <button
              key={season}
              onClick={() => onFilterChange('season', filters.season === season ? undefined : season)} // Note: Type needs update in hook to support season if missing
              className={cn(
                "px-2 py-1 text-xs border rounded-sm transition-all",
                filters.season === season // Note: Type needs update
                  ? "border-gold bg-gold/10 text-gold-dark"
                  : "border-gold/20 text-ink-muted hover:border-gold/50"
              )}
            >
              <span className="capitalize">{season}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

```

# atelier-arome-web/src/components/catalog/product-card.tsx
```tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/api';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/stores/cart-store';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const HUMOUR_ICONS = {
  calming: { icon: '☁️', label: 'Air' }, // Placeholder icons, ideally SVGs
  uplifting: { icon: '🔥', label: 'Fire' },
  grounding: { icon: '🌍', label: 'Earth' },
  clarifying: { icon: '💧', label: 'Water' },
};

export function ProductCard({ product, className }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    addToCart({
      id: product.id,
      name: product.name,
      latinName: product.latin_name || '',
      price: product.default_variant.price_sgd,
      quantity: 1,
      variant: product.default_variant.name,
    });
  };

  const humourData = product.humour ? HUMOUR_ICONS[product.humour] : null;

  return (
    <Link
      href={`/compendium/${product.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-sm border border-gold/30 bg-parchment p-4 transition-all duration-500 hover:border-gold hover:shadow-gold",
        className
      )}
    >
      {/* Illumination Glow (Hover Effect) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-gold/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {/* Folio Number */}
      <div className="mb-2 flex items-center justify-between text-xs font-medium text-ink-muted">
        <span className="font-display tracking-widest uppercase">Folio {product.folio_number}</span>
        {product.rarity !== 'common' && (
          <span className={cn(
            "flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] uppercase tracking-wider",
            product.rarity === 'rare' ? "border-gold text-gold-dark" : "border-rose-400 text-rose-600"
          )}>
            ✦ {product.rarity}
          </span>
        )}
      </div>

      {/* Illustration */}
      <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-parchment-dark/50 mb-4">
        {product.primary_image.url ? (
          <Image
            src={product.primary_image.url}
            alt={product.primary_image.alt_text || product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gold/20">
            {/* Fallback pattern */}
            <svg width="40" height="40" viewBox="0 0 100 100" className="animate-pulse">
              <circle cx="50" cy="50" r="40" stroke="currentColor" fill="none" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Latin Name */}
        <div className="mb-1 flex items-center gap-2">
          <span className="text-xs italic text-ink-light font-serif">{product.latin_name}</span>
          <div className="h-px flex-1 bg-gold/20" />
        </div>

        {/* Name */}
        <h3 className="font-display text-xl font-medium text-ink group-hover:text-gold-dark transition-colors duration-300">
          {product.name}
        </h3>

        {/* Humour & Notes */}
        <div className="mt-2 mb-4 flex items-center gap-3 text-sm text-ink-light">
          {humourData && (
            <div className="flex items-center gap-1.5" title={`Humour: ${product.humour}`}>
              <span className="text-base">{humourData.icon}</span>
              <span className="capitalize">{product.humour}</span>
            </div>
          )}
          {product.season && (
            <>
              <span className="text-gold/40">•</span>
              <span className="capitalize">{product.season}</span>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gold/10">
          <div className="flex flex-col">
            <span className="font-display text-lg text-ink">
              {product.default_variant.price_sgd_formatted.replace('SGD ', '$')}
            </span>
            <span className="text-[10px] text-ink-muted uppercase tracking-wider">
              {product.default_variant.name}
            </span>
          </div>

          <Button
            onClick={handleAddToCart}
            variant="outline"
            size="sm"
            className="border-gold/50 hover:bg-gold hover:text-white hover:border-gold transition-colors duration-300"
          >
            Add to Vial
          </Button>
        </div>
      </div>
    </Link>
  );
}

```

# atelier-arome-web/src/components/catalog/product-grid.tsx
```tsx
'use client';

import { ProductFilters } from '@/types/api';
import { useProducts } from '@/hooks/use-products';
import { ProductCard } from './product-card';
import { Skeleton } from '@/components/ui/skeleton';

interface ProductGridProps {
  filters: ProductFilters;
}

export function ProductGrid({ filters }: ProductGridProps) {
  const { data, isLoading, isError, error } = useProducts(filters);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-4 p-4 border border-stone-200 rounded-sm">
            <Skeleton className="h-[300px] w-full rounded-sm" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
            <div className="mt-auto flex justify-between">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-8 w-24" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-[400px] w-full flex-col items-center justify-center text-center text-ink-muted">
        <span className="text-4xl">❦</span>
        <h3 className="mt-4 text-xl font-display">The Archives are Unreachable</h3>
        <p className="mt-2 max-w-md text-sm">
          We could not retrieve the botanical records at this moment. 
          Please try again later.
        </p>
        <p className="mt-2 text-xs text-rose-500">{(error as Error).message}</p>
      </div>
    );
  }

  if (!data?.data || data.data.length === 0) {
    return (
      <div className="flex h-[400px] w-full flex-col items-center justify-center text-center text-ink-muted">
        <span className="text-4xl">∅</span>
        <h3 className="mt-4 text-xl font-display">No Essences Found</h3>
        <p className="mt-2 max-w-md text-sm">
          Your search yielded no results in our compendium. 
          Try adjusting your filters or search criteria.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Simple Pagination Feedback (Could be expanded to full pagination) */}
      <div className="mt-8 text-center text-xs text-ink-muted">
        Showing {data.data.length} of {data.meta?.total || data.data.length} essences
      </div>
    </>
  );
}

```

# atelier-arome-web/src/components/sections/testimonials-section.tsx
```tsx
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

```

# atelier-arome-web/src/components/sections/compendium-section.tsx
```tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

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

// Filter configuration with humour icons - Gap 6 Fix
const FILTERS = [
  { key: 'all', label: 'All Essences', ornament: '✦' },
  { key: 'calming', label: 'Calming', icon: '☾' },
  { key: 'uplifting', label: 'Uplifting', icon: '☀' },
  { key: 'grounding', label: 'Grounding', icon: '♁' },
  { key: 'clarifying', label: 'Clarifying', icon: '☁' }
]

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

  // Total essences for reference (simulating larger catalog)
  const TOTAL_ESSENCES = 12

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
            A curated collection of botanical essences, each documented with the care of an
            illuminated manuscript. These are not merely scents, but captured moments of
            nature&apos;s poetry.
          </p>
        </div>

        {/* Filters - Gap 6 Fix: Enhanced with humour icons */}
        <div className="compendium__filters">
          <div className="compendium__filter-group">
            <div className="compendium__filter-label">Filter by Humour:</div>
            <div className="compendium__filter-buttons">
              {FILTERS.map(f => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className="compendium__filter"
                  aria-pressed={filter === f.key}
                >
                  {f.ornament && <span className="compendium__filter-ornament">{f.ornament}</span>}
                  <span className="compendium__filter-text">{f.label}</span>
                  {f.icon && <span className="compendium__filter-icon">{f.icon}</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="compendium__sort">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="compendium__sort-select"
              aria-label="Sort compendium"
            >
              <option value="folio">Folio Order</option>
              <option value="humour">By Humour</option>
              <option value="rarity">By Rarity</option>
              <option value="season">By Season</option>
            </select>
            <div className="compendium__sort-ornament"></div>
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
                <button className="essence-card__action" aria-label={`Add ${essence.commonName} to collection`}>
                  <svg className="essence-card__action-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  <span className="essence-card__action-text">To Vial</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Counter and Continue Reading - Gap 7 Fix */}
        <div className="compendium__footer">
          <div className="compendium__counter">
            <span className="compendium__counter-current">{sortedEssences.length}</span>
            <span className="compendium__counter-separator">of</span>
            <span className="compendium__counter-total">{TOTAL_ESSENCES}</span>
            <span className="compendium__counter-label">Essences Documented</span>
          </div>
          <Link href="/compendium" className="btn btn--outline">
            <span className="btn__text">Continue Reading</span>
            <svg className="btn__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

```

# atelier-arome-web/src/components/sections/alchemy-section.tsx
```tsx
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

```

# atelier-arome-web/src/components/sections/newsletter-section.tsx
```tsx
'use client'

import { useState } from 'react'
import { showToast } from '@/stores/toast-store'
import { isValidEmail, announce } from '@/lib/a11y'

export function NewsletterSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})

  // Validate name on blur
  const handleNameBlur = () => {
    if (!name.trim()) {
      setErrors(prev => ({ ...prev, name: 'Please enter your name' }))
    } else {
      setErrors(prev => ({ ...prev, name: undefined }))
    }
  }

  // Clear name error on input
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    if (errors.name) {
      setErrors(prev => ({ ...prev, name: undefined }))
    }
  }

  // Validate email on blur
  const handleEmailBlur = () => {
    if (!email.trim()) {
      setErrors(prev => ({ ...prev, email: 'Please enter your email address' }))
    } else if (!isValidEmail(email)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }))
    } else {
      setErrors(prev => ({ ...prev, email: undefined }))
    }
  }

  // Clear email error on input
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate name (required)
    if (!name.trim()) {
      setErrors(prev => ({ ...prev, name: 'Please enter your name' }))
      showToast('Please enter your name', 'warning')
      return
    }

    // Validate email
    if (!email.trim()) {
      setErrors(prev => ({ ...prev, email: 'Please enter your email address' }))
      showToast('Please enter your email address', 'warning')
      return
    }

    if (!isValidEmail(email)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }))
      showToast('Please enter a valid email address', 'warning')
      return
    }

    if (!consent) {
      showToast('Please agree to receive correspondence', 'warning')
      return
    }

    // Submit
    setIsSubmitting(true)

    // Simulate API call (matching main.js CONFIG.API_DELAY)
    await new Promise(resolve => setTimeout(resolve, 500))

    setIsSubmitting(false)
    setSubscribed(true)
    setName('')
    setEmail('')
    setConsent(false)

    showToast('Thank you for subscribing to our correspondence', 'success')
    announce('Successfully subscribed to the quarterly folio')
  }

  if (subscribed) {
    return (
      <section className="correspondence correspondence--confirmed" id="correspondence">
        <div className="correspondence__container">
          <div className="section-border" aria-hidden="true">
            <span className="section-border__ornament">✉</span>
          </div>
          <div className="correspondence__content">
            <h2 className="correspondence__title">
              <span className="correspondence__title-line">Subscription</span>
              <span className="correspondence__title-line correspondence__title-line--emph">Confirmed</span>
            </h2>
            <div className="correspondence__rule" aria-hidden="true"></div>
            <p className="correspondence__description">
              You shall receive tidings of new essences, alchemical revelations,
              and exclusive offers for the discerning patron.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="correspondence" id="correspondence">
      {/* Seal Decoration */}
      <div className="correspondence__seal" aria-hidden="true">
        <div className="correspondence__seal-ring"></div>
        <div className="correspondence__seal-center">A</div>
      </div>

      <div className="correspondence__container">
        {/* Section Border */}
        <div className="section-border" aria-hidden="true">
          <span className="section-border__ornament">✉</span>
        </div>

        {/* Content Area */}
        <div className="correspondence__content">
          <span className="section-label section-label--light">Correspondence</span>
          <h2 className="correspondence__title">
            <span className="correspondence__title-line">Receive Our</span>
            <span className="correspondence__title-line correspondence__title-line--emph">Quarterly Folio</span>
          </h2>
          <div className="correspondence__rule" aria-hidden="true"></div>
          <p className="correspondence__description">
            Each season, we dispatch a handwritten folio detailing new discoveries,
            alchemical notes, and insights from the atelier. Join our correspondence
            to receive these missives directly.
          </p>

          {/* Form with validation */}
          <form onSubmit={handleSubmit} className="correspondence__form" id="correspondenceForm">
            {/* Name Field (Required) */}
            <div className={`correspondence__field ${errors.name ? 'correspondence__field--error' : ''}`}>
              <label htmlFor="correspondenceName" className="visually-hidden">Your name</label>
              <input
                type="text"
                id="correspondenceName"
                value={name}
                onChange={handleNameChange}
                onBlur={handleNameBlur}
                placeholder="Your name"
                className="correspondence__input"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                aria-required="true"
                disabled={isSubmitting}
              />
              <div className="correspondence__field-ornament"></div>
              {errors.name && (
                <span id="name-error" className="correspondence__field-error" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div className={`correspondence__field ${errors.email ? 'correspondence__field--error' : ''}`}>
              <label htmlFor="correspondenceEmail" className="visually-hidden">Your email address</label>
              <input
                type="email"
                id="correspondenceEmail"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                placeholder="Your email address"
                className="correspondence__input"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                aria-required="true"
                disabled={isSubmitting}
              />
              <div className="correspondence__field-ornament"></div>
              {errors.email && (
                <span id="email-error" className="correspondence__field-error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="correspondence__consent">
              <input
                type="checkbox"
                id="correspondenceConsent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="correspondence__checkbox"
                disabled={isSubmitting}
              />
              <label htmlFor="correspondenceConsent" className="correspondence__consent-label">
                I wish to receive the quarterly folio and occasional atelier updates.
                I understand I may withdraw my consent at any time.
              </label>
            </div>

            <button
              type="submit"
              className="correspondence__submit"
              disabled={isSubmitting}
            >
              <span className="correspondence__submit-text">
                {isSubmitting ? 'Subscribing...' : 'Subscribe to Correspondence'}
              </span>
              <svg className="correspondence__submit-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 2L11 13" />
                <path d="M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>

        {/* Visual - Envelope */}
        <div className="correspondence__visual" aria-hidden="true">
          <div className="correspondence__envelope">
            <div className="envelope__flap"></div>
            <div className="envelope__body"></div>
            <div className="envelope__wax-seal">
              <div className="wax-seal__ring"></div>
              <div className="wax-seal__initial">A</div>
            </div>
          </div>

          <div className="correspondence__quill">
            <div className="quill__feather"></div>
            <div className="quill__shaft"></div>
            <div className="quill__nib"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

```

# atelier-arome-web/src/hooks/use-intersection.ts
```ts
"use client";

import { useEffect, useRef, useState, RefObject } from 'react';

interface UseIntersectionOptions extends IntersectionObserverInit {
    freezeOnceVisible?: boolean;
}

interface UseIntersectionReturn {
    ref: RefObject<HTMLElement | null>;
    isInView: boolean;
    entry: IntersectionObserverEntry | null;
}

/**
 * Custom hook for Intersection Observer.
 * Matches main.js lines 1622-1650: initIntersectionObserver
 * 
 * Usage:
 * const { ref, isInView } = useIntersection({ threshold: 0.1 });
 * <div ref={ref} className={isInView ? 'in-view' : ''}>...</div>
 */
export function useIntersection(
    options: UseIntersectionOptions = {}
): UseIntersectionReturn {
    const {
        threshold = 0.1,
        root = null,
        rootMargin = '50px',
        freezeOnceVisible = true, // Once visible, stay visible (like main.js unobserve)
    } = options;

    const ref = useRef<HTMLElement | null>(null);
    const [isInView, setIsInView] = useState(false);
    const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
    const frozen = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // If already frozen (was visible once), don't re-observe
        if (frozen.current && freezeOnceVisible) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setEntry(entry);

                if (entry.isIntersecting) {
                    setIsInView(true);

                    // Freeze once visible to prevent re-animating
                    if (freezeOnceVisible) {
                        frozen.current = true;
                        observer.unobserve(element);
                    }
                } else if (!freezeOnceVisible) {
                    setIsInView(false);
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, root, rootMargin, freezeOnceVisible]);

    return { ref, isInView, entry };
}

/**
 * Hook variant that accepts an external ref (for when you need more control)
 */
export function useIntersectionWithRef(
    elementRef: RefObject<HTMLElement | null>,
    options: UseIntersectionOptions = {}
): { isInView: boolean; entry: IntersectionObserverEntry | null } {
    const {
        threshold = 0.1,
        root = null,
        rootMargin = '50px',
        freezeOnceVisible = true,
    } = options;

    const [isInView, setIsInView] = useState(false);
    const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
    const frozen = useRef(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        if (frozen.current && freezeOnceVisible) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setEntry(entry);

                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (freezeOnceVisible) {
                        frozen.current = true;
                        observer.unobserve(element);
                    }
                } else if (!freezeOnceVisible) {
                    setIsInView(false);
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [elementRef, threshold, root, rootMargin, freezeOnceVisible]);

    return { isInView, entry };
}

```

# atelier-arome-web/src/hooks/use-products.ts
```ts
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api-client';
import { 
  ApiResponse, 
  Product, 
  ProductFilters, 
  Category, 
  Tag 
} from '@/types/api';

// Hook for fetching product list with filters
export function useProducts(filters: ProductFilters = {}) {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => {
      // Convert filters to query string
      const params = new URLSearchParams();
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          params.append(key, String(value));
        }
      });

      return apiClient<ApiResponse<Product[]>>(`/products?${params.toString()}`);
    },
    placeholderData: (previousData) => previousData, // Keep previous data while fetching new data
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Hook for fetching a single product
export function useProduct(slug: string) {
  return useQuery({
    queryKey: ['product', slug],
    queryFn: () => apiClient<ApiResponse<Product>>(`/products/${slug}`),
    enabled: !!slug,
  });
}

// Hook for fetching categories (for filters)
export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => apiClient<ApiResponse<Category[]>>('/categories'),
    staleTime: 60 * 60 * 1000, // 1 hour
  });
}

// Hook for fetching tags (for filters)
export function useTags() {
  return useQuery({
    queryKey: ['tags'],
    queryFn: () => apiClient<ApiResponse<Tag[]>>('/tags'),
    staleTime: 60 * 60 * 1000, // 1 hour
  });
}

```

# atelier-arome-web/src/hooks/use-scroll.ts
```ts
"use client";

import { useSyncExternalStore } from 'react';

interface ScrollState {
    scrollY: number;
    isScrolled: boolean;
}

interface UseScrollOptions {
    threshold?: number;
}

// Server snapshot for SSR
function getServerSnapshot(): number {
    return 0;
}

// Subscribe to scroll events
function subscribeToScroll(callback: () => void): () => void {
    window.addEventListener('scroll', callback, { passive: true });
    return () => window.removeEventListener('scroll', callback);
}

// Get current scroll position
function getScrollSnapshot(): number {
    return typeof window !== 'undefined' ? window.scrollY : 0;
}

/**
 * Custom hook for scroll-based effects.
 * Matches main.js lines 1652-1717: handleScroll, updateHeaderShadow
 * 
 * Uses useSyncExternalStore for proper React 18+ subscription pattern.
 */
export function useScroll(options: UseScrollOptions = {}): ScrollState {
    const { threshold = 20 } = options;

    // Use useSyncExternalStore for scroll position
    const scrollY = useSyncExternalStore(
        subscribeToScroll,
        getScrollSnapshot,
        getServerSnapshot
    );

    // Calculate derived state from scrollY (no refs needed)
    const isScrolled = scrollY > threshold;

    return {
        scrollY,
        isScrolled,
    };
}

/**
 * Smooth scroll to an element or selector.
 * Matches main.js lines 372-386: Utils.smoothScrollTo
 */
export function smoothScrollTo(target: string | HTMLElement, offset: number = 0): void {
    const element = typeof target === 'string'
        ? document.querySelector(target)
        : target;

    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
    });
}

```

# atelier-arome-web/src/hooks/index.ts
```ts
// Custom hooks barrel export
export { useScroll, smoothScrollTo } from './use-scroll';
export { useIntersection, useIntersectionWithRef } from './use-intersection';
export { useReducedMotion, useAnimationsEnabled } from './use-reduced-motion';

```

# atelier-arome-web/src/hooks/use-reduced-motion.ts
```ts
"use client";

import { useEffect, useState, useSyncExternalStore } from 'react';

// Media query for reduced motion
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Get server-side snapshot (always false for SSR)
 */
function getServerSnapshot(): boolean {
    return false;
}

/**
 * Subscribe to media query changes
 */
function subscribeToMediaQuery(callback: () => void): () => void {
    if (typeof window === 'undefined') return () => { };

    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    mediaQuery.addEventListener('change', callback);

    return () => {
        mediaQuery.removeEventListener('change', callback);
    };
}

/**
 * Get current reduced motion preference
 */
function getReducedMotionSnapshot(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

/**
 * Custom hook to detect user's reduced motion preference.
 * Matches main.js lines 38, 50-66: CONFIG.REDUCED_MOTION and listener
 * 
 * Uses useSyncExternalStore for proper React 18+ subscription pattern.
 * 
 * Usage:
 * const prefersReducedMotion = useReducedMotion();
 * if (prefersReducedMotion) { // use instant transitions }
 */
export function useReducedMotion(): boolean {
    return useSyncExternalStore(
        subscribeToMediaQuery,
        getReducedMotionSnapshot,
        getServerSnapshot
    );
}

/**
 * Hook to check if animations should be enabled.
 * Combines reduced motion preference with device capability detection.
 * Matches main.js lines 40-47: CONFIG.ANIMATIONS_ENABLED
 */
export function useAnimationsEnabled(): boolean {
    const prefersReducedMotion = useReducedMotion();
    const [isLowPower, setIsLowPower] = useState(false);

    // Use a flag to track mount state for the initial check
    useEffect(() => {
        // This runs only on mount in the browser
        if (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) {
            // Defer the state update to avoid sync setState in effect
            const lowPower = navigator.hardwareConcurrency <= 4;
            if (lowPower !== isLowPower) {
                // Use a microtask to avoid sync setState warning
                queueMicrotask(() => setIsLowPower(lowPower));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return !prefersReducedMotion && !isLowPower;
}

```

# atelier-arome-web/src/stores/toast-store.ts
```ts
import { create } from 'zustand';

export type ToastType = 'info' | 'success' | 'warning' | 'error';

export interface Toast {
    id: string;
    message: string;
    type: ToastType;
    createdAt: number;
}

interface ToastState {
    toasts: Toast[];
    showToast: (message: string, type?: ToastType) => void;
    removeToast: (id: string) => void;
    clearAll: () => void;
}

/**
 * Toast notification store.
 * Matches main.js lines 1783-1811: showToast, initToastSystem
 */
export const useToastStore = create<ToastState>((set, get) => ({
    toasts: [],

    showToast: (message: string, type: ToastType = 'info') => {
        const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        const newToast: Toast = {
            id,
            message,
            type,
            createdAt: Date.now(),
        };

        set((state) => ({
            toasts: [...state.toasts, newToast],
        }));

        // Auto-remove after 5 seconds (matching main.js)
        setTimeout(() => {
            get().removeToast(id);
        }, 5000);
    },

    removeToast: (id: string) => {
        set((state) => ({
            toasts: state.toasts.filter((toast) => toast.id !== id),
        }));
    },

    clearAll: () => {
        set({ toasts: [] });
    },
}));

// Convenience function for use outside React components
export function showToast(message: string, type: ToastType = 'info'): void {
    useToastStore.getState().showToast(message, type);
}

```

# atelier-arome-web/src/stores/cart-store.ts
```ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  latinName: string;
  price: number;
  quantity: number;
  variant?: string;
  addedAt?: string;
}

export interface CartState {
  items: CartItem[];
  cartDrawerOpen: boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCartDrawer: () => void;
  getCartTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      cartDrawerOpen: false,

      addToCart: (item) => {
        const existingItem = get().items.find((i) => i.id === item.id);
        
        if (existingItem) {
          set((state) => ({
            items: state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
            ),
          }));
        } else {
          set((state) => ({
            items: [...state.items, { ...item, quantity: item.quantity, addedAt: new Date().toISOString() }],
          }));
        }
      },

      removeFromCart: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id);
          return;
        }

        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      toggleCartDrawer: () => {
        set((state) => ({ cartDrawerOpen: !state.cartDrawerOpen }));
      },

      getCartTotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'atelier-arome-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

```

# atelier-arome-web/src/lib/utils.ts
```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

```

# atelier-arome-web/src/lib/api-client.ts
```ts
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

class ApiError extends Error {
  status: number;
  data: unknown;

  constructor(message: string, status: number, data: unknown) {
    super(message);
    this.status = status;
    this.data = data;
    this.name = 'ApiError';
  }
}

export async function apiClient<T>(
  endpoint: string,
  { method = 'GET', body, headers = {}, ...customConfig }: RequestInit = {}
): Promise<T> {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    ...customConfig,
  };

  // Clean up endpoint to avoid double slashes
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

  const response = await fetch(`${API_URL}${cleanEndpoint}`, config);
  const data = await response.json();

  if (response.ok) {
    return data;
  }

  throw new ApiError(
    data.message || 'An error occurred while fetching data.',
    response.status,
    data
  );
}

```

# atelier-arome-web/src/lib/a11y.ts
```ts
/**
 * Accessibility Utilities
 * Matches main.js lines 526-656: A11y object
 */

// Screen reader live region announcer
let announcer: HTMLElement | null = null;

/**
 * Announce a message to screen readers.
 * Creates or uses an existing ARIA live region.
 * 
 * @param message - The message to announce
 * @param priority - 'polite' (queued) or 'assertive' (immediate)
 */
export function announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    if (typeof document === 'undefined') return;

    // Get or create announcer element
    if (!announcer) {
        announcer = document.getElementById('a11y-announcer');

        if (!announcer) {
            announcer = document.createElement('div');
            announcer.id = 'a11y-announcer';
            announcer.className = 'visually-hidden';
            announcer.setAttribute('aria-live', priority);
            announcer.setAttribute('aria-atomic', 'true');
            announcer.setAttribute('role', 'status');
            document.body.appendChild(announcer);
        }
    }

    // Update priority if different
    announcer.setAttribute('aria-live', priority);

    // Clear and re-set content to trigger announcement
    announcer.textContent = '';

    // Use setTimeout to ensure the clear happens before the new content
    setTimeout(() => {
        if (announcer) {
            announcer.textContent = message;
        }
    }, 100);
}

/**
 * Announce cart updates specifically.
 * Provides consistent messaging for cart actions.
 */
export function announceCartUpdate(
    action: 'add' | 'remove' | 'update',
    itemName: string,
    count: number
): void {
    let message: string;

    switch (action) {
        case 'add':
            message = `Added ${itemName} to collection. Cart now has ${count} item${count !== 1 ? 's' : ''}.`;
            break;
        case 'remove':
            message = `Removed ${itemName} from collection. Cart now has ${count} item${count !== 1 ? 's' : ''}.`;
            break;
        case 'update':
            message = `Updated quantity for ${itemName}. Cart now has ${count} item${count !== 1 ? 's' : ''}.`;
            break;
        default:
            message = `Cart updated. ${count} item${count !== 1 ? 's' : ''} in collection.`;
    }

    announce(message, 'polite');
}

/**
 * Set ARIA attributes for modal/drawer states.
 */
export function setModalAttributes(element: HTMLElement | null, isOpen: boolean): void {
    if (!element) return;

    element.setAttribute('aria-hidden', String(!isOpen));
    element.setAttribute('aria-modal', String(isOpen));

    if (isOpen) {
        element.removeAttribute('inert');
    } else {
        element.setAttribute('inert', '');
    }
}

/**
 * Associate an error message with an input for screen readers.
 */
export function associateError(input: HTMLElement | null, errorElement: HTMLElement | null): void {
    if (!input || !errorElement) return;

    const errorId = errorElement.id || `error-${input.id}`;
    if (!errorElement.id) {
        errorElement.id = errorId;
    }

    let describedBy = input.getAttribute('aria-describedby') || '';
    if (!describedBy.includes(errorId)) {
        describedBy = describedBy ? `${describedBy} ${errorId}` : errorId;
        input.setAttribute('aria-describedby', describedBy);
    }

    input.setAttribute('aria-invalid', 'true');
}

/**
 * Clear error association from an input.
 */
export function clearError(input: HTMLElement | null, errorElement?: HTMLElement | null): void {
    if (!input) return;

    if (errorElement?.id) {
        const describedBy = input.getAttribute('aria-describedby') || '';
        const updated = describedBy.replace(errorElement.id, '').trim();

        if (updated) {
            input.setAttribute('aria-describedby', updated);
        } else {
            input.removeAttribute('aria-describedby');
        }
    }

    input.setAttribute('aria-invalid', 'false');
}

/**
 * Email validation regex.
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Currency formatting utility.
 */
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    }).format(amount);
}

```

# atelier-arome-web/src/types/api.ts
```ts
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  meta?: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
  links?: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  sort_order: number;
  is_active: boolean;
  products_count?: number;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  type: string;
}

export interface ProductImage {
  id: string;
  url: string;
  alt_text: string | null;
  is_primary: boolean;
  sort_order: number;
}

export interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  price_sgd: number;
  price_sgd_formatted: string;
  compare_at_price: number | null;
  compare_at_price_formatted: string | null;
  weight_grams: number;
  is_default: boolean;
  is_active: boolean;
  inventory?: {
    quantity: number;
    in_stock: boolean;
  };
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  latin_name: string | null;
  description: string;
  long_description: string | null;
  humour: 'calming' | 'uplifting' | 'grounding' | 'clarifying' | null;
  rarity: 'common' | 'rare' | 'limited';
  season: 'spring' | 'summer' | 'autumn' | 'winter' | null;
  extraction_method: string | null;
  folio_number: string | null;
  is_featured: boolean;
  is_active: boolean;
  sort_order: number;
  meta_data: Record<string, unknown> | null;
  category: Category;
  default_variant: ProductVariant;
  primary_image: ProductImage;
  variants?: ProductVariant[];
  images?: ProductImage[];
  tags?: Tag[];
  created_at: string;
  updated_at: string;
}

export interface ProductFilters {
  category?: string;
  humour?: string;
  rarity?: string;
  featured?: boolean;
  search?: string;
  season?: string;
  sort?: string;
  order?: 'asc' | 'desc';
  page?: number;
  per_page?: number;
}

```

