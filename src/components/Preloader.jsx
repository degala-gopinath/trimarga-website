import React, { useEffect, useRef, useState } from 'react';
import ThreePathMark from './ThreePathMark';

const SESSION_KEY = 'trimarga:intro-seen';
// Long enough to read, short enough not to be a toll gate. Plus the lift,
// the hero is in view in well under 2.5s, and only on the session's first page.
const RUN_MS = 1600;
const LIFT_MS = 700;
const SAFETY_MS = 3400;

/**
 * Decided once per page load, at module scope rather than inside an effect.
 *
 * This has to be a one-time decision: React StrictMode runs effects twice in
 * development, so an in-effect check would read back the session key its own
 * first run had just written and skip the intro every time. Any remount would
 * do the same. Evaluating here makes the answer stable for the whole load.
 */
const shouldPlay = (() => {
  if (typeof window === 'undefined') return false;

  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }
  } catch {
    return false;
  }

  try {
    if (sessionStorage.getItem(SESSION_KEY) === '1') return false;
    sessionStorage.setItem(SESSION_KEY, '1');
  } catch {
    // Private mode or blocked storage: play it, just don't remember.
  }

  return true;
})();

// When the intro is skipped, release the hero gate before first paint so the
// page never renders with its animations held.
if (typeof document !== 'undefined' && !shouldPlay) {
  document.documentElement.classList.add('intro-done');
}

/**
 * The first second of the site.
 *
 * Three lines travel in from off-screen, weave into the Trimarga mark, and the
 * curtain lifts into the hero. Hero animations are gated on the `intro-done`
 * class this sets, so nothing competes with the intro — the same
 * "wait for the transition" pattern used by the Trionn build.
 *
 * Plays once per browser session, never under reduced motion, and a hard
 * safety timer guarantees the curtain always lifts even if something stalls.
 */
export default function Preloader() {
  const [phase, setPhase] = useState(shouldPlay ? 'running' : 'gone');
  const [count, setCount] = useState(0);
  const finished = useRef(false);

  useEffect(() => {
    if (!shouldPlay) {
      finish();
      return;
    }

    document.body.style.overflow = 'hidden';

    let frame = 0;
    let start = 0;

    const tick = (now) => {
      if (!start) start = now;
      const progress = Math.min((now - start) / RUN_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * 100));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setPhase('lifting');
        window.setTimeout(finish, LIFT_MS);
      }
    };

    frame = requestAnimationFrame(tick);

    // Whatever happens above, the page is never held hostage.
    const safety = window.setTimeout(finish, SAFETY_MS);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(safety);
      document.body.style.overflow = '';
    };
  }, []);

  function finish() {
    if (finished.current) return;
    finished.current = true;
    document.body.style.overflow = '';
    document.documentElement.classList.add('intro-done');
    setPhase('gone');
  }

  if (phase === 'gone') return null;

  return (
    <div
      className={`preloader ${phase === 'lifting' ? 'is-lifting' : ''}`}
      role="status"
      aria-label="Loading Trimarga"
    >
      {/* Curtain panels, one per path, that sweep away at the end */}
      <span className="preloader__panel" aria-hidden="true" />
      <span className="preloader__panel" aria-hidden="true" />
      <span className="preloader__panel" aria-hidden="true" />

      <div className="preloader__stage">
        <ThreePathMark size={210} showApproach strokeWidth={2.5} />

        <div className="preloader__meta">
          <span className="preloader__word">Three paths</span>
          <span className="preloader__count">{count}</span>
        </div>
      </div>
    </div>
  );
}
