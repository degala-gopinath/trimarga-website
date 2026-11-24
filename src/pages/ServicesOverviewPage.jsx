import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { SERVICES_LIST, PACKAGES, GENERAL_FAQS } from '../data/servicesData';
import FaqAccordion from '../components/FaqAccordion';

export default function ServicesOverviewPage() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      {/* Header */}
      <section className="editorial-grid border-b border-white/15 py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
            Services Overview
          </span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
            One team for your complete online presence.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            Start with what your business needs most - a website, a Google profile that brings calls, social media that stays active, or ads and search that bring customers. Every service below is also available as part of one monthly plan.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#FBAF01] px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0A0A0A] hover:bg-white transition-colors"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* All 11 Services in Exact Order */}
      <section className="border-b border-white/15 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-px bg-white/15 border border-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_LIST.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group flex flex-col justify-between bg-[#0A0A0A] p-7 hover:bg-[#111111] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-[#FBAF01]">{service.num}</span>
                    <span className="uppercase tracking-wider text-[10px] text-white/45">
                      {service.category}
                    </span>
                  </div>
                  <h2 className="mt-4 text-lg font-bold text-white group-hover:text-[#FBAF01] transition-colors">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {service.shortDesc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white/60 group-hover:text-[#FBAF01]">
                  <span>View Service Page</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Table — Structure Only, Zero Invented Prices */}
      <section className="border-b border-white/15 py-20 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
              Bundled Options
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-white">
              Growth Packages
            </h2>
            <p className="mt-3 text-base text-white/75">
              Structured around your current stage. Request a tailored quote based on your business requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col justify-between bg-[#0A0A0A] p-8 ${
                  pkg.featured ? 'border-2 border-[#FBAF01]' : 'border border-white/15'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#FBAF01]">{pkg.tier}</span>
                    {pkg.featured && (
                      <span className="bg-[#FBAF01] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[#0A0A0A]">
                        Most Selected
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 font-serif text-3xl font-bold text-white">{pkg.name}</h3>
                  <p className="mt-2 text-sm text-white/75">
                    <strong className="text-white">Best for:</strong> {pkg.bestFor}
                  </p>

                  <div className="mt-6 border-t border-white/15 pt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50 mb-4">
                      Includes
                    </p>
                    <ul className="space-y-3.5 text-sm text-white/90">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-[#FBAF01] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`mt-8 block w-full py-3.5 text-center text-xs font-extrabold uppercase tracking-[0.14em] transition-colors ${
                    pkg.featured
                      ? 'bg-[#FBAF01] text-[#0A0A0A] hover:bg-white'
                      : 'border border-white/25 text-white hover:border-[#FBAF01] hover:text-[#FBAF01]'
                  }`}
                >
                  Request Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General FAQ */}
      <section className="border-b border-white/15 py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="font-serif text-3xl font-bold text-white mb-10">
            Frequently asked questions
          </h2>
          <FaqAccordion items={GENERAL_FAQS} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white">
            Ready to start? Tell us about your business.
          </h2>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#FBAF01] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0A0A0A] hover:bg-white transition-colors"
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
