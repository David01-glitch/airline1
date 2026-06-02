import Link from 'next/link';
import Icon from './Icon';
import { DESTINATIONS, FEATURES, TESTIMONIALS, VALUE_PROPS } from '@/lib/content';
import { SITE } from '@/lib/site';

export function Features() {
  return (
    <section className="section py-20">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <div key={f.title} className="card p-6 transition hover:-translate-y-1 hover:shadow-glow">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
              <Icon name={f.icon} />
            </div>
            <h3 className="mt-5 text-lg font-extrabold text-ink-900">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative">
          <div
            className="aspect-[5/4] rounded-3xl bg-slate-200 shadow-soft"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=70)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute -bottom-6 -right-6 hidden rounded-3xl bg-ink-950 p-6 text-white shadow-soft sm:block">
            <p className="text-3xl font-extrabold">10M+</p>
            <p className="text-xs uppercase tracking-widest text-white/70">Travellers Served</p>
          </div>
        </div>
        <div>
          <span className="chip">● Independent Travel Agency</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink-900 sm:text-5xl">
            A travel desk<br />you can actually talk to.
          </h2>
          <p className="mt-5 text-slate-600">
            {SITE.name} is an independent third-party travel agency based in New York. We help
            travellers plan and book flights with a live specialist on the phone, so every fare,
            fare rule is reviewed verbally before any payment is taken — and we do not add a
            service fee.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              { label: '24/7 Live Support' },
              { label: 'Phone-Only Booking' },
              { label: 'Fees Disclosed Upfront' },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-brand-50/60 p-4">
                <div className="flex items-center gap-2 text-brand-700">
                  <Icon name="check" className="h-5 w-5" />
                  <span className="font-bold">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Destinations() {
  return (
    <section className="section py-20">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <span className="chip">● Popular Routes</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Where travellers are heading
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-500">
            All prices shown are <strong>illustrative sample fares</strong> based on past booking data
            for reference only. Live availability and final pricing are confirmed by our travel
            specialists over the phone.
          </p>
        </div>
        <Link href="/destination" className="hidden text-sm font-semibold text-brand-600 hover:text-brand-700 sm:inline-flex">
          Explore all →
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {DESTINATIONS.map((d) => (
          <article
            key={d.city}
            className="group relative overflow-hidden rounded-3xl bg-ink-900 shadow-soft"
          >
            <div
              className="aspect-[4/5] bg-cover bg-center transition duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${d.img})` }}
              role="img"
              aria-label={`Photo of ${d.city}, ${d.country}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-xs uppercase tracking-widest text-white/70">{d.country}</p>
              <h3 className="mt-1 font-display text-3xl font-extrabold">{d.city}</h3>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-white/70">Sample fare from</span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-sm font-bold backdrop-blur">
                  ${d.price}*
                </span>
              </div>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-white/55">
                *Illustrative · call for live price
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ValueProps() {
  return (
    <section className="section py-20">
      <div className="rounded-[2rem] bg-ink-950 p-10 text-white sm:p-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip">● Why {SITE.name}</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Built for travellers who value their time
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VALUE_PROPS.map((v) => (
            <div key={v.title} className="rounded-3xl bg-white/5 p-7 backdrop-blur transition hover:bg-white/10">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/20 text-brand-100">
                <Icon name={v.icon} />
              </div>
              <h3 className="mt-5 text-xl font-extrabold">{v.title}</h3>
              <p className="mt-2 text-white/70">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const avg = (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length).toFixed(1);
  return (
    <section className="section py-20">
      <div className="mb-10 text-center">
        <span className="chip">● Customer Reviews</span>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
          What our customers say
        </h2>
        <p className="mt-3 text-sm text-slate-500">
          Average rating <strong className="text-ink-900">{avg} / 5</strong> based on{' '}
          {TESTIMONIALS.length}+ verified customer reviews
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="card relative p-8">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon
                  key={i}
                  name="star"
                  className={`h-4 w-4 ${i < t.rating ? 'text-orange-400' : 'text-slate-200'}`}
                />
              ))}
              <span className="ml-2 text-xs font-bold text-slate-500">{t.rating}.0</span>
            </div>
            <blockquote className="mt-5 text-base leading-relaxed text-slate-700">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className={`grid h-10 w-10 place-items-center rounded-full font-extrabold ${t.color}`}>
                {t.initials}
              </span>
              <span>
                <p className="font-bold text-ink-900">{t.name}</p>
                <p className="text-xs uppercase tracking-widest text-slate-500">{t.location}</p>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function CallCTA() {
  return (
    <section className="section pb-20">
      <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 to-brand-700 p-10 text-white sm:p-16">
        <div className="grid items-center gap-8 sm:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="font-display text-3xl font-extrabold sm:text-4xl">
              Ready to lock in your best fare?
            </h3>
            <p className="mt-3 text-white/85">
              A {SITE.name} specialist is one ring away — global routes, private inventory,
              instant confirmation.
            </p>
          </div>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-5 text-lg font-extrabold text-brand-700 shadow-soft transition hover:bg-brand-50"
          >
            <Icon name="headset" className="h-6 w-6" />
            Call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
