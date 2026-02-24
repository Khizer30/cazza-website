import type { ReactNode } from "react";
import { faAmazon, faTiktok, faShopify, faMixer } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent } from "@components/card";

export default function Partner(): ReactNode {
  return (
    <>
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
    </>
  );
}
