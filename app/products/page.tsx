"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";
import ProductGrid from "./components/ProductGrid";
import {
  allProducts,
  laundryProducts,
  type ProductCategory,
  type ManufacturingSubcategory,
} from "@/lib/productData";
import ProductCard from "./components/ProductCard";

// Note: metadata export requires a server component, so we use a generateMetadata in layout or head
// For "use client" pages, metadata is set via the parent layout or a separate metadata file

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");
  const [activeSubcategory, setActiveSubcategory] = useState<ManufacturingSubcategory | "all">("all");

  const filteredProducts = useMemo(() => {
    // Main grid shows only manufacturing products (laundry has its own section)
    let products = allProducts.filter((p) => p.category === "manufacturing");

    // Filter by subcategory
    if (activeCategory === "manufacturing" && activeSubcategory !== "all") {
      products = products.filter((p) => p.subcategory === activeSubcategory);
    }

    // Filter by search query (searches all products including laundry)
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      products = allProducts.filter(
        (p) =>
          p.title.toLowerCase().includes(lowerQuery) ||
          p.features.some((f) => f.toLowerCase().includes(lowerQuery)) ||
          p.variants.some((v) => v.description.toLowerCase().includes(lowerQuery))
      );
    }

    return products;
  }, [activeCategory, activeSubcategory, searchQuery]);

  return (
    <div className="min-h-screen bg-linear-to-b from-surface to-white">
      {/* Header Section */}
      <section className="pt-28 pb-12 px-6">
        <div className="container mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-neutral hover:text-brand-green transition-colors"
            >
              <HiArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-blue-50 text-brand-blue font-semibold text-sm px-4 py-2 rounded-full mb-4">
              Our Products
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Industrial <span className="gradient-text">Equipment Catalog</span>
            </h1>
            <p className="text-neutral text-lg max-w-2xl mx-auto">
              Explore our comprehensive range of premium laundry and manufacturing
              equipment. Quality solutions for businesses across East Africa.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <CategoryFilter
              activeCategory={activeCategory}
              activeSubcategory={activeSubcategory}
              onCategoryChange={setActiveCategory}
              onSubcategoryChange={setActiveSubcategory}
            />
          </motion.div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="pb-20 px-6">
        <div className="container mx-auto">
          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6 text-neutral text-sm"
          >
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
            {searchQuery && ` for "${searchQuery}"`}
          </motion.div>

          {/* Product Grid */}
          <ProductGrid products={filteredProducts} />
        </div>
      </section>

      {/* Laundry Equipment Section */}
      {(activeCategory === "all" || activeCategory === "laundry") && !searchQuery && (
        <section className="pb-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <span className="inline-block bg-blue-50 text-brand-blue font-semibold text-sm px-4 py-2 rounded-full mb-4">
                Laundry Equipment
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Premium <span className="gradient-text">Laundry Machines</span>
              </h2>
              <p className="text-neutral max-w-2xl">
                World-class commercial laundry and dry-cleaning machines from leading
                European manufacturers. Designed for hotels, hospitals, and commercial
                laundries across East Africa.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {laundryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-6 bg-linear-to-r from-brand-green/10 to-brand-blue/10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-neutral mb-8 max-w-xl mx-auto">
            Our team of experts is ready to help you find the perfect equipment
            for your business needs. Get personalized recommendations today.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-linear-to-r from-brand-green to-brand-blue text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all"
          >
            Contact Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
