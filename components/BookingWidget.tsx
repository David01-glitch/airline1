'use client';
import { useState } from 'react';
import AirportInput from './AirportInput';
import { Airport } from '@/lib/airports';
import SearchFlow from './SearchFlow';

export default function BookingWidget() {
  const [from, setFrom] = useState<Airport | null>(null);
  const [to, setTo] = useState<Airport | null>(null);
  const today = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate required fields before showing the quote popup
    if (!from) {
      setError('Please select a departure city.');
      return;
    }
    if (!to) {
      setError('Please select a destination city.');
      return;
    }
    if (from.code === to.code) {
      setError('Origin and destination must be different.');
      return;
    }
    if (!date) {
      setError('Please pick a departure date.');
      return;
    }
    setError(null);
    setSearching(true);
  };

  return (
    <>
      <form
        onSubmit={onSearch}
        className="relative mx-auto mt-10 w-full max-w-5xl rounded-3xl bg-white p-5 shadow-soft sm:p-7"
      >
        <div className="mb-5 flex items-center gap-2">
          <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            One Way
          </span>
          <span className="text-xs text-slate-500">Request a quote — live prices confirmed by phone</span>
        </div>

        <div className="grid gap-4 md:grid-cols-12">
          <div className="md:col-span-4">
            <AirportInput
              label="From"
              placeholder="City or airport"
              value={from}
              onChange={(a) => {
                setFrom(a);
                if (a) setError(null);
              }}
            />
          </div>
          <div className="md:col-span-4">
            <AirportInput
              label="To"
              placeholder="City or airport"
              value={to}
              onChange={(a) => {
                setTo(a);
                if (a) setError(null);
              }}
            />
          </div>
          <div className="md:col-span-2 min-w-0">
            <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-ink-900">
              Departure
            </label>
            <input
              type="date"
              min={today}
              value={date}
              onClick={(e) => {
                const el = e.currentTarget as HTMLInputElement & { showPicker?: () => void };
                if (typeof el.showPicker === 'function') {
                  try { el.showPicker(); } catch { /* no-op */ }
                }
              }}
              onChange={(e) => setDate(e.target.value)}
              className="block w-full min-w-0 max-w-full cursor-pointer appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-extrabold text-ink-950 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
              style={{ WebkitAppearance: 'none' }}
            />
          </div>
          <div className="md:col-span-2 min-w-0">
            <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-ink-900">
              Travellers
            </label>
            <TravellerPicker
              adults={adults}
              children={children}
              setAdults={setAdults}
              setChildren={setChildren}
            />
          </div>
        </div>

        {error && (
          <div
            role="alert"
            className="mt-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0" fill="currentColor">
              <path d="M12 2L1 21h22L12 2zm0 6l8.5 14.5h-17L12 8zm-1 4v4h2v-4h-2zm0 5v2h2v-2h-2z" />
            </svg>
            <span className="font-semibold">{error}</span>
          </div>
        )}

        <button
          type="submit"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 px-6 py-4 text-base font-bold text-white shadow-soft transition hover:bg-brand-700 md:w-auto md:px-10"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M21 21l-4.3-4.3a8 8 0 1 0-1.4 1.4L19.6 22 21 21zM4 11a7 7 0 1 1 14 0 7 7 0 0 1-14 0z" />
          </svg>
          Get a Quote
        </button>

        <p className="mt-3 text-xs text-slate-500">
          {SITE_DISCLAIMER}
        </p>
      </form>

      {searching && (
        <SearchFlow
          from={from}
          to={to}
          onClose={() => setSearching(false)}
        />
      )}
    </>
  );
}

const SITE_DISCLAIMER =
  'Indicative search only. Live fares, availability and any service fee are confirmed by a specialist on the phone before booking. AeroTicketHub is an independent travel agency and is not affiliated with any airline.';

function TravellerPicker({
  adults,
  children,
  setAdults,
  setChildren,
}: {
  adults: number;
  children: number;
  setAdults: (n: number) => void;
  setChildren: (n: number) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="block w-full min-w-0 max-w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-base font-extrabold text-ink-950 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
      >
        {adults + children} {adults + children === 1 ? 'Traveller' : 'Travellers'}
      </button>
      {open && (
        <div className="absolute right-0 z-30 mt-2 w-72 max-w-[calc(100vw-2rem)] rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
          <Row label="Adults" sub="12+ yrs" value={adults} setValue={(n) => setAdults(Math.max(1, n))} />
          <Row label="Children" sub="2–11 yrs" value={children} setValue={(n) => setChildren(Math.max(0, n))} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-3 w-full rounded-xl bg-brand-600 py-2 text-sm font-semibold text-white"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}

function Row({
  label,
  sub,
  value,
  setValue,
}: {
  label: string;
  sub: string;
  value: number;
  setValue: (n: number) => void;
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="font-semibold text-ink-900">{label}</p>
        <p className="text-xs text-slate-500">{sub}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setValue(value - 1)}
          className="grid h-8 w-8 place-items-center rounded-full border border-slate-300 text-lg font-bold text-ink-900"
        >
          −
        </button>
        <span className="w-5 text-center font-bold">{value}</span>
        <button
          type="button"
          onClick={() => setValue(value + 1)}
          className="grid h-8 w-8 place-items-center rounded-full border border-slate-300 text-lg font-bold text-ink-900"
        >
          +
        </button>
      </div>
    </div>
  );
}
