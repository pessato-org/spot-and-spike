export const metadata = {
  title: 'Terms of Service | Spot & Spike',
  description: 'Terms of service for Spot & Spike.',
};

export default function TermsPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Terms of Service
        </h1>

        <p className="text-sm text-gray-500 mb-8 text-center">
          Last updated: February 2026
        </p>

        <div className="prose prose-gray max-w-none">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using the Spot & Spike website (spotandspike.com) and 
            purchasing our products, you agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use our website.
          </p>

          <h2>Products and Pricing</h2>
          <ul>
            <li>All prices are listed in Australian Dollars (AUD) and include GST.</li>
            <li>We reserve the right to change prices at any time without notice.</li>
            <li>Product images are for illustration purposes. Actual products may vary slightly.</li>
            <li>We make every effort to ensure product availability, but items may sell out.</li>
          </ul>

          <h2>Orders and Payment</h2>
          <ul>
            <li>By placing an order, you agree to provide accurate and complete information.</li>
            <li>We reserve the right to refuse or cancel orders for any reason, including suspected fraud.</li>
            <li>Payment is processed securely through Stripe. We do not store your payment information.</li>
            <li>Your order is not confirmed until you receive an order confirmation email.</li>
          </ul>

          <h2>Shipping and Delivery</h2>
          <ul>
            <li>We ship to addresses within Australia only.</li>
            <li>Delivery times are estimates and not guaranteed.</li>
            <li>Risk of loss passes to you upon delivery to the carrier.</li>
            <li>Please see our <a href="/shipping">Shipping Policy</a> for more details.</li>
          </ul>

          <h2>Returns and Refunds</h2>
          <ul>
            <li>We offer a 30-day return policy for unused items in original packaging.</li>
            <li>Opened charm packs cannot be returned for hygiene reasons.</li>
            <li>Please see our <a href="/returns">Returns Policy</a> for more details.</li>
          </ul>

          <h2>Product Warranty</h2>
          <ul>
            <li>All leads come with a 1-year warranty against manufacturing defects.</li>
            <li>Normal wear and tear is not covered.</li>
            <li>Warranty claims require proof of purchase.</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, images, logos, and designs, is the 
            property of Spot & Spike and is protected by copyright and trademark laws. You 
            may not use, reproduce, or distribute our content without written permission.
          </p>

          <h2>User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the website for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with the proper functioning of the website</li>
            <li>Submit false or misleading information</li>
          </ul>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Spot & Spike shall not be liable for 
            any indirect, incidental, special, consequential, or punitive damages arising 
            from your use of our website or products.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Spot & Spike and its officers, directors, 
            employees, and agents from any claims, damages, or expenses arising from your 
            violation of these Terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of 
            Victoria, Australia. Any disputes shall be subject to the exclusive jurisdiction 
            of the courts of Victoria.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective 
            immediately upon posting to the website. Your continued use of the website 
            constitutes acceptance of the modified Terms.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about these Terms of Service, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> hello@spotandspike.com<br />
            <strong>Address:</strong> Melbourne, Victoria, Australia
          </p>
        </div>
      </div>
    </div>
  );
}
