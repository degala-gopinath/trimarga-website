import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import TrimargaLogo from './TrimargaLogo';
import { SITE_CONFIG } from '../data/siteConfig';
import { SERVICES_LIST } from '../data/servicesData';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Condense the bar once the page has moved
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Never leave a menu hanging open across a route change
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  // An underline that grows from the left on hover, and stays for the
  // active route.
  const linkStyle = ({ isActive }) =>
    `relative inline-block py-1 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors
     after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left
     after:bg-[#FBAF01] after:transition-transform after:duration-[450ms]
     after:[transition-timing-function:cubic-bezier(.16,1,.3,1)] hover:after:scale-x-100 ${
       isActive
         ? 'text-[#FBAF01] after:scale-x-100'
         : 'text-white/80 hover:text-white after:scale-x-0'
     }`;

  return (
    <header className="sticky top-0 z-50">

      {/* Announcement strip — slides away as you scroll */}
      <div
        className={`overflow-hidden border-b border-white/10 bg-[#110F0C] text-center text-xs text-white/85 transition-all duration-500 ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-16 opacity-100'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
      >
        <p className="px-4 py-2">
          <span className="mr-2 inline-block h-1.5 w-1.5 align-middle bg-[#FBAF01]" />
          {SITE_CONFIG.topStrip}
        </p>
      </div>

      {/* Main bar — frosted glass once scrolled */}
      <div
        className={`border-b transition-all duration-500 ${
          scrolled
            ? 'border-white/10 bg-[#0A0907]/80 shadow-[0_10px_40px_rgba(0,0,0,.5)] backdrop-blur-xl'
            : 'border-white/15 bg-[#0A0907]'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 transition-all duration-500 sm:px-8 ${
            scrolled ? 'h-16' : 'h-20'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
        >
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            aria-label="Trimarga Home"
            className={`shrink-0 origin-left transition-transform duration-500 ${
              scrolled ? 'scale-[0.88]' : ''
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
          >
            <TrimargaLogo />
          </Link>

          {/* Desktop navigation — xl, so it never collides with the wordmark */}
          <nav className="hidden items-center gap-9 xl:flex">
            <NavLink to="/" end className={linkStyle}>
              Home
            </NavLink>

            <div
              className="relative flex h-full items-center"
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
                <ChevronDown
                  className={`h-3.5 w-3.5 text-[#FBAF01] transition-transform duration-[450ms] ${
                    megaOpen ? 'rotate-180' : ''
                  }`}
                  style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
                />
              </NavLink>

              {/* Mega menu */}
              <div
                className={`absolute left-1/2 top-full w-[700px] -translate-x-1/2 border border-white/15 bg-[#0A0907]/95 shadow-2xl backdrop-blur-xl transition-all duration-[450ms] ${
                  megaOpen
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-2 opacity-0'
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
                aria-hidden={!megaOpen}
              >
                <div className="flex items-center justify-between border-b border-white/15 bg-[#110F0C] px-6 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                    11 Core Growth Services
                  </span>
                  <Link
                    to="/services"
                    onClick={() => setMegaOpen(false)}
                    className="group inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#FBAF01]"
                  >
                    <span>View Services &amp; Packages</span>
                    <ArrowUpRight className="nudge h-3.5 w-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 divide-x divide-white/10">
                  {[SERVICES_LIST.slice(0, 6), SERVICES_LIST.slice(6)].map(
                    (column, columnIndex) => (
                      <div key={columnIndex} className="space-y-0.5 p-3">
                        {column.map((srv, index) => (
                          <Link
                            key={srv.id}
                            to={`/services/${srv.slug}`}
                            onClick={() => setMegaOpen(false)}
                            className="group flex items-baseline gap-3 px-3 py-2.5 text-xs text-white/85 transition-all duration-300 hover:translate-x-1 hover:bg-white/[0.04] hover:text-[#FBAF01]"
                            style={{
                              transitionDelay: megaOpen
                                ? `${(columnIndex * 6 + index) * 18}ms`
                                : '0ms'
                            }}
                          >
                            <span className="font-mono text-[10px] text-[#FBAF01]">
                              {srv.num}
                            </span>
                            <span className="font-medium">{srv.title}</span>
                          </Link>
                        ))}
                      </div>
                    )
                  )}
                </div>
              </div>
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
          <div className="hidden shrink-0 items-center xl:flex">
            <Link
              to="/contact"
              className="btn-primary bg-[#FBAF01] px-6 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-[#0A0907]"
            >
              Get a Free Consultation
            </Link>
          </div>

          {/* Mobile / tablet toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="shrink-0 border border-white/20 p-2.5 text-white transition-colors hover:border-[#FBAF01] hover:text-[#FBAF01] xl:hidden"
            aria-label="Toggle Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer — links cascade in */}
      <div
        className={`overflow-hidden border-b border-white/15 bg-[#0A0907]/95 backdrop-blur-xl transition-all duration-500 xl:hidden ${
          mobileOpen ? 'max-h-[32rem]' : 'max-h-0'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
      >
        <div className="space-y-5 px-6 py-6">
          <nav className="flex flex-col">
            {[
              { to: '/', label: 'Home', end: true },
              { to: '/services', label: 'Services' },
              { to: '/work', label: 'Our Work' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' }
            ].map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `border-b border-white/10 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-all duration-500 ${
                    isActive ? 'text-[#FBAF01]' : 'text-white/80'
                  } ${mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-3 opacity-0'}`
                }
                style={{
                  transitionDelay: mobileOpen ? `${index * 45 + 60}ms` : '0ms',
                  transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)'
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary block w-full bg-[#FBAF01] px-6 py-3.5 text-center text-xs font-extrabold uppercase tracking-[0.12em] text-[#0A0907]"
          >
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
