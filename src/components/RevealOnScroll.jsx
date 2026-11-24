import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll choreography.
 *
 * Rather than fading every section in identically, this picks the smallest
 * meaningful blocks on the page and reveals them with a stagger, so content
 * arrives with a rhythm instead of all at once.
 *
 * Targets, in priority order:
 *   1. anything tagged `data-reveal` (optionally "left" | "right" | "scale")
 *   2. direct children of a `.grid`, staggered by their position
 *   3. the section itself, but only when it contains neither of the above
 *
 * Index is assigned per group, so each row of cards restarts its stagger
 * rather than drifting ever later down the page.
 *
 * Three deliberate safeguards, because hidden content is far worse than
 * unanimated content:
 *   - `opacity: 0` only applies under `html.js-motion` (set in index.html)
 *   - blocks already on screen are revealed synchronously, not via the
 *     observer's first callback
 *   - a timer sweeps up anything still hidden in the viewport
 *   - teardown never un-reveals, so a remount cannot hide what is shown
 */

const DIRECTION_CLASS = {
  left: 'from-left',
  right: 'from-right',
  scale: 'from-scale'
};

const MAX_STAGGER_STEPS = 7;

export default function RevealOnScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.remove('js-motion');
      return;
    }

    const tag = (element, index, direction) => {
      if (!element || element.dataset.revealBound) return;
      element.dataset.revealBound = '1';
      element.classList.add('reveal');
      const directionClass = DIRECTION_CLASS[direction];
      if (directionClass) element.classList.add(directionClass);
      element.style.setProperty('--i', Math.min(index, MAX_STAGGER_STEPS));
    };

    // 1. Explicitly tagged blocks
    for (const element of document.querySelectorAll('main [data-reveal]')) {
      const siblings = [...(element.parentElement?.children ?? [])].filter(
        (node) => node.hasAttribute('data-reveal')
      );
      tag(element, siblings.indexOf(element), element.dataset.reveal);
    }

    // 2. Grid children, staggered within each grid
    for (const grid of document.querySelectorAll('main .grid')) {
      const children = [...grid.children];
      if (children.length < 2) continue;
      children.forEach((child, index) => tag(child, index, 'scale'));
    }

    // 3. Sections with no inner targets of their own
    for (const section of document.querySelectorAll('main section')) {
      if (section.querySelector('.reveal')) continue;
      tag(section, 0);
    }

    // Read the targets back out of the DOM rather than from a private array,
    // so a remount re-observes blocks an earlier pass had already tagged.
    const pending = () => [
      ...document.querySelectorAll('main .reveal:not(.revealed)')
    ];

    const revealIfOnScreen = (element, slack) => {
      const box = element.getBoundingClientRect();
      if (box.top < window.innerHeight * slack && box.bottom > 0) {
        element.classList.add('revealed');
        return true;
      }
      return false;
    };

    // Anything already on screen reveals now — no waiting on a callback
    for (const element of pending()) revealIfOnScreen(element, 0.94);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );

    for (const element of pending()) observer.observe(element);

    // Safety sweep: if the observer never delivered, nothing stays invisible
    const sweep = window.setTimeout(() => {
      for (const element of pending()) revealIfOnScreen(element, 1);
    }, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(sweep);
    };
  }, [pathname]);

  return null;
}
