"use client";

import dynamic from "next/dynamic";

export const AnimatedCounter = dynamic(() => import("@/components/ui/animated-counter").then((mod) => mod.AnimatedCounter), { ssr: false });
export const FaqAccordion = dynamic(() => import("@/components/ui/faq-accordion").then((mod) => mod.FaqAccordion));
export const MockupFrame = dynamic(() => import("@/components/marketing/mockup-frame").then((mod) => mod.MockupFrame));
