'use client';
import { useState } from 'react';
import AirportInput from './AirportInput';
import { Airport } from '@/lib/airports';
import SearchFlow from './SearchFlow';

type TripType = 'round' | 'oneway';
type CabinClass = 'Economy' | 'Premium Economy' | 'Business' | 'First';

export default function BookingWidget() {
  const [trip, setTrip] = useState<TripType>('round');
  const [from, setFrom] = useState<Airport | null>(null);
  const [to, setTo] = useState<Airport | null>(null);
  const today = new Date().toISOString().slice(0, 10);
  const week = new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10);
  const [depDate, setDepDate] = useState(today);
  const [retDate, setRetDate] = useState(week);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [cabin, setCabin] = useState<CabinClass>('Economy');
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!from) return setError('Please select a departure city.');
    if (!to) return setError('Please select a destination city.');
    if (from.code === to.code) return setError('Origin and destination must be different.');
    if (!depDate) return setError('Please pick a departure date.');
    if (trip === 'round' && !retDate) return setError('Please pick a return date.');
    setError(null);
    setSearching(true);
  };

  return (
    <>
      <form
        onSubmit={onSearch}
        className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-soft"
      >
        {/* Tabs */}
        <div className="flex items-center gap-1 border-b border-slate-100 bg-slate-50 px-3 pt-3 sm:px-5">
          <TabButton active={trip === 'round'} onClick={() => setTrip('round')}>
            Round Trip
          </TabButton>
          <TabButton active={trip === 'oneway'} onClick={() => setTrip('oneway')}>
            One Way
          </TabButton>
          <span className="ml-auto hidden text-xs font-semibold text-slate-500 sm:inline">
            Live prices confirmed by phone
          </span>
        </div>

        <div className="p-4 sm:p-6">
          <div className="grid gap-3 md:grid-cols-12">
            <div className="relative md:col-span-3">
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

            {/* Swap button */}
            <div className="flex justify-center md:col-span-1 md:items-end md:pb-2">
              <button
                type="button"
                onClick={swap}
                aria-label="Swap origin and destination"
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-brand-600 shadow-sm transition hover:bg-brand-50"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M7 16V4l-4 4 4 4M17 8v12l4-4-4-4" />
                  <path d="M7 4h14M3 20h14" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </button>
            </div>

            <div className="md:col-span-3">
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
              <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-700">
                Departure
              </label>
              <input
                type="date"
                min={today}
                value={depDate}
                onClick={(e) => {
                  const el = e.currentTarget as HTMLInputElement & { showPicker?: () => void };
                  if (typeof el.showPicker === 'function') {
                    try { el.showPicker(); } catch { /* no-op */ }
                  }
                }}
                onChange={(e) => setDepDate(e.target.value)}
                className="block w-full min-w-0 cursor-pointer appearance-none rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm font-extrabold text-slate-900 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
                style={{ WebkitAppearance: 'none' }}
              />
            </div>

            {trip === 'round' && (
              <div className="md:col-span-2 min-w-0">
                <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Return
                </label>
                <input
                  type="date"
                  min={depDate}
                  value={retDate}
                  onClick={(e) => {
                    const el = e.currentTarget as HTMLInputElement & { showPicker?: () => void };
                    if (typeof el.showPicker === 'function') {
                      try { el.showPicker(); } catch { /* no-op */ }
                    }
                  }}
                  onChange={(e) => setRetDate(e.target.value)}
                  className="block w-full min-w-0 cursor-pointer appearance-none rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm font-extrabold text-slate-900 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
                  style={{ WebkitAppearance: 'none' }}
                />
              </div>
            )}

            <div className={`min-w-0 ${trip === 'round' ? 'md:col-span-1' : 'md:col-span-3'}`}>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-700">
                Travellers
              </label>
              <TravellerPicker
                adults={adults}
                children={children}
                cabin={cabin}
                setAdults={setAdults}
                setChildren={setChildren}
                setCabin={setCabin}
              />
            </div>
          </div>

          {error && (
            <div
              role="alert"
              className="mt-4 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0" fill="currentColor">
                <path d="M12 2L1 21h22L12 2zm-1 6v6h2V8h-2zm0 8v2h2v-2h-2z" />
              </svg>
              <span className="font-semibold">{error}</span>
            </div>
          )}

          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 px-8 py-4 text-base font-extrabold uppercase tracking-wide text-white shadow-soft transition hover:bg-brand-700 sm:text-lg"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M21 21l-4.3-4.3a8 8 0 1 0-1.4 1.4L19.6 22 21 21zM4 11a7 7 0 1 1 14 0 7 7 0 0 1-14 0z" />
            </svg>
            Search Flights
          </button>

          <p className="mt-3 text-center text-[11px] text-slate-500">
            AeroTicketHub is an independent travel agency based in New York. We are not an airline.
            We do not charge a service fee. Speak with our travel desk to confirm any quote.
          </p>
        </div>
      </form>

      {searching && (
        <SearchFlow from={from} to={to} onClose={() => setSearching(false)} />
      )}
    </>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-t-xl px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide transition ${
        active
          ? 'bg-white text-brand-600 shadow-[0_-2px_0_inset] shadow-brand-600'
          : 'text-slate-500 hover:text-slate-700'
      }`}
    >
      {children}
    </button>
  );
}

function TravellerPicker({
  adults,
  children,
  cabin,
  setAdults,
  setChildren,
  setCabin,
}: {
  adults: number;
  children: number;
  cabin: 'Economy' | 'Premium Economy' | 'Business' | 'First';
  setAdults: (n: number) => void;
  setChildren: (n: number) => void;
  setCabin: (c: 'Economy' | 'Premium Economy' | 'Business' | 'First') => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="block w-full min-w-0 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-left text-sm font-extrabold text-slate-900 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
      >
        {adults + children} <span className="font-bold text-slate-600">·</span>{' '}
        <span className="text-[11px] font-bold uppercase tracking-wide text-slate-600">{cabin}</span>
      </button>
      {open && (
        <div className="absolute right-0 z-30 mt-2 w-80 max-w-[calc(100vw-2rem)] rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
          <Row label="Adults" sub="12+ yrs" value={adults} setValue={(n) => setAdults(Math.max(1, n))} />
          <Row label="Children" sub="2–11 yrs" value={children} setValue={(n) => setChildren(Math.max(0, n))} />
          <label className="mt-3 block text-xs font-bold uppercase tracking-wider text-slate-700">
            Cabin Class
          </label>
          <select
            value={cabin}
            onChange={(e) => setCabin(e.target.value as 'Economy' | 'Premium Economy' | 'Business' | 'First')}
            className="mt-1 block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-900 outline-none focus:border-brand-500"
          >
            <option>Economy</option>
            <option>Premium Economy</option>
            <option>Business</option>
            <option>First</option>
          </select>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-4 w-full rounded-xl bg-brand-600 py-2 text-sm font-bold uppercase text-white"
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
        <p className="font-bold text-slate-900">{label}</p>
        <p className="text-xs text-slate-500">{sub}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setValue(value - 1)}
          className="grid h-8 w-8 place-items-center rounded-full border border-slate-300 text-lg font-bold text-slate-900"
        >
          −
        </button>
        <span className="w-5 text-center font-bold">{value}</span>
        <button
          type="button"
          onClick={() => setValue(value + 1)}
          className="grid h-8 w-8 place-items-center rounded-full border border-slate-300 text-lg font-bold text-slate-900"
        >
          +
        </button>
      </div>
    </div>
  );
}
