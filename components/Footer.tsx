import Link from 'next/link';
import Logo from './Logo';
import { SITE } from '@/lib/site';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/airline-reservation', label: 'Airline Reservation' },
  { href: '/flight-changes', label: 'Flight Changes' },
  { href: '/cancellation-refund', label: 'Cancellation & Refund' },
  { href: '/name-correction', label: 'Name Correction' },
  { href: '/blog', label: 'Blog' },
];

const legalLinks = [
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/disclosure', label: 'Disclosure' },
  { href: '/payment-policy', label: 'Payment Policy' },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden bg-ink-950 text-white">
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
      <div className="section relative grid gap-8 py-10 md:grid-cols-4 md:gap-10 md:py-12">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {SITE.name} is your trusted travel concierge for finding the best fares across 400+
            global airlines. All bookings are confirmed by phone with a live specialist — we do not
            process payments online.
          </p>
          <a href={SITE.phoneHref} className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-brand-600 px-5 py-3 font-semibold shadow-soft">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
              </svg>
            </span>
            Call {SITE.phone}
          </a>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white">Navigation</h4>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.label} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                <Link href={l.href} className="text-white/80 transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white">Legal</h4>
          <ul className="space-y-2.5">
            {legalLinks.map((l) => (
              <li key={l.label} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                <Link href={l.href} className="text-white/80 transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white">Reach Us</h4>
          <p className="text-white/70 text-sm">Toll Free</p>
          <a href={SITE.phoneHref} className="mt-1 block text-xl font-extrabold tracking-tight">
            {SITE.phone}
          </a>
          <p className="mt-4 text-white/70 text-sm">Email</p>
          <a href={SITE.emailHref} className="mt-0.5 block font-semibold break-all">
            {SITE.email}
          </a>
          <p className="mt-4 text-white/70 text-sm">Office Address</p>
          <address className="mt-0.5 not-italic text-sm leading-relaxed text-white/90">
            {SITE.name}<br />
            {SITE.address.line1}<br />
            {SITE.address.cityState}<br />
            {SITE.address.country}
          </address>
          <p className="mt-4 text-white/70 text-sm">Hours</p>
          <p className="mt-0.5 font-semibold">{SITE.hours}</p>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="section py-5 text-xs text-white/55">
          <p className="leading-relaxed">
            <strong className="text-white/80">Disclaimer:</strong> {SITE.name} is an independent
            third-party travel intermediary and is not affiliated, associated, authorised, endorsed
            by, or in any way officially connected with any airline, including their subsidiaries,
            sub-brands or affiliates. All airline names, trademarks and logos referenced on this
            website remain the property of their respective owners and are used for identification
            purposes only. Fares are subject to airline availability and may change without notice.
            <strong className="text-white/80"> We do not process any payments on this website.</strong> All
            bookings are confirmed verbally on a recorded call with a travel specialist after the
            traveller has reviewed and approved the itinerary and final price.
          </p>
          <p className="mt-3">© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
