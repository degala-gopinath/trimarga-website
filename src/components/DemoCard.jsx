import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function DemoCard({ demo }) {
  return (
    <a
      href={demo.url}
      target="_blank"
      rel="noreferrer"
      data-cursor="Open demo"
      className="spot tilt group flex flex-col justify-between overflow-hidden border border-white/15 bg-[#110F0C] transition-all duration-500 hover:border-[#FBAF01]/60 hover:shadow-[0_22px_60px_rgba(0,0,0,.6)]"
      style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
    >
      <div>
        {/* Browser chrome */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#0A0907] px-4 py-3">
          <div className="flex min-w-0 items-center gap-2.5">
            {/* Traffic lights */}
            <span className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-white/15 transition-colors duration-500 group-hover:bg-[#FBAF01]/70" />
              <span className="h-2 w-2 rounded-full bg-white/15 transition-colors duration-500 group-hover:bg-[#FBAF01]/40" />
              <span className="h-2 w-2 rounded-full bg-white/15 transition-colors duration-500 group-hover:bg-[#FBAF01]/20" />
            </span>

            <span className="truncate rounded-sm bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-white/55">
              {demo.domainLabel}
            </span>
          </div>

          <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-white/50 transition-colors group-hover:text-[#FBAF01]">
            <ArrowUpRight className="nudge h-3.5 w-3.5" />
          </span>
        </div>

        {/* Preview panel */}
        <div className="relative overflow-hidden border-b border-white/10 bg-[#0A0907] p-6">
          {/* Accent wash that blooms on hover */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#FBAF01]/[0.07] blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-[#FBAF01]/[0.14]"
          />

          <div
            className="relative border border-white/10 bg-gradient-to-br from-[#171410] to-[#0C0A08] p-5 transition-transform duration-700 group-hover:scale-[1.02]"
            style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#FBAF01]">
                {demo.businessType}
              </span>
              <span className="h-2 w-2 shrink-0 rotate-45 bg-[#FBAF01] transition-transform duration-700 group-hover:rotate-[135deg]" />
            </div>

            <div className="mt-4 space-y-2">
              <div className="font-serif text-lg font-bold text-white">
                {demo.title}
              </div>
              <div className="h-px w-12 bg-[#FBAF01] transition-all duration-700 group-hover:w-24" />
            </div>

            <p className="mt-4 text-xs leading-relaxed text-white/65">
              {demo.summary}
            </p>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="flex items-center justify-between bg-[#110F0C] px-6 py-4">
        <span className="text-sm font-bold text-white transition-colors group-hover:text-[#FBAF01]">
          {demo.title}
        </span>

        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/55 transition-colors group-hover:text-white">
          View live
          <ArrowUpRight className="nudge h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  );
}
