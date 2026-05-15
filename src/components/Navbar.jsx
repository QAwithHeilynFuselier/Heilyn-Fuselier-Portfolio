import { useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ onContactClick }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-surface">
      <nav
        className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Main"
      >
        <a href="#" className="text-sm text-zinc-200">
          Heilyn Fuselier
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
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
            {links.map((link) => (
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
  );
}
