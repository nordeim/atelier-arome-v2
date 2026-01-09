import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-24">
      <div className="mb-12">
        <Skeleton className="h-4 w-48 bg-gold/20" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Col Skeleton */}
        <div className="space-y-6">
          <Skeleton className="aspect-square w-full rounded-none border border-gold/10 bg-parchment-dark/50" />
          <div className="flex space-x-4">
            <Skeleton className="h-20 w-20 bg-gold/10" />
            <Skeleton className="h-20 w-20 bg-gold/10" />
            <Skeleton className="h-20 w-20 bg-gold/10" />
          </div>
        </div>

        {/* Right Col Skeleton */}
        <div className="space-y-8">
          <div className="space-y-4 pb-8 border-b border-gold/10">
            <Skeleton className="h-4 w-32 bg-gold/20" />
            <Skeleton className="h-12 w-3/4 bg-ink/10" />
            <Skeleton className="h-8 w-1/4 bg-gold/20" />
          </div>

          <div className="space-y-4">
            <Skeleton className="h-4 w-full bg-ink/5" />
            <Skeleton className="h-4 w-full bg-ink/5" />
            <Skeleton className="h-4 w-2/3 bg-ink/5" />
          </div>

          <div className="grid grid-cols-3 gap-4 py-6">
            <Skeleton className="h-20 w-full bg-gold/5" />
            <Skeleton className="h-20 w-full bg-gold/5" />
            <Skeleton className="h-20 w-full bg-gold/5" />
          </div>

          <div className="h-64 bg-parchment-dark/30 border border-gold/5 p-6 space-y-6">
             <Skeleton className="h-6 w-32 bg-gold/20" />
             <div className="grid grid-cols-3 gap-3">
               <Skeleton className="h-16 w-full bg-parchment" />
               <Skeleton className="h-16 w-full bg-parchment" />
               <Skeleton className="h-16 w-full bg-parchment" />
             </div>
             <Skeleton className="h-14 w-full bg-gold/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
