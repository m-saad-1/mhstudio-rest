"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { useEffect, useState } from "react";

export function AnalyticsWrapper() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Defer loading analytics to improve initial page load performance
    const timer = setTimeout(() => setShouldLoad(true), 3500);
    
    // Also load immediately on first user interaction
    const handleInteraction = () => setShouldLoad(true);
    window.addEventListener("scroll", handleInteraction, { once: true, passive: true });
    window.addEventListener("click", handleInteraction, { once: true, passive: true });
    window.addEventListener("touchstart", handleInteraction, { once: true, passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      <GoogleAnalytics gaId="G-G1NMQYD8EJ" />
      <Analytics />
    </>
  );
}
