import PageShell from '@/components/PageShell';
import { SITE } from '@/lib/site';
import Icon from '@/components/Icon';

export const metadata = { title: `Contact — ${SITE.name}` };

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact Us"
      title="We are here, 24 × 7"
      subtitle="Phone is the fastest way to reach us — all bookings are confirmed verbally on a recorded call."
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
          <h3 className="mt-4 text-2xl font-extrabold text-ink-900">Email & address</h3>
          <p className="mt-2 text-slate-600">For receipts, refunds, name corrections, partnerships.</p>
          <a href={SITE.emailHref} className="mt-5 inline-flex items-center gap-3 rounded-2xl border border-brand-200 bg-brand-50 px-5 py-3 font-bold text-brand-700 break-all">
            {SITE.email}
          </a>
          <address className="mt-6 text-sm not-italic leading-relaxed text-slate-700">
            <strong className="block text-ink-900">{SITE.legalName}</strong>
            {SITE.address.line1}
            <br />
            {SITE.address.cityState}
            <br />
            {SITE.address.country}
          </address>
        </div>
      </div>

      <form
        className="card mx-auto mt-12 max-w-2xl p-8"
        action="https://formsubmit.co/aeroticekthub@gmail.com"
        method="POST"
      >
        {/* honeypot — bots fill this, humans don't see it */}
        <input type="text" name="_honey" style={{ display: 'none' }} />
        <input type="hidden" name="_captcha" value="true" />
        <input type="hidden" name="_subject" value="New contact from AeroTicketHub" />
        <h3 className="text-2xl font-extrabold text-ink-900">Send us a message</h3>
        <p className="mt-2 text-sm text-slate-500">Or call {SITE.phone} for instant help.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Field label="Full name" type="text" name="name" required />
          <Field label="Email" type="email" name="email" required />
          <Field label="Phone" type="tel" name="phone" />
          <Field label="Booking ref (optional)" type="text" name="ref" />
        </div>
        <div className="mt-4">
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-700/70">Message</label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-medium text-ink-900 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
          />
        </div>
        <p className="mt-4 text-xs text-slate-500">
          By submitting this form you agree to our{' '}
          <a href="/privacy" className="underline">Privacy Policy</a> and{' '}
          <a href="/terms" className="underline">Terms</a>. We do not accept payments via this form.
        </p>
        <button className="mt-5 rounded-2xl bg-brand-600 px-6 py-3 font-bold text-white shadow-soft">
          Submit
        </button>
      </form>
    </PageShell>
  );
}

function Field({ label, type, name, required = false }: { label: string; type: string; name: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-700/70">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-medium text-ink-900 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
      />
    </div>
  );
}
