import Icon from './Icon';
import { SITE } from '@/lib/site';

export default function SidebarWidgets() {
  return (
    <aside className="space-y-5 lg:sticky lg:top-24">
      {/* Security widget */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
        <div className="bg-gradient-to-r from-brand-600 to-brand-700 px-5 py-3 text-white">
          <p className="text-[11px] font-extrabold uppercase tracking-widest">
            Why book with our travel desk
          </p>
        </div>
        <ul className="space-y-3 p-5 text-sm text-slate-700">
          {[
            { icon: 'lock', label: 'Secure SSL booking' },
            { icon: 'shield', label: 'PCI-compliant payment processing' },
            { icon: 'check', label: 'No service fee charged to traveller' },
            { icon: 'headset', label: '24×7 multilingual support' },
            { icon: 'plane', label: 'Independent travel agency · NY' },
          ].map((r) => (
            <li key={r.label} className="flex items-center gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                <Icon name={r.icon} className="h-4 w-4" />
              </span>
              <span className="font-semibold">{r.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Call center widget */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
        <div
          className="aspect-[16/10] bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=70)',
          }}
          role="img"
          aria-label="A travel desk agent with a headset"
        />
        <div className="p-5">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
            Toll-Free Travel Desk
          </p>
          <a
            href={SITE.phoneHref}
            className="mt-1 block text-2xl font-extrabold tracking-tight text-slate-900"
          >
            {SITE.phone}
          </a>
          <p className="mt-2 text-xs text-slate-600">
            A real travel specialist answers — no automated menus.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-1 rounded-xl bg-brand-600 px-3 py-2.5 text-xs font-extrabold uppercase tracking-wide text-white shadow-soft transition hover:bg-brand-700"
            >
              <Icon name="headset" className="h-3.5 w-3.5" /> Call Now
            </a>
            <a
              href={SITE.emailHref}
              className="inline-flex items-center justify-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-extrabold uppercase tracking-wide text-slate-700 hover:bg-slate-50"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Deals widget */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
        <div className="bg-slate-900 px-5 py-3 text-white">
          <p className="text-[11px] font-extrabold uppercase tracking-widest">Specialist services</p>
        </div>
        <ul className="divide-y divide-slate-100 text-sm">
          {[
            { label: 'Last-minute flight bookings', desc: 'Within 48 hours of departure' },
            { label: 'Group travel assistance', desc: '10+ travellers on a single itinerary' },
            { label: 'Family trip planning', desc: 'Connecting flights and seat selection' },
            { label: 'Business travel desk', desc: 'Flexible fare options' },
            { label: 'Multi-city itineraries', desc: 'Custom routing across regions' },
          ].map((d) => (
            <li key={d.label} className="px-5 py-3">
              <p className="font-bold text-slate-900">{d.label}</p>
              <p className="mt-0.5 text-xs text-slate-500">{d.desc}</p>
            </li>
          ))}
        </ul>
        <div className="border-t border-slate-100 p-4">
          <a
            href={SITE.phoneHref}
            className="block rounded-xl bg-slate-900 px-3 py-2.5 text-center text-xs font-extrabold uppercase tracking-wide text-white"
          >
            Speak with a specialist
          </a>
        </div>
      </div>
    </aside>
  );
}
