'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

interface ProvidersProps {
    children: ReactNode;
}

/**
 * Application Providers
 * Wraps the app with necessary context providers.
 */
export function Providers({ children }: ProvidersProps) {
    // Create QueryClient in state to avoid re-creating on every render
    // and to properly handle SSR
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000, // 1 minute
                        retry: 1,
                        refetchOnWindowFocus: false,
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
