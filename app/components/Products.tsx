"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import ScrollReveal from "./ScrollReveal";

const products = [
  {
    title: "Industrial Washing Machines",
    description: "High-capacity washing machines designed for hotels, hospitals, and commercial laundries. Handles large volumes efficiently.",
    capacity: "10-100 kg",
    features: ["Programmable cycles", "Low water consumption", "Stainless steel drum", "Energy efficient"],
    image: "/products/washing-machine.png",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Commercial Dryers",
    description: "Professional drying solutions that reduce drying time while protecting fabric quality. Perfect for high-turnover operations.",
    capacity: "10-80 kg",
    features: ["Moisture sensors", "Reverse tumble", "Heat recovery", "Quick dry programs"],
    image: "/products/dryer.png",
    color: "from-orange-500 to-amber-400",
  },
  {
    title: "Dry Cleaning Machines",
    description: "State-of-the-art dry cleaning equipment using eco-friendly solvents. Ideal for delicate fabrics and specialty cleaning.",
    capacity: "8-40 kg",
    features: ["Eco-friendly solvents", "Gentle on fabrics", "Self-cleaning", "Low emissions"],
    image: "/products/dry-cleaning.png",
    color: "from-purple-500 to-violet-400",
  },
];

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

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white/80 scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-brand-blue font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Premium Italian <span className="gradient-text">Laundry Equipment</span>
          </h2>
          <p className="text-neutral text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of commercial and industrial laundry
            solutions designed to maximize efficiency and minimize costs.
          </p>
        </ScrollReveal>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 group"
            >
              {/* Product Image Area */}
              <div className="h-56 relative overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Capacity Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className={`text-sm font-medium text-white bg-gradient-to-r ${product.color} px-3 py-1 rounded-full shadow-lg`}>
                    {product.capacity}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand-green transition-colors">
                  {product.title}
                </h3>
                <p className="text-neutral text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, idx) => (
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
          ))}
        </motion.div>

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
              { name: "Dry Cleaners", icon: "👔" },
              { name: "Spas & Gyms", icon: "💆" },
              { name: "Schools", icon: "🎓" },
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
