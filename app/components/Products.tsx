"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import ScrollReveal from "./ScrollReveal";
import { getFeaturedProducts, type Product } from "@/lib/productData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function ProductCard({ product }: { product: Product }) {
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

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 group"
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

        {/* Capacity Badge */}
        {product.capacity && (
          <div className="absolute bottom-3 left-3 z-10">
            <span className={`text-sm font-medium text-white bg-linear-to-r ${product.color} px-3 py-1 rounded-full shadow-lg`}>
              {product.capacity}
            </span>
          </div>
        )}

        {/* Category Badge (for manufacturing products) */}
        {!product.capacity && (
          <div className="absolute bottom-3 left-3 z-10">
            <span className={`text-sm font-medium text-white bg-linear-to-r ${product.color} px-3 py-1 rounded-full shadow-lg`}>
              {product.category === "manufacturing" ? "Manufacturing" : "Laundry"}
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
      <div className="p-6">
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

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm group-hover:gap-3 transition-all"
        >
          Get Quote <HiArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section id="products" className="py-20 bg-white/80 scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-brand-blue font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Premium Industrial <span className="gradient-text">Equipment</span>
          </h2>
          <p className="text-neutral text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of industrial equipment — from packaging
            and filling machines to mixers, mills, and generators — designed to maximize efficiency.
          </p>
        </ScrollReveal>

        {/* Featured Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProducts.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {/* View All Products Button */}
        <ScrollReveal direction="up" delay={0.2} className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 bg-linear-to-r from-brand-green to-brand-blue text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all"
          >
            View All Products
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </ScrollReveal>

        {/* Industries Served */}
        <ScrollReveal direction="up" delay={0.3} className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-2">Industries We Serve</h3>
            <p className="text-neutral">Our equipment powers businesses across various sectors</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Hotels & Resorts", icon: "🏨" },
              { name: "Hospitals", icon: "🏥" },
              { name: "Commercial Laundries", icon: "🧺" },
              { name: "Manufacturing Plants", icon: "🏭" },
              { name: "Food Processing", icon: "🍽️" },
              { name: "Pharmaceutical", icon: "💊" },
            ].map((industry) => (
              <div
                key={industry.name}
                className="flex items-center gap-3 bg-surface px-6 py-3 rounded-full"
              >
                <span className="text-2xl">{industry.icon}</span>
                <span className="font-medium text-foreground">{industry.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
