'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Italian Engineering',
      description: 'Premium European machines built to last decades',
      color: 'from-brand-blue to-brand-blue/70',
    },
    {
      icon: Award,
      title: 'African Affordability',
      description: 'Best prices in the market without compromising quality',
      color: 'from-brand-green to-brand-green/70',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 installation, maintenance & after-sales service',
      color: 'from-brand-blue to-brand-blue/70',
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Proven solutions that maximize efficiency & profits',
      color: 'from-brand-green to-brand-green/70',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border-2 border-brand-blue/30 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-brand-blue">About Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">Eco Africa?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're redefining laundry & dry-cleaning standards across Africa with world-class Italian equipment
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white/70 backdrop-blur-xl border-2 border-white/60 rounded-3xl p-6 shadow-card hover:shadow-xl transition-all"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`} />
              </motion.div>
            );
          })}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-brand-blue to-brand-green p-1 rounded-3xl"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Africa's Trusted Partner in Laundry Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At <span className="font-semibold text-brand-blue">Eco Africa Industries Kenya</span>, we don't just sell machines—we deliver long-term value, business growth, and confidence in every load. Our Italian equipment handles high-volume operations while maintaining exceptional quality, reduced water consumption, and low maintenance needs.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-brand-blue mb-1">500+</div>
                    <div className="text-sm text-gray-600">Satisfied Clients</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-brand-green mb-1">15+</div>
                    <div className="text-sm text-gray-600">Countries Served</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-brand-blue mb-1">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-brand-green mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative aspect-square bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl flex items-center justify-center"
                >
                  <div className="text-center p-8">
                    <div className="text-6xl font-bold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent mb-4">
                      #1
                    </div>
                    <div className="text-xl font-semibold text-foreground mb-2">
                      Top Supplier in Africa
                    </div>
                    <div className="text-gray-600">
                      Leading the industry with premium Italian machines
                    </div>
                  </div>

                  {/* Floating badges */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -top-4 -right-4 bg-white border-2 border-brand-green rounded-2xl px-4 py-2 shadow-lg"
                  >
                    <div className="text-xs font-semibold text-brand-green">ISO Certified</div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-4 -left-4 bg-white border-2 border-brand-blue rounded-2xl px-4 py-2 shadow-lg"
                  >
                    <div className="text-xs font-semibold text-brand-blue">Energy Efficient</div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
