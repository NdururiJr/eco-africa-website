'use client';

import { motion } from 'framer-motion';
import { Sparkles, DollarSign, Wrench, Zap, Globe, CheckCircle } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: 'Top-Selling Italian Machines',
      description: 'Trusted by leading laundry and dry-cleaning businesses across Africa',
      gradient: 'from-brand-blue to-blue-400',
    },
    {
      icon: DollarSign,
      title: 'Unbeatable Prices',
      description: 'Premium European equipment without the inflated cost',
      gradient: 'from-brand-green to-green-400',
    },
    {
      icon: Zap,
      title: 'Energy-Efficient & Eco-Friendly',
      description: 'Reduce operational expenses and support sustainable practices',
      gradient: 'from-brand-blue to-blue-400',
    },
    {
      icon: Wrench,
      title: 'Expert Installation & Support',
      description: 'From site assessment to after-sales service, we walk with you',
      gradient: 'from-brand-green to-green-400',
    },
    {
      icon: CheckCircle,
      title: 'Tailored Solutions',
      description: 'Machines that match your business size and goals',
      gradient: 'from-brand-blue to-blue-400',
    },
    {
      icon: Globe,
      title: 'Continental Reach',
      description: 'Successful installations across multiple African countries',
      gradient: 'from-brand-green to-green-400',
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 border-2 border-brand-blue/30 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-brand-blue" />
            <span className="text-sm font-semibold text-brand-blue">Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with Africa's most trusted supplier of Italian laundry equipment
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-white/70 backdrop-blur-xl border-2 border-white/60 rounded-3xl p-8 shadow-card hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* Background gradient that appears on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-lg opacity-50`} />
                </motion.div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-foreground mb-3 group-hover:text-brand-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="relative text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-brand-blue via-brand-blue to-brand-green rounded-3xl p-1 overflow-hidden"
        >
          {/* Animated background */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            style={{ backgroundSize: '200% 100%' }}
          />

          <div className="relative bg-white rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Join thousands of satisfied clients who have invested in reliable Italian engineering. 
                  Get machines that keep your business running smoothly—day after day, year after year.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 136, 204, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Request a Quote
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white border-2 border-brand-blue/30 text-foreground px-8 py-4 rounded-full font-semibold text-lg hover:border-brand-blue transition-all"
                  >
                    Contact Sales
                  </motion.button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Installation', value: 'Free' },
                  { label: 'Warranty', value: '2 Years' },
                  { label: 'Training', value: 'Included' },
                  { label: 'Response', value: '24/7' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
