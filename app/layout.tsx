import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackgroundLogo from "./components/BackgroundLogo";

export const metadata: Metadata = {
  title: "Eco Africa Industries Kenya | Premium Italian Laundry & Dry-Cleaning Machines",
  description: "Africa's trusted supplier of premium Italian laundry and dry-cleaning machines. European engineering excellence meets African affordability. Expert installation, unbeatable prices, and energy-efficient solutions.",
  keywords: "laundry machines Kenya, dry cleaning machines Africa, Italian laundry equipment, commercial washing machines, industrial laundry, Eco Africa Industries",
  openGraph: {
    title: "Eco Africa Industries Kenya | Premium Italian Laundry Machines",
    description: "Africa's leading distributor of world-class Italian laundry and dry-cleaning machines.",
    type: "website",
    locale: "en_KE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <BackgroundLogo />
        <Header />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
