"use client";

import { motion } from "framer-motion";
import type { ProductCategory, ManufacturingSubcategory } from "@/lib/productData";
import { categoryNames, subcategoryNames } from "@/lib/productData";

interface CategoryFilterProps {
  activeCategory: ProductCategory | "all";
  activeSubcategory: ManufacturingSubcategory | "all";
  onCategoryChange: (category: ProductCategory | "all") => void;
  onSubcategoryChange: (subcategory: ManufacturingSubcategory | "all") => void;
}

const categories: (ProductCategory | "all")[] = ["all", "laundry", "manufacturing"];

const subcategories: ManufacturingSubcategory[] = [
  "mixing",
  "filling",
  "processing",
  "handling",
  "utilities",
  "marking",
];

export default function CategoryFilter({
  activeCategory,
  activeSubcategory,
  onCategoryChange,
  onSubcategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="space-y-4">
      {/* Main Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              onCategoryChange(category);
              onSubcategoryChange("all");
            }}
            className={`relative px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
              activeCategory === category
                ? "text-white"
                : "text-neutral hover:text-foreground bg-surface hover:bg-surface/80"
            }`}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="categoryBubble"
                className="absolute inset-0 bg-gradient-to-r from-brand-green to-brand-blue rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">
              {category === "all"
                ? "All Products"
                : categoryNames[category]}
            </span>
          </button>
        ))}
      </div>

      {/* Sub-category Filters (only show when Manufacturing is selected) */}
      {activeCategory === "manufacturing" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex flex-wrap justify-center gap-2 pt-2"
        >
          <button
            onClick={() => onSubcategoryChange("all")}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              activeSubcategory === "all"
                ? "bg-brand-green/10 text-brand-green font-medium border border-brand-green/30"
                : "text-neutral hover:text-foreground bg-white border border-border hover:border-brand-green/30"
            }`}
          >
            All Manufacturing
          </button>
          {subcategories.map((sub) => (
            <button
              key={sub}
              onClick={() => onSubcategoryChange(sub)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeSubcategory === sub
                  ? "bg-brand-green/10 text-brand-green font-medium border border-brand-green/30"
                  : "text-neutral hover:text-foreground bg-white border border-border hover:border-brand-green/30"
              }`}
            >
              {subcategoryNames[sub]}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
