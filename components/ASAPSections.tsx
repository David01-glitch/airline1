import Icon from './Icon';
import { SITE } from '@/lib/site';

// ───── 1) Trust Reviews row (Trustpilot / Sitejabber / Google / Facebook style) ─────
const REVIEW_PLATFORMS = [
  { name: 'Trustpilot', rating: 4.4, color: 'text-emerald-600', dot: 'bg-emerald-500' },
  { name: 'Sitejabber', rating: 4.5, color: 'text-purple-600', dot: 'bg-purple-500' },
  { name: 'Google', rating: 4.6, color: 'text-blue-600', dot: 'bg-blue-500' },
  { name: 'Facebook', rating: 4.3, color: 'text-sky-600', dot: 'bg-sky-500' },
];

export function TrustReviews() {
  return (
    <section className="section py-10">
      <p className="text-center text-[11px] font-bold uppercase tracking-widest text-slate-500">
        Reviewed by travellers
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {REVIEW_PLATFORMS.map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-soft"
          >
            <div className="flex items-center gap-3">
              <span className={`grid h-9 w-9 place-items-center rounded-full ${p.dot} text-white`}>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M12 .587l3.668 7.568L24 9.75l-6 5.853L19.336 24 12 19.897 4.664 24 6 15.603 0 9.75l8.332-1.595z" />
                </svg>
              </span>
              <div>
                <p className={`text-sm font-extrabold ${p.color}`}>{p.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500">Review us on</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-extrabold text-ink-900">{p.rating}</p>
              <div className="flex gap-0.5 text-orange-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                    <path d="M12 .587l3.668 7.568L24 9.75l-6 5.853L19.336 24 12 19.897 4.664 24 6 15.603 0 9.75l8.332-1.595z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-[10px] text-slate-400">
        Star ratings are aggregated from public review platforms. Number of individual reviews varies by platform.
      </p>
    </section>
  );
}

// ───── 2) Flight Information content section (generic, no brand naming) ─────
export function FlightInfo() {
  return (
    <section className="section py-14">
      <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft lg:grid-cols-[1.4fr_1fr] lg:p-12">
        <div>
          <span className="chip">● Travel Information</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Helpful information for your trip
          </h2>
          <p className="mt-3 text-slate-600">
            Our travel experts assist with bookings on most major US-based and international
            carriers. While each airline has its own specific rules, the items below cover the
            basics most travellers ask us about. Call our travel desk for carrier-specific
            guidance.
          </p>

          <h3 className="mt-8 text-lg font-extrabold text-ink-900">In-cabin amenities</h3>
          <p className="mt-2 text-sm text-slate-600">
            Cabin offerings vary by airline, route and aircraft. On most longer routes you can
            expect:
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {[
              'In-flight entertainment',
              'Snacks and beverages',
              'Wi-Fi (paid or free)',
              'Power outlets / USB ports',
              'Reward / frequent-flyer earning',
              'Mobile app check-in',
              'Pet-in-cabin (subject to airline rules)',
              'Premium seats with extra legroom',
            ].map((a) => (
              <li key={a} className="flex items-center gap-2 text-sm text-slate-700">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-50 text-brand-700">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {a}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-lg font-extrabold text-ink-900">Check-in options</h3>
          <p className="mt-2 text-sm text-slate-600">
            Most carriers open check-in 24 hours before departure and close 45–60 minutes before
            domestic flights (longer for international). You can usually check in via:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>Online check-in via the airline's website</li>
            <li>Mobile check-in via the airline's app</li>
            <li>Airport kiosks (self-service)</li>
            <li>Curbside check-in (where available)</li>
            <li>Ticket counter check-in at the airport</li>
          </ul>

          <h3 className="mt-8 text-lg font-extrabold text-ink-900">Baggage — general rules</h3>
          <p className="mt-2 text-sm text-slate-600">
            Carry-on and checked baggage allowances depend on your fare class, the airline, and
            sometimes the route. As a general starting point on most US carriers:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>1 carry-on bag + 1 personal item (purse, laptop bag) — typically included.</li>
            <li>Carry-on size limits hover around 22 × 14 × 9 inches with handles and wheels.</li>
            <li>Checked-bag size limits typically cap at 62 linear inches and 50 lbs.</li>
            <li>
              Diaper bags, assistive devices, jackets and duty-free items don't usually count
              against the carry-on allowance.
            </li>
            <li>International routes often include 1–2 free checked bags; domestic less so.</li>
          </ul>
          <p className="mt-3 rounded-2xl bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">
            <strong>Important:</strong> the above is general guidance only. For your specific
            ticket, the airline's published rules at the time of booking always apply. Our travel
            desk will read out the exact rules verbally before any booking is confirmed.
          </p>
        </div>

        {/* Right rail — compliance + call badges */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-900">
            <Icon name="lock" className="h-6 w-6" />
            <p className="mt-2 text-sm font-bold">Secure booking</p>
            <p className="mt-1 text-xs leading-relaxed">
              All transactions are processed by certified PCI-DSS Level 1 third-party processors on
              the phone. We do not store cards on this website.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-200 bg-brand-50 p-5 text-brand-900">
            <Icon name="headset" className="h-6 w-6" />
            <p className="mt-2 text-sm font-bold">24×7 travel desk</p>
            <p className="mt-1 text-xs leading-relaxed">
              A live travel specialist is available any hour of the day or night to help with new
              bookings, changes or post-trip support.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-900">
            <Icon name="shield" className="h-6 w-6" />
            <p className="mt-2 text-sm font-bold">No service fee</p>
            <p className="mt-1 text-xs leading-relaxed">
              We do not add a service fee on top of the airline fare. You pay the live airline
              price quoted on the call.
            </p>
          </div>
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-3 rounded-2xl bg-brand-600 px-5 py-4 text-white shadow-soft"
          >
            <Icon name="headset" className="h-5 w-5" />
            <span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-emerald-200">
                Call our travel desk
              </span>
              <span className="block text-base font-extrabold">{SITE.phone}</span>
            </span>
          </a>
        </aside>
      </div>
    </section>
  );
}

// ───── 3) Step-by-step booking process ─────
const STEPS = [
  {
    title: 'Share your trip',
    desc: 'Tell us where you are flying from, where you are going, your dates and how many travellers.',
  },
  {
    title: 'We check the live options',
    desc: 'A specialist pulls live options across major US and international carriers for your dates.',
  },
  {
    title: 'You review the quote',
    desc: 'We read out the itinerary, the total cost and the fare rules. You confirm verbally before any payment is taken.',
  },
  {
    title: 'Payment over the phone',
    desc: 'Your card is processed by a certified PCI-compliant third-party processor on the recorded call.',
  },
  {
    title: 'E-ticket in your inbox',
    desc: 'You receive the airline e-ticket from the carrier itself, plus a separate payment receipt from the processor.',
  },
];

export function BookingSteps() {
  return (
    <section className="section py-16">
      <div className="text-center">
        <span className="chip">● How It Works</span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
          Booking with our travel desk
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500">
          Five short steps. No online checkout. Just a quick phone conversation that ends with an
          e-ticket in your inbox.
        </p>
      </div>

      <ol className="mt-10 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
        {STEPS.map((s, i) => (
          <li key={s.title} className="card relative p-6">
            <span className="absolute -top-3 left-5 inline-flex items-center gap-1 rounded-full bg-brand-600 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
              Step {i + 1}
            </span>
            <h3 className="mt-2 text-base font-extrabold text-ink-900">{s.title}</h3>
            <p className="mt-2 text-xs text-slate-600">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

// ───── 4) Toll-Free CTA band ─────
export function TollFreeBand() {
  return (
    <section className="section py-10">
      <a
        href={SITE.phoneHref}
        className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-6 text-center text-white shadow-soft sm:flex-row sm:gap-6"
      >
        <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15">
          <Icon name="headset" className="h-6 w-6" />
        </span>
        <span className="text-base font-semibold sm:text-lg">
          Speak with our travel desk — toll free
        </span>
        <span className="text-2xl font-extrabold tracking-tight sm:text-3xl">{SITE.phone}</span>
      </a>
    </section>
  );
}

// ───── 5) FAQ accordion ─────
const FAQS = [
  {
    q: 'How do I find an affordable fare for my route?',
    a: 'Booking 5–8 weeks before an international trip and 3–6 weeks before a domestic trip usually surfaces the widest set of options. Being flexible on dates, comparing nearby airports, and asking about consolidator inventory often reveals better options too. Our travel desk can walk you through trade-offs for your specific dates.',
  },
  {
    q: 'Can a travel agent really find better options than I see online?',
    a: 'Sometimes. Phone-only consolidator fares are released to travel agencies but not always listed on public engines. On simple domestic round-trips the online price is usually the same; on long-haul international, multi-city and last-minute bookings, a quick call with an agent is often worth it.',
  },
  {
    q: 'Do you charge a booking or service fee?',
    a: 'No. We do not add a service fee. You pay the live airline fare plus applicable airline taxes — nothing extra from us. Our revenue comes from airline and consolidator commissions, not from charging the traveller.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'All major credit and debit cards (Visa, Mastercard, American Express, Discover), Apple Pay, Google Pay, and approved bank transfers. All payments are processed by certified PCI-DSS Level 1 third-party processors on the recorded call.',
  },
  {
    q: 'Can I change or cancel my ticket after booking?',
    a: 'Changes, cancellations and refunds follow the rules of the operating airline. Some fares are non-refundable; others allow free changes within 24 hours of booking. Our team can read out the exact rules for your fare before you confirm, and can also process the change with the airline on your behalf later.',
  },
  {
    q: 'Are you affiliated with any specific airline?',
    a: 'No. AeroTicketHub is an independent third-party travel agency. We are not affiliated, associated, authorised, endorsed by, or in any way officially connected with any airline. We assist with bookings across many carriers and use airline names only to identify the operating carrier.',
  },
  {
    q: 'Is my phone call recorded?',
    a: 'Yes. Calls to our travel desk may be recorded for quality assurance, training and dispute resolution. The recording captures your verbal confirmation of the itinerary, total cost and fare rules before any charge is made.',
  },
  {
    q: 'How quickly will I receive my e-ticket?',
    a: 'In most cases the airline issues the e-ticket within a few minutes of payment, and you receive it by email directly from the carrier. If you do not see it within an hour, contact us and we will follow up with the airline.',
  },
];

export function FAQ() {
  return (
    <section className="section py-16">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="chip">● FAQ</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="mt-8 divide-y divide-slate-200 rounded-3xl bg-white shadow-soft">
          {FAQS.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-ink-900">
                {f.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
