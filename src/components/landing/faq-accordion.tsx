"use client";

import type { CSSProperties } from "react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <article
            className="group motion-card scroll-reveal rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60"
            data-reveal="right"
            key={item.question}
            style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
          >
            <button
              aria-controls={panelId}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold text-slate-950"
              id={buttonId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
            >
              <span>{item.question}</span>
              <span
                className={`accent-soft accent-text grid size-8 shrink-0 place-items-center rounded-full transition duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
              id={panelId}
              role="region"
            >
              <div className="overflow-hidden">
                <p className="mt-5 text-sm leading-7 text-slate-600">{item.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
