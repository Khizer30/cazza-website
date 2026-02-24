"use client";
import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@components/button";
import isoImg from "@assets/image/iso.webp";
import aesImg from "@assets/image/aes.webp";
import gdprImg from "@assets/image/gdpr.webp";
import { LINKS } from "@lib/links";

export default function CTA(): ReactNode {
  const certs = [
    { name: "ISO", image: isoImg },
    { name: "AES", image: aesImg },
    { name: "GDPR", image: gdprImg }
  ];

  return (
    <>
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold">Stop waiting. Start asking Cazza.</h2>
            <Button
              size="lg"
              onClick={() => (window.location.href = LINKS.appSignup)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              {certs.map((cert) => (
                <div key={cert.name} className="flex flex-col items-center gap-1">
                  <div className="relative w-16 h-16">
                    <Image
                      src={cert.image}
                      alt={`${cert.name} Compliant`}
                      fill
                      draggable={false}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs text-background/70">{cert.name} Compliant</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
