import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Equipment Catalog | Laundry & Manufacturing Machines Kenya | Eco Africa Industries",
  description:
    "Browse 20+ premium industrial machines: washing machines, dryers, cartoning machines, filling machines, hammer mills, mixers, generators & more. Available for purchase in Kenya, Uganda, Tanzania & East Africa with professional installation.",
  keywords:
    "industrial equipment catalog Kenya, manufacturing machines Nairobi, laundry equipment East Africa, packaging machinery Kenya, factory equipment for sale",
  openGraph: {
    title: "Industrial Equipment Catalog | Eco Africa Industries Kenya",
    description:
      "Browse 20+ premium industrial machines for laundry and manufacturing. Available across East Africa.",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Equipment Catalog | Eco Africa Industries Kenya",
    description:
      "Browse 20+ premium industrial machines for laundry and manufacturing. Available across East Africa.",
  },
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
