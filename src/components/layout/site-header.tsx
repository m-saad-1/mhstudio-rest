"use client";

import { IntentLink as Link } from "@/components/ui/intent-link";
import { usePathname } from "next/navigation";
import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";
import { useEffect, useState, type ReactNode } from "react";
import { navigationItems } from "@/data/site-content";
import { Modal } from "@/components/ui/modal";

export function SiteHeader({ logo, menuLogo }: { logo: ReactNode; menuLogo: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onResize = () => { if (query.matches) setMenuOpen(false); };
    query.addEventListener("change", onResize);
    return () => query.removeEventListener("change", onResize);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="content-shell py-3 sm:py-4">
          <div className={`grid h-[72px] grid-cols-[1fr_auto] items-center rounded-card border border-border bg-navigation-background px-4 transition-shadow duration-200 lg:grid-cols-[1fr_auto_1fr] ${scrolled ? "shadow-soft" : "shadow-card"}`}>
            <Link href="/" aria-label="MhStudio home" className="inline-flex min-h-[44px] w-fit items-center rounded-control">
              {logo}
            </Link>
            <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
              {navigationItems.map((item) => (
                <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={`inline-flex min-h-11 items-center rounded-tag px-1 text-sm font-medium transition-colors hover:text-accent-text ${isActive(item.href) ? "text-accent-text font-semibold" : "text-foreground-body"}`}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link href="/demo" className="button-primary hidden justify-self-end px-5 lg:inline-flex">Get Free Demo</Link>
            <button type="button" onClick={() => setMenuOpen(true)} className="icon-button lg:hidden" aria-label="Open menu" aria-expanded={menuOpen} aria-haspopup="dialog">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <Modal open={menuOpen} onClose={() => setMenuOpen(false)} titleId="mobile-menu-title" className="menu-panel">
        <div className="dialog-heading">
          <Link href="/" onClick={() => setMenuOpen(false)} aria-label="MhStudio home" className="inline-flex min-h-[44px] items-center rounded-control">
            {menuLogo}
          </Link>
          <h2 id="mobile-menu-title" className="sr-only">Navigation</h2>
          <button type="button" onClick={() => setMenuOpen(false)} className="icon-button" aria-label="Close menu"><X className="h-5 w-5" /></button>
        </div>
        <nav className="dialog-body flex flex-1 flex-col gap-2" aria-label="Mobile">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} aria-current={isActive(item.href) ? "page" : undefined} className={`rounded-control px-4 py-3 text-2xl font-semibold leading-snug transition-colors hover:bg-surface-secondary ${isActive(item.href) ? "bg-accent-soft text-accent-text" : "text-foreground"}`}>{item.label}</Link>
          ))}
        </nav>
        <div className="dialog-footer grid gap-3">
          <Link href="/demo" onClick={() => setMenuOpen(false)} className="button-primary w-full">Get Free Demo</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="button-secondary w-full">Start Your Project</Link>
        </div>
      </Modal>
    </>
  );
}
