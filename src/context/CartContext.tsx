import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Product, CartItem } from '../types';
import { useToast } from './ToastContext';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedColor?: string) => void;
  removeFromCart: (productId: string, selectedColor?: string) => void;
  updateQuantity: (productId: string, quantity: number, selectedColor?: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  subtotal: number;
  discount: number;
  discountCode: string;
  appliedDiscountPercentage: number;
  applyDiscountCode: (code: string) => boolean;
  removeDiscountCode: () => void;
  shippingFee: number;
  taxAmount: number;
  grandTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'pulsetore_cart';
const DISCOUNT_STORAGE_KEY = 'pulsetore_discount';

const VALID_COUPONS: Record<string, number> = {
  SAVE10: 0.10, // 10% off
  STUDENT20: 0.20, // 20% off for students
  CAPSTONE50: 0.50 // 50% demo test code
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { showToast } = useToast();
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [discountCode, setDiscountCode] = useState<string>(() => {
    return localStorage.getItem(DISCOUNT_STORAGE_KEY) || '';
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (discountCode) {
      localStorage.setItem(DISCOUNT_STORAGE_KEY, discountCode);
    } else {
      localStorage.removeItem(DISCOUNT_STORAGE_KEY);
    }
  }, [discountCode]);

  const addToCart = (product: Product, quantity = 1, selectedColor?: string) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedColor === selectedColor
      );

      if (existingIndex > -1) {
        const nextCart = [...prev];
        const newQty = nextCart[existingIndex].quantity + quantity;
        if (newQty > product.stock) {
          showToast(`Cannot add more than ${product.stock} units of ${product.title}`, 'error');
          return prev;
        }
        nextCart[existingIndex].quantity = newQty;
        showToast(`Updated "${product.title}" quantity in cart!`, 'success');
        return nextCart;
      } else {
        if (quantity > product.stock) {
          showToast(`Only ${product.stock} available in stock`, 'error');
          return prev;
        }
        showToast(`Added "${product.title}" to cart!`, 'success');
        return [...prev, { product, quantity, selectedColor }];
      }
    });
  };

  const removeFromCart = (productId: string, selectedColor?: string) => {
    setCart(prev =>
      prev.filter(item => !(item.product.id === productId && item.selectedColor === selectedColor))
    );
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (productId: string, quantity: number, selectedColor?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedColor);
      return;
    }

    setCart(prev =>
      prev.map(item => {
        if (item.product.id === productId && item.selectedColor === selectedColor) {
          if (quantity > item.product.stock) {
            showToast(`Maximum available stock is ${item.product.stock}`, 'error');
            return item;
          }
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
    setDiscountCode('');
    localStorage.removeItem(CART_STORAGE_KEY);
    localStorage.removeItem(DISCOUNT_STORAGE_KEY);
  };

  const applyDiscountCode = (code: string): boolean => {
    const cleanCode = code.trim().toUpperCase();
    if (VALID_COUPONS[cleanCode]) {
      setDiscountCode(cleanCode);
      showToast(`Coupon "${cleanCode}" applied! ${VALID_COUPONS[cleanCode] * 100}% off`, 'success');
      return true;
    } else {
      showToast('Invalid coupon code. Try "SAVE10" or "STUDENT20"', 'error');
      return false;
    }
  };

  const removeDiscountCode = () => {
    setDiscountCode('');
    showToast('Promo code removed', 'info');
  };

  const totalItems = useMemo(() => cart.reduce((acc, i) => acc + i.quantity, 0), [cart]);

  const subtotal = useMemo(
    () => cart.reduce((acc, i) => acc + i.product.price * i.quantity, 0),
    [cart]
  );

  const appliedDiscountPercentage = discountCode ? (VALID_COUPONS[discountCode] || 0) : 0;
  const discount = useMemo(() => subtotal * appliedDiscountPercentage, [subtotal, appliedDiscountPercentage]);

  const shippingFee = useMemo(() => {
    if (subtotal === 0) return 0;
    // Free shipping over $150
    return subtotal >= 150 ? 0 : 15;
  }, [subtotal]);

  // Tax 8%
  const taxAmount = useMemo(() => (subtotal - discount) * 0.08, [subtotal, discount]);

  const grandTotal = useMemo(() => {
    if (subtotal === 0) return 0;
    return Math.max(0, subtotal - discount + shippingFee + taxAmount);
  }, [subtotal, discount, shippingFee, taxAmount]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        subtotal,
        discount,
        discountCode,
        appliedDiscountPercentage,
        applyDiscountCode,
        removeDiscountCode,
        shippingFee,
        taxAmount,
        grandTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
