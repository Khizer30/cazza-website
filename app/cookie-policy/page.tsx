import type { ReactNode } from "react";
import Link from "next/link";
import { LINKS } from "@lib/links";

export default function CookiePolicyPage(): ReactNode {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="grow bg-linear-to-b from-gray-50 to-gray-200 py-16 flex items-center justify-center">
        <div className="relative bg-white max-w-4xl mx-4 w-full border-10 border-gray-800 rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.1)] p-10">
          <div className="absolute inset-3 border-[3px] border-gray-500 rounded-lg pointer-events-none" />

          <h1 className="text-4xl font-serif text-gray-900 mb-8 text-center uppercase tracking-wide">Cookie Policy</h1>

          <div className="space-y-10 text-gray-800 leading-relaxed max-w-2xl mx-auto relative z-10">
            <section className="space-y-2 text-center">
              <p>
                <strong>Organisation:</strong> Social Commerce Accountants Ltd (SCA)
              </p>
              <p>
                <strong>Effective Date:</strong> 27th September 2025
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold font-serif text-gray-900">1. Introduction</h2>
              <p>
                This Cookie Policy explains how Social Commerce Accountants Ltd (&quot;SCA,&quot; &quot;we,&quot;
                &quot;our,&quot; &quot;us&quot;) uses cookies and similar technologies on our website and web
                application (&quot;Services&quot;). It should be read alongside our{" "}
                <Link href={LINKS.privacyPolicy} className="underline hover:text-gray-900 font-medium">
                  Privacy Policy
                </Link>
                .
              </p>
              <p>
                By continuing to use our Services, you consent to the use of cookies in accordance with this policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold font-serif text-gray-900">2. What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your device when you visit a website or use an application. They
                help us improve functionality, measure performance, and enhance your user experience.
              </p>
              <p>We also use similar technologies such as local storage and pixels.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold font-serif text-gray-900">3. Types of Cookies We Use</h2>

              <div className="space-y-6">
                <CookieType
                  title="3.1 Strictly Necessary Cookies"
                  description="Required for the Services to function (e.g. authentication, account login). Cannot be disabled."
                />
                <CookieType
                  title="3.2 Performance & Analytics Cookies"
                  items={[
                    "Collect information about how visitors use our Services (e.g. which pages are visited).",
                    "Help us improve functionality and usability.",
                    "We use tools such as Google Analytics."
                  ]}
                />
                <CookieType
                  title="3.3 Functional Cookies"
                  items={[
                    "Allow the Services to remember your preferences (e.g. language, settings).",
                    "Enhance personalisation."
                  ]}
                />
                <CookieType
                  title="3.4 Advertising & Third-Party Cookies"
                  items={[
                    "Used to deliver relevant content or marketing.",
                    "May be placed by third-party platforms (e.g. TikTok, Shopify integrations).",
                    "You can opt out where required by law."
                  ]}
                />
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold font-serif text-gray-900">4. How We Use Cookies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Enable secure login and session management.</li>
                <li>Analyse usage patterns to improve our Services.</li>
                <li>Store user preferences.</li>
                <li>Support integrations with third-party platforms.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold font-serif text-gray-900">5. Managing Cookies</h2>
              <p>
                You can manage or disable cookies via your browser settings. Please note that disabling certain cookies
                may impact the functionality of our Services.
              </p>
              <p>For more information on managing cookies:</p>
              <ul className="list-disc pl-6 space-y-2 wrap-break-word">
                <li>
                  Chrome:{" "}
                  <Link
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-900"
                  >
                    https://support.google.com/chrome/answer/95647
                  </Link>
                </li>
                <li>
                  Safari:{" "}
                  <Link
                    href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-900"
                  >
                    https://support.apple.com/en-gb/guide/safari/sfri11471/mac
                  </Link>
                </li>
                <li>
                  Firefox:{" "}
                  <Link
                    href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-900"
                  >
                    https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop
                  </Link>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold font-serif text-gray-900">6. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with the
                updated effective date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold font-serif text-gray-900">7. Contact</h2>
              <p>If you have any questions about our use of cookies, please contact:</p>
              <div className="space-y-2 border-l-4 border-gray-200 pl-4 py-1">
                <p>
                  <strong>Data Protection Officer (DPO):</strong> Samuel Hoye
                </p>
                <p>Social Commerce Accountants Ltd</p>
                <p>Unit D2, Office 2, The Maltings, Sawbridgeworth, CM21 9JX</p>
                <p>
                  Email:{" "}
                  <Link
                    href="mailto:sam@socialcommerceaccountants.com"
                    className="underline hover:text-gray-900 font-medium"
                  >
                    sam@socialcommerceaccountants.com
                  </Link>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-16 text-center text-gray-500 italic text-sm border-t border-gray-100 pt-8">
            <p>Issued by Social Commerce Accountants Ltd • Protecting Your Data with Integrity</p>
          </div>
        </div>
      </main>
    </div>
  );
}

interface Cookie {
  title: string;
  description?: string;
  items?: string[];
}

function CookieType({ title, description, items }: Cookie): ReactNode {
  return (
    <div>
      <h3 className="text-xl font-semibold font-serif text-gray-900">{title}</h3>
      {description && <p className="mt-2">{description}</p>}
      {items && (
        <ul className="list-disc pl-6 mt-3 space-y-2">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
