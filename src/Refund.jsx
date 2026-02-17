import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">Refund Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: February 2025</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">30-Day Money-Back Guarantee</h2>
            <p>We want you to be completely satisfied with Ghost. If you're not happy with your purchase, we offer a full refund within 30 days of your initial subscription payment—no questions asked.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">How to Request a Refund</h2>
            <p className="mb-4">To request a refund, simply:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-400">
              <li>Email us at <a href="mailto:support@ghost.inc" className="text-purple-400 hover:underline">support@ghost.inc</a></li>
              <li>Include your account email and the reason for your refund (optional)</li>
              <li>We'll process your refund within 5-7 business days</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Monthly Subscriptions</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Full refund available within 30 days of your first payment</li>
              <li>After 30 days, you can cancel anytime and won't be charged for the next billing cycle</li>
              <li>No partial refunds for unused portions of a billing period</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Lifetime Deal</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Full refund available within 30 days of purchase</li>
              <li>After 30 days, lifetime deals are non-refundable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Exceptions</h2>
            <p>Refunds may be denied if we detect abuse of our refund policy, such as repeated purchases and refunds, or if the account has violated our Terms of Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Questions?</h2>
            <p>If you have any questions about our refund policy, please contact us at <a href="mailto:support@ghost.inc" className="text-purple-400 hover:underline">support@ghost.inc</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RefundPolicy;
