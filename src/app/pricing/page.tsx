import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageHero } from "@/components/marketing/page-hero";
const PricingGrid = dynamic(() => import("@/components/marketing/pricing-grid").then((mod) => mod.PricingGrid));

export const metadata: Metadata = {
  title: "Pricing",
  description: "Explore MhStudio Launch, Growth, Scale AI, and Enterprise website packages for local businesses.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="No Upfront or Development Fees."
        description="Get your restaurant website and digital platform without a large upfront investment. Choose a managed monthly plan, or save more with yearly billing."
        primaryCta={{ label: "Start 14-Day Trial", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />
      <section className="pb-20 pt-4 sm:pb-24 sm:pt-6 lg:pb-32 lg:pt-8">
        <PricingGrid />

        {/* Custom Enterprise Package Section */}
        <div className="mt-16 content-shell text-center px-4">
          <div className="surface-card relative isolate overflow-hidden mx-auto max-w-3xl p-8 sm:p-12 border-accent-border/40 bg-surface-secondary">

            <h2 className="type-section text-foreground mb-4">Need a Custom Solution?</h2>
            <p className="text-foreground-body mb-8 text-sm sm:text-base max-w-xl mx-auto">
              For restaurants requiring advanced multi-location operations, franchise management, complex POS integrations, custom mobile applications, enterprise automation, inventory workflows, or a tailored restaurant operating system, we build around your exact requirements.
            </p>
            <a href="/contact" className="button-primary px-8 text-sm sm:text-base shadow-card transition-all hover:shadow-soft active:translate-y-0 inline-flex">
              Discuss Custom Enterprise Package
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
