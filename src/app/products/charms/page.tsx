import ProductCard from "@/components/ProductCard";
import { charmPacks } from "@/data/products";

export const metadata = {
  title: "Charm Packs | Spot & Spike",
  description: "Browse our 20 themed charm packs. Each pack contains 5 unique charms to express your pup's personality.",
};

export default function CharmsPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Charm Packs</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Express your pup&apos;s unique personality with our themed charm packs. 
            Each pack includes 5 high-quality, interchangeable charms.
          </p>
        </div>

        {/* How charms work */}
        <div className="bg-amber-50 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Mix, Match, Repeat
              </h2>
              <p className="text-gray-600 mb-4">
                Our charms are designed to slide easily into the charm slots on any Spot & Spike lead. 
                Switch them out whenever you want a fresh look — no tools required!
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Durable silicone material
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Easy snap-in, snap-out design
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Waterproof and easy to clean
                </li>
              </ul>
            </div>
            <div className="flex gap-2 flex-wrap justify-center max-w-xs">
              {['🐾', '⭐', '❤️', '🌿', '🎵', '🌈', '🦴', '🎮'].map((emoji, i) => (
                <div
                  key={i}
                  className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center"
                >
                  <span className="text-2xl">{emoji}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {charmPacks.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Collect them all CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Collect Them All
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            With 20 themed packs and 100 unique charms, you can create endless combinations 
            to match every mood, season, and occasion.
          </p>
        </div>
      </div>
    </div>
  );
}
