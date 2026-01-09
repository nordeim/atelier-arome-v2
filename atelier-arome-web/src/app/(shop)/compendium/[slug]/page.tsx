import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ProductDetail } from '@/components/catalog/product-detail';
import { getProductBySlug as fetchProduct } from '@/lib/api-client';
import { ProductDetail as ProductDetailType } from '@/types/api';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const product = await fetchProduct(slug);
    
    return {
      title: `${product.name} | Atelier Arôme`,
      description: product.description.substring(0, 160),
      openGraph: {
        title: product.name,
        description: product.description,
        images: product.primary_image ? [product.primary_image.url] : [],
      },
    };
  } catch {
    return {
      title: 'Compendium | Atelier Arôme',
    };
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  let product: ProductDetailType;

  try {
    product = await fetchProduct(slug);
  } catch {
    notFound();
  }
    
  return (
    <div className="container mx-auto px-4 py-12 lg:py-24">
      {/* Breadcrumb / Navigation Back */}
      <div className="mb-12">
        <Link href="/compendium" className="text-sm uppercase tracking-widest text-gold hover:text-gold-dark transition-colors flex items-center space-x-2">
          <span>← Return to Compendium</span>
        </Link>
      </div>

      <ProductDetail product={product} />
    </div>
  );
}