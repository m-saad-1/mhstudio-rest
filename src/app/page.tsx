import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Check from "lucide-react/dist/esm/icons/check";
import onlineOrderingImage from "../../public/images/online-ordering.avif";
import posImage from "../../public/images/restaurant-pos.avif";
import qrMenuImage from "../../public/images/qr-menu.avif";

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

  const serviceImages: Record<string, { src: string | StaticImageData; alt: string }> = {
    "Restaurant Websites & Mobile Applications": { src: "/images/WebAndApp.avif", alt: "Restaurant website and mobile app showcase" },
    "Restaurant Management Systems (RMS)": { src: "/images/restaurant-management-dashboard-workspace.avif", alt: "Restaurant management dashboard" },
    "Point of Sale (POS) Systems": { src: posImage, alt: "Restaurant point of sale dashboard" },
    "Online Ordering Systems": { src: onlineOrderingImage, alt: "Online restaurant ordering experience" },
    "Kitchen Display Systems (KDS)": { src: "/images/modern-kitchen-display-system-showcase.avif", alt: "Kitchen display system" },
    "Delivery & Fleet Management": { src: "/images/multi-device-restaurant-management-mockup.avif", alt: "Delivery and fleet management tools" },
    "Dine-In & Table Management": { src: "/images/modern-restaurant-table-management-dashboard.avif", alt: "Restaurant table management dashboard" },
    "QR Menu & Self-Ordering": { src: qrMenuImage, alt: "QR menu and self-ordering menu" },
  };

  return (
    <>
      <HeroSection />

      <div className="home-sections flex flex-col">
      <Reveal as="section" className="home-services-section section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Services Snapshot"
            title="High-Performance Digital & Web Solutions"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {homeServiceCards.map((service, index) => {
              const image = serviceImages[service.title];

              return (
                <Reveal
                  key={service.title}
                  delayMs={index * 70}
                  className="surface-card group flex h-full min-w-0 flex-col justify-between overflow-hidden transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-white/8">
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-4">
                  <div className="space-y-3">
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                      <p className="line-clamp-2 text-sm leading-[1.5] text-foreground-body">{service.description}</p>
                    </div>
                  </div>
                  <Link href={"href" in service && service.href ? service.href : "/services"} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    Learn More
                    <span className="sr-only"> about {service.title}</span>
                    <ArrowRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-ai-section section-space section-divider">
        <div className="content-shell grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
          {/* Left Side: Image */}
          <Reveal delayMs={0} className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none flex justify-center lg:h-full">
            {/* Decorative Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.22)_0%,transparent_70%)]" />
            <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full z-10 perspective-1000">
              <Image
                src="/images/chatbot.avif"
                alt="AI Receptionist Interface"
                fill
                className="object-contain object-center drop-shadow-[0_20px_40px_rgba(245,158,11,0.18)] hover:-translate-y-2 transition-transform duration-500 ease-out"
                sizes="(max-width: 1024px) 45vw, 400px"
              />
            </div>
          </Reveal>

          {/* Right Side: Content */}
          <Reveal delayMs={100} className="space-y-8">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-none border border-amber-400/20 bg-amber-400/10 px-4 py-1.5 text-sm font-semibold text-amber-400 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                AI-Powered Customer Experience
              </span>
              <h2 className="text-[2rem] font-semibold leading-[1.15] text-foreground sm:text-[2.8rem] tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 drop-shadow-sm">24/7 AI Receptionist</span>
              </h2>
              <p className="text-base leading-[1.8] text-foreground-body sm:text-lg">
                Deliver instant responses and simplify customer interactions around the clock. Help guests book tables, take orders, and answer questions while reducing your team's workload.
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
                <div key={feature.title} className="surface-card flex items-start gap-4 p-4 !rounded-none border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(245,158,11,0.08)] bg-white/[0.01] hover:bg-white/[0.03]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-none bg-amber-400/10 text-amber-400 shadow-[inset_0_0_10px_rgba(245,158,11,0.1)]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground">{feature.title}</span>
                    <span className="block text-xs text-foreground-muted mt-1">{feature.desc}</span>
                  </div>
                </div>
              ))}
            </div>



            <div className="pt-2">
              <Link href="/services" className="button-primary px-8 py-3.5 text-sm w-full sm:w-auto inline-flex items-center justify-center group shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                Explore AI Features
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="home-panel-section section-space section-divider">
        <div className="content-shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Left Side: Content */}
          <Reveal delayMs={0} className="space-y-8">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-none border border-amber-400/20 bg-amber-400/10 px-4 py-1.5 text-sm font-semibold text-amber-400 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                Your Restaurant, One Panel
              </span>
              <h2 className="text-[2rem] font-semibold leading-[1.15] text-foreground sm:text-[2.8rem] tracking-tight">
                Manage your entire restaurant from <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 drop-shadow-sm">one screen.</span>
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
                <div key={feature.title} className="surface-card flex items-start gap-4 p-4 !rounded-none border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(245,158,11,0.08)] bg-white/[0.01] hover:bg-white/[0.03]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-none bg-amber-400/10 text-amber-400 shadow-[inset_0_0_10px_rgba(245,158,11,0.1)]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground">{feature.title}</span>
                    <span className="block text-xs text-foreground-muted mt-1">{feature.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right Side: Images */}
          <Reveal delayMs={100} className="relative mx-auto flex w-full max-w-lg flex-col gap-6 lg:mx-0 lg:max-w-none">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_70%)]" />
            <div className="surface-card relative z-10 aspect-[16/10] w-full overflow-hidden border-white/10 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/Dashboard-1.avif"
                alt="Restaurant management dashboard overview"
                fill
                className="object-cover object-left-top p-2"
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
            </div>
            <div className="surface-card relative z-10 aspect-[16/10] w-full overflow-hidden border-white/10 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/Dashboard-2.avif"
                alt="Restaurant order management dashboard"
                fill
                className="object-cover object-left-top p-2"
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="home-capabilities-section section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Digital Capabilities"
            title="Everything Your Restaurant Needs to Operate & Grow"
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
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-amber-400/20 bg-amber-400/10 p-0 text-accent">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-[1.6] text-foreground-body sm:text-sm">{feature.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-flow-section section-space section-divider overflow-hidden">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Online Ordering To Delivery"
            title="One connected flow from checkout to doorstep."
            align="center"
          />
          <div className="surface-card overflow-hidden p-4 sm:p-8">
            <Image
              src="/images/from-order-to-doorstep-flow.avif"
              alt="Restaurant order to doorstep delivery flow"
              width={1200}
              height={700}
              className="mx-auto max-h-[520px] w-full object-contain"
              sizes="(max-width: 768px) 100vw, 1100px"
            />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-logos-section section-space section-divider overflow-hidden">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Trusted By Growing Brands"
            title="Trusted by restaurants and growing businesses."
            align="center"
          />
          <div className="logo-marquee" aria-label="Client brands">
            <div className="logo-marquee-track">
              {[...clientLogos, ...clientLogos].map((src, index) => (
                <span key={`${src}-${index}`} className="logo-marquee-item">
                  <Image
                    src={src}
                    alt={index < clientLogos.length ? `Client logo ${index + 1}` : ""}
                    width={180}
                    height={90}
                    className="h-16 w-auto max-w-[180px] object-contain"
                    sizes="180px"
                    quality={50}
                    loading="lazy"
                    fetchPriority="low"
                    aria-hidden={index >= clientLogos.length}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-platform-section section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Explore The Platform"
            title="See the guest experience and the operator view."
            align="center"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              { title: "Website / App Demo", image: "/images/WebAndApp.avif", alt: "Restaurant website and app demo", href: "/demo" },
              { title: "RMS Dashboard", image: "/images/restaurant-management-dashboard-workspace.avif", alt: "Restaurant management system dashboard", href: "/demo" },
            ].map((demo) => (
              <div key={demo.title} className="surface-card flex flex-col p-5">
                <div className="relative aspect-[16/10] overflow-hidden border border-white/8 bg-zinc-950">
                  <Image src={demo.image} alt={demo.alt} fill className="object-cover object-top" sizes="(max-width: 1023px) 100vw, 50vw" />
                </div>
                <div className="flex items-center justify-between gap-4 pt-5">
                  <h3 className="text-xl font-semibold text-foreground">{demo.title}</h3>
                  <Link href={demo.href} className="button-primary min-h-10 px-5 text-sm">Demo</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-insights-section section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Insights"
            title="The outcomes your restaurant can work toward."
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
                <p className="text-4xl font-bold text-accent">{value}</p>
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
            align="center"
          />
          <FaqAccordion items={[...leftFaqs, ...faqs]} />
        </div>
      </Reveal>

      <Reveal as="section" className="home-cta-section section-space">
        <div className="content-shell">
          <div className="surface-card relative overflow-hidden px-8 py-12 sm:px-10 sm:py-14 lg:px-14">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.18)_0%,_transparent_72%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <span className="eyebrow">Interactive Demo</span>
                <h2 className="max-w-[16ch] text-[2rem] font-semibold leading-[1.1] text-foreground sm:text-[2.8rem]">
                  See our solutions in action.
                </h2>
                <p className="max-w-2xl text-base leading-[1.7] text-foreground-body sm:text-lg">
                  Request a free, custom interactive demo built specifically for your business goals and workflows.
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
