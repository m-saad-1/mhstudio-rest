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
  title: "Kitchen Display Systems (KDS)",
  description: "Keep your kitchen moving with every order in view. A real-time digital workflow for managing restaurant kitchen preparation.",
};

export default function KitchenDisplaySystemsPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[20%] right-[10%] h-[30%] w-[30%] rounded-full bg-amber-500/10 blur-[100px]" />
          <div className="absolute bottom-[10%] left-[10%] h-[40%] w-[40%] rounded-full bg-amber-400/5 blur-[80px]" />
        </div>

        <div className="content-shell relative z-10 text-center max-w-4xl mx-auto mb-16">
          <Reveal className="flex flex-col items-center">
            <Link href="/services" className="mb-8 inline-flex w-fit items-center text-sm font-medium text-foreground-muted hover:text-foreground transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-amber-500 uppercase">
              Kitchen Display Systems
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4rem] xl:leading-[1.1]">
              Keep Your Kitchen Moving With Every Order in View.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground-body">
              A real-time kitchen display system that organizes incoming orders, keeps preparation teams aligned, tracks order progress, and helps your restaurant move from order received to ready without unnecessary delays.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/demo"
                className="inline-flex h-12 items-center justify-center bg-amber-500 px-6 font-medium text-zinc-950 transition-colors hover:bg-amber-400"
              >
                Get Your Free Demo
              </Link>
              <Link
                href="#kds-workflow"
                className="inline-flex h-12 items-center justify-center border border-border px-6 font-medium text-foreground transition-colors hover:bg-surface hover:text-amber-500"
              >
                Explore KDS
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 pt-6 border-t border-border/50">
              {["Real-Time Orders", "Digital Kitchen Tickets", "Preparation Tracking", "Multi-Station Ready", "POS Connected"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-foreground-muted">
                  <Check className="h-4 w-4 text-amber-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Hero KDS Visual */}
        <div className="content-shell relative z-10">
          <Reveal delayMs={100} className="mx-auto w-full max-w-5xl">
            <div className="relative aspect-video w-full rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden flex items-center justify-center">
               <Zoom>
                 <Image src="/images/modern-kitchen-display-system-showcase.avif" alt="Kitchen Display System" fill className="object-cover" />
               </Zoom>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="section-space section-divider bg-surface-secondary/30" id="kds-workflow">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Digital Kitchen Workflow"
            title="From Every Order to Every Plate — One Clear Kitchen Workflow."
            description="Restaurant kitchens move quickly. Orders arrive from dine-in, takeaway, delivery, online ordering, QR menus, and other channels. Kitchen staff need to know what came in, what is being prepared, what needs attention, and what is ready to leave the kitchen."
            align="center"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { title: "See", desc: "Give kitchen staff a clear view of incoming orders." },
              { title: "Prepare", desc: "Move tickets through a structured preparation workflow." },
              { title: "Complete", desc: "Mark orders ready so the next part of the restaurant operation can take over." }
            ].map((feature, i) => (
              <Reveal key={feature.title} delayMs={i * 100} className="surface-card p-6 border-t-2 border-t-amber-500/20">
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground-body text-sm leading-relaxed">{feature.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={200} className="mt-16 w-full max-w-3xl mx-auto overflow-x-auto pb-4">
             <div className="flex items-center justify-between min-w-[600px] bg-surface p-6 rounded border border-border shadow-sm">
                {['ORDER RECEIVED', 'NEW', 'PREPARING', 'READY', 'FULFILLMENT'].map((step, index, arr) => (
                   <div key={step} className="flex flex-col items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
                         index === 2 ? 'bg-amber-500/10 border-amber-500 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]' : 
                         'bg-zinc-900 border-zinc-800 text-zinc-500'
                      }`}>
                         {index + 1}
                      </div>
                      <div className={`text-xs font-bold tracking-wider uppercase ${index === 2 ? 'text-amber-500' : 'text-zinc-500'}`}>{step}</div>
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
               <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-amber-500 uppercase">Traditional Kitchen Communication</span>
               <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">Paper Tickets and Verbal Instructions Get Lost.</h2>
               <p className="text-lg text-foreground-body mb-8">When a restaurant gets busy, kitchen teams may have to manage multiple orders simultaneously while dealing with modifications, special instructions, timing requirements, and different fulfillment types.</p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                     { title: "Lost Tickets", desc: "Paper tickets can be misplaced, damaged, or difficult to prioritize." },
                     { title: "Unclear Priorities", desc: "Staff need to know what requires attention first when many orders arrive." },
                     { title: "Modification Errors", desc: "Special instructions need to be visible to the right kitchen staff." },
                     { title: "Limited Visibility", desc: "Managers need to know how many orders are waiting, preparing, or ready." }
                  ].map(prob => (
                     <div key={prob.title} className="bg-surface p-4 rounded border border-border">
                        <h4 className="font-semibold text-red-400 mb-1">{prob.title}</h4>
                        <p className="text-xs text-foreground-body">{prob.desc}</p>
                     </div>
                  ))}
               </div>
             </Reveal>
             
             <Reveal delayMs={100} className="surface-card p-8 bg-zinc-950/50 text-center">
                <div className="text-sm font-bold text-zinc-500 mb-4">BEFORE</div>
                <div className="flex gap-4 justify-center items-center text-xs text-zinc-400 bg-zinc-900 p-6 rounded border border-zinc-800 mb-8 opacity-70">
                   <div className="flex flex-col gap-2 items-center"><div className="w-10 h-14 bg-zinc-200 text-zinc-900 rounded-sm shadow-md flex justify-center text-[8px] pt-2">Ticket</div>Paper Tickets</div>
                   <span className="text-zinc-600">/</span>
                   <div className="flex flex-col gap-2 items-center"><div className="w-10 h-10 rounded-full border-2 border-zinc-500 flex items-center justify-center">💬</div>Verbal</div>
                   <span className="text-zinc-600">/</span>
                   <div className="flex flex-col gap-2 items-center"><div className="w-12 h-8 bg-zinc-700 rounded-sm"></div>Printer</div>
                </div>
                
                <div className="text-sm font-bold text-amber-500 mb-4">AFTER (DIGITAL WORKFLOW)</div>
                <div className="bg-zinc-900 border border-amber-500/20 p-6 rounded relative shadow-[0_0_20px_rgba(245,158,11,0.05)]">
                   <div className="text-sm text-zinc-200 font-bold mb-4 bg-amber-500/10 border border-amber-500/30 w-fit mx-auto px-6 py-2 rounded">KDS System</div>
                   <div className="flex justify-center gap-6 text-xs font-semibold text-zinc-400">
                      <div className="flex flex-col items-center"><ArrowRight className="w-4 h-4 text-zinc-600 mb-2 rotate-90" />NEW</div>
                      <div className="flex flex-col items-center"><ArrowRight className="w-4 h-4 text-amber-500 mb-2 rotate-90" /><span className="text-amber-500">PREPARING</span></div>
                      <div className="flex flex-col items-center"><ArrowRight className="w-4 h-4 text-emerald-500 mb-2 rotate-90" /><span className="text-emerald-500">READY</span></div>
                   </div>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* 4. ORDERS FROM EVERY CHANNEL */}
      <section className="section-space section-divider bg-surface-secondary/20">
        <div className="content-shell text-center max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Centralized Kitchen Queue"
            title="Every Order Can Arrive in the Same Kitchen Workflow."
            description="The kitchen shouldn't have to care where an order originated. Whether the customer ordered through the website, mobile app, POS, QR menu, or another channel, the kitchen needs one clear preparation queue."
            align="center"
          />

          <Reveal delayMs={100} className="mt-16 w-full overflow-x-auto pb-4">
             <div className="flex flex-col items-center min-w-[600px]">
                <div className="flex justify-center gap-4 flex-wrap mb-8">
                   {['WEBSITE', 'MOBILE APP', 'POS', 'QR MENU', 'WHATSAPP', 'PHONE'].map(source => (
                      <span key={source} className="bg-surface border border-border px-4 py-2 rounded text-xs font-semibold text-foreground-body">{source}</span>
                   ))}
                </div>
                
                <div className="flex flex-col items-center gap-4">
                   <ArrowRight className="w-6 h-6 text-zinc-500 rotate-90" />
                   <div className="bg-zinc-800 text-zinc-200 px-6 py-2 rounded font-bold tracking-widest text-sm">CENTRAL ORDERS</div>
                   <ArrowRight className="w-6 h-6 text-amber-500 rotate-90" />
                   <div className="bg-amber-500/10 border border-amber-500 text-amber-500 px-8 py-3 rounded-lg font-bold tracking-widest shadow-[0_0_20px_rgba(245,158,11,0.15)] text-lg">KITCHEN (KDS)</div>
                </div>
             </div>
          </Reveal>
        </div>
      </section>

      {/* 6 & 8. PRIORITY & TICKET DETAILS */}
      <section className="section-space">
        <div className="content-shell grid gap-12 lg:grid-cols-2">
           {/* Priority */}
           <Reveal className="space-y-8">
             <div>
               <span className="mb-2 inline-block text-xs font-semibold tracking-wider text-amber-500 uppercase">Kitchen Prioritization</span>
               <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">Help Your Team Know What Needs Attention First.</h3>
               <p className="text-foreground-body text-sm mb-6">Kitchen workflows can use order time, order type, scheduled pickup times, or configured priority rules to help staff organize their queue.</p>
               
               <div className="grid gap-3">
                  <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 p-4 rounded text-sm">
                     <span className="font-bold text-zinc-300">#1048</span>
                     <span className="text-zinc-500">Waiting 04:32</span>
                  </div>
                  <div className="flex items-center justify-between bg-amber-500/10 border border-amber-500/50 p-4 rounded text-sm">
                     <span className="font-bold text-amber-500">#1049</span>
                     <span className="text-amber-500 font-bold flex items-center gap-2">Waiting 08:14 ⚠️</span>
                  </div>
                  <div className="flex items-center justify-between bg-red-500/10 border border-red-500/50 p-4 rounded text-sm">
                     <span className="font-bold text-red-400">#1051</span>
                     <span className="text-red-400 font-bold flex items-center gap-2">Waiting 12:21 ❗</span>
                  </div>
                  <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 p-4 rounded text-sm">
                     <span className="font-bold text-blue-400">#1050</span>
                     <span className="text-blue-400">Scheduled 7:45 PM</span>
                  </div>
               </div>
             </div>
           </Reveal>

           {/* Details & Modifiers */}
           <Reveal delayMs={100} className="space-y-8">
             <div>
               <span className="mb-2 inline-block text-xs font-semibold tracking-wider text-amber-500 uppercase">Everything the Kitchen Needs</span>
               <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">No Guesswork. No Missing Instructions.</h3>
               <p className="text-foreground-body text-sm mb-6">Kitchen tickets should contain the information needed to prepare the order correctly without forcing staff to search through another system.</p>
               
               <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-5 shadow-2xl relative">
                  <div className="absolute top-0 right-4 bg-amber-500 text-zinc-950 px-2 py-1 text-[10px] font-bold rounded-b">DINE-IN</div>
                  <div className="text-sm font-bold text-zinc-200 mb-1 border-b border-zinc-800 pb-2">ORDER #1048</div>
                  <div className="text-xs text-zinc-500 mb-4">TABLE 12 • 12:31 PM</div>
                  
                  <div className="space-y-4">
                     <div>
                        <div className="flex gap-2 text-sm text-zinc-300 font-bold"><span className="text-zinc-500">2×</span> Chicken Burger</div>
                        <div className="pl-6 text-xs mt-1 space-y-1">
                           <div className="text-emerald-400">✓ Extra Cheese</div>
                           <div className="text-red-400">✕ Onions</div>
                           <div className="text-red-400">✕ Mayo</div>
                        </div>
                     </div>
                     <div>
                        <div className="flex gap-2 text-sm text-zinc-300 font-bold"><span className="text-zinc-500">1×</span> Fries</div>
                        <div className="pl-6 text-xs mt-1 text-zinc-400">Large</div>
                     </div>
                     <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded mt-4">
                        <div className="text-[10px] font-bold text-amber-500 mb-1 tracking-wider uppercase">Special Instruction</div>
                        <div className="text-xs text-amber-500/90">"Please prepare burgers first."</div>
                     </div>
                  </div>
               </div>
             </div>
           </Reveal>
        </div>
      </section>

      {/* 10 & 11. STATIONS & ROUTING */}
      <section className="section-space section-divider bg-surface-secondary/20">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Kitchen Stations"
            title="Route the Right Work to the Right Team."
            description="Larger restaurants may have multiple preparation areas. A KDS can be structured around kitchen stations so teams see the work relevant to their responsibilities, even if it's from the same order."
            align="center"
          />

          <Reveal delayMs={100} className="mt-16 w-full max-w-4xl mx-auto">
             <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 flex flex-col items-center">
                <div className="bg-zinc-800 text-zinc-200 px-6 py-2 rounded-full font-bold text-sm mb-8 relative z-10">
                   ORDER #1048
                </div>
                
                <div className="flex w-full justify-between relative mt-4">
                   {/* Connecting Lines */}
                   <div className="absolute top-[-40px] left-1/2 w-[60%] -translate-x-1/2 h-[40px] border-t-2 border-l-2 border-r-2 border-zinc-700 rounded-t-lg z-0"></div>
                   <div className="absolute top-[-40px] left-1/2 w-[2px] h-[40px] bg-zinc-700 z-0 -translate-x-1/2"></div>
                   
                   <div className="flex-1 flex flex-col items-center relative z-10">
                      <div className="text-xs font-bold text-amber-500 mb-4 bg-zinc-900 px-4 py-1 rounded border border-amber-500/20">GRILL STATION</div>
                      <div className="bg-zinc-900 p-4 rounded border border-zinc-700 text-sm text-zinc-300 text-center w-3/4">
                         <div className="font-bold mb-1">Burger</div>
                         <div className="text-xs text-zinc-500">#1048</div>
                      </div>
                   </div>
                   
                   <div className="flex-1 flex flex-col items-center relative z-10">
                      <div className="text-xs font-bold text-amber-500 mb-4 bg-zinc-900 px-4 py-1 rounded border border-amber-500/20">FRY STATION</div>
                      <div className="bg-zinc-900 p-4 rounded border border-zinc-700 text-sm text-zinc-300 text-center w-3/4">
                         <div className="font-bold mb-1">Fries</div>
                         <div className="text-xs text-zinc-500">#1048</div>
                      </div>
                   </div>

                   <div className="flex-1 flex flex-col items-center relative z-10">
                      <div className="text-xs font-bold text-amber-500 mb-4 bg-zinc-900 px-4 py-1 rounded border border-amber-500/20">DRINKS STATION</div>
                      <div className="bg-zinc-900 p-4 rounded border border-zinc-700 text-sm text-zinc-300 text-center w-3/4">
                         <div className="font-bold mb-1">Cola</div>
                         <div className="text-xs text-zinc-500">#1048</div>
                      </div>
                   </div>
                </div>

                <div className="w-[60%] h-[40px] border-b-2 border-l-2 border-r-2 border-zinc-700 rounded-b-lg mt-4 relative">
                   <div className="absolute bottom-[-20px] left-1/2 w-[2px] h-[20px] bg-zinc-700 -translate-x-1/2"></div>
                   <div className="absolute bottom-[-20px] left-1/2 w-[2px] h-[60px] bg-zinc-700 -translate-x-1/2 top-[-60px]"></div>
                </div>
                <div className="bg-emerald-500/20 border border-emerald-500/50 text-emerald-500 px-6 py-2 rounded-full font-bold text-sm mt-6 z-10 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                   ORDER READY
                </div>
             </div>
          </Reveal>
        </div>
      </section>

      {/* 23. USE CASES (Workflows) */}
      <section className="section-space">
        <div className="content-shell">
          <SectionHeading
            eyebrow="End-to-End Consistency"
            title="Keep Orders Moving Through Every Handoff."
            description="KDS keeps the connection between the order, the kitchen, and the service team, regardless of how the order is fulfilled."
            align="center"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
             <Reveal className="surface-card p-6 flex flex-col">
               <h4 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-3">Dine-In</h4>
               <div className="flex flex-col gap-3 text-sm text-foreground-body">
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span> POS / QR Menu</div>
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span> KDS Preparing</div>
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Notify Server</div>
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span> Serve to Table</div>
               </div>
             </Reveal>

             <Reveal delayMs={100} className="surface-card p-6 flex flex-col">
               <h4 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-3">Takeaway</h4>
               <div className="flex flex-col gap-3 text-sm text-foreground-body">
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span> Online / POS</div>
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span> KDS Preparing</div>
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Ready for Pickup</div>
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span> Customer Handoff</div>
               </div>
             </Reveal>

             <Reveal delayMs={200} className="surface-card p-6 flex flex-col">
               <h4 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-3">Delivery</h4>
               <div className="flex flex-col gap-3 text-sm text-foreground-body">
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span> App / Website</div>
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span> KDS Preparing</div>
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Ready for Dispatch</div>
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span> Rider Assigned</div>
               </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA & ECOSYSTEM */}
      <section className="section-space section-divider bg-surface-secondary/30">
        <div className="content-shell text-center max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Connected Restaurant Ecosystem"
            title="More Than a Digital Screen."
            description="MhStudio KDS is a real-time digital workflow for organizing and managing restaurant kitchen preparation. It connects seamlessly with your POS and RMS to keep the entire restaurant in sync."
            align="center"
          />

          <Reveal delayMs={100} className="mt-12 flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
             <div className="bg-surface border border-border px-6 py-3 rounded-lg font-semibold text-foreground">POS</div>
             <div className="text-zinc-500">+</div>
             <div className="bg-surface border border-border px-6 py-3 rounded-lg font-semibold text-foreground">RMS</div>
             <div className="text-zinc-500">+</div>
             <div className="bg-amber-500/10 border border-amber-500 px-6 py-3 rounded-lg font-bold text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.15)]">KDS</div>
             <div className="text-zinc-500">+</div>
             <div className="bg-surface border border-border px-6 py-3 rounded-lg font-semibold text-foreground">Delivery</div>
          </Reveal>

          <Reveal delayMs={300} className="mt-16 text-center">
             <Link href="/demo" className="inline-flex h-12 items-center justify-center bg-amber-500 px-8 font-medium text-zinc-950 transition-colors hover:bg-amber-400 rounded-sm">
                Get Your Free Demo
             </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
