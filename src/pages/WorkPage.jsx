import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import DemoCard from '../components/DemoCard';

export default function WorkPage() {
  return (
    <div className="text-white">
      {/* Header */}
      <section className="editorial-grid border-b border-white/15 py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
            Our Work
          </span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
            Website demos - see the quality before you commit.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            These are live demo websites showing our design styles for different business types. Your website will be built in a similar quality, fully customised with your business name, photos, services, prices and contact details.
          </p>
        </div>
      </section>

      {/* 4 Live Demos */}
      <section className="border-b border-white/15 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {SITE_CONFIG.demos.map((demo) => (
              <DemoCard key={demo.index} demo={demo} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="border-l-4 border-[#FBAF01] bg-[#110F0C] border border-white/15 p-8 sm:p-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Want a website customised for your business?
              </h2>
              <p className="mt-2 text-sm text-white/80">
                Tell us about your business and we will share honest next steps and a clear quote.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center justify-center gap-2 btn-primary bg-[#FBAF01] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0A0907] hover:bg-white"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
