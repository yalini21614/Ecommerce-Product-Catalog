import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
  Truck,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const Cart = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    shipping,
    tax,
    grandTotal
  } = useCart();

  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const freeShippingThreshold = 150;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingPercentage = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleCheckout = () => {
    setCheckoutComplete(true);
    clearCart();
  };

  // Order Confirmed Screen
  if (checkoutComplete) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-500 flex items-center justify-center mx-auto animate-in zoom-in-75 duration-300">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100">
          Order Successfully Placed!
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
          Thank you for exploring this Capstone demonstration. Your simulated order has been registered and the cart has been reset.
        </p>
        <div>
          <Link
            to="/products"
            onClick={() => setCheckoutComplete(false)}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-xs shadow-lg transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  // Empty Cart State
  if (!cart || cart.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100">
          Your Shopping Cart is Empty
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
          Looks like you haven&apos;t added any items to your cart yet. Explore our hardware catalog to find what you need!
        </p>
        <div>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-xs shadow-lg shadow-brand-500/20 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            Shopping Cart
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Review your selected hardware items ({cart.length} distinct item{cart.length > 1 ? 's' : ''})
          </p>
        </div>

        <button
          type="button"
          onClick={clearCart}
          className="text-xs font-bold text-rose-500 hover:underline flex items-center space-x-1 self-start sm:self-auto"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Clear Shopping Cart</span>
        </button>
      </div>

      {/* Free Shipping Progress Indicator */}
      <div className="bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-800 rounded-2xl p-4">
        <div className="flex items-center space-x-2 text-xs font-bold text-brand-700 dark:text-brand-300 mb-2">
          <Truck className="w-4 h-4" />
          <span>
            {remainingForFreeShipping > 0
              ? `Add $${remainingForFreeShipping.toFixed(2)} more to unlock FREE Express Shipping!`
              : '🎉 Congratulations! You have qualified for FREE Express Shipping!'}
          </span>
        </div>
        <div className="w-full bg-brand-200 dark:bg-brand-900 rounded-full h-2 overflow-hidden">
          <div
            className="bg-brand-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${freeShippingPercentage}%` }}
          />
        </div>
      </div>

      {/* Grid Layout: Cart Items vs Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Cart Items List */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">
            {cart.map(item => (
              <div
                key={item.product.id}
                className="p-4 sm:p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <Link to={`/products/${item.product.id}`} className="flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-20 h-20 rounded-xl object-cover bg-slate-100 dark:bg-slate-800"
                    />
                  </Link>
                  <div>
                    <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider">
                      {item.product.category}
                    </span>
                    <Link to={`/products/${item.product.id}`}>
                      <h2 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 hover:text-brand-600 transition-colors line-clamp-1">
                        {item.product.title}
                      </h2>
                    </Link>
                    <p className="text-xs text-slate-500 mt-0.5">
                      ${item.product.price.toFixed(2)} each
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 p-1">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1.5 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center text-xs font-bold text-slate-800 dark:text-slate-200">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1.5 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Line Total */}
                  <div className="text-right min-w-[75px]">
                    <span className="text-base font-black text-slate-900 dark:text-slate-100">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>

                  {/* Remove Button */}
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-2 text-slate-400 hover:text-rose-500 rounded-lg transition-colors"
                    aria-label={`Remove ${item.product.title} from cart`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              to="/products"
              className="text-xs font-bold text-brand-600 hover:underline flex items-center space-x-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>

        {/* Order Summary Card */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6 shadow-sm sticky top-24">
          <h2 className="text-lg font-black text-slate-900 dark:text-slate-100 pb-3 border-b border-slate-100 dark:border-slate-800">
            Order Summary
          </h2>

          <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-bold text-slate-900 dark:text-slate-100">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Shipping:</span>
              <span className="font-bold text-slate-900 dark:text-slate-100">
                {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax (8%):</span>
              <span className="font-bold text-slate-900 dark:text-slate-100">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-base font-black text-slate-900 dark:text-slate-100 pt-3 border-t border-slate-100 dark:border-slate-800">
              <span>Grand Total:</span>
              <span className="text-brand-600">${grandTotal.toFixed(2)}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCheckout}
            className="w-full py-4 px-6 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-brand-500/20 flex items-center justify-center space-x-2 transition-all active:scale-98"
          >
            <span>Complete Simulated Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Secure 256-bit Simulated Checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
};
