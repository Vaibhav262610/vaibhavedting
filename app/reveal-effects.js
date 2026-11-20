'use client';

import { useEffect } from 'react';

export default function RevealEffects() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = document.documentElement;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08 });

    root.classList.add('js');
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove('js');
    };
  }, []);

  return null;
}
