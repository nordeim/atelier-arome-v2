"use client";

import { useEffect, useCallback } from 'react';
import { useCartStore, type CartItem } from '@/stores/cart-store';
import { showToast } from '@/stores/toast-store';

/**
 * Vial Drawer Component - Cart slide-out panel
 * Matches main.js lines 739-978: Cart & Vial Drawer System
 * Uses BEM classes from styles.css lines 3313-3971
 */
export function VialDrawer() {
    const {
        items,
        cartDrawerOpen,
        toggleCartDrawer,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal
    } = useCartStore();

    // Format currency matching main.js Utils.formatCurrency
    const formatCurrency = (amount: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    // Handle Escape key to close drawer
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape' && cartDrawerOpen) {
            toggleCartDrawer();
        }
    }, [cartDrawerOpen, toggleCartDrawer]);

    // Handle click outside to close
    const handleClickOutside = useCallback((e: MouseEvent) => {
        const drawer = document.querySelector('.vial-drawer');
        const cartButton = document.querySelector('[data-tooltip="Vial Collection"]');

        if (
            cartDrawerOpen &&
            drawer &&
            !drawer.contains(e.target as Node) &&
            cartButton &&
            !cartButton.contains(e.target as Node)
        ) {
            toggleCartDrawer();
        }
    }, [cartDrawerOpen, toggleCartDrawer]);

    // Add event listeners
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('click', handleClickOutside);

        // Lock body scroll when drawer is open
        if (cartDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('click', handleClickOutside);
            document.body.style.overflow = '';
        };
    }, [handleKeyDown, handleClickOutside, cartDrawerOpen]);

    // Handle quantity change
    const handleQuantityChange = (id: string, delta: number) => {
        const item = items.find(i => i.id === id);
        if (item) {
            updateQuantity(id, item.quantity + delta);
        }
    };

    // Handle checkout
    const handleCheckout = () => {
        if (items.length === 0) {
            showToast('Your collection vial is empty', 'warning');
            return;
        }

        showToast('Dispatching your essence collection to the atelier...', 'info');

        // Simulate API call
        setTimeout(() => {
            showToast('Your collection has been dispatched. The atelier will contact you shortly.', 'success');
            clearCart();
            toggleCartDrawer();
        }, 1000);
    };

    const cartCount = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <aside
            className={`vial-drawer ${cartDrawerOpen ? 'active' : ''}`}
            id="vialDrawer"
            aria-hidden={!cartDrawerOpen}
            aria-modal={cartDrawerOpen}
            role="dialog"
            aria-label="Collection vial"
        >
            <div className="vial-drawer__container">
                {/* Header */}
                <div className="vial-drawer__header">
                    <h2 className="vial-drawer__title">Collection Vial</h2>
                    <button
                        className="vial-drawer__close"
                        id="vialClose"
                        onClick={() => toggleCartDrawer()}
                        aria-label="Close collection vial"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="vial-drawer__content" id="vialContent">
                    {items.length === 0 ? (
                        // Empty state
                        <div className="vial-drawer__empty">
                            <div className="vial-drawer__empty-icon" aria-hidden="true">⚱</div>
                            <p className="vial-drawer__empty-text">Your collection vial awaits</p>
                        </div>
                    ) : (
                        // Cart items
                        <div className="vial-drawer__items">
                            {items.map((item) => (
                                <CartItemCard
                                    key={item.id}
                                    item={item}
                                    onQuantityChange={handleQuantityChange}
                                    onRemove={removeFromCart}
                                    formatCurrency={formatCurrency}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="vial-drawer__footer">
                    <div className="vial-drawer__total">
                        <span className="vial-drawer__total-label">Total</span>
                        <span className="vial-drawer__total-value">{formatCurrency(getCartTotal())}</span>
                    </div>
                    <button
                        className="vial-drawer__dispatch btn btn--primary"
                        onClick={handleCheckout}
                        disabled={items.length === 0}
                    >
                        Dispatch to Atelier
                    </button>
                </div>
            </div>
        </aside>
    );
}

/**
 * Individual Cart Item Card
 * Matches main.js lines 864-914: createCartItemElement
 */
interface CartItemCardProps {
    item: CartItem;
    onQuantityChange: (id: string, delta: number) => void;
    onRemove: (id: string) => void;
    formatCurrency: (amount: number) => string;
}

function CartItemCard({ item, onQuantityChange, onRemove, formatCurrency }: CartItemCardProps) {
    return (
        <div className="cart-item" data-id={item.id}>
            <div className="cart-item__header">
                <div className="cart-item__info">
                    <h4 className="cart-item__name">{item.name}</h4>
                    <div className="cart-item__meta">
                        <span className="cart-item__latin">{item.latinName}</span>
                    </div>
                </div>
                <button
                    className="cart-item__remove"
                    onClick={() => onRemove(item.id)}
                    aria-label={`Remove ${item.name} from collection`}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>

            <div className="cart-item__details">
                <div className="cart-item__quantity">
                    <button
                        className="cart-item__quantity-btn"
                        onClick={() => onQuantityChange(item.id, -1)}
                        aria-label="Decrease quantity"
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <span className="cart-item__quantity-value">{item.quantity}</span>
                    <button
                        className="cart-item__quantity-btn"
                        onClick={() => onQuantityChange(item.id, 1)}
                        aria-label="Increase quantity"
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <span className="cart-item__quantity-label">phial{item.quantity !== 1 ? 's' : ''}</span>
                </div>

                <div className="cart-item__price">
                    <span className="cart-item__price-value">{formatCurrency(item.price * item.quantity)}</span>
                    <span className="cart-item__price-unit">{item.quantity} × {formatCurrency(item.price)}</span>
                </div>
            </div>
        </div>
    );
}
