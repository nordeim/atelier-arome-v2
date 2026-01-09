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
