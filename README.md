# ⚡ PulseStore — Full-Stack Capstone E-Commerce Web Application

> **Web Development Capstone Project**  
> **Student:** Final Year Computer Science & Engineering  
> **Status:** Production-Ready • Fully Responsive • Deployed Architecture  

---

## 📌 Executive Summary & Abstract

**PulseStore** is an enterprise-grade, high-performance E-Commerce platform built to demonstrate end-to-end full-stack web engineering principles. The application bridges modern user-centric interfaces with robust client-side routing, modular component architecture, multi-tiered state management, and optimized asset bundling.

Designed with **React 18+**, **TypeScript**, **Tailwind CSS**, and **Vite**, PulseStore simulates real-world production environments including network latency simulation, dynamic stock allocation, persistent cart and wishlist states, multi-step checkout with instant payment authorization, and an operations management dashboard for store administrators.

---

## 🏛️ System Architecture

```mermaid
graph TD
    Client[Web Browser Client] -->|HTTP / HTTPS| CDN[CDN Edge Cache / Hosting]
    Client -->|React Router v6| Router[Client-Side Router]
    
    subgraph Frontend Architecture
        Router --> Home[HomePage]
        Router --> Catalog[CatalogPage]
        Router --> Product[ProductDetailPage]
        Router --> Cart[Cart & Checkout Flow]
        Router --> Orders[Order Tracking]
        Router --> Admin[Admin Portal]

        subgraph Global Reactive State
            CartContext[Cart Context]
            WishlistContext[Wishlist Context]
            ThemeContext[Theme Context (Dark/Light)]
            ToastContext[Notification Engine]
        end

        subgraph Service & Data Layer
            APIService[Simulated REST API Service Layer]
            LocalStorage[Browser Persistent Store]
        end
    end

    CartContext <--> LocalStorage
    WishlistContext <--> LocalStorage
    APIService <--> LocalStorage
```

---

## 🚀 Key Features & Deliverables

### 1. 🛍️ Modular Customer Catalog Experience
- **Faceted Search & Filtering:** Dynamic category filters, interactive price range sliders, minimum star ratings, and real-time stock availability toggles.
- **Debounced Live Autocomplete:** Instant search suggestions as the user types without triggering unnecessary re-renders or queries.
- **Dynamic Layout Switcher:** Seamless switching between Grid and List view layouts.
- **Sorting Engine:** Sort products by Featured, Price (Ascending/Descending), Top Rated, and Newest Arrivals.

### 2. 🔍 Rich Product Detail Engine (`/product/:id`)
- **Interactive Multi-Image Gallery:** Thumbnail picker with high-resolution active image preview.
- **Variant Selector:** Interactive color options with real-time stock synchronization.
- **Key Specifications & Features Checklist:** Hardware spec matrix for engineering comparison.
- **Verified Customer Review System:** Interactive review modal allowing users to post verified star ratings and feedback with real-time score recalculation.
- **Smart Related Gear Recommendations:** Content-based recommendation algorithm presenting relevant products in the same category.

### 3. 🛒 Cart, Coupons & Multi-Step Checkout Flow
- **Slide-Out Quick Cart Drawer + Full Cart View:** Fluid accessibility with quantity steppers and line-item removals.
- **Dynamic Promo Engine:** Supports coupon codes (e.g., `STUDENT20` for 20% off, `SAVE10` for 10% off).
- **Free Shipping Threshold Bar:** Gamified visual progress bar indicating remaining spend needed for free express shipping.
- **3-Step Checkout:** 
  1. Shipping Address verification.
  2. Courier delivery speed selection (Standard vs Priority Air Express).
  3. Secure simulated payment (Credit Card / UPI / Cash on Delivery).
- **Printable Invoices:** Instant generation of order IDs with printable receipt view (`window.print()`).

### 4. 📦 Live Order Lifecycle Tracking (`/orders`)
- Real-time progress timeline visualizing 4 stages: `Processing` ➔ `Confirmed` ➔ `Shipped` ➔ `Delivered`.

### 5. 🛠️ Merchant / Admin Operations Portal (`/admin`)
- **Real-Time KPI Dashboard:** High-level metrics for Total Store Revenue, Processed Orders Count, Active Catalog Items, and Low Stock Alerts.
- **Inventory CRUD:** Add new hardware products with image URLs, prices, stock, and promotional badges; inline quick-editing of stock levels and pricing; delete products.
- **Order Dispatch Management:** Transition order statuses to update customer tracking in real time.
- **Demo Reset Button:** One-click restoration of initial seed data for presentation defenses.

---

## ⚙️ Technology Stack & Justification

| Layer | Technology | Architectural Justification |
| :--- | :--- | :--- |
| **Language** | TypeScript | Strong typing prevents runtime errors, ensures strict interface compliance across domain models, and facilitates enterprise maintainability. |
| **Framework** | React 18+ | Declarative component model, React Hooks (`useMemo`, `useCallback`), and concurrent rendering features. |
| **Bundler / Build** | Vite 6 | Lightning-fast Hot Module Replacement (HMR), Rollup-based production chunking, and instant cold starts. |
| **Styling** | Tailwind CSS | Utility-first responsive design, modern dark-mode implementation via CSS classes, zero CSS bloat via PurgeCSS. |
| **Routing** | React Router v6 | Declarative client-side routing, URL search parameter synchronization, route guards, and 404 handling. |
| **Icons** | Lucide React | Clean, modern feather-based SVG icon suite. |
| **Deployment** | Vercel / Netlify | Edge CDN delivery with SPA rewrite fallback rules (`vercel.json` & `_redirects`). |

---

## 📦 Project Directory Structure

```
pulse-store-capstone/
├── public/
│   ├── _redirects            # Netlify client-side routing fallback rule
│   └── favicon.svg           # Brand SVG vector icon
├── src/
│   ├── components/
│   │   ├── common/           # Navbar, Footer, Skeleton loaders
│   │   ├── catalog/          # ProductCard (Grid/List), FilterSidebar
│   │   └── cart/             # CartDrawer, Cart items
│   ├── context/              # CartContext, WishlistContext, ThemeContext, ToastContext
│   ├── data/                 # Seed catalog dataset, reviews
│   ├── hooks/                # useDebounce custom hook
│   ├── pages/                # Home, Catalog, ProductDetail, Cart, Checkout, OrderSuccess, Orders, Wishlist, Admin, NotFound
│   ├── services/             # Simulated REST API layer & localStorage persistence
│   ├── types/                # Domain TypeScript interfaces (Product, Order, CartItem, Review)
│   ├── App.tsx               # Root component with route-level code splitting
│   ├── main.tsx              # StrictMode entrypoint
│   └── index.css             # Tailwind base & custom scrollbar directives
├── vercel.json               # Vercel SPA rewrite configuration
├── package.json              # Dependencies and build scripts
├── tailwind.config.js        # Design system tokens and dark mode configuration
└── vite.config.ts            # Rollup manual chunking & asset optimization
```

---

## 💻 Local Setup & Development Instructions

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Steps
1. **Clone or Navigate to the project root:**
   ```bash
   cd "new project"
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   *The application will launch at `http://localhost:5173`.*

4. **Create a production-ready optimized build:**
   ```bash
   npm run build
   ```

5. **Preview the production bundle locally:**
   ```bash
   npm run preview
   ```

---

## 🌐 Live Deployment Instructions

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub / GitLab.
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Framework preset: **Vite**.
5. Click **Deploy**. *(The included `vercel.json` ensures all deep links like `/product/prod-1` or `/checkout` route correctly without 404 errors).*

### Deploying to Netlify
1. Log in to [Netlify](https://www.netlify.com) and drag the `dist` folder into the Netlify Drop area, OR connect your GitHub repository.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. *(The included `public/_redirects` file automatically handles single-page routing).*

---

## 🎓 Viva Voce / Project Defense Q&A

**Q1: Why use client-side routing instead of standard multi-page MPA navigation?**  
*Answer:* Client-side routing intercepts browser navigation via the HTML5 History API. It loads the single-page application bundle once, and subsequent route transitions render asynchronously without a full page reload, resulting in sub-100ms transitions and preserving global client state (such as the cart and dark mode).

**Q2: How are assets and bundle sizes optimized in this project?**  
*Answer:* 
1. **Code Splitting & Lazy Loading:** Pages are loaded dynamically using `React.lazy()` and `Suspense`, ensuring users only download the code for the page they are viewing.
2. **Rollup Manual Chunking:** In `vite.config.ts`, vendor libraries (`react`, `react-dom`, `react-router-dom`) and icons (`lucide-react`) are partitioned into independent chunks for optimal browser caching.
3. **Tailwind Tree-Shaking:** Tailwind purges unused CSS rules during the build step, resulting in a minimal CSS footprint (<10KB).

**Q3: How does state persistence work without a dedicated SQL/NoSQL cloud server?**  
*Answer:* We implemented an asynchronous Service Layer (`src/services/api.ts`) that mirrors standard REST APIs with synthetic network latency (`setTimeout`). State mutations for orders, reviews, and inventory persist in browser `localStorage`, ensuring data survives tab closures, reloads, and offline demonstrations.
