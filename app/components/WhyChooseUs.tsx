"use client";

import { motion } from "framer-motion";
import { HiStar, HiCurrencyDollar, HiLightningBolt, HiSupport, HiAdjustments, HiShieldCheck } from "react-icons/hi";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  {
    icon: HiStar,
    title: "Top-Selling Italian Machines",
    description: "Trusted by leading laundry and dry-cleaning businesses across Africa. Our machines have earned their reputation through consistent performance.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: HiCurrencyDollar,
    title: "Unbeatable Prices",
    description: "Get premium European equipment without the inflated cost. We offer the best value proposition in the African market.",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: HiLightningBolt,
    title: "Energy-Efficient & Eco-Friendly",
    description: "Built to reduce operational expenses and support sustainable business practices. Save on water and electricity bills.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: HiSupport,
    title: "Expert Installation & Support",
    description: "From site assessment to after-sales service, we walk with you every step of the way. Our technicians are always available.",
    color: "from-purple-400 to-violet-600",
  },
  {
    icon: HiAdjustments,
    title: "Tailored Solutions",
    description: "Whether small-scale or industrial, we supply machines that match your business size and goals. Customized packages available.",
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: HiShieldCheck,
    title: "Warranty & Reliability",
    description: "All machines come with comprehensive warranties. Invest in equipment that keeps your business running smoothly for years.",
    color: "from-teal-400 to-green-500",
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

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-surface/80 scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <span className="inline-block bg-brand-green/10 text-brand-green font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why <span className="gradient-text">Eco Africa Industries</span>?
          </h2>
          <p className="text-neutral text-lg max-w-2xl mx-auto">
            We combine Italian engineering excellence with African market expertise
            to deliver unmatched value for your business.
          </p>
        </ScrollReveal>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 group"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.4} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-green to-brand-blue rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Grow Your Business with Reliable Italian Engineering
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Our equipment is engineered to handle high-volume operations while maintaining
              exceptional wash quality, reduced water consumption, and low maintenance needs.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-brand-green px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Request a Free Consultation
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
