import type { ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@components/accordion";

export default function FAQ(): ReactNode {
  return (
    <>
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
    </>
  );
}
