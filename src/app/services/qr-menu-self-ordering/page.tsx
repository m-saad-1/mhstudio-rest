import type { Metadata } from "next";
import Link from "next/link";
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";
import Check from "lucide-react/dist/esm/icons/check";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";

export const metadata: Metadata = {
  title: "QR Menu & Self-Ordering System",
  description: "Launch a branded QR menu and self-ordering system. Let guests browse, customize, and order from their tables while connecting orders with POS and KDS.",
};

export default function QRMenuPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[20%] right-[10%] h-[40%] w-[30%] rounded-full bg-amber-500/10 blur-[100px]" />
          <div className="absolute bottom-[20%] left-[20%] h-[30%] w-[40%] rounded-full bg-amber-400/5 blur-[80px]" />
        </div>

        <div className="content-shell relative z-10 text-center max-w-4xl mx-auto mb-16">
          <Reveal className="flex flex-col items-center">
            <Link href="/services" className="mb-8 inline-flex w-fit items-center text-sm font-medium text-foreground-muted hover:text-foreground transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-amber-500 uppercase">
              QR Menu & Self-Ordering
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4rem] xl:leading-[1.1]">
              Let Guests Browse, Order, and Customize From Their Own Phones.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground-body">
              Turn every restaurant table into a self-service ordering point. Guests can scan, browse your menu, customize items, and place orders directly to your restaurant's connected systems.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/demo"
                className="inline-flex h-12 items-center justify-center bg-amber-500 px-6 font-medium text-zinc-950 transition-colors hover:bg-amber-400"
              >
                Get a Free Demo
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex h-12 items-center justify-center border border-border px-6 font-medium text-foreground transition-colors hover:bg-surface hover:text-amber-500"
              >
                See How It Works
              </Link>
            </div>
            
            <div className="mt-8 flex justify-center items-center text-xs font-bold text-zinc-500 gap-2 sm:gap-4 flex-wrap tracking-wider">
               <span>SCAN</span>
               <ArrowRight className="w-3 h-3 text-amber-500" />
               <span>BROWSE</span>
               <ArrowRight className="w-3 h-3 text-amber-500" />
               <span>ORDER</span>
               <ArrowRight className="w-3 h-3 text-amber-500" />
               <span>KITCHEN</span>
               <ArrowRight className="w-3 h-3 text-amber-500" />
               <span>SERVE</span>
            </div>
          </Reveal>
        </div>

        {/* Hero Visual: Table + Phone */}
        <div className="content-shell relative z-10">
          <Reveal delayMs={100} className="mx-auto w-full max-w-4xl flex justify-center">
             <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl">
                <Image src="/images/qr-menu.avif" alt="QR menu and self-ordering system" fill className="object-cover object-top" priority sizes="(max-width: 1024px) 100vw, 1024px" />
             </div>
             <div className="hidden">
             <div className="relative w-full max-w-3xl aspect-[4/3] sm:aspect-video rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden flex items-end justify-center p-8">
                {/* Background representation of a table */}
                <div className="absolute bottom-0 w-full h-[60%] bg-zinc-900 border-t border-zinc-800 rounded-t-[100%] scale-150 transform translate-y-[20%] opacity-50 pointer-events-none"></div>
                
                {/* QR Tent Card */}
                <div className="absolute left-[15%] bottom-[15%] w-24 h-32 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl flex flex-col items-center justify-center transform -rotate-12 z-10">
                   <div className="w-16 h-16 bg-white p-1 rounded-sm flex items-center justify-center">
                      <div className="w-full h-full bg-[repeating-linear-gradient(45deg,#000_0,#000_4px,#fff_4px,#fff_8px)] opacity-50"></div>
                   </div>
                   <div className="mt-2 text-[8px] font-bold text-zinc-300">TABLE 14</div>
                </div>

                {/* Smartphone UI */}
                <div className="relative w-[260px] h-[480px] bg-zinc-950 rounded-[2rem] border-4 border-zinc-800 shadow-2xl z-20 flex flex-col overflow-hidden mb-[-40px]">
                   <div className="absolute top-0 w-full h-6 flex justify-center z-30">
                      <div className="w-24 h-4 bg-zinc-800 rounded-b-xl"></div>
                   </div>
                   <div className="h-48 bg-zinc-900 relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950"></div>
                      <div className="absolute bottom-4 left-4">
                         <div className="text-xl font-bold text-white mb-1">Main Branch</div>
                         <div className="bg-amber-500 text-zinc-950 text-xs font-bold px-2 py-1 rounded w-fit">Table 14</div>
                      </div>
                   </div>
                   <div className="flex-1 bg-zinc-950 p-4 pt-2 overflow-hidden flex flex-col gap-3">
                      <div className="flex gap-2 overflow-hidden pb-1">
                         <span className="bg-amber-500 text-zinc-950 text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap">Popular</span>
                         <span className="bg-zinc-800 text-zinc-300 text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap">Burgers</span>
                         <span className="bg-zinc-800 text-zinc-300 text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap">Drinks</span>
                      </div>
                      
                      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 flex gap-3">
                         <div className="w-16 h-16 bg-zinc-800 rounded border border-zinc-700"></div>
                         <div className="flex-1 flex flex-col justify-between">
                            <div>
                               <div className="text-xs font-bold text-zinc-200">Smoky Beef Burger</div>
                               <div className="text-[10px] text-zinc-500 leading-tight mt-0.5">Double patty, BBQ sauce</div>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                               <div className="text-xs font-bold text-amber-500">PKR 1,250</div>
                               <div className="bg-amber-500/20 text-amber-500 w-5 h-5 rounded flex items-center justify-center text-xs font-bold">+</div>
                            </div>
                         </div>
                      </div>
                      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 flex gap-3">
                         <div className="w-16 h-16 bg-zinc-800 rounded border border-zinc-700"></div>
                         <div className="flex-1 flex flex-col justify-between">
                            <div>
                               <div className="text-xs font-bold text-zinc-200">Loaded Fries</div>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                               <div className="text-xs font-bold text-amber-500">PKR 550</div>
                               <div className="bg-amber-500/20 text-amber-500 w-5 h-5 rounded flex items-center justify-center text-xs font-bold">+</div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Dashboard snippet (Right side) */}
                <div className="absolute right-8 top-24 w-64 bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl p-4 hidden sm:block z-10 transform translate-x-10 translate-y-10 opacity-90">
                   <div className="text-[10px] text-amber-500 font-bold mb-2 uppercase tracking-wider">New Order Received</div>
                   <div className="font-bold text-zinc-100 text-sm mb-1">TABLE 14</div>
                   <div className="text-xs text-zinc-400 border-b border-zinc-800 pb-2 mb-2">Source: QR Menu</div>
                   <div className="space-y-1">
                      <div className="flex justify-between text-xs text-zinc-300"><span>1× Smoky Beef</span><span>PKR 1,250</span></div>
                      <div className="flex justify-between text-xs text-zinc-300"><span>1× Loaded Fries</span><span>PKR 550</span></div>
                   </div>
                </div>
             </div>
             </div>
          </Reveal>
        </div>
      </section>

      {/* 2 & 3. INTRODUCTION & THE PROBLEM */}
      <section className="section-space section-divider bg-surface-secondary/30" id="how-it-works">
        <div className="content-shell">
          <SectionHeading
            eyebrow="A Better Ordering Experience"
            title="When Ordering Depends Entirely on Staff, Every Table Can Become a Bottleneck."
            description="Traditional dine-in ordering creates waiting, repeated communication, and pressure on service staff. With QR self-ordering, customers access your digital menu instantly and place orders directly from their table."
            align="center"
          />

          <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
             <Reveal className="surface-card p-8 bg-zinc-950/50 flex flex-col justify-center h-full">
                <div className="text-sm font-bold text-red-400 mb-4 tracking-wider">TRADITIONAL WORKFLOW</div>
                <div className="flex flex-col gap-2 text-xs font-semibold text-zinc-400 bg-zinc-900 p-4 rounded border border-zinc-800 mb-8 opacity-70">
                   <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-zinc-600"></div> Guest waits</div>
                   <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-zinc-600"></div> Waiter arrives</div>
                   <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-zinc-600"></div> Order taken & repeated</div>
                   <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-zinc-600"></div> Manual KOT created</div>
                   <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-zinc-600"></div> Kitchen receives</div>
                </div>
                
                <div className="text-sm font-bold text-amber-500 mb-4 tracking-wider">QR MENU WORKFLOW</div>
                <div className="flex items-center justify-between text-[10px] sm:text-xs font-bold text-zinc-300 bg-zinc-900 p-6 rounded border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.05)]">
                   <div className="flex flex-col items-center gap-2 text-amber-500">SCAN</div>
                   <ArrowRight className="w-3 h-3 text-zinc-600" />
                   <div className="flex flex-col items-center gap-2">BROWSE</div>
                   <ArrowRight className="w-3 h-3 text-zinc-600" />
                   <div className="flex flex-col items-center gap-2">CUSTOMIZE</div>
                   <ArrowRight className="w-3 h-3 text-zinc-600" />
                   <div className="flex flex-col items-center gap-2 text-emerald-500">ORDER</div>
                </div>
             </Reveal>

             <Reveal delayMs={100} className="space-y-6">
               <h3 className="text-2xl font-bold tracking-tight text-foreground">Remove Unnecessary Friction.</h3>
               <p className="text-foreground-body text-sm leading-relaxed">QR self-ordering does not replace your staff. It removes the friction from the ordering process, allowing your team to focus on hospitality and service rather than writing down orders.</p>
               
               <div className="grid gap-4 mt-6">
                  {[
                     { title: "Scan", desc: "Guests scan the unique QR code at their table." },
                     { title: "Browse", desc: "They explore your menu, images, descriptions, and prices." },
                     { title: "Order", desc: "They customize their food and submit the order directly." }
                  ].map((step, i) => (
                     <div key={step.title} className="flex gap-4 items-start bg-surface p-4 rounded border border-border">
                        <div className="w-8 h-8 rounded bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-sm border border-amber-500/30 shrink-0">{i+1}</div>
                        <div>
                           <h4 className="font-bold text-foreground text-sm">{step.title}</h4>
                           <p className="text-xs text-foreground-body mt-1">{step.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* 4, 5, 6, 7. MENU EXPERIENCE & TABLE-SPECIFIC QR & CUSTOMIZATION */}
      <section className="section-space">
        <div className="content-shell grid gap-12 lg:grid-cols-2">
           {/* Visual Showcase */}
           <Reveal className="space-y-8 flex flex-col justify-center items-center">
             <div className="relative w-[300px] bg-zinc-950 rounded-3xl border-4 border-zinc-800 shadow-2xl overflow-hidden p-5 flex flex-col">
                {/* Customization Modal UI */}
                <div className="w-full h-40 bg-zinc-900 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
                   <div className="w-24 h-24 rounded-full bg-zinc-800"></div>
                </div>
                <div className="font-bold text-zinc-100 text-xl mb-2">Smoky Beef Burger</div>
                <div className="text-xs text-zinc-500 mb-6">Double beef patty with smoky BBQ sauce, cheese, and lettuce.</div>
                
                <div className="flex-1 overflow-y-auto space-y-5 pr-2">
                   <div>
                      <div className="flex justify-between items-center mb-3">
                         <span className="text-xs font-bold text-zinc-400">SIZE</span>
                         <span className="bg-zinc-800 px-2 py-0.5 rounded text-[10px] text-zinc-300">Required</span>
                      </div>
                      <div className="space-y-2">
                         <label className="flex items-center justify-between p-3 border border-amber-500/50 bg-amber-500/5 rounded-lg cursor-pointer">
                            <div className="flex items-center gap-3">
                               <div className="w-4 h-4 rounded-full border-[4px] border-amber-500 bg-zinc-950"></div>
                               <span className="text-sm font-bold text-zinc-200">Regular</span>
                            </div>
                         </label>
                         <label className="flex items-center justify-between p-3 border border-zinc-800 bg-zinc-900 rounded-lg cursor-pointer">
                            <div className="flex items-center gap-3">
                               <div className="w-4 h-4 rounded-full border-2 border-zinc-600"></div>
                               <span className="text-sm text-zinc-300">Double</span>
                            </div>
                            <span className="text-xs text-zinc-500">+PKR 350</span>
                         </label>
                      </div>
                   </div>
                   
                   <div>
                      <div className="flex justify-between items-center mb-3">
                         <span className="text-xs font-bold text-zinc-400">ADD-ONS</span>
                         <span className="bg-zinc-800 px-2 py-0.5 rounded text-[10px] text-zinc-300">Optional</span>
                      </div>
                      <div className="space-y-2">
                         <label className="flex items-center justify-between p-3 border border-amber-500/50 bg-amber-500/5 rounded-lg cursor-pointer">
                            <div className="flex items-center gap-3">
                               <div className="w-4 h-4 rounded bg-amber-500 flex items-center justify-center"><Check className="w-3 h-3 text-zinc-950 stroke-[3]" /></div>
                               <span className="text-sm font-bold text-zinc-200">Extra Cheese</span>
                            </div>
                            <span className="text-xs font-bold text-amber-500">+PKR 150</span>
                         </label>
                         <label className="flex items-center justify-between p-3 border border-zinc-800 bg-zinc-900 rounded-lg cursor-pointer">
                            <div className="flex items-center gap-3">
                               <div className="w-4 h-4 rounded border-2 border-zinc-600"></div>
                               <span className="text-sm text-zinc-300">Jalapeños</span>
                            </div>
                            <span className="text-xs text-zinc-500">+PKR 100</span>
                         </label>
                      </div>
                   </div>
                </div>
                
                <div className="pt-4 border-t border-zinc-800 mt-4">
                   <button className="w-full bg-amber-500 text-zinc-950 font-bold py-3.5 rounded-lg text-sm shadow-[0_0_15px_rgba(245,158,11,0.2)]">Add to Order — PKR 1,400</button>
                </div>
             </div>
           </Reveal>

           <Reveal delayMs={100} className="space-y-12 flex flex-col justify-center">
             <div>
               <span className="mb-2 inline-block text-xs font-semibold tracking-wider text-amber-500 uppercase">Table-Specific Identity</span>
               <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">Every Table Has Its Own QR Code.</h3>
               <p className="text-foreground-body text-sm mb-4">When a guest scans, the system automatically identifies the branch and table. <strong className="text-amber-500 font-semibold">Customers never need to manually enter their table number.</strong></p>
               <div className="bg-surface border border-border px-4 py-3 rounded flex items-center gap-3 w-fit">
                  <span className="bg-zinc-800 text-zinc-300 text-xs px-2 py-1 rounded">Branch: Main</span>
                  <span className="bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs px-2 py-1 rounded font-bold">Table: 14</span>
               </div>
             </div>

             <div>
               <span className="mb-2 inline-block text-xs font-semibold tracking-wider text-amber-500 uppercase">Product Customization</span>
               <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">Give Guests Control Over Their Order.</h3>
               <p className="text-foreground-body text-sm">Restaurants have products that require customization. Support sizes, variants, add-ons, modifiers, and special instructions directly on the customer's phone.</p>
             </div>
             
             <div>
               <span className="mb-2 inline-block text-xs font-semibold tracking-wider text-amber-500 uppercase">Menu Availability</span>
               <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">Only Show What They Can Actually Order.</h3>
               <p className="text-foreground-body text-sm">Control product availability instantly. Mark items as "Sold Out" or configure time-based availability (e.g., breakfast menu) to prevent ordering unavailable items.</p>
             </div>
           </Reveal>
        </div>
      </section>

      {/* 9, 10, 11, 12, 13. CONNECTED WORKFLOW (KDS & POS) */}
      <section className="section-space section-divider bg-surface-secondary/20">
        <div className="content-shell">
          <SectionHeading
            eyebrow="One Connected Workflow"
            title="From the Guest's Phone Straight to the Kitchen and POS."
            description="QR orders do not live in a separate system. They enter the exact same operational flow as orders created by a waiter."
            align="center"
          />

          <Reveal delayMs={100} className="mt-16 max-w-5xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                {/* Flow Step 1 */}
                <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl flex flex-col items-center text-center relative z-10">
                   <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-4 border border-amber-500/30">📱</div>
                   <div className="text-xs font-bold text-amber-500 mb-1">CUSTOMER</div>
                   <div className="text-sm font-bold text-zinc-200">Table QR Order</div>
                </div>
                
                <div className="flex justify-center md:-mx-4 z-0"><ArrowRight className="w-5 h-5 text-zinc-600 rotate-90 md:rotate-0" /></div>
                
                {/* Flow Step 2 */}
                <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl flex flex-col items-center text-center relative z-10 shadow-xl ring-1 ring-amber-500/20">
                   <div className="absolute top-0 right-4 bg-amber-500 text-zinc-950 px-2 py-1 text-[10px] font-bold rounded-b">CENTRAL</div>
                   <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-4 border border-zinc-700">💻</div>
                   <div className="text-xs font-bold text-zinc-500 mb-1">POS & RMS</div>
                   <div className="text-sm font-bold text-zinc-200">Order Managed</div>
                </div>

                <div className="flex justify-center md:-mx-4 z-0"><ArrowRight className="w-5 h-5 text-zinc-600 rotate-90 md:rotate-0" /></div>

                {/* Flow Step 3 */}
                <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl flex flex-col items-center text-center relative z-10">
                   <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-4 border border-zinc-700">🔥</div>
                   <div className="text-xs font-bold text-zinc-500 mb-1">KITCHEN</div>
                   <div className="text-sm font-bold text-zinc-200">KDS Ticket</div>
                </div>
             </div>
             
             <div className="mt-12 bg-surface border border-border rounded-lg p-6 max-w-2xl mx-auto flex gap-6 items-center">
                <div className="bg-amber-500/10 text-amber-500 p-3 rounded-lg border border-amber-500/30 shrink-0">
                   <Check className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="font-bold text-foreground text-sm mb-1">Multiple Orders Supported</h4>
                   <p className="text-xs text-foreground-body">Customers can place additional orders from the same table. The system associates subsequent orders with the active dining session without creating duplicate checks.</p>
                </div>
             </div>
          </Reveal>
        </div>
      </section>

      {/* 25. CORE CAPABILITIES */}
      <section className="section-space">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Everything You Need"
            title="What the Restaurant Gets."
            description="A unified QR ordering system covering customer experience, operations, sales, and management."
            align="center"
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
             {/* Col 1 */}
             <Reveal className="space-y-4">
                <h4 className="font-bold text-amber-500 text-sm border-b border-border pb-2">Customer Experience</h4>
                <ul className="space-y-2 text-sm text-foreground-body">
                   <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-zinc-600 shrink-0" /> Branded QR menu</li>
                   <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-zinc-600 shrink-0" /> Mobile-first interface</li>
                   <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-zinc-600 shrink-0" /> Product customization</li>
                   <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-zinc-600 shrink-0" /> Cart & order review</li>
                </ul>
             </Reveal>

             {/* Col 2 */}
             <Reveal delayMs={50} className="space-y-4">
                <h4 className="font-bold text-amber-500 text-sm border-b border-border pb-2">Table Ordering</h4>
                <ul className="space-y-2 text-sm text-foreground-body">
                   <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-zinc-600 shrink-0" /> Table-specific QR codes</li>
                   <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-amber-500 shrink-0" /> Auto-table identification</li>
                   <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-zinc-600 shrink-0" /> Additional orders supported</li>
                   <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-zinc-600 shrink-0" /> Active table sessions</li>
                </ul>
             </Reveal>

             {/* Col 3 */}
             <Reveal delayMs={100} className="space-y-4">
                <h4 className="font-bold text-amber-500 text-sm border-b border-border pb-2">Restaurant Operations</h4>
                <ul className="space-y-2 text-sm text-foreground-body">
                   <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-amber-500 shrink-0" /> POS connection</li>
                   <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-amber-500 shrink-0" /> KDS connection</li>
                   <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-zinc-600 shrink-0" /> Table management sync</li>
                   <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-zinc-600 shrink-0" /> Central order tracking</li>
                </ul>
             </Reveal>

             {/* Col 4 */}
             <Reveal delayMs={150} className="space-y-4">
                <h4 className="font-bold text-amber-500 text-sm border-b border-border pb-2">Sales & Management</h4>
                <ul className="space-y-2 text-sm text-foreground-body">
                   <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-zinc-600 shrink-0" /> Upselling & recommendations</li>
                   <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-zinc-600 shrink-0" /> Product availability control</li>
                   <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-zinc-600 shrink-0" /> Multi-branch support</li>
                   <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-zinc-600 shrink-0" /> Order analytics</li>
                </ul>
             </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA & WHY MHSTUDIO */}
      <section className="section-space section-divider bg-surface-secondary/30">
        <div className="content-shell text-center max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Why MhStudio"
            title="We Don't Just Build a QR Menu. We Build the System Behind It."
            description="A QR menu by itself is only a digital menu. MhStudio connects the experience to the restaurant's broader digital operation—POS, KDS, Orders, and Table Management—creating a unified ecosystem instead of another isolated tool."
            align="center"
          />

          <Reveal delayMs={200} className="mt-16 flex flex-wrap justify-center items-center gap-4">
             <Link href="/demo" className="inline-flex h-12 items-center justify-center bg-amber-500 px-8 font-medium text-zinc-950 transition-colors hover:bg-amber-400 rounded-sm">
                Get a Free Demo
             </Link>
             <Link href="/contact" className="inline-flex h-12 items-center justify-center border border-border px-8 font-medium text-foreground transition-colors hover:bg-surface hover:text-amber-500 rounded-sm">
                Talk to MhStudio
             </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
