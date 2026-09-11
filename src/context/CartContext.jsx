import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'pulsetore_cart_data';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Keep localStorage in sync
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (err) {
      console.error('Failed to persist cart to localStorage', err);
    }
  }, [cart]);

  // Add product to cart
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const nextCart = [...prevCart];
        const newQty = nextCart[existingIndex].quantity + quantity;
        nextCart[existingIndex] = {
          ...nextCart[existingIndex],
          quantity: Math.min(product.stock || 99, newQty)
        };
        return nextCart;
      } else {
        return [...prevCart, { product, quantity }];
      }
    });
  };

  // Update item quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeFromCart = productId => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Total item count for Navbar badge
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Subtotal calculation
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  // Free shipping over $150
  const shipping = subtotal > 0 && subtotal < 150 ? 15 : 0;
  const tax = subtotal * 0.08; // 8% sales tax
  const grandTotal = subtotal > 0 ? subtotal + shipping + tax : 0;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        subtotal,
        shipping,
        tax,
        grandTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
