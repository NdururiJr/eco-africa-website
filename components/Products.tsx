'use client';

import { motion } from 'framer-motion';
import { Waves, Wind, Droplets, Package } from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: Waves,
      title: 'Commercial Washers',
      description: 'Industrial-grade washing machines for hotels, hospitals, and commercial laundries',
      features: ['High capacity', 'Energy efficient', 'Fast cycles'],
      gradient: 'from-brand-blue to-blue-400',
      image: '🏭',
    },
    {
      icon: Wind,
      title: 'Dry Cleaning Machines',
      description: 'Professional dry-cleaning equipment for delicate fabrics and premium garments',
      features: ['Gentle on fabrics', 'Chemical efficient', 'Quick turnaround'],
      gradient: 'from-brand-green to-green-400',
      image: '👔',
    },
    {
      icon: Droplets,
      title: 'Industrial Dryers',
      description: 'High-performance drying solutions with temperature control and moisture sensors',
      features: ['Fast drying', 'Low energy use', 'Automatic sensors'],
      gradient: 'from-brand-blue to-blue-400',
      image: '🌀',
    },
    {
      icon: Package,
      title: 'Detergents & Chemicals',
      description: 'Premium Italian detergents and cleaning solutions for professional results',
      features: ['Eco-friendly', 'Cost-effective', 'Professional grade'],
      gradient: 'from-brand-green to-green-400',
      image: '🧴',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border-2 border-brand-green/30 rounded-full px-4 py-2 mb-4">
            <Package className="w-4 h-4 text-brand-green" />
            <span className="text-sm font-semibold text-brand-green">Our Products</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">Laundry Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From washing to drying, and everything in between—we supply the best Italian equipment for your business
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white/70 backdrop-blur-xl border-2 border-white/60 rounded-3xl p-8 shadow-card hover:shadow-2xl transition-all overflow-hidden h-full"
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                  />

                  <div className="relative flex gap-6">
                    {/* Icon & Emoji */}
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-20 h-20 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center shadow-lg mb-4 relative`}
                      >
                        <Icon className="w-10 h-10 text-white relative z-10" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-2xl blur-lg opacity-50`} />
                      </motion.div>
                      <div className="text-5xl">{product.image}</div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-brand-blue transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {product.features.map((feature, fIndex) => (
                          <motion.div
                            key={fIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index * 0.1) + (fIndex * 0.05) }}
                            className="flex items-center gap-2"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient}`} />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="mt-6 inline-flex items-center gap-2 text-brand-blue font-semibold text-sm group-hover:gap-3 transition-all"
                      >
                        Learn More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-brand-green/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white/70 backdrop-blur-xl border-2 border-white/60 rounded-3xl p-8 lg:p-12 shadow-card"
        >
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer custom solutions tailored to your specific business needs. Contact our team to discuss your requirements.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(119, 188, 31, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-brand-green to-brand-green/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
          >
            Contact Us for Custom Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
