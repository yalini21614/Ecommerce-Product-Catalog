import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    title: 'Aura SoundPro Wireless ANC Headphones',
    description: 'Engineered with 40mm custom high-fidelity dynamic drivers, hybrid active noise cancellation, and up to 45 hours of immersive playtime. Features ultra-plush memory foam earcups and crystal clear voice pickup for calls.',
    price: 199.99,
    originalPrice: 249.99,
    category: 'Audio',
    rating: 4.8,
    reviewCount: 142,
    stock: 18,
    badge: 'Best Seller',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80'
    ],
    features: [
      'Hybrid Active Noise Cancellation (ANC)',
      '45-Hour Battery Life with USB-C Fast Charging',
      'Transparency Mode & Environmental Noise Cancellation',
      'Multipoint Bluetooth 5.3 connection'
    ],
    specs: {
      'Driver Size': '40mm Neodymium',
      'Frequency Response': '20Hz - 40kHz',
      'Bluetooth Version': '5.3',
      'Weight': '250g'
    },
    colors: ['Midnight Black', 'Silver Frost', 'Matte Navy'],
    createdAt: '2024-01-15'
  },
  {
    id: 'prod-2',
    title: 'Pulse Chrono Ultra Smartwatch',
    description: 'An advanced health and fitness smartwatch featuring a 1.9-inch always-on AMOLED retina display, ECG monitoring, SpO2 sensor, continuous heart rate tracking, and multi-sport GPS tracking wrapped in aerospace-grade titanium.',
    price: 279.00,
    originalPrice: 329.00,
    category: 'Wearables',
    rating: 4.9,
    reviewCount: 88,
    stock: 12,
    badge: 'New',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80'
    ],
    features: [
      '1.9" Super AMOLED Display (1000 nits)',
      'ECG, Heart Rate, and Blood Oxygen Monitoring',
      '50m Water Resistance (5 ATM)',
      'Up to 14 Days Typical Battery Life'
    ],
    specs: {
      'Display': '1.9" AMOLED 454x454',
      'Connectivity': 'Bluetooth 5.2 / GPS / GLONASS',
      'Battery': '420mAh (up to 14 days)',
      'Case Material': 'Grade 5 Titanium'
    },
    colors: ['Titanium Grey', 'Obsidian Black', 'Desert Gold'],
    createdAt: '2024-02-01'
  },
  {
    id: 'prod-3',
    title: 'Lumix ErgoCraft Mechanical Keyboard',
    description: 'Crafted for developers, creators, and enthusiasts. Features hot-swappable mechanical switches, CNC machined aluminum chassis, South-facing RGB backlighting, and gasket-mounted acoustic sound dampening.',
    price: 149.50,
    originalPrice: 179.99,
    category: 'Accessories',
    rating: 4.7,
    reviewCount: 95,
    stock: 25,
    badge: 'Sale',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80'
    ],
    features: [
      'Hot-swappable PCB (3-pin & 5-pin)',
      'Pre-lubed Gateron Pro Yellow switches',
      'Tri-mode connectivity (2.4GHz / BT 5.0 / Type-C)',
      'Double-shot PBT Keycaps (Cherry profile)'
    ],
    specs: {
      'Layout': '75% Compact (82 Keys)',
      'Plate': 'Polycarbonate with Poron Gaskets',
      'Battery': '4000mAh Lithium-ion',
      'Weight': '1.15 kg'
    },
    colors: ['Classic Charcoal', 'Retro Beige', 'Cyber Neon'],
    createdAt: '2024-01-20'
  },
  {
    id: 'prod-4',
    title: 'Veloce 4K Ultra-Wide Curved Monitor 34"',
    description: 'Immerse in crystal clarity with 3440 x 1440 WQHD resolution, 165Hz refresh rate, 1ms response time, and 1500R curvature. Tailored for software engineering multitasking, creative video editing, and immersive gaming.',
    price: 499.00,
    originalPrice: 599.00,
    category: 'Electronics',
    rating: 4.6,
    reviewCount: 64,
    stock: 7,
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
      'https://images.unsplash.com/photo-1547119957-637f8679db1e?w=800&q=80'
    ],
    features: [
      '34" UltraWide WQHD (3440 x 1440) 21:9',
      '165Hz Refresh Rate & 1ms MPRT',
      'HDR400 with 99% sRGB color gamut',
      'USB-C 90W Power Delivery and KVM switch'
    ],
    specs: {
      'Panel Type': 'IPS Curve (1500R)',
      'Brightness': '400 nits (peak)',
      'Ports': '2x HDMI 2.1, 1x DP 1.4, 1x USB-C',
      'VESA Mount': '100x100mm'
    },
    colors: ['Matte Black', 'Arctic White'],
    createdAt: '2024-02-10'
  },
  {
    id: 'prod-5',
    title: 'Aerolite Stealth Ergonomic Backpack',
    description: 'Weatherproof urban commuter backpack with dedicated 16-inch padded laptop sleeve, magnetic Fidlock buckles, hidden RFID security pockets, and ergonomic airflow back support channel.',
    price: 89.95,
    originalPrice: 110.00,
    category: 'Accessories',
    rating: 4.8,
    reviewCount: 110,
    stock: 30,
    badge: 'Best Seller',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80'
    ],
    features: [
      'Cordura 500D Waterproof Fabric',
      'TSA-friendly 180° lay-flat laptop compartment',
      'Luggage pass-through strap for easy travel',
      'Built-in USB external pass-through port'
    ],
    specs: {
      'Capacity': '24 Liters',
      'Dimensions': '46 x 30 x 18 cm',
      'Weight': '0.95 kg',
      'Zippers': 'YKK Weather-Resistant'
    },
    colors: ['Carbon Black', 'Slate Olive', 'Storm Gray'],
    createdAt: '2024-01-10'
  },
  {
    id: 'prod-6',
    title: 'Nova Pods Pro True Wireless Earbuds',
    description: 'Pocket-sized studio quality sound with spatial 3D audio, active noise isolation, low-latency gaming mode, and IPX7 sweat/water resistance. Supports wireless Qi inductive charging.',
    price: 119.00,
    originalPrice: 139.99,
    category: 'Audio',
    rating: 4.5,
    reviewCount: 78,
    stock: 22,
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&q=80'
    ],
    features: [
      'Hi-Res Audio with LDAC support',
      '32 hours total playback with Qi charging case',
      '4-Mic beamforming setup with AI noise filtering',
      'Seamless auto-pairing and touch gestures'
    ],
    specs: {
      'Driver': '11mm Graphene Composite',
      'Waterproof': 'IPX7 certified',
      'Latency': '45ms Gaming Mode',
      'Weight': '4.2g per earbud'
    },
    colors: ['Pearl White', 'Matte Onyx', 'Pastel Sage'],
    createdAt: '2024-02-14'
  },
  {
    id: 'prod-7',
    title: 'Apex Studio 4K HDR Streaming Webcam',
    description: 'Stream, record, and conference like a pro. Features a 1/2-inch Sony STARVIS CMOS sensor, AI auto-framing face tracking, dual stereo studio microphones, and customizable hardware FOV.',
    price: 129.99,
    originalPrice: 159.99,
    category: 'Electronics',
    rating: 4.6,
    reviewCount: 47,
    stock: 15,
    badge: 'New',
    images: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80'
    ],
    features: [
      'True 4K UHD @ 30FPS or 1080p @ 60FPS',
      'Sony STARVIS Low-light enhancement sensor',
      'Integrated physical privacy shutter',
      'Omnidirectional dual beamforming mic array'
    ],
    specs: {
      'Field of View': '65°, 78°, or 90° adjustable',
      'Focus Type': 'Fast AI Autofocus',
      'Interface': 'Plug & Play USB 3.0 Type-C',
      'Mount': 'Universal monitor clip & tripod thread'
    },
    colors: ['Space Gray'],
    createdAt: '2024-02-18'
  },
  {
    id: 'prod-8',
    title: 'Strata Minimalist Walnut Desk Mat',
    description: 'Handcrafted premium vegetable-tanned Italian leather combined with natural sustainable Portuguese cork backing. Protects your desk surface while providing a silky-smooth mouse glide.',
    price: 45.00,
    originalPrice: 55.00,
    category: 'Home & Office',
    rating: 4.9,
    reviewCount: 130,
    stock: 40,
    images: [
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80'
    ],
    features: [
      'Dual-sided design (Full-grain Leather / Natural Cork)',
      'Waterproof, scratch-resistant surface',
      'Precision stitched edge guard prevents fraying',
      'Generous 90cm x 40cm surface coverage'
    ],
    specs: {
      'Dimensions': '900 x 400 x 2.5 mm',
      'Materials': 'Top-grain vegan leather & organic cork',
      'Care': 'Wipe clean with damp cloth'
    },
    colors: ['Rich Walnut Brown', 'Midnight Black', 'Oak Tan'],
    createdAt: '2024-01-05'
  }
];

export const CATEGORIES = [
  'All',
  'Electronics',
  'Audio',
  'Wearables',
  'Accessories',
  'Home & Office'
];
