"use client";
import { useEffect, useState, type ReactNode, type MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { faAmazon, faTiktok, faShopify, faMixer } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Star,
  Zap,
  RefreshCw,
  Users,
  Send,
  Bot
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Logo from "@assets/image/logo.webp";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@components/accordion";
import { Button } from "@components/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/card";
import { Input } from "@/components/input";
import Navbar from "@components/navbar";
import Hero from "@components/hero";
import Solution from "@components/solution";
import Partner from "@components/partner";
import Feature from "@components/feature";
import Testimonial from "@components/testimonial";
import WhyCazza from "@components/whyCazza";
import Pricing from "@components/pricing";
import FAQ from "@components/faq";

export default function LandingPage(): ReactNode {
  const router = useRouter();

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
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Solution />
      <Partner />
      <Feature />
      <Testimonial />
      <WhyCazza />
      <Pricing />
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold">Stop waiting. Start asking Cazza.</h2>
            <Button
              size="lg"
              onClick={() => router.push("/signup")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              {["ISO", "AES", "GDPR"].map((cert) => (
                <div key={cert} className="flex flex-col items-center gap-1">
                  <div className="relative w-16 h-16">
                    <Image src={`/${cert}.png`} alt={`${cert} Compliant`} fill className="object-contain" />
                  </div>
                  <span className="text-xs text-background/70">{cert} Compliant</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
