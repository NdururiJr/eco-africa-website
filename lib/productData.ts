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

export interface ProductSpecifications {
  capacity?: string;
  power?: string;
  weight?: string;
  dimensions?: string;
  material?: string;
  voltage?: string;
  [key: string]: string | undefined;
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
  longDescription: string;
  specifications: ProductSpecifications;
  applications: string[];
  keywords: string[];
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
    longDescription: "Our industrial washing machines are engineered for high-volume commercial laundry operations across Kenya and East Africa. Available in capacities ranging from 10 kg to 100 kg, these washer-extractors feature intuitive LCD controls, premium stainless steel construction, and advanced water management systems that reduce consumption by up to 40%. Whether you operate a hotel laundry in Nairobi, a hospital in Kampala, or a commercial laundry service in Dar es Salaam, our machines deliver consistent, reliable performance. We offer models from leading European manufacturers including IMESA, backed by professional installation and after-sales support from Eco Africa Industries.",
    specifications: { capacity: "10-100 kg per cycle", power: "5.5-30 kW", voltage: "380-415V, 3-phase", material: "Stainless steel drum & housing", dimensions: "Varies by model" },
    applications: ["Hotel & hospitality laundry", "Hospital & healthcare", "Commercial laundry services", "Industrial workwear cleaning", "Textile manufacturing"],
    keywords: ["industrial washing machine Kenya", "commercial washer Kenya", "laundry machine for sale Nairobi", "IMESA washing machine East Africa", "hotel laundry equipment"],
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
    longDescription: "ADC commercial dryers deliver rapid, energy-efficient drying for high-throughput laundry operations in Kenya and across East Africa. With capacities from 10 kg to 80 kg, these dryers feature advanced moisture sensing technology that automatically stops the cycle when clothes are dry, preventing energy waste and fabric damage. The reverse tumble action ensures even drying while reducing tangling. Heat recovery systems capture and reuse exhaust heat, cutting energy costs significantly. Ideal for hotels, hospitals, and commercial laundry businesses looking for reliable, fast-drying performance with low operating costs.",
    specifications: { capacity: "10-80 kg per cycle", power: "3-18 kW", voltage: "380-415V, 3-phase", material: "Galvanized steel housing, stainless steel drum" },
    applications: ["Hotel & hospitality", "Hospital & healthcare", "Commercial laundry", "Uniform & workwear services"],
    keywords: ["commercial dryer Kenya", "industrial tumble dryer Nairobi", "ADC dryer East Africa", "laundry dryer for sale Kenya"],
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
    longDescription: "Our dry cleaning machines use state-of-the-art eco-friendly solvents to deliver exceptional cleaning for delicate fabrics, suits, wedding dresses, and specialty garments. Available in 8 kg to 40 kg capacities, these machines are ideal for dry cleaning shops, hotels, and fashion houses across Kenya and East Africa. The REALSTAR system offers European precision engineering with gentle yet powerful cleaning cycles that preserve garment quality. Built-in self-cleaning and solvent recovery systems minimize environmental impact while keeping operating costs low. Eco Africa Industries provides complete installation, training, and solvent supply for all dry cleaning equipment sold in Nairobi and the wider East African region.",
    specifications: { capacity: "8-40 kg per cycle", power: "4-15 kW", voltage: "380-415V, 3-phase", material: "Stainless steel construction" },
    applications: ["Dry cleaning shops", "Hotel valet services", "Fashion & garment care", "Wedding dress preservation", "Uniform cleaning"],
    keywords: ["dry cleaning machine Kenya", "REALSTAR dry cleaner Nairobi", "commercial dry cleaning equipment East Africa", "eco-friendly dry cleaning machine for sale"],
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
        image: "/New Images/Picture28.png",
        description: "Industrial ribbon mixer for uniform blending of dry powders and granules. Ideal for food, chemical, and pharmaceutical applications."
      },
      {
        image: "/New Images/Picture29.png",
        description: "Heavy-duty ribbon mixer with enhanced capacity for large-scale production. Features easy-clean design and variable speed control."
      },
    ],
    features: ["Uniform blending", "Stainless steel construction", "Variable speed control", "Easy cleaning"],
    color: "from-green-500 to-emerald-400",
    featured: true,
    longDescription: "The industrial ribbon mixer is a versatile blending solution designed for uniform mixing of dry powders, granules, and bulk solids. Widely used in food processing, chemical manufacturing, pharmaceutical production, and animal feed preparation across Kenya and East Africa. The ribbon agitator design ensures thorough mixing with minimal dead zones, while the stainless steel construction meets food-grade and GMP standards. Variable speed control allows precise adjustment for different materials and batch sizes. Easy-access discharge ports and tool-free cleaning make it ideal for multi-product facilities. Available for purchase in Nairobi with professional installation and commissioning by Eco Africa Industries.",
    specifications: { capacity: "100-5000 litres", power: "3-22 kW", material: "Stainless steel SS304/SS316", weight: "200-2000 kg" },
    applications: ["Food processing & spice blending", "Pharmaceutical powder mixing", "Chemical manufacturing", "Animal feed production", "Detergent manufacturing"],
    keywords: ["ribbon mixer Kenya", "industrial blender Nairobi", "powder mixing machine East Africa", "ribbon blender for sale Kenya"],
  },
  {
    id: "mixing-tank",
    title: "Stainless Steel SS316 Mixing Tank",
    category: "manufacturing",
    subcategory: "mixing",
    variants: [
      {
        image: "/Refined images/Whisk_c4afd80b94ba66fb56a4f80d9950aabadr.jpeg",
        description: "Premium SS316 mixing tank for pharmaceutical and food-grade applications. Features jacketed design for temperature control."
      },
      {
        image: "/New Images/Picture30.png",
        description: "Large capacity SS316 mixing tank with agitator. Built to meet strict hygiene standards for sensitive products."
      },
    ],
    features: ["SS316 grade steel", "Jacketed design", "GMP compliant", "Temperature control"],
    color: "from-slate-500 to-gray-400",
    longDescription: "Premium SS316 stainless steel mixing tanks designed for pharmaceutical, cosmetic, and food-grade manufacturing applications. These tanks feature jacketed designs for precise temperature control during mixing, heating, or cooling processes. GMP-compliant construction ensures they meet the strictest hygiene and quality standards required by regulatory bodies in Kenya and East Africa. Available with various agitator configurations including anchor, propeller, and high-shear options. The polished interior finish (Ra ≤ 0.8 μm) prevents product adhesion and simplifies CIP cleaning. Eco Africa Industries supplies these tanks in capacities from 50 litres to 10,000 litres with custom fabrication options available.",
    specifications: { capacity: "50-10,000 litres", material: "SS316L grade stainless steel", power: "1.5-15 kW (agitator)", weight: "100-3000 kg" },
    applications: ["Pharmaceutical manufacturing", "Cosmetics & personal care", "Food & beverage processing", "Chemical blending", "Detergent production"],
    keywords: ["stainless steel mixing tank Kenya", "SS316 mixing vessel Nairobi", "pharmaceutical mixing tank East Africa", "jacketed mixing tank for sale"],
  },
  {
    id: "homogenizer",
    title: "High Speed Homogenizer",
    category: "manufacturing",
    subcategory: "mixing",
    variants: [
      {
        image: "/New Images/Picture15.png",
        description: "High-speed homogenizer for emulsification and dispersion. Perfect for cosmetics, pharmaceuticals, and food processing."
      },
    ],
    features: ["High shear mixing", "Variable speed", "Interchangeable heads", "Compact design"],
    color: "from-teal-500 to-cyan-400",
    longDescription: "The high-speed homogenizer delivers powerful emulsification, dispersion, and homogenization for cosmetics, pharmaceuticals, food processing, and chemical manufacturing. Operating at speeds up to 28,000 RPM, this machine creates stable emulsions, fine dispersions, and uniform suspensions. Interchangeable stator/rotor heads allow optimization for different viscosities and particle size requirements. The compact bench-top and floor-standing models fit seamlessly into production lines across Kenya and East Africa. Ideal for manufacturing lotions, creams, sauces, paints, and pharmaceutical suspensions. Eco Africa Industries provides complete setup, calibration, and operator training.",
    specifications: { capacity: "5-500 litres per batch", power: "1.5-22 kW", material: "SS316 contact parts", weight: "15-300 kg" },
    applications: ["Cosmetics & skincare manufacturing", "Pharmaceutical emulsions", "Food sauces & dressings", "Paint & coatings", "Chemical dispersions"],
    keywords: ["homogenizer Kenya", "high speed mixer Nairobi", "emulsifier machine East Africa", "cosmetics manufacturing equipment Kenya"],
  },

  // Filling & Packaging
  {
    id: "cartoning-machine",
    title: "Cartoning Machine",
    category: "manufacturing",
    subcategory: "filling",
    variants: [
      {
        image: "/New Images/Picture4.png",
        description: "Automatic cartoning machine for efficient product packaging. Handles various carton sizes with quick changeover."
      },
      {
        image: "/New Images/Picture5.png",
        description: "High-speed cartoning system with integrated product feeding. Suitable for pharmaceutical and FMCG industries."
      },
    ],
    features: ["Automatic operation", "Quick changeover", "Multiple carton sizes", "High speed"],
    color: "from-indigo-500 to-blue-400",
    featured: true,
    longDescription: "The automatic cartoning machine is essential for pharmaceutical, food, and FMCG packaging lines across Kenya and East Africa. Designed for high-speed operation with quick changeover between carton sizes, this machine handles products ranging from blister packs and sachets to bottles and tubes. The integrated product feeding system ensures consistent throughput while the servo-driven mechanisms provide precise carton forming, product insertion, and sealing. Touch-screen HMI controls allow operators to save and recall product recipes for fast changeover. Available for purchase in Nairobi with professional installation, commissioning, and after-sales support from Eco Africa Industries.",
    specifications: { capacity: "Up to 120 cartons/min", power: "3-5 kW", voltage: "380-415V, 3-phase", weight: "800-1200 kg" },
    applications: ["Pharmaceutical packaging", "Food & beverage packaging", "Cosmetics & personal care", "FMCG product packaging"],
    keywords: ["cartoning machine Kenya", "automatic cartoner for sale Nairobi", "pharmaceutical packaging machine East Africa", "carton packing machine Kenya"],
  },
  {
    id: "flow-wrapping",
    title: "Flow Wrapping Machine",
    category: "manufacturing",
    subcategory: "filling",
    variants: [
      {
        image: "/New Images/Picture16.png",
        description: "Horizontal flow wrapping machine for food and non-food products. Provides hermetic sealing for extended shelf life."
      },
      {
        image: "/New Images/Picture25.png",
        description: "Advanced flow wrapper with servo-driven technology. Ensures precise packaging at high speeds."
      },
    ],
    features: ["Hermetic sealing", "Servo-driven", "Touch screen control", "Multiple pack styles"],
    color: "from-rose-500 to-pink-400",
    longDescription: "The horizontal flow wrapping machine provides versatile, high-speed packaging for food and non-food products. Servo-driven technology ensures precise film feeding and cutting, producing hermetically sealed packs that extend shelf life and protect product integrity. Suitable for wrapping biscuits, bread, soap bars, medical devices, and hardware items. The touch-screen control panel allows easy recipe management and quick format changes. Available in single-lane and multi-lane configurations to match your production volume. Eco Africa Industries supplies and installs flow wrapping machines across Kenya, Uganda, Tanzania, and the wider East African market.",
    specifications: { capacity: "Up to 300 packs/min", power: "2.5-5 kW", voltage: "220-380V", weight: "600-1000 kg" },
    applications: ["Bakery & confectionery", "Soap & detergent bars", "Medical device packaging", "Hardware & spare parts", "Snack food packaging"],
    keywords: ["flow wrapping machine Kenya", "horizontal wrapper Nairobi", "food packaging machine East Africa", "soap wrapping machine for sale Kenya"],
  },
  {
    id: "liquid-filling",
    title: "Liquid Filling Machine",
    category: "manufacturing",
    subcategory: "filling",
    variants: [
      {
        image: "/New Images/Picture14.png",
        description: "Precision liquid filling machine for bottles and containers. Handles various viscosities with accuracy."
      },
    ],
    features: ["Precision filling", "Multiple heads", "No-drip system", "Easy calibration"],
    color: "from-sky-500 to-blue-400",
    longDescription: "The precision liquid filling machine handles a wide range of viscosities from water-thin liquids to thick creams and gels. Multi-head configurations enable simultaneous filling of 2 to 12 containers per cycle, dramatically increasing throughput. The no-drip nozzle system prevents product waste and keeps the filling area clean. Easy digital calibration allows quick changeover between container sizes and fill volumes. Ideal for filling bottles, jerry cans, and containers with cooking oil, beverages, cleaning chemicals, cosmetics, and pharmaceutical liquids. Available for purchase in Kenya and East Africa with full installation support from Eco Africa Industries.",
    specifications: { capacity: "Up to 60 bottles/min (multi-head)", power: "1.5-3 kW", voltage: "220-380V", material: "SS316 contact parts" },
    applications: ["Beverage filling", "Cooking oil bottling", "Chemical & detergent filling", "Cosmetics & personal care", "Pharmaceutical liquids"],
    keywords: ["liquid filling machine Kenya", "bottle filler Nairobi", "cooking oil filling machine East Africa", "automatic filling machine for sale Kenya"],
  },
  {
    id: "auger-filler",
    title: "Auger Filler",
    category: "manufacturing",
    subcategory: "filling",
    variants: [
      {
        image: "/New Images/Picture18.png",
        description: "Auger filling machine for accurate powder dispensing. Ideal for spices, flour, and pharmaceutical powders."
      },
      {
        image: "/New Images/Picture17.png",
        description: "Semi-automatic auger filler with dust extraction. Provides consistent fills for free-flowing and non-free-flowing powders."
      },
    ],
    features: ["Accurate dispensing", "Dust extraction", "Adjustable speed", "Multiple auger sizes"],
    color: "from-amber-500 to-yellow-400",
    longDescription: "The auger filling machine provides accurate, consistent dispensing of powders and granules into bags, bottles, jars, and containers. Available in semi-automatic and fully automatic configurations, these fillers use precision auger screws to measure and dispense exact quantities of free-flowing and non-free-flowing powders. Built-in dust extraction systems maintain a clean working environment and prevent cross-contamination. Multiple interchangeable auger sizes accommodate different products and fill weights from 5 grams to 5 kilograms. Ideal for spice packaging, flour milling, pharmaceutical powders, and chemical packaging operations in Kenya and East Africa.",
    specifications: { capacity: "Up to 40 fills/min", power: "1.5-3 kW", voltage: "220-380V", weight: "150-400 kg" },
    applications: ["Spice & seasoning packaging", "Flour & grain packaging", "Pharmaceutical powder filling", "Chemical powder packaging", "Coffee & tea packaging"],
    keywords: ["auger filler Kenya", "powder filling machine Nairobi", "spice packaging machine East Africa", "automatic powder filler for sale Kenya"],
  },

  // Processing & Milling
  {
    id: "hammer-mill",
    title: "Hammer Mill / Pulverizer",
    category: "manufacturing",
    subcategory: "processing",
    variants: [
      {
        image: "/New Images/Picture19.png",
        description: "Industrial hammer mill for size reduction of various materials. Suitable for grains, spices, and chemicals."
      },
      {
        image: "/New Images/Picture27.png",
        description: "Heavy-duty pulverizer with interchangeable screens. Achieves fine particle sizes for demanding applications."
      },
    ],
    features: ["Variable particle size", "Interchangeable screens", "Low maintenance", "High throughput"],
    color: "from-red-500 to-orange-400",
    featured: true,
    longDescription: "The industrial hammer mill and pulverizer delivers efficient size reduction for a wide range of materials including grains, spices, chemicals, minerals, and biomass. Interchangeable screens allow precise control over the final particle size, from coarse grinding to fine pulverization. The heavy-duty rotor with hardened steel hammers provides high throughput with minimal maintenance. Suitable for flour milling, animal feed production, spice grinding, and pharmaceutical raw material processing. These machines are built to withstand continuous operation in demanding industrial environments across Kenya and East Africa. Eco Africa Industries provides complete installation, spare parts, and technical support.",
    specifications: { capacity: "100-2000 kg/hour", power: "7.5-55 kW", voltage: "380-415V, 3-phase", weight: "300-1500 kg" },
    applications: ["Flour & grain milling", "Animal feed processing", "Spice & herb grinding", "Pharmaceutical raw materials", "Mineral processing"],
    keywords: ["hammer mill Kenya", "pulverizer machine Nairobi", "grain milling equipment East Africa", "industrial grinder for sale Kenya"],
  },
  {
    id: "plodding-machine",
    title: "Plodding Machine",
    category: "manufacturing",
    subcategory: "processing",
    variants: [
      {
        image: "/New Images/Picture11.png",
        description: "Soap plodding machine for continuous extrusion. Produces uniform soap bars with consistent density."
      },
      {
        image: "/New Images/Picture12.png",
        description: "Duplex plodder for refined soap production. Features vacuum chamber for air-free, high-quality output."
      },
    ],
    features: ["Continuous extrusion", "Vacuum option", "Uniform output", "Durable construction"],
    color: "from-fuchsia-500 to-purple-400",
    longDescription: "The soap plodding machine enables continuous extrusion of soap bars with uniform density, shape, and quality. Available in simplex and duplex configurations, the duplex plodder features a vacuum chamber that removes air from the soap mass, producing dense, crack-free bars with a smooth finish. These machines handle various soap formulations including toilet soap, laundry soap, and specialty bars. The heavy-duty construction with hardened steel worms and barrels ensures long operational life in demanding production environments. Essential equipment for soap manufacturing factories in Kenya, Uganda, Tanzania, and across East Africa. Eco Africa Industries supplies complete soap production lines from mixing to cutting and stamping.",
    specifications: { capacity: "200-1000 kg/hour", power: "7.5-30 kW", voltage: "380-415V, 3-phase", weight: "500-2500 kg" },
    applications: ["Toilet soap manufacturing", "Laundry soap production", "Specialty soap bars", "Hotel amenity soaps", "Medicated soap production"],
    keywords: ["soap plodder Kenya", "plodding machine Nairobi", "soap making machine East Africa", "duplex plodder for sale Kenya", "soap production equipment"],
  },
  {
    id: "vibratory-mesh",
    title: "Vibratory Mesh / Sifter",
    category: "manufacturing",
    subcategory: "processing",
    variants: [
      {
        image: "/New Images/Picture1.png",
        description: "Vibratory sifter for separating and grading materials. Ensures product quality through precise classification."
      },
      {
        image: "/New Images/Picture2.png",
        description: "Multi-deck vibratory screen for high-capacity sifting. Handles multiple particle sizes simultaneously."
      },
    ],
    features: ["Precise classification", "Multi-deck option", "Easy screen change", "Low noise"],
    color: "from-lime-500 to-green-400",
    longDescription: "The vibratory mesh sifter provides precise material classification and separation for food processing, pharmaceutical, and chemical manufacturing. Available in single-deck and multi-deck configurations, these sifters efficiently separate materials into multiple particle size fractions simultaneously. The vibrating screen design ensures high throughput while preventing blinding and clogging. Quick-release screen tensioning allows fast changeover between mesh sizes. The enclosed design contains dust and maintains hygiene standards required for food and pharmaceutical applications. Low-noise operation makes it suitable for indoor installation. Available for purchase in Kenya and East Africa with complete installation support from Eco Africa Industries.",
    specifications: { capacity: "50-3000 kg/hour", power: "0.75-3 kW", voltage: "220-380V", weight: "50-500 kg" },
    applications: ["Flour & grain sifting", "Pharmaceutical powder classification", "Spice grading", "Chemical screening", "Sugar & salt processing"],
    keywords: ["vibratory sifter Kenya", "mesh sieve machine Nairobi", "industrial sifter East Africa", "powder sieving machine for sale Kenya"],
  },

  // Material Handling
  {
    id: "transfer-pump",
    title: "Transfer Pump",
    category: "manufacturing",
    subcategory: "handling",
    variants: [
      {
        image: "/New Images/Picture13.png",
        description: "Industrial transfer pump for moving liquids between vessels. Handles various viscosities safely."
      },
      {
        image: "/New Images/Picture24.png",
        description: "Sanitary transfer pump for food and pharmaceutical applications. Meets hygiene standards."
      },
      {
        image: "/New Images/Picture31.png",
        description: "Heavy-duty transfer pump for chemical processing. Corrosion-resistant construction for demanding environments."
      },
    ],
    features: ["Multiple viscosities", "Sanitary options", "Variable flow", "Self-priming"],
    color: "from-cyan-500 to-teal-400",
    featured: true,
    longDescription: "Industrial transfer pumps for moving liquids between vessels, tanks, and processing stages. Available in sanitary, chemical-resistant, and heavy-duty configurations to handle water-thin to highly viscous fluids. Sanitary models with SS316L construction and tri-clamp fittings meet food-grade and pharmaceutical hygiene requirements. Chemical-resistant models feature corrosion-proof materials for aggressive chemicals. Self-priming designs eliminate the need for external priming systems. Variable flow control allows precise adjustment for different production requirements. Essential equipment for any liquid processing operation in Kenya and East Africa, from beverage manufacturing to chemical plants.",
    specifications: { capacity: "Up to 50,000 litres/hour", power: "0.75-15 kW", voltage: "220-380V", material: "SS316L / Cast iron / PVDF" },
    applications: ["Beverage & dairy processing", "Chemical transfer", "Pharmaceutical manufacturing", "Cosmetics production", "Water treatment"],
    keywords: ["transfer pump Kenya", "industrial pump Nairobi", "sanitary pump East Africa", "liquid transfer pump for sale Kenya"],
  },
  {
    id: "bucket-elevator",
    title: "Bucket Elevator",
    category: "manufacturing",
    subcategory: "handling",
    variants: [
      {
        image: "/New Images/Picture26.png",
        description: "Vertical bucket elevator for efficient material transport. Moves bulk materials between processing levels."
      },
    ],
    features: ["Vertical transport", "High capacity", "Gentle handling", "Low maintenance"],
    color: "from-stone-500 to-neutral-400",
    longDescription: "The bucket elevator provides efficient vertical transport of bulk materials between processing levels in manufacturing facilities. Designed for gentle handling of granular materials, powders, and small components, the elevator moves product from ground-level hoppers to elevated processing equipment, storage silos, or packaging stations. The enclosed design prevents dust emissions and material contamination. Available in centrifugal and continuous discharge configurations to suit different material characteristics. Heavy-duty chains or belts with food-grade or industrial buckets ensure reliable operation. Ideal for flour mills, animal feed plants, cement works, and food processing facilities in Kenya and East Africa.",
    specifications: { capacity: "5-100 tonnes/hour", power: "3-22 kW", voltage: "380-415V, 3-phase", dimensions: "Custom heights up to 40m" },
    applications: ["Flour & grain milling", "Animal feed production", "Cement & building materials", "Food processing", "Chemical manufacturing"],
    keywords: ["bucket elevator Kenya", "vertical conveyor Nairobi", "bulk material elevator East Africa", "grain elevator for sale Kenya"],
  },

  // Utilities
  {
    id: "generator",
    title: "Generator",
    category: "manufacturing",
    subcategory: "utilities",
    variants: [
      {
        image: "/New Images/Picture20.png",
        description: "Industrial diesel generator for reliable backup power. Ensures uninterrupted production during outages."
      },
      {
        image: "/New Images/Picture21.png",
        description: "Heavy-duty generator set with automatic transfer switch. Silent operation and fuel-efficient design."
      },
    ],
    features: ["Automatic transfer", "Silent operation", "Fuel efficient", "Remote monitoring"],
    color: "from-yellow-500 to-amber-400",
    featured: true,
    longDescription: "Industrial diesel generators ensure uninterrupted production during power outages, which are common across Kenya and East Africa. These generator sets feature automatic transfer switches (ATS) that seamlessly switch to backup power within seconds of a mains failure, protecting sensitive production equipment and preventing costly downtime. Silent canopy enclosures reduce noise to acceptable levels for urban and industrial installations. Fuel-efficient engines minimize operating costs while remote monitoring systems allow real-time tracking of generator status, fuel levels, and maintenance schedules. Available in a range of capacities to match your factory's power requirements. Eco Africa Industries provides installation, commissioning, and maintenance services throughout Kenya.",
    specifications: { capacity: "20-500 kVA", power: "16-400 kW", voltage: "240/415V", weight: "500-5000 kg" },
    applications: ["Factory backup power", "Manufacturing plant power", "Hospital & healthcare", "Commercial buildings", "Data centres & telecom"],
    keywords: ["industrial generator Kenya", "diesel generator Nairobi", "backup power generator East Africa", "factory generator for sale Kenya", "ATS generator"],
  },
  {
    id: "air-compressor",
    title: "Air Compressor",
    category: "manufacturing",
    subcategory: "utilities",
    variants: [
      {
        image: "/New Images/Picture22.png",
        description: "Industrial air compressor for pneumatic equipment. Provides consistent air pressure for production lines."
      },
      {
        image: "/New Images/Picture23.png",
        description: "Oil-free air compressor for sensitive applications. Ideal for food and pharmaceutical manufacturing."
      },
    ],
    features: ["Oil-free option", "Variable speed", "Low noise", "Energy efficient"],
    color: "from-blue-500 to-indigo-400",
    longDescription: "Industrial air compressors provide reliable, consistent compressed air for pneumatic equipment, production lines, and manufacturing processes. Available in oil-lubricated and oil-free configurations, these compressors suit applications from general factory air to sensitive food and pharmaceutical manufacturing where oil contamination must be eliminated. Variable speed drive (VSD) models adjust motor speed to match actual air demand, reducing energy consumption by up to 35%. Low-noise designs allow installation near production areas without disrupting workers. Built for continuous duty operation in tropical climates. Eco Africa Industries supplies, installs, and services air compressors across Kenya and East Africa.",
    specifications: { capacity: "10-500 CFM", power: "5.5-250 kW", voltage: "380-415V, 3-phase", weight: "200-3000 kg" },
    applications: ["Pneumatic production lines", "Food & beverage manufacturing", "Pharmaceutical clean air", "Textile manufacturing", "Spray painting & coating"],
    keywords: ["air compressor Kenya", "industrial compressor Nairobi", "oil-free compressor East Africa", "factory air compressor for sale Kenya"],
  },
  {
    id: "water-purifier",
    title: "Water Purifier",
    category: "manufacturing",
    subcategory: "utilities",
    variants: [
      {
        image: "/New Images/Picture6.png",
        description: "Industrial water purification system for process water. Removes impurities for consistent product quality."
      },
      {
        image: "/New Images/Picture32.png",
        description: "Multi-column reverse osmosis water purification system with integrated control panel. Advanced multi-stage filtration for high-purity process water."
      },
    ],
    features: ["Multi-stage filtration", "UV sterilization", "Auto-flush", "Quality monitoring"],
    color: "from-sky-500 to-cyan-400",
    longDescription: "Industrial water purification systems deliver high-purity process water for manufacturing operations that demand consistent water quality. Multi-stage filtration including sediment removal, activated carbon, and reverse osmosis membranes removes impurities, dissolved solids, and microorganisms. UV sterilization provides an additional barrier against bacterial contamination. Automatic flushing and membrane cleaning cycles ensure long filter life and consistent output quality. Built-in quality monitoring systems track TDS, pH, and flow rates in real-time. Essential for pharmaceutical manufacturing, food & beverage production, cosmetics formulation, and any process requiring purified water. Available for purchase and installation across Kenya and East Africa.",
    specifications: { capacity: "500-10,000 litres/hour", power: "2-15 kW", voltage: "220-380V", material: "SS304/SS316 frame, RO membranes" },
    applications: ["Pharmaceutical water systems", "Food & beverage production", "Cosmetics manufacturing", "Laboratory & research", "Boiler feed water"],
    keywords: ["water purifier Kenya", "RO water system Nairobi", "industrial water treatment East Africa", "reverse osmosis machine for sale Kenya"],
  },
  {
    id: "dust-collector",
    title: "Dust Collector",
    category: "manufacturing",
    subcategory: "utilities",
    variants: [
      {
        image: "/New Images/Picture9.png",
        description: "Industrial dust collection system for clean air. Essential for worker safety and product quality."
      },
      {
        image: "/New Images/Picture10.png",
        description: "Bag filter dust collector with automatic cleaning. High-efficiency particulate capture."
      },
    ],
    features: ["High efficiency", "Auto-cleaning", "HEPA option", "Explosion-proof"],
    color: "from-gray-500 to-slate-400",
    longDescription: "Industrial dust collection systems are essential for maintaining clean air in manufacturing environments, protecting worker health, and ensuring product quality. These systems capture airborne dust particles generated during milling, mixing, sifting, and packaging operations. Available with bag filters, cartridge filters, and HEPA filtration for different particle sizes and air quality requirements. Automatic pulse-jet cleaning maintains filter efficiency without production interruption. Explosion-proof designs are available for combustible dust environments such as flour mills and chemical plants. Compliance with occupational health and safety standards makes these systems mandatory for responsible manufacturing operations in Kenya and East Africa.",
    specifications: { capacity: "1,000-50,000 m³/hour air volume", power: "3-30 kW", voltage: "380-415V, 3-phase", weight: "200-3000 kg" },
    applications: ["Flour & grain milling", "Pharmaceutical manufacturing", "Chemical processing", "Wood & furniture production", "Cement & building materials"],
    keywords: ["dust collector Kenya", "industrial dust extraction Nairobi", "bag filter system East Africa", "factory dust collection for sale Kenya"],
  },

  // Marking Equipment
  {
    id: "fibre-marking",
    title: "Fibre Marking Machine",
    category: "manufacturing",
    subcategory: "marking",
    variants: [
      {
        image: "/New Images/Picture7.png",
        description: "Fibre laser marking machine for permanent product identification. Creates high-contrast marks on metals and plastics."
      },
      {
        image: "/New Images/Picture8.png",
        description: "Desktop fibre laser marker for batch coding and serialization. Compact design for production line integration."
      },
    ],
    features: ["Permanent marking", "High speed", "No consumables", "PC controlled"],
    color: "from-violet-500 to-purple-400",
    featured: true,
    longDescription: "The fibre laser marking machine creates permanent, high-contrast marks on metals, plastics, and other materials for product identification, batch coding, serialization, and branding. Using advanced fibre laser technology, these machines produce precise marks without consumables such as ink or labels, eliminating ongoing supply costs. PC-controlled operation allows easy design of text, barcodes, QR codes, logos, and serial numbers. The compact desktop models integrate seamlessly into production lines for inline marking, while standalone configurations suit batch processing. Marking speeds of up to 7,000 mm/s ensure high throughput. Ideal for manufacturing companies in Kenya and East Africa requiring permanent product traceability and compliance marking.",
    specifications: { capacity: "Up to 7,000 mm/s marking speed", power: "20-50W laser power", voltage: "220V, single-phase", weight: "30-80 kg" },
    applications: ["Product identification & traceability", "Batch coding & date marking", "Barcode & QR code marking", "Logo engraving", "Regulatory compliance marking"],
    keywords: ["laser marking machine Kenya", "fibre laser marker Nairobi", "product marking equipment East Africa", "laser engraver for sale Kenya"],
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
