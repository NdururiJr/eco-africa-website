"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import type { Product } from "@/lib/productData";
import { subcategoryNames } from "@/lib/productData";

export default function RelatedProducts({
  products,
}: {
  products: Product[];
}) {
  return (
    <section className="py-12 px-6 bg-surface/50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8">
          Related Equipment
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="h-40 relative bg-gray-50">
                  <Image
                    src={product.variants[0].image}
                    alt={product.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="text-xs font-medium text-white bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      {product.subcategory
                        ? subcategoryNames[product.subcategory]
                        : product.category === "laundry"
                        ? "Laundry"
                        : "Manufacturing"}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground group-hover:text-brand-green transition-colors mb-1">
                    {product.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-brand-green text-sm font-semibold">
                    View Details <HiArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
