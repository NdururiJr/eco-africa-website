'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <footer className="relative bg-gradient-to-br from-brand-blue via-brand-blue/95 to-brand-green text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12">
                  <svg viewBox="0 0 50 50" className="w-full h-full">
                    <circle cx="25" cy="25" r="23" stroke="white" strokeWidth="2" fill="none" opacity="0.8" />
                    <path d="M 10 25 Q 15 20, 20 25 T 30 25 T 40 25" stroke="white" strokeWidth="2" fill="none" />
                    <path d="M 10 28 Q 15 23, 20 28 T 30 28 T 40 28" stroke="white" strokeWidth="2" fill="none" />
                    <path d="M 30 12 Q 35 12, 37 17 Q 35 14, 32 12 Z" fill="#77bc1f" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold">Eco Africa Industries</div>
                  <div className="text-sm text-white/80">Kenya</div>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Africa's trusted supplier of premium Italian laundry and dry-cleaning machines.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Our Story', 'Leadership', 'Careers', 'News'].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-white/80 hover:text-white transition-colors text-sm inline-block"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              {['Commercial Washers', 'Dry Cleaning Machines', 'Industrial Dryers', 'Detergents', 'Spare Parts'].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-white/80 hover:text-white transition-colors text-sm inline-block"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-green" />
                <div className="text-sm text-white/80">
                  Nairobi, Kenya<br />
                  Industrial Area
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-brand-green" />
                <a href="tel:+254700000000" className="text-sm text-white/80 hover:text-white transition-colors">
                  +254 700 000 000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-brand-green" />
                <a href="mailto:info@ecoafrica.co.ke" className="text-sm text-white/80 hover:text-white transition-colors">
                  info@ecoafrica.co.ke
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Eco Africa Industries Kenya. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
