import ProductCard from "@/components/ProductCard";
import { leads } from "@/data/products";

export const metadata = {
  title: "Dog Leads | Spot & Spike",
  description: "Shop our premium dog leads with built-in charm slots. Available in 3 beautiful colors.",
};

export default function LeadsPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dog Leads</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium dog leads with our patented charm slot system. Made from durable, 
            weather-resistant material with reinforced stitching.
          </p>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-sm text-gray-600">Durable materials built to last through every adventure</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Charm Slots</h3>
            <p className="text-sm text-gray-600">Built-in slots for our interchangeable charm system</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Weather Resistant</h3>
            <p className="text-sm text-gray-600">Rain or shine, your lead stays looking great</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leads.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bundle CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Bundle & Save
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Get a lead and 2 charm packs together and save 15% on your order.
          </p>
          <p className="text-amber-400 font-medium">
            Use code BUNDLE15 at checkout
          </p>
        </div>
      </div>
    </div>
  );
}
