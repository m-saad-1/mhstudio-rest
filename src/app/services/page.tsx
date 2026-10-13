import type { Metadata } from "next";
import { IntentLink as Link } from "@/components/ui/intent-link";
import Check from "lucide-react/dist/esm/icons/check";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { getIcon } from "@/components/ui/icon-map";
import { mainServices, supportingServicesCategories } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore MhStudio services across website design, development, landing pages, SEO, maintenance, performance, and hosting support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services built to drive growth and elevate your brand."
        description="From complete restaurant management platforms and high-performance digital ordering systems to AI-powered customer assistants and growth automation, we build technology that helps restaurants operate smarter, serve customers better, and grow faster."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "How We Work", href: "/process" }}
      />

      {/* Main Services Section */}
      <section className="section-space">
        <div className="content-shell">
          <div className="mb-12 text-center">
            <h2 className="type-section text-foreground">Core Products</h2>
            <p className="mt-4 text-lg text-foreground-body">Dedicated platforms to power every aspect of your restaurant.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {mainServices.map((service, index) => {
              const Icon = getIcon(service.icon);

              return (
                <Reveal key={`${service.title}-${index}`} delayMs={index * 60} className="surface-card flex h-full flex-col p-6">
                  <span className="inline-flex w-fit rounded-card border border-accent-border/40 bg-accent-soft p-3 text-accent-text">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-[1.7] text-foreground-body sm:text-base">{service.description}</p>
                  <div className="mt-5 grid gap-2">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-center gap-2 text-sm text-foreground-body">
                        <Check className="h-4 w-4 text-accent-text" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/services/${
                    service.title === "Restaurant Websites & Mobile Applications" ? "restaurant-websites-and-apps" :
                    service.title === "Restaurant Management Systems (RMS)" ? "restaurant-management-systems" :
                    service.title === "Point of Sale (POS) Systems" ? "point-of-sale-systems" :
                    service.title === "Kitchen Display Systems (KDS)" ? "kitchen-display-systems" :
                    service.title === "Online Ordering Systems" ? "online-ordering-systems" :
                    service.title === "Delivery & Fleet Management" ? "delivery-and-fleet-management" :
                    service.title === "Dine-In & Table Management" ? "dine-in-table-management" :
                    service.title === "QR Menu & Self-Ordering" ? "qr-menu-self-ordering" :
                    service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                  }`} className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-text transition-colors hover:text-accent-text">
                    Full details
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supporting Services Section */}
      <section className="section-space bg-background-secondary">
        <div className="content-shell">
          <div className="mb-12 text-center">
            <h2 className="type-section text-foreground">Restaurant Digital Solutions & Supporting Services</h2>
            <p className="mt-4 text-lg text-foreground-body">Comprehensive capabilities to support operations, growth, and customer engagement.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportingServicesCategories.map((category, index) => (
              <Reveal key={category.title} delayMs={index * 100} className="surface-card flex flex-col p-6 h-full border border-border/50 hover:border-accent-border/40 transition-colors">
                <h3 className="mb-4 text-xl font-semibold text-foreground">{category.title}</h3>
                <ul className="space-y-3 mb-6">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent-text shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground-body leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services/supporting-services" className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent-text transition-colors hover:text-accent-text">
                  Explore {category.title}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
