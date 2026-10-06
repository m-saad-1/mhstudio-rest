import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/marketing/page-hero";
import { aboutValues, processSteps, technologyGroups, whyChooseItems } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "About MhStudio",
  description: "Learn about MhStudio, the mission, values, tools, and approach behind premium websites for local businesses.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MhStudio"
        title="A complete digital platform built for modern restaurants."
        description="We provide a centralized digital platform that connects your website, orders, tables, and AI tools—turning visitors into loyal guests seamlessly."
        primaryCta={{ label: "View Portfolio", href: "/templates" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
      />
      <section className="section-space">
        <div className="content-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="surface-card p-8 sm:p-10">
            <span className="eyebrow">Story</span>
            <h2 className="mt-5 text-[2rem] font-semibold leading-[1.15] text-foreground sm:text-[2.8rem]">
              Your digital operations should run as smoothly as your kitchen.
            </h2>
            <p className="mt-5 text-base leading-[1.7] text-foreground-body sm:text-lg">
              MhStudio blends digital strategy, fast frontend engineering, and smart automation. We give restaurants a premium digital presence combined with a centralized management dashboard built to scale.
            </p>
          </Reveal>
          <Reveal delayMs={100} className="grid gap-6">
            <div className="surface-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Mission</p>
              <p className="mt-3 text-sm leading-[1.7] text-foreground-body sm:text-base">
                Provide high-performance digital platforms that increase online orders, automate operations, and elevate your restaurant brand.
              </p>
            </div>
            <div className="surface-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Vision</p>
              <p className="mt-3 text-sm leading-[1.7] text-foreground-body sm:text-base">
                Empower restaurant owners with integrated digital tools that drive growth, automate bookings, and simplify day-to-day operations from one screen.
              </p>
            </div>
            <div className="surface-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Values</p>
              <div className="mt-4 grid gap-3">
                {aboutValues.map((value) => (
                  <p key={value} className="text-sm leading-[1.7] text-foreground-body sm:text-base">
                    {value}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Why Choose MhStudio"
            title="The Advantage of a Unified Platform"
            description="How we solve real-world restaurant growth & operational challenges."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseItems.map((item, index) => (
              <Reveal
                key={item.title}
                delayMs={index * 70}
                className="surface-card relative overflow-hidden p-6 sm:p-8 border border-amber-500/35 hover:border-amber-400/80 bg-[linear-gradient(135deg,rgba(245,158,11,0.06)_0%,rgba(18,18,22,0.95)_40%,rgba(9,9,11,0.98)_100%)] transition-all duration-500 group shadow-[0_0_20px_rgba(245,158,11,0.12)] hover:shadow-[0_0_35px_rgba(245,158,11,0.3)] !rounded-[24px]"
              >
                {/* Amplified internal neon glow */}
                <div className="pointer-events-none absolute -bottom-6 -right-6 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.32)_0%,rgba(245,158,11,0.12)_45%,transparent_75%)] blur-[25px] transition-all duration-500 group-hover:h-52 group-hover:w-52 group-hover:bg-[radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.52)_0%,rgba(245,158,11,0.2)_50%,transparent_80%)]" />
                <div className="pointer-events-none absolute -top-8 -left-8 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18)_0%,transparent_70%)] blur-[20px]" />
                
                <div className="relative space-y-4">
                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight group-hover:text-amber-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Solution description only (no middle/problem line) */}
                  <p className="text-sm sm:text-base leading-[1.7] text-foreground-body">
                    {item.solution}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <section className="section-space section-divider">
        <div className="content-shell grid gap-6 lg:grid-cols-2">
          <Reveal className="surface-card p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Your Journey</p>
            <h2 className="mt-4 text-2xl font-semibold text-foreground">From discovery to a fully-managed launch.</h2>
            <p className="mt-4 text-sm leading-[1.7] text-foreground-body sm:text-base">
              We guide you through strategy, dashboard setup, and fast deployment to launch a comprehensive restaurant platform with zero upfront costs on managed plans.
            </p>
            <div className="mt-6 grid gap-3">
              {processSteps.slice(0, 6).map((step) => (
                <div key={step.step} className="rounded-[16px] border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-sm font-semibold text-foreground">{step.title}</p>
                  <p className="mt-1 text-sm text-foreground-body">{step.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delayMs={120} className="surface-card p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Technologies & Tools</p>
            <div className="mt-6 grid gap-4">
              {technologyGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-sm text-foreground-body"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="button-primary mt-8 px-6 text-sm">
              Start Your Launch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
