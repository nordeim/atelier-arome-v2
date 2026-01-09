"use client";

import { type ReactNode, type HTMLAttributes } from 'react';
import { useIntersection } from '@/hooks/use-intersection';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { cn } from '@/lib/utils';

interface AnimateInViewProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    /** Animation variant */
    animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale';
    /** Delay before animation starts (in ms) */
    delay?: number;
    /** Animation duration (in ms) */
    duration?: number;
    /** Intersection observer threshold */
    threshold?: number;
    /** Whether to only animate once */
    once?: boolean;
}

/**
 * AnimateInView Component
 * Wrapper that animates children when they scroll into view.
 * Matches main.js lines 1600-1650: initScrollAnimations, initIntersectionObserver
 * 
 * Respects user's reduced motion preference.
 */
export function AnimateInView({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 600,
    threshold = 0.1,
    once = true,
    className,
    style,
    ...props
}: AnimateInViewProps) {
    const prefersReducedMotion = useReducedMotion();
    const { ref, isInView } = useIntersection({
        threshold,
        freezeOnceVisible: once
    });

    // If user prefers reduced motion, show content immediately without animation
    if (prefersReducedMotion) {
        return (
            <div className={className} style={style} {...props}>
                {children}
            </div>
        );
    }

    // Animation styles based on variant
    const getAnimationStyles = (): React.CSSProperties => {
        const baseStyles: React.CSSProperties = {
            transitionProperty: 'opacity, transform',
            transitionDuration: `${duration}ms`,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: `${delay}ms`,
        };

        if (!isInView) {
            switch (animation) {
                case 'fade-up':
                    return { ...baseStyles, opacity: 0, transform: 'translateY(30px)' };
                case 'fade-in':
                    return { ...baseStyles, opacity: 0 };
                case 'slide-left':
                    return { ...baseStyles, opacity: 0, transform: 'translateX(30px)' };
                case 'slide-right':
                    return { ...baseStyles, opacity: 0, transform: 'translateX(-30px)' };
                case 'scale':
                    return { ...baseStyles, opacity: 0, transform: 'scale(0.95)' };
                default:
                    return { ...baseStyles, opacity: 0 };
            }
        }

        // In view - final state
        return {
            ...baseStyles,
            opacity: 1,
            transform: 'translateY(0) translateX(0) scale(1)',
        };
    };

    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={cn(className, isInView && 'in-view')}
            style={{ ...getAnimationStyles(), ...style }}
            {...props}
        >
            {children}
        </div>
    );
}
