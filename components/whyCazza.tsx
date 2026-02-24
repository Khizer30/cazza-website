import type { ReactNode } from "react";
import Image from "next/image";
import beforeImg from "@assets/image/before.webp";
import afterImg from "@assets/image/after.webp";

export default function WhyCazza(): ReactNode {
  return (
    <>
      <section id="why-cazza" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Why to use Cazza</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                See the difference Cazza makes in managing your eCommerce finances
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-2 border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-all">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground text-center">Before Cazza</h3>
                  <div className="border-2 border-border rounded-lg overflow-hidden bg-background relative h-64">
                    <Image src={beforeImg} alt="Before using Cazza" fill draggable={false} className="object-contain" />
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Manual data entry, spreadsheets, and time-consuming reconciliation
                  </p>
                </div>
              </div>
              <div className="border-2 border-primary/50 rounded-lg p-6 bg-card hover:border-primary transition-all">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground text-center">After Cazza</h3>
                  <div className="border-2 border-primary/30 rounded-lg overflow-hidden bg-background relative h-64">
                    <Image src={afterImg} alt="After using Cazza" fill draggable={false} className="object-contain" />
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Instant answers, automated insights, and real-time financial clarity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
