"use client";

import { useState } from "react";
import Check from "lucide-react/dist/esm/icons/check";
import X from "lucide-react/dist/esm/icons/x";
import { Reveal } from "@/components/ui/reveal";
import { Modal } from "@/components/ui/modal";
import { pricingPackages } from "@/data/site-content";

type BillingCycle = "monthly" | "yearly" | "onetime";
type PriceOption = { price: string; suffix?: string; originalPrice?: string; monthlyEquivalent?: string; note?: string; oneTimeOwnership?: boolean; smallNote?: string };
type PlatformPackage = { price: string; priceSuffix?: string; originalPrice?: string; pricingOptions?: Record<BillingCycle, PriceOption>; includes: string[]; modalDetails: { category: string; features: string[] }[] };

export function PricingGrid() {
  const [selectedPkg, setSelectedPkg] = useState<(typeof pricingPackages)[number] | null>(null);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const [platform, setPlatform] = useState<"website" | "website_app">("website");
  const selectedPlatform: PlatformPackage | undefined = selectedPkg?.platforms[platform];

  return (
    <>
      <div className="content-shell flex flex-col items-center gap-4 pb-8">
        <div className="segmented-control" role="group" aria-label="Platform">
          <button type="button" aria-pressed={platform === "website"} onClick={() => setPlatform("website")}>Website</button>
          <button type="button" aria-pressed={platform === "website_app"} onClick={() => setPlatform("website_app")}>Website + Mobile App</button>
        </div>
        <div className="segmented-control" role="group" aria-label="Billing cycle">
          <button type="button" aria-pressed={billingCycle === "monthly"} onClick={() => setBillingCycle("monthly")}>Monthly</button>
          <button type="button" aria-pressed={billingCycle === "yearly"} onClick={() => setBillingCycle("yearly")}>Yearly</button>
        </div>
      </div>

      <div className="content-shell grid gap-6 lg:grid-cols-3">
        {pricingPackages.map((pkg, index) => {
          const activePlatform: PlatformPackage = pkg.platforms[platform];
          const activePrice = activePlatform.pricingOptions?.[billingCycle];
          const originalPrice = activePrice?.originalPrice || (!activePrice && activePlatform.originalPrice);
          return (
            <Reveal key={pkg.name} delayMs={index * 60} className={`surface-card flex h-full min-w-0 flex-col p-6 ${pkg.featured ? "border-accent-border bg-accent-soft" : ""}`}>
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-2xl font-semibold text-foreground">{pkg.name}</h2>
                  {pkg.featured && <span className="rounded-tag bg-accent px-3 py-1 text-sm font-semibold text-foreground">Recommended</span>}
                </div>
                <div className="flex min-h-24 flex-col justify-center gap-2">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <p className="text-2xl font-bold text-foreground">{activePrice ? activePrice.price : activePlatform.price}</p>
                    {(activePrice ? activePrice.suffix : activePlatform.priceSuffix) && <span className="text-sm text-foreground-muted">{activePrice ? activePrice.suffix : activePlatform.priceSuffix}</span>}
                    {originalPrice && <span className="text-sm text-foreground-muted line-through">{originalPrice}</span>}
                  </div>
                  {activePrice?.monthlyEquivalent && <p className="text-sm font-medium text-foreground-body">{activePrice.monthlyEquivalent}</p>}
                  {activePrice?.note && <span className="w-fit rounded-tag border border-success/40 bg-success-soft px-2.5 py-1 text-sm font-semibold text-success">{activePrice.note}</span>}
                  {activePrice?.oneTimeOwnership && <p className="text-sm font-semibold text-accent-text">ONE-TIME OWNERSHIP</p>}
                  {activePrice?.smallNote && <p className="text-sm leading-relaxed text-foreground-muted">{activePrice.smallNote}</p>}
                </div>
              </div>
              <div className="mt-6 grid flex-1 content-start gap-3">
                {activePlatform.includes.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm leading-relaxed text-foreground-body">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-text" />
                    <span>{item.includes("Days Support") && activePlatform.pricingOptions && (billingCycle === "monthly" || billingCycle === "yearly") ? "Lifetime Support" : item}</span>
                  </div>
                ))}
              </div>
              <button type="button" onClick={() => setSelectedPkg(pkg)} className="button-primary mt-6 w-full" aria-haspopup="dialog">View Details<span className="sr-only"> for {pkg.name}</span></button>
            </Reveal>
          );
        })}
      </div>

      <Modal open={Boolean(selectedPkg)} onClose={() => setSelectedPkg(null)} titleId="package-title" className="max-w-4xl">
        {selectedPkg && selectedPlatform && (
          <>
            <div className="dialog-heading">
              <div className="min-w-0">
                <h3 id="package-title" className="text-xl font-semibold text-foreground sm:text-2xl">{selectedPkg.name} Package</h3>
                <p className="mt-1 text-sm text-foreground-body">{selectedPlatform.pricingOptions?.[billingCycle].price ?? selectedPlatform.price}</p>
              </div>
              <button type="button" onClick={() => setSelectedPkg(null)} className="icon-button" aria-label="Close package details"><X className="h-5 w-5" /></button>
            </div>
            <div className="dialog-body" tabIndex={0} role="region" aria-label={`${selectedPkg.name} package features`}>
              <div className="grid gap-8 md:grid-cols-2">
                {selectedPlatform.modalDetails.map((detailSection) => (
                  <div key={detailSection.category} className="space-y-3">
                    <h4 className="text-lg font-semibold text-accent-text">{detailSection.category}</h4>
                    <ul className="grid gap-2">
                      {detailSection.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm leading-relaxed text-foreground-body">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-text" />
                          <span>{feature.toLowerCase().includes("days post-launch support") && selectedPlatform.pricingOptions && (billingCycle === "monthly" || billingCycle === "yearly") ? feature.replace(/\d+\s+days post-launch support/i, "Lifetime support") : feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="dialog-footer">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div><p className="text-sm font-medium text-foreground">Ready to get started?</p><p className="mt-1 text-sm text-foreground-body">Book a free consultation to discuss this package.</p></div>
                <a href="/contact" className="button-primary sm:shrink-0">Start 14-Day Trial</a>
              </div>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
