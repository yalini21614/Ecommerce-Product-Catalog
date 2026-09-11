import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Star, ShieldCheck, Headphones, Watch, Laptop, Keyboard } from 'lucide-react';
import { getProductsService } from '../data/products';
import { ProductGrid } from '../components/ProductGrid';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';

export const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadFeatured = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProductsService();
      // Show first 4 items as featured
      setFeaturedProducts(data.slice(0, 4));
    } catch (err) {
      setError(err.message || 'Failed to load featured products.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeatured();
  }, []);

  const categoryHighlights = [
    { title: 'Audio & Acoustics', icon: Headphones, desc: 'ANC Wireless headphones and studio buds', query: 'Audio', bg: 'from-blue-500/10 to-indigo-500/10' },
    { title: 'Wearables & IoT', icon: Watch, desc: 'Titanium smartwatches with health sensors', query: 'Wearables', bg: 'from-emerald-500/10 to-teal-500/10' },
    { title: 'Mechanical Keyboards', icon: Keyboard, desc: 'Hot-swappable PBT compact keyboards', query: 'Accessories', bg: 'from-amber-500/10 to-orange-500/10' },
    { title: 'Displays & Monitors', icon: Laptop, desc: '34" Curved WQHD ultra-wide monitors', query: 'Electronics', bg: 'from-purple-500/10 to-pink-500/10' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Modern E-Commerce Product Catalog</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-[1.1]">
                High-Performance Tech Gear for Developers & Creators.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Discover top-tier audio equipment, smart wearables, mechanical keyboards, and 4K displays. Engineered with React 18, React Router, client-side filtering, and responsive design.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/products"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-xl shadow-brand-500/25 flex items-center justify-center space-x-2 hover:-translate-y-0.5 transition-all"
                >
                  <span>Explore All Products</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/categories"
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-base transition-all flex items-center justify-center space-x-2 shadow-sm"
                >
                  <span>Browse Categories</span>
                </Link>
              </div>

              {/* Trust Metric Stats */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800 max-w-md mx-auto lg:mx-0">
                <div>
                  <div className="text-2xl font-black text-slate-900 dark:text-slate-100">100%</div>
                  <div className="text-xs text-slate-500">Verified Quality</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 dark:text-slate-100">&lt; 100ms</div>
                  <div className="text-xs text-slate-500">Fast Navigation</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 dark:text-slate-100">4.9 ★</div>
                  <div className="text-xs text-slate-500">Customer Rating</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800 group bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80"
                    alt="Hero Tech Showcase"
                    className="w-full h-[430px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-500 text-[10px] font-extrabold uppercase">
                        Spotlight Item
                      </span>
                      <div className="flex items-center space-x-1 text-amber-400 text-xs font-bold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.8 (142 reviews)</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-white">Aura SoundPro Wireless ANC</h3>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xl font-black text-brand-300">$199.99</span>
                      <Link
                        to="/products/1"
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
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Same-Day Dispatch</div>
                    <div className="text-[11px] text-slate-500">Free courier express</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              Handpicked Selection
            </h2>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 mt-1">
              Featured Products
            </h3>
          </div>
          <Link
            to="/products"
            className="text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center space-x-1"
          >
            <span>View All ({featuredProducts.length}+)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loading && <Loading message="Loading featured products..." />}
        {error && <ErrorMessage message={error} onRetry={loadFeatured} />}
        {!loading && !error && <ProductGrid products={featuredProducts} />}
      </section>

      {/* Category Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Departments
          </h2>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            Shop by Category
          </h3>
          <p className="text-xs text-slate-500">Explore curated collections crafted for developers and power users</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryHighlights.map(cat => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.title}
                to={`/products?category=${encodeURIComponent(cat.query)}`}
                className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-brand-500/50 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.bg} text-brand-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-slate-100 group-hover:text-brand-600 transition-colors">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {cat.desc}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-bold text-brand-600 group-hover:translate-x-1 transition-transform">
                  <span>Browse Category</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};
