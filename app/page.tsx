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

export const tempRevenueData = [
  { month: "Sep", revenue: 4280, expenses: 2450 },
  { month: "Oct", revenue: 5340, expenses: 3120 },
  { month: "Nov", revenue: 5920, expenses: 3680 },
  { month: "Dec", revenue: 6240, expenses: 3950 },
  { month: "Jan", revenue: 6875, expenses: 4200 },
  { month: "Feb", revenue: 7691, expenses: 4180 }
];

const testimonials = [
  {
    quote: "Cazza.ai is meticulous, knowledgeable, and responsive. It's become a key part of how we run our business.",
    author: "Moicha Matcha",
    rating: 5
  },
  {
    quote: "Always willing to go the extra mile; communication, efficiency, and insights are top-notch.",
    author: "Stoic Store UK",
    rating: 5
  },
  {
    quote: "Attention to detail and overall knowledge is excellent. The platform keeps us on top of best practices.",
    author: "3PL Pro",
    rating: 5
  },
  {
    quote: "Excellent communication and a high standard of work, even on tight timelines. Cazza.ai just works.",
    author: "Footsie 100",
    rating: 5
  },
  {
    quote: "Professional, knowledgeable, and responsive — went above and beyond to make the numbers clear.",
    author: "Candisearch",
    rating: 5
  },
  { quote: "Quick to respond and a true one-stop shop for our data needs. Game changer.", author: "Eudemo", rating: 5 }
];

export default function LandingPage(): ReactNode {
  const router = useRouter();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
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
              <Button variant="outline" onClick={() => router.push("/login")}>
                Sign In
              </Button>
              <Button
                onClick={() => router.push("/signup")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
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
                <span>Rated "Game-changer for 7-figure eCom sellers"</span>
              </div>
            </div>

            {/* Dashboard Mockup */}
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
                      <p className="text-sm text-muted-foreground dark:text-white">Yesterday's profit comparison:</p>
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

      {/* Solution Section */}
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
                onClick={() => router.push("/signup")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Integrations */}
      <section id="platforms" className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Our Partner Integrations</h2>
              <p className="text-sm sm:text-base text-muted-foreground dark:text-white max-w-2xl mx-auto">
                Cazza connects securely to major platforms so you can view trusted sales, payout and accounting data in
                one place.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: faTiktok,
                  title: "TikTok Shop",
                  highlight: "Real-time reconciliation for TikTok Shop payouts.",
                  desc1: "We connect through TikTok Shop's official API to display sales, refunds, and payout data.",
                  desc2: "Cazza complies with TikTok's Data Security and Partner Integration policies."
                },
                {
                  icon: faAmazon,
                  title: "Amazon",
                  desc1:
                    "Cazza securely connects to Amazon's Selling Partner API to retrieve authorised seller data (orders, settlements, fees, and performance metrics).",
                  desc2:
                    "We use this data exclusively to generate analytics for the account owner — never for resale or cross-account benchmarking."
                },
                {
                  icon: faShopify,
                  title: "Shopify",
                  desc1: "Cazza uses Shopify's OAuth process to sync sales, orders, and refunds.",
                  desc2: "We never alter or push data back into Shopify — insights only."
                },
                {
                  icon: faMixer,
                  title: "Xero",
                  desc1:
                    "Cazza connects via Xero's official partner integration to show live accounting data and automate reconciliation.",
                  desc2: "Your credentials are encrypted and stored using bank-level security standards."
                }
              ].map((platform, idx) => (
                <Card
                  key={idx}
                  className="border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 animate-scale-in group"
                >
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center justify-center gap-3">
                      <div className="text-4xl bg-foreground/20 rounded-full p-2">
                        <FontAwesomeIcon icon={platform.icon} />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground dark:text-white">{platform.title}</h3>
                    </div>
                    {platform.highlight && (
                      <p className="text-sm font-medium text-primary text-center dark:text-white">
                        {platform.highlight}
                      </p>
                    )}
                    <p className="text-base text-muted-foreground dark:text-white">{platform.desc1}</p>
                    <p className="text-base text-muted-foreground dark:text-white">{platform.desc2}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <p className="text-xs sm:text-base text-muted-foreground dark:text-white max-w-2xl mx-auto">
                Cazza is independently developed by Social Commerce Accountants Ltd, a UK-registered accounting firm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">See it in action</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Cazza connects securely to major platforms so you can view trusted sales, payout and accounting data in
                one place.
              </p>
            </div>

            <div className="space-y-16">
              {/* Feature 1 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground">1. Break Down Data Silos</h3>
                  <p className="text-lg text-muted-foreground">
                    Stop logging into five different dashboards. We centralize your Amazon Seller Central, TikTok Shop,
                    and Shopify data into one single source of truth.
                  </p>
                </div>
                <div className="relative bg-card border-2 border-border rounded-lg p-8 flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    {[faAmazon, faTiktok, faShopify].map((icon, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-foreground/10 rounded-lg flex items-center justify-center">
                          <FontAwesomeIcon icon={icon} className="text-3xl" />
                        </div>
                        <div className="w-8 h-0.5 bg-primary/50 relative">
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full animate-pulse" />
                        </div>
                      </div>
                    ))}
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faMixer} className="text-3xl text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative bg-card border-2 border-border rounded-lg p-8 order-2 md:order-1 flex flex-col items-center gap-4">
                  <div className="flex items-center justify-center gap-2">
                    <RefreshCw className="w-5 h-5 text-primary animate-spin" />
                    <span className="text-sm text-muted-foreground">Processing automated reconciliation...</span>
                  </div>
                  <div className="bg-primary/10 p-4 rounded border border-primary/30 w-full max-w-xs">
                    <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">✓ Synced</div>
                        <div className="text-xs text-muted-foreground mt-1">All data reconciled</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 order-1 md:order-2">
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground">2. Automate the Grunt Work</h3>
                  <p className="text-lg text-muted-foreground">
                    Cazza automates the heavy lifting of reconciliation. We map every penny of revenue and expense to
                    Xero, ensuring your books are tax-ready 24/7.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground">3. Your 24/7 AI CFO</h3>
                  <p className="text-lg text-muted-foreground">
                    Don't wait days for your accountant to reply to an email. Your AI assistant is always awake, trained
                    on UK tax laws and e-commerce nuance, ready to answer complex queries.
                  </p>
                </div>
                <Card className="border-2 animate-slide-in-left">
                  <div className="border-b border-border px-4 py-2 flex items-center justify-center gap-2">
                    <Bot className="w-5 h-5 text-primary" />
                    <h3 className="text-base font-semibold text-foreground">Ask Cazza</h3>
                  </div>
                  <CardContent className="p-4 flex flex-col h-full">
                    <div className="space-y-4 flex-1 overflow-y-auto mb-4">
                      <div className="flex justify-end">
                        <div className="relative max-w-xs lg:max-w-md px-4 py-3 rounded-lg bg-primary text-primary-foreground">
                          <span className="text-sm">What is my TikTok avg sales?</span>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="relative max-w-xs lg:max-w-md px-4 py-3 rounded-lg bg-card border border-border shadow-sm text-foreground">
                          <div className="text-sm space-y-2">
                            <p className="text-foreground">
                              Your TikTok Shop average sales are <strong>£125,000</strong> per year.
                            </p>
                            <p className="text-foreground">Here's a breakdown of your recent monthly averages:</p>
                            <ul className="list-disc ml-4 space-y-1 text-foreground">
                              <li>
                                <strong>April:</strong> £12,500
                              </li>
                              <li>
                                <strong>May:</strong> £10,800
                              </li>
                              <li>
                                <strong>June:</strong> £11,200
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 border-t border-border pt-4 mt-auto">
                      <Input
                        value="What's my profit margin on TikTok?"
                        readOnly
                        className="flex-1 border border-border rounded-lg"
                        placeholder="Ask Cazza a question..."
                      />
                      <Button size="icon" className="px-3 py-2 rounded-lg bg-primary text-primary-foreground">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Feature 4 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Card className="border-2 animate-slide-in-right order-2 md:order-1">
                  <CardHeader>
                    <CardTitle>TikTok Sales vs Shopify Sales</CardTitle>
                    <CardDescription>Monthly sales comparison</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart
                        data={tempRevenueData.map((item) => ({
                          month: item.month,
                          tiktok: item.revenue,
                          shopify: item.expenses
                        }))}
                      >
                        <defs>
                          <linearGradient id="tiktokGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#96BF47" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#96BF47" stopOpacity={0.05} />
                          </linearGradient>
                          <linearGradient id="shopifyGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4A90E2" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#4A90E2" stopOpacity={0.05} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} />
                        <YAxis
                          tickFormatter={(value) => `£${value.toLocaleString()}`}
                          stroke="var(--muted-foreground)"
                          fontSize={12}
                        />
                        <Tooltip
                          formatter={(value: number | undefined, name: string) => [
                            value !== undefined ? `£${value.toLocaleString()}` : "£0",
                            name
                          ]}
                        />
                        <Area
                          type="monotone"
                          dataKey="tiktok"
                          stroke="#96BF47"
                          strokeWidth={2}
                          fill="url(#tiktokGradient)"
                          name="TikTok"
                        />
                        <Area
                          type="monotone"
                          dataKey="shopify"
                          stroke="#4A90E2"
                          strokeWidth={2}
                          fill="url(#shopifyGradient)"
                          name="Shopify"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                <div className="space-y-4 order-1 md:order-2">
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground">4. Scale With Confidence</h3>
                  <p className="text-lg text-muted-foreground">
                    Understand your true unit economics. Spot unprofitable SKUs instantly and double down on winners
                    with financial visibility previously reserved for 7-figure sellers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Loved by eCommerce sellers worldwide</h2>
            </div>
            <div className="relative">
              <Card className="border-2 shadow-xl">
                <CardContent className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="flex justify-center">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <blockquote className="text-xl lg:text-2xl text-center text-foreground font-medium leading-relaxed">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    <p className="text-center text-muted-foreground font-medium">
                      — {testimonials[currentTestimonial].author}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why to use Cazza */}
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
                    <Image src="/beofre.png" alt="Before using Cazza" fill className="object-contain" />
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
                    <Image src="/after.png" alt="After using Cazza" fill className="object-contain" />
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
