import type { ReactNode } from "react";
import { faAmazon, faTiktok, faShopify, faMixer } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RefreshCw, Send, Bot } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@components/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/card";
import { Input } from "@/components/input";

export default function Feature(): ReactNode {
  const tempRevenueData = [
    { month: "Sep", revenue: 4280, expenses: 2450 },
    { month: "Oct", revenue: 5340, expenses: 3120 },
    { month: "Nov", revenue: 5920, expenses: 3680 },
    { month: "Dec", revenue: 6240, expenses: 3950 },
    { month: "Jan", revenue: 6875, expenses: 4200 },
    { month: "Feb", revenue: 7691, expenses: 4180 }
  ];

  return (
    <>
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

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative bg-card border-2 border-border rounded-lg p-8 order-2 md:order-1 flex flex-col items-center gap-4">
                  <div className="flex items-center justify-center gap-2">
                    <RefreshCw className="w-5 h-5 text-primary animate-spin" />
                    <span className="text-sm text-muted-foreground">Processing automated reconciliation...</span>
                  </div>
                  <div className="bg-primary/10 p-4 rounded border border-primary/30 w-full max-w-xs">
                    <div className="h-32 bg-linear-to-br from-primary/20 to-primary/5 rounded flex items-center justify-center">
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

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground">3. Your 24/7 AI CFO</h3>
                  <p className="text-lg text-muted-foreground">
                    Don&apos;t wait days for your accountant to reply to an email. Your AI assistant is always awake,
                    trained on UK tax laws and e-commerce nuance, ready to answer complex queries.
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
                            <p className="text-foreground">Here&apos;s a breakdown of your recent monthly averages:</p>
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
                          formatter={(value: number | undefined, name: string | undefined) => [
                            value !== undefined ? `£${value.toLocaleString()}` : "£0",
                            name ?? ""
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
    </>
  );
}
