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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Simple, transparent pricing</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Rookie Plan */}
              <Card className="border-2 hover:shadow-xl transition-all">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Rookie</h3>
                    <div className="space-y-1">
                      <div className="text-lg font-semibold text-foreground">Free 30-day trial</div>
                      <div className="text-sm text-muted-foreground">Then pay what you think it's worth.</div>
                    </div>
                    <p className="text-sm text-muted-foreground pt-2">
                      Perfect for founders who want instant clarity without the jargon.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Includes:</p>
                    <ul className="space-y-2.5">
                      {[
                        "AI assistant trained in UK tax and e-commerce",
                        "Ask anything, like:",
                        "Unlimited AI searches + full chat history",
                        "Connect Amazon Seller Central, Shopify, TikTok Shop, Xero"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          {feature.includes("Ask anything") ? (
                            <span className="text-muted-foreground ml-5">{feature}</span>
                          ) : (
                            <>
                              <CheckCircle2 className="w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground">{feature}</span>
                            </>
                          )}
                        </li>
                      ))}
                      <li className="text-sm text-muted-foreground ml-7">
                        <div>"Do I need to register for VAT yet?"</div>
                        <div>"What's my net margin on TikTok vs Amazon?"</div>
                      </li>
                    </ul>
                  </div>
                  <Button
                    onClick={() => router.push("/login")}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Subscribe now
                  </Button>
                </CardContent>
              </Card>

              {/* Master Plan */}
              <Card className="border-2 hover:shadow-xl transition-all">
                <CardContent className="p-8 flex flex-col justify-between h-full">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">Master</h3>
                      <div className="space-y-1">
                        <div className="text-lg font-semibold text-foreground">From £150/month</div>
                        <div className="text-sm text-muted-foreground">(ex VAT)</div>
                      </div>
                      <p className="text-sm text-muted-foreground pt-2">For growing brands ready for expert support.</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Includes:</p>
                      <ul className="space-y-2.5">
                        {[
                          "Everything in Rookie, plus:",
                          "Direct live chat with your accountant",
                          "Full bookkeeping and bank reconciliations in Xero",
                          "Year-end accounts and corporation tax filings",
                          "VAT registration and quarterly/monthly returns"
                        ].map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button
                    onClick={() => router.push("/login")}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Book call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Which platforms can I connect?",
                  a: "Amazon, TikTok Shop, Shopify, and Xero — with more integrations coming soon."
                },
                {
                  q: "Do I still need my accountant?",
                  a: "Yes — Cazza gives you instant clarity, but your accountant still handles tax filing, year-end accounts, and strategic advice."
                },
                {
                  q: "Is my data secure?",
                  a: "Absolutely. All data is encrypted in-transit and at-rest. We're fully GDPR-compliant and never sell or share your information."
                }
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-border rounded-lg px-6 hover:border-primary/50 transition-colors last:border-b-2"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

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
