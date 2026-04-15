"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

type Item = { id: string; question: string; answer: string };

type AccordionProps = {
  items: Item[];
};

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const baseId = useId();

  return (
    <div className="divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white shadow-sm">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const headerId = `${baseId}-${item.id}-header`;

        return (
          <div key={item.id} className="px-4 py-1 md:px-6">
            <h3>
              <button
                type="button"
                id={headerId}
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-lg font-bold text-navy-900 md:text-xl"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gold-600 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              className="pb-4"
            >
              <p className="text-sm leading-[1.9] text-navy-700 md:text-base md:leading-[1.9]">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
