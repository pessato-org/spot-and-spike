'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/lib/cart-context';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <Link href={`/products/${product.slug}`} className="block aspect-square relative overflow-hidden bg-gray-100">
        {/* Placeholder for product image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-3/4 h-3/4 rounded-xl flex items-center justify-center"
            style={{ 
              backgroundColor: product.colorHex || '#f3f4f6',
              opacity: product.category === 'lead' ? 0.8 : 1 
            }}
          >
            {product.category === 'lead' ? (
              <svg className="w-16 h-16 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
              </svg>
            ) : (
              <div className="grid grid-cols-3 gap-2 p-4">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-sm"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        {product.category === 'charm-pack' && product.charms && (
          <p className="mt-1 text-xs text-gray-500">
            {product.charms.length} charms included
          </p>
        )}
        
        {product.category === 'lead' && product.color && (
          <div className="mt-1 flex items-center gap-2">
            <span 
              className="w-3 h-3 rounded-full border border-gray-200" 
              style={{ backgroundColor: product.colorHex }}
            />
            <span className="text-xs text-gray-500">{product.color}</span>
          </div>
        )}

        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">
            {formatPrice(product.price)}
          </p>
          <button
            onClick={() => addItem(product)}
            className="px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-full hover:bg-amber-500 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
