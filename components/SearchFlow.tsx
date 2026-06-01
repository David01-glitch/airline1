'use client';
import { useEffect, useState } from 'react';
import { Airport } from '@/lib/airports';
import { SITE } from '@/lib/site';

export default function SearchFlow({
  from,
  to,
  onClose,
}: {
  from: Airport | null;
  to: Airport | null;
  onClose: () => void;
}) {
  const [stage, setStage] = useState<'scanning' | 'ready'>('scanning');

  useEffect(() => {
    const t = setTimeout(() => setStage('ready'), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-ink-950/85 p-4 backdrop-blur-sm">
      {stage === 'scanning' ? <Scanning from={from} to={to} /> : <BestFare onClose={onClose} />}
    </div>
  );
}

function Scanning({ from, to }: { from: Airport | null; to: Airport | null }) {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-soft">
      <div className="relative mx-auto h-20 w-20">
        <svg className="absolute inset-0 h-full w-full animate-spin" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="#5b67f5"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="80 264"
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-600" fill="currentColor">
              <path d="M21 16v-2l-8-5V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </div>
        </div>
      </div>
      <h3 className="mt-7 text-2xl font-extrabold text-ink-900">Scanning Sky Routes</h3>
      <p className="mt-2 text-slate-500">Comparing private fares across</p>
      <p className="font-bold text-brand-600">400+ Global Airlines…</p>
      {from && to && (
        <p className="mt-4 text-xs text-slate-400">
          {from.city} ({from.code}) → {to.city} ({to.code})
        </p>
      )}
    </div>
  );
}

function BestFare({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-slate-50 to-slate-100 p-8 text-center shadow-soft">
      <button
        onClick={onClose}
        aria-label="close"
        className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-slate-200/70 text-slate-600 transition hover:bg-slate-300"
      >
        ✕
      </button>
      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold tracking-wider text-emerald-700">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        FARE MATCH AVAILABLE
      </span>
      <div className="mx-auto mt-5 grid h-20 w-20 place-items-center rounded-2xl bg-emerald-100 ring-8 ring-emerald-50">
        <svg viewBox="0 0 24 24" className="h-10 w-10 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12.5l2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h3 className="mt-6 font-display text-4xl font-extrabold leading-tight text-ink-900">
        Your Best Fare
        <br />
        <span className="text-brand-600">Is Ready</span>
      </h3>
      <p className="mt-3 px-2 text-slate-600">
        We've found the <span className="font-bold text-brand-600">cheapest deal</span> for your
        route on
      </p>
      <div className="mx-auto mt-3 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
        <span className="grid h-9 w-9 place-items-center rounded-md bg-white">
          {/* Inline AA-style mark (red + blue) — no external load */}
          <svg viewBox="0 0 64 64" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="8" fill="#ffffff" />
            <path d="M10 50 L28 14 L34 14 L24 34 L46 50 Z" fill="#0078D2" />
            <path d="M22 50 L40 14 L46 14 L36 34 L54 50 Z" fill="#D6001C" />
          </svg>
        </span>
        <span className="text-base font-extrabold text-ink-900">American Airlines</span>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Exclusive fare access — not shown on standard booking pages.
      </p>
      <a
        href={SITE.phoneHref}
        className="mt-6 flex w-full items-center gap-4 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 p-4 text-left shadow-soft transition hover:brightness-110"
      >
        <span className="relative grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white">
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/40" />
          <svg viewBox="0 0 24 24" className="relative h-6 w-6" fill="currentColor">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
          </svg>
        </span>
        <span className="flex-1 text-white">
          <span className="block text-xl font-extrabold">Call {SITE.phone}</span>
          <span className="block text-sm text-white/80">Fast confirmation with a travel specialist</span>
        </span>
      </a>
      <p className="mt-3 text-xs text-slate-500">
        Tap the button above to call our travel specialist.
      </p>
    </div>
  );
}
