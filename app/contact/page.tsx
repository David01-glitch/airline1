import PageShell from '@/components/PageShell';
import { SITE } from '@/lib/site';
import Icon from '@/components/Icon';

export const metadata = { title: `Contact — ${SITE.name}` };

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact Us"
      title="We are here, 24 × 7"
      subtitle="Phone is the fastest way to reach us. For non-urgent questions, drop a note and we'll reply within hours."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="card p-8">
          <Icon name="headset" className="h-10 w-10 text-brand-600" />
          <h3 className="mt-4 text-2xl font-extrabold text-ink-900">Call our travel desk</h3>
          <p className="mt-2 text-slate-600">A specialist picks up in under 30 seconds.</p>
          <a href={SITE.phoneHref} className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-brand-600 px-5 py-3 font-bold text-white shadow-soft">
            <Icon name="headset" className="h-5 w-5" /> {SITE.phone}
          </a>
          <p className="mt-6 text-xs uppercase tracking-widest text-slate-500">Open all hours, every day</p>
        </div>
        <div className="card p-8">
          <Icon name="pin" className="h-10 w-10 text-brand-600" />
          <h3 className="mt-4 text-2xl font-extrabold text-ink-900">Reach by email</h3>
          <p className="mt-2 text-slate-600">For receipts, refunds, name corrections, partnership inquiries.</p>
          <a href={`mailto:${SITE.email}`} className="mt-5 inline-flex items-center gap-3 rounded-2xl border border-brand-200 bg-brand-50 px-5 py-3 font-bold text-brand-700">
            {SITE.email}
          </a>
          <p className="mt-6 text-xs uppercase tracking-widest text-slate-500">Reply within a few hours</p>
        </div>
      </div>

      <form className="mt-12 card mx-auto max-w-2xl p-8">
        <h3 className="text-2xl font-extrabold text-ink-900">Send us a message</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Field label="Full name" type="text" name="name" />
          <Field label="Email" type="email" name="email" />
          <Field label="Phone" type="tel" name="phone" />
          <Field label="Booking ref (optional)" type="text" name="ref" />
        </div>
        <div className="mt-4">
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-700/70">Message</label>
          <textarea
            rows={4}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-medium text-ink-900 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
          />
        </div>
        <button className="mt-6 rounded-2xl bg-brand-600 px-6 py-3 font-bold text-white shadow-soft">Submit</button>
        <p className="mt-3 text-xs text-slate-500">Or call {SITE.phone} for instant help.</p>
      </form>
    </PageShell>
  );
}

function Field({ label, type, name }: { label: string; type: string; name: string }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-700/70">{label}</label>
      <input
        type={type}
        name={name}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-medium text-ink-900 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
      />
    </div>
  );
}
