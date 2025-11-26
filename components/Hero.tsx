'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border-2 border-brand-blue/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-foreground">
                Africa's #1 Italian Machine Supplier
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Premium Italian
              <span className="block bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                Laundry Solutions
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              European engineering excellence meets African affordability. 
              Transform your business with world-class laundry & dry-cleaning equipment.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 136, 204, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="group bg-brand-blue text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg hover:bg-brand-blue/90 transition-all"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white/70 backdrop-blur-md border-2 border-brand-blue/30 text-foreground px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:border-brand-blue transition-all"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200"
            >
              <div>
                <div className="text-3xl font-bold text-brand-blue">500+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-green">15+</div>
                <div className="text-sm text-gray-600 mt-1">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glassmorphic card */}
              <div className="relative bg-white/70 backdrop-blur-xl border-2 border-white/60 rounded-3xl p-8 shadow-card">
                <div className="aspect-square bg-gradient-to-br from-brand-blue/10 to-brand-green/10 rounded-2xl flex items-center justify-center">
                  {/* Logo placeholder - we'll add the actual logo */}
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto mb-4 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-green rounded-full opacity-20 blur-2xl" />
                      <div className="relative w-full h-full flex items-center justify-center">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          {/* Water waves */}
                          <circle cx="100" cy="100" r="90" stroke="#0088cc" strokeWidth="3" fill="none" />
                          <path d="M 40 100 Q 55 85, 70 100 T 100 100 T 130 100 T 160 100" stroke="#0088cc" strokeWidth="3" fill="none" />
                          <path d="M 40 110 Q 55 95, 70 110 T 100 110 T 130 110 T 160 110" stroke="#0088cc" strokeWidth="3" fill="none" />
                          <path d="M 40 120 Q 55 105, 70 120 T 100 120 T 130 120 T 160 120" stroke="#0088cc" strokeWidth="3" fill="none" />
                          {/* Leaf */}
                          <path d="M 120 50 Q 140 50, 150 70 Q 145 55, 130 50 Z" fill="#77bc1f" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-foreground">Eco Africa Industries</div>
                    <div className="text-lg text-brand-blue font-semibold">Kenya</div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-md border-2 border-brand-green/30 rounded-2xl px-6 py-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-brand-green/70 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">ISO Certified</div>
                      <div className="text-xs text-gray-600">Premium Quality</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-brand-blue rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-brand-blue rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
