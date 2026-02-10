"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/lib/productData";

export default function ProductImageCarousel({
  product,
}: {
  product: Product;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const hasMultipleSlides = product.variants.length > 1;

  useEffect(() => {
    if (!hasMultipleSlides) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % product.variants.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [hasMultipleSlides, product.variants.length]);

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-border/50 shadow-sm">
      {/* Main Image */}
      <div className="relative h-80 md:h-[28rem] bg-gray-50">
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
              src={product.variants[currentSlide].image}
              alt={`${product.title}${product.variants[currentSlide].model ? ` - ${product.variants[currentSlide].model}` : ""}`}
              fill
              className="object-contain p-4"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail Strip */}
      {hasMultipleSlides && (
        <div className="flex gap-2 p-4 bg-gray-50 border-t border-border/30">
          {product.variants.map((variant, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                idx === currentSlide
                  ? "border-brand-green shadow-md"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={variant.image}
                alt={variant.model || `Variant ${idx + 1}`}
                fill
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
