import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SERVICES_LIST, HOME_FAQS } from '../data/servicesData';
import { SITE_CONFIG } from '../data/siteConfig';
import DemoCard from '../components/DemoCard';
import FaqAccordion from '../components/FaqAccordion';
import SplitHeading from '../components/SplitHeading';
import CountUp from '../components/CountUp';
import Marquee from '../components/Marquee';
import ThreePathMark from '../components/ThreePathMark';
import TrimargaMark from '../components/TrimargaMark';
import ServicePathGroups from '../components/ServicePathGroups';
import { PATHS, PATH_ORDER } from '../data/paths';

const PATH_HUES = PATH_ORDER.map((key) => PATHS[key]);

const THREE_PATHS = [
  {
    num: '01',
    title: 'Get Found',
    desc: 'Google Business Profile, Local SEO & AI Search (GEO)',
    hue: 'var(--path-1)'
  },
  {
    num: '02',
    title: 'Look Trusted',
    desc: 'Custom Websites, E-commerce, Branding & Social Media',
    hue: 'var(--path-2)'
  },
  {
    num: '03',
    title: 'Get More Customers',
    desc: 'Meta Ads, Google Ads & One-Tap Enquiry Flows',
    hue: 'var(--path-3)'
  }
];

const TRACK_RECORD = [
  { value: 25, suffix: '+', label: 'Corporate staffing mandates' },
  { value: 100, suffix: '+', label: 'Active candidates supported' },
  { value: 500, suffix: '+', label: 'Resumes optimised' },
  { value: 300, suffix: '+', label: 'Career roadmap sessions' }
];

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
    num: 'Step 01',
    title: 'Free consultation',
    desc: 'Tell us about your business, your goals and what is not working today. We listen first.'
  },
  {
    num: 'Step 02',
    title: 'A plan made for your business',
    desc: 'We share a clear plan and quote - what we will build, what it includes, and what it will cost. No surprises later.'
  },
  {
    num: 'Step 03',
    title: 'We build, launch and grow',
    desc: 'We design, set up and launch. Then we keep improving with content, ads and monthly reporting while you run your business.'
  }
];

export default function HomePage() {
  return (
    <div className="text-white">

      {/* HERO SECTION */}
      <section className="editorial-grid overflow-hidden border-b border-white/15">

        {/* Reduced top spacing */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-8 pb-20 lg:pt-10 lg:pb-28">

          {/* The mark from the intro, carried into the hero. It drifts against
              the pointer, so the page answers to you from the first second. */}
          <div
            aria-hidden="true"
            className="hero-mark pointer-events-none absolute right-[-4%] top-1/2 hidden -translate-y-1/2 lg:block"
          >
            <div className="hero-mark__drift">
              <TrimargaMark size={640} variant="ambient" />
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">

              <div
                className="intro-gate intro-rise mb-8 inline-flex items-center gap-3 border border-white/20 bg-[#110F0C]/80 px-4 py-1.5 backdrop-blur"
              >

                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-[#FBAF01] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 bg-[#FBAF01]" />
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
                  Websites. Marketing. Growth.
                </span>

              </div>

              <SplitHeading
                text="We help local businesses *get found*, *look trusted*, and get more customers."
                variant="blur"
                gate
                start={160}
                step={55}
                className="font-display font-semibold text-white leading-[1.06] text-[clamp(2.3rem,6.2vw,4rem)]"
              />

              <p
                className="intro-gate intro-rise mt-7 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
                style={{ '--d': 820 }}
              >
                Trimarga builds your complete online presence - website,
                Google profile, social media and ads - so customers can
                find you, trust you, and reach you in one tap.
              </p>

              <div
                className="intro-gate intro-rise mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
                style={{ '--d': 960 }}
              >

                <Link
                  to="/contact"
                  className="btn-primary magnetic group inline-flex items-center justify-center gap-2.5 bg-[#FBAF01] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0A0907]"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight className="nudge h-4 w-4" />
                </Link>

                <Link
                  to="/work"
                  className="btn-ghost magnetic inline-flex items-center justify-center border border-white/30 bg-white/[0.02] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white backdrop-blur"
                >
                  See Our Work
                </Link>

              </div>

            </div>

            {/* THREE PATHS TO GROWTH */}
            <div
              className="intro-gate intro-slide relative overflow-hidden border border-white/15 bg-[#110F0C]/80 p-7 backdrop-blur-sm lg:col-span-4"
              style={{ '--d': 700 }}
            >

              {/* The mark itself, living quietly behind the list */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -right-14 opacity-[0.11]"
              >
                <ThreePathMark size={210} idle strokeWidth={5} />
              </div>

              <div className="relative space-y-6">

                <div className="flex items-center justify-between border-b border-white/10 pb-4">

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FBAF01]">
                    Three Paths to Growth
                  </span>

                  <span className="font-mono text-xs text-white/50">
                    USA &amp; INDIA
                  </span>

                </div>

                <div className="space-y-4">

                  {THREE_PATHS.map((path) => (

                    <div
                      key={path.num}
                      className="group/path flex items-baseline gap-3"
                    >

                      <span
                        className="font-mono text-xs transition-transform duration-500 group-hover/path:translate-x-0.5"
                        style={{ color: path.hue }}
                      >
                        {path.num}
                      </span>

                      <div>
                        <p className="text-sm font-bold text-white">
                          {path.title}
                        </p>

                        <p className="text-xs text-white/65">
                          {path.desc}
                        </p>
                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

          {/* TRUST LINE STRIP */}
          <div
            className="intro-gate intro-rise mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/15 pt-6 text-xs font-semibold uppercase tracking-[0.12em] text-white/75"
            style={{ '--d': 1080 }}
          >

            <span>100% customised solutions</span>

            <span className="text-[#FBAF01]">/</span>

            <span>Built around your budget</span>

            <span className="text-[#FBAF01]">/</span>

            <span>One team for website, content and ads</span>

          </div>

        </div>

      </section>

      {/* TRACK RECORD — the Triopath numbers, counted up */}
      <section className="border-b border-white/15 py-14">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <p
            className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]"
            data-reveal
          >
            Backed by Triopath
          </p>

          <div className="mt-8 grid grid-cols-2 gap-px border border-white/15 bg-white/15 lg:grid-cols-4">

            {TRACK_RECORD.map((stat) => (

              <div
                key={stat.label}
                className="spot bg-[#0A0907] px-6 py-8"
              >

                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  className="block font-serif text-[clamp(2.1rem,4.4vw,3.1rem)] font-bold leading-none tabular-nums text-white"
                />

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] leading-relaxed text-white/60">
                  {stat.label}
                </p>

              </div>

            ))}

          </div>

          <p className="mt-5 text-xs leading-relaxed text-white/45">
            Across India and the USA. The same team discipline runs our business services.
          </p>

        </div>

      </section>

      {/* CAPABILITY MARQUEE */}
      <section className="overflow-hidden border-b border-white/15 py-8">

        <Marquee
          items={SERVICES_LIST}
          speed={58}
          renderItem={(service) => (
            <span className="flex shrink-0 items-center gap-4 whitespace-nowrap px-7 text-sm font-bold uppercase tracking-[0.16em] text-white/40">
              {service.title}
              <span className="h-1 w-1 shrink-0 rotate-45 bg-[#FBAF01]" />
            </span>
          )}
        />

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
                  className="inline-flex items-center gap-2 border border-[#FBAF01] px-6 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#FBAF01] hover:bg-[#FBAF01] hover:text-[#0A0907] transition-colors"
                >
                  <span>More About Trimarga</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>

            </div>

            {/* MISSION AND VISION */}
            <div className="lg:col-span-5 grid gap-px bg-white/15 border border-white/15">

              <div className="bg-[#110F0C] p-8 space-y-3">

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

              <div className="bg-[#110F0C] p-8 space-y-3">

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

              <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.7rem,3.4vw,2.4rem)] font-semibold leading-tight text-white">
                Everything your business needs online. One team, three paths.
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

          <div className="mt-12">
            <ServicePathGroups />
          </div>

        </div>

      </section>

      {/* WHY CHOOSE TRIMARGA */}
      <section className="border-b border-white/15 py-20 lg:py-24 bg-[#110F0C]">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="max-w-2xl" data-reveal>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
              The Trimarga Standard
            </span>

            <h2 className="mt-3 font-display text-[clamp(1.7rem,3.4vw,2.4rem)] font-semibold leading-tight text-white">
              Why businesses choose Trimarga
            </h2>

          </div>

          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">

            {WHY_CHOOSE_ITEMS.map((item, index) => {
              const hue = PATH_HUES[index % PATH_HUES.length];

              return (
                <div
                  key={item.num}
                  className="spot card-edge group relative overflow-hidden bg-[#110F0C] p-8"
                  style={{ '--card-hue': hue.hue, '--card-rgb': hue.rgb }}
                >

                  {/* Ghosted numeral — large, quiet, and tinted by its path */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-[7.5rem] font-semibold leading-none opacity-[0.07] transition-all duration-700 group-hover:-translate-y-1 group-hover:opacity-[0.14]"
                    style={{ color: hue.hue }}
                  >
                    {item.num}
                  </span>

                  <span
                    className="relative font-mono text-xs font-bold"
                    style={{ color: hue.hue }}
                  >
                    {item.num}
                  </span>

                  <h3 className="relative mt-4 font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-relaxed text-white/70">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* HOW WE WORK */}
      <section className="border-b border-white/15 py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="max-w-2xl" data-reveal>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
              Process
            </span>

            <h2 className="mt-3 font-display text-[clamp(1.7rem,3.4vw,2.4rem)] font-semibold leading-tight text-white">
              Getting started is simple
            </h2>

          </div>

          <div className="relative mt-14">

            {/* One line through all three steps, blending the three path hues */}
            <div
              aria-hidden="true"
              className="process-line absolute left-0 right-0 top-[1.15rem] hidden h-px md:block"
            />

            <ol className="grid gap-10 md:grid-cols-3 md:gap-8">

              {STEPS.map((step, idx) => {
                const hue = PATH_HUES[idx % PATH_HUES.length];

                return (
                  <li key={idx} className="relative" data-reveal>

                    <span
                      className="relative z-10 grid h-9 w-9 place-items-center border bg-[#0A0907] font-mono text-xs font-bold"
                      style={{ color: hue.hue, borderColor: hue.hue }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    <p
                      className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: hue.hue }}
                    >
                      {step.num}
                    </p>

                    <h3 className="mt-2 font-display text-xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                      {step.desc}
                    </p>

                  </li>
                );
              })}

            </ol>

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
              className="shrink-0 inline-flex items-center gap-2 btn-primary bg-[#FBAF01] px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0A0907] hover:bg-white"
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
      <section className="py-20 lg:py-24 bg-[#110F0C]">

        <div className="mx-auto max-w-5xl px-5 sm:px-8">

          <div className="border-l-4 border-[#FBAF01] bg-[#0A0907] border border-white/15 p-8 sm:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8">

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
              className="shrink-0 inline-flex items-center justify-center gap-2 btn-primary bg-[#FBAF01] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0A0907] hover:bg-white"
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