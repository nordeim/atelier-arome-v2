"use client";

import { useEffect, useState } from 'react';

/**
 * Custom hook to detect user's reduced motion preference.
 * Matches main.js lines 38, 50-66: CONFIG.REDUCED_MOTION and listener
 * 
 * Usage:
 * const prefersReducedMotion = useReducedMotion();
 * if (prefersReducedMotion) { // use instant transitions }
 */
export function useReducedMotion(): boolean {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check if we're in a browser environment
        if (typeof window === 'undefined') return;

        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        // Set initial value
        setPrefersReducedMotion(mediaQuery.matches);

        // Listen for changes
        const handleChange = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches);
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return prefersReducedMotion;
}

/**
 * Hook to check if animations should be enabled.
 * Combines reduced motion preference with device capability detection.
 * Matches main.js lines 40-47: CONFIG.ANIMATIONS_ENABLED
 */
export function useAnimationsEnabled(): boolean {
    const prefersReducedMotion = useReducedMotion();
    const [isLowPower, setIsLowPower] = useState(false);

    useEffect(() => {
        if (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) {
            setIsLowPower(navigator.hardwareConcurrency <= 4);
        }
    }, []);

    return !prefersReducedMotion && !isLowPower;
}
