import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartSlideOver from "@/components/CartSlideOver";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Spot & Spike | Premium Dog Leads with Customizable Charms",
  description: "Express your pup's personality with our premium dog leads featuring interchangeable charms. Shop leads and charm packs.",
  keywords: ["dog leads", "dog leash", "pet accessories", "dog charms", "customizable dog lead"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CartSlideOver />
        </CartProvider>
      </body>
    </html>
  );
}
