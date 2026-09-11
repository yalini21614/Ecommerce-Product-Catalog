import { Product, FilterState, Review, Order } from '../types';
import { INITIAL_PRODUCTS } from '../data/products';
import { INITIAL_REVIEWS } from '../data/reviews';

const PRODUCTS_STORAGE_KEY = 'pulsetore_products';
const REVIEWS_STORAGE_KEY = 'pulsetore_reviews';
const ORDERS_STORAGE_KEY = 'pulsetore_orders';

// Helper to simulate realistic network delay
const delay = (ms: number = 300) => new Promise(resolve => setTimeout(resolve, ms));

export const getStoredProducts = (): Product[] => {
  try {
    const data = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
      return INITIAL_PRODUCTS;
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading products from localStorage:', error);
    return INITIAL_PRODUCTS;
  }
};

export const saveStoredProducts = (products: Product[]): void => {
  try {
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
  } catch (error) {
    console.error('Error saving products to localStorage:', error);
  }
};

export const api = {
  // Fetch all products with filter & sort options
  async getProducts(filters?: Partial<FilterState>): Promise<{ products: Product[]; total: number }> {
    await delay(250);
    let items = getStoredProducts();

    if (filters) {
      // Category
      if (filters.category && filters.category !== 'All') {
        items = items.filter(p => p.category.toLowerCase() === filters.category!.toLowerCase());
      }

      // Search Query
      if (filters.searchQuery && filters.searchQuery.trim() !== '') {
        const query = filters.searchQuery.toLowerCase().trim();
        items = items.filter(
          p =>
            p.title.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );
      }

      // Price Range
      if (typeof filters.minPrice === 'number') {
        items = items.filter(p => p.price >= filters.minPrice!);
      }
      if (typeof filters.maxPrice === 'number' && filters.maxPrice > 0) {
        items = items.filter(p => p.price <= filters.maxPrice!);
      }

      // Rating
      if (typeof filters.minRating === 'number' && filters.minRating > 0) {
        items = items.filter(p => p.rating >= filters.minRating!);
      }

      // In-stock
      if (filters.inStockOnly) {
        items = items.filter(p => p.stock > 0);
      }

      // Sorting
      if (filters.sortBy) {
        switch (filters.sortBy) {
          case 'price-asc':
            items.sort((a, b) => a.price - b.price);
            break;
          case 'price-desc':
            items.sort((a, b) => b.price - a.price);
            break;
          case 'rating-desc':
            items.sort((a, b) => b.rating - a.rating);
            break;
          case 'newest':
            items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            break;
          default:
            // 'featured'
            break;
        }
      }
    }

    return { products: items, total: items.length };
  },

  // Get single product by id
  async getProductById(id: string): Promise<Product | null> {
    await delay(200);
    const items = getStoredProducts();
    const found = items.find(p => p.id === id);
    return found || null;
  },

  // Get related products
  async getRelatedProducts(category: string, currentId: string, limit = 4): Promise<Product[]> {
    await delay(150);
    const items = getStoredProducts();
    return items
      .filter(p => p.category === category && p.id !== currentId)
      .slice(0, limit);
  },

  // Add new product (Admin)
  async createProduct(product: Omit<Product, 'id' | 'createdAt'>): Promise<Product> {
    await delay(300);
    const items = getStoredProducts();
    const newProduct: Product = {
      ...product,
      id: `prod-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    items.unshift(newProduct);
    saveStoredProducts(items);
    return newProduct;
  },

  // Update product (Admin)
  async updateProduct(id: string, updates: Partial<Product>): Promise<Product> {
    await delay(300);
    const items = getStoredProducts();
    const index = items.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Product not found');
    items[index] = { ...items[index], ...updates };
    saveStoredProducts(items);
    return items[index];
  },

  // Delete product (Admin)
  async deleteProduct(id: string): Promise<boolean> {
    await delay(300);
    let items = getStoredProducts();
    items = items.filter(p => p.id !== id);
    saveStoredProducts(items);
    return true;
  },

  // Get Reviews for product
  async getReviews(productId: string): Promise<Review[]> {
    await delay(150);
    try {
      const data = localStorage.getItem(REVIEWS_STORAGE_KEY);
      const reviewsMap: Record<string, Review[]> = data ? JSON.parse(data) : INITIAL_REVIEWS;
      return reviewsMap[productId] || [];
    } catch {
      return INITIAL_REVIEWS[productId] || [];
    }
  },

  // Add review to product
  async addReview(productId: string, review: Omit<Review, 'id' | 'date'>): Promise<Review> {
    await delay(300);
    let reviewsMap: Record<string, Review[]> = {};
    try {
      const data = localStorage.getItem(REVIEWS_STORAGE_KEY);
      reviewsMap = data ? JSON.parse(data) : { ...INITIAL_REVIEWS };
    } catch {
      reviewsMap = { ...INITIAL_REVIEWS };
    }

    const newReview: Review = {
      ...review,
      id: `rev-${Date.now()}`,
      date: new Date().toISOString().split('T')[0]
    };

    if (!reviewsMap[productId]) {
      reviewsMap[productId] = [];
    }
    reviewsMap[productId].unshift(newReview);
    localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviewsMap));

    // Recalculate product rating
    const currentProducts = getStoredProducts();
    const prodIdx = currentProducts.findIndex(p => p.id === productId);
    if (prodIdx !== -1) {
      const allRevs = reviewsMap[productId];
      const avgRating = allRevs.reduce((acc, r) => acc + r.rating, 0) / allRevs.length;
      currentProducts[prodIdx].rating = parseFloat(avgRating.toFixed(1));
      currentProducts[prodIdx].reviewCount = allRevs.length;
      saveStoredProducts(currentProducts);
    }

    return newReview;
  },

  // Orders handling
  getOrders(): Order[] {
    try {
      const data = localStorage.getItem(ORDERS_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveOrder(order: Order): void {
    const orders = this.getOrders();
    orders.unshift(order);
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));

    // Deduct stock
    const products = getStoredProducts();
    order.items.forEach(item => {
      const prod = products.find(p => p.id === item.productId);
      if (prod) {
        prod.stock = Math.max(0, prod.stock - item.quantity);
      }
    });
    saveStoredProducts(products);
  },

  updateOrderStatus(orderId: string, status: Order['status']): Order[] {
    const orders = this.getOrders();
    const order = orders.find(o => o.id === orderId);
    if (order) {
      order.status = status;
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    }
    return orders;
  }
};
