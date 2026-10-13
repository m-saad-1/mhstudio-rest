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
  title: "Point of Sale (POS) Systems",
  description: "A Faster, Smarter POS Built for Modern Restaurants. Take orders, manage tables, and connect to the kitchen from one fast system.",
};

export default function PointOfSaleSystemsPage() {
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
              Point of Sale Systems
            </span>
            <h1 className="type-display text-foreground">
              A Faster, Smarter POS Built for Modern Restaurants.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground-body">
              Take dine-in, takeaway, and delivery orders, manage tables, send orders to the kitchen, process payments, and keep your restaurant operations moving from one powerful POS system.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/demo"
                className="button-primary"
              >
                Get Your Free Demo
              </Link>
              <Link
                href="#pos-features"
                className="button-secondary"
              >
                Explore POS
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 pt-6 border-t border-border/50">
              {["Dine-In & Takeaway", "Delivery Orders", "Table Management", "Kitchen Connected", "Fast Checkout"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-foreground-muted">
                  <Check className="h-4 w-4 text-accent-text" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Hero Dashboard Visual */}
        <div className="content-shell relative z-10">
          <Reveal delayMs={100} className="mx-auto w-full max-w-5xl">
             <div className="relative aspect-[16/11] w-full rounded-card border border-border-strong bg-surface shadow-card overflow-hidden flex items-center justify-center">
                <Zoom>
                  <Image src="/images/restaurant-pos.avif" alt="POS Interface" fill className="object-cover object-left" />
                </Zoom>
             </div>
          </Reveal>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="section-space section-divider bg-surface-secondary" id="pos-features">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Built for Restaurant Service"
            title="Take Orders Faster. Keep Your Team Moving."
            description="During a busy service, your staff shouldn't have to fight with complicated software. MhStudio POS is designed around the real flow of restaurant service — from selecting a table or order type to adding items, sending them to the kitchen, managing the bill, and completing payment."
            align="center"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { title: "Take Orders", desc: "Create dine-in, takeaway, and delivery orders quickly." },
              { title: "Coordinate", desc: "Send orders to the kitchen and keep front-of-house staff aligned." },
              { title: "Complete", desc: "Manage bills, payments, order status, and customer information." }
            ].map((feature, i) => (
              <Reveal key={feature.title} delayMs={i * 100} className="surface-card p-6 border-t-2 border-t-amber-500/20">
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground-body text-sm leading-relaxed">{feature.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={200} className="mt-16 w-full max-w-4xl mx-auto overflow-x-auto pb-4">
             <div className="workflow-steps">
                {['CUSTOMER', 'ORDER', 'POS', 'KITCHEN', 'READY', 'BILL', 'PAYMENT', 'COMPLETED'].map((step, index, arr) => (
                   <div key={step} className="flex items-center">
                      <div className="text-sm font-bold tracking-wider text-foreground-muted uppercase">{step}</div>
                      {index < arr.length - 1 && <ArrowRight className="w-4 h-4 mx-2 text-accent-text" />}
                   </div>
                ))}
             </div>
          </Reveal>
        </div>
      </section>

      {/* 3. THE PROBLEM */}
      <section className="section-space">
        <div className="content-shell">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
             <Reveal>
               <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Restaurant Service Moves Fast</span>
               <h2 className="type-section text-foreground mb-6">Your POS Shouldn&apos;t Slow Your Team Down.</h2>
               <p className="text-lg text-foreground-body mb-8">During peak hours, every extra step matters. Staff need to find products quickly, customize orders, manage tables, and send kitchen tickets without losing track of the customer. A restaurant POS should make those workflows simpler — not add more complexity.</p>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                     { title: "Slow Order Entry", desc: "Too many screens and unnecessary steps can make service slower." },
                     { title: "Order Errors", desc: "Miscommunication between staff and kitchen can lead to incorrect orders." },
                     { title: "Disconnected Billing", desc: "When ordering and payment workflows are disconnected, closing orders becomes harder." },
                     { title: "Limited Visibility", desc: "Managers need to know what is happening at the counter and across the restaurant." }
                  ].map(prob => (
                     <div key={prob.title} className="bg-surface p-4 rounded-tag border border-border">
                        <h4 className="font-semibold text-error mb-1">{prob.title}</h4>
                        <p className="text-sm text-foreground-body">{prob.desc}</p>
                     </div>
                  ))}
               </div>
             </Reveal>

             <Reveal delayMs={100} className="surface-card p-8 bg-surface">
                <div className="text-sm font-bold text-foreground-muted mb-4">BEFORE</div>
                <div className="flex gap-2 text-sm text-foreground-muted bg-surface p-4 rounded-tag border border-border-strong mb-8 ">
                   Customer → Waiter → Paper Entry → Kitchen → Bill → Payment
                </div>

                <div className="text-sm font-bold text-accent-text mb-4">AFTER (CONNECTED)</div>
                <div className="bg-surface border border-accent-border/40 p-6 rounded-tag relative shadow-card">
                   <div className="flex flex-col gap-4">
                      <div className="text-sm text-foreground-body font-medium">Customer <span className="text-accent-text mx-2">→</span> <span className="bg-accent-soft text-accent-text px-3 py-1.5 rounded-tag border border-accent-border/40">POS System</span></div>
                      <div className="ml-24 flex flex-col gap-3 text-sm text-foreground-muted border-l-2 border-border-strong pl-4 py-2">
                         <div className="flex items-center gap-2"><span className="w-4 border-t-2 border-border-strong"></span> KDS (Kitchen)</div>
                         <div className="flex items-center gap-2"><span className="w-4 border-t-2 border-border-strong"></span> Order Management</div>
                         <div className="flex items-center gap-2"><span className="w-4 border-t-2 border-border-strong"></span> Customer Profiles</div>
                         <div className="flex items-center gap-2"><span className="w-4 border-t-2 border-border-strong"></span> Payment & Billing</div>
                      </div>
                   </div>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* 4. ONE POS FOR EVERY ORDER TYPE */}
      <section className="section-space section-divider bg-surface-secondary">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Flexible Ordering"
            title="Dine-In, Takeaway, or Delivery — One POS."
            description="Restaurants don't sell through one workflow. Your POS should adapt to the way each order is fulfilled."
            align="center"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { title: "Dine-In", desc: "Select a table, add items, send the order to the kitchen, manage additional items, and settle the bill when the customer is ready.", label: "Table 12" },
              { title: "Takeaway", desc: "Create a pickup order, capture customer information when needed, send the order to the kitchen, and complete the handoff.", label: "Pickup — 7:30 PM" },
              { title: "Delivery", desc: "Capture customer and delivery information, calculate applicable charges, send the order to the kitchen, and move it into the delivery workflow.", label: "Delivery — DHA Phase 6" }
            ].map((type, i) => (
              <Reveal key={type.title} delayMs={i * 100} className="surface-card flex flex-col">
                 <div className="h-16 bg-surface border-b border-border-strong flex items-center justify-center p-4">
                    <span className="bg-surface-secondary text-foreground-body text-sm px-3 py-1.5 rounded-tag font-medium">{type.label}</span>
                 </div>
                 <div className="p-6">
                   <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                   <p className="text-foreground-body text-sm leading-relaxed">{type.desc}</p>
                 </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 & 6. PRODUCT CATALOG & MODIFIERS */}
      <section className="section-space">
        <div className="content-shell grid gap-12 lg:grid-cols-2">
           <Reveal className="space-y-8">
             <div>
               <span className="mb-2 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Fast Product Selection</span>
               <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">Find What You Need Without Searching.</h3>
               <p className="text-foreground-body text-sm">Organize your restaurant&apos;s products into clear categories so staff can quickly build an order during busy service.</p>
               <div className="mt-6 flex gap-3 flex-wrap">
                  {['Burgers', 'Pizza', 'Chicken', 'Sides', 'Drinks'].map(cat => (
                     <span key={cat} className="text-sm bg-surface border border-border px-3 py-1 rounded-tag text-foreground-muted">{cat}</span>
                  ))}
               </div>
             </div>

             <div className="pt-8 border-t border-border">
               <span className="mb-2 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Flexible Orders</span>
               <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">Handle Every Customer&apos;s Order Exactly the Way They Want It.</h3>
               <p className="text-foreground-body text-sm mb-6">POS should allow staff to quickly add sizes, modifiers, extras, removals, and special instructions without creating complicated workflows.</p>

               <div className="bg-surface border border-border-strong rounded-control p-5">
                  <div className="font-bold text-foreground mb-4 border-b border-border-strong pb-2">Chicken Burger Customization</div>
                  <div className="space-y-4">
                     <div>
                        <div className="text-sm text-foreground-muted mb-2">SIZE</div>
                        <div className="flex gap-2"><button className="bg-surface-secondary text-sm px-3 py-1.5 rounded-tag text-foreground-muted">Regular</button><button className="bg-accent-soft border border-accent-border/40 text-accent-text text-sm px-3 py-1.5 rounded-tag">Large (+150)</button></div>
                     </div>
                     <div>
                        <div className="text-sm text-foreground-muted mb-2">ADD-ONS</div>
                        <div className="flex gap-2"><button className="bg-accent-soft border border-accent-border/40 text-accent-text text-sm px-3 py-1.5 rounded-tag">Extra Cheese (+150)</button><button className="bg-surface-secondary text-sm px-3 py-1.5 rounded-tag text-foreground-muted">Jalapeños (+100)</button></div>
                     </div>
                     <div>
                        <div className="text-sm text-foreground-muted mb-2">SPECIAL INSTRUCTIONS</div>
                        <div className="bg-surface border border-border-strong text-sm p-2 text-foreground-muted rounded-tag">&quot;No mayo, please.&quot;</div>
                     </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border-strong">
                     <button className="w-full bg-accent text-foreground font-bold text-sm py-3 rounded-tag">Add to Order — PKR 1,150</button>
                  </div>
               </div>
             </div>
           </Reveal>

           <Reveal delayMs={100} className="bg-surface-secondary rounded-card p-8 flex items-center justify-center">
               {/* 7. TABLE MANAGEMENT */}
               <div className="w-full max-w-md">
                 <span className="mb-2 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Dine-In POS</span>
                 <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">Know Which Tables Are Available, Occupied, or Ready.</h3>
                 <p className="text-foreground-body text-sm mb-8">Staff can see table status, open orders, guests, and active checks without losing track of where orders belong.</p>

                 <div className="relative aspect-video w-full rounded-card border border-border-strong bg-surface shadow-card overflow-hidden flex items-center justify-center">
                    <Zoom>
                      <Image src="/images/Table-management-tab.avif" alt="Table Management" fill className="object-cover" />
                    </Zoom>
                 </div>
               </div>
           </Reveal>
        </div>
      </section>

      {/* 9. KITCHEN CONNECTION & 11. BILLING */}
      <section className="section-space section-divider bg-surface-secondary">
        <div className="content-shell">
          <div className="grid gap-8 md:grid-cols-2">
             <Reveal className="surface-card p-8 flex flex-col justify-between">
               <div>
                  <span className="mb-2 text-sm font-bold tracking-wider text-accent-text uppercase">POS → Kitchen</span>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Send Orders Straight to the Kitchen.</h3>
                  <p className="text-sm text-foreground-body mb-8">Once an order is confirmed, send it directly into the kitchen workflow. The kitchen receives the information needed without handwritten notes.</p>
               </div>

               <div className="flex gap-4 items-center bg-surface p-4 rounded-card border border-border-strong">
                  <div className="flex-1">
                     <div className="text-sm text-foreground-muted mb-1">POS</div>
                     <div className="text-sm font-semibold text-foreground">Order #1048</div>
                  </div>
                  <ArrowRight className="w-5 text-accent-text" />
                  <div className="flex-1 bg-surface p-3 rounded-tag border border-accent-border/40">
                     <div className="text-sm font-bold text-accent-text mb-1">KDS: NEW</div>
                     <div className="text-sm text-foreground-muted">#1048 — Table 12</div>
                     <div className="text-sm text-foreground-body mt-2">2× Burger, 1× Fries</div>
                  </div>
               </div>
             </Reveal>

             <Reveal delayMs={100} className="surface-card p-8 flex flex-col justify-between">
               <div>
                  <span className="mb-2 text-sm font-bold tracking-wider text-accent-text uppercase">Fast Checkout</span>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Close Every Order Accurately.</h3>
                  <p className="text-sm text-foreground-body mb-8">Bring the order, discounts, taxes, and payment information together for a clear checkout experience, including split bills.</p>
               </div>

               <div className="bg-surface p-5 rounded-card border border-border-strong text-sm">
                  <div className="flex justify-between text-foreground-muted mb-1"><span>Subtotal</span><span>PKR 4,200</span></div>
                  <div className="flex justify-between text-error mb-1"><span>Discount</span><span>-PKR 300</span></div>
                  <div className="flex justify-between text-foreground-muted mb-3 border-b border-border-strong pb-3"><span>Tax</span><span>PKR 702</span></div>
                  <div className="flex justify-between text-accent-text font-bold text-lg mb-4"><span>TOTAL</span><span>PKR 4,602</span></div>
                  <div className="flex gap-2">
                     <button className="flex-1 bg-accent text-foreground py-2 rounded-tag font-bold text-sm">Cash</button>
                     <button className="flex-1 bg-surface-secondary text-foreground-body py-2 rounded-tag font-bold text-sm">Card</button>
                  </div>
               </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* 22. CORE CAPABILITIES GRID */}
      <section className="section-space">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Everything Your Front-of-House Team Needs."
            description="MhStudio POS handles the complete ordering workflow, giving your staff the tools to serve customers efficiently."
            align="center"
          />

          <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
             {[
               { title: "Order Taking", desc: "Fast order creation across dine-in, takeaway, and delivery." },
               { title: "Menu", desc: "Products, categories, sizes, modifiers, and availability." },
               { title: "Tables", desc: "Floor plans, table status, open orders, and table assignment." },
               { title: "Kitchen", desc: "Send orders and updates directly into KDS workflows." },
               { title: "Billing", desc: "Bills, discounts, taxes, charges, and checkout." },
               { title: "Payments", desc: "Cash, card, digital, and configured payment methods." },
               { title: "Customers", desc: "Profiles, contact details, and order history." },
               { title: "Discounts", desc: "Promotions, coupons, and controlled staff discounts." },
               { title: "Order Management", desc: "Hold, edit, cancel, reopen, and complete orders." },
               { title: "Staff", desc: "Roles, permissions, and controlled actions." },
               { title: "Branches", desc: "Branch-specific operations with centralized visibility." },
               { title: "Reports", desc: "Sales and operational reporting through the wider system." }
             ].map((cap, i) => (
                <Reveal key={cap.title} delayMs={(i % 4) * 50} className="surface-card p-5 border border-border/50">
                   <h4 className="font-semibold text-foreground mb-2">{cap.title}</h4>
                   <p className="text-sm text-foreground-muted">{cap.desc}</p>
                </Reveal>
             ))}
          </div>
        </div>
      </section>

      {/* 24. WHY MHSTUDIO */}
      <section className="section-space section-divider bg-surface-secondary">
        <div className="content-shell text-center max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Why MhStudio"
            title="We Design POS Around the Restaurant — Not the Other Way Around."
            description="Restaurant staff shouldn't need to understand complicated software to take a simple order. MhStudio POS is designed around real restaurant workflows, from table service and counter ordering to kitchen coordination and checkout."
            align="center"
          />

          <Reveal delayMs={200} className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
             <div className="flex-1 surface-card p-6">
                <h4 className="font-bold text-accent-text mb-2">Restaurant-Specific</h4>
                <p className="text-sm text-foreground-body">Built around restaurant order types, tables, menus, modifiers, KDS, and payments.</p>
             </div>
             <div className="flex-1 surface-card p-6">
                <h4 className="font-bold text-accent-text mb-2">Fast</h4>
                <p className="text-sm text-foreground-body">Designed to minimize unnecessary steps during busy service.</p>
             </div>
             <div className="flex-1 surface-card p-6">
                <h4 className="font-bold text-accent-text mb-2">Connected</h4>
                <p className="text-sm text-foreground-body">Works as part of the wider restaurant management ecosystem.</p>
             </div>
          </Reveal>

          <Reveal delayMs={300} className="mt-16 text-center">
             <Link href="/contact" className="button-primary">
                Get Your Free Demo
             </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
