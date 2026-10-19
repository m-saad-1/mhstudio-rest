import Image from "next/image";
import { IntentLink as Link } from "@/components/ui/intent-link";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import type { ResponsiveImageName } from "@/data/responsive-images";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Check from "lucide-react/dist/esm/icons/check";

import { FaqAccordion } from "@/components/heavy-client-components";
import { HeroSection } from "@/components/marketing/hero-section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getIcon } from "@/components/ui/icon-map";
import {
  faqs,
  leftFaqs,
  serviceCards, mainServices,
  websiteFeatures,
} from "@/data/site-content";

const clientLogos = Array.from(
  { length: 30 },
  (_, index) => `/images/client-logo-${String(index + 1).padStart(2, "0")}.avif`,
);

export default function Home() {
  const homeServiceTitles = [
    "Restaurant Websites & Mobile Applications",
    "Restaurant Management Systems (RMS)",
    "Point of Sale (POS) Systems",
    "Online Ordering Systems",
    "Kitchen Display Systems (KDS)",
    "Dine-In & Table Management",
    "QR Menu & Self-Ordering"
  ];

  const homeServiceCards = homeServiceTitles
    .map(title => mainServices.find(service => service.title === title) || serviceCards.find(service => service.title === title))
    .filter((service): service is Exclude<typeof service, undefined> => !!service);

  const serviceImages: Record<string, { name: ResponsiveImageName; alt: string }> = {
    "Restaurant Websites & Mobile Applications": { name: "web-and-app", alt: "Restaurant website and mobile app showcase" },
    "Restaurant Management Systems (RMS)": { name: "rms-dashboard", alt: "Restaurant management dashboard" },
    "Point of Sale (POS) Systems": { name: "pos", alt: "Restaurant point of sale dashboard" },
    "Online Ordering Systems": { name: "online-ordering", alt: "Online restaurant ordering experience" },
    "Kitchen Display Systems (KDS)": { name: "kds", alt: "Kitchen display system" },
    "Delivery & Fleet Management": { name: "device-showcase", alt: "Delivery and fleet management tools" },
    "Dine-In & Table Management": { name: "dine-in", alt: "Restaurant table management dashboard" },
    "QR Menu & Self-Ordering": { name: "qr-menu", alt: "QR menu and self-ordering menu" },
  };

  return (
    <>
      <HeroSection />

      <div className="home-sections">
      <Reveal as="section" className="home-services-section section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Services Snapshot"
            title="High-Performance Digital & Web Solutions"
            description="Explore the tools that help restaurants attract guests and run smoothly."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {homeServiceCards.map((service, index) => {
              const image = serviceImages[service.title];

              return (
                <Reveal
                  key={service.title}
                  delayMs={index * 70}
                  className="surface-card group flex h-full min-w-0 flex-col justify-between overflow-hidden transition-transform duration-200"
                >
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
                    <ResponsiveImage name={image.name} alt={image.alt} fill sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 767px) calc(100vw - 60px), (max-width: 1023px) calc((100vw - 84px) / 2), (max-width: 1279px) calc((100vw - 128px) / 3), 384px" className="object-cover transition-transform duration-200" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-4">
                  <div className="space-y-3">
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                      <p className="line-clamp-2 text-sm leading-relaxed text-foreground-body">{service.description}</p>
                    </div>
                  </div>
                  <Link href={"href" in service && service.href ? service.href : "/services"} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    Learn More
                    <span className="sr-only"> about {service.title}</span>
                    <ArrowRight className="h-4 w-4 text-accent-text transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-panel-section section-space section-divider">
        <div className="content-shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Left Side: Content */}
          <Reveal delayMs={0} className="space-y-8">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-card border border-accent-border/40 bg-accent-soft px-4 py-1.5 text-sm font-semibold text-accent-text shadow-card">
                Your Restaurant, One Panel
              </span>
              <h2 className="type-section text-foreground">
                Manage your entire restaurant from <span className="text-accent-text">one screen.</span>
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-1">
              {[
                { title: "Manage your website", desc: "Update menus, content, offers, images, and restaurant information anytime." },
                { title: "Control every order", desc: "View and manage dine-in, takeaway, and delivery orders from one place." },
                { title: "Run your operations", desc: "Manage POS, tables, kitchen workflows, delivery, and reservations." },
                { title: "Manage your menu & inventory", desc: "Update products, pricing, availability, ingredients, and stock." },
                { title: "Know your customers", desc: "Track customer profiles, order history, loyalty, and repeat activity." },
                { title: "See what matters", desc: "Monitor revenue, sales, branch performance, and AI-powered business insights." },
              ].map((feature) => (
                <div key={feature.title} className="surface-card flex items-start gap-4 p-4 rounded-card border border-border hover:border-accent-border/40 transition-all duration-200 hover:shadow-soft bg-surface-secondary hover:bg-surface-secondary">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-card bg-accent-soft text-accent-text shadow-card">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground">{feature.title}</span>
                    <span className="block text-sm text-foreground-muted mt-1">{feature.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right Side: Images */}
          <Reveal delayMs={100} className="relative mx-auto flex w-full max-w-lg flex-col gap-6 lg:mx-0 lg:max-w-none">

            <div className="surface-card relative z-10 aspect-[16/10] w-full overflow-hidden border-border p-2 shadow-card hover:border-accent-border/40 transition-colors duration-200">
              <a href="/images/Dashboard-1.avif" target="_blank" rel="noopener noreferrer" className="block relative w-full h-full cursor-zoom-in">
                <Image
                  src="/images/Dashboard-1.avif"
                  alt="Restaurant management dashboard overview"
                  fill
                  className="object-cover object-left-top p-2 transition-transform duration-200 hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 90vw, 50vw"
                />
              </a>
            </div>
            <div className="surface-card relative z-10 aspect-[16/10] w-full overflow-hidden border-border p-2 shadow-card hover:border-accent-border/40 transition-colors duration-200">
              <a href="/images/Dashboard-2.avif" target="_blank" rel="noopener noreferrer" className="block relative w-full h-full cursor-zoom-in">
                <Image
                  src="/images/Dashboard-2.avif"
                  alt="Restaurant order management dashboard"
                  fill
                  className="object-cover object-left-top p-2 transition-transform duration-200 hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 90vw, 50vw"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="home-flow-section section-space section-divider overflow-hidden">
        <div className="content-shell space-y-10">
          <div className="surface-card overflow-hidden p-4 sm:p-8 hover:border-accent-border/40 transition-colors duration-200">
            <a href="/images/from-order-to-doorstep-flow.avif" target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-zoom-in">
              <Image
                src="/images/from-order-to-doorstep-flow.avif"
                alt="Restaurant order to doorstep delivery flow"
                width={1200}
                height={700}
                className="mx-auto max-h-[520px] w-full object-contain transition-transform duration-200 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 1100px"
              />
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-ai-section section-space section-divider">
        <div className="content-shell grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
          {/* Left Side: Image */}
          <Reveal delayMs={0} className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none flex justify-center lg:h-full">
            {/* Decorative Glow */}

            <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full z-10 perspective-1000">
              <Image
                src="/images/chatbot.avif"
                alt="AI Receptionist Interface"
                fill
                className="object-contain object-center transition-transform duration-200 ease-out"
                sizes="(max-width: 1024px) 45vw, 400px"
              />
            </div>
          </Reveal>

          {/* Right Side: Content */}
          <Reveal delayMs={100} className="space-y-8">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-card border border-accent-border/40 bg-accent-soft px-4 py-1.5 text-sm font-semibold text-accent-text shadow-card">
                AI-Powered Customer Experience
              </span>
              <h2 className="type-section text-foreground">
                <span className="text-accent-text">24/7 AI Receptionist</span>
              </h2>
              <p className="text-base leading-[1.8] text-foreground-body sm:text-lg">
                Answer questions, take orders, and book tables around the clock.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { title: "Instant Customer Replies", desc: "Answers in seconds." },
                { title: "Online Ordering", desc: "Guided order flow." },
                { title: "Table Reservations", desc: "Automated booking." },
                { title: "Events & Catering", desc: "Manage large inquiries." },
                { title: "Business Information", desc: "Hours & location." },
                { title: "Smart Menu", desc: "Dish recommendations." },
              ].map((feature) => (
                <div key={feature.title} className="surface-card flex items-start gap-4 p-4 rounded-card border border-border hover:border-accent-border/40 transition-all duration-200 hover:shadow-soft bg-surface-secondary hover:bg-surface-secondary">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-card bg-accent-soft text-accent-text shadow-card">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground">{feature.title}</span>
                    <span className="block text-sm text-foreground-muted mt-1">{feature.desc}</span>
                  </div>
                </div>
              ))}
            </div>



            <div className="pt-2">
              <Link href="/services" className="button-primary px-8 py-3.5 text-sm w-full sm:w-auto inline-flex items-center justify-center group shadow-card hover:shadow-soft">
                Explore AI Features
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="home-capabilities-section section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Digital Capabilities"
            title="Everything Your Restaurant Needs to Operate & Grow"
            description="Practical tools for every step of the guest experience."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {websiteFeatures.map((feature, index) => {
              const Icon = getIcon(feature.icon);

              return (
                <Reveal
                  key={feature.title}
                  delayMs={index * 35}
                  className="surface-card flex min-h-[220px] flex-col p-5"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-control border border-accent-border/40 bg-accent-soft p-0 text-accent-text">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-[1.6] text-foreground-body sm:text-sm">{feature.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-platform-section section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Explore The Platform"
            title="See the guest experience and the operator view."
            description="Explore the customer-facing experience alongside the tools your team uses."
            align="center"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              { title: "Website / App Demo", image: "/images/WebAndApp.avif", alt: "Restaurant website and app demo", href: "https://demopk.vercel.app/" },
              { title: "RMS Dashboard", image: "/images/restaurant-management-dashboard-workspace.avif", alt: "Restaurant management system dashboard", href: "https://demopk.vercel.app/dashboard/index.html" },
            ].map((demo) => (
              <div key={demo.title} className="surface-card flex flex-col p-5">
                <div className="relative aspect-[16/10] overflow-hidden border border-border bg-surface">
                  <Image src={demo.image} alt={demo.alt} fill className="object-cover object-top" sizes="(max-width: 1023px) 100vw, 50vw" />
                </div>
                <div className="flex items-center justify-between gap-4 pt-5">
                  <h3 className="text-xl font-semibold text-foreground">{demo.title}</h3>
                  <Link href={demo.href} target="_blank" rel="noopener noreferrer" className="button-primary min-h-11 px-5 text-sm">Demo</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-logos-section section-space section-divider overflow-hidden">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Trusted By Growing Brands"
            title="Trusted by restaurants and growing businesses."
            description="Take a look at brands built with MhStudio."
            align="center"
          />
          <div className="grid grid-cols-2 items-center gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5" aria-label="Client brands">
              {clientLogos.map((src, index) => (
                <span key={src} className="flex min-h-24 items-center justify-center rounded-card border border-border bg-surface px-4 py-5">
                  <Image
                    src={src}
                    alt={`Client logo ${index + 1}`}
                    width={180}
                    height={90}
                    className="h-12 w-auto max-w-full object-contain sm:h-14"
                    sizes="180px"
                    quality={50}
                    loading="eager"
                    fetchPriority="low"
                  />
                </span>
              ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-insights-section section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Insights"
            title="The outcomes your restaurant can work toward."
            description="See how connected digital tools can support smoother service and stronger guest relationships."
            align="center"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["2×", "More Orders", "A direct ordering channel gives guests an easier path back to your brand."],
              ["30 sec", "Faster Ordering", "Clear menus and streamlined checkout reduce friction at busy moments."],
              ["Higher", "Customer Retention", "Consistent experiences and loyalty touchpoints encourage return visits."],
              ["Faster", "Delivery Management", "Dispatch visibility helps teams coordinate riders and active orders."],
              ["More", "Repeat Customers", "Owned customer relationships make follow-up and reordering simpler."],
              ["Less", "Manual Work", "Centralized tools reduce repetitive updates across menus, orders, and branches."],
            ].map(([value, label, description]) => (
              <div key={label} className="surface-card min-h-[180px] p-6">
                <p className="text-4xl font-bold text-accent-text">{value}</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{label}</h3>
                <p className="mt-2 text-sm leading-[1.6] text-foreground-body">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/*
      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Web Experiences Tailored for Growing Brands"
            align="center"
          />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {industryShowcaseItems.map((industry, index) => (
              <Reveal
                key={industry.label}
                delayMs={index * 50}
                className="surface-card group relative min-h-[220px] overflow-hidden !rounded-none border border-white/8"
              >
                <Image
                  src={industry.image}
                  alt={industry.alt}
                  fill
                  placeholder="blur"
                  blurDataURL={blurData}
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ objectPosition: industry.objectPosition }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,11,0.08)_0%,rgba(9,9,11,0.3)_40%,rgba(9,9,11,0.88)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12)_0%,transparent_42%)]" />
                <div className="relative flex min-h-[220px] items-end p-5 sm:p-6">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-foreground sm:text-xl">{industry.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Technologies"
            title="A modern stack grouped by purpose, not just a logo wall."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {technologyGroups.map((group, index) => (
              <Reveal key={group.title} delayMs={index * 70} className="surface-card p-6">
                <p className="text-xl font-semibold text-foreground">{group.title}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-sm text-foreground-body"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
      */}

      <Reveal as="section" className="home-faq-section section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="FAQ"
            title="Answers to Common Pre-Launch Questions"
            description="Quick answers to help you plan your next steps."
            align="center"
          />
          <FaqAccordion items={[...leftFaqs, ...faqs]} columns={2} />
        </div>
      </Reveal>

      <Reveal as="section" className="home-cta-section section-space">
        <div className="content-shell">
          <div className="surface-card relative overflow-hidden px-8 py-12 sm:px-10 sm:py-14 lg:px-14">

            <div className="relative grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <span className="eyebrow">Interactive Demo</span>
                <h2 className="type-section max-w-[16ch] text-foreground">
                  See our solutions in action.
                </h2>
                <p className="max-w-2xl text-base leading-[1.7] text-foreground-body sm:text-lg">
                  Get a custom walkthrough shaped around your goals and workflows.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                <Link href="/demo" className="button-primary w-full px-6 text-sm sm:w-auto lg:w-full lg:max-w-xs">
                  Request Free Demo
                </Link>
                <Link href="/contact" className="button-secondary w-full px-6 text-sm sm:w-auto lg:w-full lg:max-w-xs">
                  Start 14-Day Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      </div>
    </>
  );
}
