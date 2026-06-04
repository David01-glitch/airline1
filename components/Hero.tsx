import BookingWidget from './BookingWidget';
import { SITE } from '@/lib/site';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=2400&q=70)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        role="img"
        aria-label="Aircraft on an airport apron at sunset"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/95" />

      <div className="section pb-10 pt-16 sm:pt-20">
        <div className="max-w-2xl text-white">
          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight drop-shadow sm:text-5xl lg:text-6xl">
            Major Carrier Flight Bookings
          </h1>
          <p className="mt-3 max-w-xl text-base font-medium text-white/90 sm:text-lg">
            Call our travel desk — toll-free, no hold time. Instantly connect with a live travel
            specialist who books across major US and international carriers.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-2xl bg-brand-600 px-6 py-3 text-base font-bold text-white shadow-soft transition hover:bg-brand-700"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
              </svg>
              Call Toll-Free {SITE.phone}
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-white/85 backdrop-blur">
              ● INDEPENDENT TRAVEL AGENCY · NEW YORK
            </span>
          </div>
        </div>

        {/* Search widget pulled into hero */}
        <div className="mt-10">
          <BookingWidget />
        </div>
      </div>
    </section>
  );
}
