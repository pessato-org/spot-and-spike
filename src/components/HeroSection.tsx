'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-amber-50">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-amber-200 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-orange-200 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-amber-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Walks Just Got
              <span className="block text-amber-500">Way More Fun</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              Premium dog leads with customizable charms. Express your pup&apos;s 
              personality with our unique, interchangeable charm system.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/products/leads"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gray-900 rounded-full hover:bg-amber-500 transition-colors"
              >
                Shop Leads
              </Link>
              <Link
                href="/products/charms"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-900 bg-white border border-gray-200 rounded-full hover:border-amber-500 hover:text-amber-600 transition-colors"
              >
                Browse Charms
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto">
              {/* Main lead illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-16 bg-gray-800 rounded-full relative overflow-hidden shadow-2xl">
                  {/* Lead texture */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700" />
                  
                  {/* Charm slots */}
                  <div className="absolute inset-0 flex items-center justify-around px-8">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg flex items-center justify-center">
                      <span className="text-xl">🐾</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-red-500 shadow-lg flex items-center justify-center">
                      <span className="text-xl">❤️</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-lg flex items-center justify-center">
                      <span className="text-xl">⭐</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating charms */}
              <div className="absolute top-8 left-8 w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
                <span className="text-2xl">🌿</span>
              </div>
              <div className="absolute top-16 right-12 w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 shadow-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}>
                <span className="text-xl">🎵</span>
              </div>
              <div className="absolute bottom-16 left-16 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
                <span className="text-xl">🌟</span>
              </div>
              <div className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-red-400 to-rose-500 shadow-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.2s' }}>
                <span className="text-2xl">🦴</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
