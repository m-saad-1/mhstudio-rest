"use client";

import ChevronDown from "lucide-react/dist/esm/icons/chevron-down";
import { useState, useId, memo } from "react";

type FAQ = { question: string; answer: string };
type FaqAccordionProps = { items: FAQ[]; columns?: 1 | 2 };

export const FaqAccordion = memo(function FaqAccordion({ items, columns = 1 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(-1);
  const id = useId();
  return (
    <div className={`faq-grid ${columns === 2 ? "faq-grid-wide" : ""}`}>
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div key={item.question} className="surface-card overflow-hidden">
            <button type="button" id={`${id}-question-${index}`} onClick={() => setOpenIndex(isOpen ? -1 : index)} className="faq-question" aria-expanded={isOpen} aria-controls={`${id}-answer-${index}`}>
              <span className="text-base font-semibold text-foreground">{item.question}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-accent-text transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <div id={`${id}-answer-${index}`} role="region" aria-labelledby={`${id}-question-${index}`} hidden={!isOpen}>
              <p className="px-5 pb-5 text-base leading-relaxed text-foreground-body">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
});
