'use client';
import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';
import CallButton from './CallButton';
import { SITE } from '@/lib/site';

const links = [
  { href: '/about', label: 'About' },
  { href: '/flight', label: 'Flight' },
  { href: '/destination', label: 'Destination' },
  { href: '/blog', label: 'Blog' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-ink-950/85 backdrop-blur supports-[backdrop-filter]:bg-ink-950/70">
      <div className="section flex h-16 items-center justify-between">
        <Logo light />
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-white/80 transition hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={SITE.phoneHref} className="text-sm font-medium text-white/80 hover:text-white">
            <span className="mr-1">●</span>Live Support
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
              ● Live Support
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
