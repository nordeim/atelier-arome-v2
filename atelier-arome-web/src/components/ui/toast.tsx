"use client";

import { useToastStore, type Toast } from '@/stores/toast-store';

/**
 * Toast Container Component
 * Renders all active toasts in a fixed position.
 * Uses BEM classes from styles.css lines 3411-4135
 */
export function ToastContainer() {
    const toasts = useToastStore((state) => state.toasts);
    const removeToast = useToastStore((state) => state.removeToast);

    if (toasts.length === 0) return null;

    return (
        <div className="toast-container" aria-live="polite" aria-label="Notifications">
            {toasts.map((toast) => (
                <ToastItem key={toast.id} toast={toast} onDismiss={removeToast} />
            ))}
        </div>
    );
}

interface ToastItemProps {
    toast: Toast;
    onDismiss: (id: string) => void;
}

/**
 * Individual Toast Component
 * Matches .toast, .toast--success, .toast--warning, .toast--error classes
 */
function ToastItem({ toast, onDismiss }: ToastItemProps) {
    const handleDismiss = () => {
        onDismiss(toast.id);
    };

    // Get icon based on type
    const getIcon = () => {
        switch (toast.type) {
            case 'success':
                return '✓';
            case 'warning':
                return '⚠';
            case 'error':
                return '✕';
            case 'info':
            default:
                return '✦';
        }
    };

    return (
        <div
            className={`toast toast--${toast.type} active`}
            role="alert"
            aria-live="assertive"
        >
            <div className="toast__content">
                <div className="toast__seal" aria-hidden="true">
                    <span className="toast__seal-ring">{getIcon()}</span>
                </div>
                <p className="toast__message">{toast.message}</p>
                <button
                    className="toast__dismiss"
                    onClick={handleDismiss}
                    aria-label="Dismiss notification"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
