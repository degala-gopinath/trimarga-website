import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICES_LIST, GENERAL_FAQS } from '../data/servicesData';
import { SITE_CONFIG } from '../data/siteConfig';
import DemoCard from '../components/DemoCard';
import FaqAccordion from '../components/FaqAccordion';
import EnquiryForm from '../components/EnquiryForm';
import { pathForCategory, pathStyle } from '../data/paths';

const PROCESS_STEPS = [
  { num: '01', step: 'Consultation', text: 'Tell us about your business, goals and current setup.' },
  { num: '02', step: 'Plan and Quote', text: 'Clear scope, deliverables and pricing before work starts.' },
  { num: '03', step: 'Build / Launch', text: 'We design, set up, connect and launch everything properly.' },
  { num: '04', step: 'Report and Improve', text: 'Simple reporting and ongoing updates as your business grows.' }
];

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = SERVICES_LIST.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedDemo = SITE_CONFIG.demos[service.relatedDemoIndex ?? 0];
  const combinedFaqs = [...service.faqs, ...GENERAL_FAQS.slice(0, 2)];
  const path = pathForCategory(service.category);

  return (
    <div className="text-white" style={pathStyle(service.category)}>
      {/* 1. HERO */}
      <section className="editorial-grid border-b border-white/15 py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em]">
            <Link to="/services" className="text-[#FBAF01] hover:underline">
              Services
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/70">{service.title}</span>
          </div>

          <p
            className="mt-6 inline-flex items-center gap-2.5 border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]"
            style={{ color: 'var(--card-hue)', borderColor: 'var(--card-hue)' }}
          >
            <span className="font-mono">{path.num}</span>
            {path.label}
          </p>

          <h1 className="mt-5 font-display text-[clamp(2.1rem,5vw,3.4rem)] font-semibold text-white leading-[1.08]">
            {service.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            {service.intro}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 btn-primary bg-[#FBAF01] px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0A0907] hover:bg-white"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/work"
              className="btn-ghost inline-flex items-center justify-center border border-white/25 px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] text-white hover:border-[#FBAF01] hover:text-[#FBAF01] transition-colors"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Outreach Landing Form Placement for Business Digital Presence Setup */}
      {service.isOutreachLanding && (
        <section className="border-b border-white/15 py-16 bg-[#110F0C]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block bg-[#FBAF01] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#0A0907]">
                Complete Starter Setup
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Launch your complete online presence together
              </h2>
              <p className="text-base leading-relaxed text-white/80">
                {service.ctaNote}
              </p>
            </div>
            <div className="lg:col-span-7">
              <EnquiryForm preselectedNeed="Complete Setup" />
            </div>
          </div>
        </section>
      )}

      {/* 2. PROBLEM STRIP */}
      <section className="border-b border-white/15 py-14 bg-[#110F0C]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01] mb-6">
            Common Challenges We Fix
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {service.problems.map((pain, idx) => (
              <div key={idx} className="border-l-2 bg-[#0A0907] p-5" style={{ borderColor: 'var(--card-hue)' }}>
                <span className="font-mono text-xs block mb-2" style={{ color: 'var(--card-hue)' }}>0{idx + 1}</span>
                <p className="text-sm leading-relaxed text-white/90">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT IS INCLUDED & 4. WHO IT IS FOR */}
      <section className="border-b border-white/15 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              What is included
            </h2>
            <ul className="mt-6 divide-y divide-white/10 border-t border-b border-white/10">
              {service.included.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5 py-4">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" style={{ color: 'var(--card-hue)' }} />
                  <span className="text-sm sm:text-base text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            {service.honestNote && (
              <div className="mt-8 border-l-4 border-[#FBAF01] bg-[#110F0C] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FBAF01] mb-2">
                  Honest Note
                </p>
                <p className="text-sm leading-relaxed text-white/85">{service.honestNote}</p>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="border border-white/15 bg-[#110F0C] p-7">
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#FBAF01]">
                Who it is for
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/90">
                {service.whoItIsFor}
              </p>
            </div>

            {/* 6. RELATED WORK */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-4">
                Related Live Demo
              </h3>
              <DemoCard demo={relatedDemo} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="border-b border-white/15 py-16 bg-[#110F0C]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-8">
            How it works
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item) => (
              <div key={item.num} className="border border-white/15 bg-[#0A0907] p-6">
                <span className="font-mono text-xs font-bold text-[#FBAF01]">{item.num}</span>
                <h3 className="mt-2 text-base font-bold text-white">{item.step}</h3>
                <p className="mt-2 text-sm text-white/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="border-b border-white/15 py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-10">
            Frequently asked questions
          </h2>
          <FaqAccordion items={combinedFaqs} />
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="border-l-4 border-[#FBAF01] bg-[#110F0C] border border-white/15 p-8 sm:p-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Ready to start? Tell us about your business.
              </h2>
              {service.ctaNote && (
                <p className="mt-2 text-sm text-white/80">{service.ctaNote}</p>
              )}
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
