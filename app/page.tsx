import type { ReactNode } from "react";
import Navbar from "@components/navbar";
import Hero from "@components/hero";
import Solution from "@components/solution";
import Partner from "@components/partner";
import Feature from "@components/feature";
import Testimonial from "@components/testimonial";
import WhyCazza from "@components/whyCazza";
import Pricing from "@components/pricing";
import FAQ from "@components/faq";
import CTA from "@components/cta";
import Footer from "@components/footer";

export default function Page(): ReactNode {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Solution />
      <Partner />
      <Feature />
      <Testimonial />
      <WhyCazza />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
