"use client";

import Image from "next/image";
import { TrackedLink } from "@/components/ui/tracked-link";
import deviceShowcase from "../../../public/images/Device-showcase.avif";
import SearchCheck from "lucide-react/dist/esm/icons/search-check";
import Bot from "lucide-react/dist/esm/icons/bot";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import Zap from "lucide-react/dist/esm/icons/zap";
import ShoppingBag from "lucide-react/dist/esm/icons/shopping-bag";
import Calculator from "lucide-react/dist/esm/icons/calculator";

const trustItems = [
  { label: "Online Ordering", icon: ShoppingBag },
  { label: "POS & KDS", icon: Calculator },
  { label: "AI Receptionist", icon: Bot },
  { label: "95+ Page Speed", icon: Zap },
  { label: "Local SEO & Maps", icon: SearchCheck },
];

export function HeroSection() {
  return (
    <div className="relative min-h-0 sm:min-h-[calc(100svh-96px)]">
      <section className="relative isolate overflow-hidden px-4 pt-4 pb-0 sm:px-6 sm:pt-6 sm:pb-0 lg:px-10 lg:pt-8 lg:pb-0">
        <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[35rem] w-[min(100vw,70rem)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,_rgba(245,158,11,1)_0%,_rgba(245,158,11,0.6)_30%,_rgba(245,158,11,0.25)_50%,_transparent_70%)] blur-[130px] sm:h-[40rem] sm:w-[min(100vw,80rem)]" />

      <div className="mx-auto flex min-h-0 w-full max-w-[1200px] flex-col items-center justify-start pt-4 gap-4 text-center sm:min-h-[calc(100svh-96px)] sm:pt-[clamp(3rem,8vh,6rem)] sm:gap-5 lg:gap-6">
        <span className="eyebrow border-white/10 bg-white/5 text-foreground !text-[9px] !px-2.5 !py-0.5 tracking-tight sm:!text-xs sm:!px-4 sm:!py-1.5 sm:tracking-normal">
          <Sparkles className="h-3 w-3 text-accent sm:h-4 sm:w-4" />
          Attract more customers through modern Websites
        </span>

        <div className="space-y-3 sm:space-y-4">
          <h1 className="mx-auto text-foreground">
            <span className="block sm:hidden text-[2.15rem] leading-[1.1] font-bold tracking-[-0.04em]">
              <span className="block">Websites For Restaurants</span>
              <span className="block text-accent mt-0.5">- That Fill Tables.</span>
            </span>
            <span className="hidden sm:block text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.12] tracking-[-0.04em]">
              <span className="block">Digital Solutions for Restaurants</span>
              <span className="block">— Built to Drive Growth.</span>
            </span>
          </h1>

          <p className="mx-auto max-w-[840px] text-pretty text-sm leading-[1.65] text-foreground-body sm:text-[clamp(1.05rem,1.8vw,1.125rem)]">
            From websites and online ordering to POS, kitchen management, delivery, and AI assistants—we build connected digital systems for modern restaurants.
          </p>
        </div>

        <div className="flex w-full max-w-[340px] flex-row items-center justify-center gap-2 sm:w-auto sm:max-w-none sm:gap-3">
          <TrackedLink href="/demo" eventName="click_hero_demo" className="button-primary flex-1 sm:flex-none sm:w-auto min-h-[44px] px-2 text-xs sm:min-h-[52px] sm:px-7 sm:text-sm">
            Get Free Demo
          </TrackedLink>
          <TrackedLink href="/contact" eventName="click_hero_contact" className="button-secondary flex-1 sm:flex-none sm:w-auto min-h-[44px] px-2 text-xs sm:min-h-[52px] sm:px-7 sm:text-sm">
            Start Your Project
          </TrackedLink>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="inline-flex items-center gap-1.5 rounded-none border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[10px] text-foreground-body sm:px-4 sm:py-1.5 sm:text-sm"
              >
                <Icon className="h-3 w-3 shrink-0 text-accent sm:h-4 sm:w-4" strokeWidth={2} />
                <span className="whitespace-nowrap">{item.label}</span>
              </div>
            );
          })}
        </div>

        <div className="relative mt-4 w-full max-w-[1200px] sm:mt-auto sm:pt-8 lg:pt-12">
          <Image
            src={deviceShowcase}
            alt="Device showcase featuring MhStudio website mockups on laptop, tablet, and phone."
            priority
            fetchPriority="high"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 900px, 1200px"
            className="relative mx-auto h-auto w-full max-h-[clamp(15rem,50vw,40rem)] object-contain drop-shadow-[0_30px_90px_rgba(0,0,0,0.72)]"
          />
        </div>
      </div>
      </section>
    </div>
  );
}
