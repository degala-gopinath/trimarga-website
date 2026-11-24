import React, { useState } from 'react';

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-white/15">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className={`border-b border-white/15 transition-colors duration-300 ${
              isOpen ? 'bg-white/[0.02]' : 'hover:bg-white/[0.015]'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="group flex w-full items-center justify-between gap-6 px-1 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="flex items-baseline gap-4">
                <span
                  className={`font-mono text-xs transition-colors ${
                    isOpen ? 'text-[#FBAF01]' : 'text-white/30'
                  }`}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <span
                  className={`text-base font-bold transition-colors sm:text-lg ${
                    isOpen ? 'text-[#FBAF01]' : 'text-white group-hover:text-[#FBAF01]'
                  }`}
                >
                  {item.q}
                </span>
              </span>

              {/* A single plus that rotates into a cross */}
              <span
                className={`relative grid h-7 w-7 shrink-0 place-items-center border transition-colors ${
                  isOpen
                    ? 'border-[#FBAF01] bg-[#FBAF01]/10'
                    : 'border-white/20 group-hover:border-[#FBAF01]'
                }`}
                aria-hidden="true"
              >
                <span className={`faq-sign ${isOpen ? 'is-open' : ''}`}>
                  <span className="absolute left-1/2 top-1/2 block h-[1.5px] w-3 -translate-x-1/2 -translate-y-1/2 bg-[#FBAF01]" />
                  <span className="absolute left-1/2 top-1/2 block h-3 w-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-[#FBAF01]" />
                </span>
              </span>
            </button>

            {/* Height animates from 0fr to 1fr instead of snapping */}
            <div className={`faq-panel ${isOpen ? 'is-open' : ''}`}>
              <div>
                <p className="pb-6 pl-1 pr-12 text-sm leading-relaxed text-white/80 sm:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
