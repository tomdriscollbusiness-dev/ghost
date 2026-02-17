import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: February 2025</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">When you use Ghost, we collect:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li><strong>Account Information:</strong> Email address when you sign up for our waitlist or create an account.</li>
              <li><strong>Connected Accounts:</strong> When you connect your LinkedIn or X accounts, we access only the permissions necessary to post content on your behalf.</li>
              <li><strong>Content Data:</strong> The content you create, upload, or generate using our platform.</li>
              <li><strong>Usage Data:</strong> How you interact with our service to improve the product.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>To provide and maintain our service</li>
              <li>To post content to your connected social media accounts</li>
              <li>To send you updates about your account and our service</li>
              <li>To improve and personalize your experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Data Storage & Security</h2>
            <p>Your data is stored securely using industry-standard encryption. We use Supabase for our database infrastructure, which provides enterprise-grade security. We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Third-Party Services</h2>
            <p>We integrate with LinkedIn and X (Twitter) APIs to post content on your behalf. These services have their own privacy policies. We only request the minimum permissions necessary to provide our service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Access the personal data we hold about you</li>
              <li>Request deletion of your data</li>
              <li>Disconnect your social media accounts at any time</li>
              <li>Export your content and data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@ghost.inc" className="text-purple-400 hover:underline">privacy@ghost.inc</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
