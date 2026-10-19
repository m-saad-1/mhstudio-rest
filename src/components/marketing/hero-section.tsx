import { ResponsiveImage } from "@/components/ui/responsive-image";
import { TrackedLink } from "@/components/ui/tracked-link";
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
  { label: "Delivery Fleet", icon: Zap },
  { label: "Local SEO & Maps", icon: SearchCheck },
];

export function HeroSection() {
  return (
    <section className="hero-section content-shell pb-8 pt-8 sm:pb-12 sm:pt-12 lg:pt-16">
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="eyebrow hero-eyebrow"><Sparkles className="h-4 w-4 shrink-0" />Attract more customers through modern System</span>
        <div className="max-w-4xl space-y-5">
          <h1 className="type-display">
            <span className="block sm:hidden"><span className="block">Websites For Restaurants</span><span className="mt-1 block text-accent-text">- That Fill Tables.</span></span>
            <span className="hidden sm:block"><span className="block">Digital Solutions for Restaurants</span><span className="block">— Built to Drive Growth.</span></span>
          </h1>
          <p className="type-lead mx-auto max-w-[68ch] text-pretty text-foreground-body">From websites and online ordering to POS, kitchen management, delivery, and AI assistants—we build connected digital systems for modern restaurants.</p>
        </div>
        <div className="flex w-full max-w-md flex-col gap-3 min-[400px]:flex-row sm:w-auto sm:max-w-none">
          <TrackedLink href="/demo" eventName="click_hero_demo" className="button-primary min-[400px]:flex-1 sm:flex-none">Get Free Demo</TrackedLink>
          <TrackedLink href="/contact" eventName="click_hero_contact" className="button-secondary min-[400px]:flex-1 sm:flex-none">Start 14-Day Trial</TrackedLink>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {trustItems.map((item) => { const Icon = item.icon; return (
            <div key={item.label} className="hero-trust-item inline-flex items-center gap-2 rounded-tag border border-border bg-surface px-3 py-2 text-sm text-foreground-body"><Icon className="h-4 w-4 shrink-0 text-accent-text" strokeWidth={2} /><span>{item.label}</span></div>
          ); })}
        </div>
        <div className="mt-2 w-full max-w-[1200px] sm:mt-4">
          <ResponsiveImage name="device-showcase" alt="Device showcase featuring MhStudio website mockups on laptop, tablet, and phone." priority sizes="(max-width: 768px) 90vw, (max-width: 1024px) 800px, 1200px" className="mx-auto h-auto max-h-[640px] w-full object-contain" />
        </div>
      </div>
    </section>
  );
}
