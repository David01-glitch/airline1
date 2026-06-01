import BookingWidget from './BookingWidget';
import { SITE } from '@/lib/site';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2200&q=70)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/85 via-ink-950/70 to-ink-950/95" />
      <div className="section pb-12 pt-16 text-white sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-white/80 backdrop-blur">
            ● PRIVATE FARES · 400+ AIRLINES
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            {SITE.tagline}
            <br />
            <span className="bg-gradient-to-r from-brand-400 to-brand-100 bg-clip-text text-transparent">
              The Clouds.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">{SITE.subTagline}</p>
        </div>
        <BookingWidget />
        <div className="mt-8 flex justify-center">
          <a
            href={SITE.phoneHref}
            className="group inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2.5 backdrop-blur transition hover:border-emerald-400/60 hover:bg-emerald-500/15"
          >
            <span className="relative grid place-items-center">
              <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            </span>
            <span className="text-sm font-semibold text-emerald-100 sm:text-base">
              Talk to a specialist 24/7
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span className="text-base font-extrabold tracking-wide text-white sm:text-lg">
              {SITE.phone}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
