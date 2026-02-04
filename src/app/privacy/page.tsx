export const metadata = {
  title: 'Privacy Policy | Spot & Spike',
  description: 'Privacy policy for Spot & Spike.',
};

export default function PrivacyPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 mb-8 text-center">
          Last updated: February 2026
        </p>

        <div className="prose prose-gray max-w-none">
          <h2>Introduction</h2>
          <p>
            At Spot & Spike (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), we are committed to protecting 
            your privacy. This Privacy Policy explains how we collect, use, disclose, and 
            safeguard your information when you visit our website spotandspike.com and 
            make purchases from us.
          </p>

          <h2>Information We Collect</h2>
          
          <h3>Personal Information</h3>
          <p>When you make a purchase or create an account, we may collect:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Shipping address</li>
            <li>Phone number (optional)</li>
            <li>Payment information (processed securely by Stripe)</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Pages visited and time spent</li>
            <li>Referral source</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our website and products</li>
            <li>Prevent fraud and ensure security</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>We may share your information with:</p>
          <ul>
            <li><strong>Service providers:</strong> Such as payment processors (Stripe), shipping carriers (Australia Post), and email services</li>
            <li><strong>Legal authorities:</strong> When required by law or to protect our rights</li>
          </ul>
          <p>
            We do not sell your personal information to third parties.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. 
            Payment information is processed securely through Stripe and is never stored on our servers.
          </p>

          <h2>Cookies</h2>
          <p>
            We use cookies and similar technologies to improve your experience, analyze site 
            traffic, and personalize content. You can control cookies through your browser settings.
          </p>

          <h2>Your Rights</h2>
          <p>Under Australian privacy law, you have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or want to exercise your rights, 
            please contact us at:
          </p>
          <p>
            <strong>Email:</strong> hello@spotandspike.com<br />
            <strong>Address:</strong> Melbourne, Victoria, Australia
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </div>
      </div>
    </div>
  );
}
