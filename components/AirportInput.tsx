'use client';
import { useEffect, useRef, useState } from 'react';
import { searchAirports, Airport } from '@/lib/airports';

export default function AirportInput({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: Airport | null;
  onChange: (a: Airport | null) => void;
}) {
  const [q, setQ] = useState(value ? `${value.city} (${value.code})` : '');
  const [open, setOpen] = useState(false);
  const [hits, setHits] = useState<Airport[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    setHits(searchAirports(q));
  }, [q]);

  const pick = (a: Airport) => {
    onChange(a);
    setQ(`${a.city} (${a.code})`);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-700/70">
        {label}
      </label>
      <input
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
          if (value) onChange(null);
        }}
        onFocus={() => setOpen(true)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-semibold text-ink-900 outline-none placeholder:font-normal placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
      />
      {open && hits.length > 0 && (
        <div className="no-scrollbar absolute left-0 right-0 z-30 mt-2 max-h-72 overflow-auto rounded-2xl border border-slate-200 bg-white shadow-soft">
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
