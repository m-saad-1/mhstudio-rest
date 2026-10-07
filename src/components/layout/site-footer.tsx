import Image from "next/image";
import Link from "next/link";

import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import { navigationItems, siteConfig } from "@/data/site-content";
import { FooterCtaWrapper } from "@/components/layout/footer-cta-wrapper";
import { TrackedLink } from "@/components/ui/tracked-link";

export function SiteFooter() {
  const serviceLinks = [
    { label: "Restaurant Management System (RMS)", href: "/services/restaurant-management-systems" },
    { label: "Point of Sale (POS)", href: "/services/point-of-sale-systems" },
    { label: "Kitchen Display System (KDS)", href: "/services/kitchen-display-systems" },
    { label: "Online Ordering", href: "/services/online-ordering-systems" },
    { label: "Delivery Management", href: "/services/delivery-and-fleet-management" },
    { label: "QR Menu & Self-Ordering", href: "/services/qr-menu-self-ordering" },
  ];

  return (
    <footer className="section-divider relative mt-10 overflow-hidden bg-[rgba(9,9,11,0.88)]">

      <div className="content-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-semibold tracking-[-0.03em] text-foreground">
              <Image src="/mh_logo.png" alt="MhStudio Logo" width={32} height={32} className="h-8 w-auto" />
              {siteConfig.name}
            </Link>
            <p className="max-w-sm text-sm leading-[1.7] text-foreground-body sm:text-base">
              End-to-end digital ordering, POS, delivery, and management solutions for modern restaurant brands.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground-muted">Quick Links</h3>
            <div className="grid gap-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-sm text-foreground-body transition-colors duration-300 hover:text-foreground"
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground-muted">Services</h3>
            <div className="grid gap-3">
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm text-foreground-body transition-colors duration-300 hover:text-foreground"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground-muted">Legal</h3>
            <div className="grid gap-3">
              <Link href="/privacy" className="text-sm text-foreground-body transition-colors duration-300 hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-foreground-body transition-colors duration-300 hover:text-foreground">
                Terms
              </Link>
              <Link href="/contact" className="text-sm text-foreground-body transition-colors duration-300 hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/6 pt-6 text-sm text-foreground-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Delivering premium restaurant technology, management, and digital ordering platforms.</p>
        </div>
      </div>
    </footer>
  );
}
