import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RevealOnScroll() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const nodes = [...document.querySelectorAll('main section, main article, main .grid > a, main .grid > div')];
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08, rootMargin: '0px 0px 30px 0px' });
    nodes.forEach((node) => { node.classList.add('reveal-on-scroll'); observer.observe(node); });
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
