import React, { useEffect, useRef } from 'react';

// One DOM update per animation frame, with no React state updates on pointer movement.
export default function CreativeCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reduced.matches) return;
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0;
    let visible = false;
    const move = (event) => {
      x = event.clientX; y = event.clientY;
      if (!visible) { visible = true; dot.current?.classList.add('is-visible'); ring.current?.classList.add('is-visible'); }
      const interactive = event.target.closest('a, button, input, textarea, select, [role="button"]');
      ring.current?.classList.toggle('is-interactive', Boolean(interactive));
    };
    const leave = () => { visible = false; dot.current?.classList.remove('is-visible'); ring.current?.classList.remove('is-visible'); };
    const tick = () => {
      rx += (x - rx) * 0.22; ry += (y - ry) * 0.22;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('pointermove', move); document.removeEventListener('pointerleave', leave); };
  }, []);
  return <><span ref={dot} className="creative-cursor-dot" aria-hidden="true" /><span ref={ring} className="creative-cursor-ring" aria-hidden="true" /></>;
}
