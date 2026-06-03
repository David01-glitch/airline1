import Icon from './Icon';
import { POPULAR_ROUTES, REGIONS, TIPS } from '@/lib/content';
import { SITE } from '@/lib/site';

// ───── Travel by Region ─────
export function TravelByRegion() {
  return (
    <section className="section py-20">
      <div className="mb-10 text-center">
        <span className="chip">● Explore</span>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
          Travel by region
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
          Our travel experts cover routes across every region of the world. Call us with where you
          want to go and we'll find affordable phone-only options.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REGIONS.map((r) => (
          <article
            key={r.name}
            className="group relative overflow-hidden rounded-3xl bg-ink-900 shadow-soft"
          >
            <div
              className="aspect-[16/10] bg-cover bg-center transition duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${r.img})` }}
              role="img"
              aria-label={`Photo from ${r.name}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <h3 className="font-display text-2xl font-extrabold">{r.name}</h3>
              <p className="mt-1 text-sm text-white/80">{r.blurb}</p>
              <a
                href={SITE.phoneHref}
                className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-emerald-300"
              >
                Call for a quote →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ───── Popular Routes ─────
export function PopularRoutes() {
  return (
    <section className="section py-20">
      <div className="mb-10 text-center">
        <span className="chip">● Popular Routes</span>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
          Sample fares on busy routes
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500">
          A snapshot of historical sample fares on popular phone-quote routes. Live prices may be
          lower or higher — call our expert for today's quote.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {POPULAR_ROUTES.map((r) => (
          <a
            key={`${r.from}-${r.to}`}
            href={SITE.phoneHref}
            className="card group flex flex-col gap-4 p-5 transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">From</p>
                <p className="text-2xl font-extrabold text-ink-900">{r.from}</p>
                <p className="text-xs text-slate-500">{r.fromCity}</p>
              </div>
              <Icon name="arrow" className="h-5 w-5 text-brand-500" />
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">To</p>
                <p className="text-2xl font-extrabold text-ink-900">{r.to}</p>
                <p className="text-xs text-slate-500">{r.toCity}</p>
              </div>
            </div>
            <div className="flex items-end justify-between border-t border-slate-100 pt-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Sample fare from</p>
                <p className="text-xl font-extrabold text-brand-700">${r.price}*</p>
              </div>
              <span className="text-xs font-bold text-brand-700 group-hover:underline">
                Get quote →
              </span>
            </div>
          </a>
        ))}
      </div>
      <p className="mt-6 text-center text-[11px] text-slate-400">
        *Sample fares are illustrative only and based on past observed prices for similar dates.
        Not bookable as shown. Call our expert for the live price on your dates.
      </p>
    </section>
  );
}

// ───── How to Find Affordable Airfare ─────
export function AffordableTips() {
  return (
    <section className="section py-20">
      <div className="rounded-[2rem] bg-slate-50 p-10 sm:p-14">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip">● Travel Tips</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            How to find affordable airfare
          </h2>
          <p className="mt-3 text-slate-600">
            A few practical habits travellers use to keep flight costs in check — and where a
            travel expert can add real value.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {TIPS.map((t) => (
            <div key={t.title} className="card p-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <Icon name={t.icon} />
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-ink-900">{t.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───── Trust Badges Row ─────
export function TrustBadges() {
  return (
    <section className="section py-12">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <p className="text-center text-[11px] font-bold uppercase tracking-widest text-slate-400">
          Secure, transparent, traveller-friendly
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {/* Payment method pills (generic — no specific card art) */}
          {[
            { label: 'VISA', cls: 'text-blue-700 ring-blue-200 bg-blue-50' },
            { label: 'MASTERCARD', cls: 'text-orange-600 ring-orange-200 bg-orange-50' },
            { label: 'AMEX', cls: 'text-sky-700 ring-sky-200 bg-sky-50' },
            { label: 'DISCOVER', cls: 'text-amber-700 ring-amber-200 bg-amber-50' },
          ].map((p) => (
            <span
              key={p.label}
              className={`inline-flex items-center rounded-lg px-3 py-1.5 text-[11px] font-bold tracking-widest ring-1 ${p.cls}`}
            >
              {p.label}
            </span>
          ))}
          {/* Trust seals as small badges (visual placeholders) */}
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-3 py-1.5 text-[11px] font-bold tracking-widest text-emerald-700 ring-1 ring-emerald-200">
            <Icon name="lock" className="h-3 w-3" /> SSL SECURE
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-1.5 text-[11px] font-bold tracking-widest text-slate-700 ring-1 ring-slate-200">
            <Icon name="shield" className="h-3 w-3" /> PCI COMPLIANT
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-50 px-3 py-1.5 text-[11px] font-bold tracking-widest text-brand-700 ring-1 ring-brand-200">
            <Icon name="headset" className="h-3 w-3" /> 24×7 SUPPORT
          </span>
        </div>
        <p className="mt-4 text-center text-[11px] leading-relaxed text-slate-500">
          Payments are processed by certified PCI-DSS third-party processors on the phone with a
          live agent. We do not store card details on this website.
        </p>
      </div>
    </section>
  );
}

// ───── Newsletter signup with CAN-SPAM consent ─────
export function Newsletter() {
  return (
    <section className="section py-16">
      <div className="overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-10 text-white sm:px-12 sm:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="chip">● Travel Insights</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Get occasional travel ideas & fare tips
            </h2>
            <p className="mt-3 text-sm text-white/75">
              No spam. Just thoughtful, low-frequency emails on travel timing, destination picks,
              and money-saving tips from our experts. Unsubscribe in one click any time.
            </p>
          </div>
          <form
            action={SITE.emailHref}
            method="POST"
            className="rounded-2xl bg-white p-5 text-ink-900 shadow-soft sm:p-6"
          >
            <label htmlFor="newsletter-email" className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Your email
            </label>
            <div className="mt-1.5 flex flex-col gap-2 sm:flex-row">
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-semibold outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
              />
              <button
                type="submit"
                className="rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-brand-700"
              >
                Subscribe
              </button>
            </div>
            <label className="mt-3 flex cursor-pointer items-start gap-2 text-[11px] leading-relaxed text-slate-500">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-0.5 h-3.5 w-3.5 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
              />
              <span>
                I agree to receive marketing emails from {SITE.name}. I understand I can unsubscribe
                at any time. See our{' '}
                <a href="/privacy" className="font-semibold text-brand-700 underline">
                  Privacy Policy
                </a>
                .
              </span>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}
