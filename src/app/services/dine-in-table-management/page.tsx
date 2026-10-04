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
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[20%] right-[20%] h-[30%] w-[40%] rounded-full bg-amber-500/10 blur-[100px]" />
          <div className="absolute bottom-[20%] left-[10%] h-[40%] w-[30%] rounded-full bg-amber-400/5 blur-[80px]" />
        </div>

        <div className="content-shell relative z-10 text-center max-w-4xl mx-auto mb-16">
          <Reveal className="flex flex-col items-center">
            <Link href="/services" className="mb-8 inline-flex w-fit items-center text-sm font-medium text-foreground-muted hover:text-foreground transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-amber-500 uppercase">
              Dine-In & Table Management
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4rem] xl:leading-[1.1]">
              Manage Every Table, Order, and Guest From One Place.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground-body">
              A connected dine-in management system for table layouts, table status, waiter orders, open checks, QR self-ordering, kitchen coordination, billing, and guest service.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/demo"
                className="inline-flex h-12 items-center justify-center bg-amber-500 px-6 font-medium text-zinc-950 transition-colors hover:bg-amber-400"
              >
                Get Your Free Demo
              </Link>
              <Link
                href="#dine-in-workflow"
                className="inline-flex h-12 items-center justify-center border border-border px-6 font-medium text-foreground transition-colors hover:bg-surface hover:text-amber-500"
              >
                Explore Table Management
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 pt-6 border-t border-border/50">
              {["Visual Floor Plans", "Table Orders", "QR Self-Ordering", "Open Checks", "Split Bills"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-foreground-muted">
                  <Check className="h-4 w-4 text-amber-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Hero Visual: Floor Plan Dashboard */}
        <div className="content-shell relative z-10">
          <Reveal className="mx-auto mb-8 w-full max-w-5xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl">
              <Image src="/images/modern-restaurant-table-management-dashboard.avif" alt="Restaurant table management platform" fill className="object-cover object-top" priority sizes="(max-width: 1024px) 100vw, 1024px" />
            </div>
          </Reveal>
          <Reveal delayMs={100} className="mx-auto w-full max-w-5xl">
            <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden flex">
               
               {/* Main Floor Plan Area */}
               <div className="flex-1 bg-zinc-950 flex flex-col relative overflow-hidden">
                  <div className="h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-zinc-900/50">
                     <span className="font-bold text-zinc-200">Main Floor</span>
                     <span className="text-sm font-semibold text-zinc-400">7:30 PM</span>
                  </div>
                  
                  {/* Grid overlay for structural feel */}
                  <div className="absolute inset-0 top-14 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

                  <div className="p-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 overflow-y-auto z-10">
                     {[
                        { num: 1, state: 'Free', color: 'bg-zinc-800 text-zinc-400 border-zinc-700' },
                        { num: 2, state: 'Occupied', guest: 3, order: 'PKR 3,450', color: 'bg-amber-500/10 text-amber-500 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.1)]' },
                        { num: 3, state: 'Reserved', time: '8:00 PM', color: 'bg-blue-500/10 text-blue-400 border-blue-500/30' },
                        { num: 4, state: 'Occupied', guest: 4, order: 'PKR 5,100', color: 'bg-amber-500/10 text-amber-500 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.1)]' },
                        { num: 5, state: 'Cleaning', color: 'bg-orange-500/10 text-orange-400 border-orange-500/30' },
                        { num: 6, state: 'Free', color: 'bg-zinc-800 text-zinc-400 border-zinc-700' },
                        { num: 7, state: 'Payment', guest: 2, order: 'PKR 2,200', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
                        { num: 12, state: 'Occupied', guest: 2, order: 'PKR 4,850', color: 'bg-amber-500/10 text-amber-500 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.15)] ring-2 ring-amber-500' }
                     ].map((table) => (
                        <div key={table.num} className={`aspect-square sm:aspect-video rounded-lg border flex flex-col p-3 transition-transform hover:scale-105 cursor-pointer relative ${table.color} ${table.num === 12 ? 'bg-amber-500/20' : ''}`}>
                           <div className="flex justify-between items-start">
                              <span className="font-bold">T{table.num}</span>
                              <span className="text-[10px] uppercase font-bold tracking-wider">{table.state}</span>
                           </div>
                           <div className="mt-auto pt-2 flex justify-between items-end">
                              {table.guest && <div className="text-[10px] flex items-center gap-1">👥 {table.guest}</div>}
                              {table.time && <div className="text-[10px]">{table.time}</div>}
                              {table.order && <div className="text-xs font-bold">{table.order}</div>}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Right Side Panel - Stats */}
               <div className="w-[240px] bg-zinc-900 border-l border-zinc-800 hidden md:flex flex-col">
                  <div className="p-6 border-b border-zinc-800">
                     <h3 className="text-xl font-bold text-zinc-100 mb-1">18 Tables</h3>
                     <p className="text-xs text-zinc-500">Main Floor</p>
                  </div>
                  <div className="p-6 flex-1 space-y-4">
                     <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Occupied</span>
                        <span className="font-bold text-zinc-200">9</span>
                     </div>
                     <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-zinc-500"></span> Available</span>
                        <span className="font-bold text-zinc-200">4</span>
                     </div>
                     <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Reserved</span>
                        <span className="font-bold text-zinc-200">3</span>
                     </div>
                     <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span> Cleaning</span>
                        <span className="font-bold text-zinc-200">2</span>
                     </div>
                  </div>
               </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="section-space section-divider bg-surface-secondary/30" id="dine-in-workflow">
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
             <div className="flex items-center justify-between min-w-[800px] bg-surface border border-border rounded-xl p-6 shadow-sm">
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
                            step.status === 'active' ? 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 
                            step.status === 'cleaning' ? 'bg-orange-500' : 'bg-zinc-600'
                         }`}></div>
                         <div className={`text-[10px] font-bold tracking-wider uppercase ${step.status === 'active' ? 'text-amber-500' : 'text-zinc-500'}`}>{step.label}</div>
                      </div>
                      {index < arr.length - 1 && <div className="w-8 h-px bg-zinc-800 mx-2"></div>}
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
               <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-amber-500 uppercase">Dine-In Gets Complicated</span>
               <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">When Systems Aren't Connected, Service Gets Harder.</h2>
               <p className="text-lg text-foreground-body mb-8">During busy periods, staff manage multiple tables, open orders, new guests, and kitchen requests simultaneously. Without a centralized workflow, it becomes difficult to know what is happening where.</p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                     { title: "Lost Table Context", desc: "Staff need to know which order belongs to which table." },
                     { title: "Open Orders", desc: "Customers often add items throughout their visit." },
                     { title: "Slow Communication", desc: "Changes need to reach the kitchen and service team instantly." },
                     { title: "Payment Delays", desc: "Closing bills gets complicated with multiple guests." }
                  ].map(prob => (
                     <div key={prob.title} className="bg-surface p-4 rounded border border-border">
                        <h4 className="font-semibold text-red-400 mb-1 text-sm">{prob.title}</h4>
                        <p className="text-xs text-foreground-body">{prob.desc}</p>
                     </div>
                  ))}
               </div>
             </Reveal>
             
             <Reveal delayMs={100} className="surface-card p-8 bg-zinc-950/50 flex flex-col justify-center">
                <div className="text-sm font-bold text-zinc-500 mb-4">BEFORE (DISCONNECTED)</div>
                <div className="flex items-center justify-between text-xs font-semibold text-zinc-400 bg-zinc-900 p-4 rounded border border-zinc-800 mb-8 opacity-70">
                   <span>TABLE</span>
                   <ArrowRight className="w-3 h-3 text-zinc-600" />
                   <span>WAITER</span>
                   <ArrowRight className="w-3 h-3 text-zinc-600" />
                   <span>PAPER</span>
                   <ArrowRight className="w-3 h-3 text-zinc-600" />
                   <span>KITCHEN</span>
                   <ArrowRight className="w-3 h-3 text-zinc-600" />
                   <span>PAYMENT</span>
                </div>
                
                <div className="text-sm font-bold text-amber-500 mb-4">AFTER (CONNECTED SYSTEM)</div>
                <div className="bg-zinc-900 border border-amber-500/20 p-6 rounded relative shadow-[0_0_20px_rgba(245,158,11,0.05)]">
                   <div className="flex flex-col gap-4 text-xs font-bold text-zinc-300">
                      <div className="flex items-center gap-4">
                         <div className="w-16 text-right text-zinc-500">START</div>
                         <div className="bg-amber-500/10 text-amber-500 px-4 py-2 rounded border border-amber-500/30 flex-1 text-center">TABLE 12</div>
                      </div>
                      <div className="flex items-center gap-4 pl-16">
                         <ArrowRight className="w-4 h-4 text-zinc-600 rotate-90 mx-auto" />
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="w-16 text-right text-zinc-500">ORDER</div>
                         <div className="flex gap-2 flex-1">
                            <div className="bg-zinc-800 px-3 py-2 rounded border border-zinc-700 flex-1 text-center">POS (Waiter)</div>
                            <div className="text-zinc-600 flex items-center">OR</div>
                            <div className="bg-zinc-800 px-3 py-2 rounded border border-zinc-700 flex-1 text-center">QR (Customer)</div>
                         </div>
                      </div>
                      <div className="flex items-center gap-4 pl-16">
                         <ArrowRight className="w-4 h-4 text-zinc-600 rotate-90 mx-auto" />
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="w-16 text-right text-zinc-500">SYNC</div>
                         <div className="bg-zinc-800 px-4 py-2 rounded border border-zinc-700 flex-1 text-center">CENTRAL ORDER + KDS</div>
                      </div>
                      <div className="flex items-center gap-4 pl-16">
                         <ArrowRight className="w-4 h-4 text-zinc-600 rotate-90 mx-auto" />
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="w-16 text-right text-zinc-500">END</div>
                         <div className="bg-emerald-500/10 text-emerald-500 px-4 py-2 rounded border border-emerald-500/30 flex-1 text-center">BILL & PAYMENT</div>
                      </div>
                   </div>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* 22. DINE-IN + ONLINE ORDERING (QR vs Waiter) */}
      <section className="section-space section-divider bg-surface-secondary/20">
        <div className="content-shell text-center max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="One Restaurant Order System"
            title="Whether Guests Order With a Waiter or Their Phone, Everything Reaches the Same Workflow."
            description="Dine-in ordering can support both staff-assisted service and customer self-ordering via table QR codes. Both methods converge into the exact same kitchen workflow."
            align="center"
          />

          <Reveal delayMs={100} className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
             {/* Method A */}
             <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-xl flex flex-col items-center">
                <div className="text-xs font-bold text-amber-500 tracking-wider mb-8">METHOD A — STAFF</div>
                <div className="flex flex-col items-center gap-4 text-sm font-bold text-zinc-300 w-full">
                   <div className="bg-zinc-900 border border-zinc-700 px-6 py-3 rounded-lg w-full">WAITER</div>
                   <ArrowRight className="w-5 h-5 text-zinc-600 rotate-90" />
                   <div className="bg-amber-500/10 border border-amber-500/30 text-amber-500 px-6 py-3 rounded-lg w-full shadow-[0_0_15px_rgba(245,158,11,0.1)]">POS WORKFLOW</div>
                   <ArrowRight className="w-5 h-5 text-zinc-600 rotate-90" />
                   <div className="bg-zinc-900 border border-zinc-700 px-6 py-3 rounded-lg w-full">KDS (Kitchen)</div>
                   <ArrowRight className="w-5 h-5 text-zinc-600 rotate-90" />
                   <div className="bg-zinc-900 border border-zinc-700 px-6 py-3 rounded-lg w-full">SERVE TABLE</div>
                </div>
             </div>

             {/* Method B */}
             <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-xl flex flex-col items-center">
                <div className="text-xs font-bold text-emerald-500 tracking-wider mb-8">METHOD B — CUSTOMER</div>
                <div className="flex flex-col items-center gap-4 text-sm font-bold text-zinc-300 w-full">
                   <div className="bg-zinc-900 border border-zinc-700 px-6 py-3 rounded-lg w-full">TABLE QR & PHONE</div>
                   <ArrowRight className="w-5 h-5 text-zinc-600 rotate-90" />
                   <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 px-6 py-3 rounded-lg w-full shadow-[0_0_15px_rgba(16,185,129,0.1)]">ONLINE ORDER</div>
                   <ArrowRight className="w-5 h-5 text-zinc-600 rotate-90" />
                   <div className="bg-zinc-900 border border-zinc-700 px-6 py-3 rounded-lg w-full">KDS (Kitchen)</div>
                   <ArrowRight className="w-5 h-5 text-zinc-600 rotate-90" />
                   <div className="bg-zinc-900 border border-zinc-700 px-6 py-3 rounded-lg w-full">SERVE TABLE</div>
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
               <span className="mb-2 inline-block text-xs font-semibold tracking-wider text-amber-500 uppercase">Table Information</span>
               <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">Everything Staff Need to Know About an Active Table.</h3>
               <p className="text-foreground-body text-sm mb-6">Selecting a table opens a clear overview of the current service state, assigned waiter, and current order value.</p>
               
               <div className="bg-zinc-950 border border-zinc-800 rounded-lg shadow-2xl overflow-hidden">
                  <div className="p-4 bg-zinc-900 border-b border-zinc-800 flex justify-between items-center">
                     <span className="font-bold text-zinc-100 text-lg">TABLE 12</span>
                     <span className="text-xs bg-amber-500/20 text-amber-500 px-2 py-1 rounded font-bold">Occupied</span>
                  </div>
                  <div className="p-5">
                     <div className="flex gap-6 text-sm text-zinc-400 mb-6 border-b border-zinc-800 pb-4">
                        <div><span className="block text-[10px] uppercase tracking-wider">Guests</span><span className="font-bold text-zinc-200">4</span></div>
                        <div><span className="block text-[10px] uppercase tracking-wider">Waiter</span><span className="font-bold text-zinc-200">Ahmed</span></div>
                        <div><span className="block text-[10px] uppercase tracking-wider">Time</span><span className="font-bold text-zinc-200">18 min</span></div>
                     </div>
                     <div className="font-bold text-zinc-300 text-sm mb-3">ORDER #1048</div>
                     <div className="space-y-2 text-sm text-zinc-400 mb-6">
                        <div className="flex justify-between"><span>2 × Chicken Burger</span><span>PKR 1,700</span></div>
                        <div className="flex justify-between"><span>1 × Pizza</span><span>PKR 1,250</span></div>
                        <div className="flex justify-between"><span>2 × Fries</span><span>PKR 700</span></div>
                        <div className="flex justify-between"><span>4 × Drinks</span><span>PKR 600</span></div>
                     </div>
                     <div className="flex justify-between font-bold text-lg text-amber-500 border-t border-zinc-800 pt-4">
                        <span>Current Total</span><span>PKR 4,250</span>
                     </div>
                  </div>
               </div>
             </div>
           </Reveal>

           <Reveal delayMs={100} className="space-y-8 flex flex-col justify-center">
             <div>
               <span className="mb-2 inline-block text-xs font-semibold tracking-wider text-amber-500 uppercase">Open Checks & Additions</span>
               <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">Keep the Table's Order Open Throughout the Visit.</h3>
               <p className="text-foreground-body text-sm mb-8">Guests order more than once. Staff can add items to an existing table order without creating unnecessary duplicate transactions.</p>
               
               <div className="border-l-2 border-zinc-800 ml-4 pl-6 space-y-6 relative text-sm">
                  <div className="relative">
                     <div className="absolute w-3 h-3 bg-zinc-600 rounded-full -left-[31px] top-1"></div>
                     <div className="text-xs text-zinc-500 font-bold mb-1">12:15 PM</div>
                     <div className="text-zinc-300">Initial Order Created (Burgers, Pizza)</div>
                  </div>
                  <div className="relative">
                     <div className="absolute w-3 h-3 bg-zinc-600 rounded-full -left-[31px] top-1"></div>
                     <div className="text-xs text-zinc-500 font-bold mb-1">12:23 PM</div>
                     <div className="text-zinc-300">Sent to Kitchen (KDS)</div>
                  </div>
                  <div className="relative">
                     <div className="absolute w-4 h-4 bg-amber-500 rounded-full -left-[33px] top-0 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                     <div className="text-xs text-amber-500 font-bold mb-1">12:45 PM</div>
                     <div className="font-bold text-zinc-200">Additional Items Added <span className="font-normal text-zinc-400 block mt-1">(2 Desserts, 1 Coffee)</span></div>
                  </div>
                  <div className="relative">
                     <div className="absolute w-3 h-3 bg-zinc-600 rounded-full -left-[31px] top-1"></div>
                     <div className="text-xs text-zinc-500 font-bold mb-1">12:58 PM</div>
                     <div className="text-zinc-300">Final Bill Requested</div>
                  </div>
               </div>
             </div>
           </Reveal>
        </div>
      </section>

      {/* 11. TABLE → KITCHEN CONNECTION */}
      <section className="section-space section-divider bg-surface-secondary/30">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Table to Kitchen"
            title="Send Every Table Order to the Kitchen With Context."
            description="The kitchen needs to know not only what to prepare, but exactly which table the order belongs to. The table number stays attached to the order everywhere."
            align="center"
          />

          <Reveal delayMs={100} className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 max-w-4xl mx-auto items-center">
             <div className="bg-surface border border-border p-6 rounded-lg text-center flex flex-col justify-center h-40">
                <span className="text-xs text-foreground-muted font-bold tracking-wider mb-2">POS / QR</span>
                <span className="font-bold text-amber-500 text-xl border-b border-amber-500/20 pb-2 mb-2">TABLE 12</span>
                <span className="text-xs text-foreground-muted">Order Placed</span>
             </div>
             
             <div className="flex justify-center sm:hidden"><ArrowRight className="w-5 h-5 text-amber-500 rotate-90" /></div>
             <ArrowRight className="w-6 h-6 text-amber-500 hidden sm:block mx-auto" />
             
             <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-lg text-center flex flex-col justify-center h-48 shadow-xl relative transform scale-105 z-10 ring-1 ring-amber-500/20">
                <span className="absolute top-0 right-4 bg-amber-500 text-zinc-950 px-2 py-1 text-[10px] font-bold rounded-b">KDS</span>
                <span className="text-xs text-zinc-500 font-bold mb-1 mt-2">ORDER #1048</span>
                <span className="font-bold text-amber-500 text-xl border-b border-zinc-800 pb-3 mb-3">TABLE 12</span>
                <span className="text-xs text-zinc-300 text-left px-4">2 × Burgers<br/>1 × Pizza</span>
             </div>
             
             <div className="flex justify-center sm:hidden"><ArrowRight className="w-5 h-5 text-amber-500 rotate-90" /></div>
             <ArrowRight className="w-6 h-6 text-amber-500 hidden sm:block mx-auto" />
             
             <div className="bg-surface border border-border p-6 rounded-lg text-center flex flex-col justify-center h-40">
                <span className="text-xs text-foreground-muted font-bold tracking-wider mb-2">SERVER</span>
                <span className="font-bold text-amber-500 text-xl border-b border-amber-500/20 pb-2 mb-2">TABLE 12</span>
                <span className="text-xs text-foreground-muted">Serve Order</span>
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
                   <p className="text-xs text-foreground-muted leading-relaxed">{cap.desc}</p>
                </Reveal>
             ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA & ECOSYSTEM */}
      <section className="section-space section-divider bg-surface-secondary/20">
        <div className="content-shell text-center max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Ready to Modernize Dine-In Service?"
            title="Give Your Team a Better Way to Manage Every Table."
            description="Connect your floor plan, tables, waiters, QR ordering, kitchen, billing, and guest experience through one modern dine-in management system."
            align="center"
          />

          <Reveal delayMs={100} className="mt-12 flex flex-col gap-6 items-center">
             <div className="flex gap-4 items-center justify-center text-sm font-bold text-zinc-400 bg-zinc-950 p-6 rounded-xl border border-zinc-800 shadow-xl w-full max-w-2xl flex-wrap">
                <span className="text-amber-500">TABLE 12</span>
                <ArrowRight className="w-4 h-4 text-zinc-600" />
                <span>POS / QR</span>
                <ArrowRight className="w-4 h-4 text-zinc-600" />
                <span>KDS</span>
                <ArrowRight className="w-4 h-4 text-zinc-600" />
                <span>BILL</span>
                <ArrowRight className="w-4 h-4 text-zinc-600" />
                <span className="text-emerald-500">PAYMENT</span>
             </div>
          </Reveal>

          <Reveal delayMs={200} className="mt-12 flex flex-wrap justify-center items-center gap-4">
             <Link href="/demo" className="inline-flex h-12 items-center justify-center bg-amber-500 px-8 font-medium text-zinc-950 transition-colors hover:bg-amber-400 rounded-sm">
                Get Your Free Demo
             </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
