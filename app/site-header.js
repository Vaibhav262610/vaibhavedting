'use client';

import { useEffect, useState } from 'react';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const desktop = window.matchMedia('(min-width: 801px)');
    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false);
    }
    function closeOnDesktop(event) {
      if (event.matches) setMenuOpen(false);
    }

    document.body.classList.add('menu-open');
    document.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);

    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Vaibhav Rajpoot, home">
          <span className="brand-icon" aria-hidden="true"><img src="/assets/logo-mark.svg" alt="" /></span>
          <span className="brand-name"><strong>Vaibhav Rajpoot</strong><span>VIDEO EDITOR</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-controls="primary-nav"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(open => !open)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? 'nav open' : 'nav'} id="primary-nav" aria-label="Primary navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let's talk</a>
        </nav>
      </div>
    </header>
  );
}
