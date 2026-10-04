import type { Metadata } from "next";
import Link from "next/link";
import CalendarRange from "lucide-react/dist/esm/icons/calendar-range";
import Cpu from "lucide-react/dist/esm/icons/cpu";
import Laptop from "lucide-react/dist/esm/icons/laptop";
import dynamic from "next/dynamic";
const DemoForm = dynamic(() => import("@/components/marketing/demo-form").then((mod) => mod.DemoForm));
const FaqAccordion = dynamic(() => import("@/components/ui/faq-accordion").then((mod) => mod.FaqAccordion));
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { contactFaqs, siteConfig } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Get Free Demo",
  description: "Request a custom interactive demo of our restaurant websites, online menus, or AI-powered reservation assistants for your restaurant.",
};

const demoSteps = [
  {
    title: "1. Share Concept",
    description: "Fill out the request form with your restaurant's branding, style, and reservation goals.",
    icon: Laptop,
  },
  {
    title: "2. Custom Mockup",
    description: "We build a custom homepage and digital menu layout matching your restaurant's aesthetics.",
    icon: Cpu,
  },
  {
    title: "3. Test Live",
    description: "Test the high-speed mobile menu and booking system yourself, completely free.",
    icon: CalendarRange,
  },
];

const demoFaqs = [
  {
    question: "Is the custom demo really free?",
    answer: "Yes, 100%. We believe in showing real value before any contracts are signed. We build a basic proof-of-concept for qualified businesses at no cost.",
  },
  {
    question: "How long does it take to prepare the demo?",
    answer: "Typically, we will review your request and deliver or schedule a walkthrough of the custom demo within 3 to 5 business days.",
  },
  {
    question: "What if I want a live consultation instead of a mock demo?",
    answer: "You can book a live consultation directly on our calendar. Use the booking link on this page or go to our contact page to connect via WhatsApp or Email.",
  },
];

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Demo"
        title="Preview your new digital dining experience."
        description="We design custom interactive menus and homepage mockups so you can test page speed, mobile UX, and layout design before any commitment."
      />
      <section className="section-space">
        <div className="content-shell grid min-w-0 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <DemoForm />
          </Reveal>
          <div className="grid gap-6">
            <Reveal delayMs={80} className="surface-card p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-foreground">Demo Process</h2>
              <div className="mt-6 grid gap-6">
                {demoSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none border border-amber-400/15 bg-amber-400/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground">{step.title}</p>
                        <p className="text-sm leading-relaxed text-foreground-body">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-white/8">
                <p className="text-sm text-foreground-body mb-4">
                  Prefer a direct, live discussion? Schedule a meeting with us instantly on our calendar.
                </p>
                <Link
                  href={siteConfig.calendarHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary inline-flex items-center gap-2 text-sm py-2.5 px-4"
                >
                  <CalendarRange className="h-4 w-4 text-accent" />
                  Book Live Meeting
                </Link>
              </div>
            </Reveal>

            <Reveal delayMs={160}>
              <FaqAccordion items={demoFaqs} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
