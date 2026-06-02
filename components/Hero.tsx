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
        role="img"
        aria-label="Wing of an aircraft above clouds"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/85 via-ink-950/70 to-ink-950/95" />
      <div className="section pb-12 pt-16 text-white sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-white/80 backdrop-blur">
            INDEPENDENT TRAVEL AGENCY · USA
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Find low-fare flight options.
            <br />
            <span className="bg-gradient-to-r from-brand-400 to-brand-100 bg-clip-text text-transparent">
              Book them on a quick call.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 sm:text-lg">
            {SITE.name} is an independent travel agency. We help travellers find{' '}
            <strong className="text-white">low-fare phone-only options</strong> for domestic and
            international routes — share your trip below and a specialist will call back with the
            live price.
          </p>
        </div>
        <BookingWidget />
        <p className="mt-6 text-center text-xs text-white/55">
          Call our travel desk:{' '}
          <a href={SITE.phoneHref} className="font-semibold text-white underline-offset-4 hover:underline">
            {SITE.phone}
          </a>{' '}
          · Calls may be recorded for quality assurance.
        </p>
      </div>
    </section>
  );
}
