import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center flex flex-col items-center justify-center min-h-[60vh]">
      <div className="mb-8 relative">
        <div className="absolute inset-0 border border-gold/30 rotate-45" />
        <div className="w-32 h-32 bg-parchment-dark flex items-center justify-center relative z-10 border border-gold">
          <span className="font-display text-6xl text-ink-muted">404</span>
        </div>
      </div>
      
      <h1 className="font-display text-4xl text-ink mb-4">
        Lost in the Archives
      </h1>
      
      <p className="font-body text-xl text-ink-light max-w-md mx-auto mb-12">
        The compendium entry you seek cannot be found. It may have been archived or never existed in this realm.
      </p>
      
      <Link href="/compendium">
        <Button variant="gold" size="lg">
          Return to Compendium
        </Button>
      </Link>
    </div>
  );
}
