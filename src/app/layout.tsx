import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MhStudio | Premium Restaurant Websites & AI Solutions",
    template: "%s | MhStudio",
  },
  description:
    "MhStudio designs and develops high-performance, conversion-focused websites for modern restaurants, featuring online menus, digital reservations, and custom restaurant AI assistants.",
  keywords: [
    "MhStudio",
    "restaurant web development",
    "online menu design",
    "restaurant reservation system",
    "restaurant AI receptionist",
    "restaurant web design",
  ],
  openGraph: {
    title: "MhStudio | Premium Restaurant Websites & AI Solutions",
    description:
      "High-performance, conversion-focused websites for modern restaurants, featuring online menus, digital reservations, and custom restaurant AI assistants.",
    type: "website",
  },
  icons: {
    icon: "/mh_logo.png",
    shortcut: "/mh_logo.png",
    apple: "/mh_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MhStudio",
              description: "Premium websites, online menus, and AI-powered booking systems for modern restaurants.",
              url: "https://mhstudio.com",
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full bg-background text-foreground">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.18)_0%,_rgba(245,158,11,0.02)_58%,_transparent_80%)] blur-[120px]" />
          <div className="absolute bottom-[-10rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.14)_0%,_rgba(245,158,11,0.02)_58%,_transparent_80%)] blur-[160px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.04]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%,rgba(255,255,255,0.01))]" />
        </div>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-amber-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-950"
        >
          Skip to content
        </a>
        <div className="flex min-h-full flex-col">
          <SiteHeader />
          <main id="main-content" className="flex-1 pt-24">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
      <GoogleAnalytics gaId="G-G1NMQYD8EJ" />
      <Analytics />
    </html>
  );
}
