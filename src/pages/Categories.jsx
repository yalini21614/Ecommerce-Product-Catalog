import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones, Watch, Laptop, Keyboard, ArrowRight, Layers } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export const Categories = () => {
  const categoryData = [
    {
      name: 'Audio',
      title: 'Audio & Acoustics',
      description: 'Active Noise-Cancelling headphones, wireless studio earbuds, and high-fidelity sound systems.',
      icon: Headphones,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      gradient: 'from-blue-600 to-indigo-700'
    },
    {
      name: 'Wearables',
      title: 'Smart Wearables & IoT',
      description: 'Titanium chassis smartwatches, health & biometric trackers, and sports tracking hardware.',
      icon: Watch,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
      gradient: 'from-emerald-600 to-teal-700'
    },
    {
      name: 'Electronics',
      title: 'Displays & Streaming',
      description: 'Ultra-wide 4K curved monitors, low-light streaming webcams, and workspace productivity displays.',
      icon: Laptop,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
      gradient: 'from-purple-600 to-pink-700'
    },
    {
      name: 'Accessories',
      title: 'Mechanical Keyboards & Gear',
      description: 'Hot-swappable mechanical keyboards, premium vegan leather desk mats, and commuter backpacks.',
      icon: Keyboard,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
      gradient: 'from-amber-600 to-orange-700'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>Curated Collections</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Product Categories
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
          Explore specialized departments optimized for developers, audio enthusiasts, and workstation setups.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categoryData.map(cat => {
          const Icon = cat.icon;
          const count = PRODUCTS.filter(p => p.category === cat.name).length;

          return (
            <Link
              key={cat.name}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="group relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Cover Image with gradient overlay */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/30">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-brand-300">
                    {count} Products Available
                  </span>
                  <h2 className="text-xl font-black text-white">{cat.title}</h2>
                </div>
              </div>

              {/* Description & Action */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {cat.description}
                </p>

                <div className="flex items-center justify-between text-xs font-bold text-brand-600 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span>Explore {cat.name} Gear</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
