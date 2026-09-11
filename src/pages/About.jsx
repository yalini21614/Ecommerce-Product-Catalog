import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Code2, Cpu, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';

export const About = () => {
  const highlights = [
    { title: 'Modular Architecture', desc: 'Separation of concerns into reusable components, custom hooks, and context providers.' },
    { title: 'Client-Side Routing', desc: 'SPA navigation powered by React Router v6 with zero full page reload delays.' },
    { title: 'Reactive State Store', desc: 'Real-time cart synchronization, persistent localStorage cache, and dynamic pricing.' },
    { title: 'Performance Optimized', desc: 'Route-level code splitting with React.lazy and Suspense, Vite manual chunking, and lazy loaded assets.' }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
          <Code2 className="w-3.5 h-3.5" />
          <span>Final-Year Portfolio Project</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          About PulseCatalog
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          A production-grade Web Development Capstone Project built to demonstrate modern JavaScript, React.js architecture, and single-page application engineering standards.
        </p>
      </div>

      {/* Project Vision & Mission */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Project Objective & Architecture
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          The goal of this project is to build an intuitive, lightning-fast E-Commerce Product Catalog that addresses common UX bottlenecks: instant fuzzy search, responsive category filters, real-time cart calculations with coupon codes, and fluid mobile navigation without jarring browser reloads.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-xs text-slate-900 dark:text-slate-100">{item.title}</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
            <Code2 className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Frontend Foundation</h3>
          <p className="text-xs text-slate-500">
            React 18 with modern JavaScript (ES6+), JSX syntax, React Hooks, and component hierarchy.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Styling & UI</h3>
          <p className="text-xs text-slate-500">
            Tailwind CSS utility-first styling, Lucide React icons, and responsive breakpoints.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 flex items-center justify-center">
            <Rocket className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Build & Deployment</h3>
          <p className="text-xs text-slate-500">
            Vite 6 bundler, optimized Rollup chunking, and Vercel single-page application routing configurations.
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center pt-4">
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 px-8 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-brand-500/20 transition-all"
        >
          <span>Explore Live Catalog</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
