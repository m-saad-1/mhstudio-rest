import type { Metadata } from "next";
import { IntentLink as Link } from "@/components/ui/intent-link";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "About MhStudio",
  description: "Learn how MhStudio designs restaurant websites, ordering experiences, and practical tools for daily operations.",
};

const focusAreas = [
  {
    title: "For your guests",
    description: "Branded websites, clear menus, and straightforward ordering experiences that work well on a phone.",
    href: "/services/restaurant-websites-and-apps",
    linkLabel: "Explore websites and apps",
  },
  {
    title: "For your team",
    description: "Management tools for orders, menus, tables, and the kitchen, shaped around the way your restaurant operates.",
    href: "/services/restaurant-management-systems",
    linkLabel: "Explore management systems",
  },
  {
    title: "For connected workflows",
    description: "Reservations, customer communication, and useful automation that can reduce routine handoffs and keep information consistent.",
    href: "/services/supporting-services",
    linkLabel: "Explore supporting services",
  },
] as const;

const projectSteps = [
  {
    number: "01",
    title: "Understand the operation",
    description: "We start with your service model, existing tools, and the points where guests or staff run into friction.",
  },
  {
    number: "02",
    title: "Define the right scope",
    description: "Together, we identify what needs to work now and which features make sense as your restaurant grows.",
  },
  {
    number: "03",
    title: "Build and hand over",
    description: "We test the guest and staff experience, walk you through the setup, and agree on the support your plan includes.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MhStudio"
        title="Restaurant technology shaped around real service."
        description="MhStudio designs websites, ordering experiences, and operational tools for restaurants. We focus on making things clear for guests and practical for the people running the business."
        primaryCta={{ label: "Explore Services", href: "/services" }}
        secondaryCta={{ label: "Talk to Us", href: "/contact" }}
      />

      <Reveal as="section" className="section-space">
        <div className="content-shell grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <div className="surface-card p-8 sm:p-10">
            <span className="eyebrow">Who We Are</span>
            <h2 className="type-section mt-5 text-foreground">Good service should carry through to every screen.</h2>
            <div className="mt-6 space-y-4 text-base leading-[1.7] text-foreground-body sm:text-lg">
              <p>
                MhStudio is a digital studio focused on the needs of restaurants. A guest should be able to find the right menu, choose how to order, and get the details they need without extra effort. Behind the scenes, your team needs a clear way to keep those details current and handle each order.
              </p>
              <p>
                We bring design and development together around both sides of that experience. Whether the starting point is a website or a broader restaurant setup, the work begins with how your business actually runs.
              </p>
            </div>
          </div>
          <div className="surface-card flex flex-col justify-center p-8 sm:p-10">
            <h3 className="text-xl font-semibold text-foreground">What guides our work</h3>
            <div className="mt-6 divide-y divide-border">
              <div className="pb-5">
                <p className="font-semibold text-foreground">Clarity for guests</p>
                <p className="mt-2 text-sm leading-[1.7] text-foreground-body sm:text-base">Menus, information, and ordering should be easy to use, especially on mobile.</p>
              </div>
              <div className="py-5">
                <p className="font-semibold text-foreground">Fit for your operation</p>
                <p className="mt-2 text-sm leading-[1.7] text-foreground-body sm:text-base">The tools should reflect your service model and the way your team works.</p>
              </div>
              <div className="pt-5">
                <p className="font-semibold text-foreground">A sensible path forward</p>
                <p className="mt-2 text-sm leading-[1.7] text-foreground-body sm:text-base">Start with what matters now, with room to add capabilities when they are useful.</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="What We Do"
            title="A connected experience for guests and staff."
            description="We work across the customer-facing journey and the day-to-day tools that support it. The right mix depends on your restaurant."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {focusAreas.map((area, index) => (
              <Reveal key={area.title} delayMs={index * 70} className="surface-card flex h-full flex-col p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-foreground">{area.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-[1.7] text-foreground-body sm:text-base">{area.description}</p>
                <Link href={area.href} className="mt-6 w-fit text-sm font-semibold text-accent-text transition-colors hover:text-foreground">{area.linkLabel}</Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="How We Work"
            title="A clear process from first conversation to launch."
            description="We keep the project grounded in your priorities, with time to check the details before anything goes live."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {projectSteps.map((step, index) => (
              <Reveal key={step.number} delayMs={index * 70} className="surface-card p-6 sm:p-8">
                <span className="text-sm font-semibold text-accent-text">{step.number}</span>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-[1.7] text-foreground-body sm:text-base">{step.description}</p>
              </Reveal>
            ))}
          </div>
          <Link href="/process" className="button-secondary w-fit">See Our Process</Link>
        </div>
      </Reveal>

      <Reveal as="section" className="section-space">
        <div className="content-shell">
          <div className="surface-card px-8 py-12 text-center sm:px-10 sm:py-14">
            <h2 className="type-section text-foreground">Tell us how your restaurant works.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.7] text-foreground-body sm:text-lg">
              Share what you use today and what you want to improve. We can help you find a practical place to start.
            </p>
            <Link href="/contact" className="button-primary mt-8">Start a Conversation</Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}
