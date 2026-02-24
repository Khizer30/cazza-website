"use client";
import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@components/button";

export default function CTA(): ReactNode {
  return (
    <>
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold">Stop waiting. Start asking Cazza.</h2>
            <Button
              size="lg"
              onClick={() => (window.location.href = "https://app.cazza.ai/signup")}
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
    </>
  );
}
