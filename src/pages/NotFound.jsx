import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-20 h-20 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-600 flex items-center justify-center mx-auto">
        <Compass className="w-10 h-10" />
      </div>
      <span className="text-xs font-black uppercase tracking-widest text-brand-600">
        404 — Page Not Found
      </span>
      <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100">
        Lost in Cyberspace?
      </h1>
      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
        The page you are looking for doesn&apos;t exist or might have been removed. You can safely return to the home catalog.
      </p>
      <div>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-brand-500/20 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};
