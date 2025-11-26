"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker, HiClock } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const contactInfo = [
  {
    icon: HiPhone,
    title: "Phone",
    value: "0704 585410",
    href: "tel:+254704585410",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "0704 585410",
    href: "https://wa.me/254704585410",
  },
  {
    icon: HiMail,
    title: "Email",
    value: "info@ecoafricaindustries.co.ke",
    href: "mailto:info@ecoafricaindustries.co.ke",
  },
  {
    icon: HiLocationMarker,
    title: "Location",
    value: "Nairobi, Kenya",
    href: "#",
  },
];

const businessTypes = [
  "Hotel / Resort",
  "Hospital / Clinic",
  "Commercial Laundry",
  "Dry Cleaning Business",
  "Spa / Gym",
  "School / University",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setFormData({ name: "", email: "", phone: "", businessType: "", message: "" });

    // Reset status after 5 seconds
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white/80 scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <span className="inline-block bg-brand-green/10 text-brand-green font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to <span className="gradient-text">Transform Your Business</span>?
          </h2>
          <p className="text-neutral text-lg max-w-2xl mx-auto">
            Contact us today for a free consultation and quotation.
            Our experts will help you find the perfect laundry solution.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="bg-surface rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Request a Free Quote
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-foreground font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-border rounded-xl text-foreground focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-foreground font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-border rounded-xl text-foreground focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-foreground font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-border rounded-xl text-foreground focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all duration-300"
                      placeholder="+254 700 000 000"
                    />
                  </div>

                  {/* Business Type */}
                  <div>
                    <label htmlFor="businessType" className="block text-foreground font-medium mb-2">
                      Business Type *
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-border rounded-xl text-foreground focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all duration-300"
                    >
                      <option value="">Select your business type</option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-foreground font-medium mb-2">
                    Your Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-border rounded-xl text-foreground focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your laundry needs, capacity requirements, and any specific features you're looking for..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-brand-green hover:bg-brand-green-dark disabled:bg-brand-green/50 text-white font-semibold py-4 rounded-xl transition-all duration-300 glow-hover flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </button>

                {/* Status Messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-brand-green text-brand-green px-4 py-3 rounded-xl text-center"
                  >
                    Thank you for your inquiry! We'll get back to you within 24 hours.
                  </motion.div>
                )}
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info Sidebar */}
          <ScrollReveal direction="right" delay={0.2} className="space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 bg-surface rounded-2xl p-5 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6 text-brand-green group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-neutral text-sm">{item.value}</p>
                  </div>
                </motion.a>
              );
            })}

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-brand-green to-brand-blue rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <HiClock className="w-6 h-6" />
                <h4 className="font-semibold text-lg">Business Hours</h4>
              </div>
              <div className="space-y-2 text-white/90 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm text-white/80">
                  Emergency support available 24/7 for existing clients.
                </p>
              </div>
            </div>

            {/* Quick Response Badge */}
            <div className="bg-green-50 border border-brand-green/20 rounded-2xl p-5">
              <p className="text-foreground text-sm leading-relaxed">
                <span className="font-semibold text-brand-green">Fast Response:</span>{" "}
                We typically respond within 24 hours and can schedule site visits within a week.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
