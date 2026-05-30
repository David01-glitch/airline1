import Link from 'next/link';
import Logo from './Logo';
import { SITE } from '@/lib/site';

const navLinks = [
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/airline-reservation', label: 'Airline Reservation' },
  { href: '/flight-changes', label: 'Flight Changes' },
  { href: '/cancellation-refund', label: 'Cancellation & Refund' },
  { href: '/name-correction', label: 'Name Correction' },
  { href: '/contact', label: 'Talk to the Agent' },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=60)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/90 to-ink-950" />
      <div className="section relative grid gap-12 py-16 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            {SITE.name} is your trusted travel partner for finding the best fares across 400+ global
            airlines. 24/7 expert agents, zero hidden charges, and secure checkout — every booking,
            every time.
          </p>
          <a href={SITE.phoneHref} className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-brand-600 px-5 py-3 font-semibold shadow-soft">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
              </svg>
            </span>
            Call Now {SITE.phone}
          </a>
          <p className="mt-4 text-xs uppercase tracking-widest text-white/50">{SITE.hq}</p>
        </div>

        <div>
          <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-white">Navigation</h4>
          <ul className="space-y-4">
            {navLinks.map((l) => (
              <li key={l.label} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                <Link href={l.href} className="text-white/80 transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              <a href={SITE.phoneHref} className="text-white/80 hover:text-white">Call Now</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-white">Reach Us</h4>
          <p className="text-white/70">Toll Free</p>
          <a href={SITE.phoneHref} className="mt-1 block text-2xl font-extrabold tracking-tight">
            {SITE.phone}
          </a>
          <p className="mt-6 text-white/70">Email</p>
          <a href={`mailto:${SITE.email}`} className="mt-1 block font-semibold">
            {SITE.email}
          </a>
          <p className="mt-6 text-white/70">Hours</p>
          <p className="mt-1 font-semibold">24 × 7 · 365 days</p>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="section flex flex-col gap-4 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="max-w-3xl leading-relaxed">
            Disclaimer: {SITE.name} is an independent third-party intermediary, not affiliated with
            any airline. All fares are subject to availability and may change without notice.
          </p>
        </div>
      </div>
    </footer>
  );
}
