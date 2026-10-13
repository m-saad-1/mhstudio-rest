"use client";

import { GoogleAnalytics, sendGAEvent } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { useEffect } from "react";
import { connectAnalytics } from "@/lib/analytics";

export function AnalyticsProviders() {
  useEffect(() => {
    window.dataLayer ??= [];
    connectAnalytics(sendGAEvent);
  }, []);

  return <><GoogleAnalytics gaId="G-G1NMQYD8EJ" /><Analytics /></>;
}
