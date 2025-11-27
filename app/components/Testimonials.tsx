"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Grace M.",
    role: "General Manager",
    company: "Lorenzo Dry Cleaners",
    content: "The REALSTAR dry-cleaning system from Eco Africa has transformed our business. The eco-friendly solvents are gentle on delicate fabrics, and our customers love the results. The machine's efficiency has helped us serve more clients while reducing operational costs.",
    rating: 5,
    location: "Nairobi, Kenya",
  },
  {
    name: "James Macharia",
    role: "Manager",
    company: "Dr Spotless",
    content: "We invested in the ADC commercial dryer and it's been a game-changer. The rapid drying and energy efficiency mean we process more loads per day. Eco Africa's installation and training support was exceptional from start to finish.",
    rating: 5,
    location: "Nairobi, Kenya",
  },
  {
    name: "Mary Were",
    role: "CEO",
    company: "Mama Fua Laundromart",
    content: "The IMESA washer-extractor with LCD interface makes our operations incredibly smooth. Premium stainless steel build, fast fill and discharge - exactly what a busy laundromat needs. Eco Africa delivered quality Italian machines at the best price.",
    rating: 5,
    location: "Nairobi, Kenya",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50/90 via-white/90 to-blue-50/90 scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <span className="inline-block bg-brand-green/10 text-brand-green font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-neutral text-lg max-w-2xl mx-auto">
            Join thousands of satisfied clients who have transformed their operations
            with our superior Italian technology.
          </p>
        </ScrollReveal>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-border/50"
              >
                {/* Quote Icon */}
                <div className="text-brand-green/20 text-8xl font-serif leading-none mb-4">
                  "
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <HiStar key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  {testimonials[currentIndex].content}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-brand-blue rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-neutral">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                    <p className="text-xs text-brand-green">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-foreground hover:text-brand-green hover:shadow-xl transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <HiChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-brand-green w-8"
                        : "bg-border hover:bg-neutral"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-foreground hover:text-brand-green hover:shadow-xl transition-all duration-300"
                aria-label="Next testimonial"
              >
                <HiChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <ScrollReveal direction="up" delay={0.3} className="mt-16">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              { value: "500+", label: "Satisfied Clients" },
              { value: "98%", label: "Customer Satisfaction" },
              { value: "10+", label: "Countries Served" },
              { value: "15+", label: "Years in Business" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-green">{stat.value}</div>
                <div className="text-sm text-neutral">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
