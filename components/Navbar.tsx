'use client';
import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';
import { SITE } from '@/lib/site';

const links = [
  { href: '/destination', label: 'Hotels' },
  { href: '/contact', label: 'Customer Support' },
  { href: '/contact', label: 'Live Help' },
  { href: '/contact', label: 'My Reservation' },
  { href: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-sm">
      {/* Top thin announcement bar */}
      <div className="hidden bg-slate-900 py-1.5 text-center text-[11px] font-medium tracking-wide text-white sm:block">
        Independent travel agency · 24×7 specialist support ·{' '}
        <a href={SITE.phoneHref} className="font-bold text-brand-300 hover:underline">
          Toll-Free {SITE.phone}
        </a>
      </div>

      <div className="section flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-brand-600"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right: phone block + call CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 px-3 py-1.5">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-50 text-brand-600">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
              </svg>
            </span>
            <div className="leading-tight">
              <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
                Toll-Free
              </p>
              <a href={SITE.phoneHref} className="block text-sm font-extrabold text-slate-900">
                {SITE.phone}
              </a>
            </div>
          </div>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 rounded-2xl bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-soft transition hover:bg-brand-700"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Now
          </a>
        </div>

        {/* Mobile compact call pill + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-3 py-1.5 text-xs font-bold text-white shadow-soft"
          >
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
            </svg>
            {SITE.phone}
          </a>
          <button
            aria-label="menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="section flex flex-col gap-1 py-3">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-600 px-5 py-3 text-sm font-bold text-white"
            >
              Call Toll-Free {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
