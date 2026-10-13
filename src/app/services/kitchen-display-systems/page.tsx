import { getZoomImage } from "@/lib/zoom-image";
import { ResponsiveImage, SERVICE_IMAGE_SIZES } from "@/components/ui/responsive-image";
import type { Metadata } from "next";
import { IntentLink as Link } from "@/components/ui/intent-link";
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";
import Check from "lucide-react/dist/esm/icons/check";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
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
              Kitchen Display Systems
            </span>
            <h1 className="type-display text-foreground">
              Keep Your Kitchen Moving With Every Order in View.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground-body">
              A real-time kitchen display system that organizes incoming orders, keeps preparation teams aligned, tracks order progress, and helps your restaurant move from order received to ready without unnecessary delays.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/demo"
                className="button-primary"
              >
                Get Your Free Demo
              </Link>
              <Link
                href="#kds-workflow"
                className="button-secondary"
              >
                Explore KDS
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 pt-6 border-t border-border/50">
              {["Real-Time Orders", "Digital Kitchen Tickets", "Preparation Tracking", "Multi-Station Ready", "POS Connected"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-foreground-muted">
                  <Check className="h-4 w-4 text-accent-text" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Hero KDS Visual */}
        <div className="content-shell relative z-10">
          <Reveal delayMs={100} className="mx-auto w-full max-w-5xl">
            <div className="relative aspect-video w-full rounded-card border border-border-strong bg-surface shadow-card overflow-hidden flex items-center justify-center">
               <Zoom zoomImg={getZoomImage("/images/modern-kitchen-display-system-showcase.avif")}>
                 <ResponsiveImage name="kds" alt="Kitchen Display System" fill className="object-cover"  priority sizes={SERVICE_IMAGE_SIZES} />
               </Zoom>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="section-space section-divider bg-surface-secondary" id="kds-workflow">
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
             <div className="workflow-steps">
                {['ORDER RECEIVED', 'NEW', 'PREPARING', 'READY', 'FULFILLMENT'].map((step, index) => (
                   <div key={step} className="flex flex-col items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
                         index === 2 ? 'bg-accent-soft border-accent-border/40 text-accent-text shadow-card' :
                         'bg-surface border-border-strong text-foreground-muted'
                      }`}>
                         {index + 1}
                      </div>
                      <div className={`text-xs font-bold tracking-wider uppercase ${index === 2 ? 'text-accent-text' : 'text-foreground-muted'}`}>{step}</div>
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
               <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Traditional Kitchen Communication</span>
               <h2 className="type-section text-foreground mb-6">Paper Tickets and Verbal Instructions Get Lost.</h2>
               <p className="text-lg text-foreground-body mb-8">When a restaurant gets busy, kitchen teams may have to manage multiple orders simultaneously while dealing with modifications, special instructions, timing requirements, and different fulfillment types.</p>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                     { title: "Lost Tickets", desc: "Paper tickets can be misplaced, damaged, or difficult to prioritize." },
                     { title: "Unclear Priorities", desc: "Staff need to know what requires attention first when many orders arrive." },
                     { title: "Modification Errors", desc: "Special instructions need to be visible to the right kitchen staff." },
                     { title: "Limited Visibility", desc: "Managers need to know how many orders are waiting, preparing, or ready." }
                  ].map(prob => (
                     <div key={prob.title} className="bg-surface p-4 rounded-tag border border-border">
                        <h4 className="font-semibold text-error mb-1">{prob.title}</h4>
                        <p className="text-sm text-foreground-body">{prob.desc}</p>
                     </div>
                  ))}
               </div>
             </Reveal>

             <Reveal delayMs={100} className="surface-card p-8 bg-surface text-center">
                <div className="text-sm font-bold text-foreground-muted mb-4">BEFORE</div>
                <div className="flex gap-4 justify-center items-center text-sm text-foreground-muted bg-surface p-6 rounded-tag border border-border-strong mb-8 ">
                   <div className="flex flex-col gap-2 items-center"><div className="w-10 h-14 bg-surface-secondary text-foreground rounded-tag shadow-card flex justify-center text-sm pt-2">Ticket</div>Paper Tickets</div>
                   <span className="text-foreground-muted">/</span>
                   <div className="flex flex-col gap-2 items-center"><div className="w-10 h-10 rounded-full border-2 border-border-strong flex items-center justify-center">💬</div>Verbal</div>
                   <span className="text-foreground-muted">/</span>
                   <div className="flex flex-col gap-2 items-center"><div className="w-12 h-8 bg-surface-secondary rounded-tag"></div>Printer</div>
                </div>

                <div className="text-sm font-bold text-accent-text mb-4">AFTER (DIGITAL WORKFLOW)</div>
                <div className="bg-surface border border-accent-border/40 p-6 rounded-tag relative shadow-card">
                   <div className="text-sm text-foreground font-bold mb-4 bg-accent-soft border border-accent-border/40 w-fit mx-auto px-6 py-2 rounded-tag">KDS System</div>
                   <div className="flex justify-center gap-6 text-sm font-semibold text-foreground-muted">
                      <div className="flex flex-col items-center"><ArrowRight className="w-4 h-4 text-foreground-muted mb-2 rotate-90" />NEW</div>
                      <div className="flex flex-col items-center"><ArrowRight className="w-4 h-4 text-accent-text mb-2 rotate-90" /><span className="text-accent-text">PREPARING</span></div>
                      <div className="flex flex-col items-center"><ArrowRight className="w-4 h-4 text-success mb-2 rotate-90" /><span className="text-success">READY</span></div>
                   </div>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* 4. ORDERS FROM EVERY CHANNEL */}
      <section className="section-space section-divider bg-surface-secondary">
        <div className="content-shell text-center max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Centralized Kitchen Queue"
            title="Every Order Can Arrive in the Same Kitchen Workflow."
            description="The kitchen shouldn't have to care where an order originated. Whether the customer ordered through the website, mobile app, POS, QR menu, or another channel, the kitchen needs one clear preparation queue."
            align="center"
          />

          <Reveal delayMs={100} className="mt-16 w-full overflow-x-auto pb-4">
             <div className="flex min-w-0 flex-col items-center">
                <div className="flex justify-center gap-4 flex-wrap mb-8">
                   {['WEBSITE', 'MOBILE APP', 'POS', 'QR MENU', 'WHATSAPP', 'PHONE'].map(source => (
                      <span key={source} className="bg-surface border border-border px-4 py-2 rounded-tag text-sm font-semibold text-foreground-body">{source}</span>
                   ))}
                </div>

                <div className="flex flex-col items-center gap-4">
                   <ArrowRight className="w-6 h-6 text-foreground-muted rotate-90" />
                   <div className="bg-surface-secondary text-foreground px-6 py-2 rounded-tag font-bold tracking-widest text-sm">CENTRAL ORDERS</div>
                   <ArrowRight className="w-6 h-6 text-accent-text rotate-90" />
                   <div className="bg-accent-soft border border-accent-border/40 text-accent-text px-8 py-3 rounded-control font-bold tracking-widest shadow-card text-lg">KITCHEN (KDS)</div>
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
               <span className="mb-2 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Kitchen Prioritization</span>
               <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">Help Your Team Know What Needs Attention First.</h3>
               <p className="text-foreground-body text-sm mb-6">Kitchen workflows can use order time, order type, scheduled pickup times, or configured priority rules to help staff organize their queue.</p>

               <div className="grid gap-3">
                  <div className="flex items-center justify-between bg-surface border border-border-strong p-4 rounded-tag text-sm">
                     <span className="font-bold text-foreground-body">#1048</span>
                     <span className="text-foreground-muted">Waiting 04:32</span>
                  </div>
                  <div className="flex items-center justify-between bg-accent-soft border border-accent-border/40 p-4 rounded-tag text-sm">
                     <span className="font-bold text-accent-text">#1049</span>
                     <span className="text-accent-text font-bold flex items-center gap-2">Waiting 08:14 ⚠️</span>
                  </div>
                  <div className="flex items-center justify-between bg-error-soft border border-error/40 p-4 rounded-tag text-sm">
                     <span className="font-bold text-error">#1051</span>
                     <span className="text-error font-bold flex items-center gap-2">Waiting 12:21 ❗</span>
                  </div>
                  <div className="flex items-center justify-between bg-surface border border-border-strong p-4 rounded-tag text-sm">
                     <span className="font-bold text-info">#1050</span>
                     <span className="text-info">Scheduled 7:45 PM</span>
                  </div>
               </div>
             </div>
           </Reveal>

           {/* Details & Modifiers */}
           <Reveal delayMs={100} className="space-y-8">
             <div>
               <span className="mb-2 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Everything the Kitchen Needs</span>
               <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">No Guesswork. No Missing Instructions.</h3>
               <p className="text-foreground-body text-sm mb-6">Kitchen tickets should contain the information needed to prepare the order correctly without forcing staff to search through another system.</p>

               <div className="bg-surface border border-border-strong rounded-control p-5 shadow-card relative">
                  <div className="absolute top-0 right-4 bg-accent text-foreground px-2 py-1 text-sm font-bold rounded-b">DINE-IN</div>
                  <div className="text-sm font-bold text-foreground mb-1 border-b border-border-strong pb-2">ORDER #1048</div>
                  <div className="text-sm text-foreground-muted mb-4">TABLE 12 • 12:31 PM</div>

                  <div className="space-y-4">
                     <div>
                        <div className="flex gap-2 text-sm text-foreground-body font-bold"><span className="text-foreground-muted">2×</span> Chicken Burger</div>
                        <div className="pl-6 text-sm mt-1 space-y-1">
                           <div className="text-success">✓ Extra Cheese</div>
                           <div className="text-error">✕ Onions</div>
                           <div className="text-error">✕ Mayo</div>
                        </div>
                     </div>
                     <div>
                        <div className="flex gap-2 text-sm text-foreground-body font-bold"><span className="text-foreground-muted">1×</span> Fries</div>
                        <div className="pl-6 text-sm mt-1 text-foreground-muted">Large</div>
                     </div>
                     <div className="bg-accent-soft border border-accent-border/40 p-3 rounded-tag mt-4">
                        <div className="text-sm font-bold text-accent-text mb-1 tracking-wider uppercase">Special Instruction</div>
                        <div className="text-sm text-accent-text">&quot;Please prepare burgers first.&quot;</div>
                     </div>
                  </div>
               </div>
             </div>
           </Reveal>
        </div>
      </section>

      {/* 10 & 11. STATIONS & ROUTING */}
      <section className="section-space section-divider bg-surface-secondary">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Kitchen Stations"
            title="Route the Right Work to the Right Team."
            description="Larger restaurants may have multiple preparation areas. A KDS can be structured around kitchen stations so teams see the work relevant to their responsibilities, even if it's from the same order."
            align="center"
          />

          <Reveal delayMs={100} className="mt-16 w-full max-w-4xl mx-auto">
             <div className="bg-surface border border-border-strong rounded-card p-8 flex flex-col items-center">
                <div className="bg-surface-secondary text-foreground px-6 py-2 rounded-tag font-bold text-sm mb-8 relative z-10">
                   ORDER #1048
                </div>

                <div className="flex w-full justify-between relative mt-4">
                   {/* Connecting Lines */}
                   <div className="absolute top-[-40px] left-1/2 w-[60%] -translate-x-1/2 h-[40px] border-t-2 border-l-2 border-r-2 border-border-strong rounded-t-lg z-0"></div>
                   <div className="absolute top-[-40px] left-1/2 w-[2px] h-[40px] bg-surface-secondary z-0 -translate-x-1/2"></div>

                   <div className="flex-1 flex flex-col items-center relative z-10">
                      <div className="text-sm font-bold text-accent-text mb-4 bg-surface px-4 py-1 rounded-tag border border-accent-border/40">GRILL STATION</div>
                      <div className="bg-surface p-4 rounded-tag border border-border-strong text-sm text-foreground-body text-center w-3/4">
                         <div className="font-bold mb-1">Burger</div>
                         <div className="text-sm text-foreground-muted">#1048</div>
                      </div>
                   </div>

                   <div className="flex-1 flex flex-col items-center relative z-10">
                      <div className="text-sm font-bold text-accent-text mb-4 bg-surface px-4 py-1 rounded-tag border border-accent-border/40">FRY STATION</div>
                      <div className="bg-surface p-4 rounded-tag border border-border-strong text-sm text-foreground-body text-center w-3/4">
                         <div className="font-bold mb-1">Fries</div>
                         <div className="text-sm text-foreground-muted">#1048</div>
                      </div>
                   </div>

                   <div className="flex-1 flex flex-col items-center relative z-10">
                      <div className="text-sm font-bold text-accent-text mb-4 bg-surface px-4 py-1 rounded-tag border border-accent-border/40">DRINKS STATION</div>
                      <div className="bg-surface p-4 rounded-tag border border-border-strong text-sm text-foreground-body text-center w-3/4">
                         <div className="font-bold mb-1">Cola</div>
                         <div className="text-sm text-foreground-muted">#1048</div>
                      </div>
                   </div>
                </div>

                <div className="w-[60%] h-[40px] border-b-2 border-l-2 border-r-2 border-border-strong rounded-b-lg mt-4 relative">
                   <div className="absolute bottom-[-20px] left-1/2 w-[2px] h-[20px] bg-surface-secondary -translate-x-1/2"></div>
                   <div className="absolute bottom-[-20px] left-1/2 w-[2px] h-[60px] bg-surface-secondary -translate-x-1/2 top-[-60px]"></div>
                </div>
                <div className="bg-success-soft border border-success/40 text-success px-6 py-2 rounded-tag font-bold text-sm mt-6 z-10 shadow-card">
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
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-foreground-muted"></span> POS / QR Menu</div>
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent shadow-card"></span> KDS Preparing</div>
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-success"></span> Notify Server</div>
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-foreground-muted"></span> Serve to Table</div>
               </div>
             </Reveal>

             <Reveal delayMs={100} className="surface-card p-6 flex flex-col">
               <h4 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-3">Takeaway</h4>
               <div className="flex flex-col gap-3 text-sm text-foreground-body">
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-foreground-muted"></span> Online / POS</div>
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent shadow-card"></span> KDS Preparing</div>
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-success"></span> Ready for Pickup</div>
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-foreground-muted"></span> Customer Handoff</div>
               </div>
             </Reveal>

             <Reveal delayMs={200} className="surface-card p-6 flex flex-col">
               <h4 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-3">Delivery</h4>
               <div className="flex flex-col gap-3 text-sm text-foreground-body">
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-foreground-muted"></span> App / Website</div>
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent shadow-card"></span> KDS Preparing</div>
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-success"></span> Ready for Dispatch</div>
                  <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-foreground-muted"></span> Rider Assigned</div>
               </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA & ECOSYSTEM */}
      <section className="section-space section-divider bg-surface-secondary">
        <div className="content-shell text-center max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Connected Restaurant Ecosystem"
            title="More Than a Digital Screen."
            description="MhStudio KDS is a real-time digital workflow for organizing and managing restaurant kitchen preparation. It connects seamlessly with your POS and RMS to keep the entire restaurant in sync."
            align="center"
          />

          <Reveal delayMs={100} className="mt-12 flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
             <div className="bg-surface border border-border px-6 py-3 rounded-control font-semibold text-foreground">POS</div>
             <div className="text-foreground-muted">+</div>
             <div className="bg-surface border border-border px-6 py-3 rounded-control font-semibold text-foreground">RMS</div>
             <div className="text-foreground-muted">+</div>
             <div className="bg-accent-soft border border-accent-border/40 px-6 py-3 rounded-control font-bold text-accent-text shadow-card">KDS</div>
             <div className="text-foreground-muted">+</div>
             <div className="bg-surface border border-border px-6 py-3 rounded-control font-semibold text-foreground">Delivery</div>
          </Reveal>

          <Reveal delayMs={300} className="mt-16 text-center">
             <Link href="/demo" className="button-primary">
                Get Your Free Demo
             </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
