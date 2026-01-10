import { Skeleton } from '@/components/ui/skeleton';

interface CartLoadingProps {
    count?: number;
}

/**
 * Cart Loading Skeleton
 * Displays shimmer placeholders while cart is loading.
 */
export function CartLoading({ count = 3 }: CartLoadingProps) {
    return (
        <div className="space-y-4">
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className="flex gap-4 p-4 border border-gold/10 bg-parchment-dark/10 rounded-sm"
                >
                    {/* Image skeleton */}
                    <Skeleton className="w-20 h-20 flex-shrink-0 bg-gold/10" />

                    {/* Content */}
                    <div className="flex-1 space-y-2">
                        <Skeleton className="h-5 w-3/4 bg-ink/10" />
                        <Skeleton className="h-3 w-1/2 bg-gold/10" />
                        <Skeleton className="h-4 w-1/4 bg-gold/15" />

                        <div className="flex items-center justify-between pt-2">
                            <Skeleton className="h-7 w-24 bg-gold/10" />
                            <Skeleton className="h-6 w-16 bg-ink/10" />
                        </div>
                    </div>
                </div>
            ))}

            {/* Footer skeleton */}
            <div className="border-t border-gold/10 pt-4 mt-4 space-y-2">
                <div className="flex justify-between">
                    <Skeleton className="h-4 w-16 bg-ink/10" />
                    <Skeleton className="h-4 w-20 bg-ink/10" />
                </div>
                <div className="flex justify-between">
                    <Skeleton className="h-4 w-20 bg-ink/10" />
                    <Skeleton className="h-4 w-16 bg-ink/10" />
                </div>
                <div className="flex justify-between pt-2">
                    <Skeleton className="h-6 w-12 bg-gold/10" />
                    <Skeleton className="h-6 w-24 bg-gold/15" />
                </div>
            </div>
        </div>
    );
}
