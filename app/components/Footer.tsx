"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const socialLinks = [
  { name: "Facebook", icon: FaFacebook, href: "https://www.facebook.com/p/Eco-Africa-Industries-Kenya-100065228815009/" },
  { name: "Twitter", icon: FaTwitter, href: "#" },
  { name: "LinkedIn", icon: FaLinkedin, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
  { name: "WhatsApp", icon: FaWhatsapp, href: "#" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "#products" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const productLinks = [
  { name: "Washing Machines", href: "#products" },
  { name: "Dryers", href: "#products" },
  { name: "Dry Cleaning Machines", href: "#products" },
  { name: "Ironing Equipment", href: "#products" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-14 h-14">
                <Image
                  src="/logo.png"
                  alt="Eco Africa Industries Kenya"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight text-white">
                  Eco Africa
                </span>
                <span className="text-xs text-gray-400 -mt-1">Industries Kenya</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Africa's trusted supplier of premium Italian laundry and dry-cleaning machines.
              European engineering excellence meets African affordability.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-brand-green rounded-full flex items-center justify-center transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-green transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-green transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <HiLocationMarker className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm">
                  Nairobi, Kenya<br />
                  East Africa
                </p>
              </div>
              <div className="flex items-center gap-3">
                <HiPhone className="w-5 h-5 text-brand-green flex-shrink-0" />
                <a
                  href="tel:+254700000000"
                  className="text-gray-400 hover:text-brand-green transition-colors duration-300 text-sm"
                >
                  +254 700 000 000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <HiMail className="w-5 h-5 text-brand-green flex-shrink-0" />
                <a
                  href="mailto:info@ecoafricaindustries.co.ke"
                  className="text-gray-400 hover:text-brand-green transition-colors duration-300 text-sm"
                >
                  info@ecoafricaindustries.co.ke
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Eco Africa Industries Kenya. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Premium Italian Equipment</span>
              <span className="text-brand-green">|</span>
              <span>Trusted Across Africa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
