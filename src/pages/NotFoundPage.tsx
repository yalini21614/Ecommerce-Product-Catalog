import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-20 h-20 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto animate-spin-slow">
        <Compass className="w-10 h-10" />
      </div>
      <span className="text-sm font-extrabold text-brand-600 dark:text-brand-400 uppercase tracking-widest">
        404 — Route Not Found
      </span>
      <h1 className="text-4xl font-black text-slate-900 dark:text-slate-100">
        Lost in Cyberspace?
      </h1>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto">
        The page or resource you requested doesn&apos;t exist or might have been relocated. You can safely return to the home catalog.
      </p>
      <div>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-brand-500/20 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>
      </div>
    </div>
  );
};
