'use client';
import { useEffect, useRef, useState } from 'react';
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

  // Auto-flow signals & refs for guided experience
  const [fromOpenSignal, setFromOpenSignal] = useState(0);
  const [toOpenSignal, setToOpenSignal] = useState(0);
  const [dateTouched, setDateTouched] = useState(false);
  const submitRef = useRef<HTMLButtonElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const triggeredFromRef = useRef(false);
  const triggeredToRef = useRef(false);
  const triggeredDateFocusRef = useRef(false);
  const triggeredSubmitRef = useRef(false);

  // 1) After 2s on mount → open From dropdown
  useEffect(() => {
    if (triggeredFromRef.current) return;
    const t = setTimeout(() => {
      if (!from) {
        triggeredFromRef.current = true;
        setFromOpenSignal((n) => n + 1);
      }
    }, 2000);
    return () => clearTimeout(t);
  }, [from]);

  // 2) After From is set, wait 2s → open To dropdown
  useEffect(() => {
    if (!from || triggeredToRef.current) return;
    const t = setTimeout(() => {
      if (!to) {
        triggeredToRef.current = true;
        setToOpenSignal((n) => n + 1);
      }
    }, 2000);
    return () => clearTimeout(t);
  }, [from, to]);

  // 3) After To is set, wait 2s → focus the date input so user picks a date
  useEffect(() => {
    if (!from || !to || triggeredDateFocusRef.current) return;
    const t = setTimeout(() => {
      triggeredDateFocusRef.current = true;
      const el = dateRef.current;
      if (el) {
        el.focus({ preventScroll: false });
        el.scrollIntoView({ block: 'center', behavior: 'smooth' });
        // Try to pop the native date picker on supported browsers (Chrome/Edge)
        // @ts-ignore
        if (typeof el.showPicker === 'function') {
          try {
            // @ts-ignore
            el.showPicker();
          } catch {
            // ignore — some browsers throw if not user-initiated
          }
        }
      }
    }, 2000);
    return () => clearTimeout(t);
  }, [from, to]);

  // 4) After From + To set AND user has touched date → wait 2s → auto-submit
  useEffect(() => {
    if (!from || !to || !dateTouched || triggeredSubmitRef.current) return;
    const t = setTimeout(() => {
      triggeredSubmitRef.current = true;
      submitRef.current?.click();
    }, 2000);
    return () => clearTimeout(t);
  }, [from, to, dateTouched, date]);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
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
          <span className="text-xs text-slate-500">Search private fares across 400+ airlines</span>
        </div>

        <div className="grid gap-4 md:grid-cols-12">
          <div className="md:col-span-4">
            <AirportInput
              label="From"
              placeholder="City or airport"
              value={from}
              onChange={setFrom}
              openSignal={fromOpenSignal}
            />
          </div>
          <div className="md:col-span-4">
            <AirportInput
              label="To"
              placeholder="City or airport"
              value={to}
              onChange={setTo}
              openSignal={toOpenSignal}
            />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-ink-900">
              Departure
            </label>
            <input
              ref={dateRef}
              type="date"
              min={today}
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                setDateTouched(true);
              }}
              onBlur={() => setDateTouched(true)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-extrabold text-ink-950 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
            />
          </div>
          <div className="md:col-span-2">
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

        <button
          ref={submitRef}
          type="submit"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 px-6 py-4 text-base font-bold text-white shadow-soft transition hover:bg-brand-700 md:w-auto md:px-10"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M21 21l-4.3-4.3a8 8 0 1 0-1.4 1.4L19.6 22 21 21zM4 11a7 7 0 1 1 14 0 7 7 0 0 1-14 0z" />
          </svg>
          Search Flights
        </button>
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
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-base font-semibold text-ink-900 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
      >
        {adults + children} {adults + children === 1 ? 'Traveller' : 'Travellers'}
      </button>
      {open && (
        <div className="absolute right-0 z-30 mt-2 w-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
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
