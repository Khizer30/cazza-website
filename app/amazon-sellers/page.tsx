"use client";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@components/button";
import { LINKS } from "@lib/links";

export default function Page(): ReactNode {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 py-16 flex items-center justify-center font-sans">
      <div className="relative bg-white max-w-4xl mx-4 w-full border-[10px] border-gray-800 rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.1)] p-6 sm:p-10 md:p-12 text-center">
        <div className="absolute inset-3 border-[3px] border-gray-500/50 rounded-lg pointer-events-none" />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4 tracking-wide uppercase">
          Cazza for Amazon Sellers
        </h1>
        <p className="text-gray-700 italic mb-10 text-base sm:text-lg max-w-3xl mx-auto">
          Cazza connects directly to Amazon&apos;s official Selling Partner API (SP-API) to turn your data into clear,
          real-time financial insights. You&apos;ll always know what&apos;s really happening behind your payouts &mdash;
          without spreadsheets or guesswork.
        </p>

        <div className="text-left space-y-8 max-w-2xl mx-auto font-light text-gray-800 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold font-serif text-gray-900 mb-3 border-b border-gray-200 pb-2">
              What Cazza Does
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="font-semibold text-gray-900">Orders &amp; Refunds</strong> &mdash; track sales,
                returns, and reimbursements.
              </li>
              <li>
                <strong className="font-semibold text-gray-900">Settlements &amp; Payouts</strong> &mdash; understand
                every payment cycle.
              </li>
              <li>
                <strong className="font-semibold text-gray-900">Fees &amp; FBA Costs</strong> &mdash; see fulfilment,
                storage, and ad spend clearly.
              </li>
              <li>
                <strong className="font-semibold text-gray-900">Performance &amp; Profit Metrics</strong> &mdash;
                uncover your true margins.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-serif text-gray-900 mb-3 border-b border-gray-200 pb-2">
              Ask Anything
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>&ldquo;Why doesn&apos;t my Amazon payout match my sales?&rdquo;</li>
              <li>&ldquo;What&apos;s my FBA fee percentage this month?&rdquo;</li>
              <li>&ldquo;How much profit did I make on Amazon UK in Q3?&rdquo;</li>
              <li>&ldquo;Am I close to the VAT threshold?&rdquo;</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-serif text-gray-900 mb-3 border-b border-gray-200 pb-2">
              Data Protection
            </h2>
            <p>
              We follow Amazon&apos;s Acceptable Use Policy and Data Protection Policy in full. Cazza does not share,
              resell, or combine your Amazon data with any non-Amazon source. Information is stored using bank-grade
              encryption, and deleted immediately if you disconnect your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-serif text-gray-900 mb-3 border-b border-gray-200 pb-2">
              Built by Experts
            </h2>
            <p>
              Cazza was built by chartered accountants who specialise in e-commerce. It&apos;s the missing layer between
              your Seller Central data and your business decisions &mdash; designed to give founders instant clarity
              without replacing their accountants.
            </p>
          </section>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Button
            onClick={() => (window.location.href = LINKS.appSignup)}
            className="bg-gray-900 hover:bg-gray-700 text-white rounded-full font-medium transition-colors duration-300 w-full sm:w-auto h-12 px-8"
          >
            Start your free trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-gray-800 text-gray-900 hover:text-gray-900 hover:bg-gray-100 rounded-full font-medium transition-colors duration-300 w-full sm:w-auto h-12 px-8"
          >
            <Link href={LINKS.home}>Back to Home</Link>
          </Button>
        </div>

        <div className="mt-16 text-gray-500 italic text-sm">
          <p>Issued by Cazza &bull; Empowering Amazon Sellers Worldwide</p>
          <div className="mt-4 border-t border-gray-300 w-16 mx-auto" />
        </div>
      </div>
    </main>
  );
}
