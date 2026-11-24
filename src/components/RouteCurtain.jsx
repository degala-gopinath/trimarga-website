import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SWEEP_MS = 820;

/**
 * Three panels sweep down the screen on every route change — the same three
 * paths as the preloader, reused as punctuation between pages.
 *
 * Skipped on first load, where the preloader already owns the moment.
 */
export default function RouteCurtain() {
  const { pathname } = useLocation();
  const [sweep, setSweep] = useState(0);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    setSweep((n) => n + 1);
    const timer = window.setTimeout(() => setSweep(0), SWEEP_MS);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (!sweep) return null;

  return (
    <div className="route-curtain" key={sweep} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}
