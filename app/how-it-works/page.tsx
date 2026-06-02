import PageShell from '@/components/PageShell';
import Icon from '@/components/Icon';
import { SITE } from '@/lib/site';

export const metadata = { title: `How It Works — ${SITE.name}` };

const STEPS = [
  {
    title: 'Tell us your trip',
    desc: 'Share your origin, destination, dates and traveller count — either on the website or directly on a call.',
    icon: 'pin',
  },
  {
    title: 'We check live options',
    desc: 'A specialist pulls live fares from the airline and our consolidator partners for your dates.',
    icon: 'tune',
  },
  {
    title: 'You review the quote',
    desc: 'The agent reads out the itinerary, total cost (live airline fare + applicable taxes) and fare rules. You confirm verbally before any charge.',
    icon: 'check',
  },
  {
    title: 'Payment on the call',
    desc: 'Your card is processed by a certified third-party payment processor under the agent’s supervision. The website never stores card details.',
    icon: 'lock',
  },
  {
    title: 'E-ticket arrives',
    desc: 'You receive the airline’s e-ticket by email within minutes, plus a separate payment receipt from the processor.',
    icon: 'plane',
  },
];

export default function Page() {
  return (
    <PageShell
      eyebrow="How It Works"
      title="A live agent, a recorded call, a clean booking"
      subtitle="No online checkout. No surprise charges. Just a straightforward phone conversation that ends with an e-ticket in your inbox."
    >
      <ol className="mx-auto grid max-w-3xl gap-5">
        {STEPS.map((s, i) => (
          <li key={s.title} className="card flex gap-5 p-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-base font-extrabold text-brand-700">
              {i + 1}
            </span>
            <div>
              <h3 className="flex items-center gap-2 text-lg font-extrabold text-ink-900">
                <Icon name={s.icon} className="h-5 w-5 text-brand-600" />
                {s.title}
              </h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
        <h3 className="text-base font-extrabold text-ink-900">What we will never do</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Ask you to pay through gift cards, wire transfers, cryptocurrency or messaging apps.</li>
          <li>Charge your card without first reading out the full total and getting your verbal approval.</li>
          <li>Claim affiliation with an airline we are not actually authorised to represent.</li>
          <li>Add hidden fees after the booking is confirmed.</li>
        </ul>
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-brand-600 p-8 text-white">
        <h3 className="font-display text-2xl font-extrabold">Ready to talk to a specialist?</h3>
        <p className="mt-2 text-white/85">
          Call us 24/7 — no automated menus, just a live travel agent.
        </p>
        <a
          href={SITE.phoneHref}
          className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3 font-extrabold text-brand-700 shadow-soft"
        >
          <Icon name="headset" className="h-5 w-5" /> Call {SITE.phone}
        </a>
      </div>
    </PageShell>
  );
}
