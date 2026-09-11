import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Github, Linkedin, Mail, CheckCircle2, Shield, Truck, RotateCcw, Headphones } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200 mt-20">
      {/* Value Propositions */}
      <div className="border-b border-slate-200/80 dark:border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">Free Global Express</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">On all student orders over $150</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">2-Year Warranty</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">100% genuine guaranteed items</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">30-Day Free Return</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">No questions asked return policy</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">24/7 Dedicated Support</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Live chat & technical advisory</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center text-white shadow">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="text-xl font-black bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">
                PulseStore
              </span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Designed & developed as a final-year Web Development Capstone Project. Engineered using modern client-side routing, responsive UI paradigms, modular architecture, and production deployment optimizations.
            </p>
            <div className="flex items-center space-x-3 text-slate-500 dark:text-slate-400">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:student@university.edu" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/catalog" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">All Products</Link></li>
              <li><Link to="/catalog?category=Audio" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Audio Equipment</Link></li>
              <li><Link to="/catalog?category=Wearables" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Smart Wearables</Link></li>
              <li><Link to="/wishlist" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Saved Wishlist</Link></li>
              <li><Link to="/orders" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Order Tracking</Link></li>
            </ul>
          </div>

          {/* Architecture / Capstone Details */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wider">Tech Architecture</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400">React 18 + TS</span></li>
              <li><span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400">Tailwind CSS</span></li>
              <li><span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400">Vite Bundler</span></li>
              <li><span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400">React Router v6</span></li>
              <li><Link to="/admin" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline">Admin Console &rarr;</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wider">Stay Updated</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              Subscribe for exclusive student hardware discounts and firmware updates.
            </p>
            {subscribed ? (
              <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you! You are subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs rounded-xl transition-all shadow-sm shadow-brand-500/20"
                >
                  Join Newsletter
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 dark:border-slate-800/80 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} PulseStore. Final Year Capstone Project — All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <span>Client-side SPA with Vercel & Netlify Deployment Readiness</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
