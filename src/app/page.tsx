import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts, leads, charmPacks } from "@/data/products";
import Link from "next/link";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <HeroSection />

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Customize your pup&apos;s look in three easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-amber-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Pick Your Lead
              </h3>
              <p className="text-gray-600">
                Choose from our premium leads in 3 beautiful colors. Each lead features built-in charm slots.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-amber-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Choose Your Charms
              </h3>
              <p className="text-gray-600">
                Browse our 20 themed charm packs. Each pack contains 5 unique charms to express your pup&apos;s personality.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-amber-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Snap & Go
              </h3>
              <p className="text-gray-600">
                Simply slide your charms into the slots on your lead. Switch them up anytime for a fresh look!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <Link
              href="/products/charms"
              className="text-amber-600 font-medium hover:text-amber-700 transition-colors"
            >
              View All →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Shop by Category
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Leads Category */}
            <Link
              href="/products/leads"
              className="group relative overflow-hidden rounded-2xl bg-gray-900 aspect-[4/3]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <div className="flex gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#1a1a1a' }} />
                  <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#1e3a5f' }} />
                  <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#7d8471' }} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Dog Leads</h3>
                <p className="text-gray-300 text-center mb-4">
                  Premium leads with built-in charm slots
                </p>
                <span className="text-amber-400 font-medium group-hover:translate-x-2 transition-transform">
                  Shop Leads →
                </span>
              </div>
            </Link>

            {/* Charms Category */}
            <Link
              href="/products/charms"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 aspect-[4/3]"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <div className="flex gap-2 mb-6">
                  {['🐾', '⭐', '❤️', '🌿', '🎵'].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
                    >
                      <span className="text-xl">{emoji}</span>
                    </div>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2">Charm Packs</h3>
                <p className="text-white/80 text-center mb-4">
                  20 themed packs with 5 charms each
                </p>
                <span className="text-white font-medium group-hover:translate-x-2 transition-transform">
                  Shop Charms →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Loved by Pups Everywhere</h2>
            <p className="mt-4 text-lg text-gray-600">
              Join thousands of happy dogs and their humans
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "My dog has never looked more stylish! The Adventure pack is perfect for our hiking trips.",
                author: "Sarah M.",
                location: "Melbourne",
              },
              {
                quote: "The quality is incredible. We've had our lead for 6 months and it still looks brand new.",
                author: "James K.",
                location: "Sydney",
              },
              {
                quote: "Everyone at the dog park asks where we got our lead. The charms are such a fun touch!",
                author: "Emma L.",
                location: "Brisbane",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="text-sm text-gray-500">
                  {testimonial.author} — {testimonial.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Upgrade Your Walks?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with a lead and your first charm pack. Free shipping on orders over $75.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products/leads"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-900 bg-amber-400 rounded-full hover:bg-amber-300 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
