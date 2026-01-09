/**
 * Accessibility Utilities
 * Matches main.js lines 526-656: A11y object
 */

// Screen reader live region announcer
let announcer: HTMLElement | null = null;

/**
 * Announce a message to screen readers.
 * Creates or uses an existing ARIA live region.
 * 
 * @param message - The message to announce
 * @param priority - 'polite' (queued) or 'assertive' (immediate)
 */
export function announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    if (typeof document === 'undefined') return;

    // Get or create announcer element
    if (!announcer) {
        announcer = document.getElementById('a11y-announcer');

        if (!announcer) {
            announcer = document.createElement('div');
            announcer.id = 'a11y-announcer';
            announcer.className = 'visually-hidden';
            announcer.setAttribute('aria-live', priority);
            announcer.setAttribute('aria-atomic', 'true');
            announcer.setAttribute('role', 'status');
            document.body.appendChild(announcer);
        }
    }

    // Update priority if different
    announcer.setAttribute('aria-live', priority);

    // Clear and re-set content to trigger announcement
    announcer.textContent = '';

    // Use setTimeout to ensure the clear happens before the new content
    setTimeout(() => {
        if (announcer) {
            announcer.textContent = message;
        }
    }, 100);
}

/**
 * Announce cart updates specifically.
 * Provides consistent messaging for cart actions.
 */
export function announceCartUpdate(
    action: 'add' | 'remove' | 'update',
    itemName: string,
    count: number
): void {
    let message: string;

    switch (action) {
        case 'add':
            message = `Added ${itemName} to collection. Cart now has ${count} item${count !== 1 ? 's' : ''}.`;
            break;
        case 'remove':
            message = `Removed ${itemName} from collection. Cart now has ${count} item${count !== 1 ? 's' : ''}.`;
            break;
        case 'update':
            message = `Updated quantity for ${itemName}. Cart now has ${count} item${count !== 1 ? 's' : ''}.`;
            break;
        default:
            message = `Cart updated. ${count} item${count !== 1 ? 's' : ''} in collection.`;
    }

    announce(message, 'polite');
}

/**
 * Set ARIA attributes for modal/drawer states.
 */
export function setModalAttributes(element: HTMLElement | null, isOpen: boolean): void {
    if (!element) return;

    element.setAttribute('aria-hidden', String(!isOpen));
    element.setAttribute('aria-modal', String(isOpen));

    if (isOpen) {
        element.removeAttribute('inert');
    } else {
        element.setAttribute('inert', '');
    }
}

/**
 * Associate an error message with an input for screen readers.
 */
export function associateError(input: HTMLElement | null, errorElement: HTMLElement | null): void {
    if (!input || !errorElement) return;

    const errorId = errorElement.id || `error-${input.id}`;
    if (!errorElement.id) {
        errorElement.id = errorId;
    }

    let describedBy = input.getAttribute('aria-describedby') || '';
    if (!describedBy.includes(errorId)) {
        describedBy = describedBy ? `${describedBy} ${errorId}` : errorId;
        input.setAttribute('aria-describedby', describedBy);
    }

    input.setAttribute('aria-invalid', 'true');
}

/**
 * Clear error association from an input.
 */
export function clearError(input: HTMLElement | null, errorElement?: HTMLElement | null): void {
    if (!input) return;

    if (errorElement?.id) {
        const describedBy = input.getAttribute('aria-describedby') || '';
        const updated = describedBy.replace(errorElement.id, '').trim();

        if (updated) {
            input.setAttribute('aria-describedby', updated);
        } else {
            input.removeAttribute('aria-describedby');
        }
    }

    input.setAttribute('aria-invalid', 'false');
}

/**
 * Email validation regex.
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Currency formatting utility.
 */
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    }).format(amount);
}
