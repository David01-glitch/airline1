'use client';
import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';
import CallButton from './CallButton';
import { SITE } from '@/lib/site';

const links = [
  { href: '/about', label: 'About' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/destination', label: 'Destinations' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-ink-950/85 backdrop-blur supports-[backdrop-filter]:bg-ink-950/70">
      <div className="section flex h-16 items-center justify-between gap-3">
        <Logo light />

        {/* Compact call pill — always visible (mobile + desktop) */}
        <a
          href={SITE.phoneHref}
          className="ml-auto inline-flex items-center gap-2 rounded-full bg-brand-600 px-3.5 py-2 text-xs font-bold text-white shadow-soft transition hover:bg-brand-700 sm:px-4 sm:text-sm md:hidden"
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
            </svg>
          </span>
          <span className="whitespace-nowrap">{SITE.phone}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-white/80 transition hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={SITE.phoneHref} className="text-sm font-medium text-white/85 hover:text-white">
            Travel Desk
          </a>
          <CallButton />
        </div>
        <button
          aria-label="menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 text-white md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-ink-950 md:hidden">
          <div className="section flex flex-col gap-1 py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-white/90 hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <a href={SITE.phoneHref} className="rounded-xl px-3 py-2.5 text-white/90 hover:bg-white/5">
              Travel Desk
            </a>
            <div className="pt-2">
              <CallButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
