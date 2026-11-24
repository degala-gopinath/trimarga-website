import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function DemoCard({ demo }) {
  return (
    <a
      href={demo.url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col justify-between border border-white/15 bg-[#111111] transition-colors hover:border-[#FBAF01]"
    >
      <div>
        {/* Browser Chrome Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#0A0A0A] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] font-bold text-[#FBAF01]">{demo.index}</span>
            <span className="text-white/20">/</span>
            <span className="text-[11px] font-medium text-white/60 truncate max-w-[180px]">
              {demo.domainLabel}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-white/60 group-hover:text-[#FBAF01]">
            <span>Open Demo</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>

        {/* Editorial Thumbnail Preview */}
        <div className="border-b border-white/10 bg-[#0A0A0A] p-6">
          <div className="border border-white/10 bg-[#111111] p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#FBAF01]">
                {demo.businessType}
              </span>
              <span className="h-2 w-2 bg-[#FBAF01]" />
            </div>
            <div className="space-y-2">
              <div className="font-serif text-lg font-bold text-white">
                {demo.title}
              </div>
              <div className="h-[1px] w-12 bg-[#FBAF01]" />
            </div>
            <p className="text-xs leading-relaxed text-white/70">
              {demo.summary}
            </p>
          </div>
        </div>
      </div>

      {/* Caption Bar */}
      <div className="px-6 py-4 flex items-center justify-between bg-[#111111]">
        <span className="text-sm font-bold text-white group-hover:text-[#FBAF01] transition-colors">
          {demo.title}
        </span>
        <span className="text-xs font-semibold text-white/60 group-hover:text-white">
          View Live →
        </span>
      </div>
    </a>
  );
}
