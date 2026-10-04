"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";
import { useEffect, useState } from "react";
import { navigationItems } from "@/data/site-content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 overflow-visible">
        <div className="content-shell relative py-4">
          <div
            className={[
              "grid h-[72px] grid-cols-[1fr_auto] items-center border transition-colors duration-300 lg:grid-cols-[1fr_auto_1fr]",
              scrolled
                ? "border-white/10 bg-navigation-background shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-md"
                : "border-white/0 bg-transparent backdrop-blur-md",
            ].join(" ")}
          >
            <Link href="/" className="justify-self-start px-6 flex items-center">
              <Image src="/mh_logo.png" alt="MhStudio Logo" width={48} height={48} className="h-10 w-auto sm:h-12" priority />
            </Link>

            <nav className="hidden items-center gap-8 lg:flex lg:justify-self-center" aria-label="Primary">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors duration-300 ${isActive ? "text-foreground" : "text-foreground-body hover:text-foreground"}`}
                  >
                    {isActive && (
                      <span className="absolute -left-3 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-none bg-accent" />
                    )}
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden justify-self-end pr-3 lg:block">
              <Link href="/demo" className="button-primary px-6 text-sm">
                Get Free Demo
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="mr-3 flex h-11 w-11 items-center justify-center rounded-none border border-white/8 bg-card-background text-foreground lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-[rgba(9,9,11,0.95)] backdrop-blur-xl transition-opacity duration-500 ease-in-out ${menuOpen ? "opacity-100" : "opacity-0"}`} 
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        
        {/* Menu Content */}
        <div 
          className={`content-shell relative flex h-[100dvh] flex-col overflow-y-auto py-6 pb-12 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center transition-transform active:scale-95"
            >
              <Image src="/mh_logo.png" alt="MhStudio Logo" width={48} height={48} className="h-10 w-auto sm:h-12 drop-shadow-lg" priority />
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="group flex h-11 w-11 items-center justify-center rounded-none border border-white/10 bg-white/5 text-foreground transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95"
              aria-label="Close menu"
            >
              <X className="h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-90" />
            </button>
          </div>

          <nav className="mt-12 flex flex-1 flex-col justify-center gap-6 sm:gap-8" aria-label="Mobile">
            {navigationItems.map((item, index) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <div 
                  key={item.href} 
                  className={`relative w-fit transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}
                  style={{ transitionDelay: `${menuOpen ? index * 100 + 100 : 0}ms` }}
                >
                  {isActive && (
                    <span className="absolute -left-6 top-1/2 -translate-y-1/2 h-2 w-2 rounded-none bg-accent shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
                  )}
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-4xl sm:text-5xl font-bold tracking-tight leading-none transition-colors duration-300 ${isActive ? "text-accent" : "text-foreground hover:text-white/70"}`}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div 
            className={`mt-8 flex flex-col gap-3 pb-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            style={{ transitionDelay: `${menuOpen ? navigationItems.length * 100 + 150 : 0}ms` }}
          >
            <Link
              href="/demo"
              onClick={() => setMenuOpen(false)}
              className="button-primary w-full px-6 text-base shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Free Demo
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="button-secondary w-full px-6 text-base transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
