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
