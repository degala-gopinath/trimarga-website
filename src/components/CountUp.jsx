import React, { useEffect, useRef, useState } from 'react';

/**
 * Counts from 0 to `value` once, the first time it scrolls into view.
 * Respects reduced motion by rendering the final value immediately.
 */
export default function CountUp({
  value,
  prefix = '',
  suffix = '',
  duration = 1500,
  className = ''
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(value);
      return;
    }

    let frame = 0;
    let start = 0;

    const step = (now) => {
      if (!start) start = now;
      const progress = Math.min((now - start) / duration, 1);
      // Expo-out, matching the site's easing curve
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setShown(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          frame = requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}
