export type ProductCategory = "laundry" | "manufacturing";

export type ManufacturingSubcategory =
  | "mixing"
  | "filling"
  | "processing"
  | "handling"
  | "utilities"
  | "marking";

export interface ProductVariant {
  image: string;
  model?: string;
  description: string;
}

export interface Product {
  id: string;
  title: string;
  category: ProductCategory;
  subcategory?: ManufacturingSubcategory;
  variants: ProductVariant[];
  features: string[];
  color: string;
  capacity?: string;
  featured?: boolean;
}

// Laundry Equipment (existing products)
export const laundryProducts: Product[] = [
  {
    id: "washing-machines",
    title: "Industrial Washing Machines",
    category: "laundry",
    variants: [
      {
        image: "/products/washing-machine.png",
        description: "Washer-extractor with intuitive LCD interface, premium stainless steel construction, and fast fill/discharge system for maximum efficiency."
      },
      {
        image: "/products/washing-machine-imesa.png",
        model: "IMESA",
        description: "IMESA - The pinnacle of commercial laundry excellence. European precision engineering built for durability and superior performance."
      },
    ],
    capacity: "10-100 kg",
    features: ["Programmable cycles", "Low water consumption", "Stainless steel drum", "Energy efficient"],
    color: "from-blue-500 to-cyan-400",
    featured: true,
  },
  {
    id: "dryers",
    title: "Commercial Dryers",
    category: "laundry",
    variants: [
      {
        image: "/products/dryer.png",
        model: "ADC",
        description: "ADC commercial dryer engineered for rapid, energy-efficient drying. Delivers exceptional throughput with consistent, reliable performance."
      },
    ],
    capacity: "10-80 kg",
    features: ["Moisture sensors", "Reverse tumble", "Heat recovery", "Quick dry programs"],
    color: "from-orange-500 to-amber-400",
    featured: true,
  },
  {
    id: "dry-cleaning",
    title: "Dry Cleaning Machines",
    category: "laundry",
    variants: [
      {
        image: "/products/dry-cleaning.png",
        description: "State-of-the-art dry cleaning equipment using eco-friendly solvents. Ideal for delicate fabrics."
      },
      {
        image: "/products/washing-machine 3.png",
        model: "REALSTAR",
        description: "REALSTAR dry-cleaning system - engineered for maximum efficiency with gentle, powerful cleaning that keeps garments looking their best."
      },
    ],
    capacity: "8-40 kg",
    features: ["Eco-friendly solvents", "Gentle on fabrics", "Self-cleaning", "Low emissions"],
    color: "from-purple-500 to-violet-400",
    featured: true,
  },
];

// Manufacturing Equipment (new products)
export const manufacturingProducts: Product[] = [
  // Mixing & Blending
  {
    id: "ribbon-mixer",
    title: "Ribbon Mixer",
    category: "manufacturing",
    subcategory: "mixing",
    variants: [
      {
        image: "/products/manufacturing/mixing/ribbon-mixer-1.png",
        description: "Industrial ribbon mixer for uniform blending of dry powders and granules. Ideal for food, chemical, and pharmaceutical applications."
      },
      {
        image: "/products/manufacturing/mixing/ribbon-mixer-2.png",
        description: "Heavy-duty ribbon mixer with enhanced capacity for large-scale production. Features easy-clean design and variable speed control."
      },
    ],
    features: ["Uniform blending", "Stainless steel construction", "Variable speed control", "Easy cleaning"],
    color: "from-green-500 to-emerald-400",
    featured: true,
  },
  {
    id: "mixing-tank",
    title: "Stainless Steel SS316 Mixing Tank",
    category: "manufacturing",
    subcategory: "mixing",
    variants: [
      {
        image: "/products/manufacturing/mixing/mixing-tank-1.png",
        description: "Premium SS316 mixing tank for pharmaceutical and food-grade applications. Features jacketed design for temperature control."
      },
      {
        image: "/products/manufacturing/mixing/mixing-tank-2.png",
        description: "Large capacity SS316 mixing tank with agitator. Built to meet strict hygiene standards for sensitive products."
      },
    ],
    features: ["SS316 grade steel", "Jacketed design", "GMP compliant", "Temperature control"],
    color: "from-slate-500 to-gray-400",
  },
  {
    id: "homogenizer",
    title: "High Speed Homogenizer",
    category: "manufacturing",
    subcategory: "mixing",
    variants: [
      {
        image: "/products/manufacturing/mixing/homogenizer.png",
        description: "High-speed homogenizer for emulsification and dispersion. Perfect for cosmetics, pharmaceuticals, and food processing."
      },
    ],
    features: ["High shear mixing", "Variable speed", "Interchangeable heads", "Compact design"],
    color: "from-teal-500 to-cyan-400",
  },

  // Filling & Packaging
  {
    id: "cartoning-machine",
    title: "Cartoning Machine",
    category: "manufacturing",
    subcategory: "filling",
    variants: [
      {
        image: "/products/manufacturing/filling/cartoning-machine-1.png",
        description: "Automatic cartoning machine for efficient product packaging. Handles various carton sizes with quick changeover."
      },
      {
        image: "/products/manufacturing/filling/cartoning-machine-2.png",
        description: "High-speed cartoning system with integrated product feeding. Suitable for pharmaceutical and FMCG industries."
      },
    ],
    features: ["Automatic operation", "Quick changeover", "Multiple carton sizes", "High speed"],
    color: "from-indigo-500 to-blue-400",
  },
  {
    id: "flow-wrapping",
    title: "Flow Wrapping Machine",
    category: "manufacturing",
    subcategory: "filling",
    variants: [
      {
        image: "/products/manufacturing/filling/flow-wrapping-1.png",
        description: "Horizontal flow wrapping machine for food and non-food products. Provides hermetic sealing for extended shelf life."
      },
      {
        image: "/products/manufacturing/filling/flow-wrapping-2.png",
        description: "Advanced flow wrapper with servo-driven technology. Ensures precise packaging at high speeds."
      },
    ],
    features: ["Hermetic sealing", "Servo-driven", "Touch screen control", "Multiple pack styles"],
    color: "from-rose-500 to-pink-400",
  },
  {
    id: "liquid-filling",
    title: "Liquid Filling Machine",
    category: "manufacturing",
    subcategory: "filling",
    variants: [
      {
        image: "/products/manufacturing/filling/liquid-filling.png",
        description: "Precision liquid filling machine for bottles and containers. Handles various viscosities with accuracy."
      },
    ],
    features: ["Precision filling", "Multiple heads", "No-drip system", "Easy calibration"],
    color: "from-sky-500 to-blue-400",
  },
  {
    id: "auger-filler",
    title: "Auger Filler",
    category: "manufacturing",
    subcategory: "filling",
    variants: [
      {
        image: "/products/manufacturing/filling/auger-filler-1.png",
        description: "Auger filling machine for accurate powder dispensing. Ideal for spices, flour, and pharmaceutical powders."
      },
      {
        image: "/products/manufacturing/filling/auger-filler-2.png",
        description: "Semi-automatic auger filler with dust extraction. Provides consistent fills for free-flowing and non-free-flowing powders."
      },
    ],
    features: ["Accurate dispensing", "Dust extraction", "Adjustable speed", "Multiple auger sizes"],
    color: "from-amber-500 to-yellow-400",
  },

  // Processing & Milling
  {
    id: "hammer-mill",
    title: "Hammer Mill / Pulverizer",
    category: "manufacturing",
    subcategory: "processing",
    variants: [
      {
        image: "/products/manufacturing/processing/hammer-mill-1.png",
        description: "Industrial hammer mill for size reduction of various materials. Suitable for grains, spices, and chemicals."
      },
      {
        image: "/products/manufacturing/processing/hammer-mill-2.png",
        description: "Heavy-duty pulverizer with interchangeable screens. Achieves fine particle sizes for demanding applications."
      },
    ],
    features: ["Variable particle size", "Interchangeable screens", "Low maintenance", "High throughput"],
    color: "from-red-500 to-orange-400",
  },
  {
    id: "plodding-machine",
    title: "Plodding Machine",
    category: "manufacturing",
    subcategory: "processing",
    variants: [
      {
        image: "/products/manufacturing/processing/plodding-machine-1.png",
        description: "Soap plodding machine for continuous extrusion. Produces uniform soap bars with consistent density."
      },
      {
        image: "/products/manufacturing/processing/plodding-machine-2.png",
        description: "Duplex plodder for refined soap production. Features vacuum chamber for air-free, high-quality output."
      },
    ],
    features: ["Continuous extrusion", "Vacuum option", "Uniform output", "Durable construction"],
    color: "from-fuchsia-500 to-purple-400",
  },
  {
    id: "vibratory-mesh",
    title: "Vibratory Mesh / Sifter",
    category: "manufacturing",
    subcategory: "processing",
    variants: [
      {
        image: "/products/manufacturing/processing/vibratory-mesh-1.png",
        description: "Vibratory sifter for separating and grading materials. Ensures product quality through precise classification."
      },
      {
        image: "/products/manufacturing/processing/vibratory-mesh-2.png",
        description: "Multi-deck vibratory screen for high-capacity sifting. Handles multiple particle sizes simultaneously."
      },
    ],
    features: ["Precise classification", "Multi-deck option", "Easy screen change", "Low noise"],
    color: "from-lime-500 to-green-400",
  },

  // Material Handling
  {
    id: "transfer-pump",
    title: "Transfer Pump",
    category: "manufacturing",
    subcategory: "handling",
    variants: [
      {
        image: "/products/manufacturing/handling/transfer-pump-1.png",
        description: "Industrial transfer pump for moving liquids between vessels. Handles various viscosities safely."
      },
      {
        image: "/products/manufacturing/handling/transfer-pump-2.png",
        description: "Sanitary transfer pump for food and pharmaceutical applications. Meets hygiene standards."
      },
      {
        image: "/products/manufacturing/handling/transfer-pump-3.png",
        description: "Heavy-duty transfer pump for chemical processing. Corrosion-resistant construction for demanding environments."
      },
    ],
    features: ["Multiple viscosities", "Sanitary options", "Variable flow", "Self-priming"],
    color: "from-cyan-500 to-teal-400",
  },
  {
    id: "bucket-elevator",
    title: "Bucket Elevator",
    category: "manufacturing",
    subcategory: "handling",
    variants: [
      {
        image: "/products/manufacturing/handling/bucket-elevator.png",
        description: "Vertical bucket elevator for efficient material transport. Moves bulk materials between processing levels."
      },
    ],
    features: ["Vertical transport", "High capacity", "Gentle handling", "Low maintenance"],
    color: "from-stone-500 to-neutral-400",
  },

  // Utilities
  {
    id: "generator",
    title: "Generator",
    category: "manufacturing",
    subcategory: "utilities",
    variants: [
      {
        image: "/products/manufacturing/utilities/generator-1.png",
        description: "Industrial diesel generator for reliable backup power. Ensures uninterrupted production during outages."
      },
      {
        image: "/products/manufacturing/utilities/generator-2.png",
        description: "Heavy-duty generator set with automatic transfer switch. Silent operation and fuel-efficient design."
      },
    ],
    features: ["Automatic transfer", "Silent operation", "Fuel efficient", "Remote monitoring"],
    color: "from-yellow-500 to-amber-400",
  },
  {
    id: "air-compressor",
    title: "Air Compressor",
    category: "manufacturing",
    subcategory: "utilities",
    variants: [
      {
        image: "/products/manufacturing/utilities/air-compressor-1.png",
        description: "Industrial air compressor for pneumatic equipment. Provides consistent air pressure for production lines."
      },
      {
        image: "/products/manufacturing/utilities/air-compressor-2.png",
        description: "Oil-free air compressor for sensitive applications. Ideal for food and pharmaceutical manufacturing."
      },
    ],
    features: ["Oil-free option", "Variable speed", "Low noise", "Energy efficient"],
    color: "from-blue-500 to-indigo-400",
  },
  {
    id: "water-purifier",
    title: "Water Purifier",
    category: "manufacturing",
    subcategory: "utilities",
    variants: [
      {
        image: "/products/manufacturing/utilities/water-purifier.png",
        description: "Industrial water purification system for process water. Removes impurities for consistent product quality."
      },
    ],
    features: ["Multi-stage filtration", "UV sterilization", "Auto-flush", "Quality monitoring"],
    color: "from-sky-500 to-cyan-400",
  },
  {
    id: "dust-collector",
    title: "Dust Collector",
    category: "manufacturing",
    subcategory: "utilities",
    variants: [
      {
        image: "/products/manufacturing/utilities/dust-collector-1.png",
        description: "Industrial dust collection system for clean air. Essential for worker safety and product quality."
      },
      {
        image: "/products/manufacturing/utilities/dust-collector-2.png",
        description: "Bag filter dust collector with automatic cleaning. High-efficiency particulate capture."
      },
      {
        image: "/products/manufacturing/utilities/dust-collector-3.png",
        description: "Cyclone dust collector for heavy-duty applications. Pre-separates large particles before final filtration."
      },
    ],
    features: ["High efficiency", "Auto-cleaning", "HEPA option", "Explosion-proof"],
    color: "from-gray-500 to-slate-400",
  },

  // Marking Equipment
  {
    id: "fibre-marking",
    title: "Fibre Marking Machine",
    category: "manufacturing",
    subcategory: "marking",
    variants: [
      {
        image: "/products/manufacturing/marking/fibre-marking-1.png",
        description: "Fibre laser marking machine for permanent product identification. Creates high-contrast marks on metals and plastics."
      },
      {
        image: "/products/manufacturing/marking/fibre-marking-2.png",
        description: "Desktop fibre laser marker for batch coding and serialization. Compact design for production line integration."
      },
    ],
    features: ["Permanent marking", "High speed", "No consumables", "PC controlled"],
    color: "from-violet-500 to-purple-400",
    featured: true,
  },
];

// Combined products
export const allProducts: Product[] = [...laundryProducts, ...manufacturingProducts];

// Helper functions
export function getProductsByCategory(category: ProductCategory): Product[] {
  return allProducts.filter((p) => p.category === category);
}

export function getProductsBySubcategory(subcategory: ManufacturingSubcategory): Product[] {
  return manufacturingProducts.filter((p) => p.subcategory === subcategory);
}

export function getFeaturedProducts(): Product[] {
  return allProducts.filter((p) => p.featured);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return allProducts.filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.features.some((f) => f.toLowerCase().includes(lowerQuery)) ||
      p.variants.some((v) => v.description.toLowerCase().includes(lowerQuery))
  );
}

// Category display names
export const categoryNames: Record<ProductCategory, string> = {
  laundry: "Laundry Equipment",
  manufacturing: "Manufacturing Equipment",
};

export const subcategoryNames: Record<ManufacturingSubcategory, string> = {
  mixing: "Mixing & Blending",
  filling: "Filling & Packaging",
  processing: "Processing & Milling",
  handling: "Material Handling",
  utilities: "Utilities",
  marking: "Marking Equipment",
};
