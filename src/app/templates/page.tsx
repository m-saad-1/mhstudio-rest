import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageHero } from "@/components/marketing/page-hero";
const PortfolioFilterGrid = dynamic(() => import("@/components/marketing/portfolio-filter-grid").then((mod) => mod.PortfolioFilterGrid));
import { Reveal } from "@/components/ui/reveal";
import { portfolioItems } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Templates",
  description: "Explore our premium pre-built templates designed for modern restaurant brands.",
};

export default function TemplatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Templates"
        title="Premium Restaurant Templates."
        description="Explore our pre-built templates designed for modern restaurant brands."
        primaryCta={{ label: "Start Your Project", href: "/contact" }}
        secondaryCta={{ label: "See Pricing", href: "/pricing" }}
      />
      <Reveal as="section" className="section-space">
        <div className="content-shell space-y-16">
          <section aria-labelledby="web-app-templates" className="space-y-8">
            <h2 id="web-app-templates" className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
              Web App
            </h2>
            <PortfolioFilterGrid items={portfolioItems} />
          </section>

          <section aria-labelledby="admin-panel-templates">
            <h2 id="admin-panel-templates" className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
              Admin Panel
            </h2>
          </section>
        </div>
      </Reveal>
    </>
  );
}
