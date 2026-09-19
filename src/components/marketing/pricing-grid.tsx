"use client";

import { useState } from "react";
import Link from "next/link";
import Check from "lucide-react/dist/esm/icons/check";
import X from "lucide-react/dist/esm/icons/x";
import { Reveal } from "@/components/ui/reveal";
import { pricingPackages } from "@/data/site-content";

export function PricingGrid() {
  const [selectedPkg, setSelectedPkg] = useState<typeof pricingPackages[0] | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly" | "onetime">("monthly");
  const [platform, setPlatform] = useState<"website" | "website_app">("website");

  return (
    <>
      {/* Promotional Banner */}
      {/* 
      <div className="flex justify-center mb-8">
        ... scarcity card content ...
      </div>
      */}

      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-full border border-white/10 bg-white/[0.02] p-1">
          <button
            onClick={() => setPlatform("website")}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${platform === "website" ? "bg-amber-500 text-zinc-950 shadow-[0_4px_14px_rgba(245,158,11,0.3)]" : "text-foreground-muted hover:text-foreground"}`}
          >
            Website
          </button>
          <button
            onClick={() => setPlatform("website_app")}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${platform === "website_app" ? "bg-amber-500 text-zinc-950 shadow-[0_4px_14px_rgba(245,158,11,0.3)]" : "text-foreground-muted hover:text-foreground"}`}
          >
            Website + Mobile App
          </button>
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-full border border-white/10 bg-white/[0.02] p-1">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${billingCycle === "monthly" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)]" : "text-foreground-muted hover:text-foreground border border-transparent"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${billingCycle === "yearly" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)]" : "text-foreground-muted hover:text-foreground border border-transparent"}`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="content-shell grid gap-6 lg:grid-cols-3">
        {pricingPackages.map((pkg, index) => {
          const activePlatform = pkg.platforms[platform];
          const activePrice = activePlatform.pricingOptions ? activePlatform.pricingOptions[billingCycle] : null;

          return (
            <Reveal
              key={pkg.name}
              delayMs={index * 60}
              className={`surface-card flex h-full flex-col p-6 ${pkg.featured ? "border-amber-400/25 bg-[linear-gradient(180deg,rgba(245,158,11,0.1),rgba(17,17,19,0.88))]" : ""}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="flex items-baseline gap-2 text-2xl font-semibold text-foreground">
                    {pkg.name}
                  </h2>
                  {pkg.featured && (
                    <span className="rounded-none bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-zinc-950 shadow-[0_4px_14px_rgba(245,158,11,0.3)]">
                      Recommended
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1 min-h-[5.5rem] justify-center">
                  <div className="flex items-baseline gap-1">
                    <p className="text-2xl font-bold text-foreground">
                      {activePrice ? activePrice.price : activePlatform.price}
                    </p>
                    {/* @ts-ignore */}
                    {(activePrice ? activePrice.suffix : activePlatform.priceSuffix) && (
                      <span className="text-sm font-normal text-foreground-muted opacity-80">
                        {/* @ts-ignore */}
                        {activePrice ? activePrice.suffix : activePlatform.priceSuffix}
                      </span>
                    )}
                    {/* @ts-ignore */}
                    {(activePrice?.originalPrice || (!activePrice && activePlatform.originalPrice)) && (
                      <span className="text-sm font-medium text-foreground-muted line-through opacity-60 ml-1">
                        {/* @ts-ignore */}
                        {activePrice?.originalPrice || activePlatform.originalPrice}
                      </span>
                    )}
                  </div>
                  {/* @ts-ignore */}
                  {activePrice?.monthlyEquivalent && (
                    <p className="text-sm font-medium text-foreground-body mt-1">
                      {/* @ts-ignore */}
                      {activePrice.monthlyEquivalent}
                    </p>
                  )}
                  {/* @ts-ignore */}
                  {activePrice?.note && (
                    <span className="inline-block w-fit rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-bold text-green-400 border border-green-500/20 my-1.5">
                      {/* @ts-ignore */}
                      {activePrice.note}
                    </span>
                  )}
                  {/* Removed FOUNDING PRICE LOCKED FOR LIFE tag */}
                  {/* @ts-ignore */}
                  {activePrice?.oneTimeOwnership && (
                    <p className="text-[11px] font-bold tracking-[0.1em] text-amber-400 uppercase mt-2">
                      ONE-TIME OWNERSHIP
                    </p>
                  )}
                  {/* @ts-ignore */}
                  {activePrice?.smallNote && (
                    <p className="text-[11px] leading-tight text-foreground-muted/70 mt-1 max-w-[95%]">
                      {/* @ts-ignore */}
                      {activePrice.smallNote}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-6 grid gap-3 flex-1">
                {activePlatform.includes.map((item) => {
                  let displayItem = item;
                  if (item.includes("Days Support") && activePlatform.pricingOptions && (billingCycle === "monthly" || billingCycle === "yearly")) {
                    displayItem = "Lifetime Support";
                  }
                  return (
                    <div key={item} className="flex items-center gap-2 text-sm text-foreground-body">
                      <Check className="h-4 w-4 shrink-0 text-accent" />
                      <span>{displayItem}</span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => setSelectedPkg(pkg)}
                className="button-primary mt-6 flex w-full items-center justify-center px-6 text-sm"
              >
                View Details
              </button>
            </Reveal>
          );
        })}
      </div>

      {/* Standalone Mobile App section removed */}

      {selectedPkg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedPkg(null)}
          />
          <div className="surface-card relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-none shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-6 py-4 sm:px-8">
              <div>
                <h3 className="flex items-baseline gap-2 text-2xl font-semibold text-foreground">
                  {selectedPkg.name} Package
                </h3>
                <p className="mt-1 text-sm text-foreground-body">
                  {/* @ts-ignore */}
                  {selectedPkg.platforms[platform].pricingOptions ? selectedPkg.platforms[platform].pricingOptions[billingCycle].price : selectedPkg.platforms[platform].price}
                </p>
              </div>
              <button 
                onClick={() => setSelectedPkg(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none border border-white/10 bg-white/5 text-foreground-muted transition-colors hover:bg-white/10 hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
              <div className="grid gap-8 md:grid-cols-2">
                {selectedPkg.platforms[platform].modalDetails.map((detailSection) => (
                  <div key={detailSection.category} className="space-y-3">
                    <h4 className="text-lg font-medium text-amber-400">{detailSection.category}</h4>
                    <ul className="grid gap-2">
                      {detailSection.features.map((feature) => {
                        let displayFeature = feature;
                        if (feature.toLowerCase().includes("days post-launch support") && selectedPkg.platforms[platform].pricingOptions && (billingCycle === "monthly" || billingCycle === "yearly")) {
                          displayFeature = feature.replace(/\d+\s+days post-launch support/i, "Lifetime support");
                        }
                        return (
                          <li key={feature} className="flex items-start gap-2 text-sm text-foreground-body">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-500/70" />
                            <span>{displayFeature}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Footer */}
            <div className="border-t border-white/10 bg-white/[0.02] px-6 py-4 sm:px-8 sm:py-6">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div>
                  <p className="text-sm font-medium text-foreground">Ready to get started?</p>
                  <p className="text-xs text-foreground-body">Book a free consultation to discuss this package.</p>
                </div>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <Link 
                    href="/contact" 
                    className="button-primary w-full px-8 text-sm sm:w-auto"
                  >
                    Start Your Project
                  </Link>
                  <Link 
                    href="/contact#contact-methods" 
                    className="button-secondary w-full px-8 text-sm sm:w-auto"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
