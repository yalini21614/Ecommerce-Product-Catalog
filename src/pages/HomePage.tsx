import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Headphones,
  Laptop,
  Watch,
  Keyboard,
  Layers,
  Star
} from 'lucide-react';
import { Product } from '../types';
import { api } from '../services/api';
import { ProductCard } from '../components/catalog/ProductCard';
import { ProductCardSkeleton } from '../components/common/Skeleton';

export const HomePage: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      setLoading(true);
      const res = await api.getProducts({ sortBy: 'featured' });
      setFeaturedProducts(res.products.slice(0, 4));
      setLoading(false);
    };
    fetchFeatured();
  }, []);

  const categoryCards = [
    { title: 'Audio & Acoustics', icon: Headphones, count: '12+ Models', query: 'Audio', bg: 'from-blue-500/10 to-indigo-500/10' },
    { title: 'Wearables & IoT', icon: Watch, count: '8+ Gadgets', query: 'Wearables', bg: 'from-emerald-500/10 to-teal-500/10' },
    { title: 'Mechanical Keyboards', icon: Keyboard, count: '15+ Boards', query: 'Accessories', bg: 'from-amber-500/10 to-orange-500/10' },
    { title: 'Monitors & Displays', icon: Laptop, count: '6+ Displays', query: 'Electronics', bg: 'from-purple-500/10 to-pink-500/10' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider animate-bounce">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen Capstone E-Commerce Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-[1.1]">
                High-Performance Tech Gear for Modern Creators.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Engineered with modular React architecture, client-side routing, instant fuzzy filtering, and reactive state synchronization. Built to showcase enterprise web development standards.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/catalog"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-xl shadow-brand-500/25 flex items-center justify-center space-x-2 hover:-translate-y-0.5 transition-all"
                >
                  <span>Explore Product Catalog</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/admin"
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-base transition-all flex items-center justify-center space-x-2 shadow-sm"
                >
                  <ShieldCheck className="w-5 h-5 text-brand-500" />
                  <span>Admin Dashboard</span>
                </Link>
              </div>

              {/* Trust metric badges */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800 max-w-md mx-auto lg:mx-0">
                <div>
                  <div className="text-2xl font-black text-slate-900 dark:text-slate-100">99.9%</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">High Reliability</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 dark:text-slate-100">&lt; 100ms</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Client Routing</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 dark:text-slate-100">4.9 ★</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Student Reviews</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800 group bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80"
                    alt="Featured Gear"
                    className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-500 text-[10px] font-extrabold uppercase">
                        Spotlight Product
                      </span>
                      <div className="flex items-center space-x-1 text-amber-400 text-xs font-bold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.8 (140+ reviews)</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-white">Aura SoundPro Wireless ANC</h3>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xl font-black text-brand-300">$199.99</span>
                      <Link
                        to="/product/prod-1"
                        className="px-3 py-1.5 bg-white text-slate-900 text-xs font-bold rounded-xl hover:bg-brand-50 transition-colors"
                      >
                        View Details &rarr;
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl rounded-2xl p-3 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Instant Dispatch</div>
                    <div className="text-[11px] text-slate-500">Same-day shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Discovery Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              Browse by Discipline
            </h2>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 mt-1">
              Curated Hardware Categories
            </h3>
          </div>
          <Link
            to="/catalog"
            className="text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center space-x-1"
          >
            <span>See all items</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryCards.map(cat => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.title}
                to={`/catalog?category=${cat.query}`}
                className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-brand-500/60 hover:shadow-lg transition-all duration-200"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.bg} text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base text-slate-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {cat.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {cat.count}
                </p>
                <div className="mt-4 flex items-center text-xs font-bold text-brand-600 dark:text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore items</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              Handpicked Showcase
            </h2>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 mt-1">
              Trending Developer Gear
            </h3>
          </div>
          <Link
            to="/catalog"
            className="text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center space-x-1"
          >
            <span>View Full Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Student Capstone Architecture Showcase Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-indigo-900/50 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center space-x-2 text-xs font-bold text-brand-400 uppercase tracking-widest bg-brand-950/80 px-3 py-1 rounded-full border border-brand-800">
              <Layers className="w-3.5 h-3.5" />
              <span>Capstone Technical Spec</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-black leading-tight">
              Architected for Performance, Modularity, and Cloud Deployment
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Built following industry standards for single-page applications: route-level code splitting, persistent state stores, custom latency simulation, and pre-configured deployment manifests for Vercel and Netlify.
            </p>
            <div className="pt-2 flex flex-wrap gap-3 text-xs">
              <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 font-mono">React 18 + TS</span>
              <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 font-mono">Tailwind CSS</span>
              <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 font-mono">Vite Bundler</span>
              <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 font-mono">SPA Fallback Redirects</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
