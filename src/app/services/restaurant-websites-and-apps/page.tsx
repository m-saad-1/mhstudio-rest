import type { Metadata } from "next";
import Link from "next/link";
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";
import Check from "lucide-react/dist/esm/icons/check";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export const metadata: Metadata = {
  title: "Restaurant Websites & Mobile Apps",
  description: "Turn your restaurant into a digital experience customers love with custom websites and branded mobile applications.",
};

const blurData = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzE2JyBoZWlnaHQ9JzEwJyBmaWxsPScjMTExMTEzJy8+PHJlY3QgY29yPScyJyB4PScxJyB5PScxJyB3aWR0aD0nMTQnIGhlaWdodD0nOCcgZmlsbD0nI0Y1OUUwQicgb3BhY2l0eT0nMC4xNScvPjwvc3ZnPg==";

export default function RestaurantWebAndAppPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-[20%] -left-[10%] h-[50%] w-[50%] rounded-full bg-amber-500/10 blur-[120px]" />
          <div className="absolute top-[40%] -right-[10%] h-[40%] w-[40%] rounded-full bg-amber-400/5 blur-[100px]" />
        </div>

        <div className="content-shell relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <Reveal className="flex flex-col">
            <Link href="/services" className="mb-8 inline-flex w-fit items-center text-sm font-medium text-foreground-muted hover:text-foreground transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-amber-500 uppercase">
              Restaurant Websites & Mobile Applications
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4rem] xl:leading-[1.1]">
              Turn Your Restaurant Into a Digital Experience Customers Love.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground-body max-w-xl">
              Build a premium restaurant website and branded mobile application designed to showcase your food, simplify ordering, increase direct customer relationships, and connect seamlessly with your restaurant operations.
            </p>
            
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/demo"
                className="inline-flex h-12 items-center justify-center bg-amber-500 px-6 font-medium text-zinc-950 transition-colors hover:bg-amber-400"
              >
                Get Your Free Demo
              </Link>
              <Link
                href="/templates"
                className="inline-flex h-12 items-center justify-center border border-border px-6 font-medium text-foreground transition-colors hover:bg-surface hover:text-amber-500"
              >
                View Our Work
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border/50 pt-6">
              {["Mobile-First Experience", "Online Ordering", "Branded Mobile Apps", "Reservation Ready", "SEO Optimized"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-foreground-muted">
                  <Check className="h-4 w-4 text-amber-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Hero Visual Mockup */}
          <Reveal delayMs={100} className="relative mx-auto w-full max-w-lg lg:max-w-none">
             <div className="relative aspect-[4/3] w-full rounded-xl shadow-2xl border border-zinc-800 bg-zinc-900 overflow-hidden flex items-center justify-center p-4">
                <div className="w-full h-full relative">
                   <Zoom>
                     <Image src="/images/WebAndApp.avif" alt="Restaurant Web and App Mockup" fill className="object-contain" placeholder="blur" blurDataURL={blurData} />
                   </Zoom>
                </div>
             </div>
          </Reveal>
        </div>
      </section>

      {/* 2. INTRODUCTION / VALUE PROPOSITION */}
      <section className="section-space section-divider bg-surface-secondary/30">
        <div className="content-shell">
          <SectionHeading
            eyebrow="More Than a Restaurant Website"
            title="One Digital Experience for Every Customer Touchpoint."
            description="Your website is often the first place customers interact with your restaurant. It should do more than display your menu. MhStudio builds restaurant websites and mobile applications that bring your brand, menu, ordering, reservations, customer experience, and digital operations together in one connected ecosystem."
            align="center"
          />
          
          <div className="mt-8 text-center max-w-3xl mx-auto text-foreground-body">
            <p>Whether customers discover you through Google, Instagram, WhatsApp, a QR code, or a direct link, they get a consistent experience built around your restaurant.</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Discover",
                desc: "Help new customers find your restaurant, explore your menu, view your location, and understand what makes your brand different.",
                icon: "search"
              },
              {
                title: "Order",
                desc: "Give customers a fast and convenient way to browse, customize, and order directly from your restaurant.",
                icon: "shopping-bag"
              },
              {
                title: "Return",
                desc: "Create a digital relationship that brings customers back through your website, app, offers, loyalty experiences, and personalized communication.",
                icon: "refresh-cw"
              }
            ].map((card, i) => (
              <Reveal key={card.title} delayMs={i * 100} className="surface-card flex flex-col p-8 text-center items-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                  {/* Using standard check icon temporarily since icon map needs to be imported or we can just use generic styling */}
                  <span className="text-xl font-bold">{i + 1}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{card.title}</h3>
                <p className="text-sm leading-relaxed text-foreground-body">{card.desc}</p>
              </Reveal>
            ))}
          </div>

          {/* Customer Journey Flow Visual */}
          <Reveal delayMs={300} className="mt-20">
            <div className="surface-card p-8 sm:p-12 text-center overflow-x-auto">
               <h4 className="text-sm font-semibold tracking-wider text-amber-500 uppercase mb-8">The Connected Journey</h4>
               <div className="flex flex-col md:flex-row items-center justify-between min-w-[700px] gap-4">
                  <div className="flex-1 bg-surface border border-border p-4 text-sm font-medium">Google / Social / QR</div>
                  <ArrowRight className="h-5 w-5 text-zinc-500 shrink-0" />
                  <div className="flex-1 bg-surface border border-border p-4 text-sm font-medium border-amber-500/30 text-amber-500">Website & App</div>
                  <ArrowRight className="h-5 w-5 text-zinc-500 shrink-0" />
                  <div className="flex-1 bg-surface border border-border p-4 text-sm font-medium">Order & Reserve</div>
                  <ArrowRight className="h-5 w-5 text-zinc-500 shrink-0" />
                  <div className="flex-1 bg-surface border border-border p-4 text-sm font-medium">Operations</div>
                  <ArrowRight className="h-5 w-5 text-zinc-500 shrink-0" />
                  <div className="flex-1 bg-surface border border-border p-4 text-sm font-medium text-amber-500">Repeat Customer</div>
               </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. WEBSITE EXPERIENCE */}
      <section className="section-space">
        <div className="content-shell grid gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-amber-500 uppercase">
              Restaurant Websites
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A Website Built Around How Restaurants Actually Sell.
            </h2>
            <p className="mt-6 text-lg text-foreground-body">
              Restaurant websites need to look great, load quickly, work perfectly on mobile devices, and make it easy for customers to take action.
            </p>
            <p className="mt-4 text-foreground-body">
              We design and build restaurant websites around the actions that matter:
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-foreground-body">
              {["Explore the menu", "Place an order", "Make a reservation", "Find the restaurant", "Contact the restaurant", "Discover offers", "View food & atmosphere", "Return for another order"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-500" /> {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-6">
              {[
                { title: "Custom Restaurant Branding", desc: "Your colors, typography, photography, tone, menu presentation, and visual identity are built into the experience." },
                { title: "Interactive Digital Menus", desc: "Organized categories, item details, sizes, modifiers, add-ons, pricing, availability, and food imagery." },
                { title: "Direct Online Ordering", desc: "Customers can move from browsing the menu directly into an ordering experience." },
                { title: "Multi-Location Support", desc: "Show branches, locations, opening hours, menus, contact information, and branch-specific information." }
              ].map((feature) => (
                <div key={feature.title}>
                  <h4 className="text-base font-semibold text-foreground">{feature.title}</h4>
                  <p className="mt-1 text-sm text-foreground-body">{feature.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
          
          <Reveal delayMs={100} className="relative h-full w-full">
             {/* Website Visual Representation */}
             <div className="bg-surface-secondary/50 border border-border rounded-xl shadow-xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6">
                <Zoom>
                   <div className="relative w-full aspect-[16/10] bg-zinc-900 rounded-lg shadow-md border border-zinc-800 overflow-hidden flex flex-col cursor-zoom-in hover:border-amber-500/50 transition-colors">
                      <div className="h-6 sm:h-8 bg-zinc-950 border-b border-zinc-800 flex items-center px-3 gap-1.5 shrink-0">
                         <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-zinc-700"></div>
                         <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-zinc-700"></div>
                         <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-zinc-700"></div>
                      </div>
                      <div className="relative flex-1 w-full">
                         <Image src="/images/home-mockup.avif" alt="Homepage UI Mockup" fill className="object-cover object-top" placeholder="blur" blurDataURL={blurData} />
                      </div>
                   </div>
                </Zoom>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                   <Zoom>
                      <div className="relative w-full aspect-[9/16] bg-zinc-900 rounded-lg shadow-md border border-zinc-800 overflow-hidden cursor-zoom-in hover:border-amber-500/50 transition-colors">
                         <Image src="/images/menu.avif" alt="Menu" fill className="object-cover object-top" placeholder="blur" blurDataURL={blurData} />
                      </div>
                   </Zoom>
                   <Zoom>
                      <div className="relative w-full aspect-[9/16] bg-zinc-900 rounded-lg shadow-md border border-zinc-800 overflow-hidden cursor-zoom-in hover:border-amber-500/50 transition-colors">
                         <Image src="/images/product.avif" alt="Product" fill className="object-cover object-top" placeholder="blur" blurDataURL={blurData} />
                      </div>
                   </Zoom>
                   <Zoom>
                      <div className="relative w-full aspect-[9/16] bg-zinc-900 rounded-lg shadow-md border border-zinc-800 overflow-hidden cursor-zoom-in hover:border-amber-500/50 transition-colors">
                         <Image src="/images/checkout.avif" alt="Checkout" fill className="object-cover object-top" placeholder="blur" blurDataURL={blurData} />
                      </div>
                   </Zoom>
                </div>
             </div>
          </Reveal>
        </div>
      </section>
      
      {/* TODO: Implement sections 4 to 14 */}

    </>
  );
}

