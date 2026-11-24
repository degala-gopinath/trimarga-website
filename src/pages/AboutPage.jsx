import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export default function AboutPage() {
  return (
    <div className="text-white">
      {/* Header */}
      <section className="editorial-grid border-b border-white/15 py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
            About Trimarga
          </span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
            The answer for businesses that want to grow online.
          </h1>
          <div className="mt-8 max-w-3xl space-y-5 text-base sm:text-lg leading-relaxed text-white/85">
            <p>
              Marketing today is full of noise - random posts, random ads, no direction. Real growth comes from doing what matters: a website that converts, a Google profile that gets found, content people remember, and ads aimed at real customers. That is what Trimarga builds.
            </p>
            <p>
              Trimarga provides business and digital solutions to help businesses build their online presence, attract customers, and grow. We offer customised digital solutions based on each business's requirements and budget - because a neighbourhood restaurant and an online clothing store do not need the same plan.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-b border-white/15 py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 grid gap-px bg-white/15 border border-white/15 md:grid-cols-2">
          <div className="bg-[#110F0C] p-8 sm:p-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
              Our Mission
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/90">
              To help businesses grow with clarity, confidence and purpose. Every website we build, every profile we set up and every campaign we run is designed to move your business forward.
            </p>
          </div>

          <div className="bg-[#110F0C] p-8 sm:p-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
              Our Vision
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/90">
              To become the first call business owners make when they need more than a service - a partner who turns "we should do something online" into a working system that brings customers.
            </p>
          </div>
        </div>
      </section>

      {/* Backed by Triopath & Founder */}
      <section className="border-b border-white/15 py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-10">
          <div className="border border-white/15 bg-[#110F0C] p-8 sm:p-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
              Backed by Triopath
            </span>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/85">
              Trimarga is the business growth arm of Triopath, which began as a career and talent company - headquartered in India with pan-India operations and an expanding footprint in the USA. We have optimised 500+ resumes, revamped 200+ LinkedIn profiles, delivered 300+ personalised career roadmaps and fulfilled 25+ corporate staffing mandates across technology, healthcare, finance, retail and marketing. Our business services bring the same promise to companies: <strong className="font-display font-semibold"><span style={{ color: 'var(--path-1)' }}>Dream.</span>{' '}<span style={{ color: 'var(--path-2)' }}>Discover.</span>{' '}<span style={{ color: 'var(--path-3)' }}>Decide.</span></strong> - now applied to your growth.
            </p>
          </div>

          <div className="border-l-4 border-[#FBAF01] border border-white/15 bg-[#110F0C] p-8 sm:p-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
              Meet the Founder
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-white">
              Lakshman Surya Kumar Muppiri, Founder and CEO
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/85">
              Surya founded Trimarga after experiencing business and hiring challenges firsthand. He personally oversees client strategy and partnerships with companies in India and the USA - when you contact Trimarga, you reach the founder's team directly.
            </p>
            <div className="mt-6 flex flex-wrap gap-6 text-xs font-bold uppercase tracking-wider">
              <a
                href={SITE_CONFIG.socials.founderInstagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#FBAF01] hover:underline"
              >
                <span>Founder Instagram (@surya_muppiri)</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={SITE_CONFIG.socials.triopathLinkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-white/80 hover:text-[#FBAF01]"
              >
                <span>Triopath on LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white">
            Ready to grow your business online?
          </h2>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 btn-primary bg-[#FBAF01] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0A0907] hover:bg-white"
            >
              <span>Work With Us</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
