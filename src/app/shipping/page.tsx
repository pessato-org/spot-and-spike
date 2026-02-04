import Link from 'next/link';

export const metadata = {
  title: 'Shipping | Spot & Spike',
  description: 'Shipping information for Spot & Spike orders.',
};

export default function ShippingPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Shipping Information
        </h1>

        <div className="prose prose-gray max-w-none">
          <div className="bg-amber-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mt-0">Free Shipping</h2>
            <p className="text-gray-600 mb-0">
              Enjoy <strong>free standard shipping</strong> on all orders over $75 AUD within Australia!
            </p>
          </div>

          <h2>Shipping Rates</h2>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order Value
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Shipping Cost
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Under $75 AUD
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $10 AUD
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $75 AUD and over
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                    FREE
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Delivery Times</h2>
          <p>
            We process and ship orders within 1-2 business days. Once shipped, delivery times are:
          </p>
          <ul>
            <li><strong>Metro areas (Sydney, Melbourne, Brisbane, Perth, Adelaide):</strong> 3-5 business days</li>
            <li><strong>Regional areas:</strong> 5-7 business days</li>
            <li><strong>Remote areas:</strong> 7-10 business days</li>
          </ul>
          <p className="text-sm text-gray-500">
            Note: Delivery times may be longer during peak periods (e.g., Christmas, sales events).
          </p>

          <h2>Order Tracking</h2>
          <p>
            Once your order ships, you&apos;ll receive an email with tracking information. 
            You can use this to track your package through Australia Post.
          </p>

          <h2>Shipping Coverage</h2>
          <p>
            We currently ship to all addresses within <strong>Australia</strong> only.
          </p>
          <p>
            International shipping is not yet available, but we&apos;re working on expanding 
            to New Zealand and other countries. Sign up for our newsletter to be notified 
            when we launch international shipping!
          </p>

          <h2>P.O. Boxes</h2>
          <p>
            Yes, we can deliver to P.O. Boxes within Australia.
          </p>

          <h2>Delivery Issues</h2>
          <p>
            If you haven&apos;t received your order within the expected timeframe, or if 
            there&apos;s an issue with your delivery, please{' '}
            <Link href="/contact" className="text-amber-600 hover:text-amber-700">
              contact us
            </Link>{' '}
            and we&apos;ll help sort it out.
          </p>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mt-0">Have Questions?</h3>
            <p className="text-gray-600 mb-4">
              Our team is happy to help with any shipping-related questions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-amber-500 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
