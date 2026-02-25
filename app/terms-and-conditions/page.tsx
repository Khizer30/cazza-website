import type { ReactNode } from "react";
import Link from "next/link";

export default function Page(): ReactNode {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 py-16 flex items-center justify-center font-sans">
      <div className="relative bg-white max-w-4xl mx-4 w-full border-[10px] border-gray-800 rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.1)] p-6 sm:p-10 md:p-12">
        <div className="absolute inset-3 border-[3px] border-gray-500/50 rounded-lg pointer-events-none" />

        <h1 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-8 text-center uppercase tracking-wide">
          Terms and Conditions of Use
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          <div className="space-y-2 text-center text-gray-600 mb-10">
            <p>
              <strong className="text-gray-900">Organisation:</strong> Social Commerce Accountants Ltd (Cazza.ai)
            </p>
            <p>
              <strong className="text-gray-900">Effective Date:</strong> September 2025
            </p>
            <p>
              <strong className="text-gray-900">Contact Email:</strong>{" "}
              <Link
                href="mailto:contact@socialcommerceaccountants.com"
                className="hover:text-primary transition-colors underline underline-offset-4 decoration-gray-300 hover:decoration-primary"
              >
                contact@socialcommerceaccountants.com
              </Link>
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold font-serif text-gray-900 pb-2 border-b border-gray-200">
              1. Definitions
            </h2>
            <p>For the purposes of these Terms:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-gray-900">Account</strong> – a registered user account required to access and
                use the Service.
              </li>
              <li>
                <strong className="text-gray-900">Service</strong> – the Cazza.ai SaaS platform, including all features,
                dashboards, and integrations (Amazon, Shopify, TikTok Shop, Xero, and others).
              </li>
              <li>
                <strong className="text-gray-900">Subscription</strong> – a paid plan granting access to the Service,
                whether monthly or annually.
              </li>
              <li>
                <strong className="text-gray-900">User Content</strong> – data or material submitted or imported by you
                or on your behalf into the Service.
              </li>
              <li>
                <strong className="text-gray-900">Update</strong> – modifications, patches, or upgrades we may release.
              </li>
              <li>
                <strong className="text-gray-900">We/us/our</strong> – Social Commerce Accountants Ltd, trading as
                Cazza.ai, company number 13802919, registered at Unit D2, Office 2, The Maltings, Station Road,
                Sawbridgeworth, CM21 9JX.
              </li>
              <li>
                <strong className="text-gray-900">You/your</strong> – the individual, business, or organisation using
                the Service.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold font-serif text-gray-900 pb-2 border-b border-gray-200">
              2. Information About Us
            </h2>
            <p>The Service is owned and operated by Social Commerce Accountants Ltd, trading as Cazza.ai.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold font-serif text-gray-900 pb-2 border-b border-gray-200">
              3. Access and Availability
            </h2>
            <p>
              Access to the Service requires a Subscription. Upon purchase, the Service is available for the duration of
              that Subscription and any renewals, subject to these Terms.
            </p>
            <p>
              We use reasonable endeavours to maintain Service availability 24/7, except for maintenance, downtime, or
              Force Majeure events.
            </p>
            <p>
              We may update or change the Service at any time, including adding or removing features, provided such
              changes do not materially reduce your Subscription&apos;s core functionality.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold font-serif text-gray-900 pb-2 border-b border-gray-200">
              4. Accounts
            </h2>
            <p>You must be at least 18 years of age to create an Account.</p>
            <p>
              You agree to provide accurate and complete information and keep it updated. You are responsible for
              maintaining your credentials and all activity under your Account.
            </p>
            <p>If you believe your Account is compromised, notify us immediately.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold font-serif text-gray-900 pb-2 border-b border-gray-200">
              5. Subscriptions and Pricing
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Different Subscription tiers offer different access levels.</li>
              <li>Fees are payable in advance and are non-refundable unless required by law.</li>
              <li>We may change pricing with 30 days&apos; notice. VAT applies where applicable.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold font-serif text-gray-900 pb-2 border-b border-gray-200">
              6. Payments
            </h2>
            <p>
              Payment methods are outlined on our website (e.g., card, Stripe, PayPal). If a payment fails, we may
              suspend access until payment is received.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold font-serif text-gray-900 pb-2 border-b border-gray-200">
              7. Cancellations and Termination
            </h2>
            <p>
              You may cancel your Subscription at any time via your Account. It remains active until the end of the paid
              term, after which access and data may be deleted.
            </p>
            <p>We may suspend or terminate access if:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You breach these Terms.</li>
              <li>Payments are overdue.</li>
              <li>Your use threatens our Service or reputation.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold font-serif text-gray-900 pb-2 border-b border-gray-200">
              8. Intellectual Property
            </h2>
            <p>
              The Service and its design, code, and features are the exclusive property of Social Commerce Accountants
              Ltd.
            </p>
            <p>
              You retain ownership of your User Content but grant us a licence to process and store it solely to operate
              the Service.
            </p>
            <p>You must not copy, resell, or reverse engineer the Service.</p>
          </section>

          <section className="space-y-4 pt-8 mt-12 text-center">
            <h3 className="text-xl font-semibold font-serif text-gray-900">Company Details</h3>
            <div className="text-gray-600 space-y-1">
              <p>Social Commerce Accountants Ltd (trading as Cazza.ai)</p>
              <p>Company Number: 13802919</p>
              <p>Registered Office: Unit D2, Office 2, The Maltings, Station Road, Sawbridgeworth, CM21 9JX</p>
              <p>Founder: Samuel Hoye</p>
            </div>
          </section>
        </div>

        <div className="mt-16 text-center text-gray-500 italic text-sm">
          <p>Issued by Social Commerce Accountants Ltd &bull; Terms Governed by UK Law</p>
          <div className="mt-4 border-t border-gray-300 w-16 mx-auto" />
        </div>
      </div>
    </main>
  );
}
