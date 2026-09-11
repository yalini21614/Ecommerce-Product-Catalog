import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  getProductByIdService,
  getProductsService
} from '../data/products';
import { useCart } from '../context/CartContext';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import { ProductCard } from '../components/ProductCard';
import {
  Star,
  ShoppingBag,
  Check,
  ChevronRight,
  ArrowLeft,
  Plus,
  Minus,
  Truck,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let isMounted = true;

    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const item = await getProductByIdService(id);
        if (isMounted) {
          setProduct(item);
          setQuantity(1);

          // Fetch related products in the same category
          const all = await getProductsService();
          const related = all
            .filter(p => p.category === item.category && p.id !== item.id)
            .slice(0, 4);
          setRelatedProducts(related);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Product not found.');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadData();
    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleBuyNow = () => {
    if (!product) return;
    addToCart(product, quantity);
    navigate('/cart');
  };

  if (loading) {
    return <Loading message="Loading product details..." />;
  }

  if (error || !product) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-4">
        <ErrorMessage message={error || 'Product could not be located.'} />
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 px-6 py-2.5 bg-brand-600 text-white rounded-xl text-xs font-bold shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Catalog</span>
        </Link>
      </div>
    );
  }

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-xs font-medium text-slate-500" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-brand-600 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/products" className="hover:text-brand-600 transition-colors">Products</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-brand-600 transition-colors">
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-800 dark:text-slate-200 font-semibold truncate max-w-xs">{product.title}</span>
      </nav>

      {/* Main Product Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Product Image Showcase */}
        <div className="lg:col-span-6">
          <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-brand-600 text-white text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                {product.badge}
              </span>
            )}
            {discountPercent > 0 && (
              <span className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                Save {discountPercent}%
              </span>
            )}
          </div>
        </div>

        {/* Product Information & Purchase Panel */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              {product.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 mt-1 leading-tight">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 mt-2.5">
              <div className="flex text-amber-400" aria-label={`Rating: ${product.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-slate-300 dark:text-slate-700'}`}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{product.rating}</span>
              <span className="text-xs text-slate-400">({product.reviewCount || 40} customer reviews)</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-baseline space-x-3 pt-2">
            <span className="text-3xl font-black text-slate-900 dark:text-slate-100">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-slate-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-full">
              In Stock ({product.stock || 15} units available)
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {product.description}
          </p>

          {/* Key Features */}
          {product.features && product.features.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Features:</h3>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quantity Controls & Action Buttons */}
          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity-stepper" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Quantity:
              </label>
              <div id="quantity-stepper" className="flex items-center border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 p-1">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 text-slate-500 hover:text-slate-800 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center font-bold text-xs text-slate-800 dark:text-slate-200">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(Math.min(product.stock || 20, quantity + 1))}
                  className="p-1.5 text-slate-500 hover:text-slate-800 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className={`py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2 active:scale-95 ${
                  added
                    ? 'bg-emerald-600 text-white'
                    : 'bg-brand-600 hover:bg-brand-700 text-white shadow-brand-500/20'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className="py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-black dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center"
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* Badges Box */}
          <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 space-y-2 text-xs text-slate-500">
            <div className="flex items-center space-x-2">
              <Truck className="w-4 h-4 text-brand-500" />
              <span>Free express shipping on all orders over $150</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Includes 2-year full hardware manufacturer warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <RotateCcw className="w-4 h-4 text-indigo-500" />
              <span>30-day money-back satisfaction guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="pt-12 border-t border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Related Hardware
            </h2>
            <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="text-xs font-bold text-brand-600 hover:underline">
              See more in {product.category} &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
