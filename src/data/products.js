/**
 * Realistic E-Commerce Product Catalog Seed Data
 * Each product contains id, title, description, price, category, image, and rating.
 */
export const PRODUCTS = [
  {
    id: '1',
    title: 'Aura SoundPro Wireless ANC Headphones',
    description: 'Engineered with 40mm custom high-fidelity dynamic drivers, hybrid active noise cancellation, and up to 45 hours of immersive playtime. Ultra-plush memory foam earcups.',
    price: 199.99,
    originalPrice: 249.99,
    category: 'Audio',
    rating: 4.8,
    reviewCount: 142,
    stock: 18,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    badge: 'Best Seller',
    features: [
      'Hybrid Active Noise Cancellation (ANC)',
      '45-Hour Battery Life with USB-C Quick Charge',
      'Transparency Mode & Dual Mic Noise Reduction',
      'Multipoint Bluetooth 5.3 Connection'
    ]
  },
  {
    id: '2',
    title: 'Pulse Chrono Ultra Smartwatch',
    description: 'Advanced health & fitness smartwatch with a 1.9-inch always-on AMOLED display, optical heart rate, SpO2 tracking, multi-sport GPS, and aerospace-grade titanium frame.',
    price: 279.00,
    originalPrice: 329.00,
    category: 'Wearables',
    rating: 4.9,
    reviewCount: 88,
    stock: 12,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    badge: 'New',
    features: [
      '1.9" Super AMOLED Display (1000 nits)',
      'ECG, Heart Rate, and Blood Oxygen Monitoring',
      '50m Water Resistance (5 ATM)',
      'Up to 14 Days Battery Life'
    ]
  },
  {
    id: '3',
    title: 'Lumix ErgoCraft Mechanical Keyboard',
    description: 'Hot-swappable 75% mechanical keyboard with CNC-machined aluminum chassis, South-facing RGB backlighting, and gasket-mounted acoustic sound dampening.',
    price: 149.50,
    originalPrice: 179.99,
    category: 'Accessories',
    rating: 4.7,
    reviewCount: 95,
    stock: 25,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    badge: 'Sale',
    features: [
      'Hot-swappable PCB (3-pin & 5-pin compatible)',
      'Pre-lubed Gateron Pro switches',
      'Tri-mode connectivity (2.4G / Bluetooth / Type-C)',
      'Double-shot PBT Keycaps'
    ]
  },
  {
    id: '4',
    title: 'Veloce 4K Ultra-Wide Curved Monitor 34"',
    description: 'Experience panoramic clarity with 3440 x 1440 WQHD resolution, 165Hz refresh rate, 1ms response time, and 1500R curvature tailored for coding and multitasking.',
    price: 499.00,
    originalPrice: 599.00,
    category: 'Electronics',
    rating: 4.6,
    reviewCount: 64,
    stock: 7,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
    badge: 'Popular',
    features: [
      '34" UltraWide WQHD (3440 x 1440) 21:9',
      '165Hz Refresh Rate & 1ms Response Time',
      'HDR400 with 99% sRGB color accuracy',
      'USB-C 90W Power Delivery and KVM switch'
    ]
  },
  {
    id: '5',
    title: 'Aerolite Stealth Ergonomic Backpack',
    description: 'Weatherproof urban commuter backpack with dedicated 16-inch padded laptop sleeve, magnetic Fidlock buckles, hidden RFID security pockets, and ergonomic airflow back support.',
    price: 89.95,
    originalPrice: 110.00,
    category: 'Accessories',
    rating: 4.8,
    reviewCount: 110,
    stock: 30,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    badge: 'Best Seller',
    features: [
      'Cordura 500D Waterproof Fabric',
      'TSA-friendly 180° lay-flat laptop compartment',
      'Luggage pass-through strap for easy travel',
      'Built-in external USB pass-through port'
    ]
  },
  {
    id: '6',
    title: 'Nova Pods Pro True Wireless Earbuds',
    description: 'Pocket-sized studio sound with spatial 3D audio, active noise isolation, low-latency gaming mode, and IPX7 sweat/water resistance.',
    price: 119.00,
    originalPrice: 139.99,
    category: 'Audio',
    rating: 4.5,
    reviewCount: 78,
    stock: 22,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    badge: '',
    features: [
      'Hi-Res Audio with LDAC support',
      '32 hours total playback with Qi charging case',
      '4-Mic beamforming setup with AI noise filtering',
      'Seamless auto-pairing and touch gestures'
    ]
  },
  {
    id: '7',
    title: 'Apex Studio 4K HDR Streaming Webcam',
    description: 'Stream, record, and conference in true 4K UHD. Features a 1/2-inch Sony STARVIS CMOS sensor, AI auto-framing, dual stereo microphones, and physical privacy shutter.',
    price: 129.99,
    originalPrice: 159.99,
    category: 'Electronics',
    rating: 4.6,
    reviewCount: 47,
    stock: 15,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80',
    badge: 'New',
    features: [
      'True 4K UHD @ 30FPS or 1080p @ 60FPS',
      'Sony STARVIS Low-light sensor',
      'Physical built-in privacy slider',
      'Omnidirectional dual mic array'
    ]
  },
  {
    id: '8',
    title: 'Strata Minimalist Walnut Desk Mat',
    description: 'Handcrafted premium vegetable-tanned vegan leather combined with natural organic Portuguese cork backing. Waterproof, scratch-resistant, and provides ultra-smooth mouse gliding.',
    price: 45.00,
    originalPrice: 55.00,
    category: 'Accessories',
    rating: 4.9,
    reviewCount: 130,
    stock: 40,
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80',
    badge: 'Popular',
    features: [
      'Dual-sided design (Vegan Leather & Natural Cork)',
      'Waterproof, scratch-resistant surface',
      'Precision stitched anti-fray edge guard',
      'Generous 90cm x 40cm surface coverage'
    ]
  }
];

export const CATEGORIES = [
  'All',
  'Audio',
  'Wearables',
  'Electronics',
  'Accessories'
];

/**
 * Robust Product API service with simulated network latency,
 * error handling, and guaranteed fallback to local mock data.
 */
export async function getProductsService() {
  // Simulate network request delay (300ms)
  await new Promise(resolve => setTimeout(resolve, 300));
  return PRODUCTS;
}

export async function getProductByIdService(id) {
  await new Promise(resolve => setTimeout(resolve, 200));
  const product = PRODUCTS.find(p => p.id === String(id));
  if (!product) {
    throw new Error(`Product with ID "${id}" was not found.`);
  }
  return product;
}
