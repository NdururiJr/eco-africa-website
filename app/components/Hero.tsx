"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowDown, HiPhone, HiShieldCheck } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 via-white/90 to-blue-50/90">
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-brand-green/5 to-brand-blue/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-green-50 border border-brand-green/20 rounded-full px-4 py-2 mb-8"
          >
            <HiShieldCheck className="w-5 h-5 text-brand-green" />
            <span className="text-sm font-medium text-brand-green">
              Africa's #1 Trusted Supplier of Industrial Equipment
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Premium Industrial</span>
            <br />
            <span className="gradient-text">& Manufacturing</span>
            <br />
            <span className="text-foreground">Equipment for Africa</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-neutral max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            World-class engineering meets exceptional value.
            Empower your business with industrial equipment trusted by
            manufacturers, food processors, and businesses across the continent.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 mb-10"
          >
            {[
              { value: "500+", label: "Installations" },
              { value: "10+", label: "Countries" },
              { value: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-green">{stat.value}</div>
                <div className="text-sm text-neutral">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="#contact"
              className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 glow-hover w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <HiPhone className="w-5 h-5" />
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/254704585410"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block cursor-pointer"
            >
              <Link href="#products" className="flex flex-col items-center text-neutral hover:text-brand-green transition-colors">
                <span className="text-sm mb-2">Explore Our Products</span>
                <HiArrowDown className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
