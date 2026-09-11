# ⚡ PulseCatalog — Modern E-Commerce Product Catalog

> **A Production-Ready, Full-Stack Web Development Capstone Project**  
> Built with **React.js**, **JavaScript (ES6+)**, **Tailwind CSS**, and **Vite**.

[![Deployment Status](https://img.shields.io/badge/Deployment-Vercel%20Ready-success?style=for-the-badge&logo=vercel)](https://vercel.com)
[![React Version](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Bundler-Vite%206-purple?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 📖 Project Description

**PulseCatalog** is an enterprise-grade E-Commerce Product Catalog web application developed as a final-year Computer Science portfolio capstone. The application addresses standard e-commerce workflows: instant product discovery, multi-category faceted filtering, client-side dynamic search, interactive product detail showcases, and real-time shopping cart calculations with persistent local storage.

The frontend is architected as a **Single Page Application (SPA)** using **React Router v6** with route-level code splitting (`React.lazy` + `Suspense`) to provide lightning-fast, sub-100ms transitions without full-page reloads.

---

## 🌟 Key Features

### 🛍️ Product Discovery & Catalog
- **Interactive Product Grid & Cards:** High-resolution product images, badges (`Best Seller`, `New`, `Sale`), department categories, real-time stock indicators, and customer star rating summaries.
- **Client-Side Live Search:** Instant keyword searching across product titles, descriptions, and categories.
- **Faceted Category Filters:** Interactive department tabs (`All`, `Audio`, `Wearables`, `Electronics`, `Accessories`).
- **Dynamic Sorting:** Sort by Featured, Price (Low to High), Price (High to Low), and Highest Rated.
- **Active Filter Chips:** One-click removal of active category or search filters.

### 🔍 Product Details Page (`/products/:id`)
- Deep-linked dynamic routing (`/products/:id`).
- High-res image display with promotional badges.
- Star rating breakdown with verified customer review counts.
- Dynamic stock availability counter.
- Quantity selector stepper (+ / -).
- Interactive "Add to Cart" and "Buy Now" actions.
- Content-based "Related Hardware" recommendations row.

### 🛒 Shopping Cart & Order Engine (`/cart`)
- Dedicated cart view with individual item subtotals, quantity adjustments, and remove actions.
- Gamified Free Express Shipping progress meter ($150 spend threshold).
- Real-time price breakdown: Subtotal, Shipping, 8% Sales Tax, and Grand Total.
- Clear cart option.
- Interactive Simulated Checkout with order confirmation screen and cart reset.
- Persistent `localStorage` sync: Cart data remains saved across browser refreshes and tab closures.

### 🎨 Modern UI/UX & Accessibility
- Fully responsive across Mobile, Tablet, and Desktop breakpoints.
- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`).
- Standard ARIA attributes (`aria-label`, `role="tablist"`, `aria-selected`, `aria-live`).
- Keyboard-friendly inputs and accessible buttons.
- Dedicated empty states, loading indicators, and error banners with retry triggers.

---

## 🛠️ Tech Stack

| Domain | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [React 18](https://react.dev/) | Component architecture, Hooks (`useState`, `useEffect`, `useMemo`, `useContext`) |
| **Language** | JavaScript (ES6+) | Modern JavaScript with JSX syntax |
| **Routing** | [React Router v6](https://reactrouter.com/) | Client-side declarative SPA routing with dynamic parameters |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) | Responsive design tokens, modern color palettes, and utility classes |
| **Bundler & HMR** | [Vite 6](https://vitejs.dev/) | High-speed Hot Module Replacement and Rollup-optimized production builds |
| **Icons** | [Lucide React](https://lucide.dev/) | Accessible, modern feather vector icons |
| **Deployment** | [Vercel](https://vercel.com) | Edge CDN hosting with SPA rewrite configuration |

---

## 📂 Project Structure

```
new project/
├── public/
│   ├── _redirects              # Netlify SPA fallback rule
│   └── favicon.svg             # Vector brand icon
├── src/
│   ├── assets/                 # Static media and graphics
│   ├── components/             # Reusable UI component library
│   │   ├── CategoryFilter.jsx  # Category tab filtering
│   │   ├── ErrorMessage.jsx    # Error banner with retry button
│   │   ├── Footer.jsx          # Semantic footer with navigation
│   │   ├── Loading.jsx         # Accessible loading spinner
│   │   ├── Navbar.jsx          # Responsive navigation & cart badge
│   │   ├── ProductCard.jsx     # Reusable product card
│   │   ├── ProductGrid.jsx     # Responsive product grid & empty state
│   │   └── SearchBar.jsx       # Search input with clear button
│   ├── context/
│   │   └── CartContext.jsx     # Global Cart state & localStorage sync
│   ├── data/
│   │   └── products.js         # Realistic product seed data & API service
│   ├── pages/
│   │   ├── About.jsx           # Architecture & capstone details
│   │   ├── Cart.jsx            # Shopping cart & checkout simulation
│   │   ├── Categories.jsx      # Department category showcase
│   │   ├── Contact.jsx         # Contact form & developer info
│   │   ├── Home.jsx            # Hero section & featured showcase
│   │   ├── NotFound.jsx        # 404 handler page
│   │   ├── ProductDetails.jsx  # Deep-linked product detail view
│   │   └── Products.jsx        # Searchable, filterable catalog
│   ├── styles/
│   │   └── index.css           # Tailwind directives & custom scrollbars
│   ├── App.jsx                 # Route-level code splitting (React.lazy)
│   └── main.jsx                # React 18 entry point
├── index.html                  # HTML5 entry with meta SEO tags
├── package.json                # Project dependencies and npm scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind styling tokens
├── vercel.json                 # Vercel SPA rewrite fallback configuration
├── vite.config.js              # Vite bundler & manual chunking config
└── README.md                   # University project documentation
```

---

## 💻 Installation & Local Development

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Step-by-Step Setup
1. **Navigate to the project directory:**
   ```bash
   cd "new project"
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   *The application will launch at `http://localhost:5173`.*

4. **Build for production:**
   ```bash
   npm run build
   ```
   *Generates minified, code-split production bundles in the `dist/` folder.*

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment Instructions (Vercel)

This project is pre-configured for zero-friction Vercel deployment using the included `vercel.json` rewrite file:

### Option 1: Deploy via GitHub (Recommended)
1. Initialize git and push to your GitHub account:
   ```bash
   git add .
   git commit -m "feat: complete professional e-commerce product catalog"
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin master
   ```
2. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
3. Click **"Add New"** ➔ **"Project"** and import your GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **"Deploy"**.
6. Vercel will build the project and provide a live public URL (e.g. `https://pulse-catalog.vercel.app`).

### Option 2: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 🔗 Live Demo & Screenshots

- **Live URL (Placeholder):** `https://ecommerce-product-catalog-eight.vercel.app/
- **GitHub Repository:** `https://github.com/yalini21614/Ecommerce-product-Catalog`

### 📸 Application Preview Placeholders
| Page | Preview |
| :--- | :--- |
| **Home Page** | *Modern hero section, trust badges, and featured hardware grid* |
| **Catalog Page** | *Real-time search, category chips, and price sorting* |
| **Product Detail** | *Gallery, specifications, quantity stepper, and related recommendations* |
| **Shopping Cart** | *Item quantities, free shipping progress bar, and order summary* |

---

## 🚀 Future Roadmap & Improvements

- [ ] **Backend Integration:** Connect to a Python FastAPI / Flask REST API backed by a PostgreSQL database.
- [ ] **Real Payment Gateway:** Integrate Stripe / Razorpay Webhooks for real credit card processing.
- [ ] **User Authentication:** Add JWT / Firebase authentication for personal user profiles and persistent order history.
- [ ] **PWA Support:** Add a service worker for offline catalog caching and installable progressive web app capabilities.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
