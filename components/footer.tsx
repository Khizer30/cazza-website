"use client";
import { useEffect, type ReactNode, type MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@assets/image/logo.webp";

export default function Footer(): ReactNode {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const scrollToSection = (sectionId: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", `#${sectionId}`);
  };

  return (
    <>
      <footer className="bg-foreground text-background py-12 border-t-2 border-background/20 dark:border-background/40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                <Image src={Logo} alt="Cazza" height={32} width={120} className="h-8 w-auto brightness-0 invert" />
              </Link>
              <p className="text-sm text-background/70">
                Cazza is developed by Social Commerce Accountants Ltd, a UK-registered company (Company No. 13802919).
              </p>
              <p className="text-sm text-background/70">support@cazza.ai</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a
                    href="#solution"
                    onClick={scrollToSection("solution")}
                    className="hover:text-background transition-colors"
                  >
                    Solution
                  </a>
                </li>
                <li>
                  <a
                    href="#platforms"
                    onClick={scrollToSection("platforms")}
                    className="hover:text-background transition-colors"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    onClick={scrollToSection("pricing")}
                    className="hover:text-background transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <Link href="/privacy-policy" className="hover:text-background transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="hover:text-background transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
            <p>© {new Date().getFullYear()} Cazza.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
