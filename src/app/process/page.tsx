import type { Metadata } from "next";
import Link from "next/link";
import Check from "lucide-react/dist/esm/icons/check";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getIcon } from "@/components/ui/icon-map";
import dynamic from "next/dynamic";
import {
  corePhases,
  developmentPaths,
  clientInvolvement,
  qualityAssurance,
  processFaqs,
  techTimeline
} from "./data";

const FaqAccordion = dynamic(() => import("@/components/ui/faq-accordion").then((mod) => mod.FaqAccordion));

export const metadata: Metadata = {
  title: "Process | How We Work",
  description: "Whether you’re launching a single restaurant website, a digital menu, or custom booking systems, our process ensures quality, transparency, and predictable timelines.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Onboarding & Setup"
        title="A streamlined path to launching your platform."
        description="From digital menus to custom AI receptionists, our setup guarantees clear steps, rapid timelines, and a high-performance system."
        primaryCta={{ label: "View Pricing", href: "/pricing" }}
        secondaryCta={{ label: "View Our Work", href: "/templates" }}
      />

      {/* 2. Core Development Process */}
      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="The Onboarding Process"
            title="Six steps to launch."
            description="Our straightforward roadmap to deploying your unified restaurant platform."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {corePhases.map((phase, index) => {
              const Icon = getIcon(phase.icon);
              return (
                <Reveal key={phase.step} delayMs={index * 60} className="surface-card flex flex-col p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-none bg-amber-400 text-sm font-bold text-zinc-950">
                      {phase.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{phase.title}</h3>
                      <p className="text-sm font-medium text-amber-500">{phase.tagline}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-[1.7] text-foreground-body flex-grow">
                    {phase.description}
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <ul className="grid gap-2">
                      {phase.activities.map((activity) => (
                        <li key={activity} className="flex items-center gap-2 text-sm text-foreground-body">
                          <Check className="h-4 w-4 text-accent shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* 3. Development Paths */}
      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Deployment Paths"
            title="Tailored deployment paths."
            description="We customize our setup to match the exact package you choose and your business size."
          />
          <div className="grid gap-6">
            {developmentPaths.map((path, index) => (
              <Reveal key={path.title} delayMs={index * 50} className="surface-card p-6 md:p-8">
                <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:items-center">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground">{path.title}</h3>
                    <p className="text-sm leading-[1.7] text-foreground-body">{path.description}</p>
                    {path.timeline && (
                      <p className="inline-flex items-center rounded-none bg-white/5 px-3 py-1 text-xs font-medium text-foreground-muted">
                        Typical Timeline: {path.timeline}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {path.steps.map((step, stepIdx) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="rounded-none border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-foreground-body">
                          {step}
                        </span>
                        {stepIdx < path.steps.length - 1 && (
                          <ArrowRight className="h-4 w-4 text-foreground-muted shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {/* 4. What Happens During the Project? */}
      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Client Involvement"
            title="How we stay aligned."
            description="We communicate clearly at every step without taking up your valuable time."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {clientInvolvement.map((item, index) => {
              const Icon = getIcon(item.icon);
              return (
                <Reveal key={item.title} delayMs={index * 50} className="surface-card p-6">
                  <span className="mb-4 inline-flex rounded-none bg-white/5 p-3 text-accent">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-[1.7] text-foreground-body">{item.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* 5. Quality Assurance & 6. Tech Timeline side-by-side or stacked */}
      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell grid gap-10 lg:grid-cols-2">
          
          <div className="space-y-8">
            <div>
              <span className="eyebrow">Engineering Standards</span>
              <h2 className="mt-2 text-3xl font-semibold text-foreground">High Standards</h2>
              <p className="mt-3 text-foreground-body">Every detail is thoroughly tested prior to launch.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {qualityAssurance.map((qa, i) => {
                const Icon = getIcon(qa.icon);
                return (
                  <Reveal key={qa.title} delayMs={i * 30} className="flex items-center gap-3 rounded-none border border-white/10 bg-white/5 p-4">
                    <Icon className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm font-medium text-foreground">{qa.title}</span>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="eyebrow">The Stack</span>
              <h2 className="mt-2 text-3xl font-semibold text-foreground">Tech Stack</h2>
              <p className="mt-3 text-foreground-body">Fast, reliable, and secure tools powering your site.</p>
            </div>
            <div className="relative border-l border-white/10 pl-6 space-y-6">
              {techTimeline.map((item, i) => {
                const Icon = getIcon(item.icon);
                return (
                  <Reveal key={item.stage} delayMs={i * 40} className="relative">
                    <div className="absolute -left-[41px] top-1 flex h-8 w-8 items-center justify-center rounded-none border border-white/10 bg-zinc-950 text-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-foreground">{item.stage}</h4>
                      <p className="text-sm text-foreground-muted">{item.tech}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </div>
      </Reveal>

      {/* 7. Frequently Asked Questions */}
      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="FAQ"
            title="Process FAQs"
            description="Brief answers on scheduling, menu updates, and launch timelines."
          />
          <FaqAccordion items={processFaqs} />
        </div>
      </Reveal>

      {/* 8. Final CTA */}
      <Reveal as="section" className="section-space">
        <div className="content-shell">
          <div className="surface-card relative overflow-hidden px-8 py-12 sm:px-10 sm:py-14 lg:px-14 text-center flex flex-col items-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.15)_0%,_transparent_70%)] blur-[100px]" />
            <div className="relative space-y-5 max-w-3xl">
              <span className="eyebrow mx-auto">Ready to grow?</span>
              <h2 className="text-[2rem] font-semibold leading-[1.1] text-foreground sm:text-[2.8rem]">
                Ready to Launch?
              </h2>
              <p className="text-base leading-[1.7] text-foreground-body sm:text-lg">
                Whether deploying a basic digital menu, a native ordering system, or an advanced AI receptionist, our clear setup process guarantees a fast, transparent path to scaling your restaurant.
              </p>
              <div className="pt-4">
                <Link href="/contact" className="button-primary px-8 text-sm sm:w-auto">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
