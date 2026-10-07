export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
};

export type PortfolioItem = {
  slug: string;
  title: string;
  category: "Restaurant" | "Hotels" | "Bar";
  clientType: string;
  shortDescription: string;
  overview: string;
  industry: string;
  technologies: string[];
  features: string[];
  image: string;
  imageAlt: string;
  liveHref: string;
  performance: string;
  results: string[];
  challenge: string;
  goals: string[];
  design: string;
  development: string;
};

export const siteConfig = {
  name: "MhStudio",
  tagline: "Premium custom websites and AI solutions for modern businesses.",
  description:
    "MhStudio designs and develops high-performance, conversion-focused websites featuring digital showcases, smart integrations, and custom AI assistants.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "saad@mhstudios.online",
  whatsappHref: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/+923429842565",
  calendarHref: process.env.NEXT_PUBLIC_CALENDAR_URL ?? "https://calendly.com/mhstudio/30min",
  phoneLabel: "WhatsApp consultation",
};

export const navigationItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Templates", href: "/templates" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "Instagram", href: "/contact#contact-methods" },
  { label: "LinkedIn", href: "/contact#contact-methods" },
  { label: "Behance", href: "/contact#contact-methods" },
];

export const trustedIndustries = [
  "Fine Dining",
  "Casual Dining",
  "Cafes & Bistros",
  "Bars & Pubs",
  "Pizzerias",
  "Steakhouses",
  "Sushi Bars",
];

export const industries = [
  "Fine Dining",
  "Casual Dining",
  "Cafe",
  "Bar & Grill",
  "Pizzeria",
  "Steakhouse",
  "Sushi Bar",
  "Fast Casual",
  "Bakery",
  "Bistro",
  "Food Truck",
  "Catering",
];

export type IndustryShowcaseItem = {
  label: string;
  image: string;
  alt: string;
  objectPosition?: string;
};

export const industryShowcaseItems: IndustryShowcaseItem[] = [
  {
    label: "Restaurants & Bistros",
    image: "/images/restaurant.avif",
    alt: "Cozy bistro dining space and plated culinary dishes.",
    objectPosition: "center center",
  },
  {
    label: "Fine Dining",
    image: "/images/fine_dining.avif",
    alt: "Elegant restaurant table with plated dishes and warm ambient lighting.",
    objectPosition: "center center",
  },
  {
    label: "Casual Dining",
    image: "/images/casual_dining.avif",
    alt: "Expansive casual dining restaurant seating and food display.",
    objectPosition: "center center",
  },
  {
    label: "Cafes & Coffee Shops",
    image: "/images/coffee_shop.avif",
    alt: "Coffee shop barista preparing specialty drinks.",
    objectPosition: "center center",
  },
  {
    label: "Bars & Nightlife",
    image: "/images/bar_nightlife.avif",
    alt: "Vibrant bar scene with cocktails and warm lighting.",
    objectPosition: "center center",
  },
  {
    label: "Restaurant Groups",
    image: "/images/restaurant_group.avif",
    alt: "Premium multi-location restaurant brand presentation.",
    objectPosition: "center center",
  },
];

export const stats: Metric[] = [
  {
    label: "Projects Completed",
    value: 6,
    suffix: "+",
    description: "Premium websites designed and launched for restaurants and food brands.",
  },
  {
    label: "Years Experience",
    value: 4,
    suffix: "+",
    description: "Creating high-performance digital dining experiences.",
  },
  {
    label: "Satisfied Owners",
    value: 6,
    suffix: "+",
    description: "Restaurant owners enjoying seamless reservations and increased orders.",
  },
  {
    label: "Establishment Types",
    value: 8,
    suffix: "+",
    description: "From fine dining and casual eateries to bars, cafes, and bakeries.",
  },
  {
    label: "Technologies Used",
    value: 12,
    suffix: "+",
    description: "Modern tools chosen for speed, online menus, and booking integrations.",
  },
];

export const whyChooseItems = [
  {
    title: "All-in-One Dashboard",
    problem: "Managing multiple tools for orders, menus, and website is chaotic.",
    solution: "We unify your entire digital operation. Manage your website content, online orders, table reservations, and menus from a single, intuitive screen.",
  },
  {
    title: "Zero Upfront Costs",
    problem: "Custom restaurant technology typically requires massive investment.",
    solution: "Our Managed Plans offer a fully customized, premium digital platform with zero setup fees, giving you enterprise-grade tech on a simple subscription.",
  },
  {
    title: "AI-Powered Assistant",
    problem: "Staff miss calls and messages during busy service hours.",
    solution: "We integrate smart AI receptionists that handle booking assistance, answer menu inquiries, and log customer requests 24/7 via chat or WhatsApp.",
  },
  {
    title: "Built-In Ordering",
    problem: "Third-party delivery apps eat away at your profit margins.",
    solution: "Deploy a native ordering system for delivery and takeaway, driving direct sales straight to your dashboard without the high commission fees.",
  },
  {
    title: "Multi-Branch Ready",
    problem: "Scaling your brand online creates fragmented data and menus.",
    solution: "Our platform easily scales from one to many locations, allowing you to centralize menus, track branch analytics, and maintain brand consistency.",
  },
  {
    title: "Fully Managed Tech",
    problem: "Servers crash, domains expire, and software gets outdated.",
    solution: "We completely manage your hosting, security, and performance optimizations. You focus on the food, and we make sure your platform never goes down.",
  },
];

export const serviceCards = [
  {
    title: "Modern Restaurant Websites",
    description: "Custom, responsive website builds that showcase your brand, dining experience, and locations.",
    features: ["Brand story layout", "Multi-location ready", "Fluid responsive design"],
    icon: "monitor-smartphone",
  },
  {
    title: "Interactive Online Menus",
    description: "Fast, mobile-optimized digital menus that make browsing dishes and pricing effortless for guests.",
    features: ["Category navigation", "Dietary filters (e.g., Vegan, GF)", "Dynamic price updates"],
    icon: "utensils-crossed",
  },
  {
    title: "Online Reservation Systems",
    description: "Easy connection to OpenTable, Resy, or custom reservation flows to keep tables booked.",
    features: ["Direct platform widgets", "Custom booking inquiry forms", "Reservation FAQs"],
    icon: "calendar",
  },
  {
    title: "AI Restaurant Assistants",
    description: "Intelligent chat and WhatsApp AI assistants to answer ingredient FAQs, automate customer replies, and assist with bookings 24/7.",
    features: ["WhatsApp AI integration", "Automated booking support", "Menu FAQ responses"],
    icon: "bot",
  },
  {
    title: "Gallery & Food Showcases",
    description: "Stunning food photography and interior gallery layouts designed to captivate guests.",
    features: ["High-speed image loading", "Lightbox gallery overlays", "Ambiance highlight reels"],
    icon: "images",
  },
  {
    title: "Events & Announcements",
    description: "Promote holiday menus, wine tastings, private dining options, and local events.",
    features: ["Announcement banners", "Special menu builders", "Private event booking flows"],
    icon: "megaphone",
  },
  {
    title: "Local SEO & Map Rankings",
    description: "Technical search optimization so your restaurant shows up first when customers search nearby.",
    features: ["Google Business optimization", "Schema markup for menus/hours", "Local keyword targeting"],
    icon: "map-pinned",
  },
  {
    title: "Performance Optimization",
    description: "Speed-focused improvements ensuring your pages load instantly even on cellular data.",
    features: ["95+ Core Web Vitals score", "Advanced image compression", "Instant page transitions"],
    icon: "zap",
  },
  {
    title: "Hosting & Deployment",
    description: "End-to-end cloud hosting setup, custom domain connection, SSL security configuration, and smooth production launch.",
    features: ["Hosting setup & domain connection", "Deployment & SSL configuration", "Production launch & post-support"],
    icon: "server-cog",
  },
  {
    title: "Website Maintenance & Support",
    description: "Ongoing support to update your menus, pricing, hours, and announcements without delay.",
    features: ["Same-day content updates", "Regular backups & health checks", "Security monitoring"],
    icon: "wrench",
  },
  {
    title: "Online Ordering & Delivery",
    description: "Complete order management from checkout to customer door with POS sync.",
    features: ["Cart & checkout flows", "POS/API Integration", "Rider tracking application"],
    icon: "shopping-bag",
  },
  {
    title: "Restaurant Management Systems",
    description: "Advanced operational tools for established brands and multi-branch restaurants.",
    features: ["Supplier & warehouse management", "Multi-branch support", "Centralized admin dashboard"],
    icon: "building-2",
  },
  {
    title: "Analytics & Automation",
    description: "Data-driven insights and automated workflows to streamline operations.",
    features: ["Advanced analytics dashboard", "Customer management profiles", "Automated WhatsApp workflows"],
    icon: "bar-chart-3",
  },
];


export const mainServices = [
  {
    title: "Restaurant Websites & Mobile Applications",
    description: "Custom, high-performance websites and branded customer apps designed to showcase your restaurant and drive direct orders.",
    points: ["Restaurant websites", "Customer ordering apps", "Branded digital presence", "Website + App ecosystem"],
    icon: "monitor-smartphone",
    href: "/services/restaurant-websites-and-apps"
  },
  {
    title: "Restaurant Management Systems (RMS)",
    description: "A centralized dashboard to control every aspect of your restaurant operations across one or multiple locations.",
    points: ["Centralized restaurant dashboard", "Orders & Branches", "Customers & Staff", "Operations & Analytics"],
    icon: "building-2",
    href: "/services/restaurant-management-systems"
  },
  {
    title: "Point of Sale (POS) Systems",
    description: "Modern point-of-sale solutions for seamless billing, order processing, and table management.",
    points: ["Dine-in, Takeaway & Delivery", "Billing & payments", "Tables & KOT", "Customer/order management"],
    icon: "calculator",
    href: "/services/point-of-sale-systems"
  },
  {
    title: "Kitchen Display Systems (KDS)",
    description: "Digital screens that replace paper tickets, organizing your kitchen workflow and preparation queue in real time.",
    points: ["Digital kitchen tickets", "Order queue & Status management", "Preparation workflow", "KOT replacement/digitalization"],
    icon: "chef-hat",
    href: "/services/kitchen-display-systems"
  },
  {
    title: "Online Ordering Systems",
    description: "Commission-free ordering experiences for pickup and delivery, directly integrated with your website and POS.",
    points: ["Direct website & mobile ordering", "Pickup & Delivery", "Menu/customization", "Checkout, payments & order management"],
    icon: "shopping-bag",
    href: "/services/online-ordering-systems"
  },
  {
    title: "Delivery & Fleet Management",
    description: "Tools to manage your own delivery riders, track orders live, and streamline your dispatch operations.",
    points: ["Own rider management", "Live delivery tracking & Dispatch", "Delivery zones & Delivery partners", "Rider assignment & performance"],
    icon: "bike",
    href: "/services/delivery-and-fleet-management"
  },
  {
    title: "Dine-In & Table Management",
    description: "Visual table management to optimize seating, handle open checks, and improve the dine-in guest experience.",
    points: ["Digital floor plan", "Table status & Table orders", "Open checks & Billing", "QR ordering"],
    icon: "armchair",
    href: "/services/dine-in-table-management"
  },
  {
    title: "QR Menu & Self-Ordering",
    description: "Contactless dining experiences allowing guests to view menus and place orders directly from their tables.",
    points: ["Table-specific QR", "Digital menu", "Customer self-ordering", "Dine-in order integration"],
    icon: "qr-code",
    href: "/services/qr-menu-self-ordering"
  }
];

export const supportingServicesCategories = [
  {
    title: "Customer & Marketing",
    items: [
      "Customer CRM",
      "Loyalty & Rewards",
      "Promotions & Marketing",
      "Reviews",
      "AI Restaurant Assistant",
      "WhatsApp AI Assistant",
      "WhatsApp Ordering & Automation"
    ]
  },
  {
    title: "Business & Operations",
    items: [
      "Inventory & Supply Management",
      "Reservations",
      "Analytics & Business Intelligence",
      "Multi-Branch Management",
      "Reports",
      "Staff & HR"
    ]
  },
  {
    title: "Digital Growth",
    items: [
      "Local SEO & Google Visibility",
      "Performance Optimization",
      "Gallery & Food Showcases",
      "Events & Announcements"
    ]
  },
  {
    title: "Technical & Infrastructure",
    items: [
      "Integrations & Custom Automation",
      "Hosting & Deployment",
      "Website Maintenance & Support"
    ]
  }
];


export const websiteFeatures = [
  { title: "POS Integration", description: "Sync online orders and menu items directly with your supported POS system.", icon: "credit-card" },
  { title: "Delivery & Rider Tracking", description: "Manage deliveries efficiently with a dedicated application for rider tracking.", icon: "map" },
  { title: "Online Ordering", description: "Seamless cart and checkout flows for direct customer ordering.", icon: "shopping-cart" },
  { title: "Restaurant Management", description: "Advanced operational tools for established brands and multi-branch control.", icon: "briefcase-business" },
  { title: "Admin Panel", description: "Simple dashboard to change pricing, hours, or dishes in under two minutes.", icon: "layout-dashboard" },
  { title: "Interactive Menu Builder", description: "Easily structured content sections for food, drinks, and daily specials.", icon: "list" },
  { title: "Online Reservations", description: "Seamless integration with OpenTable, Resy, or custom calendar systems.", icon: "clock" },
  { title: "AI Restaurant Assistant", description: "Smart chat receptionists to answer ingredients questions and assist with bookings 24/7.", icon: "sparkles" },
  { title: "Google Maps Integration", description: "Embedded, responsive maps to guide guests straight to your front door.", icon: "navigation" },
  { title: "Social Proof & Reviews", description: "Displays for Google Reviews, Yelp stars, and diner testimonials.", icon: "star" },
  { title: "Food & Ambiance Gallery", description: "Beautiful lightbox grids to showcase your plating, interior design, and staff.", icon: "camera" },
  { title: "Events & Announcements", description: "Banners and cards for wine nights, brunch specials, and holiday hours.", icon: "bell" },
  { title: "Newsletter Signups", description: "Integrated forms to grow your email list for marketing and announcements.", icon: "mail" },
  { title: "Warehouse & Supply Management", description: "Keep track of inventory, suppliers, and procurement for your restaurant branches.", icon: "archive" },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Plan Selection",
    description: "We review your operational needs—from reservations to delivery—and select the best package for your restaurant.",
    bullets: ["Workflow assessment", "Package selection", "Feature mapping"],
  },
  {
    step: "02",
    title: "Onboarding & Dashboard Setup",
    description: "We set up your centralized dashboard and begin migrating your menu, pricing, and restaurant details.",
    bullets: ["Dashboard creation", "Menu migration", "Branch setup"],
  },
  {
    step: "03",
    title: "Design & Customization",
    description: "We apply a premium visual system tailored to your brand, ensuring it perfectly captures your dining atmosphere.",
    bullets: ["Visual branding", "Mobile optimization", "Layout customization"],
  },
  {
    step: "04",
    title: "AI & System Integration",
    description: "We connect the core components: online ordering, AI Receptionist, table management, and analytics.",
    bullets: ["Ordering flow", "AI Assistant setup", "Analytics tracking"],
  },
  {
    step: "05",
    title: "Testing & Handover",
    description: "We rigorously test ordering and booking flows and provide a quick walkthrough of your new centralized dashboard.",
    bullets: ["Usability testing", "Order flow checks", "Dashboard training"],
  },
  {
    step: "06",
    title: "Launch & Ongoing Support",
    description: "Your platform goes live in as little as 2 days, backed by our continuous hosting and technical support.",
    bullets: ["Domain connection", "Go-live", "Continuous support"],
  },
];

export const technologyGroups = [
  { title: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { title: "Backend & CMS", items: ["Node.js", "Express.js", "REST APIs", "Sanity CMS", "Payload CMS", "Strapi", "WordPress API"] },
  { title: "Databases & Storage", items: ["MongoDB", "PostgreSQL", "Supabase", "Prisma ORM", "Redis"] },
  { title: "AI & Automation", items: ["Gemini AI", "OpenAI API", "AI Chat Assistants", "Automated Booking", "Dietary Analysis", "Customer Reply Bots"] },
  { title: "Tools & Integrations", items: ["Git", "GitHub", "Vercel", "Cloudflare", "Cloudinary", "OpenTable API", "Resy API", "Google Business Profile"] },
];

export const faqs = [
  {
    question: "How long does it take to launch my restaurant platform?",
    answer: "With our streamlined setup, we can launch your digital platform and website in as little as 2 to 7 days depending on your selected tier. Custom enterprise solutions typically take 1 to 2+ weeks.",
  },
  {
    question: "What is the difference between Managed Plans and One-Time Ownership?",
    answer: "Managed Plans (Monthly/Yearly) include zero upfront fees, cloud hosting, and ongoing technical support for as long as you are subscribed. One-Time Ownership means you pay a single fee to own the system outright, with self-managed hosting.",
  },
  {
    question: "Do you provide a dashboard to manage my restaurant?",
    answer: "Yes. Every package includes access to a centralized dashboard where you can manage your menus, track online and dine-in orders, control inventory, and monitor analytics all from one screen.",
  },
  {
    question: "Does your system handle online delivery and takeaway orders?",
    answer: "Absolutely. The platform features native cart functionality, product modifiers, and a direct ordering flow. You receive delivery and takeaway requests straight into your dashboard or via WhatsApp.",
  },
  {
    question: "Can I get a custom mobile app for my restaurant?",
    answer: "Yes, we offer fully branded, cross-platform iOS and Android customer apps. These apps sync directly with your restaurant's core management system to offer push notifications and loyalty features.",
  },
];

export const leftFaqs = [
  {
    question: "Can your system handle multiple restaurant branches?",
    answer: "Yes. Our Growth packages support multi-branch management. You can control branch-specific menus, process orders per location, and view centralized analytics.",
  },
  {
    question: "What does the AI Restaurant Assistant do?",
    answer: "The AI assistant acts as a 24/7 receptionist. It answers guest queries regarding business hours, location, and menu ingredients, while intelligently guiding them to book tables or place orders.",
  },
  {
    question: "Are there any hidden costs or setup fees?",
    answer: "No. If you choose our Managed Monthly or Yearly plans, there are zero upfront setup fees. You simply pay the subscription rate to keep your platform active, hosted, and fully supported.",
  },
];

export const pricingPackages = [
  {
    name: "Silver",
    timeline: "",
    platforms: {
      website: {
        price: "PKR 2,999",
        priceSuffix: "/mo",
        originalPrice: "",
        pricingOptions: {
          monthly: { price: "PKR 2,999", suffix: "/mo" },
          yearly: { price: "PKR 32,389", suffix: "/year", monthlyEquivalent: "≈ PKR 2,699/month", note: "SAVE ≈ 10%" },
          onetime: { price: "Quoted by scope", suffix: "", oneTimeOwnership: true }
        },
        summary: "Everything you need to get online, accept direct orders, manage reservations, and handle essential restaurant operations.",
        includes: [
          "Restaurant Website",
          "Online Ordering",
          "Reservations",
          "WhatsApp Integration",
          "Google Maps",
          "Basic Admin Panel",
          "Order Management",
          "Delivery & Takeaway",
          "Reports & Analytics",
          "1 Branch"
        ],
        modalDetails: [
          {
            category: "Website",
            features: ["Custom restaurant website", "Home", "Menu", "Offers", "About", "Gallery", "Reservation", "Contact", "Cart", "Checkout", "Restaurant information", "Opening hours"]
          },
          {
            category: "Menu",
            features: ["Categories", "Food images", "Prices", "Descriptions", "Basic availability", "Product information", "Menu organization"]
          },
          {
            category: "Online Ordering",
            features: ["Online ordering", "Cart", "Checkout", "Delivery ordering", "Takeaway ordering", "Customer information", "Order confirmation", "Basic order status"]
          },
          {
            category: "Delivery & Takeaway",
            features: ["Delivery order management", "Takeaway order management", "Customer delivery information", "Delivery address", "Pickup information", "Order status", "Delivery/takeaway filtering"]
          },
          {
            category: "Reservations",
            features: ["Reservation form", "Guest information", "Date and time selection", "Party size", "Reservation management", "Reservation status", "Basic reservation overview"]
          },
          {
            category: "Admin Panel",
            features: ["Dashboard", "Menu management", "Price updates", "Offers", "Website content", "Order management", "Reservation management", "Basic customer/order information"]
          },
          {
            category: "Reports & Analytics",
            features: ["Revenue", "Orders", "Average order value", "Order trends", "Basic order-source information", "Sales report", "Product sales", "Basic payment report"]
          },
          {
            category: "SEO & Performance",
            features: ["Mobile-first design", "Image optimization", "Technical SEO setup", "Restaurant structured data", "Basic local SEO setup", "Performance optimization"]
          },
          {
            category: "Deployment",
            features: ["Hosting", "SSL", "Domain connection", "Production deployment", "Single-branch configuration"]
          },
          {
            category: "Support",
            features: ["Ongoing technical support while subscribed"]
          }
        ]
      },
      website_app: {
        price: "PKR 4,999",
        priceSuffix: "/mo",
        originalPrice: "",
        pricingOptions: {
          monthly: { price: "PKR 4,999", suffix: "/mo" },
          yearly: { price: "PKR 53,989", suffix: "/year", monthlyEquivalent: "≈ PKR 4,499/month", note: "SAVE ≈ 10%" },
          onetime: { price: "Quoted by scope", suffix: "", oneTimeOwnership: true }
        },
        summary: "Everything you need to get online, accept direct orders, manage reservations, and handle essential restaurant operations, plus a mobile app.",
        includes: [
          "Restaurant Website",
          "Online Ordering",
          "Reservations",
          "WhatsApp Integration",
          "Google Maps",
          "Basic Admin Panel",
          "Order Management",
          "Delivery & Takeaway",
          "Reports & Analytics",
          "1 Branch",
          "Branded iOS & Android application",
          "Customer accounts",
          "Mobile ordering",
          "Order history",
          "Push notifications"
        ],
        modalDetails: [
          {
            category: "Website",
            features: ["Custom restaurant website", "Home", "Menu", "Offers", "About", "Gallery", "Reservation", "Contact", "Cart", "Checkout", "Restaurant information", "Opening hours"]
          },
          {
            category: "Menu",
            features: ["Categories", "Food images", "Prices", "Descriptions", "Basic availability", "Product information", "Menu organization"]
          },
          {
            category: "Online Ordering",
            features: ["Online ordering", "Cart", "Checkout", "Delivery ordering", "Takeaway ordering", "Customer information", "Order confirmation", "Basic order status"]
          },
          {
            category: "Delivery & Takeaway",
            features: ["Delivery order management", "Takeaway order management", "Customer delivery information", "Delivery address", "Pickup information", "Order status", "Delivery/takeaway filtering"]
          },
          {
            category: "Reservations",
            features: ["Reservation form", "Guest information", "Date and time selection", "Party size", "Reservation management", "Reservation status", "Basic reservation overview"]
          },
          {
            category: "Admin Panel",
            features: ["Dashboard", "Menu management", "Price updates", "Offers", "Website content", "Order management", "Reservation management", "Basic customer/order information"]
          },
          {
            category: "Reports & Analytics",
            features: ["Revenue", "Orders", "Average order value", "Order trends", "Basic order-source information", "Sales report", "Product sales", "Basic payment report"]
          },
          {
            category: "SEO & Performance",
            features: ["Mobile-first design", "Image optimization", "Technical SEO setup", "Restaurant structured data", "Basic local SEO setup", "Performance optimization"]
          },
          {
            category: "Deployment",
            features: ["Hosting", "SSL", "Domain connection", "Production deployment", "Single-branch configuration"]
          },
          {
            category: "Support",
            features: ["Ongoing technical support while subscribed"]
          },
          {
            category: "Mobile App",
            features: ["Branded iOS & Android customer app", "Online ordering", "Order history", "Push notifications", "App deployment assistance"]
          }
        ]
      }
    }
  },
  {
    name: "Golden",
    featured: true,
    timeline: "",
    platforms: {
      website: {
        price: "PKR 5,999",
        priceSuffix: "/mo",
        originalPrice: "",
        pricingOptions: {
          monthly: { price: "PKR 5,999", suffix: "/mo" },
          yearly: { price: "PKR 64,789", suffix: "/year", monthlyEquivalent: "≈ PKR 5,399/month", note: "SAVE ≈ 10%" },
          onetime: { price: "Quoted by scope", suffix: "", oneTimeOwnership: true }
        },
        summary: "A connected restaurant operating system for POS, kitchen, dine-in, inventory, customers, and multiple branches.",
        includes: [
          "Everything in Silver",
          "POS",
          "KDS",
          "Dine-In & Table Management",
          "QR Menu & Self-Ordering",
          "Inventory & Supply",
          "Customer CRM",
          "Advanced Analytics",
          "Reviews",
          "Up to 3 Branches"
        ],
        modalDetails: [
          {
            category: "Restaurant Operations",
            features: ["Restaurant management dashboard", "Centralized order management", "POS", "KDS", "Dine-in management", "Takeaway management", "Delivery management", "Table management", "QR ordering", "Order status management"]
          },
          {
            category: "POS & KDS",
            features: ["Dine-in, Takeaway & Delivery POS", "Product catalog & Categories", "Modifiers & Add-ons", "Hold/resume orders", "KOT & Bill generation", "Kitchen tickets & Order details", "Kitchen timing & Order priority"]
          },
          {
            category: "Dine-In & QR Menu",
            features: ["Floor plan & Table management", "Table status", "Waiter assignment", "Table transfer/merging", "Digital QR menu", "Table-specific QR codes", "Customer self-ordering"]
          },
          {
            category: "Inventory & Supply",
            features: ["Ingredient stock & levels", "Low-stock alerts", "Recipe mapping", "Supplier profiles", "Purchase orders", "Receiving", "Waste records"]
          },
          {
            category: "Customer Management",
            features: ["Customer profiles", "Order history", "Total spending", "Average order value", "Favorite products", "Repeat customer tracking", "Basic customer segmentation", "Reviews management"]
          },
          {
            category: "Advanced Analytics",
            features: ["Revenue & Orders", "Sales trends", "Best sellers & Product revenue", "New vs Repeat customers", "Customer value", "Channel performance", "Branch performance"]
          },
          {
            category: "Branch Management",
            features: ["Up to 3 Branches", "Branch information", "Branch menus & orders", "Branch tables & inventory", "Branch analytics"]
          },
          {
            category: "SEO & Performance",
            features: ["Advanced local SEO", "Restaurant schema", "Google visibility setup", "Image/code optimization", "Performance optimization"]
          },
          {
            category: "Deployment & Support",
            features: ["Hosting", "SSL", "Deployment", "Monitoring", "Technical maintenance", "Bug fixes", "Ongoing support while subscribed"]
          }
        ]
      },
      website_app: {
        price: "PKR 9,999",
        priceSuffix: "/mo",
        originalPrice: "",
        pricingOptions: {
          monthly: { price: "PKR 9,999", suffix: "/mo" },
          yearly: { price: "PKR 107,989", suffix: "/year", monthlyEquivalent: "≈ PKR 8,999/month", note: "SAVE ≈ 10%" },
          onetime: { price: "Quoted by scope", suffix: "", oneTimeOwnership: true }
        },
        summary: "A connected restaurant operating system for POS, kitchen, dine-in, inventory, customers, and multiple branches, plus a mobile app.",
        includes: [
          "Everything in Silver",
          "POS",
          "KDS",
          "Dine-In & Table Management",
          "QR Menu & Self-Ordering",
          "Inventory & Supply",
          "Customer CRM",
          "Advanced Analytics",
          "Reviews",
          "Up to 3 Branches",
          "Branded iOS & Android application",
          "Customer accounts",
          "Mobile ordering",
          "Order history",
          "Push notifications"
        ],
        modalDetails: [
          {
            category: "Restaurant Operations",
            features: ["Restaurant management dashboard", "Centralized order management", "POS", "KDS", "Dine-in management", "Takeaway management", "Delivery management", "Table management", "QR ordering", "Order status management"]
          },
          {
            category: "POS & KDS",
            features: ["Dine-in, Takeaway & Delivery POS", "Product catalog & Categories", "Modifiers & Add-ons", "Hold/resume orders", "KOT & Bill generation", "Kitchen tickets & Order details", "Kitchen timing & Order priority"]
          },
          {
            category: "Dine-In & QR Menu",
            features: ["Floor plan & Table management", "Table status", "Waiter assignment", "Table transfer/merging", "Digital QR menu", "Table-specific QR codes", "Customer self-ordering"]
          },
          {
            category: "Inventory & Supply",
            features: ["Ingredient stock & levels", "Low-stock alerts", "Recipe mapping", "Supplier profiles", "Purchase orders", "Receiving", "Waste records"]
          },
          {
            category: "Customer Management",
            features: ["Customer profiles", "Order history", "Total spending", "Average order value", "Favorite products", "Repeat customer tracking", "Basic customer segmentation", "Reviews management"]
          },
          {
            category: "Advanced Analytics",
            features: ["Revenue & Orders", "Sales trends", "Best sellers & Product revenue", "New vs Repeat customers", "Customer value", "Channel performance", "Branch performance"]
          },
          {
            category: "Branch Management",
            features: ["Up to 3 Branches", "Branch information", "Branch menus & orders", "Branch tables & inventory", "Branch analytics"]
          },
          {
            category: "SEO & Performance",
            features: ["Advanced local SEO", "Restaurant schema", "Google visibility setup", "Image/code optimization", "Performance optimization"]
          },
          {
            category: "Deployment & Support",
            features: ["Hosting", "SSL", "Deployment", "Monitoring", "Technical maintenance", "Bug fixes", "Ongoing support while subscribed"]
          },
          {
            category: "Mobile App",
            features: ["Branded iOS & Android customer app", "Online ordering", "Order history", "Push notifications", "App deployment assistance"]
          }
        ]
      }
    }
  },
  {
    name: "Diamond",
    timeline: "",
    platforms: {
      website: {
        price: "PKR 9,999",
        priceSuffix: "/mo",
        originalPrice: "",
        pricingOptions: {
          monthly: { price: "PKR 9,999", suffix: "/mo" },
          yearly: { price: "PKR 107,989", suffix: "/year", monthlyEquivalent: "≈ PKR 8,999/month", note: "SAVE ≈ 10%" },
          onetime: { price: "Quoted by scope", suffix: "", oneTimeOwnership: true }
        },
        summary: "Advanced restaurant management with AI, payments, marketing, loyalty, finance, staff management, and up to six branches.",
        includes: [
          "Everything in Golden",
          "AI Assistant",
          "Payment Integration",
          "Promotions & Offers",
          "Marketing & Campaigns",
          "Loyalty & Rewards",
          "HR & Staff",
          "Finance & P&L",
          "Website Builder",
          "Up to 6 Branches"
        ],
        modalDetails: [
          {
            category: "AI Restaurant Assistant",
            features: ["Restaurant FAQs", "Menu questions", "Opening hours", "Location & Reservation assistance", "Basic ordering guidance", "Sales & Customer insights", "Operational alerts"]
          },
          {
            category: "Marketing & Loyalty",
            features: ["Promotions & Offers", "Discount codes & Combo deals", "Campaign management", "Target customer segments", "Marketing analytics", "Loyalty points & Rewards", "Customer tiers", "Referral rewards"]
          },
          {
            category: "HR & Staff",
            features: ["Staff profiles & Contact information", "Roles (Manager, Waiter, Kitchen, etc.)", "Granular permissions", "Staff activity tracking"]
          },
          {
            category: "Finance & P&L",
            features: ["Revenue tracking by channel", "Payment tracking (Cash, Card, Online)", "Refunds & Discounts", "Expense tracking", "COGS", "Gross & Operating profit", "Profit margin"]
          },
          {
            category: "Website Builder",
            features: ["Manage Homepage, Menu, Offers, About", "Brand colors & Typography", "Publishing workflow", "Website SEO (Page titles, Meta descriptions, URLs)"]
          },
          {
            category: "Integrations & Payments",
            features: ["Payment gateway connections", "Online payments", "WhatsApp Business/API", "Maps & Delivery providers", "External APIs"]
          },
          {
            category: "Branch Management",
            features: ["Up to 6 Branches", "Centralized View", "Branch-specific pricing", "Branch orders, tables, inventory", "Branch delivery & analytics"]
          },
          {
            category: "Advanced Analytics",
            features: ["Operational performance", "Kitchen & Delivery performance", "Customer retention & value", "Marketing campaign conversion", "Financial profitability"]
          },
          {
            category: "Deployment & Support",
            features: ["Managed platform hosting", "SSL & Deployment", "Monitoring & Security updates", "Technical maintenance & Bug fixes", "Platform management support", "Ongoing support while subscribed"]
          }
        ]
      },
      website_app: {
        price: "PKR 15,999",
        priceSuffix: "/mo",
        originalPrice: "",
        pricingOptions: {
          monthly: { price: "PKR 15,999", suffix: "/mo" },
          yearly: { price: "PKR 172,789", suffix: "/year", monthlyEquivalent: "≈ PKR 14,399/month", note: "SAVE ≈ 10%" },
          onetime: { price: "Quoted by scope", suffix: "", oneTimeOwnership: true }
        },
        summary: "Advanced restaurant management with AI, payments, marketing, loyalty, finance, staff management, and up to six branches, plus a mobile app.",
        includes: [
          "Everything in Golden",
          "AI Assistant",
          "Payment Integration",
          "Promotions & Offers",
          "Marketing & Campaigns",
          "Loyalty & Rewards",
          "HR & Staff",
          "Finance & P&L",
          "Website Builder",
          "Up to 6 Branches",
          "Branded iOS & Android application",
          "Customer accounts",
          "Mobile ordering",
          "Order history",
          "Push notifications",
          "Payment integration",
          "Loyalty"
        ],
        modalDetails: [
          {
            category: "AI Restaurant Assistant",
            features: ["Restaurant FAQs", "Menu questions", "Opening hours", "Location & Reservation assistance", "Basic ordering guidance", "Sales & Customer insights", "Operational alerts"]
          },
          {
            category: "Marketing & Loyalty",
            features: ["Promotions & Offers", "Discount codes & Combo deals", "Campaign management", "Target customer segments", "Marketing analytics", "Loyalty points & Rewards", "Customer tiers", "Referral rewards"]
          },
          {
            category: "HR & Staff",
            features: ["Staff profiles & Contact information", "Roles (Manager, Waiter, Kitchen, etc.)", "Granular permissions", "Staff activity tracking"]
          },
          {
            category: "Finance & P&L",
            features: ["Revenue tracking by channel", "Payment tracking (Cash, Card, Online)", "Refunds & Discounts", "Expense tracking", "COGS", "Gross & Operating profit", "Profit margin"]
          },
          {
            category: "Website Builder",
            features: ["Manage Homepage, Menu, Offers, About", "Brand colors & Typography", "Publishing workflow", "Website SEO (Page titles, Meta descriptions, URLs)"]
          },
          {
            category: "Integrations & Payments",
            features: ["Payment gateway connections", "Online payments", "WhatsApp Business/API", "Maps & Delivery providers", "External APIs"]
          },
          {
            category: "Branch Management",
            features: ["Up to 6 Branches", "Centralized View", "Branch-specific pricing", "Branch orders, tables, inventory", "Branch delivery & analytics"]
          },
          {
            category: "Advanced Analytics",
            features: ["Operational performance", "Kitchen & Delivery performance", "Customer retention & value", "Marketing campaign conversion", "Financial profitability"]
          },
          {
            category: "Deployment & Support",
            features: ["Managed platform hosting", "SSL & Deployment", "Monitoring & Security updates", "Technical maintenance & Bug fixes", "Platform management support", "Ongoing support while subscribed"]
          },
          {
            category: "Mobile App",
            features: ["Branded iOS & Android customer app", "Customer accounts", "Mobile ordering", "Order history", "Order status", "Push notifications", "Reservations", "Loyalty", "Payment integration", "App deployment assistance"]
          }
        ]
      }
    }
  }
];

export const contactFaqs = [
  {
    question: "What happens after I request a demo or consultation?",
    answer: "We will review your requirements and schedule a brief discovery call to demonstrate how our restaurant platform, AI tools, and dashboard can streamline your operations and drive online sales.",
  },
  {
    question: "Can you migrate our existing menu and data?",
    answer: "Yes. Our onboarding team can help migrate your existing menu items, prices, and high-quality photography directly into the new dashboard so you can launch effortlessly.",
  },
  {
    question: "Do you build platforms for single-location restaurants or food trucks?",
    answer: "Yes. We design and build systems for operations of all sizes—whether you're a single neighborhood bistro, a local food truck, or an expansive multi-location franchise.",
  },
];

export const aboutValues = [
  "Unified technology that brings your entire restaurant operation into one clear dashboard.",
  "Smart automation that handles routine guest interactions and bookings 24/7.",
  "Transparent, manageable pricing with zero upfront costs for a premium digital platform.",
];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "template-1",
    title: "Template 1",
    category: "Restaurant",
    clientType: "Fast Food",
    shortDescription: "A vibrant template showcasing mouth-watering items, exclusive deals, and a fiery brand identity.",
    overview: "This template is perfect for a bold digital presence to showcase premium offerings.",
    industry: "Restaurant",
    technologies: ["Next.js", "Tailwind CSS", "Animations", "Performance"],
    features: ["Bold visual galleries", "Online menu", "Special offers", "Mobile-first design"],
    image: "/images/Template (1).png",
    imageAlt: "Template 1 website preview",
    liveHref: "https://meldough.vercel.app/",
    performance: "97/100 Core Web Vitals score",
    results: ["Increased customer engagement", "Higher deal conversions", "Stronger brand identity"],
    challenge: "Translating a bold physical brand into an engaging digital platform.",
    goals: ["Showcase premium items", "Highlight special deals", "Elevate digital brand perception"],
    design: "Bold aesthetics with dynamic layouts and high-contrast imagery.",
    development: "Implemented fast-loading visual assets to maintain performance while delivering a rich, energetic experience.",
  },
  {
    slug: "template-2",
    title: "Template 2",
    category: "Restaurant",
    clientType: "Fast Food",
    shortDescription: "A modern template designed for quick service, signature dishes, and a seamless online ordering experience.",
    overview: "This template offers a high-energy platform to communicate dynamic menus and facilitate quick orders.",
    industry: "Restaurant",
    technologies: ["Next.js", "Tailwind CSS", "Online Ordering", "Performance"],
    features: ["Dynamic menu", "Online ordering flow", "Mobile-optimized experience", "Fast load times"],
    image: "/images/Template (2).png",
    imageAlt: "Template 2 website preview",
    liveHref: "https://imbisspk.vercel.app/",
    performance: "98/100 Core Web Vitals score",
    results: ["Increased online orders", "Improved menu loading speed", "Streamlined mobile experience"],
    challenge: "Structuring a fast-food menu in a way that remains incredibly fast and readable on mobile devices.",
    goals: ["Optimize menu readability", "Drive online pickup orders", "Enhance user experience"],
    design: "Vibrant, energetic design with bold colors and clear navigation for quick ordering.",
    development: "Focus placed on optimizing image delivery for fast performance and building a seamless ordering experience.",
  },
  {
    slug: "cs-fire-burgers",
    title: "Template 3",
    category: "Restaurant",
    clientType: "Fast Food",
    shortDescription: "A vibrant burger joint website showcasing mouth-watering burgers, exclusive deals, and a fiery brand identity.",
    overview: "CS-Fire Burgers required a bold digital presence to match their fiery brand and showcase their premium burger offerings.",
    industry: "Restaurant",
    technologies: ["Next.js", "Tailwind CSS", "Animations", "Performance"],
    features: ["Bold visual galleries", "Online menu", "Special offers", "Mobile-first design"],
    image: "/images/cs-fire-burgers.avif",
    imageAlt: "CS-Fire Burgers website preview highlighting fiery burgers and deals.",
    liveHref: "https://CS-Fire.vercel.app",
    performance: "97/100 Core Web Vitals score",
    results: ["Increased customer engagement", "Higher deal conversions", "Stronger brand identity"],
    challenge: "Translating a bold, fiery physical brand into an engaging digital platform.",
    goals: ["Showcase premium burgers", "Highlight special deals", "Elevate digital brand perception"],
    design: "Bold, fiery aesthetics with dynamic layouts and high-contrast imagery.",
    development: "Implemented fast-loading visual assets to maintain performance while delivering a rich, energetic experience.",
  },
  {
    slug: "hambrg",
    title: "Template 4",
    category: "Restaurant",
    clientType: "Fast Food",
    shortDescription: "A dynamic fast-food restaurant website emphasizing quick service, signature burgers, and a seamless online ordering experience.",
    overview: "Hambrg needed a high-energy platform to communicate their dynamic menu, facilitate quick orders, and highlight their signature burgers.",
    industry: "Restaurant",
    technologies: ["Next.js", "Tailwind CSS", "Online Ordering", "Performance"],
    features: ["Dynamic menu", "Online ordering flow", "Mobile-optimized experience", "Fast load times"],
    image: "/images/hambrg-fastfoods.avif",
    imageAlt: "Hambrg website preview showing fast food and signature burgers.",
    liveHref: "https://hambrg.vercel.app/",
    performance: "98/100 Core Web Vitals score",
    results: ["Increased online orders", "Improved menu loading speed", "Streamlined mobile experience"],
    challenge: "Structuring a fast-food menu in a way that remains incredibly fast and readable on mobile devices.",
    goals: ["Optimize menu readability", "Drive online pickup orders", "Enhance user experience"],
    design: "Vibrant, energetic design with bold colors and clear navigation for quick ordering.",
    development: "Focus placed on optimizing image delivery for fast performance and building a seamless ordering experience.",
  }
];

export const portfolioFilters = [
  "All",
  "Restaurant",
  "Hotels",
  "Bar",
] as const;
