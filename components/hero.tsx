import { type ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Star, Zap } from "lucide-react";
import Logo from "@assets/image/logo.webp";
import { Button } from "@components/button";

export default function Hero(): ReactNode {
  const router = useRouter();

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-background via-muted/30 to-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--hero-gradient-1)),transparent_50%),radial-gradient(circle_at_80%_20%,hsl(var(--hero-gradient-2)),transparent_50%),radial-gradient(circle_at_20%_80%,hsl(var(--hero-gradient-3)),transparent_50%)] opacity-20 animate-gradient-shift bg-[length:200%_200%]" />
          <div className="absolute top-20 left-[10%] w-32 h-32 border-2 border-primary/20 rounded-lg animate-float-1" />
          <div className="absolute top-40 right-[15%] w-24 h-24 border-2 border-accent/30 rotate-45 animate-float-2" />
          <div className="absolute bottom-32 left-[20%] w-20 h-20 bg-primary/10 rounded-full animate-float-3" />
          <div className="absolute bottom-20 right-[25%] w-16 h-16 border-2 border-accent/20 rounded-full animate-float-1" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
                Instant Answers From Your Numbers
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Connect your Amazon, TikTok Shop, Shopify & Xero accounts securely — and get instant financial insights
                powered by OpenAI.
              </p>
              <p className="text-base text-green-400 font-medium py-0">We never alter your data. Read-only access.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => router.push("/signup")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
                >
                  Start Free Trial Today
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 hover:bg-muted/50">
                  Book a Demo
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-accent" />
                  ))}
                </div>
                <span>Rated &quot;Game-changer for 7-figure eCom sellers&quot;</span>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
                <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-accent/60" />
                    <div className="w-3 h-3 rounded-full bg-primary/60" />
                  </div>
                </div>
                <div className="p-6 bg-background/50 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="flex justify-end">
                      <div className="bg-primary/10 text-foreground px-4 py-3 rounded-2xl max-w-[80%]">
                        <p className="text-sm font-medium">
                          How much profit did I make on TikTok Shop yesterday vs. Shopify?
                        </p>
                      </div>
                    </div>
                    <div className="bg-card border border-border p-4 rounded-2xl shadow-sm space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <Zap className="w-4 h-4 text-primary" />
                        </div>
                        <Image src={Logo} alt="Cazza" height={16} width={64} className="h-4 w-auto" />
                      </div>
                      <p className="text-sm text-muted-foreground dark:text-white">
                        Yesterday&apos;s profit comparison:
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground dark:text-white">TikTok Shop Profit</span>
                          <span className="font-bold text-green-400 text-lg">£2,840</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground dark:text-white">Shopify Profit</span>
                          <span className="font-bold text-green-400 text-lg">£1,920</span>
                        </div>
                        <div className="flex justify-between py-2 bg-primary/10 px-2 rounded">
                          <span className="font-medium text-foreground dark:text-white">Difference</span>
                          <span className="font-bold text-green-400 text-xl">+£920</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
