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
