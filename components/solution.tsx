"use client";
import type { ReactNode } from "react";
import { ArrowRight, MessageSquare, Zap, RefreshCw, Users } from "lucide-react";
import { Button } from "@components/button";
import { Card, CardContent } from "@components/card";

export default function Solution(): ReactNode {
  return (
    <>
      <section id="solution" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Cazza plugs into Amazon, TikTok Shop, Shopify & Xero — and gives you answers instantly.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: MessageSquare,
                  title: "Ask plain-English questions",
                  description: "Like 'What's my TikTok profit this month?'"
                },
                {
                  icon: Zap,
                  title: "See live insights in seconds",
                  description: "Cash flow, profit, VAT, and payouts instantly."
                },
                {
                  icon: RefreshCw,
                  title: "Keep Xero synced automatically",
                  description: "No more reconciliation nightmares."
                },
                {
                  icon: Users,
                  title: "Invite your team",
                  description: "Shared channels for clarity across departments."
                }
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 animate-scale-in group"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button
                size="lg"
                onClick={() => (window.location.href = "https://app.cazza.ai/signup")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
