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
  title: "Restaurant Management Systems (RMS)",
  description: "Run your restaurant from one connected system. A centralized platform for orders, POS, kitchen, delivery, and analytics.",
};

export default function RestaurantManagementSystemsPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[10%] left-[10%] h-[40%] w-[40%] rounded-full bg-amber-500/10 blur-[120px]" />
          <div className="absolute top-[40%] right-[10%] h-[50%] w-[50%] rounded-full bg-amber-400/5 blur-[100px]" />
        </div>

        <div className="content-shell relative z-10 text-center max-w-4xl mx-auto mb-16">
          <Reveal className="flex flex-col items-center">
            <Link href="/services" className="mb-8 inline-flex w-fit items-center text-sm font-medium text-foreground-muted hover:text-foreground transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-amber-500 uppercase">
              Restaurant Management Systems
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4rem] xl:leading-[1.1]">
              Run Your Restaurant From One Connected System.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground-body">
              A centralized restaurant management platform built to bring orders, kitchen operations, delivery, inventory, customers, branches, staff, and business performance together in one place.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/demo"
                className="inline-flex h-12 items-center justify-center bg-amber-500 px-6 font-medium text-zinc-950 transition-colors hover:bg-amber-400"
              >
                Get Your Free Demo
              </Link>
              <Link
                href="#dashboard"
                className="inline-flex h-12 items-center justify-center border border-border px-6 font-medium text-foreground transition-colors hover:bg-surface hover:text-amber-500"
              >
                Explore the Dashboard
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 pt-6 border-t border-border/50">
              {["Centralized Operations", "Real-Time Orders", "Multi-Branch Ready", "POS + KDS Connected", "Business Analytics"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-foreground-muted">
                  <Check className="h-4 w-4 text-amber-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Hero Dashboard Visual */}
        <div className="content-shell relative z-10" id="dashboard">
          <Reveal delayMs={100} className="mx-auto w-full max-w-5xl">
            <div className="relative aspect-[16/9] w-full rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden flex flex-col">
               {/* Mockup Header */}
               <div className="h-12 border-b border-zinc-800 bg-zinc-950 flex items-center px-4 gap-2">
                 <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-zinc-800"/><div className="w-3 h-3 rounded-full bg-zinc-800"/><div className="w-3 h-3 rounded-full bg-zinc-800"/></div>
                 <div className="mx-auto text-xs font-semibold text-zinc-500">MhStudio Restaurant Command Center</div>
               </div>
               <div className="flex-1 flex items-center justify-center relative overflow-hidden">
                  <Zoom>
                    <Image src="/images/restaurant-management-dashboard-workspace.avif" alt="RMS Dashboard" fill className="object-cover object-top" />
                  </Zoom>
               </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="section-space section-divider bg-surface-secondary/30">
        <div className="content-shell">
          <SectionHeading
            eyebrow="The Restaurant Command Center"
            title="Everything Your Restaurant Needs to Manage — In One Place."
            description="Running a restaurant means managing dozens of moving parts at the same time. Orders arrive from different channels. Kitchens need to prepare them. Riders need to deliver them. Inventory needs to stay stocked. Staff need the right access. Customers need support. Owners need to understand what is happening across the business."
            align="center"
          />
          <div className="mt-6 text-center max-w-3xl mx-auto text-foreground-body">
             <p>An RMS brings these workflows together into one centralized system. Instead of switching between disconnected tools, your team gets one place to manage operations and your business gets one source of operational data.</p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Orders", desc: "Manage dine-in, takeaway, and delivery orders from one central system." },
              { title: "Operations", desc: "Connect front-of-house, kitchen, delivery, and management workflows." },
              { title: "Customers", desc: "Understand customer activity, order history, spending, and engagement." },
              { title: "Business", desc: "Monitor sales, products, branches, and operational performance." }
            ].map((feature, i) => (
              <Reveal key={feature.title} delayMs={i * 100} className="surface-card p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 text-amber-500">{feature.title}</h3>
                <p className="text-sm text-foreground-body">{feature.desc}</p>
              </Reveal>
            ))}
          </div>

          {/* Connected Operations Visual */}
          <Reveal delayMs={300} className="mt-16 surface-card p-8 sm:p-12 text-center max-w-4xl mx-auto border-amber-500/10">
             <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-medium text-zinc-400">ORDERS</div>
                <div className="flex items-center gap-4 w-full justify-center">
                   <div className="text-sm font-medium text-zinc-400">CUSTOMERS</div>
                   <div className="px-6 py-4 bg-amber-500/10 border border-amber-500/30 text-amber-500 font-bold tracking-widest rounded-sm shadow-[0_0_20px_rgba(245,158,11,0.15)]">RMS</div>
                   <div className="text-sm font-medium text-zinc-400">INVENTORY</div>
                </div>
                <div className="flex gap-4 w-full max-w-lg justify-between mt-4">
                   <div className="flex flex-col items-center gap-3">
                      <div className="px-4 py-2 border border-zinc-800 bg-zinc-900/50 text-sm">POS</div>
                      <div className="text-xs text-zinc-500">STAFF</div>
                   </div>
                   <div className="flex flex-col items-center gap-3">
                      <div className="px-4 py-2 border border-zinc-800 bg-zinc-900/50 text-sm">KDS</div>
                      <div className="text-xs text-zinc-500">KITCHEN</div>
                   </div>
                   <div className="flex flex-col items-center gap-3">
                      <div className="px-4 py-2 border border-zinc-800 bg-zinc-900/50 text-sm">DELIVERY</div>
                      <div className="text-xs text-zinc-500">RIDERS</div>
                   </div>
                </div>
             </div>
          </Reveal>
        </div>
      </section>

      {/* 3. THE PROBLEM */}
      <section className="section-space">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Restaurant Operations Are Connected"
            title="Disconnected Tools Create Disconnected Operations."
            description="A restaurant may have one system for orders, another for POS, another for delivery, spreadsheets for inventory, separate customer records, and manual reporting. The problem isn't simply having multiple tools. The problem is that the information between them often doesn't move together."
            align="center"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { title: "Manual Work", desc: "Staff spend time transferring information between systems, messages, spreadsheets, and devices." },
              { title: "Limited Visibility", desc: "Owners and managers may not have a complete view of what is happening across the restaurant." },
              { title: "Operational Gaps", desc: "When orders, kitchen, delivery, inventory, and customer information are disconnected, mistakes and delays become harder to identify." }
            ].map((feature, i) => (
              <Reveal key={feature.title} delayMs={i * 100} className="surface-card p-8 border-t-2 border-t-red-500/20">
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground-body text-sm leading-relaxed">{feature.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CENTRAL ORDER MANAGEMENT */}
      <section className="section-space section-divider bg-surface-secondary/20">
        <div className="content-shell grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-amber-500 uppercase">
              Order Management
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Every Order. One Central Workflow.
            </h2>
            <p className="mt-6 text-lg text-foreground-body">
              Orders can come from different customer and staff channels, but your restaurant shouldn't have to manage them as completely separate processes.
            </p>
            <p className="mt-4 text-foreground-body">
              The RMS provides a centralized order view where your team can manage orders from different sources while keeping the fulfillment workflow clear.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
               {[
                 { title: "Dine-In", desc: "Orders associated with restaurant tables and dine-in service." },
                 { title: "Takeaway", desc: "Pickup orders created through online channels or POS." },
                 { title: "Delivery", desc: "Orders that require customer address, dispatch, and fulfillment." }
               ].map(type => (
                  <div key={type.title} className="p-4 border border-border bg-surface rounded-lg">
                     <h4 className="font-semibold text-amber-500 mb-1">{type.title}</h4>
                     <p className="text-sm text-foreground-body">{type.desc}</p>
                  </div>
               ))}
            </div>
          </Reveal>

          <Reveal delayMs={100} className="relative aspect-square w-full surface-card flex items-center justify-center p-8">
             <div className="flex flex-col w-full max-w-sm gap-6">
                <div className="flex flex-wrap justify-center gap-2">
                   {['Website', 'Mobile App', 'POS', 'QR', 'WhatsApp', 'Phone'].map(source => (
                      <span key={source} className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1.5 rounded">{source}</span>
                   ))}
                </div>
                <div className="flex justify-center text-zinc-500"><ArrowRight className="rotate-90 w-5 h-5"/></div>
                <div className="bg-amber-500/10 border border-amber-500 text-amber-500 font-bold text-center py-4 rounded shadow-lg shadow-amber-500/10">
                   CENTRAL ORDERS
                </div>
                <div className="flex justify-center text-zinc-500"><ArrowRight className="rotate-90 w-5 h-5"/></div>
                <div className="bg-zinc-800 border border-zinc-700 text-zinc-200 font-semibold text-center py-3 rounded">
                   KDS & FULFILLMENT
                </div>
             </div>
          </Reveal>
        </div>
      </section>

      {/* 6. RESTAURANT OPERATIONS */}
      <section className="section-space">
        <div className="content-shell text-center max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Connected Operations"
            title="Move Orders From Customer to Completion Without Losing the Thread."
            description="The RMS connects the major stages of restaurant fulfillment so teams can see where an order is and what needs to happen next."
            align="center"
          />

          <Reveal delayMs={100} className="mt-16 w-full overflow-x-auto pb-6">
             <div className="flex items-center min-w-[800px] justify-between px-4 gap-2">
                {['New', 'Confirmed', 'Preparing', 'Ready', 'Out for Delivery', 'Delivered'].map((step, index, arr) => (
                   <div key={step} className="flex items-center">
                      <div className={`px-4 py-3 rounded-full text-sm font-semibold whitespace-nowrap ${index === 3 ? 'bg-amber-500 text-zinc-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]' : 'bg-surface border border-border text-foreground-body'}`}>
                         {step}
                      </div>
                      {index < arr.length - 1 && (
                         <div className={`w-8 h-0.5 mx-2 ${index < 3 ? 'bg-amber-500' : 'bg-border'}`} />
                      )}
                   </div>
                ))}
             </div>
          </Reveal>
        </div>
      </section>

      {/* 7. POS + RMS */}
      <section className="section-space section-divider bg-surface-secondary/20">
        <div className="content-shell grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
          <Reveal className="order-2 lg:order-1 relative aspect-[16/11] w-full">
             <div className="absolute inset-0 bg-surface border border-border rounded-xl shadow-xl flex items-center justify-center overflow-hidden">
                <div className="w-full h-full relative">
                   <Zoom>
                      <Image src="/images/POStab.avif" alt="POS Interface" fill className="object-cover object-left" />
                   </Zoom>
                </div>
             </div>
          </Reveal>
          
          <Reveal className="order-1 lg:order-2">
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-amber-500 uppercase">
              Point of Sale
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Front-of-House Orders Flow Directly Into Your Operations.
            </h2>
            <p className="mt-6 text-lg text-foreground-body">
              Your POS can become part of the same restaurant ecosystem instead of operating as an isolated billing system.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-foreground-body">
              {["Dine-in orders", "Takeaway orders", "Delivery orders", "Tables", "Customers", "Items", "Discounts", "Bills & Payments"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-500" /> {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 8. KITCHEN OPERATIONS */}
      <section className="section-space">
        <div className="content-shell grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-amber-500 uppercase">
              Kitchen Management
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Keep the Kitchen Connected to Every Order.
            </h2>
            <p className="mt-6 text-lg text-foreground-body">
              Orders created through your restaurant's digital and in-store channels can flow into the kitchen workflow. The KDS organizes incoming orders and gives kitchen staff a clear view of what needs to be prepared.
            </p>
            
            <div className="mt-8 flex gap-3 text-sm">
               <span className="bg-surface px-3 py-1.5 rounded text-foreground-body border border-border">New</span>
               <ArrowRight className="w-4 text-zinc-500" />
               <span className="bg-amber-500/10 px-3 py-1.5 rounded text-amber-500 border border-amber-500/20 font-medium">Preparing</span>
               <ArrowRight className="w-4 text-zinc-500" />
               <span className="bg-surface px-3 py-1.5 rounded text-foreground-body border border-border">Ready</span>
            </div>
          </Reveal>

          <Reveal delayMs={100} className="relative aspect-[16/10] w-full surface-card overflow-hidden">
             <div className="absolute inset-0 p-6 flex gap-4">
                {[
                  { title: "NEW", count: 2, border: "border-blue-500/30" },
                  { title: "PREPARING", count: 3, border: "border-amber-500/50" },
                  { title: "READY", count: 1, border: "border-green-500/30" }
                ].map(col => (
                   <div key={col.title} className={`flex-1 flex flex-col border-t-2 ${col.border} pt-2`}>
                      <div className="text-xs font-bold text-zinc-500 mb-4">{col.title} ({col.count})</div>
                      <div className="space-y-3">
                         {Array.from({ length: col.count }).map((_, i) => (
                            <div key={i} className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg shadow-md">
                               <div className="flex justify-between items-center mb-2">
                                  <span className="text-sm font-bold text-zinc-200">#{1048 + i + (col.count*2)}</span>
                                  <span className="text-[10px] text-zinc-500">4m ago</span>
                               </div>
                               <div className="space-y-1">
                                  <div className="text-xs text-zinc-400">1x Signature Burger</div>
                                  <div className="text-xs text-zinc-400">2x Loaded Fries</div>
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                ))}
             </div>
          </Reveal>
        </div>
      </section>

      {/* 9 & 10. DELIVERY & INVENTORY GRID */}
      <section className="section-space section-divider bg-surface-secondary/20">
        <div className="content-shell">
          <div className="grid gap-8 md:grid-cols-2">
             {/* Delivery */}
             <Reveal className="surface-card p-8 flex flex-col">
               <span className="mb-2 text-xs font-bold tracking-wider text-amber-500 uppercase">Delivery Operations</span>
               <h3 className="text-2xl font-bold text-foreground mb-4">From Ready Order to Delivered Customer.</h3>
               <p className="text-sm text-foreground-body mb-8">Manage delivery information, assignments, statuses, zones, riders, and fulfillment from one operational layer.</p>
               <div className="mt-auto aspect-video bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center relative overflow-hidden">
                  <Zoom>
                     <Image src="/images/Orders-tab.avif" alt="Live Map Dashboard" fill className="object-cover" />
                  </Zoom>
               </div>
             </Reveal>

             {/* Inventory */}
             <Reveal delayMs={100} className="surface-card p-8 flex flex-col">
               <span className="mb-2 text-xs font-bold tracking-wider text-amber-500 uppercase">Inventory</span>
               <h3 className="text-2xl font-bold text-foreground mb-4">Know What You Have Before You Run Out.</h3>
               <p className="text-sm text-foreground-body mb-8">Connect operational activity with inventory management so restaurant teams can keep track of ingredients, stock levels, and purchasing.</p>
               <div className="mt-auto aspect-video bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center relative overflow-hidden">
                  <Zoom>
                     <Image src="/images/Inventory-tab.avif" alt="Inventory Dashboard" fill className="object-cover" />
                  </Zoom>
               </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* 11 & 12. CUSTOMERS & MULTI-BRANCH */}
      <section className="section-space">
        <div className="content-shell">
          <div className="grid gap-12 lg:grid-cols-2">
             <Reveal>
               <span className="mb-2 text-xs font-bold tracking-wider text-amber-500 uppercase">Customer Management</span>
               <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">Turn Orders Into Customer Intelligence.</h3>
               <p className="text-lg text-foreground-body mb-6">The RMS can organize customer profiles and order activity so restaurants can understand who their customers are, what they order, and how much they spend.</p>
               
               <div className="aspect-[4/3] bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center relative overflow-hidden">
                  <Zoom>
                     <Image src="/images/Customer-management-tab.avif" alt="Customer Management Dashboard" fill className="object-cover object-left-top" />
                  </Zoom>
               </div>
             </Reveal>

             <Reveal delayMs={100}>
               <span className="mb-2 text-xs font-bold tracking-wider text-amber-500 uppercase">Multi-Location Operations</span>
               <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">Manage Every Branch From One Place.</h3>
               <p className="text-lg text-foreground-body mb-6">A multi-branch RMS gives management a centralized view while still allowing each branch to operate with its own local information.</p>
               
               <div className="space-y-3">
                  <div className="bg-surface border border-amber-500/30 rounded-lg p-4 shadow-[0_0_15px_rgba(245,158,11,0.05)]">
                     <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-amber-500">All Branches</span>
                        <span className="text-sm font-semibold text-foreground">PKR 4.8M</span>
                     </div>
                     <div className="text-xs text-foreground-muted">3,420 Orders</div>
                  </div>
                  {['Islamabad', 'Lahore', 'Karachi'].map((branch, i) => (
                     <div key={branch} className="bg-surface border border-border rounded-lg p-4 flex justify-between items-center">
                        <span className="font-semibold text-foreground">{branch}</span>
                        <span className="text-sm text-foreground-muted">{1240 - (i * 260)} Orders</span>
                     </div>
                  ))}
               </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* 14. ANALYTICS & BUSINESS PERFORMANCE */}
      <section className="section-space section-divider bg-surface-secondary/30">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Business Intelligence"
            title="Turn Restaurant Activity Into Better Decisions."
            description="An RMS should not only record what happened. It should help restaurant owners understand why it happened and where the business is performing well or needs attention."
            align="center"
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
             {[
               { title: "Sales", desc: "Revenue, orders, AOV, growth, payment methods." },
               { title: "Products", desc: "Best sellers, slow movers, category performance." },
               { title: "Customers", desc: "New customers, repeat customers, spending, retention." },
               { title: "Branches", desc: "Branch comparison, peak hours, regional variations." }
             ].map((analytics, i) => (
                <Reveal key={analytics.title} delayMs={i * 100} className="surface-card p-6 border-t-2 border-t-amber-500/20 text-center">
                   <h4 className="text-lg font-bold text-foreground mb-2">{analytics.title}</h4>
                   <p className="text-sm text-foreground-body">{analytics.desc}</p>
                </Reveal>
             ))}
          </div>
          
          <Reveal delayMs={300} className="mt-12 text-center">
             <Link href="/contact" className="inline-flex h-12 items-center justify-center bg-amber-500 px-8 font-medium text-zinc-950 transition-colors hover:bg-amber-400 rounded-sm">
                Discuss Your Restaurant Operations
             </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
