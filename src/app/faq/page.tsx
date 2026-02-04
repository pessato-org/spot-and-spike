import Link from 'next/link';

export const metadata = {
  title: 'FAQ | Spot & Spike',
  description: 'Frequently asked questions about Spot & Spike dog leads and charms.',
};

const faqs = [
  {
    category: 'Products',
    questions: [
      {
        q: 'What materials are the leads made from?',
        a: 'Our leads are made from premium, weather-resistant nylon webbing with reinforced stitching. The hardware is made from durable zinc alloy with a matte finish.',
      },
      {
        q: 'How long are the leads?',
        a: 'All our leads are 1.5 meters (5 feet) long, which is the ideal length for comfortable walking while maintaining control.',
      },
      {
        q: 'What are the charms made from?',
        a: 'Our charms are made from high-quality food-grade silicone. They\'re soft, flexible, waterproof, and completely safe for your pup.',
      },
      {
        q: 'How many charm slots does each lead have?',
        a: 'Each lead has 5 charm slots evenly spaced along the strap — perfect for showing off a full pack of charms!',
      },
      {
        q: 'Are the charms compatible with other brands?',
        a: 'Our charms are designed specifically for Spot & Spike leads. They may not fit other brands\' products as the slot system is proprietary.',
      },
    ],
  },
  {
    category: 'Charms & Customization',
    questions: [
      {
        q: 'How secure are the charms during walks?',
        a: 'Very secure! The charms snap firmly into the slots and stay put during normal activity. They won\'t fall out during walks, runs, or play.',
      },
      {
        q: 'Can I mix charms from different packs?',
        a: 'Absolutely! That\'s the whole point. Mix and match charms from any pack to create your own unique combinations.',
      },
      {
        q: 'How do I remove and swap charms?',
        a: 'Simply pinch the charm from both sides and slide it out of the slot. To insert a new charm, just slide it in until it clicks. No tools required!',
      },
      {
        q: 'How do I clean the charms?',
        a: 'The silicone charms are waterproof and easy to clean. Wipe with a damp cloth or rinse under water. For stubborn dirt, use mild soap.',
      },
    ],
  },
  {
    category: 'Orders & Shipping',
    questions: [
      {
        q: 'How much does shipping cost?',
        a: 'Shipping is $10 AUD for orders under $75. Orders over $75 AUD qualify for free shipping within Australia.',
      },
      {
        q: 'How long does delivery take?',
        a: 'Standard delivery within Australia takes 5-7 business days. You\'ll receive tracking information via email once your order ships.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Currently, we only ship within Australia. We\'re working on expanding to New Zealand and other countries soon!',
      },
      {
        q: 'Can I track my order?',
        a: 'Yes! Once your order ships, you\'ll receive an email with tracking information. You can also check your order status by contacting us.',
      },
    ],
  },
  {
    category: 'Returns & Warranty',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We offer a 30-day return policy for unused items in original packaging. If you\'re not happy, we\'ll make it right.',
      },
      {
        q: 'What if my lead is defective?',
        a: 'All our leads come with a 1-year warranty against manufacturing defects. Contact us and we\'ll send you a replacement.',
      },
      {
        q: 'Can I return charms if I don\'t like them?',
        a: 'Yes, unopened charm packs can be returned within 30 days. Opened packs cannot be returned for hygiene reasons, but we\'re happy to exchange them.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Can&apos;t find what you&apos;re looking for?{' '}
            <Link href="/contact" className="text-amber-600 hover:text-amber-700">
              Contact us
            </Link>
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                    <p className="text-gray-600">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-8 bg-gray-50 rounded-2xl">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            We&apos;re here to help! Reach out and we&apos;ll get back to you within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gray-900 rounded-full hover:bg-amber-500 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
