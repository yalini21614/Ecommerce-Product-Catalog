import React from 'react';
import { Search, X } from 'lucide-react';

export const SearchBar = ({ searchQuery, onSearchChange, placeholder = 'Search products by title, category...' }) => {
  return (
    <div className="relative w-full">
      <label htmlFor="catalog-search" className="sr-only">
        Search products
      </label>
      <input
        id="catalog-search"
        type="text"
        value={searchQuery}
        onChange={e => onSearchChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-800 dark:text-slate-100 placeholder-slate-400 transition-all"
      />
      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      {searchQuery && (
        <button
          onClick={() => onSearchChange('')}
          className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 absolute right-3 top-1/2 -translate-y-1/2"
          aria-label="Clear search input"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
