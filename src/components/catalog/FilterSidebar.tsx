import React from 'react';
import { FilterState } from '../../types';
import { CATEGORIES } from '../../data/products';
import { Filter, RotateCcw, Star, Check } from 'lucide-react';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (updates: Partial<FilterState>) => void;
  onReset: () => void;
  productCount: number;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onReset,
  productCount
}) => {
  return (
    <aside className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center space-x-2 text-slate-900 dark:text-slate-100 font-bold">
          <Filter className="w-4 h-4 text-brand-500" />
          <span>Filters</span>
          <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded-full font-medium">
            {productCount} items
          </span>
        </div>
        <button
          onClick={onReset}
          className="text-xs text-brand-600 dark:text-brand-400 hover:underline flex items-center space-x-1 font-semibold"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Category Section */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Categories</h4>
        <div className="space-y-1">
          {CATEGORIES.map(cat => {
            const isSelected = filters.category === cat || (cat === 'All' && !filters.category);
            return (
              <button
                key={cat}
                onClick={() => onFilterChange({ category: cat === 'All' ? '' : cat })}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                  isSelected
                    ? 'bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                <span>{cat}</span>
                {isSelected && <Check className="w-4 h-4 text-brand-600 dark:text-brand-400" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Max Price</h4>
          <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
            ${filters.maxPrice}
          </span>
        </div>
        <input
          type="range"
          min="20"
          max="600"
          step="10"
          value={filters.maxPrice}
          onChange={e => onFilterChange({ maxPrice: Number(e.target.value) })}
          className="w-full accent-brand-600 cursor-pointer"
        />
        <div className="flex justify-between text-[11px] text-slate-400 mt-1">
          <span>$20</span>
          <span>$600</span>
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Customer Rating</h4>
        <div className="space-y-1">
          {[4, 3, 2].map(star => (
            <button
              key={star}
              onClick={() => onFilterChange({ minRating: filters.minRating === star ? 0 : star })}
              className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                filters.minRating === star
                  ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center space-x-1">
                <div className="flex text-amber-400">
                  {Array.from({ length: star }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span>& up</span>
              </div>
              {filters.minRating === star && <Check className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      </div>

      {/* Stock Filter */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
        <label className="flex items-center space-x-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={e => onFilterChange({ inStockOnly: e.target.checked })}
            className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-slate-300 dark:border-slate-700 dark:bg-slate-850"
          />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            In-Stock Items Only
          </span>
        </label>
      </div>
    </aside>
  );
};
