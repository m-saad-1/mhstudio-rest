"use client";

import { useEffect, useState, type ComponentType } from "react";

export function AnalyticsWrapper() {
  const [Providers, setProviders] = useState<ComponentType | null>(null);

  useEffect(() => {
    let cancelled = false;
    let requested = false;
    let loading = false;
    let idle: number | undefined;
    let fallback: ReturnType<typeof setTimeout> | undefined;

    const load = () => {
      idle = undefined;
      fallback = undefined;
      if (cancelled || loading) return;
      loading = true;
      import("./analytics-providers").then((module) => {
        if (!cancelled) setProviders(() => module.AnalyticsProviders);
      }).catch(() => { loading = false; });
    };

    const schedule = () => {
      if (!requested || document.readyState !== "complete" || loading || idle !== undefined || fallback !== undefined) return;
      if ("requestIdleCallback" in window) idle = window.requestIdleCallback(load, { timeout: 1500 });
      else fallback = setTimeout(load, 0);
    };
    const request = () => { requested = true; schedule(); };
    const timer = setTimeout(request, 3500);
    window.addEventListener("load", schedule, { once: true });
    window.addEventListener("scroll", request, { once: true, passive: true });
    window.addEventListener("click", request, { once: true, passive: true });
    window.addEventListener("touchstart", request, { once: true, passive: true });

    return () => {
      cancelled = true;
      clearTimeout(timer);
      if (idle !== undefined) window.cancelIdleCallback(idle);
      if (fallback !== undefined) clearTimeout(fallback);
      window.removeEventListener("load", schedule);
      window.removeEventListener("scroll", request);
      window.removeEventListener("click", request);
      window.removeEventListener("touchstart", request);
    };
  }, []);

  return Providers ? <Providers /> : null;
}
