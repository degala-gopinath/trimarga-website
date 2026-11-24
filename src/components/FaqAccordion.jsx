import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-white/15">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="border-b border-white/15">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left group"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#FBAF01] transition-colors">
                {item.q}
              </span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-white/20 text-[#FBAF01] group-hover:border-[#FBAF01]">
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            {isOpen && (
              <div className="pb-6 pr-12">
                <p className="text-sm sm:text-base leading-relaxed text-white/80">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
