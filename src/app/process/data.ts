

export const corePhases = [
  {
    step: "01",
    title: "Discovery & Plan Selection",
    tagline: "Finding the right fit.",
    description: "We review your operational needs—from online ordering to table reservations—and help you select the managed tier or custom plan that best suits your restaurant.",
    activities: ["Workflow assessment", "Feature mapping", "Plan selection", "Timeline setting"],
    icon: "search"
  },
  {
    step: "02",
    title: "Onboarding & Dashboard Setup",
    tagline: "Your command center.",
    description: "We provision your centralized dashboard, connecting your website, menus, and incoming order pipelines so everything lives in one secure place.",
    activities: ["Account creation", "Menu data gathering", "Branch configuration", "Dashboard handover"],
    icon: "layers"
  },
  {
    step: "03",
    title: "Design & Customization",
    tagline: "Your brand, elevated.",
    description: "We apply a premium visual system tailored to your restaurant's brand, ensuring your digital presence perfectly matches your dining atmosphere.",
    activities: ["Visual branding setup", "Mobile menu optimization", "Layout styling", "Content population"],
    icon: "palette"
  },
  {
    step: "04",
    title: "AI & System Integration",
    tagline: "Connecting the smart tools.",
    description: "We activate core functionalities: native online ordering, the AI Receptionist for 24/7 guest queries, and deep analytics tracking.",
    activities: ["Ordering flow integration", "AI Assistant training", "Analytics setup", "Payment gateway linking"],
    icon: "bot"
  },
  {
    step: "05",
    title: "Testing & Training",
    tagline: "Ready for traffic.",
    description: "We rigorously test ordering flows and provide a quick onboarding session to ensure your team is confident using the new dashboard.",
    activities: ["End-to-end order testing", "Mobile usability checks", "Staff dashboard training", "Final client review"],
    icon: "shield-check"
  },
  {
    step: "06",
    title: "Launch & Ongoing Support",
    tagline: "Go live flawlessly.",
    description: "Your platform goes live with zero upfront costs on managed plans. We continue to provide premium hosting, security, and technical support as you grow.",
    activities: ["Domain connection", "Live deployment", "Google Maps sync", "Ongoing system updates"],
    icon: "rocket"
  }
];

export const developmentPaths = [
  {
    title: "Launch Plan (Fast Track)",
    description: "Perfect for independent eateries needing a premium digital menu, fast ordering, and reservation integration immediately.",
    timeline: "2–4 days",
    steps: ["Selection", "Menu Setup", "Design Apply", "Launch"],
  },
  {
    title: "Growth Plan",
    description: "Ideal for busy restaurants needing native delivery flows, basic AI queries, and customer loyalty features.",
    timeline: "3–7 days",
    steps: ["Selection", "Ordering Flow", "AI Setup", "Loyalty Config", "Launch"],
  },
  {
    title: "Scale AI & Multi-Branch",
    description: "Built for expanding operations. Centralizes menus across locations and deploys an advanced AI Receptionist for full automation.",
    timeline: "1–2 weeks",
    steps: ["Multi-Branch Setup", "Advanced AI Training", "Staff Training", "Launch"],
  },
  {
    title: "Custom Enterprise Build",
    description: "Tailored iOS/Android apps, custom POS integrations, and completely bespoke architectural needs for large hospitality groups.",
    timeline: "2–4+ weeks",
    steps: ["Deep Discovery", "Custom Development", "App Store Submission", "Rollout"],
  }
];

export const clientInvolvement = [
  {
    title: "Zero Development Hassle",
    description: "We handle the code and infrastructure. You just provide the menu and branding.",
    icon: "code-xml",
  },
  {
    title: "Clear Setup Milestones",
    description: "No hidden fees or unexpected integration delays. Everything is clearly mapped.",
    icon: "refresh-cw",
  },
  {
    title: "Rapid Dashboard Access",
    description: "Get early access to your dashboard to review orders and manage items before going live.",
    icon: "monitor",
  },
  {
    title: "Continuous Partnership",
    description: "Our managed plans mean we are always available for technical updates and support.",
    icon: "message-square-quote",
  }
];

export const qualityAssurance = [
  { title: "Native Order Flow", icon: "utensils-crossed" },
  { title: "Dashboard Usability", icon: "monitor-smartphone" },
  { title: "AI Query Accuracy", icon: "bot" },
  { title: "Mobile Menu Speed", icon: "zap" },
  { title: "Secure Payments", icon: "shield-check" },
  { title: "Local SEO Setup", icon: "search" },
  { title: "Multi-Branch Sync", icon: "git-merge" },
  { title: "Booking Integration", icon: "calendar" }
];

export const processFaqs = [
  {
    question: "How long does it take to get my restaurant online?",
    answer: "With our streamlined platform, a Launch plan can be live in 2-4 days. More advanced setups like the Scale AI plan take 1-2 weeks."
  },
  {
    question: "Do I have to pay thousands of dollars upfront?",
    answer: "No. Our Managed Monthly and Yearly plans have zero upfront setup fees. You get an enterprise-grade platform on a simple subscription model."
  },
  {
    question: "Will we be able to update menus and prices ourselves?",
    answer: "Absolutely. Every plan includes access to a unified dashboard where you can edit menus, update pricing, and track orders instantly."
  },
  {
    question: "How does the native ordering system help my margins?",
    answer: "Native ordering means guests buy directly from your platform, allowing you to bypass the hefty 20-30% commissions charged by third-party delivery apps."
  },
  {
    question: "What does the AI Receptionist actually do?",
    answer: "It acts as a 24/7 digital staff member. It can answer customer questions on WhatsApp or your website regarding business hours, allergens, or parking, and help them place orders or book tables."
  },
  {
    question: "What if I have multiple restaurant locations?",
    answer: "Our higher-tier plans are built for multi-branch operations. You can control location-specific menus and track analytics across all branches from a single admin screen."
  },
  {
    question: "Do you handle hosting and servers?",
    answer: "Yes, our managed plans include premium cloud hosting, SSL certificates, and performance monitoring. You don't need to worry about technical maintenance."
  }
];

export const techTimeline = [
  { stage: "Infrastructure", tech: "Vercel, Cloudflare, Next.js", icon: "cloud" },
  { stage: "Platform Core", tech: "React, Tailwind CSS, TypeScript", icon: "monitor" },
  { stage: "Data & Menus", tech: "Centralized CMS, Fast Edge Data", icon: "database" },
  { stage: "AI & Automation", tech: "Gemini AI, OpenAI API, WhatsApp", icon: "bot" },
  { stage: "Payments & Orders", tech: "Native Cart, Secure Gateways", icon: "plug" },
  { stage: "Analytics", tech: "Custom Dashboards, Insight Tracking", icon: "search-check" }
];
