import { create } from 'zustand';

export type ToastType = 'info' | 'success' | 'warning' | 'error';

export interface Toast {
    id: string;
    message: string;
    type: ToastType;
    createdAt: number;
}

interface ToastState {
    toasts: Toast[];
    showToast: (message: string, type?: ToastType) => void;
    removeToast: (id: string) => void;
    clearAll: () => void;
}

/**
 * Toast notification store.
 * Matches main.js lines 1783-1811: showToast, initToastSystem
 */
export const useToastStore = create<ToastState>((set, get) => ({
    toasts: [],

    showToast: (message: string, type: ToastType = 'info') => {
        const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        const newToast: Toast = {
            id,
            message,
            type,
            createdAt: Date.now(),
        };

        set((state) => ({
            toasts: [...state.toasts, newToast],
        }));

        // Auto-remove after 5 seconds (matching main.js)
        setTimeout(() => {
            get().removeToast(id);
        }, 5000);
    },

    removeToast: (id: string) => {
        set((state) => ({
            toasts: state.toasts.filter((toast) => toast.id !== id),
        }));
    },

    clearAll: () => {
        set({ toasts: [] });
    },
}));

// Convenience function for use outside React components
export function showToast(message: string, type: ToastType = 'info'): void {
    useToastStore.getState().showToast(message, type);
}
