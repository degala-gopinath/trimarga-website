import React, { useEffect, useState } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

/**
 * Persistent WhatsApp access, plus a back-to-top button that only appears
 * once there is something to scroll back from.
 */
export default function FloatingContact() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">

      {/* Back to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-[#110F0C]/90 text-white/80 backdrop-blur transition-all duration-500 hover:border-[#FBAF01] hover:text-[#FBAF01] ${
          scrolled
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-3 opacity-0'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
      >
        <ArrowUp className="h-4 w-4" />
      </button>

      {/* WhatsApp */}
      <a
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Message Trimarga on WhatsApp at ${SITE_CONFIG.phoneDisplay}`}
        className="group pointer-events-auto relative inline-flex items-center gap-0 overflow-hidden rounded-full bg-[#FBAF01] py-4 pl-4 pr-4 text-[#0A0907] shadow-[0_10px_34px_rgba(251,175,1,.3)] transition-all duration-500 hover:pr-6 hover:shadow-[0_16px_44px_rgba(251,175,1,.45)]"
        style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
      >
        {/* Pulse halo */}
        <span
          aria-hidden="true"
          className="pulse-ring absolute inset-0 -z-10 rounded-full text-[#FBAF01]"
        />

        <MessageCircle className="h-6 w-6 shrink-0" />

        <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-extrabold uppercase tracking-[0.14em] transition-all duration-500 group-hover:ml-2.5 group-hover:max-w-[12rem]">
          Chat on WhatsApp
        </span>
      </a>

    </div>
  );
}
