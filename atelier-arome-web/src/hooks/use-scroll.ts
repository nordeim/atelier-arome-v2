"use client";

import { useState, useEffect, useCallback, useRef } from 'react';

interface ScrollState {
    scrollY: number;
    isScrolled: boolean;
    activeSection: string | null;
    scrollDirection: 'up' | 'down' | null;
}

interface UseScrollOptions {
    threshold?: number;
    sectionIds?: string[];
    offset?: number;
}

/**
 * Custom hook for scroll-based effects.
 * Matches main.js lines 1652-1717: handleScroll, updateHeaderShadow, updateActiveNavLink
 */
export function useScroll(options: UseScrollOptions = {}): ScrollState {
    const { threshold = 20, sectionIds = [], offset = 100 } = options;

    const [scrollState, setScrollState] = useState<ScrollState>({
        scrollY: 0,
        isScrolled: false,
        activeSection: null,
        scrollDirection: null,
    });

    const lastScrollY = useRef(0);

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY || document.documentElement.scrollTop;

        // Determine scroll direction
        const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
        lastScrollY.current = currentScrollY;

        // Determine if scrolled past threshold (for header shadow)
        const isScrolled = currentScrollY > threshold;

        // Determine active section
        let activeSection: string | null = null;

        if (sectionIds.length > 0) {
            for (const id of sectionIds) {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const sectionTop = rect.top + currentScrollY;
                    const sectionBottom = rect.bottom + currentScrollY;

                    if (currentScrollY + offset >= sectionTop && currentScrollY + offset < sectionBottom) {
                        activeSection = id;
                        break;
                    }
                }
            }
        }

        setScrollState({
            scrollY: currentScrollY,
            isScrolled,
            activeSection,
            scrollDirection: direction,
        });
    }, [threshold, sectionIds, offset]);

    useEffect(() => {
        // Debounce scroll handler for performance
        let ticking = false;

        const scrollListener = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', scrollListener, { passive: true });

        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, [handleScroll]);

    return scrollState;
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
