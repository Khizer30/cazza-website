"use client";
import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@components/button";
import { Card, CardContent } from "@components/card";
import { LINKS } from "@lib/links";

export default function Pricing(): ReactNode {
  return (
    <>
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Simple, transparent pricing</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 hover:shadow-xl transition-all">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Rookie</h3>
                    <div className="space-y-1">
                      <div className="text-lg font-semibold text-foreground">Free 30-day trial</div>
                      <div className="text-sm text-muted-foreground">Then pay what you think it&apos;s worth.</div>
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
                              <CheckCircle2 className="w-4 text-primary shrink-0 mt-0.5" />
                              <span className="text-foreground">{feature}</span>
                            </>
                          )}
                        </li>
                      ))}
                      <li className="text-sm text-muted-foreground ml-7">
                        <div>&quot;Do I need to register for VAT yet?&quot;</div>
                        <div>&quot;What&apos;s my net margin on TikTok vs Amazon?&quot;</div>
                      </li>
                    </ul>
                  </div>
                  <Button
                    onClick={() => (window.location.href = LINKS.appLogin)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Subscribe now
                  </Button>
                </CardContent>
              </Card>

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
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button
                    onClick={() => (window.location.href = LINKS.appLogin)}
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
    </>
  );
}
