'use client';
import { useEffect, useRef, useState } from 'react';
import { searchAirports, AIRPORTS, Airport } from '@/lib/airports';

const POPULAR_CODES = [
  'JFK', 'LAX', 'ORD', 'MIA', 'LHR', 'DXB', 'CDG', 'SIN',
  'DEL', 'BOM', 'BLR', 'HYD', 'MAA', 'CCU', 'GOI', 'NRT',
];
const POPULAR: Airport[] = POPULAR_CODES
  .map((c) => AIRPORTS.find((a) => a.code === c))
  .filter(Boolean) as Airport[];

export default function AirportInput({
  label,
  placeholder,
  value,
  onChange,
  openSignal,
}: {
  label: string;
  placeholder: string;
  value: Airport | null;
  onChange: (a: Airport | null) => void;
  /** When this number changes, the dropdown auto-opens (used for guided flow). */
  openSignal?: number;
}) {
  const [q, setQ] = useState(value ? `${value.city} (${value.code})` : '');
  const [open, setOpen] = useState(false);
  const [hits, setHits] = useState<Airport[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    setHits(q.trim() ? searchAirports(q) : POPULAR);
  }, [q]);

  // Auto-open when parent toggles openSignal
  useEffect(() => {
    if (openSignal === undefined || openSignal === 0) return;
    setOpen(true);
    inputRef.current?.focus({ preventScroll: false });
    inputRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, [openSignal]);

  const pick = (a: Airport) => {
    onChange(a);
    setQ(`${a.city} (${a.code})`);
    setOpen(false);
  };

  const showHeader = !q.trim();

  return (
    <div ref={ref} className="relative">
      <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-ink-900">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`open ${label} dropdown`}
        className="absolute right-3 top-[34px] grid h-7 w-7 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>
      <input
        ref={inputRef}
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
          if (value) onChange(null);
        }}
        onFocus={() => setOpen(true)}
        onClick={() => setOpen(true)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 pr-10 text-base font-extrabold text-ink-950 outline-none placeholder:font-normal placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
      />
      {open && hits.length > 0 && (
        <div className="no-scrollbar absolute left-0 right-0 z-30 mt-2 max-h-72 overflow-auto rounded-2xl border border-slate-200 bg-white shadow-soft">
          {showHeader && (
            <p className="px-4 pt-3 pb-1 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              Popular airports
            </p>
          )}
          {hits.map((a) => (
            <button
              type="button"
              key={`${a.code}-${a.name}`}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => pick(a)}
              className="flex w-full items-start gap-3 px-4 py-3 text-left transition hover:bg-slate-50"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-xs font-bold text-brand-700">
                {a.code}
              </span>
              <span className="flex-1">
                <span className="block font-semibold text-ink-900">
                  {a.city}, {a.country}
                </span>
                <span className="block text-xs text-slate-500">{a.name}</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
