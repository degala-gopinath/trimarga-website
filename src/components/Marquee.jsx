import React, { useEffect, useRef } from 'react';

/**
 * Seamless CSS marquee that reacts to scroll.
 *
 * The children render twice so the track can translate a full -100% and loop
 * without a seam. Scrolling speeds it up, and scrolling *up* reverses it —
 * a small touch that makes the page feel responsive to the reader rather
 * than merely decorated. Velocity decays back to the resting speed.
 */
export default function Marquee({
  items,
  speed = 46,
  reverse = false,
  renderItem,
  className = ''
}) {
  const trackRefs = useRef([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let lastY = window.scrollY;
    let boost = 0;
    let frame = 0;
    let running = true;

    const tick = () => {
      if (!running) return;

      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;

      // Feed scroll delta in, then ease back toward rest.
      boost += (delta * 0.9 - boost) * 0.12;
      if (Math.abs(boost) < 0.02) boost = 0;

      // Resting speed is 1; scrolling pushes it, scrolling up flips the sign.
      // playbackRate takes negatives, so the track genuinely runs backwards —
      // a CSS duration cannot express that.
      const rate = Math.max(-4, Math.min(4, 1 + boost * 0.22));

      for (const track of trackRefs.current) {
        if (!track) continue;
        for (const animation of track.getAnimations()) {
          animation.playbackRate = rate;
        }
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
    };
  }, []);

  const track = (index, ariaHidden) => (
    <div
      ref={(node) => {
        trackRefs.current[index] = node;
      }}
      className="marquee__track"
      aria-hidden={ariaHidden || undefined}
      style={{
        '--speed': `${speed}s`,
        animationDirection: reverse ? 'reverse' : undefined
      }}
    >
      {items.map((item, itemIndex) => (
        <React.Fragment key={itemIndex}>
          {renderItem(item, itemIndex)}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${className}`}>
      {track(0, false)}
      {track(1, true)}
    </div>
  );
}
