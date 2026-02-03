import Link from 'next/link';

export const metadata = {
  title: 'How It Works | Spot & Spike',
  description: 'Learn how to customize your dog lead with our interchangeable charm system.',
};

export default function HowItWorksPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Customizing your pup&apos;s look has never been easier. Our unique charm system 
            lets you express your dog&apos;s personality in seconds.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Step 1 */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-48 h-48 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-36 h-10 bg-gray-800 rounded-full" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Choose Your Lead
            </h2>
            <p className="text-gray-600">
              Start with one of our premium leads available in three colors: 
              Midnight Black, Ocean Blue, or Sage Green. Each lead features 
              built-in charm slots along the strap.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-48 h-48 mx-auto bg-amber-50 rounded-full flex items-center justify-center">
                <div className="grid grid-cols-3 gap-2">
                  {['🐾', '⭐', '❤️', '🌿', '🎵'].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center"
                    >
                      <span className="text-lg">{emoji}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Pick Your Charms
            </h2>
            <p className="text-gray-600">
              Browse our 20 themed charm packs, each containing 5 unique charms. 
              From Adventure to Aussie, Foodie to Luxe — there&apos;s a pack for 
              every personality.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-48 h-48 mx-auto bg-green-50 rounded-full flex items-center justify-center">
                <div className="w-36 h-10 bg-gray-800 rounded-full relative">
                  <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-amber-400 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-pink-400 rounded-full" />
                  <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-blue-400 rounded-full" />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Snap & Go
            </h2>
            <p className="text-gray-600">
              Simply slide your charms into the slots on your lead. They&apos;re 
              designed to stay secure during walks but pop out easily when you 
              want to switch things up.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Why Spot & Spike?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-white rounded-xl shadow-sm flex items-center justify-center">
                <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-sm text-gray-600">
                Durable materials built to withstand daily adventures
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-white rounded-xl shadow-sm flex items-center justify-center">
                <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Endless Combos</h3>
              <p className="text-sm text-gray-600">
                100 unique charms across 20 packs — mix and match freely
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-white rounded-xl shadow-sm flex items-center justify-center">
                <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Weather Proof</h3>
              <p className="text-sm text-gray-600">
                Rain or shine, your lead and charms stay looking great
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-white rounded-xl shadow-sm flex items-center justify-center">
                <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Made with Love</h3>
              <p className="text-sm text-gray-600">
                Designed by dog lovers, for dog lovers
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Common Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How secure are the charms during walks?',
                a: 'Very secure! The charms are designed to snap firmly into the slots and stay put during normal activity. They won\'t fall out during walks, runs, or play.',
              },
              {
                q: 'Can I use any charm on any lead?',
                a: 'Yes! All Spot & Spike charms are designed to work with all Spot & Spike leads, regardless of color or when you purchased them.',
              },
              {
                q: 'How do I clean the charms?',
                a: 'The silicone charms are waterproof and easy to clean. Simply wipe with a damp cloth or rinse under water. They\'ll look brand new!',
              },
              {
                q: 'How many charm slots does each lead have?',
                a: 'Each lead has 5 charm slots spaced evenly along the strap, perfect for showing off a full pack of charms.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-amber-600 font-medium hover:text-amber-700">
              View All FAQs →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Pick a lead, grab some charms, and give your pup a style upgrade they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products/leads"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-900 bg-amber-400 rounded-full hover:bg-amber-300 transition-colors"
            >
              Shop Leads
            </Link>
            <Link
              href="/products/charms"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
            >
              Browse Charms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
