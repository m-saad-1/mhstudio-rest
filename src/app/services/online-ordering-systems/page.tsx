import { getZoomImage } from "@/lib/zoom-image";
import { ResponsiveImage, SERVICE_IMAGE_SIZES } from "@/components/ui/responsive-image";
import type { Metadata } from "next";
import { IntentLink as Link } from "@/components/ui/intent-link";
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";
import Check from "lucide-react/dist/esm/icons/check";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
export const metadata: Metadata = {
  title: "Online Ordering Systems",
  description: "Turn your restaurant website into a direct ordering channel. Fast, branded ordering experiences for pickup and delivery.",
};

export default function OnlineOrderingSystemsPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pb-12 pt-8 sm:pt-12 lg:pb-16 lg:pt-16">
        <div className="absolute inset-0 z-0">


        </div>

        <div className="content-shell relative z-10 text-center max-w-4xl mx-auto mb-16">
          <Reveal className="flex flex-col items-center">
            <Link href="/services" className="mb-8 inline-flex min-h-11 w-fit items-center text-sm font-medium text-foreground-muted hover:text-foreground transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">
              Online Ordering Systems
            </span>
            <h1 className="type-display text-foreground">
              Turn Your Restaurant Website Into a Direct Ordering Channel.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground-body">
              Give customers a fast, branded way to browse your menu, customize their meals, choose pickup or delivery, and order directly from your restaurant.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/demo"
                className="button-primary"
              >
                Get Your Free Demo
              </Link>
              <Link
                href="#ordering-workflow"
                className="button-secondary"
              >
                See How Ordering Works
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 pt-6 border-t border-border/50">
              {["Direct Online Orders", "Pickup & Delivery", "Customizable Menus", "Secure Checkout", "POS + KDS Connected"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-foreground-muted">
                  <Check className="h-4 w-4 text-accent-text" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Hero Visual */}
        <div className="content-shell relative z-10">
          <Reveal delayMs={100} className="mx-auto w-full max-w-5xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-card border border-border-strong bg-surface shadow-card">
              <ResponsiveImage name="online-ordering" alt="Online ordering system" fill className="object-cover object-top"  priority sizes={SERVICE_IMAGE_SIZES} />
            </div>
            <div className="hidden">
            <div className="relative w-full rounded-card border border-border-strong bg-surface shadow-card overflow-hidden flex flex-col sm:flex-row min-h-[500px]">
               {/* Browser UI */}
               <div className="flex-1 border-b sm:border-b-0 sm:border-r border-border-strong flex flex-col overflow-hidden relative">
                  <div className="h-10 bg-surface border-b border-border-strong flex items-center px-4 gap-2">
                     <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-success"></div>
                     </div>
                     <div className="ml-4 bg-surface-secondary h-5 w-48 rounded-tag text-sm text-foreground-muted flex items-center px-2">your-restaurant.com/order</div>
                  </div>
                  <div className="flex-1 bg-surface flex flex-col">
                     <div className="h-16 border-b border-border-strong flex items-center justify-between px-6">
                        <div className="text-xl font-black italic text-foreground tracking-tighter uppercase">BURGER<span className="text-accent-text">CO.</span></div>
                        <div className="flex gap-4 text-sm font-semibold text-foreground-muted">
                           <span className="text-accent-text">Menu</span>
                           <span>Locations</span>
                           <span>Offers</span>
                        </div>
                     </div>
                     <div className="p-8 grid grid-cols-2 gap-8 h-full">
                        <div className="flex flex-col justify-center">
                           <div className="text-3xl font-bold text-foreground mb-2">Order Direct & Save</div>
                           <div className="text-sm text-foreground-muted mb-6">Get 15% off your first delivery order.</div>
                           <button className="bg-accent text-foreground font-bold py-3 px-6 rounded-tag w-fit text-sm">Order Now</button>
                        </div>
                        <div className="bg-surface border border-border-strong rounded-control overflow-hidden relative group hidden md:block">
                           <div className="absolute inset-0"></div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Mobile App/Ordering UI */}
               <div className="relative w-full sm:w-[320px] bg-surface shadow-card flex flex-col z-20 h-[500px] sm:h-auto">
                  <div className="h-10 bg-surface border-b border-border-strong flex items-center justify-between px-4 text-sm text-foreground-muted">
                     <span>9:41</span>
                     <div className="flex gap-1 items-center">
                        <div className="w-4 h-2.5 bg-surface-secondary rounded-tag"></div>
                     </div>
                  </div>
                  <div className="p-4 border-b border-border-strong">
                     <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-foreground">Menu</span>
                        <div className="w-8 h-8 rounded-full bg-surface-secondary flex items-center justify-center relative">
                           <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent flex items-center justify-center text-sm font-bold text-foreground">2</span>
                        </div>
                     </div>
                     <div className="flex gap-2 overflow-hidden">
                        <span className="bg-accent text-foreground text-sm font-bold px-3 py-1.5 rounded-tag whitespace-nowrap">Burgers</span>
                        <span className="bg-surface-secondary text-foreground-body text-sm px-3 py-1.5 rounded-tag whitespace-nowrap">Sides</span>
                        <span className="bg-surface-secondary text-foreground-body text-sm px-3 py-1.5 rounded-tag whitespace-nowrap">Drinks</span>
                     </div>
                  </div>
                  <div className="flex-1 p-4 overflow-y-auto space-y-4">
                     {[1,2,3].map((item) => (
                        <div key={item} className="bg-surface border border-border-strong rounded-control p-3 flex gap-3">
                           <div className="w-16 h-16 bg-surface rounded-tag border border-border-strong"></div>
                           <div className="flex-1 flex flex-col justify-between">
                              <div>
                                 <div className="text-sm font-bold text-foreground">Classic Beef Burger</div>
                                 <div className="text-sm text-foreground-muted leading-tight mt-0.5">Beef patty, cheese, lettuce</div>
                              </div>
                              <div className="flex justify-between items-center mt-2">
                                 <div className="text-sm font-bold text-foreground-body">PKR 850</div>
                                 <button className="bg-accent-soft text-accent-text w-5 h-5 rounded-tag flex items-center justify-center text-sm font-bold">+</button>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className="p-4 bg-surface border-t border-border-strong">
                     <button className="w-full bg-accent text-foreground py-3 rounded-tag text-sm font-bold flex justify-between px-4">
                        <span>View Cart</span>
                        <span>PKR 1,700</span>
                     </button>
                  </div>
               </div>
            </div>

            <div className="mt-8 flex justify-center items-center text-sm font-bold text-foreground-muted gap-4">
               <span>WEBSITE</span>
               <ArrowRight className="w-4 h-4 text-accent-text" />
               <span className="text-accent-text">ORDER</span>
               <ArrowRight className="w-4 h-4 text-accent-text" />
               <span>RESTAURANT</span>
            </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="section-space section-divider bg-surface-secondary" id="ordering-workflow">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Direct Restaurant Ordering"
            title="Make Ordering From Your Restaurant as Easy as Ordering From a Marketplace."
            description="Customers are already comfortable ordering food online. Your restaurant should give them a fast, simple, and branded way to do it directly. Let customers browse your menu, customize items, and complete checkout while you manage the order through your connected operational workflow."
            align="center"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { title: "Discover", desc: "Customers explore your digital menu and restaurant information." },
              { title: "Order", desc: "They customize items, add to cart, and complete checkout." },
              { title: "Fulfill", desc: "The order moves directly into your restaurant's kitchen and fulfillment workflow." }
            ].map((feature, i) => (
              <Reveal key={feature.title} delayMs={i * 100} className="surface-card p-6 border-t-2 border-t-amber-500/20">
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground-body text-sm leading-relaxed">{feature.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={200} className="mt-16 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="bg-surface p-6 rounded-control border border-border w-full flex flex-col items-center text-center">
                <div className="text-accent-text font-bold mb-2">EXPLORE</div>
                <div className="text-sm text-foreground-body">Menu + Products</div>
             </div>
             <ArrowRight className="w-6 h-6 text-accent-text rotate-90 md:rotate-0 flex-shrink-0" />
             <div className="bg-surface p-6 rounded-control border border-border w-full flex flex-col items-center text-center">
                <div className="text-accent-text font-bold mb-2">ORDER</div>
                <div className="text-sm text-foreground-body">Cart + Checkout</div>
             </div>
             <ArrowRight className="w-6 h-6 text-accent-text rotate-90 md:rotate-0 flex-shrink-0" />
             <div className="bg-surface p-6 rounded-control border border-border w-full flex flex-col items-center text-center">
                <div className="text-accent-text font-bold mb-2">FULFILL</div>
                <div className="text-sm text-foreground-body">Kitchen + Delivery/Pickup</div>
             </div>
          </Reveal>
        </div>
      </section>

      {/* 3. THE PROBLEM */}
      <section className="section-space">
        <div className="content-shell">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
             <Reveal>
               <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Third-Party Dependency</span>
               <h2 className="type-section text-foreground mb-6">Your Customers Shouldn&apos;t Have to Leave Your Brand.</h2>
               <p className="text-lg text-foreground-body mb-8">Third-party marketplaces can help you reach customers, but a branded ordering system gives you control over the experience and creates a direct relationship with your customers.</p>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                     { title: "Another Customer Journey", desc: "Customers interact with a marketplace instead of your own brand." },
                     { title: "Limited Brand Experience", desc: "Your menu and ordering experience live inside someone else's platform." },
                     { title: "Fragmented Data", desc: "Customer and order information may not live inside your own ecosystem." },
                     { title: "Less Direct Engagement", desc: "It can be harder to build a long-term direct relationship with customers." }
                  ].map(prob => (
                     <div key={prob.title} className="bg-surface p-4 rounded-tag border border-border">
                        <h4 className="font-semibold text-error mb-1 text-sm">{prob.title}</h4>
                        <p className="text-sm text-foreground-body">{prob.desc}</p>
                     </div>
                  ))}
               </div>
             </Reveal>

             <Reveal delayMs={100} className="surface-card p-8 bg-surface text-center flex flex-col gap-8">
                <div>
                   <div className="text-sm font-bold text-foreground-muted mb-4 tracking-wider">THIRD-PARTY MARKETPLACE</div>
                   <div className="flex flex-col items-center text-sm font-semibold text-foreground-muted bg-surface p-4 rounded-tag border border-border-strong ">
                      <div>Customer</div>
                      <div className="h-4 w-px bg-surface-secondary my-2"></div>
                      <div className="bg-surface-secondary px-4 py-1.5 rounded-tag text-foreground-body border border-border-strong w-full max-w-[200px]">Marketplace</div>
                      <div className="h-4 w-px bg-surface-secondary my-2"></div>
                      <div>Restaurant</div>
                   </div>
                </div>

                <div>
                   <div className="text-sm font-bold text-accent-text mb-4 tracking-wider">DIRECT ONLINE ORDERING</div>
                   <div className="flex flex-col items-center text-sm font-bold text-foreground-body bg-surface p-6 rounded-tag border border-accent-border/40 shadow-card">
                      <div>Customer</div>
                      <div className="h-4 w-px bg-accent-soft my-2"></div>
                      <div className="bg-accent-soft text-accent-text px-4 py-2 rounded-tag border border-accent-border/40 w-full max-w-[200px]">Your Website / App</div>
                      <div className="h-4 w-px bg-accent-soft my-2"></div>
                      <div className="bg-surface-secondary text-foreground px-4 py-1.5 rounded-tag border border-border-strong w-full max-w-[200px]">Your Ordering System</div>
                      <div className="h-4 w-px bg-accent-soft my-2"></div>
                      <div>Your Restaurant</div>
                   </div>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* 5, 6, 7. MENU BROWSING, CUSTOMIZATION, CART */}
      <section className="section-space section-divider bg-surface-secondary">
        <div className="content-shell flex flex-col gap-24">
           {/* Interactive Digital Menu */}
           <div className="grid gap-12 lg:grid-cols-2 items-center">
             <Reveal className="order-2 lg:order-1">
               <span className="mb-2 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Interactive Digital Menu</span>
               <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">Make It Easy for Customers to Find What They Want.</h3>
               <p className="text-foreground-body text-lg mb-6">Customers should be able to move through your menu naturally, understand products quickly, and find the right meal without unnecessary steps.</p>
             </Reveal>
             <Reveal delayMs={100} className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[320px] aspect-[9/19] rounded-dialog border-[6px] border-border-strong bg-surface overflow-hidden shadow-card cursor-zoom-in hover:border-accent-border/40 transition-colors">
                   <Zoom zoomImg={getZoomImage("/images/menu.avif")}>
                      <Image sizes="(max-width: 359px) calc(100vw - 40px), 320px" fetchPriority="low" src="/images/menu.avif" alt="Digital Menu UI Mockup" fill className="object-cover object-top" />
                   </Zoom>
                </div>
             </Reveal>
           </div>

           {/* Customize Every Order */}
           <div className="grid gap-12 lg:grid-cols-2 items-center">
             <Reveal className="order-2 lg:order-1">
               <span className="mb-2 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Customize Every Order</span>
               <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">Let Customers Build Their Order Exactly the Way They Want It.</h3>
               <p className="text-foreground-body text-lg mb-6">Make options easy to understand and select, from sizes and add-ons to removals and special instructions.</p>
             </Reveal>
             <Reveal delayMs={100} className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[320px] aspect-[9/19] rounded-dialog border-[6px] border-border-strong bg-surface overflow-hidden shadow-card cursor-zoom-in hover:border-accent-border/40 transition-colors">
                   <Zoom zoomImg={getZoomImage("/images/product.avif")}>
                      <Image sizes="(max-width: 359px) calc(100vw - 40px), 320px" fetchPriority="low" src="/images/product.avif" alt="Product Customization UI Mockup" fill className="object-cover object-top" />
                   </Zoom>
                </div>
             </Reveal>
           </div>

           {/* Smart Cart & Checkout */}
           <div className="grid gap-12 lg:grid-cols-2 items-center">
             <Reveal className="order-2 lg:order-1">
               <span className="mb-2 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Smart Cart & Simple Checkout</span>
               <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">Keep the Order Clear Before Checkout.</h3>
               <p className="text-foreground-body text-lg mb-6">The cart should give customers a simple summary of everything they&apos;ve selected, including modifiers, quantities, and pricing breakdown. A good ordering experience removes unnecessary steps between the customer&apos;s decision to order and the final confirmation.</p>

               <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
                  {['CART', 'DETAILS', 'PAYMENT', 'CONFIRMED'].map((step, i, arr) => (
                     <div key={step} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <div className={`text-xs sm:text-sm font-bold tracking-wider px-3 py-2 rounded-tag border text-center whitespace-nowrap w-full sm:w-auto ${i === arr.length - 1 ? 'bg-success-soft border-success/40 text-success' : 'bg-surface border-border text-foreground-muted'}`}>
                           {step}
                        </div>
                        {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-foreground-muted rotate-90 sm:rotate-0 flex-shrink-0" />}
                     </div>
                  ))}
               </div>
             </Reveal>
             <Reveal delayMs={100} className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[320px] aspect-[9/19] rounded-dialog border-[6px] border-border-strong bg-surface overflow-hidden shadow-card cursor-zoom-in hover:border-accent-border/40 transition-colors">
                   <Zoom zoomImg={getZoomImage("/images/checkout.avif")}>
                      <Image sizes="(max-width: 359px) calc(100vw - 40px), 320px" fetchPriority="low" src="/images/checkout.avif" alt="Checkout UI Mockup" fill className="object-cover object-top" />
                   </Zoom>
                </div>
             </Reveal>
           </div>
        </div>
      </section>

      {/* 8 & 9. FULFILLMENT & DELIVERY ZONES */}
      <section className="section-space section-divider bg-surface-secondary">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Flexible Fulfillment"
            title="Let Customers Choose How They Want Their Order."
            description="Different customers want different fulfillment options. Give customers a clear choice between pickup and delivery based on what your restaurant supports."
            align="center"
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2">
             <Reveal className="surface-card p-8 text-center flex flex-col items-center">
                <h4 className="font-bold text-accent-text mb-6">Delivery & Pickup</h4>
                <div className="w-full max-w-sm space-y-4">
                   <div className="border-2 border-accent-border/40 bg-accent-soft p-4 rounded-control flex items-center gap-4 text-left cursor-pointer shadow-card">
                      <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center text-xl">🚚</div>
                      <div>
                         <div className="font-bold text-foreground">Delivery</div>
                         <div className="text-sm text-foreground-muted">Delivered to your address</div>
                      </div>
                   </div>
                   <div className="border border-border-strong bg-surface p-4 rounded-control flex items-center gap-4 text-left cursor-pointer ">
                      <div className="w-10 h-10 rounded-full bg-surface-secondary flex items-center justify-center text-xl">🏬</div>
                      <div>
                         <div className="font-bold text-foreground">Pickup</div>
                         <div className="text-sm text-foreground-muted">Collect from the restaurant</div>
                      </div>
                   </div>
                </div>
             </Reveal>

             <Reveal delayMs={100} className="surface-card p-8 flex flex-col justify-center items-center text-center">
                <h4 className="font-bold text-accent-text mb-6">Delivery Zones</h4>
                <div className="w-full flex flex-col items-center">
                   <div className="bg-success-soft border border-success/40 text-success px-6 py-3 rounded-control font-bold w-48 shadow-card">
                      Zone A
                      <div className="text-sm font-normal text-success mt-1">Free / 3 km</div>
                   </div>
                   <div className="w-px h-6 bg-surface-secondary"></div>
                   <div className="bg-info-soft border border-info/40 text-info px-6 py-3 rounded-control font-bold w-56">
                      Zone B
                      <div className="text-sm font-normal text-info mt-1">PKR 150 Fee</div>
                   </div>
                </div>
                <p className="text-sm text-foreground-muted mt-6 max-w-xs">Define delivery areas and applicable charges so customers receive the correct ordering experience.</p>
             </Reveal>
          </div>
        </div>
      </section>

      {/* 16. CONNECTED TO POS & RMS */}
      <section className="section-space">
        <div className="content-shell text-center max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Connected Restaurant Operations"
            title="Your Online Orders Shouldn't Become Another Separate System."
            description="Online ordering can become part of the restaurant's broader operating ecosystem. Orders flow into the systems responsible for order management, POS, KDS, delivery, customers, and analytics."
            align="center"
          />

          <Reveal delayMs={100} className="mt-16 w-full max-w-2xl mx-auto bg-surface border border-border p-8 rounded-card shadow-card">
             <div className="flex flex-col items-center">
                <div className="text-sm font-bold text-foreground-muted tracking-wider mb-2">CUSTOMER</div>
                <ArrowRight className="w-5 h-5 text-foreground-muted rotate-90 mb-2" />
                <div className="bg-surface-secondary text-foreground-body px-6 py-2 rounded-tag text-sm font-semibold mb-2">WEBSITE / APP</div>
                <ArrowRight className="w-5 h-5 text-foreground-muted rotate-90 mb-2" />

                <div className="bg-accent-soft border border-accent-border/40 px-8 py-3 rounded-control text-accent-text font-bold tracking-widest text-lg shadow-card mb-2 relative z-10 w-full max-w-xs">
                   ONLINE ORDERING
                </div>

                <ArrowRight className="w-5 h-5 text-accent-text rotate-90 mb-2" />
                <div className="bg-surface-secondary text-foreground px-12 py-2 rounded-tag text-sm font-bold border border-border-strong tracking-wider">RMS</div>

                <div className="flex w-full justify-center mt-4 relative max-w-xs mx-auto">
                   <div className="absolute top-[-16px] left-[15%] right-[15%] h-[16px] border-l-2 border-r-2 border-t-2 border-border-strong rounded-t-lg z-0"></div>
                   <div className="absolute top-[-16px] left-1/2 w-[2px] h-[16px] bg-surface-secondary -translate-x-1/2 z-0"></div>

                   <div className="flex justify-between w-[80%] z-10">
                      <div className="bg-surface border border-border-strong text-sm font-bold text-foreground-body px-4 py-2 rounded-tag shadow-card">POS</div>
                      <div className="bg-surface border border-border-strong text-sm font-bold text-foreground-body px-4 py-2 rounded-tag shadow-card">KDS</div>
                      <div className="bg-surface border border-border-strong text-sm font-bold text-foreground-body px-4 py-2 rounded-tag shadow-card">DELIVERY</div>
                   </div>
                </div>

                <div className="w-[70%] h-[16px] border-b-2 border-l-2 border-r-2 border-border-strong rounded-b-lg mt-4 relative max-w-[250px] mx-auto">
                   <div className="absolute bottom-[-20px] left-1/2 w-[2px] h-[20px] bg-surface-secondary -translate-x-1/2"></div>
                </div>
                <div className="text-sm font-bold text-success tracking-wider mt-6">OPERATIONS / FULFILLMENT</div>
             </div>
          </Reveal>
        </div>
      </section>

      {/* 26. CORE CAPABILITIES */}
      <section className="section-space section-divider bg-surface-secondary">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Everything Your Ordering Channel Needs."
            description="A complete digital ordering experience designed to convert visitors into customers."
            align="center"
          />

          <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
             {[
               { title: "Digital Menu", desc: "Products, categories, prices, modifiers, and availability." },
               { title: "Customization", desc: "Sizes, add-ons, removals, and special instructions." },
               { title: "Cart", desc: "Clear order summary and pricing breakdown." },
               { title: "Checkout", desc: "Customer, fulfillment, and payment information." },
               { title: "Delivery", desc: "Addresses, zones, fees, and delivery workflows." },
               { title: "Pickup", desc: "Pickup location and configured timing options." },
               { title: "Payments", desc: "Supported online and offline payment methods." },
               { title: "Order Tracking", desc: "Clear status throughout the fulfillment process." },
               { title: "Customer Accounts", desc: "Profiles, history, addresses, and reordering." },
               { title: "Promotions", desc: "Discounts, deals, coupons, and marketing campaigns." },
               { title: "Multi-Branch", desc: "Branch selection and location-specific ordering." },
               { title: "Analytics", desc: "Online sales and customer ordering insights." }
             ].map((cap, i) => (
                <Reveal key={cap.title} delayMs={(i % 4) * 50} className="surface-card p-5 border border-border/50 hover:border-accent-border/40 transition-colors">
                   <h4 className="font-semibold text-foreground mb-2 text-sm">{cap.title}</h4>
                   <p className="text-sm text-foreground-muted leading-relaxed">{cap.desc}</p>
                </Reveal>
             ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-space">
        <div className="content-shell text-center max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Ready to Take More Direct Orders?"
            title="Give Your Customers a Better Way to Order Directly From You."
            description="Build a branded online ordering experience that makes it easy for customers to discover your menu, place orders, choose delivery or pickup, and stay connected with your restaurant."
            align="center"
          />

          <Reveal delayMs={200} className="mt-16 flex flex-wrap justify-center items-center gap-4">
             <Link href="/demo" className="button-primary">
                Get Your Free Demo
             </Link>
             <Link href="/contact" className="button-secondary">
                Talk to Our Team
             </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
