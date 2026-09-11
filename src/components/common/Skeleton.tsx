import React from 'react';

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 animate-pulse space-y-4">
      <div className="w-full h-52 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
      <div className="space-y-2">
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/3"></div>
        <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded w-4/5"></div>
      </div>
      <div className="flex items-center justify-between pt-2">
        <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-1/4"></div>
        <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded w-8"></div>
      </div>
    </div>
  );
};
