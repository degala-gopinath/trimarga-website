import React, { useEffect, useRef } from 'react';

/**
 * A cursor that reacts to what it is over: a dot that trails exactly, a ring
 * that lags behind it, and — over anything carrying `data-cursor` — a filled
 * pill showing that element's label.
 *
 * One DOM write per animation frame; no React state on pointer movement.
 */
export default function CreativeCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reduced.matches) return;

    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    let raf = 0;
    let visible = false;
    let currentLabel = '';

    const move = (event) => {
      x = event.clientX;
      y = event.clientY;

      if (!visible) {
        visible = true;
        dot.current?.classList.add('is-visible');
        ring.current?.classList.add('is-visible');
      }

      const labelled = event.target.closest?.('[data-cursor]');
      const text = labelled?.dataset.cursor ?? '';

      if (text !== currentLabel) {
        currentLabel = text;
        if (label.current) label.current.textContent = text;
        ring.current?.classList.toggle('is-labelled', Boolean(text));
        dot.current?.classList.toggle('is-labelled', Boolean(text));
      }

      if (!text) {
        const interactive = event.target.closest?.(
          'a, button, input, textarea, select, [role="button"]'
        );
        ring.current?.classList.toggle('is-interactive', Boolean(interactive));
      } else {
        ring.current?.classList.remove('is-interactive');
      }
    };

    const leave = () => {
      visible = false;
      dot.current?.classList.remove('is-visible');
      ring.current?.classList.remove('is-visible');
    };

    const tick = () => {
      rx += (x - rx) * 0.2;
      ry += (y - ry) * 0.2;

      if (dot.current) {
        dot.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
    };
  }, []);

  return (
    <>
      <span ref={dot} className="creative-cursor-dot" aria-hidden="true" />
      <span ref={ring} className="creative-cursor-ring" aria-hidden="true">
        <span ref={label} className="cursor-label" />
      </span>
    </>
  );
}
