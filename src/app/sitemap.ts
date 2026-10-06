import type { MetadataRoute } from "next";
import { portfolioItems } from "@/data/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const now = new Date();

  return [
    "",
    "/templates",
    "/services",
    "/process",
    "/about",
    "/pricing",
    "/contact",
    "/privacy",
    "/terms",
    ...portfolioItems.map((item) => `/case-study/${item.slug}`),
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
  }));
}
