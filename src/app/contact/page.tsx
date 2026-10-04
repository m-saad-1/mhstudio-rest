import type { Metadata } from "next";
import Link from "next/link";
import CalendarRange from "lucide-react/dist/esm/icons/calendar-range";
import Mail from "lucide-react/dist/esm/icons/mail";
import MessageCircleMore from "lucide-react/dist/esm/icons/message-circle-more";
import Share2 from "lucide-react/dist/esm/icons/share-2";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("@/components/marketing/contact-form").then((mod) => mod.ContactForm));
const FaqAccordion = dynamic(() => import("@/components/ui/faq-accordion").then((mod) => mod.FaqAccordion));
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { contactFaqs, siteConfig, socialLinks } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact MhStudio to discuss your restaurant website, reservation system, or menu integrations.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your restaurant website."
        description="Tell us about your project, schedule a direct calendar call, or send us a WhatsApp message."
      />
      <section className="section-space">
        <div className="content-shell grid min-w-0 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <ContactForm />
          </Reveal>
          <div className="grid gap-6">
            <Reveal delayMs={40} className="surface-card relative overflow-hidden p-6 sm:p-8 border border-amber-500/10 bg-[rgba(245,158,11,0.02)]">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.1)_0%,_transparent_70%)] blur-[40px]" />
              <h2 className="text-2xl font-semibold text-foreground">Request a Free Demo</h2>
              <p className="mt-3 text-sm leading-[1.7] text-foreground-body sm:text-base">
                We will build a free, custom interactive mockup of your digital menu and website.
              </p>
              <Link href="/demo" className="button-primary mt-6 inline-flex w-full justify-center px-6 py-2.5 text-sm sm:w-auto">
                Get Free Demo
              </Link>
            </Reveal>
            <Reveal delayMs={80} id="contact-methods" className="surface-card p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-foreground">Direct Contact</h2>
              <div className="mt-6 grid gap-4">
                <Link href={siteConfig.calendarHref} target="_blank" rel="noopener noreferrer" className="surface-card flex items-center gap-4 p-4">
                  <span className="rounded-[16px] border border-amber-400/15 bg-amber-400/10 p-3 text-accent">
                    <CalendarRange className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Calendar Booking</p>
                    <p className="text-sm text-foreground-body">Schedule a 15-minute consultation directly on our calendar.</p>
                  </div>
                </Link>
                <Link href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="surface-card flex items-center gap-4 p-4">
                  <span className="rounded-[16px] border border-amber-400/15 bg-amber-400/10 p-3 text-accent">
                    <MessageCircleMore className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                    <p className="text-sm text-foreground-body">Message us directly on WhatsApp for instant feedback.</p>
                  </div>
                </Link>
                <Link href={`mailto:${siteConfig.email}`} target="_blank" rel="noopener noreferrer" className="surface-card flex items-center gap-4 p-4">
                  <span className="rounded-[16px] border border-amber-400/15 bg-amber-400/10 p-3 text-accent">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <p className="text-sm text-foreground-body">{siteConfig.email}</p>
                  </div>
                </Link>
              </div>
            </Reveal>
            {/* Social links hidden for now
            <Reveal delayMs={120} className="surface-card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="rounded-[16px] border border-amber-400/15 bg-amber-400/10 p-3 text-accent">
                  <Share2 className="h-5 w-5" />
                </span>
                <h2 className="text-2xl font-semibold text-foreground">Social Links</h2>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="button-secondary px-5 text-sm">
                    {link.label}
                  </Link>
                ))}
              </div>
            </Reveal> */}
            <Reveal delayMs={160}>
              <FaqAccordion items={contactFaqs} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
