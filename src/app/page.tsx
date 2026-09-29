import Image from "next/image";
import Link from "next/link";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Check from "lucide-react/dist/esm/icons/check";
import dynamic from "next/dynamic";

import { AnimatedCounter, FaqAccordion } from "@/components/heavy-client-components";
import { HeroSection } from "@/components/marketing/hero-section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getIcon } from "@/components/ui/icon-map";
import {
  faqs,
  leftFaqs,
  industryShowcaseItems,
  serviceCards, mainServices,
  technologyGroups,
  websiteFeatures,
} from "@/data/site-content";

const blurData = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzE2JyBoZWlnaHQ9JzEwJyBmaWxsPScjMTExMTEzJy8+PHJlY3QgY29yPScyJyB4PScxJyB5PScxJyB3aWR0aD0nMTQnIGhlaWdodD0nOCcgZmlsbD0nI0Y1OUUwQicgb3BhY2l0eT0nMC4xNScvPjwvc3ZnPg==";

export default function Home() {
  const homeServiceTitles = [
    "Restaurant Websites & Mobile Applications",
    "Restaurant Management Systems (RMS)",
    "Point of Sale (POS) Systems",
    "Online Ordering Systems",
    "Kitchen Display Systems (KDS)",
    "Dine-In & Table Management"
  ];

  const homeServiceCards = homeServiceTitles
    .map(title => mainServices.find(service => service.title === title) || serviceCards.find(service => service.title === title))
    .filter((service): service is Exclude<typeof service, undefined> => !!service);

  return (
    <>
      <HeroSection />

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Services Snapshot"
            title="High-Performance Digital & Web Solutions"
            description="High-performance digital solutions tailored to elevate your brand."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {homeServiceCards.map((service, index) => {
              const Icon = getIcon(service.icon);
              const isWide = service.title.length > 20;
              const columnSpan = isWide ? "md:col-span-2" : "";

              return (
                <Reveal
                  key={service.title}
                  delayMs={index * 70}
                  className={`surface-card group flex h-full flex-col justify-between p-6 transition-transform duration-300 hover:-translate-y-1.5 ${columnSpan}`}
                >
                  <div className="space-y-5">
                    <span className="inline-flex rounded-none border border-amber-400/15 bg-amber-400/10 p-3 text-accent transition-transform duration-300 group-hover:rotate-6">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                      <p className="text-sm leading-[1.7] text-foreground-body sm:text-base">{service.description}</p>
                    </div>
                  </div>
                  <Link href={"href" in service && service.href ? service.href : "/services"} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    Learn More
                    <span className="sr-only"> about {service.title}</span>
                    <ArrowRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-space section-divider">
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

      <Reveal as="section" className="section-space section-divider">
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
          <Reveal delayMs={100} className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none h-[500px] lg:h-[700px] flex items-center justify-center">
            {/* Decorative Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_70%)]" />
            
            {/* Dashboard 1 - Back/Top */}
            <div className="absolute right-0 top-[10%] w-[85%] aspect-[16/10] z-10 hover:z-30 transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-105 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 rounded-xl overflow-hidden bg-zinc-950">
              <Image
                src="/images/Dashboard-1.avif"
                alt="Restaurant Management Dashboard 1"
                fill
                className="object-cover object-left-top"
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
              {/* Subtle overlay to create depth when not hovered */}
              <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Dashboard 2 - Front/Bottom */}
            <div className="absolute left-0 bottom-[10%] w-[85%] aspect-[16/10] z-20 hover:z-30 transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-105 shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/10 rounded-xl overflow-hidden bg-zinc-950">
              <Image
                src="/images/Dashboard-2.avif"
                alt="Restaurant Management Dashboard 2"
                fill
                className="object-cover object-left-top"
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Digital Capabilities"
            title="Everything Your Restaurant Needs to Operate & Grow"
            description="powerful capabilities designed to simplify your workflow and drive growth."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {websiteFeatures.map((feature, index) => {
              const Icon = getIcon(feature.icon);

              return (
                <Reveal
                  key={feature.title}
                  delayMs={index * 35}
                  className={`surface-card p-5 ${index % 5 === 0 ? "xl:col-span-2" : ""}`}
                >
                  <span className="inline-flex rounded-[18px] border border-amber-400/15 bg-amber-400/10 p-3 text-accent">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-[1.7] text-foreground-body sm:text-base">{feature.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* 
      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Web Experiences Tailored for Growing Brands"
            description="Custom web design tailored for modern businesses across diverse industries."
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
            description="Grouping the stack by role keeps the section more useful for business owners while still signaling technical depth."
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

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="FAQ"
              title="Answers to Common Pre-Launch Questions"
              description="Answers to common pre-launch questions."
            />
            <div className="pt-4">
              <FaqAccordion items={leftFaqs} />
            </div>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </Reveal>

      <Reveal as="section" className="section-space">
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
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
