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
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const headerId = `${baseId}-${item.id}-header`;

        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                id={headerId}
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-foreground md:text-lg"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
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
              <p className="text-sm leading-relaxed text-muted md:text-base">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
