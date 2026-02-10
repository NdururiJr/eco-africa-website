import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HiArrowLeft, HiPhone, HiMail } from "react-icons/hi";
import {
  allProducts,
  categoryNames,
  subcategoryNames,
  type Product,
} from "@/lib/productData";
import ProductImageCarousel from "./ProductImageCarousel";
import RelatedProducts from "./RelatedProducts";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ecoafricaindustries.com";

// Pre-generate all 20 product pages at build time
export function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }));
}

// Dynamic SEO metadata per product
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return { title: "Product Not Found | Eco Africa Industries" };
  }

  const categoryLabel = product.subcategory
    ? subcategoryNames[product.subcategory]
    : categoryNames[product.category];
  const description = `${product.variants[0].description} Available in Kenya, Uganda, Tanzania & East Africa. Contact Eco Africa Industries for pricing and installation.`;
  const title = `${product.title} for Sale in Kenya | Eco Africa Industries`;
  const images = product.variants.map((v) => ({
    url: v.image,
    alt: product.title,
  }));

  return {
    title,
    description,
    keywords: product.keywords.join(", "),
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_KE",
      siteName: "Eco Africa Industries Kenya",
      images,
      url: `${baseUrl}/products/${product.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.variants[0].image],
    },
    alternates: {
      canonical: `/products/${product.id}`,
    },
  };
}

function getProductJsonLd(product: Product) {
  const categoryLabel = product.subcategory
    ? `${categoryNames[product.category]} > ${subcategoryNames[product.subcategory]}`
    : categoryNames[product.category];

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.longDescription,
    image: product.variants.map((v) => `${baseUrl}${v.image}`),
    category: categoryLabel,
    brand: {
      "@type": "Brand",
      name: "Eco Africa Industries",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "KES",
      seller: {
        "@type": "Organization",
        name: "Eco Africa Industries Kenya",
        url: baseUrl,
      },
      areaServed: ["Kenya", "Uganda", "Tanzania", "Rwanda", "East Africa"],
    },
  };
}

function getBreadcrumbJsonLd(product: Product) {
  const categoryLabel = product.subcategory
    ? subcategoryNames[product.subcategory]
    : categoryNames[product.category];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${baseUrl}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: categoryLabel,
        item: `${baseUrl}/products#${product.subcategory || product.category}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: product.title,
        item: `${baseUrl}/products/${product.id}`,
      },
    ],
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const categoryLabel = product.subcategory
    ? subcategoryNames[product.subcategory]
    : categoryNames[product.category];

  const relatedProducts = allProducts.filter(
    (p) =>
      p.id !== product.id &&
      (p.subcategory === product.subcategory ||
        p.category === product.category)
  ).slice(0, 3);

  const specs = Object.entries(product.specifications).filter(
    ([, value]) => value !== undefined
  );

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getProductJsonLd(product)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbJsonLd(product)),
        }}
      />

      <div className="min-h-screen bg-linear-to-b from-surface to-white">
        {/* Header */}
        <section className="pt-28 pb-8 px-6">
          <div className="container mx-auto">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-sm text-neutral mb-6 flex-wrap">
              <Link href="/" className="hover:text-brand-green transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:text-brand-green transition-colors">
                Products
              </Link>
              <span>/</span>
              <Link
                href={`/products#${product.subcategory || product.category}`}
                className="hover:text-brand-green transition-colors"
              >
                {categoryLabel}
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">{product.title}</span>
            </nav>

            {/* Back Link */}
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-neutral hover:text-brand-green transition-colors mb-8"
            >
              <HiArrowLeft className="w-4 h-4" />
              <span>Back to Catalog</span>
            </Link>
          </div>
        </section>

        {/* Product Hero */}
        <section className="pb-12 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image Carousel */}
              <ProductImageCarousel product={product} />

              {/* Product Info */}
              <div>
                {/* Category Badge */}
                <span
                  className={`inline-block text-sm font-medium text-white bg-gradient-to-r ${product.color} px-4 py-1.5 rounded-full mb-4`}
                >
                  {categoryLabel}
                </span>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.title}
                </h1>

                {product.capacity && (
                  <p className="text-lg text-brand-green font-semibold mb-4">
                    Capacity: {product.capacity}
                  </p>
                )}

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-surface text-neutral px-4 py-2 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Long Description */}
                <p className="text-neutral leading-relaxed mb-8">
                  {product.longDescription}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/#contact?product=${encodeURIComponent(product.title)}`}
                    className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-brand-green to-brand-blue text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <HiPhone className="w-5 h-5" />
                    Get a Quote
                  </Link>
                  <a
                    href="mailto:info@ecoafricaindustries.co.ke"
                    className="inline-flex items-center justify-center gap-2 border-2 border-brand-green text-brand-green font-semibold px-8 py-4 rounded-full hover:bg-brand-green hover:text-white transition-all"
                  >
                    <HiMail className="w-5 h-5" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications & Applications */}
        <section className="py-12 px-6 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Specifications */}
              {specs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Technical Specifications
                  </h2>
                  <div className="bg-surface rounded-2xl overflow-hidden">
                    {specs.map(([key, value], idx) => (
                      <div
                        key={key}
                        className={`flex justify-between items-center px-6 py-4 ${
                          idx !== specs.length - 1 ? "border-b border-border/50" : ""
                        }`}
                      >
                        <span className="text-neutral capitalize font-medium">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </span>
                        <span className="text-foreground font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications */}
              {product.applications.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Applications & Industries
                  </h2>
                  <ul className="space-y-3">
                    {product.applications.map((app, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-neutral"
                      >
                        <span
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.color} shrink-0`}
                        />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Variant Details */}
        {product.variants.length > 1 && (
          <section className="py-12 px-6">
            <div className="container mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Available Models
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {product.variants.map((variant, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-border/50 flex gap-4 items-start"
                  >
                    <div className="w-24 h-24 relative shrink-0 bg-gray-50 rounded-xl overflow-hidden">
                      <Image
                        src={variant.image}
                        alt={variant.model || `${product.title} variant ${idx + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      {variant.model && (
                        <span
                          className={`inline-block text-xs font-medium text-white bg-gradient-to-r ${product.color} px-3 py-1 rounded-full mb-2`}
                        >
                          {variant.model}
                        </span>
                      )}
                      <p className="text-neutral text-sm leading-relaxed">
                        {variant.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <RelatedProducts products={relatedProducts} />
        )}

        {/* Bottom CTA */}
        <section className="py-16 px-6 bg-linear-to-r from-brand-green/10 to-brand-blue/10">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Order Your {product.title}?
            </h2>
            <p className="text-neutral mb-8 max-w-xl mx-auto">
              Get competitive pricing, professional installation, and after-sales
              support across Kenya and East Africa. Contact our experts today.
            </p>
            <Link
              href={`/#contact?product=${encodeURIComponent(product.title)}`}
              className="inline-flex items-center gap-2 bg-linear-to-r from-brand-green to-brand-blue text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              Contact Our Experts
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
