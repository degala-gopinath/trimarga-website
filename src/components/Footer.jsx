
import React from 'react';
import { Link } from 'react-router-dom';

import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  Instagram,
  Linkedin
} from 'lucide-react';

import TrimargaLogo from './TrimargaLogo';
import { SITE_CONFIG } from '../data/siteConfig';
import { SERVICES_LIST } from '../data/servicesData';

const QUICK_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Our Work', path: '/work' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

const linkStyle =
  'group inline-flex items-start gap-2 text-sm leading-relaxed ' +
  'text-white/60 transition-all duration-300 ' +
  'hover:translate-x-1 hover:text-[#FBAF01] ' +
  'focus-visible:outline focus-visible:outline-2 ' +
  'focus-visible:outline-offset-4 focus-visible:outline-[#FBAF01] ' +
  'motion-reduce:transform-none';

export default function Footer() {

  const socialLinks = [
    {
      name: 'Trimarga',
      href: SITE_CONFIG.socials.trimargaInstagramUrl,
      icon: Instagram
    },
    {
      name: 'Triopath Careers',
      href: SITE_CONFIG.socials.triopathInstagramUrl,
      icon: Instagram
    },
    {
      name: 'Triopath LinkedIn',
      href: SITE_CONFIG.socials.triopathLinkedInUrl,
      icon: Linkedin
    },
    {
      name: 'Surya Muppiri',
      href: SITE_CONFIG.socials.founderInstagramUrl,
      icon: Instagram
    }
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0A] text-white">

      {/* Subtle Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#FBAF01]/[0.035] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Top Consultation Section */}
        <div className="border-b border-white/10 py-12 sm:py-16">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
                <span className="h-2 w-2 rounded-full bg-[#FBAF01]" />
                Let's Work Together
              </span>

              <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Ready to grow your
                <span className="text-[#FBAF01]"> business?</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                From websites to digital marketing, we help
                businesses build a stronger online presence
                and reach more customers.
              </p>

            </div>

            <Link
              to="/contact"
              className="group inline-flex w-fit shrink-0 items-center justify-center gap-3 rounded-lg bg-[#FBAF01] px-7 py-4 text-xs font-extrabold uppercase tracking-wider text-[#0A0A0A] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_35px_rgba(251,175,1,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FBAF01] motion-reduce:transform-none"
            >
              Get a Free Consultation

              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" />
            </Link>

          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid gap-x-10 gap-y-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-12 lg:py-20">

          {/* Column 1: Brand and Contact */}
          <div className="min-w-0 space-y-6 lg:col-span-4">

            <TrimargaLogo />

            <p className="max-w-sm text-sm leading-7 text-white/60">
              Trimarga - Business Growth Partners.
              We help businesses build their online presence,
              attract customers, and grow.
            </p>

            <div className="space-y-4 border-t border-white/10 pt-6">

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FBAF01]" />

                <p className="text-sm leading-6 text-white/65">
                  {SITE_CONFIG.location}
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#FBAF01]" />

                <a
                  href={SITE_CONFIG.phoneHref}
                  className="break-all text-sm text-white/70 transition-colors hover:text-[#FBAF01]"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#FBAF01]" />

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="min-w-0 break-all text-sm text-white/70 transition-colors hover:text-[#FBAF01]"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              {/* Website */}
              <div className="flex items-start gap-3">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-[#FBAF01]" />

                <a
                  href={SITE_CONFIG.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-0 items-center gap-1 break-all text-sm text-white/70 transition-colors hover:text-[#FBAF01]"
                >
                  <span className="break-all">
                    {SITE_CONFIG.websiteUrl}
                  </span>

                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </a>
              </div>

            </div>
          </div>

          {/* Column 2: All Services */}
          <div className="min-w-0 lg:col-span-5">

            <h3 className="mb-6 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FBAF01]">
              Our Services
            </h3>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">

              {SERVICES_LIST.map((service) => (
                <li
                  key={service.id}
                  className="min-w-0"
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className={linkStyle}
                  >
                    <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-[#FBAF01]/60 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />

                    <span>
                      {service.title}
                    </span>

                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Column 3: Navigation and Social Profiles */}
          <div className="min-w-0 space-y-10 lg:col-span-3">

            {/* Quick Links */}
            <div>

              <h3 className="mb-6 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FBAF01]">
                Quick Links
              </h3>

              <ul className="space-y-4">

                {QUICK_LINKS.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={linkStyle}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

              </ul>
            </div>

            {/* Social Media Logos With Names Below */}
            <div>

              <h3 className="mb-6 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FBAF01]">
                Connect With Us
              </h3>

              <div className="grid grid-cols-2 gap-x-3 gap-y-7">

                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={`${social.name}-${social.href}`}
                      href={social.href}
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

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs leading-6 text-white/45">
            {SITE_CONFIG.copyright}
          </p>

          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FBAF01] transition-colors hover:text-white"
          >
            Let's Talk

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" />
          </Link>

        </div>

      </div>
    </footer>
  );
}
