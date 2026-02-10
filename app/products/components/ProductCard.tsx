"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import type { Product } from "@/lib/productData";
import { subcategoryNames } from "@/lib/productData";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const hasMultipleSlides = product.variants.length > 1;

  useEffect(() => {
    if (!hasMultipleSlides) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % product.variants.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [hasMultipleSlides, product.variants.length]);

  const currentVariant = product.variants[currentSlide];

  // Build contact URL with product pre-filled
  const contactUrl = `/#contact?product=${encodeURIComponent(product.title)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 group flex flex-col"
    >
      {/* Product Image Area */}
      <div className="h-56 relative overflow-hidden bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={currentVariant.image}
              alt={product.title}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </AnimatePresence>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="text-xs font-medium text-white bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
            {product.subcategory
              ? subcategoryNames[product.subcategory]
              : product.category === "laundry"
              ? "Laundry"
              : "Manufacturing"}
          </span>
        </div>

        {/* Capacity Badge (for laundry) */}
        {product.capacity && (
          <div className="absolute bottom-3 left-3 z-10">
            <span
              className={`text-sm font-medium text-white bg-gradient-to-r ${product.color} px-3 py-1 rounded-full shadow-lg`}
            >
              {product.capacity}
            </span>
          </div>
        )}

        {/* Model Badge (if variant has model) */}
        {currentVariant.model && !product.capacity && (
          <div className="absolute bottom-3 left-3 z-10">
            <span
              className={`text-sm font-medium text-white bg-gradient-to-r ${product.color} px-3 py-1 rounded-full shadow-lg`}
            >
              {currentVariant.model}
            </span>
          </div>
        )}

        {/* Dot Indicators */}
        {hasMultipleSlides && (
          <div className="absolute bottom-3 right-3 z-10 flex gap-1.5">
            {product.variants.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentSlide
                    ? "bg-white w-4"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand-green transition-colors">
          {product.title}
        </h3>

        <AnimatePresence mode="wait">
          <motion.p
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-neutral text-sm mb-4 leading-relaxed min-h-[60px]"
          >
            {currentVariant.description}
          </motion.p>
        </AnimatePresence>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.slice(0, 4).map((feature, idx) => (
            <span
              key={idx}
              className="text-xs bg-surface text-neutral px-3 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA - pushed to bottom */}
        <div className="mt-auto pt-4 flex items-center justify-between">
          <Link
            href={`/products/${product.id}`}
            className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:gap-3 transition-all"
          >
            View Details <HiArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={contactUrl}
            className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm hover:gap-3 transition-all"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
