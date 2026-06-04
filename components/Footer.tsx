import Link from 'next/link';
import Logo from './Logo';
import { SITE } from '@/lib/site';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/how-it-works', label: 'How It Works' },
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
  { href: '/disclosure', label: 'Affiliate Disclosure' },
  { href: '/payment-policy', label: 'Payment Policy' },
  { href: '/sample-fare-disclosure', label: 'Sample Fare Disclosure' },
  { href: '/accessibility', label: 'Accessibility' },
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
            {SITE.name} is an independent third-party travel agency based in New York. We are not
            an airline. All bookings are completed by phone with a live specialist.
          </p>
          <a
            href={SITE.phoneHref}
            className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-brand-600 px-5 py-3 font-semibold shadow-soft"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
              </svg>
            </span>
            Call {SITE.phone}
          </a>
          {/* Social */}
          <div className="mt-5 flex items-center gap-3">
            <SocialIcon href={SITE.social.facebook} label="Facebook" path="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
            <SocialIcon href={SITE.social.twitter} label="Twitter / X" path="M18.9 3H22l-7.2 8.2L23 21h-6.7l-5.2-6.8L4.9 21H1.8l7.7-8.8L1 3h6.9l4.7 6.2L18.9 3zm-2.4 16.2h1.9L7.6 4.7H5.6l10.9 14.5z" />
            <SocialIcon href={SITE.social.instagram} label="Instagram" path="M12 2.2c3.2 0 3.6 0 4.8.1 1.2 0 1.9.3 2.3.4.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.4.4 1.1.4 2.3.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c0 1.2-.3 1.9-.4 2.3-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.4.2-1.1.4-2.3.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2 0-1.9-.3-2.3-.4-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.4-.4-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c0-1.2.3-1.9.4-2.3.2-.6.5-1 1-1.5s.9-.8 1.5-1c.4-.2 1.1-.4 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.2 0-3.5 0-4.7.1-1.1 0-1.7.2-2.1.4-.5.2-.9.5-1.3.9s-.6.8-.9 1.3c-.2.4-.4 1-.4 2.1-.1 1.2-.1 1.5-.1 4.7s0 3.5.1 4.7c0 1.1.2 1.7.4 2.1.2.5.5.9.9 1.3s.8.6 1.3.9c.4.2 1 .4 2.1.4 1.2.1 1.5.1 4.7.1s3.5 0 4.7-.1c1.1 0 1.7-.2 2.1-.4.5-.2.9-.5 1.3-.9s.6-.8.9-1.3c.2-.4.4-1 .4-2.1.1-1.2.1-1.5.1-4.7s0-3.5-.1-4.7c0-1.1-.2-1.7-.4-2.1-.2-.5-.5-.9-.9-1.3s-.8-.6-1.3-.9c-.4-.2-1-.4-2.1-.4-1.2-.1-1.5-.1-4.7-.1zm0 3.1a5 5 0 1 1 0 9.9 5 5 0 0 1 0-9.9zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4zm5.2-2A1.2 1.2 0 1 1 17.2 6a1.2 1.2 0 0 1 0 1z" />
            <SocialIcon href={SITE.social.linkedin} label="LinkedIn" path="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.3 18.3v-8.1H5.7v8.1h2.6zM7 8.9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm11.3 9.4v-4.4c0-2.3-1.2-3.4-2.9-3.4a2.5 2.5 0 0 0-2.3 1.3v-1.1h-2.6c0 .7 0 8.1 0 8.1H13v-4.5c0-.2 0-.5.1-.7.2-.5.6-1 1.4-1 1 0 1.4.8 1.4 1.9v4.3h2.4z" />
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white">
            Navigation
          </h4>
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

      {/* Regulatory + recording + service-fee notices */}
      <div className="relative border-t border-white/10">
        <div className="section py-5 text-xs text-white/55">
          <p className="leading-relaxed">
            <strong className="text-white/80">Important notices:</strong> {SITE.name} is an
            independent third-party travel agency and is not affiliated, associated, authorised,
            endorsed by, or in any way officially connected with any airline. All airline names,
            trademarks and logos referenced are the property of their respective owners and are
            used for identification purposes only. Prices shown on this site are illustrative
            sample fares; live fares are confirmed verbally by a specialist before any payment.
            Calls to our travel desk may be recorded for quality assurance and training. We do not
            process payments on this website.
          </p>
          <p className="mt-3 leading-relaxed">
            <strong className="text-white/80">Seller of Travel:</strong>{' '}
            {SITE.sellerRegistrations.join(' · ')}. Established {SITE.founded}.
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, path }: { href: string; label: string; path: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/80 transition hover:bg-white/15 hover:text-white"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d={path} />
      </svg>
    </a>
  );
}
