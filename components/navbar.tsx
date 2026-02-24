"use client";
import { useEffect, type ReactNode, type MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@assets/image/logo.webp";
import { Button } from "@components/button";

export default function Navbar(): ReactNode {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const scrollToSection = (sectionId: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image src={Logo} alt="Cazza Logo" height={32} width={120} className="h-8 w-auto" />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#solution"
                onClick={scrollToSection("solution")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Solution
              </a>
              <a
                href="#platforms"
                onClick={scrollToSection("platforms")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Integrations
              </a>
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <a
                href="#pricing"
                onClick={scrollToSection("pricing")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Pricing
              </a>
              <a
                href="#faq"
                onClick={scrollToSection("faq")}
                className="text-foreground hover:text-primary transition-colors"
              >
                FAQ
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => (window.location.href = "https://app.cazza.ai/login")}>
                Sign In
              </Button>
              <Button
                onClick={() => (window.location.href = "https://app.cazza.ai/signup")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
