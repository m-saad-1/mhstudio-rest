import type { Metadata } from "next";
import Link from "next/link";
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";
import Check from "lucide-react/dist/esm/icons/check";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dine-In & Table Management System",
  description: "Manage restaurant tables, floor plans, dine-in orders, waiters, QR self-ordering, and table service from one connected system.",
};

export default function DineInManagementPage() {
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
              Dine-In & Table Management
            </span>
            <h1 className="type-display text-foreground">
              Manage Every Table, Order, and Guest From One Place.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground-body">
              A connected dine-in management system for table layouts, table status, waiter orders, open checks, QR self-ordering, kitchen coordination, billing, and guest service.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/demo"
                className="button-primary"
              >
                Get Your Free Demo
              </Link>
              <Link
                href="#dine-in-workflow"
                className="button-secondary"
              >
                Explore Table Management
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 pt-6 border-t border-border/50">
              {["Visual Floor Plans", "Table Orders", "QR Self-Ordering", "Open Checks", "Split Bills"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-foreground-muted">
                  <Check className="h-4 w-4 text-accent-text" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Hero Visual: Floor Plan Dashboard */}
        <div className="content-shell relative z-10">
          <Reveal className="mx-auto mb-8 w-full max-w-5xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-card border border-border-strong bg-surface shadow-card">
              <Image src="/images/modern-restaurant-table-management-dashboard.avif" alt="Restaurant table management platform" fill className="object-cover object-top" priority sizes="(max-width: 1024px) 100vw, 1024px" />
            </div>
          </Reveal>
          <Reveal delayMs={100} className="mx-auto w-full max-w-5xl">
            <div className="relative w-full rounded-card border border-border-strong bg-surface shadow-card overflow-hidden flex">

               {/* Main Floor Plan Area */}
               <div className="min-w-0 flex-1 bg-surface flex flex-col relative">
                  <div className="h-14 border-b border-border-strong flex items-center justify-between px-6 bg-surface">
                     <span className="font-bold text-foreground">Main Floor</span>
                     <span className="text-sm font-semibold text-foreground-muted">7:30 PM</span>
                  </div>

                  {/* Grid overlay for structural feel */}
                  <div className="absolute inset-0 top-14 bg-[size:40px_40px] pointer-events-none"></div>

                  <div className="relative z-10 grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 lg:grid-cols-4">
                     {[
                        { num: 1, state: 'Free', color: 'bg-surface-secondary text-foreground-muted border-border-strong' },
                        { num: 2, state: 'Occupied', guest: 3, order: 'PKR 3,450', color: 'bg-accent-soft text-accent-text border-accent-border/40 shadow-card' },
                        { num: 3, state: 'Reserved', time: '8:00 PM', color: 'bg-info-soft text-info border-info/40' },
                        { num: 4, state: 'Occupied', guest: 4, order: 'PKR 5,100', color: 'bg-accent-soft text-accent-text border-accent-border/40 shadow-card' },
                        { num: 5, state: 'Cleaning', color: 'bg-accent-soft text-accent-text border-accent-border/40' },
                        { num: 6, state: 'Free', color: 'bg-surface-secondary text-foreground-muted border-border-strong' },
                        { num: 7, state: 'Payment', guest: 2, order: 'PKR 2,200', color: 'bg-success-soft text-success border-success/40' },
                        { num: 12, state: 'Occupied', guest: 2, order: 'PKR 4,850', color: 'bg-accent-soft text-accent-text border-accent-border/40 shadow-card ring-2 ring-amber-500' }
                     ].map((table) => (
                        <div key={table.num} className={`min-h-32 rounded-control border flex flex-col p-3 transition-transform  cursor-pointer relative ${table.color} ${table.num === 12 ? 'bg-accent-soft' : ''}`}>
                           <div className="flex flex-wrap justify-between items-start gap-1">
                              <span className="font-bold">T{table.num}</span>
                              <span className="text-sm uppercase font-bold tracking-wider">{table.state}</span>
                           </div>
                           <div className="mt-auto pt-2 flex flex-wrap justify-between items-end gap-1">
                              {table.guest && <div className="text-sm flex items-center gap-1">👥 {table.guest}</div>}
                              {table.time && <div className="text-sm">{table.time}</div>}
                              {table.order && <div className="text-sm font-bold">{table.order}</div>}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Right Side Panel - Stats */}
               <div className="w-[240px] bg-surface border-l border-border-strong hidden md:flex flex-col">
                  <div className="p-6 border-b border-border-strong">
                     <h3 className="text-xl font-bold text-foreground mb-1">18 Tables</h3>
                     <p className="text-sm text-foreground-muted">Main Floor</p>
                  </div>
                  <div className="p-6 flex-1 space-y-4">
                     <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-accent"></span> Occupied</span>
                        <span className="font-bold text-foreground">9</span>
                     </div>
                     <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-foreground-muted"></span> Available</span>
                        <span className="font-bold text-foreground">4</span>
                     </div>
                     <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Reserved</span>
                        <span className="font-bold text-foreground">3</span>
                     </div>
                     <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span> Cleaning</span>
                        <span className="font-bold text-foreground">2</span>
                     </div>
                  </div>
               </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="section-space section-divider bg-surface-secondary" id="dine-in-workflow">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Connected Dine-In Operations"
            title="From the Moment Guests Sit Down to the Moment They Leave."
            description="Dine-in service involves more than taking an order. Staff need to know which tables are occupied, who is serving them, what is being prepared, and when the bill is ready. MhStudio connects these steps into one dine-in workflow."
            align="center"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { title: "Manage", desc: "Know the status of every table at a glance." },
              { title: "Serve", desc: "Create and manage orders throughout the guest's visit." },
              { title: "Close", desc: "Handle bills and payments, then return the table to available." }
            ].map((feature, i) => (
              <Reveal key={feature.title} delayMs={i * 100} className="surface-card p-6 border-t-2 border-t-amber-500/20">
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground-body text-sm leading-relaxed">{feature.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={200} className="mt-16 w-full overflow-x-auto pb-4">
             <div className="workflow-steps">
                {[
                   { label: 'AVAILABLE', status: 'empty' },
                   { label: 'OCCUPIED', status: 'active' },
                   { label: 'ORDERING', status: 'active' },
                   { label: 'PREPARING', status: 'active' },
                   { label: 'SERVED', status: 'active' },
                   { label: 'PAYMENT', status: 'active' },
                   { label: 'CLEANING', status: 'cleaning' }
                ].map((step, index, arr) => (
                   <div key={step.label} className="flex items-center">
                      <div className="flex flex-col items-center gap-3">
                         <div className={`w-3 h-3 rounded-full ${
                            step.status === 'active' ? 'bg-accent shadow-card' :
                            step.status === 'cleaning' ? 'bg-orange-500' : 'bg-foreground-muted'
                         }`}></div>
                         <div className={`text-xs font-bold tracking-wider uppercase ${step.status === 'active' ? 'text-accent-text' : 'text-foreground-muted'}`}>{step.label}</div>
                      </div>
                      {index < arr.length - 1 && <div className="w-8 h-px bg-surface-secondary mx-2"></div>}
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
               <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Dine-In Gets Complicated</span>
               <h2 className="type-section text-foreground mb-6">When Systems Aren&apos;t Connected, Service Gets Harder.</h2>
               <p className="text-lg text-foreground-body mb-8">During busy periods, staff manage multiple tables, open orders, new guests, and kitchen requests simultaneously. Without a centralized workflow, it becomes difficult to know what is happening where.</p>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                     { title: "Lost Table Context", desc: "Staff need to know which order belongs to which table." },
                     { title: "Open Orders", desc: "Customers often add items throughout their visit." },
                     { title: "Slow Communication", desc: "Changes need to reach the kitchen and service team instantly." },
                     { title: "Payment Delays", desc: "Closing bills gets complicated with multiple guests." }
                  ].map(prob => (
                     <div key={prob.title} className="bg-surface p-4 rounded-tag border border-border">
                        <h4 className="font-semibold text-error mb-1 text-sm">{prob.title}</h4>
                        <p className="text-sm text-foreground-body">{prob.desc}</p>
                     </div>
                  ))}
               </div>
             </Reveal>

             <Reveal delayMs={100} className="surface-card min-w-0 p-5 sm:p-8 bg-surface flex flex-col justify-center">
                <div className="text-sm font-bold text-foreground-muted mb-4">BEFORE (DISCONNECTED)</div>
                <div className="workflow-steps mb-8 text-sm font-semibold text-foreground-muted">
                   <span>TABLE</span>
                   <ArrowRight className="w-3 h-3 text-foreground-muted" />
                   <span>WAITER</span>
                   <ArrowRight className="w-3 h-3 text-foreground-muted" />
                   <span>PAPER</span>
                   <ArrowRight className="w-3 h-3 text-foreground-muted" />
                   <span>KITCHEN</span>
                   <ArrowRight className="w-3 h-3 text-foreground-muted" />
                   <span>PAYMENT</span>
                </div>

                <div className="text-sm font-bold text-accent-text mb-4">AFTER (CONNECTED SYSTEM)</div>
                <div className="bg-surface border border-accent-border/40 p-6 rounded-tag relative shadow-card">
                   <div className="flex flex-col gap-4 text-sm font-bold text-foreground-body">
                      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                         <div className="shrink-0 sm:w-16 sm:text-right text-foreground-muted">START</div>
                         <div className="bg-accent-soft text-accent-text px-4 py-2 rounded-tag border border-accent-border/40 flex-1 text-center">TABLE 12</div>
                      </div>
                      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 sm:pl-16">
                         <ArrowRight className="w-4 h-4 text-foreground-muted rotate-90 mx-auto" />
                      </div>
                      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                         <div className="shrink-0 sm:w-16 sm:text-right text-foreground-muted">ORDER</div>
                         <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row">
                            <div className="bg-surface-secondary px-3 py-2 rounded-tag border border-border-strong flex-1 text-center">POS (Waiter)</div>
                            <div className="text-foreground-muted flex items-center">OR</div>
                            <div className="bg-surface-secondary px-3 py-2 rounded-tag border border-border-strong flex-1 text-center">QR (Customer)</div>
                         </div>
                      </div>
                      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 sm:pl-16">
                         <ArrowRight className="w-4 h-4 text-foreground-muted rotate-90 mx-auto" />
                      </div>
                      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                         <div className="shrink-0 sm:w-16 sm:text-right text-foreground-muted">SYNC</div>
                         <div className="bg-surface-secondary px-4 py-2 rounded-tag border border-border-strong flex-1 text-center">CENTRAL ORDER + KDS</div>
                      </div>
                      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 sm:pl-16">
                         <ArrowRight className="w-4 h-4 text-foreground-muted rotate-90 mx-auto" />
                      </div>
                      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                         <div className="shrink-0 sm:w-16 sm:text-right text-foreground-muted">END</div>
                         <div className="bg-success-soft text-success px-4 py-2 rounded-tag border border-success/40 flex-1 text-center">BILL & PAYMENT</div>
                      </div>
                   </div>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* 22. DINE-IN + ONLINE ORDERING (QR vs Waiter) */}
      <section className="section-space section-divider bg-surface-secondary">
        <div className="content-shell text-center max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="One Restaurant Order System"
            title="Whether Guests Order With a Waiter or Their Phone, Everything Reaches the Same Workflow."
            description="Dine-in ordering can support both staff-assisted service and customer self-ordering via table QR codes. Both methods converge into the exact same kitchen workflow."
            align="center"
          />

          <Reveal delayMs={100} className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
             {/* Method A */}
             <div className="bg-surface border border-border-strong p-8 rounded-card flex flex-col items-center">
                <div className="text-sm font-bold text-accent-text tracking-wider mb-8">METHOD A — STAFF</div>
                <div className="flex flex-col items-center gap-4 text-sm font-bold text-foreground-body w-full">
                   <div className="bg-surface border border-border-strong px-6 py-3 rounded-control w-full">WAITER</div>
                   <ArrowRight className="w-5 h-5 text-foreground-muted rotate-90" />
                   <div className="bg-accent-soft border border-accent-border/40 text-accent-text px-6 py-3 rounded-control w-full shadow-card">POS WORKFLOW</div>
                   <ArrowRight className="w-5 h-5 text-foreground-muted rotate-90" />
                   <div className="bg-surface border border-border-strong px-6 py-3 rounded-control w-full">KDS (Kitchen)</div>
                   <ArrowRight className="w-5 h-5 text-foreground-muted rotate-90" />
                   <div className="bg-surface border border-border-strong px-6 py-3 rounded-control w-full">SERVE TABLE</div>
                </div>
             </div>

             {/* Method B */}
             <div className="bg-surface border border-border-strong p-8 rounded-card flex flex-col items-center">
                <div className="text-sm font-bold text-success tracking-wider mb-8">METHOD B — CUSTOMER</div>
                <div className="flex flex-col items-center gap-4 text-sm font-bold text-foreground-body w-full">
                   <div className="bg-surface border border-border-strong px-6 py-3 rounded-control w-full">TABLE QR & PHONE</div>
                   <ArrowRight className="w-5 h-5 text-foreground-muted rotate-90" />
                   <div className="bg-success-soft border border-success/40 text-success px-6 py-3 rounded-control w-full shadow-card">ONLINE ORDER</div>
                   <ArrowRight className="w-5 h-5 text-foreground-muted rotate-90" />
                   <div className="bg-surface border border-border-strong px-6 py-3 rounded-control w-full">KDS (Kitchen)</div>
                   <ArrowRight className="w-5 h-5 text-foreground-muted rotate-90" />
                   <div className="bg-surface border border-border-strong px-6 py-3 rounded-control w-full">SERVE TABLE</div>
                </div>
             </div>
          </Reveal>
        </div>
      </section>

      {/* 5, 9 & 10. TABLE DETAILS & OPEN ORDERS */}
      <section className="section-space">
        <div className="content-shell grid gap-12 lg:grid-cols-2">
           <Reveal className="space-y-8">
             <div>
               <span className="mb-2 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Table Information</span>
               <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">Everything Staff Need to Know About an Active Table.</h3>
               <p className="text-foreground-body text-sm mb-6">Selecting a table opens a clear overview of the current service state, assigned waiter, and current order value.</p>

               <div className="bg-surface border border-border-strong rounded-control shadow-card overflow-hidden">
                  <div className="p-4 bg-surface border-b border-border-strong flex justify-between items-center">
                     <span className="font-bold text-foreground text-lg">TABLE 12</span>
                     <span className="text-sm bg-accent-soft text-accent-text px-2 py-1 rounded-tag font-bold">Occupied</span>
                  </div>
                  <div className="p-5">
                     <div className="flex gap-6 text-sm text-foreground-muted mb-6 border-b border-border-strong pb-4">
                        <div><span className="block text-sm uppercase tracking-wider">Guests</span><span className="font-bold text-foreground">4</span></div>
                        <div><span className="block text-sm uppercase tracking-wider">Waiter</span><span className="font-bold text-foreground">Ahmed</span></div>
                        <div><span className="block text-sm uppercase tracking-wider">Time</span><span className="font-bold text-foreground">18 min</span></div>
                     </div>
                     <div className="font-bold text-foreground-body text-sm mb-3">ORDER #1048</div>
                     <div className="space-y-2 text-sm text-foreground-muted mb-6">
                        <div className="flex justify-between"><span>2 × Chicken Burger</span><span>PKR 1,700</span></div>
                        <div className="flex justify-between"><span>1 × Pizza</span><span>PKR 1,250</span></div>
                        <div className="flex justify-between"><span>2 × Fries</span><span>PKR 700</span></div>
                        <div className="flex justify-between"><span>4 × Drinks</span><span>PKR 600</span></div>
                     </div>
                     <div className="flex justify-between font-bold text-lg text-accent-text border-t border-border-strong pt-4">
                        <span>Current Total</span><span>PKR 4,250</span>
                     </div>
                  </div>
               </div>
             </div>
           </Reveal>

           <Reveal delayMs={100} className="space-y-8 flex flex-col justify-center">
             <div>
               <span className="mb-2 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Open Checks & Additions</span>
               <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">Keep the Table&apos;s Order Open Throughout the Visit.</h3>
               <p className="text-foreground-body text-sm mb-8">Guests order more than once. Staff can add items to an existing table order without creating unnecessary duplicate transactions.</p>

               <div className="border-l-2 border-border-strong ml-4 pl-6 space-y-6 relative text-sm">
                  <div className="relative">
                     <div className="absolute w-3 h-3 bg-foreground-muted rounded-full -left-[31px] top-1"></div>
                     <div className="text-sm text-foreground-muted font-bold mb-1">12:15 PM</div>
                     <div className="text-foreground-body">Initial Order Created (Burgers, Pizza)</div>
                  </div>
                  <div className="relative">
                     <div className="absolute w-3 h-3 bg-foreground-muted rounded-full -left-[31px] top-1"></div>
                     <div className="text-sm text-foreground-muted font-bold mb-1">12:23 PM</div>
                     <div className="text-foreground-body">Sent to Kitchen (KDS)</div>
                  </div>
                  <div className="relative">
                     <div className="absolute w-4 h-4 bg-accent rounded-full -left-[33px] top-0 shadow-card"></div>
                     <div className="text-sm text-accent-text font-bold mb-1">12:45 PM</div>
                     <div className="font-bold text-foreground">Additional Items Added <span className="font-normal text-foreground-muted block mt-1">(2 Desserts, 1 Coffee)</span></div>
                  </div>
                  <div className="relative">
                     <div className="absolute w-3 h-3 bg-foreground-muted rounded-full -left-[31px] top-1"></div>
                     <div className="text-sm text-foreground-muted font-bold mb-1">12:58 PM</div>
                     <div className="text-foreground-body">Final Bill Requested</div>
                  </div>
               </div>
             </div>
           </Reveal>
        </div>
      </section>

      {/* 11. TABLE → KITCHEN CONNECTION */}
      <section className="section-space section-divider bg-surface-secondary">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Table to Kitchen"
            title="Send Every Table Order to the Kitchen With Context."
            description="The kitchen needs to know not only what to prepare, but exactly which table the order belongs to. The table number stays attached to the order everywhere."
            align="center"
          />

          <Reveal delayMs={100} className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 max-w-4xl mx-auto items-center">
             <div className="bg-surface border border-border p-6 rounded-control text-center flex flex-col justify-center h-40">
                <span className="text-sm text-foreground-muted font-bold tracking-wider mb-2">POS / QR</span>
                <span className="font-bold text-accent-text text-xl border-b border-accent-border/40 pb-2 mb-2">TABLE 12</span>
                <span className="text-sm text-foreground-muted">Order Placed</span>
             </div>

             <div className="flex justify-center sm:hidden"><ArrowRight className="w-5 h-5 text-accent-text rotate-90" /></div>
             <ArrowRight className="w-6 h-6 text-accent-text hidden sm:block mx-auto" />

             <div className="bg-surface border border-border-strong p-6 rounded-control text-center flex flex-col justify-center h-48 shadow-card relative transform scale-105 z-10 ring-1 ring-amber-500/20">
                <span className="absolute top-0 right-4 bg-accent text-foreground px-2 py-1 text-sm font-bold rounded-b">KDS</span>
                <span className="text-sm text-foreground-muted font-bold mb-1 mt-2">ORDER #1048</span>
                <span className="font-bold text-accent-text text-xl border-b border-border-strong pb-3 mb-3">TABLE 12</span>
                <span className="text-sm text-foreground-body text-left px-4">2 × Burgers<br/>1 × Pizza</span>
             </div>

             <div className="flex justify-center sm:hidden"><ArrowRight className="w-5 h-5 text-accent-text rotate-90" /></div>
             <ArrowRight className="w-6 h-6 text-accent-text hidden sm:block mx-auto" />

             <div className="bg-surface border border-border p-6 rounded-control text-center flex flex-col justify-center h-40">
                <span className="text-sm text-foreground-muted font-bold tracking-wider mb-2">SERVER</span>
                <span className="font-bold text-accent-text text-xl border-b border-accent-border/40 pb-2 mb-2">TABLE 12</span>
                <span className="text-sm text-foreground-muted">Serve Order</span>
             </div>
          </Reveal>
        </div>
      </section>

      {/* 25. CORE CAPABILITIES */}
      <section className="section-space">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Everything Your Dine-In Team Needs."
            description="A complete workspace for managing table service smoothly."
            align="center"
          />

          <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
             {[
               { title: "Floor Plan", desc: "Visual restaurant table layout and status." },
               { title: "Table Status", desc: "Track occupied, payment, cleaning and more states." },
               { title: "Waiter Orders", desc: "Create and manage orders directly from POS." },
               { title: "QR Ordering", desc: "Table-specific customer self-ordering via phone." },
               { title: "Open Checks", desc: "Keep orders open throughout the customer's visit." },
               { title: "Additional Orders", desc: "Add items without creating duplicate orders." },
               { title: "KDS Integration", desc: "Send table orders directly to the kitchen." },
               { title: "Reservations", desc: "Connect bookings with table availability mapping." },
               { title: "Split Bills", desc: "Handle multiple guests and split payments." },
               { title: "Table Transfer", desc: "Move active orders between tables easily." },
               { title: "Table Merge", desc: "Combine tables to support larger groups." },
               { title: "Performance", desc: "Track table turnover and waiter efficiency." }
             ].map((cap, i) => (
                <Reveal key={cap.title} delayMs={(i % 4) * 50} className="surface-card p-5 border border-border/50">
                   <h4 className="font-semibold text-foreground mb-2 text-sm">{cap.title}</h4>
                   <p className="text-sm text-foreground-muted leading-relaxed">{cap.desc}</p>
                </Reveal>
             ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA & ECOSYSTEM */}
      <section className="section-space section-divider bg-surface-secondary">
        <div className="content-shell text-center max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Ready to Modernize Dine-In Service?"
            title="Give Your Team a Better Way to Manage Every Table."
            description="Connect your floor plan, tables, waiters, QR ordering, kitchen, billing, and guest experience through one modern dine-in management system."
            align="center"
          />

          <Reveal delayMs={100} className="mt-12 flex flex-col gap-6 items-center">
             <div className="flex gap-4 items-center justify-center text-sm font-bold text-foreground-muted bg-surface p-6 rounded-card border border-border-strong shadow-card w-full max-w-2xl flex-wrap">
                <span className="text-accent-text">TABLE 12</span>
                <ArrowRight className="w-4 h-4 text-foreground-muted" />
                <span>POS / QR</span>
                <ArrowRight className="w-4 h-4 text-foreground-muted" />
                <span>KDS</span>
                <ArrowRight className="w-4 h-4 text-foreground-muted" />
                <span>BILL</span>
                <ArrowRight className="w-4 h-4 text-foreground-muted" />
                <span className="text-success">PAYMENT</span>
             </div>
          </Reveal>

          <Reveal delayMs={200} className="mt-12 flex flex-wrap justify-center items-center gap-4">
             <Link href="/demo" className="button-primary">
                Get Your Free Demo
             </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
