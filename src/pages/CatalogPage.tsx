import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterState, Product } from '../types';
import { api } from '../services/api';
import { ProductCard } from '../components/catalog/ProductCard';
import { FilterSidebar } from '../components/catalog/FilterSidebar';
import { ProductCardSkeleton } from '../components/common/Skeleton';
import { LayoutGrid, List, SlidersHorizontal, X, ArrowUpDown } from 'lucide-react';

const INITIAL_FILTERS: FilterState = {
  searchQuery: '',
  category: '',
  minPrice: 0,
  maxPrice: 600,
  minRating: 0,
  inStockOnly: false,
  sortBy: 'featured'
};

export const CatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<FilterState>(() => ({
    ...INITIAL_FILTERS,
    category: searchParams.get('category') || '',
    searchQuery: searchParams.get('q') || ''
  }));

  const [products, setProducts] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState<boolean>(false);

  // Sync URL query params with state
  useEffect(() => {
    const cat = searchParams.get('category') || '';
    const q = searchParams.get('q') || '';
    setFilters(prev => ({
      ...prev,
      category: cat,
      searchQuery: q
    }));
  }, [searchParams]);

  // Load products based on current filters
  useEffect(() => {
    let isMounted = true;
    const loadProducts = async () => {
      setLoading(true);
      const res = await api.getProducts(filters);
      if (isMounted) {
        setProducts(res.products);
        setTotalCount(res.total);
        setLoading(false);
      }
    };
    loadProducts();
    return () => {
      isMounted = false;
    };
  }, [filters]);

  const handleFilterUpdate = (updates: Partial<FilterState>) => {
    setFilters(prev => {
      const next = { ...prev, ...updates };
      // Update URL params if category or search query changed
      const newParams = new URLSearchParams(searchParams);
      if ('category' in updates) {
        if (updates.category) newParams.set('category', updates.category);
        else newParams.delete('category');
      }
      if ('searchQuery' in updates) {
        if (updates.searchQuery) newParams.set('q', updates.searchQuery);
        else newParams.delete('q');
      }
      setSearchParams(newParams, { replace: true });
      return next;
    });
  };

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
    setSearchParams({}, { replace: true });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            Hardware Catalog
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Browse our full range of developer essentials and smart tech gear ({totalCount} items)
          </p>
        </div>

        {/* View Controls & Sort */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          {/* Mobile filter toggle button */}
          <button
            onClick={() => setIsMobileFiltersOpen(true)}
            className="lg:hidden flex items-center space-x-1.5 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </button>

          {/* Sort Dropdown */}
          <div className="flex items-center space-x-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-1.5 shadow-sm text-xs font-medium">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={filters.sortBy}
              onChange={e => handleFilterUpdate({ sortBy: e.target.value as FilterState['sortBy'] })}
              className="bg-transparent text-slate-800 dark:text-slate-200 focus:outline-none cursor-pointer pr-1"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-desc">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>
          </div>

          {/* Grid / List view toggle */}
          <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm'
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
              }`}
              title="Grid view"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm'
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
              }`}
              title="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Active Filter Chips */}
      {(filters.category || filters.searchQuery || filters.minRating > 0 || filters.inStockOnly || filters.maxPrice < 600) && (
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs font-semibold text-slate-400">Active filters:</span>
          {filters.category && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-medium bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
              <span>Category: {filters.category}</span>
              <button onClick={() => handleFilterUpdate({ category: '' })}><X className="w-3 h-3 ml-1" /></button>
            </span>
          )}
          {filters.searchQuery && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-medium bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
              <span>Search: &quot;{filters.searchQuery}&quot;</span>
              <button onClick={() => handleFilterUpdate({ searchQuery: '' })}><X className="w-3 h-3 ml-1" /></button>
            </span>
          )}
          {filters.maxPrice < 600 && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-medium bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
              <span>Under ${filters.maxPrice}</span>
              <button onClick={() => handleFilterUpdate({ maxPrice: 600 })}><X className="w-3 h-3 ml-1" /></button>
            </span>
          )}
          {filters.minRating > 0 && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-medium bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
              <span>{filters.minRating}+ Stars</span>
              <button onClick={() => handleFilterUpdate({ minRating: 0 })}><X className="w-3 h-3 ml-1" /></button>
            </span>
          )}
          {filters.inStockOnly && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-medium bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
              <span>In Stock</span>
              <button onClick={() => handleFilterUpdate({ inStockOnly: false })}><X className="w-3 h-3 ml-1" /></button>
            </span>
          )}
          <button
            onClick={handleResetFilters}
            className="text-xs font-semibold text-rose-500 hover:underline ml-2"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Main Catalog Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block lg:col-span-3 sticky top-24">
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterUpdate}
            onReset={handleResetFilters}
            productCount={totalCount}
          />
        </div>

        {/* Product Grid / List */}
        <div className="lg:col-span-9">
          {loading ? (
            <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {Array.from({ length: 6 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                <SlidersHorizontal className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">No matching products found</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                We couldn&apos;t find any gear matching your current filter configuration. Try broadening your criteria or reset filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm rounded-xl shadow-md transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {products.map(product => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
          <div
            onClick={() => setIsMobileFiltersOpen(false)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          <div className="fixed inset-y-0 left-0 max-w-full flex">
            <div className="w-screen max-w-xs bg-white dark:bg-slate-900 shadow-2xl p-5 overflow-y-auto flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">Filter Gear</h3>
                  <button onClick={() => setIsMobileFiltersOpen(false)} className="p-1 text-slate-400">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterSidebar
                  filters={filters}
                  onFilterChange={handleFilterUpdate}
                  onReset={handleResetFilters}
                  productCount={totalCount}
                />
              </div>
              <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className="w-full mt-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-xl shadow"
              >
                Show {totalCount} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
