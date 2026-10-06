"use client";

import { useMemo, useState } from "react";
import { portfolioFilters, type PortfolioItem } from "@/data/site-content";
import { MockupFrame } from "@/components/marketing/mockup-frame";

type PortfolioFilterGridProps = {
  items: PortfolioItem[];
};

export function PortfolioFilterGrid({ items }: PortfolioFilterGridProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof portfolioFilters)[number]>("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return items;
    }

    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  return (
    <div className="space-y-8">


      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item) => (
          <MockupFrame key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
