import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import TrimargaLogo from './TrimargaLogo';
import { SITE_CONFIG } from '../data/siteConfig';
import { SERVICES_LIST } from '../data/servicesData';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors ${
      isActive ? 'text-[#FBAF01]' : 'text-white/80 hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A] border-b border-white/15">
      {/* Optional Top Strip */}
      <div className="border-b border-white/10 bg-[#111111] px-4 py-2 text-center text-xs text-white/85">
        <span className="inline-block h-1.5 w-1.5 bg-[#FBAF01] mr-2 align-middle" />
        {SITE_CONFIG.topStrip}
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 h-20">
        <Link to="/" onClick={() => setMobileOpen(false)} aria-label="Trimarga Home">
          <TrimargaLogo />
        </Link>

        {/* Primary Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-9">
          <NavLink to="/" end className={linkStyle}>
            Home
          </NavLink>

          <div
            className="relative h-20 flex items-center"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                  isActive ? 'text-[#FBAF01]' : 'text-white/80 hover:text-white'
                }`
              }
            >
              <span>Services</span>
              <ChevronDown className="h-3.5 w-3.5 text-[#FBAF01]" />
            </NavLink>

            {/* Structured Architectural Mega-Menu */}
            {megaOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-[680px] border border-white/20 bg-[#0A0A0A] shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/15 bg-[#111111] px-6 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                    11 Core Growth Services
                  </span>
                  <Link
                    to="/services"
                    onClick={() => setMegaOpen(false)}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#FBAF01] hover:underline"
                  >
                    <span>View Services & Packages</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 divide-x divide-white/10">
                  <div className="p-3 space-y-0.5">
                    {SERVICES_LIST.slice(0, 6).map((srv) => (
                      <Link
                        key={srv.id}
                        to={`/services/${srv.slug}`}
                        onClick={() => setMegaOpen(false)}
                        className="flex items-baseline gap-3 px-3 py-2.5 text-xs text-white/85 hover:bg-white/[0.04] hover:text-[#FBAF01] transition-colors"
                      >
                        <span className="font-mono text-[10px] text-[#FBAF01]">{srv.num}</span>
                        <span className="font-medium">{srv.title}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="p-3 space-y-0.5">
                    {SERVICES_LIST.slice(6).map((srv) => (
                      <Link
                        key={srv.id}
                        to={`/services/${srv.slug}`}
                        onClick={() => setMegaOpen(false)}
                        className="flex items-baseline gap-3 px-3 py-2.5 text-xs text-white/85 hover:bg-white/[0.04] hover:text-[#FBAF01] transition-colors"
                      >
                        <span className="font-mono text-[10px] text-[#FBAF01]">{srv.num}</span>
                        <span className="font-medium">{srv.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/work" className={linkStyle}>
            Our Work
          </NavLink>
          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
        </nav>

        {/* Primary CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="bg-[#FBAF01] px-6 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-[#0A0A0A] hover:bg-white transition-colors"
          >
            Get a Free Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden border border-white/20 p-2.5 text-white hover:border-[#FBAF01]"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/15 bg-[#0A0A0A] px-6 py-6 space-y-5">
          <nav className="flex flex-col space-y-4">
            <NavLink to="/" end onClick={() => setMobileOpen(false)} className={linkStyle}>
              Home
            </NavLink>
            <NavLink to="/services" onClick={() => setMobileOpen(false)} className={linkStyle}>
              Services
            </NavLink>
            <NavLink to="/work" onClick={() => setMobileOpen(false)} className={linkStyle}>
              Our Work
            </NavLink>
            <NavLink to="/about" onClick={() => setMobileOpen(false)} className={linkStyle}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={() => setMobileOpen(false)} className={linkStyle}>
              Contact
            </NavLink>
          </nav>

          <div className="pt-4 border-t border-white/15">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full bg-[#FBAF01] py-3.5 text-center text-xs font-extrabold uppercase tracking-[0.12em] text-[#0A0A0A]"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
