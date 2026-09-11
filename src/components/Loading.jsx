import React from 'react';

export const Loading = ({ message = 'Loading products...' }) => {
  return (
    <div className="py-20 flex flex-col items-center justify-center space-y-4" role="status" aria-live="polite">
      <div className="w-12 h-12 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin"></div>
      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{message}</p>
      <span className="sr-only">Loading content, please wait...</span>
    </div>
  );
};
