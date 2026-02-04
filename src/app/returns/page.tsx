import Link from 'next/link';

export const metadata = {
  title: 'Returns & Refunds | Spot & Spike',
  description: 'Returns and refunds policy for Spot & Spike.',
};

export default function ReturnsPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Returns & Refunds
        </h1>

        <div className="prose prose-gray max-w-none">
          <div className="bg-green-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mt-0">30-Day Guarantee</h2>
            <p className="text-gray-600 mb-0">
              Not happy with your purchase? We offer a <strong>30-day money-back guarantee</strong> on all unused items.
            </p>
          </div>

          <h2>Return Policy</h2>
          <p>
            We want you and your pup to love your Spot & Spike products. If you&apos;re not 
            completely satisfied, you can return eligible items within 30 days of delivery.
          </p>

          <h3>Eligible for Return</h3>
          <ul>
            <li>Unused leads in original packaging</li>
            <li>Unopened charm packs</li>
            <li>Items purchased within the last 30 days</li>
          </ul>

          <h3>Not Eligible for Return</h3>
          <ul>
            <li>Used or damaged items</li>
            <li>Opened charm packs (for hygiene reasons)</li>
            <li>Items purchased more than 30 days ago</li>
            <li>Sale or clearance items (final sale)</li>
          </ul>

          <h2>How to Return</h2>
          <ol>
            <li>
              <strong>Contact us</strong> — Email us at hello@spotandspike.com with your 
              order number and reason for return.
            </li>
            <li>
              <strong>Get approval</strong> — We&apos;ll review your request and send you 
              return instructions within 24 hours.
            </li>
            <li>
              <strong>Ship it back</strong> — Pack the item securely and ship it to the 
              address we provide. You&apos;re responsible for return shipping costs unless 
              the item is defective.
            </li>
            <li>
              <strong>Get your refund</strong> — Once we receive and inspect the item, 
              we&apos;ll process your refund within 5 business days.
            </li>
          </ol>

          <h2>Refunds</h2>
          <p>
            Refunds will be issued to your original payment method. Please allow 5-10 
            business days for the refund to appear in your account, depending on your bank.
          </p>
          <p>
            <strong>Note:</strong> Original shipping costs are non-refundable unless the 
            return is due to our error or a defective product.
          </p>

          <h2>Exchanges</h2>
          <p>
            Want a different color or charm pack? We&apos;re happy to exchange your item. 
            Contact us and we&apos;ll arrange the exchange. You&apos;ll only pay the 
            difference if the new item costs more, plus return shipping.
          </p>

          <h2>Defective or Damaged Items</h2>
          <p>
            Received a defective or damaged item? We&apos;re sorry! Contact us immediately 
            with photos of the issue, and we&apos;ll send you a replacement or full refund 
            at no extra cost.
          </p>

          <h2>Warranty</h2>
          <p>
            All Spot & Spike leads come with a <strong>1-year warranty</strong> against 
            manufacturing defects. This covers:
          </p>
          <ul>
            <li>Stitching coming undone</li>
            <li>Hardware failure (clips, rings)</li>
            <li>Charm slot defects</li>
          </ul>
          <p>
            Normal wear and tear is not covered. To make a warranty claim, contact us 
            with your order number and photos of the defect.
          </p>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mt-0">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              Have questions about returns? We&apos;re here to help.
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
