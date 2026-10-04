"use client";

import ChevronDown from "lucide-react/dist/esm/icons/chevron-down";
import { useState, memo } from "react";

type FAQ = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FAQ[];
};

export const FaqAccordion = memo(function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <div key={item.question} className="surface-card overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex min-h-11 w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-foreground sm:text-lg">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="min-h-0">
                <p className="px-5 pb-5 text-sm leading-[1.7] text-foreground-body sm:px-6 sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});
