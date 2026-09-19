const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "src/data/site-content.ts");
let content = fs.readFileSync(filePath, "utf-8");

const newPackages = `export const pricingPackages = [
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
];`;

const startIndex = content.indexOf("export const pricingPackages = [");
const endIndex = content.indexOf("export const contactFaqs = [");

if (startIndex !== -1 && endIndex !== -1) {
  content = content.slice(0, startIndex) + newPackages + "\n\n" + content.slice(endIndex);
  fs.writeFileSync(filePath, content, "utf-8");
  console.log("Successfully updated pricing packages!");
} else {
  console.log("Failed to find start/end indices");
}
