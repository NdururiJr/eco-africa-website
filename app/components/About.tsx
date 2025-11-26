"use client";

import { motion } from "framer-motion";
import { HiGlobe, HiCurrencyDollar, HiLightningBolt, HiUserGroup } from "react-icons/hi";
import ScrollReveal from "./ScrollReveal";

const highlights = [
  {
    icon: HiGlobe,
    title: "Pan-African Presence",
    description: "Successful installations across Kenya, Uganda, Tanzania, Rwanda, and beyond.",
  },
  {
    icon: HiCurrencyDollar,
    title: "Best Value",
    description: "Premium European quality at prices tailored for the African market.",
  },
  {
    icon: HiLightningBolt,
    title: "Energy Efficient",
    description: "Machines designed to minimize water and electricity consumption.",
  },
  {
    icon: HiUserGroup,
    title: "Expert Support",
    description: "Dedicated local team for installation, training, and maintenance.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <ScrollReveal direction="left">
              <span className="inline-block bg-green-50 text-brand-green font-semibold text-sm px-4 py-2 rounded-full mb-4">
                About Eco Africa Industries
              </span>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Redefining Laundry Solutions{" "}
                <span className="gradient-text">Across Africa</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-neutral text-lg leading-relaxed mb-6">
                At <strong className="text-foreground">Eco Africa Industries Kenya</strong>, we are the continent's
                leading distributor of world-class Italian laundry and dry-cleaning machines.
                We are committed to empowering businesses with the perfect blend of
                <strong className="text-brand-green"> European engineering excellence</strong> and
                <strong className="text-brand-blue"> African affordability</strong>.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <p className="text-neutral text-lg leading-relaxed mb-8">
                Whether you run a commercial laundry, hotel, hospital, or dry-cleaning enterprise,
                our machines are designed to deliver unmatched performance, energy efficiency,
                and long-term reliability. With a track record of successful installations across
                multiple countries, we've earned our reputation as the number one choice for
                businesses seeking superior quality at the best price.
              </p>
            </ScrollReveal>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.title} direction="up" delay={0.3 + index * 0.1}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="flex gap-4 p-4 rounded-2xl bg-surface hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-brand-green" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-neutral">{item.description}</p>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Image/Visual Side */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-brand-green to-brand-blue rounded-3xl p-8 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    We don't just sell machines—we deliver long-term value, business growth,
                    and confidence in every load. Partner with us and transform your operations
                    with superior Italian technology.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-white/80 text-sm">Happy Clients</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-3xl font-bold">15+</div>
                      <div className="text-white/80 text-sm">Years Experience</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-3xl font-bold">10+</div>
                      <div className="text-white/80 text-sm">Countries Served</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-3xl font-bold">24/7</div>
                      <div className="text-white/80 text-sm">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-border"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🇮🇹</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Made in Italy</div>
                    <div className="text-xs text-neutral">Premium Quality</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
