import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SERVICES_LIST, HOME_FAQS } from '../data/servicesData';
import { SITE_CONFIG } from '../data/siteConfig';
import DemoCard from '../components/DemoCard';
import FaqAccordion from '../components/FaqAccordion';

const WHY_CHOOSE_ITEMS = [
  {
    num: '01',
    title: 'Everything under one roof',
    desc: 'Website, Google profile, social media, ads, SEO and branding from one team, so nothing falls between vendors.'
  },
  {
    num: '02',
    title: 'Customised to your budget',
    desc: 'We recommend what your business actually needs at this stage - no forced packages, no extras you will not use.'
  },
  {
    num: '03',
    title: 'Built to bring enquiries',
    desc: 'Every page is designed around one job: calls, WhatsApp messages, bookings and orders.'
  },
  {
    num: '04',
    title: 'Clear reporting',
    desc: 'You see what was done, what it spent, and what it brought. In simple language.'
  },
  {
    num: '05',
    title: 'Founder-led and reachable',
    desc: 'You talk to the team building your presence, not a call centre.'
  },
  {
    num: '06',
    title: 'Backed by Triopath',
    desc: 'Triopath has supported 25+ corporate staffing mandates and 100+ active candidates, optimised 500+ resumes and delivered 300+ career roadmap sessions across India and the USA. The same team discipline runs our business services.'
  }
];

const STEPS = [
  {
    num: 'Step 1',
    title: 'Free consultation',
    desc: 'Tell us about your business, your goals and what is not working today. We listen first.'
  },
  {
    num: 'Step 2',
    title: 'A plan made for your business',
    desc: 'We share a clear plan and quote - what we will build, what it includes, and what it will cost. No surprises later.'
  },
  {
    num: 'Step 3',
    title: 'We build, launch and grow',
    desc: 'We design, set up and launch. Then we keep improving with content, ads and monthly reporting while you run your business.'
  }
];

export default function HomePage() {
  return (
    <div className="bg-[#0A0A0A] text-white">

      {/* HERO SECTION */}
      <section className="editorial-grid border-b border-white/15">

        {/* Reduced top spacing */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-8 pb-20 lg:pt-10 lg:pb-28">

          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">

              <div className="inline-flex items-center gap-3 border border-white/20 bg-[#111111] px-4 py-1.5 mb-8">

                <span className="h-2 w-2 bg-[#FBAF01]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
                  Websites. Marketing. Growth.
                </span>

              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-bold tracking-tight text-white leading-[1.08]">
                We help local businesses get found, look trusted, and get more customers.
              </h1>

              <p className="mt-7 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/80">
                Trimarga builds your complete online presence - website,
                Google profile, social media and ads - so customers can
                find you, trust you, and reach you in one tap.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#FBAF01] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0A0A0A] hover:bg-white transition-colors"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/work"
                  className="inline-flex items-center justify-center border border-white/30 bg-[#0A0A0A] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white hover:border-[#FBAF01] hover:text-[#FBAF01] transition-colors"
                >
                  See Our Work
                </Link>

              </div>

            </div>

            {/* THREE PATHS TO GROWTH */}
            <div className="lg:col-span-4 border border-white/15 bg-[#111111] p-7 space-y-6">

              <div className="flex items-center justify-between border-b border-white/10 pb-4">

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FBAF01]">
                  Three Paths to Growth
                </span>

                <span className="font-mono text-xs text-white/50">
                  USA & INDIA
                </span>

              </div>

              <div className="space-y-4">

                <div className="flex items-baseline gap-3">

                  <span className="font-mono text-xs text-[#FBAF01]">
                    01
                  </span>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Get Found
                    </p>

                    <p className="text-xs text-white/65">
                      Google Business Profile, Local SEO & AI Search (GEO)
                    </p>
                  </div>

                </div>

                <div className="flex items-baseline gap-3">

                  <span className="font-mono text-xs text-[#FBAF01]">
                    02
                  </span>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Look Trusted
                    </p>

                    <p className="text-xs text-white/65">
                      Custom Websites, E-commerce, Branding & Social Media
                    </p>
                  </div>

                </div>

                <div className="flex items-baseline gap-3">

                  <span className="font-mono text-xs text-[#FBAF01]">
                    03
                  </span>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Get More Customers
                    </p>

                    <p className="text-xs text-white/65">
                      Meta Ads, Google Ads & One-Tap Enquiry Flows
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* TRUST LINE STRIP */}
          <div className="mt-14 border-t border-white/15 pt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/75">

            <span>100% customised solutions</span>

            <span className="text-[#FBAF01]">/</span>

            <span>Built around your budget</span>

            <span className="text-[#FBAF01]">/</span>

            <span>One team for website, content and ads</span>

          </div>

        </div>

      </section>

      {/* INTRO / ABOUT TEASER */}
      <section className="border-b border-white/15 py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="grid gap-12 lg:grid-cols-12">

            <div className="lg:col-span-7 space-y-6">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
                The Problem & The Fix
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Your customers search online first. We make sure they find you.
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-white/80">
                Most businesses lose customers before the first call -
                no website, an incomplete Google profile, or social
                pages that have gone quiet. Trimarga fixes all of it
                together, not in pieces.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-white/80">
                We are a founder-led team providing business and digital
                solutions for shops, restaurants, studios, clinics,
                boutiques and service businesses. Whether you are
                starting from zero or your online presence needs a
                rebuild, we set it up properly and keep it growing.
              </p>

              <div className="pt-2">

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 border border-[#FBAF01] px-6 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#FBAF01] hover:bg-[#FBAF01] hover:text-[#0A0A0A] transition-colors"
                >
                  <span>More About Trimarga</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>

            </div>

            {/* MISSION AND VISION */}
            <div className="lg:col-span-5 grid gap-px bg-white/15 border border-white/15">

              <div className="bg-[#111111] p-8 space-y-3">

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FBAF01]">
                  Our Mission
                </span>

                <p className="text-sm sm:text-base leading-relaxed text-white/90">
                  To help businesses grow online with clarity and
                  confidence - the right website, the right profile,
                  and marketing that brings real enquiries, not just
                  posts and likes.
                </p>

              </div>

              <div className="bg-[#111111] p-8 space-y-3">

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FBAF01]">
                  Our Vision
                </span>

                <p className="text-sm sm:text-base leading-relaxed text-white/90">
                  To be the first call a business owner makes when
                  they want to grow online - one trusted partner
                  for their complete digital presence.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES OVERVIEW */}
      <section className="border-b border-white/15 py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/15">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
                Capabilities
              </span>

              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-white">
                Everything your business needs online. One team.
              </h2>

            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#FBAF01] hover:underline"
            >
              <span>View Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

          <div className="mt-12 grid gap-px bg-white/15 border border-white/15 sm:grid-cols-2 lg:grid-cols-3">

            {SERVICES_LIST.map((service) => (

              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group flex flex-col justify-between bg-[#0A0A0A] p-7 hover:bg-[#111111] transition-colors"
              >

                <div>

                  <div className="flex items-center justify-between text-xs">

                    <span className="font-mono font-bold text-[#FBAF01]">
                      {service.num}
                    </span>

                    <span className="uppercase tracking-wider text-[10px] text-white/45">
                      {service.category}
                    </span>

                  </div>

                  <h3 className="mt-4 text-lg font-bold text-white group-hover:text-[#FBAF01] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {service.shortDesc}
                  </p>

                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white/60 group-hover:text-[#FBAF01]">

                  <span>Explore Service</span>

                  <ArrowUpRight className="h-4 w-4" />

                </div>

              </Link>

            ))}

            {/* CONSULTATION CARD */}
            <Link
              to="/contact"
              className="group flex flex-col justify-between bg-[#FBAF01] p-7 text-[#0A0A0A] hover:bg-white transition-colors"
            >

              <div>

                <span className="font-mono text-xs font-extrabold uppercase tracking-widest">
                  Not sure where to start?
                </span>

                <h3 className="mt-4 font-serif text-2xl font-bold leading-snug">
                  Tell us about your business and budget.
                </h3>

                <p className="mt-3 text-sm font-medium leading-relaxed text-[#0A0A0A]/85">
                  We will recommend the right starting step with zero obligation.
                </p>

              </div>

              <div className="mt-6 pt-4 border-t border-[#0A0A0A]/20 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider">

                <span>Get a Free Consultation</span>

                <ArrowRight className="h-4 w-4" />

              </div>

            </Link>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE TRIMARGA */}
      <section className="border-b border-white/15 py-20 lg:py-24 bg-[#111111]">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="max-w-2xl">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
              The Trimarga Standard
            </span>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-white">
              Why businesses choose Trimarga
            </h2>

          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {WHY_CHOOSE_ITEMS.map((item) => (

              <div
                key={item.num}
                className="border-t-2 border-white/15 pt-6 space-y-3 hover:border-[#FBAF01] transition-colors"
              >

                <span className="font-mono text-xs font-bold text-[#FBAF01]">
                  {item.num}
                </span>

                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/75">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* HOW WE WORK */}
      <section className="border-b border-white/15 py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="max-w-2xl">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
              Process
            </span>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-white">
              Getting started is simple
            </h2>

          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {STEPS.map((step, idx) => (

              <div
                key={idx}
                className="border border-white/15 bg-[#111111] p-8 relative"
              >

                <span className="inline-block bg-[#FBAF01] px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-[#0A0A0A]">
                  {step.num}
                </span>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/80">
                  {step.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PORTFOLIO TEASER */}
      <section className="border-b border-white/15 py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">

            <div className="max-w-2xl">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
                Live Demos
              </span>

              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-white">
                See what your website could look like
              </h2>

              <p className="mt-4 text-base leading-relaxed text-white/80">
                Explore live demo websites we have designed for
                different types of businesses. Your website will
                be customised with your name, photos, services
                and contact details.
              </p>

            </div>

            <Link
              to="/work"
              className="shrink-0 inline-flex items-center gap-2 bg-[#FBAF01] px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0A0A0A] hover:bg-white transition-colors"
            >

              <span>See Our Work</span>

              <ArrowRight className="h-4 w-4" />

            </Link>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {SITE_CONFIG.demos.map((demo) => (

              <DemoCard
                key={demo.index}
                demo={demo}
              />

            ))}

          </div>

        </div>

      </section>

      {/* FAQ SECTION */}
      <section className="border-b border-white/15 py-20 lg:py-24">

        <div className="mx-auto max-w-4xl px-5 sm:px-8">

          <div className="mb-10">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
              Questions & Answers
            </span>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-white">
              Frequently asked questions
            </h2>

          </div>

          <FaqAccordion items={HOME_FAQS} />

        </div>

      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-20 lg:py-24 bg-[#111111]">

        <div className="mx-auto max-w-5xl px-5 sm:px-8">

          <div className="border-l-4 border-[#FBAF01] bg-[#0A0A0A] border border-white/15 p-8 sm:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8">

            <div className="max-w-xl">

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Ready to grow your business online?
              </h2>

              <p className="mt-3 text-base sm:text-lg text-white/80">
                Tell us about your business. We will reply with
                honest next steps and a plan that fits your budget.
              </p>

            </div>

            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#FBAF01] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0A0A0A] hover:bg-white transition-colors"
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