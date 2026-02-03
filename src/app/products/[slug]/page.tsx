'use client';

import { useParams } from 'next/navigation';
import { getProductBySlug, allProducts, leads, charmPacks } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/lib/cart-context';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <Link href="/" className="text-amber-600 hover:text-amber-700">
          Return to Home
        </Link>
      </div>
    );
  }

  // Get related products
  const relatedProducts = (product.category === 'lead' ? charmPacks : leads).slice(0, 4);

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-gray-900">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link 
                href={product.category === 'lead' ? '/products/leads' : '/products/charms'}
                className="hover:text-gray-900"
              >
                {product.category === 'lead' ? 'Leads' : 'Charm Packs'}
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        {/* Product Detail */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
            <div 
              className="w-full h-full flex items-center justify-center"
              style={{ 
                backgroundColor: product.colorHex || '#f9fafb'
              }}
            >
              {product.category === 'lead' ? (
                <div className="w-3/4 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-24 h-24 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
                  </svg>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-4 p-12">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            
            {product.color && (
              <div className="flex items-center gap-2 mb-4">
                <span 
                  className="w-5 h-5 rounded-full border-2 border-gray-200" 
                  style={{ backgroundColor: product.colorHex }}
                />
                <span className="text-gray-600">{product.color}</span>
              </div>
            )}

            <p className="text-3xl font-bold text-gray-900 mb-6">
              {formatPrice(product.price)}
            </p>

            <p className="text-gray-600 mb-6">
              {product.description}
            </p>

            {/* Charms list for charm packs */}
            {product.charms && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Included Charms:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.charms.map((charm, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {charm}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-gray-400 transition-colors"
                >
                  −
                </button>
                <span className="text-lg font-medium w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-gray-400 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, quantity)}
              className="w-full py-4 px-8 text-lg font-medium text-white bg-gray-900 rounded-full hover:bg-amber-500 transition-colors mb-4"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Features */}
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-3">
                {product.category === 'lead' ? (
                  <>
                    <li className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Built-in charm slots for customization
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Durable, weather-resistant material
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Reinforced stitching
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Comfortable padded handle
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      5 unique themed charms
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      High-quality silicone material
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Easy snap-in, snap-out design
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Waterproof and easy to clean
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Shipping info */}
            <div className="border-t border-gray-200 pt-6 mt-6">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                Free shipping on orders over $75 AUD
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {product.category === 'lead' ? 'Complete Your Look' : 'Get a Lead'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
