import PageShell from '@/components/PageShell';
import Icon from '@/components/Icon';
import { SITE } from '@/lib/site';

export type Step = { title: string; desc: string };
export type FAQ = { q: string; a: string };

export default function ServicePage({
  eyebrow,
  title,
  subtitle,
  intro,
  steps,
  faqs,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  steps: Step[];
  faqs: FAQ[];
}) {
  return (
    <PageShell eyebrow={eyebrow} title={title} subtitle={subtitle}>
      <div className="mx-auto max-w-3xl text-slate-700">
        <p className="text-lg leading-relaxed">{intro}</p>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-3xl font-extrabold text-ink-900">How it works</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="card p-6">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-50 text-sm font-extrabold text-brand-700">
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-ink-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-[2rem] bg-ink-950 p-10 text-white sm:p-14">
        <div className="grid items-center gap-6 sm:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="font-display text-3xl font-extrabold">Need help right now?</h3>
            <p className="mt-3 text-white/80">
              Call a {SITE.name} specialist any time — we handle the airline conversation for you.
            </p>
          </div>
          <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-lg font-extrabold text-brand-700 shadow-soft">
            <Icon name="headset" className="h-5 w-5" /> {SITE.phone}
          </a>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-3xl font-extrabold text-ink-900">Frequently asked</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-3xl bg-white shadow-soft">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left font-bold text-ink-900">
                {f.q}
                <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-50 text-brand-700 group-open:rotate-45 transition">
                  +
                </span>
              </summary>
              <p className="mt-3 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
