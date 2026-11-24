
import React from 'react';

import {
  ArrowUpRight,
  Instagram,
  Linkedin
} from 'lucide-react';

import { SITE_CONFIG } from '../data/siteConfig';
import { GENERAL_FAQS } from '../data/servicesData';

import EnquiryForm from '../components/EnquiryForm';
import FaqAccordion from '../components/FaqAccordion';

export default function ContactPage() {

  const socialLinks = [
    {
      name: 'Trimarga',
      url: SITE_CONFIG.socials.trimargaInstagramUrl,
      icon: Instagram
    },
    {
      name: 'Triopath Careers',
      url: SITE_CONFIG.socials.triopathInstagramUrl,
      icon: Instagram
    },
    {
      name: 'Triopath LinkedIn',
      url: SITE_CONFIG.socials.triopathLinkedInUrl,
      icon: Linkedin
    },
    {
      name: 'Surya Muppiri',
      url: SITE_CONFIG.socials.founderInstagramUrl,
      icon: Instagram
    }
  ];

  return (
    <div className="bg-[#0A0A0A] text-white">

      {/* Contact Section */}
      <section className="border-b border-white/15 py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="grid items-start gap-12 lg:grid-cols-12">

            {/* Left Contact Details */}
            <div className="space-y-8 lg:col-span-5">

              {/* Heading */}
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
                  Contact Trimarga
                </span>

                <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
                  Tell us about your business. We will do the rest.
                </h1>

                <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
                  Share a few details below. We reply with honest next
                  steps, a plan and a clear quote - no obligation.
                </p>
              </div>

              {/* Contact Details */}
              <div className="divide-y divide-white/10 border border-white/15 bg-[#111111]">

                {/* Phone */}
                <div className="p-5">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#FBAF01]">
                    Phone / WhatsApp
                  </span>

                  <a
                    href={SITE_CONFIG.phoneHref}
                    className="mt-1 inline-block text-base font-bold text-white hover:text-[#FBAF01]"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>

                {/* Email */}
                <div className="p-5">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#FBAF01]">
                    Email
                  </span>

                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="mt-1 inline-block break-all text-base font-bold text-white hover:text-[#FBAF01]"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>

                {/* Website */}
                <div className="p-5">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#FBAF01]">
                    Website
                  </span>

                  <a
                    href={SITE_CONFIG.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex max-w-full items-center gap-1 text-base font-bold text-white hover:text-[#FBAF01]"
                  >
                    <span className="break-all">
                      {SITE_CONFIG.websiteUrl}
                    </span>

                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </a>
                </div>

              </div>

              {/* Simple Social Media Section */}
              <div className="border border-white/15 bg-[#111111] p-6 sm:p-8">

                <h2 className="text-center font-serif text-2xl font-bold text-white">
                  Connect With Us
                </h2>

                <p className="mt-2 text-center text-sm text-white/55">
                  Follow our official social media profiles
                </p>

                {/* Logo Above, Name Below */}
                <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">

                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={`${social.name}-${social.url}`}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${social.name}`}
                        className="group flex min-w-0 flex-col items-center gap-3 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FBAF01]"
                      >

                        {/* Social Logo */}
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#FBAF01]/40 bg-[#FBAF01]/10 text-[#FBAF01] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#FBAF01] group-hover:bg-[#FBAF01] group-hover:text-[#0A0A0A] motion-reduce:transform-none">

                          <Icon className="h-7 w-7" />

                        </div>

                        {/* Profile Name Below Logo */}
                        <span className="max-w-full break-words text-xs font-semibold leading-5 text-white/80 transition-colors duration-300 group-hover:text-[#FBAF01]">
                          {social.name}
                        </span>

                      </a>
                    );
                  })}

                </div>

              </div>

            </div>

            {/* Right Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">

        <div className="mx-auto max-w-4xl px-5 sm:px-8">

          <h2 className="mb-10 font-serif text-3xl font-bold text-white">
            Frequently asked questions
          </h2>

          <FaqAccordion items={GENERAL_FAQS} />

        </div>

      </section>

    </div>
  );
}
