import { ResponsiveImage, SERVICE_IMAGE_SIZES } from "@/components/ui/responsive-image";
import type { Metadata } from "next";
import { IntentLink as Link } from "@/components/ui/intent-link";
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";
import Check from "lucide-react/dist/esm/icons/check";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import 'react-medium-image-zoom/dist/styles.css';

export const metadata: Metadata = {
  title: "Delivery & Fleet Management | MhStudio",
  description: "Manage restaurant deliveries, riders, dispatch, delivery zones, tracking, COD, delivery partners, and fleet performance from one connected system.",
};

export default function DeliveryAndFleetManagementPage() {
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
              Delivery & Fleet Management
            </span>
            <h1 className="type-display text-foreground">
              Take Control of Every Delivery From Dispatch to Doorstep.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground-body">
              Manage your restaurant&apos;s complete delivery operation from one connected system. Assign riders, monitor active deliveries, manage delivery zones, track orders, handle cash collection, and coordinate your own fleet or delivery partners.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/contact"
                className="button-primary"
              >
                Get a Free Demo
              </Link>
              <Link
                href="#delivery-workflow"
                className="button-secondary"
              >
                See How It Works
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 pt-6 border-t border-border/50">
              {["Dispatch Queue", "Live Rider Tracking", "Delivery Zones", "Cash Management", "Performance Analytics"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-foreground-muted">
                  <Check className="h-4 w-4 text-accent-text" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Hero Visual: Delivery Dashboard + Rider App */}
        <div className="content-shell relative z-10">
          <Reveal className="mx-auto mb-8 w-full max-w-5xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-card border border-border-strong bg-surface shadow-card">
              <ResponsiveImage name="device-showcase" alt="Delivery and fleet management platform" fill className="object-cover object-top"  priority sizes={SERVICE_IMAGE_SIZES} />
            </div>
          </Reveal>
          <Reveal delayMs={100} className="mx-auto w-full max-w-5xl">
            <div className="relative w-full rounded-card border border-border-strong bg-surface shadow-card overflow-hidden flex flex-col sm:flex-row min-h-[500px]">
               {/* Browser UI (Delivery Dashboard) */}
               <div className="flex-1 border-b sm:border-b-0 sm:border-r border-border-strong flex flex-col overflow-hidden relative">
                  <div className="h-10 bg-surface border-b border-border-strong flex items-center px-4 justify-between shrink-0">
                     <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-error-soft"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-accent-soft"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-success-soft"></div>
                     </div>
                     <div className="text-sm text-foreground-muted font-semibold tracking-wider">DELIVERY DISPATCH</div>
                  </div>
                  <div className="flex-1 bg-surface flex overflow-hidden">
                     {/* Sidebar */}
                     <div className="w-48 border-r border-border-strong bg-surface p-4 hidden md:flex flex-col gap-4">
                        <div className="text-sm font-bold text-foreground-muted mb-2 tracking-wider">LIVE MAP</div>
                        <div className="flex justify-between items-center text-sm font-bold text-foreground bg-surface p-2 rounded-tag border border-border-strong">
                           <span>Active Riders</span>
                           <span className="text-accent-text">4</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-foreground-muted p-2">
                           <span>Pending</span>
                           <span>2</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-foreground-muted p-2">
                           <span>Completed</span>
                           <span>18</span>
                        </div>
                     </div>
                     {/* Main Map Area (Simulated) */}
                     <div className="flex-1 relative bg-surface overflow-hidden flex flex-col min-h-[400px]">
                        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>

                        {/* Map Markers & Routes */}
                        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent rounded-full shadow-card z-10 flex items-center justify-center">
                           <div className="w-2 h-2 bg-surface rounded-full"></div>
                           <div className="absolute -top-6 text-sm font-bold text-accent-text bg-surface px-2 py-0.5 rounded-tag border border-accent-border/40 whitespace-nowrap">Restaurant</div>
                        </div>

                        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-500 rounded-full z-10">
                           <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-bold text-info bg-surface px-2 py-0.5 rounded-tag border border-info/40 whitespace-nowrap">Ali (ETA: 4m)</div>
                        </div>

                        {/* Dashed Route */}
                        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                           <path d="M 25 25 Q 50 25 50 50" fill="none" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
                        </svg>

                        {/* Dispatch Queue Overlay */}
                        <div className="absolute bottom-6 left-6 right-6 bg-surface border border-border-strong rounded-control p-4 flex justify-between items-center z-20">
                           <div>
                              <div className="text-sm text-accent-text font-bold mb-1 tracking-wider">READY FOR DISPATCH</div>
                              <div className="text-sm text-foreground font-semibold">Order #1057 • PKR 2,350</div>
                           </div>
                           <button className="bg-accent text-foreground text-sm font-bold px-4 py-2 rounded-tag shadow-card">Assign Rider</button>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Mobile App/Ordering UI */}
               <div className="relative w-full sm:w-[320px] bg-surface shadow-card flex flex-col z-20 h-[500px] sm:h-auto shrink-0">
                  <div className="h-10 bg-surface border-b border-border-strong flex items-center justify-between px-4 text-sm text-foreground-muted shrink-0">
                     <span>9:41</span>
                     <div className="flex gap-1 items-center">
                        <div className="w-4 h-2.5 bg-surface-secondary rounded-tag"></div>
                     </div>
                  </div>
                  <div className="p-4 border-b border-border-strong flex justify-between items-center shrink-0">
                     <span className="font-bold text-foreground">Rider App</span>
                     <span className="bg-success-soft text-success text-sm font-bold px-2 py-1 rounded-tag">Online</span>
                  </div>

                  <div className="flex-1 p-4 bg-surface overflow-y-auto space-y-4">
                     <div className="text-sm font-bold text-foreground-muted mb-2 tracking-wider">CURRENT TASK</div>

                     <div className="bg-accent-soft border border-accent-border/40 rounded-control p-4 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                        <div className="flex justify-between items-start mb-4 border-b border-accent-border/40 pb-3">
                           <div>
                              <div className="text-sm font-bold text-accent-text mb-1">#ORD-1057</div>
                              <div className="text-sm text-foreground-body">Hayatabad Phase 3</div>
                           </div>
                           <div className="text-right">
                              <div className="text-sm font-bold text-success mb-1">PKR 2,350</div>
                              <div className="text-sm text-foreground-muted">Cash on Delivery</div>
                           </div>
                        </div>

                        <div className="flex justify-between gap-2 mt-4">
                           <button className="flex-1 bg-surface-secondary text-foreground-body py-2.5 rounded-tag text-sm font-semibold">Navigate</button>
                           <button className="flex-1 bg-accent text-foreground py-2.5 rounded-tag text-sm font-bold shadow-card">Mark Delivered</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-8 flex justify-center items-center text-sm sm:text-sm font-bold text-foreground-muted gap-2 sm:gap-4 flex-wrap">
               <span>ORDER READY</span>
               <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-accent-text" />
               <span className="text-accent-text">DISPATCH</span>
               <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-accent-text" />
               <span>RIDER</span>
               <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-accent-text" />
               <span>DELIVERED</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. & 3. THE PROBLEM & INTRO */}
      <section className="section-space section-divider bg-surface-secondary" id="delivery-workflow">
        <div className="content-shell">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
             <Reveal>
               <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Delivery Complexity</span>
               <h2 className="type-section text-foreground mb-6">Your Delivery Operation Shouldn&apos;t Depend on Calls and Messages.</h2>
               <p className="text-lg text-foreground-body mb-8">When restaurants manage deliveries manually, dispatchers often have to coordinate orders through phone calls, WhatsApp messages, paper notes, and separate tracking tools. That becomes increasingly difficult as order volume grows.</p>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                     { title: "Manual Coordination", desc: "Riders waiting around not knowing which order to pick up." },
                     { title: "No Central View", desc: "Customers calling for updates because dispatch has no live map." },
                     { title: "Cash Discrepancies", desc: "Cash collection inconsistencies at the end of the shift." },
                     { title: "Lost Performance Data", desc: "Difficult to track rider speed or analyze delivery zone profitability." }
                  ].map(prob => (
                     <div key={prob.title} className="bg-surface p-5 rounded-tag border border-border">
                        <h4 className="font-bold text-error mb-2 text-sm">{prob.title}</h4>
                        <p className="text-sm text-foreground-body">{prob.desc}</p>
                     </div>
                  ))}
               </div>
             </Reveal>

             <Reveal delayMs={100} className="surface-card p-8 bg-surface text-center flex flex-col gap-10 h-full justify-center lg:min-h-[500px]">
                <div>
                   <div className="text-sm font-bold text-foreground-muted mb-6 tracking-wider">THE OLD WAY</div>
                   <div className="flex flex-col gap-2 items-center text-sm font-semibold text-foreground-muted ">
                      <div className="bg-surface px-4 py-2.5 border border-border-strong rounded-tag">Call Rider</div>
                      <span>↓</span>
                      <div className="bg-surface px-4 py-2.5 border border-border-strong rounded-tag">Send Address via WhatsApp</div>
                      <span>↓</span>
                      <div className="bg-surface px-4 py-2.5 border border-border-strong rounded-tag">Wait for Confirmation</div>
                      <span>↓</span>
                      <div className="bg-surface px-4 py-2.5 border border-border-strong rounded-tag">Customer Calls Restaurant</div>
                   </div>
                </div>

                <div>
                   <div className="text-sm font-bold text-accent-text mb-6 tracking-wider">THE MHSTUDIO WAY</div>
                   <div className="flex flex-col gap-2 items-center text-sm font-bold text-foreground">
                      <div className="bg-accent-soft text-accent-text px-4 py-2.5 border border-accent-border/40 rounded-tag w-full max-w-[220px]">Dispatch Queue</div>
                      <span className="text-accent-text">↓</span>
                      <div className="bg-surface-secondary px-4 py-2.5 border border-border-strong rounded-tag w-full max-w-[220px]">Rider Assigned</div>
                      <span className="text-accent-text">↓</span>
                      <div className="bg-surface-secondary px-4 py-2.5 border border-border-strong rounded-tag w-full max-w-[220px]">Out for Delivery</div>
                      <span className="text-accent-text">↓</span>
                      <div className="bg-success-soft text-success px-4 py-2.5 border border-success/40 rounded-tag w-full max-w-[220px]">Delivered</div>
                   </div>
                   <div className="text-sm text-foreground-muted mt-6">Everything remains visible in the system.</div>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* 4. DELIVERY MODELS */}
      <section className="section-space">
        <div className="content-shell text-center max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Flexible Delivery Models"
            title="Use Your Own Riders, Delivery Partners, or Both."
            description="Every restaurant operates differently. Our system supports three primary delivery models to fit your operational strategy and capacity needs."
            align="center"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
             <Reveal className="surface-card p-8 flex flex-col items-center text-center border-t-4 border-t-amber-500">
                <div className="w-16 h-16 bg-accent-soft rounded-full flex items-center justify-center mb-6 border border-accent-border/40">
                   <span className="text-2xl">🛵</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">Own Fleet</h4>
                <p className="text-sm text-foreground-body mb-8">Manage your own riders. The system tracks assignments, live routes, cash collection, and rider performance.</p>
                <div className="mt-auto flex items-center justify-center gap-2 text-sm font-bold text-accent-text">
                   <span>Restaurant</span> <ArrowRight className="w-4 h-4" /> <span>Own Fleet</span>
                </div>
             </Reveal>

             <Reveal delayMs={100} className="surface-card p-8 flex flex-col items-center text-center border-t-4 border-t-blue-500">
                <div className="w-16 h-16 bg-info-soft rounded-full flex items-center justify-center mb-6 border border-info/40">
                   <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">Delivery Partner</h4>
                <p className="text-sm text-foreground-body mb-8">Use an external delivery provider. Orders are dispatched through supported delivery integrations or partner workflows.</p>
                <div className="mt-auto flex items-center justify-center gap-2 text-sm font-bold text-info">
                   <span>Restaurant</span> <ArrowRight className="w-4 h-4" /> <span>Partner</span>
                </div>
             </Reveal>

             <Reveal delayMs={200} className="surface-card p-8 flex flex-col items-center text-center border-t-4 border-t-emerald-500">
                <div className="w-16 h-16 bg-success-soft rounded-full flex items-center justify-center mb-6 border border-success/40">
                   <span className="text-2xl">⚖️</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">Hybrid</h4>
                <p className="text-sm text-foreground-body mb-8">Use your own riders for nearby deliveries, and external partners when additional capacity is needed during peak hours.</p>
                <div className="mt-auto flex flex-col items-center gap-2 text-sm font-bold text-success">
                   <div><span>Restaurant</span> <ArrowRight className="w-4 h-4 inline mx-1" /> <span>Own Fleet</span></div>
                   <div><span>Restaurant</span> <ArrowRight className="w-4 h-4 inline mx-1" /> <span>Partner</span></div>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* DISPATCH & RIDER ASSIGNMENT */}
      <section className="section-space section-divider bg-surface-secondary">
        <div className="content-shell">
          <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
             <Reveal className="order-2 lg:order-1">
               <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Dispatch Workflow</span>
               <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">Every Ready Order Enters One Dispatch Queue.</h3>
               <p className="text-foreground-body text-lg mb-8">When the kitchen marks a delivery order as ready, it automatically moves into the delivery dispatch workflow. The dispatcher sees everything needed to make the right assignment.</p>

               <div className="bg-surface p-6 rounded-tag border border-border-strong shadow-card relative mt-8 lg:mt-12">
                  <div className="absolute top-0 right-4 bg-error-soft text-error px-3 py-1.5 rounded-b text-sm font-bold border border-t-0 border-error/40 tracking-wider">HIGH PRIORITY</div>
                  <div className="flex justify-between items-end mb-6 border-b border-border-strong pb-5">
                     <div>
                        <div className="text-2xl font-bold text-foreground mb-2">#ORD-1057</div>
                        <div className="text-sm text-foreground-muted">Ahmed • Hayatabad Zone</div>
                     </div>
                     <div className="text-right">
                        <div className="text-lg font-bold text-foreground">PKR 2,350</div>
                        <div className="text-sm text-accent-text font-semibold mt-1">Ready 7:42 PM</div>
                     </div>
                  </div>
                  <button className="w-full bg-accent text-foreground font-bold py-3.5 rounded-tag shadow-card">Assign Rider</button>
               </div>
             </Reveal>

             <Reveal delayMs={100} className="order-1 lg:order-2">
               <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Intelligent Assignment</span>
               <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">Assign the Right Rider, Automatically.</h3>
               <p className="text-foreground-body text-lg mb-8">Dispatchers can manually assign orders, or let the system automatically recommend riders based on availability, current location, route, and delivery zones.</p>

               <div className="bg-surface border border-border-strong rounded-control p-6 lg:mt-12">
                  <div className="text-sm font-bold text-foreground-muted mb-4 uppercase tracking-wider">Suggested Riders</div>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center bg-accent-soft border border-accent-border/40 p-4 rounded-tag">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 bg-surface-secondary rounded-full flex items-center justify-center text-lg">🛵</div>
                           <div>
                              <div className="text-sm font-bold text-accent-text mb-0.5">Ali</div>
                              <div className="text-sm sm:text-sm text-accent-text">1.2 km away • Available</div>
                           </div>
                        </div>
                        <button className="bg-accent text-foreground text-sm font-bold px-4 py-2 rounded-tag">Assign</button>
                     </div>
                     <div className="flex justify-between items-center bg-surface border border-border-strong p-4 rounded-tag ">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 bg-surface-secondary rounded-full flex items-center justify-center text-lg">🛵</div>
                           <div>
                              <div className="text-sm font-bold text-foreground-body mb-0.5">Hamza</div>
                              <div className="text-sm sm:text-sm text-foreground-muted">2.4 km away • Available</div>
                           </div>
                        </div>
                        <button className="bg-surface-secondary text-foreground-body text-sm font-bold px-4 py-2 rounded-tag">Assign</button>
                     </div>
                  </div>
               </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* RIDER APP & TASKS */}
      <section className="section-space">
        <div className="content-shell grid gap-12 lg:grid-cols-2 items-center">
           <Reveal>
             <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Restaurant Rider App</span>
             <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">Give Riders a Simple App for Every Delivery Task.</h3>
             <p className="text-foreground-body text-lg mb-8">The rider app provides a clear task list, navigation, and customer information without giving access to the full restaurant admin panel. When a rider receives an assignment, they can accept or reject it, keeping dispatch updated instantly.</p>

             <ul className="space-y-6 mt-8">
               {[
                  "Clear Task List: Know exactly what order to pick up and where to go next.",
                  "Acceptance/Rejection: Dispatch is notified immediately if a rider cannot take an order.",
                  "Navigation: One-tap routing to the restaurant and customer.",
                  "Customer Info: View addresses and instructions securely."
               ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                     <Check className="w-6 h-6 text-accent-text shrink-0 mt-0.5" />
                     <span className="text-sm sm:text-base text-foreground-body leading-relaxed">{item}</span>
                  </li>
               ))}
             </ul>
           </Reveal>

           <Reveal delayMs={100} className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[320px] aspect-[9/19] rounded-dialog border-[8px] border-border-strong bg-surface shadow-card overflow-hidden flex flex-col">
                 <div className="h-10 bg-surface border-b border-border-strong flex items-center justify-between px-5 text-sm text-foreground-muted shrink-0">
                    <span>12:04</span>
                    <div className="flex gap-1.5 items-center">
                        <div className="w-4 h-2.5 bg-surface-secondary rounded-tag"></div>
                    </div>
                 </div>

                 <div className="bg-surface p-5 border-b border-border-strong flex justify-between items-center shrink-0">
                    <div>
                       <div className="font-bold text-foreground text-lg mb-1">Welcome, Ali</div>
                       <div className="text-sm text-success flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-success"></div> Online & Available</div>
                    </div>
                 </div>

                 <div className="flex-1 overflow-y-auto p-5 bg-surface space-y-6">
                    <div className="text-sm font-bold text-accent-text tracking-wider">NEW ASSIGNMENT</div>

                    <div className="bg-accent-soft border border-accent-border/40 rounded-control p-5">
                       <div className="flex justify-between items-start mb-5 border-b border-accent-border/40 pb-4">
                          <div>
                             <div className="text-lg font-bold text-foreground mb-1.5">#ORD-1058</div>
                             <div className="text-sm text-foreground-body">Phase 6, DHA</div>
                          </div>
                          <div className="text-right">
                             <div className="text-sm font-bold text-success mb-2">PKR 1,850</div>
                             <div className="text-sm font-bold tracking-wide text-foreground-muted bg-surface px-2 py-1 rounded-tag border border-border-strong uppercase">Cash</div>
                          </div>
                       </div>

                       <div className="flex justify-between gap-3">
                          <button className="flex-1 bg-surface-secondary text-foreground-body py-3 rounded-tag text-sm font-bold border border-border-strong transition-colors hover:bg-surface-secondary">Reject</button>
                          <button className="flex-1 bg-accent text-foreground py-3 rounded-tag text-sm font-bold shadow-card transition-colors hover:bg-accent">Accept</button>
                       </div>
                    </div>

                    <div className="text-sm font-bold text-foreground-muted tracking-wider mt-8">UPCOMING TASKS</div>
                    <div className="bg-surface border border-border-strong rounded-control p-4 flex justify-between items-center ">
                       <div>
                          <div className="font-bold text-foreground-body mb-1">#ORD-1059</div>
                          <div className="text-sm sm:text-sm text-foreground-muted">Pending Pickup</div>
                       </div>
                    </div>
                 </div>
              </div>
           </Reveal>
        </div>
      </section>

      {/* LIVE MAP & ZONES */}
      <section className="section-space section-divider bg-surface-secondary">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Live Operations"
            title="See Your Delivery Operation in Real Time."
            description="The dispatcher can view active deliveries on a map, monitor rider locations, and manage delivery zones and fees."
            align="center"
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2">
             <Reveal className="surface-card p-0 overflow-hidden flex flex-col border border-border h-[400px]">
                <div className="p-6 md:p-8 border-b border-border bg-surface shrink-0">
                   <h4 className="text-lg font-bold text-foreground mb-2">Live Delivery Map</h4>
                   <p className="text-sm text-foreground-body">Track riders, customer destinations, and active routes.</p>
                </div>
                <div className="flex-1 bg-surface relative overflow-hidden flex items-center justify-center">
                   <div className="absolute inset-0 opacity-20"></div>

                   {/* Abstract Map Elements */}
                   <svg className="absolute inset-0 w-full h-full opacity-30" style={{ zIndex: 0 }}>
                      <path d="M -50 100 Q 150 200 300 100 T 600 150" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground-muted" />
                      <path d="M 150 -50 L 150 350 M 350 -50 L 350 350 M 550 -50 L 550 350" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-foreground-muted" />
                   </svg>

                   <div className="absolute bg-accent-soft w-48 h-48 rounded-full"></div>

                   <div className="relative z-10 flex flex-col items-center gap-10">
                      <div className="bg-surface border border-border-strong px-4 py-3 rounded-control flex items-center gap-3 shadow-card">
                         <div className="w-3.5 h-3.5 bg-accent rounded-full shadow-card"></div>
                         <div>
                            <div className="text-sm font-bold text-foreground">Restaurant HQ</div>
                         </div>
                      </div>

                      <div className="bg-surface border border-info/40 px-4 py-3 rounded-control flex items-center gap-3 shadow-card translate-x-16">
                         <div className="w-3.5 h-3.5 bg-blue-500 rounded-full shadow-card "></div>
                         <div>
                            <div className="text-sm font-bold text-foreground">Ali <span className="text-foreground-muted font-normal ml-2">#ORD-1057</span></div>
                            <div className="text-sm text-info mt-0.5">Out for Delivery (12m)</div>
                         </div>
                      </div>
                   </div>
                </div>
             </Reveal>

             <Reveal delayMs={100} className="surface-card p-0 overflow-hidden flex flex-col border border-border h-[400px]">
                <div className="p-6 md:p-8 border-b border-border bg-surface shrink-0">
                   <h4 className="text-lg font-bold text-foreground mb-2">Delivery Zones & Fees</h4>
                   <p className="text-sm text-foreground-body">Control where you deliver, zone fees, and minimum orders.</p>
                </div>
                <div className="flex-1 bg-surface p-6 md:p-8 flex flex-col justify-center gap-4">
                   <div className="bg-surface border border-border-strong rounded-control p-5 flex justify-between items-center">
                      <div>
                         <div className="font-bold text-accent-text mb-1">Zone A</div>
                         <div className="text-sm text-foreground-muted">0–3 km Radius</div>
                      </div>
                      <div className="text-sm font-bold text-foreground-body bg-surface-secondary px-4 py-2 rounded-tag">PKR 100 Fee</div>
                   </div>

                   <div className="bg-surface border border-border-strong rounded-control p-5 flex justify-between items-center">
                      <div>
                         <div className="font-bold text-accent-text mb-1">Zone B</div>
                         <div className="text-sm text-foreground-muted">3–6 km Radius</div>
                      </div>
                      <div className="text-sm font-bold text-foreground-body bg-surface-secondary px-4 py-2 rounded-tag">PKR 180 Fee</div>
                   </div>

                   <div className="bg-surface border border-border-strong rounded-control p-5 flex justify-between items-center ">
                      <div>
                         <div className="font-bold text-foreground-muted mb-1">Zone C</div>
                         <div className="text-sm text-foreground-muted">6–10 km Radius</div>
                      </div>
                      <div className="text-sm font-bold text-foreground-muted bg-surface-secondary px-4 py-2 rounded-tag border border-border-strong">PKR 250 Fee</div>
                   </div>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* TRACKING, COD & PERFORMANCE */}
      <section className="section-space">
        <div className="content-shell grid gap-12 lg:grid-cols-2">
           <Reveal className="space-y-8 flex flex-col">
             <div>
               <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Cash & Status Management</span>
               <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">Keep COD Deliveries Accountable.</h3>
               <p className="text-foreground-body text-lg mb-8">Record expected collection, rider collected amounts, and outstanding cash statuses. When a delivery goes wrong, riders can report issues (e.g., Customer unavailable) creating a clear record for dispatch.</p>

               <div className="bg-surface border border-border-strong p-6 sm:p-8 rounded-card flex flex-col gap-6 mt-auto shadow-card">
                  <div className="text-sm font-bold text-foreground-muted tracking-wider border-b border-border-strong pb-3">RIDER END OF SHIFT (ALI)</div>
                  <div className="flex justify-between items-center text-base">
                     <span className="text-foreground-muted">Total COD Deliveries</span>
                     <span className="font-bold text-foreground">14 Orders</span>
                  </div>
                  <div className="flex justify-between items-center text-base">
                     <span className="text-foreground-muted">Expected Cash</span>
                     <span className="font-bold text-foreground">PKR 32,450</span>
                  </div>
                  <div className="bg-success-soft border border-success/40 p-4 rounded-control flex justify-between items-center mt-2">
                     <span className="text-success font-bold">Reconciled Amount</span>
                     <span className="text-success font-bold text-xl">PKR 32,450</span>
                  </div>
               </div>
             </div>
           </Reveal>

           <Reveal delayMs={100} className="space-y-8 flex flex-col">
             <div>
               <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-accent-text uppercase">Delivery Analytics</span>
               <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">Turn Delivery Data Into Better Decisions.</h3>
               <p className="text-foreground-body text-lg mb-8">Track average delivery times, rider performance, and peak demand periods. Understand which zones generate the most orders and where your fleet needs attention.</p>

               <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-auto">
                  <div className="bg-surface border border-border-strong rounded-card p-6 flex flex-col items-center text-center justify-center shadow-card">
                     <div className="text-4xl sm:text-5xl font-bold text-accent-text mb-2">34m</div>
                     <div className="text-sm sm:text-sm font-bold text-foreground-muted tracking-wider">AVG DELIVERY TIME</div>
                  </div>
                  <div className="bg-surface border border-border-strong rounded-card p-6 flex flex-col items-center text-center justify-center shadow-card">
                     <div className="text-4xl sm:text-5xl font-bold text-success mb-2">98%</div>
                     <div className="text-sm sm:text-sm font-bold text-foreground-muted tracking-wider">COMPLETION RATE</div>
                  </div>
                  <div className="col-span-2 bg-surface border border-border-strong rounded-card p-6 sm:p-8 shadow-card">
                     <div className="text-sm font-bold text-foreground-muted tracking-wider border-b border-border-strong pb-3 mb-4">TOP RIDER: ALI</div>
                     <div className="flex justify-between text-base text-foreground-muted mb-3"><span>Completed</span> <span className="font-bold text-foreground">148</span></div>
                     <div className="flex justify-between text-base text-foreground-muted"><span>Avg Time</span> <span className="font-bold text-foreground">31 min</span></div>
                  </div>
               </div>
             </div>
           </Reveal>
        </div>
      </section>

      {/* CONNECTED ECOSYSTEM */}
      <section className="section-space section-divider bg-surface-secondary">
        <div className="content-shell text-center max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="The Complete Delivery Workflow"
            title="From Kitchen to Customer, Every Step Is Connected."
            description="Delivery orders start at the POS or Online Ordering website, flow into the Kitchen Display System, and seamlessly move into Dispatch. Every status creates a clearer operational record for the restaurant."
            align="center"
          />

          <Reveal delayMs={100} className="mt-16 sm:mt-24 w-full mx-auto overflow-x-auto pb-8">
             <div className="workflow-steps text-sm font-semibold">
                <div className="flex flex-col items-center gap-2">
                   <div className="bg-surface border border-border w-28 h-14 flex items-center justify-center text-center rounded-tag text-foreground-muted shadow-sm">ORDER<br/>RECEIVED</div>
                </div>
                <ArrowRight className="w-5 h-5 text-foreground-muted shrink-0" />
                <div className="flex flex-col items-center gap-2">
                   <div className="bg-surface border border-border w-28 h-14 flex items-center justify-center text-center rounded-tag text-foreground-muted shadow-sm">KITCHEN<br/>PREPARING</div>
                </div>
                <ArrowRight className="w-5 h-5 text-accent-text shrink-0" />
                <div className="flex flex-col items-center gap-2 relative">
                   <div className="bg-accent-soft border border-accent-border/40 w-32 h-16 flex items-center justify-center text-center rounded-control text-accent-text shadow-card z-10 text-sm">READY FOR<br/>DISPATCH</div>
                </div>
                <ArrowRight className="w-5 h-5 text-accent-text shrink-0" />
                <div className="flex flex-col items-center gap-2">
                   <div className="bg-surface border border-border w-28 h-14 flex items-center justify-center text-center rounded-tag text-foreground-muted shadow-sm">RIDER<br/>ASSIGNED</div>
                </div>
                <ArrowRight className="w-5 h-5 text-foreground-muted shrink-0" />
                <div className="flex flex-col items-center gap-2">
                   <div className="bg-surface border border-border w-28 h-14 flex items-center justify-center text-center rounded-tag text-foreground-muted shadow-sm">OUT FOR<br/>DELIVERY</div>
                </div>
                <ArrowRight className="w-5 h-5 text-success shrink-0" />
                <div className="flex flex-col items-center gap-2">
                   <div className="bg-success-soft border border-success/40 w-28 h-14 flex items-center justify-center text-center rounded-tag text-success shadow-card">DELIVERED</div>
                </div>
             </div>
             <p className="text-sm text-foreground-body mt-12 max-w-2xl mx-auto">Delivery & Fleet Management is not just &quot;an app for riders.&quot; It is the restaurant&apos;s complete delivery fulfillment layer connected to your POS, KDS, Online Ordering, and RMS.</p>
          </Reveal>
        </div>
      </section>

      {/* RESTAURANT TYPES */}
      <section className="section-space">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Built for Every Operation"
            title="Delivery Management for Different Restaurant Types"
            description="Whether you run a single high-volume location or multiple branches, the system adapts to your delivery needs."
            align="center"
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
             {[
               { title: "Fast Food", desc: "Handle high-volume delivery dispatch efficiently.", icon: "🍔" },
               { title: "Multi-Branch", desc: "Manage delivery operations separately by branch while maintaining central visibility.", icon: "🏢" },
               { title: "Full-Service", desc: "Manage dedicated delivery fleets alongside dine-in operations.", icon: "🍽️" },
               { title: "Cafés & Bakeries", desc: "Manage smaller delivery fleets and coordinate scheduled or same-day deliveries.", icon: "☕" }
             ].map((type, i) => (
                <Reveal key={type.title} delayMs={i * 100} className="surface-card p-6 md:p-8 border border-border/50 hover:border-accent-border/40 transition-colors flex flex-col items-center text-center">
                   <div className="text-4xl mb-4 bg-surface-secondary w-16 h-16 flex items-center justify-center rounded-full border border-border">{type.icon}</div>
                   <h4 className="text-lg font-bold text-foreground mb-3">{type.title}</h4>
                   <p className="text-sm text-foreground-muted leading-relaxed">{type.desc}</p>
                </Reveal>
             ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-space section-divider bg-surface-secondary">
        <div className="content-shell max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Common Questions"
            title="Delivery & Fleet FAQ"
            description=""
            align="left"
          />

          <div className="mt-12 grid gap-6">
             {[
               { q: "Do I need my own riders?", a: "No. You can operate with your own fleet, delivery partners, or a hybrid model depending on your requirements and available integrations." },
               { q: "Is the rider app included?", a: "A rider-facing application can be included or configured as part of a delivery management implementation depending on your selected package." },
               { q: "Can I manage COD?", a: "Yes. Cash collection can be recorded against the relevant rider and order for seamless end-of-shift reconciliation." },
               { q: "Can delivery connect with my POS and Kitchen?", a: "Yes. Delivery orders can flow through the same central order workflow, enter the KDS, and automatically move into dispatch after preparation." }
             ].map((faq, i) => (
                <Reveal key={i} delayMs={i * 100} className="bg-surface border border-border rounded-card p-6 sm:p-8 shadow-sm">
                   <h4 className="text-lg text-foreground font-bold mb-3">{faq.q}</h4>
                   <p className="text-foreground-body text-base leading-relaxed">{faq.a}</p>
                </Reveal>
             ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-space">
        <div className="content-shell text-center max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Ready to Streamline Deliveries?"
            title="Take Control of Every Delivery."
            description="Stop managing riders, addresses, delivery orders, and customer calls across disconnected tools. Bring your delivery operation into one connected system—from kitchen readiness to dispatch, tracking, delivery, and reporting."
            align="center"
          />

          <Reveal delayMs={200} className="mt-12 sm:mt-16 flex flex-wrap justify-center items-center gap-4">
             <Link href="/contact" className="button-primary">
                Get a Free Delivery Management Demo
             </Link>
             <Link href="/contact" className="button-secondary">
                Talk to MhStudio
             </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
