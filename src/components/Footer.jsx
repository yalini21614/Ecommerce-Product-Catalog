import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Shield, Truck, RotateCcw, Headphones } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors mt-20">
      {/* Value Proposition Highlights */}
      <div className="border-b border-slate-200 dark:border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">Free Express Delivery</h4>
              <p className="text-xs text-slate-500">Orders above $150</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">2-Year Warranty</h4>
              <p className="text-xs text-slate-500">100% genuine guaranteed</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 flex items-center justify-center">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">30-Day Free Return</h4>
              <p className="text-xs text-slate-500">Hassle-free guarantee</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 flex items-center justify-center">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">24/7 Tech Support</h4>
              <p className="text-xs text-slate-500">Expert assistance anytime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3 md:col-span-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <span className="font-black text-lg bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">
              PulseCatalog
            </span>
          </Link>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
            A production-ready E-Commerce Product Catalog application architected with React.js, React Router, client-side filtering, and responsive design for a final-year Computer Science portfolio.
          </p>
          <p className="text-xs text-slate-400">
            Built with React 18, JavaScript, Tailwind CSS, and Vite.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3">
            Quick Navigation
          </h4>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
            <li><Link to="/" className="hover:text-brand-600 transition-colors">Home Page</Link></li>
            <li><Link to="/products" className="hover:text-brand-600 transition-colors">All Products</Link></li>
            <li><Link to="/categories" className="hover:text-brand-600 transition-colors">Browse Categories</Link></li>
            <li><Link to="/cart" className="hover:text-brand-600 transition-colors">Shopping Cart</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3">
            Information
          </h4>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
            <li><Link to="/about" className="hover:text-brand-600 transition-colors">About Project</Link></li>
            <li><Link to="/contact" className="hover:text-brand-600 transition-colors">Contact Developer</Link></li>
            <li><span className="text-emerald-500 font-bold">Vercel Ready Deployment</span></li>
            <li><span className="text-slate-400">Version 1.0.0</span></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-100 dark:border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} PulseCatalog. Final Year Web Development Capstone Project.</p>
      </div>
    </footer>
  );
};
