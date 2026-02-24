import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { Children } from "@typedefs/types";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cazza AI | Instant Financial Insights for E-commerce stores",
  description:
    "Stop manual spreadsheets. Cazza.ai connects Amazon, TikTok Shop, and Shopify to give you instant profit insights and automated Xero reconciliation. Start your free trial today."
};

export default function RootLayout({ children }: Children): ReactNode {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
