import React, { useEffect, useRef, useState } from 'react';
import TrimargaMark from './TrimargaMark';

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
 *
 * The one thing that must never happen is the overlay outliving `finish()`.
 * A page opened in a background tab pauses requestAnimationFrame, so the safety
 * timer can finish the intro long before the animation loop does; when the tab
 * is later shown, that stale loop used to resume and re-mount the overlay in
 * its "lifting" state with nothing left to remove it — a full-screen layer
 * blocking every click. So: `finish()` is the single authority, it stops the
 * loop and every timer, and nothing may change phase once it has run.
 */
export default function Preloader() {
  const [phase, setPhase] = useState(shouldPlay ? 'running' : 'gone');
  const [count, setCount] = useState(0);

  const finished = useRef(false);
  const frame = useRef(0);
  const timers = useRef([]);

  useEffect(() => {
    if (!shouldPlay) {
      finish();
      return;
    }

    document.body.style.overflow = 'hidden';

    let start = 0;

    const tick = (now) => {
      // finish() has already run (e.g. the safety timer won while the tab was
      // hidden). The loop must die here rather than touch state again.
      if (finished.current) return;

      if (!start) start = now;
      const progress = Math.min((now - start) / RUN_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * 100));

      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setPhase('lifting');
        timers.current.push(window.setTimeout(finish, LIFT_MS));
      }
    };

    frame.current = requestAnimationFrame(tick);

    // Whatever happens above, the page is never held hostage.
    timers.current.push(window.setTimeout(finish, SAFETY_MS));

    return () => {
      cancelAnimationFrame(frame.current);
      timers.current.forEach((id) => window.clearTimeout(id));
      timers.current = [];
      document.body.style.overflow = '';
    };
    // finish is stable in behaviour (it only touches refs and a state setter).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finish() {
    if (finished.current) return;
    finished.current = true;

    // Stop everything still pending so nothing can fire after this point.
    cancelAnimationFrame(frame.current);
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];

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
        <TrimargaMark size={200} variant="intro" />

        <img
          className="preloader__wordmark"
          src="/image/trimarga-wordmark-alpha.webp"
          width="960"
          height="193"
          alt=""
          decoding="async"
          fetchpriority="high"
        />

        <span className="preloader__bar" aria-hidden="true">
          <i style={{ transform: `scaleX(${count / 100})` }} />
        </span>
      </div>
    </div>
  );
}
