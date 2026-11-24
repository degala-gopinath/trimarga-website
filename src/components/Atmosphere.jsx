import React, { useEffect } from 'react';

const MAGNET_RADIUS = 90;
const MAGNET_PULL = 0.32;
const TILT_MAX = 7;

/**
 * Ambient page chrome: the three depth layers that turn flat black into lit
 * black, plus one delegated pointer listener driving every pointer-reactive
 * effect on the page.
 *
 * A single listener handles all three effects rather than one per element,
 * and writes at most once per frame:
 *   - `.spot`     cursor-following highlight
 *   - `.magnetic` buttons that lean toward the cursor
 *   - `.tilt`     cards that tip in 3D
 *
 * All of it is decorative and inert — no layout impact, no hit testing.
 */
export default function Atmosphere() {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || reduced.matches) return;

    let frame = 0;
    let queued = null;
    let activeMagnet = null;
    let activeTilt = null;

    const flush = () => {
      frame = 0;
      if (!queued) return;
      const { spot, magnet, tilt, parallax } = queued;
      queued = null;

      if (parallax) {
        document.documentElement.style.setProperty('--px', parallax.x.toFixed(3));
        document.documentElement.style.setProperty('--py', parallax.y.toFixed(3));
      }

      if (spot) {
        spot.el.style.setProperty('--mx', `${spot.x}px`);
        spot.el.style.setProperty('--my', `${spot.y}px`);
      }

      if (magnet) {
        magnet.el.style.transform = `translate(${magnet.x}px, ${magnet.y}px)`;
      }

      if (tilt) {
        tilt.el.style.transform =
          `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`;
      }
    };

    const release = (element) => {
      if (!element) return;
      element.style.transform = '';
    };

    const onMove = (event) => {
      const next = {};

      // Normalised pointer position (-1..1 from viewport centre), written once
      // to :root so any element can drift against it in pure CSS — the hero
      // mark uses this. One write here beats a listener per parallax element.
      next.parallax = {
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2
      };

      const card = event.target.closest?.('.spot');
      if (card) {
        const box = card.getBoundingClientRect();
        next.spot = {
          el: card,
          x: event.clientX - box.left,
          y: event.clientY - box.top
        };
      }

      // Magnetic: lean toward the cursor, but only within a short radius so
      // buttons stay where people expect them.
      const magnet = event.target.closest?.('.magnetic');
      if (magnet !== activeMagnet) {
        release(activeMagnet);
        activeMagnet = magnet;
      }
      if (magnet) {
        const box = magnet.getBoundingClientRect();
        const dx = event.clientX - (box.left + box.width / 2);
        const dy = event.clientY - (box.top + box.height / 2);
        if (Math.hypot(dx, dy) < MAGNET_RADIUS + Math.max(box.width, box.height) / 2) {
          next.magnet = { el: magnet, x: dx * MAGNET_PULL, y: dy * MAGNET_PULL };
        } else {
          release(magnet);
          activeMagnet = null;
        }
      }

      const tilt = event.target.closest?.('.tilt');
      if (tilt !== activeTilt) {
        release(activeTilt);
        activeTilt = tilt;
      }
      if (tilt) {
        const box = tilt.getBoundingClientRect();
        const px = (event.clientX - box.left) / box.width - 0.5;
        const py = (event.clientY - box.top) / box.height - 0.5;
        next.tilt = {
          el: tilt,
          rx: (-py * TILT_MAX).toFixed(2),
          ry: (px * TILT_MAX).toFixed(2)
        };
      }

      queued = next;
      if (!frame) frame = requestAnimationFrame(flush);
    };

    const onLeave = () => {
      release(activeMagnet);
      release(activeTilt);
      activeMagnet = null;
      activeTilt = null;
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      onLeave();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* Scroll progress — native scroll-driven, falls back to invisible */}
      <div className="scroll-progress" aria-hidden="true" />

      {/* Drifting amber aurora */}
      <div className="aurora" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      {/* Film grain */}
      <div className="grain" aria-hidden="true" />
    </>
  );
}
