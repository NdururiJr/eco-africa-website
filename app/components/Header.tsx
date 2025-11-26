"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiMenu, HiX, HiPhone } from "react-icons/hi";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "#products" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-green to-brand-blue rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-lg">EA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight">
                <span className="text-brand-green">Eco Africa</span>
              </span>
              <span className="text-xs text-neutral -mt-1">Industries Kenya</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-brand-green transition-colors duration-300 font-medium text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+254704585410"
              className="flex items-center gap-2 text-brand-green font-semibold"
            >
              <HiPhone className="w-5 h-5" />
              <span className="hidden lg:inline">0704 585410</span>
            </a>
            <Link
              href="#contact"
              className="bg-brand-green hover:bg-brand-green-dark text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 glow-hover text-sm"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground text-3xl"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-4 py-4 space-y-4 bg-white rounded-2xl shadow-lg px-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-foreground/80 hover:text-brand-green transition-colors duration-300 font-medium py-2"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-brand-green hover:bg-brand-green-dark text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300"
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
