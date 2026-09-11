import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProductsService } from '../data/products';
import { ProductGrid } from '../components/ProductGrid';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import { ArrowUpDown, RotateCcw, X } from 'lucide-react';

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [sortBy, setSortBy] = useState('featured');

  // Load product catalog data
  const loadProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProductsService();
      setProducts(data);
    } catch (err) {
      setError(err.message || 'Failed to retrieve products. Please check network.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // Sync state with URL query parameters
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
    const q = searchParams.get('search');
    if (q) {
      setSearchQuery(q);
    }
  }, [searchParams]);

  // Handle category change and update URL params
  const handleCategorySelect = category => {
    setSelectedCategory(category);
    const newParams = new URLSearchParams(searchParams);
    if (category && category !== 'All') {
      newParams.set('category', category);
    } else {
      newParams.delete('category');
    }
    setSearchParams(newParams);
  };

  // Handle search query change and update URL params
  const handleSearchChange = query => {
    setSearchQuery(query);
    const newParams = new URLSearchParams(searchParams);
    if (query.trim()) {
      newParams.set('search', query.trim());
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSortBy('featured');
    setSearchParams({});
  };

  // Compute filtered & sorted product list
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by Category
    if (selectedCategory && selectedCategory !== 'All') {
      result = result.filter(
        p => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by Search Query (Title, Description, Category)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        p =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 'featured'
        break;
    }

    return result;
  }, [products, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            Product Catalog
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Browse our complete inventory of premium hardware ({filteredProducts.length} items found)
          </p>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs font-semibold shadow-sm self-start sm:self-auto">
          <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
          <label htmlFor="sort-dropdown" className="sr-only">Sort products</label>
          <select
            id="sort-dropdown"
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="bg-transparent text-slate-800 dark:text-slate-200 focus:outline-none cursor-pointer pr-1"
          >
            <option value="featured">Sort by: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Customer Rating</option>
          </select>
        </div>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="space-y-4">
        <div className="max-w-md">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            placeholder="Search by keyword, product name, or category..."
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
        </div>
      </div>

      {/* Active Filter Chips */}
      {(selectedCategory !== 'All' || searchQuery) && (
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs font-semibold text-slate-400">Active Filters:</span>
          {selectedCategory !== 'All' && (
            <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
              <span>Category: {selectedCategory}</span>
              <button
                onClick={() => handleCategorySelect('All')}
                aria-label="Remove category filter"
                className="hover:text-brand-900"
              >
                <X className="w-3 h-3 ml-1" />
              </button>
            </span>
          )}
          {searchQuery && (
            <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
              <span>Search: &quot;{searchQuery}&quot;</span>
              <button
                onClick={() => handleSearchChange('')}
                aria-label="Clear search text"
                className="hover:text-brand-900"
              >
                <X className="w-3 h-3 ml-1" />
              </button>
            </span>
          )}
          <button
            onClick={handleResetFilters}
            className="text-xs font-bold text-rose-500 hover:underline flex items-center space-x-1 ml-2"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset All</span>
          </button>
        </div>
      )}

      {/* Product List Content */}
      <div>
        {loading && <Loading message="Retrieving catalog items..." />}
        {error && <ErrorMessage message={error} onRetry={loadProducts} />}
        {!loading && !error && (
          <ProductGrid
            products={filteredProducts}
            onResetFilters={handleResetFilters}
          />
        )}
      </div>
    </div>
  );
};
