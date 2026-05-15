import { useState } from 'react';
import site from '../../site.config.js';

const { themeConfig } = site;
const routeMap = {
  '/': '#',
  '/projects': '#work',
  '/about': '#about',
};

const navLinks = themeConfig.nav.map((item) => ({
  href: routeMap[item.link] ?? item.link,
  label: item.text,
}));

export default function Navbar({ onContactClick }) {
  const [open, setOpen] = useState(false);
  const logoSrc = import.meta.env.BASE_URL + themeConfig.logo.replace(/^\//, '');

  return (
    <>
      <a href="#" className="personal-logo" aria-label={`${site.title} — home`}>
        <img src={logoSrc} alt="" width={45} height={45} className="h-full w-full rounded-lg" />
      </a>
      <header className="sticky top-0 z-50 border-b border-surface-border bg-surface">
        <nav
          className="mx-auto flex max-w-content items-center justify-between py-4 pl-[4.75rem] pr-5 sm:pl-[5.25rem] sm:pr-8"
          aria-label="Main"
        >
          <a href="#" className="hidden text-sm text-zinc-200 sm:inline">
            {site.title}
          </a>
          <span className="sm:hidden" aria-hidden="true" />

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button type="button" className="btn-primary" onClick={onContactClick}>
                Contact
              </button>
            </li>
          </ul>

          <button
            type="button"
            className="btn-ghost md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </nav>

        {open && (
          <div id="mobile-menu" className="border-t border-surface-border px-5 py-4 md:hidden">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-1 text-sm text-zinc-400"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  className="btn-primary w-full"
                  onClick={() => {
                    setOpen(false);
                    onContactClick();
                  }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
