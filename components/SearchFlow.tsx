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
    const t = setTimeout(() => setStage('ready'), 1600);
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
      {stage === 'scanning' ? (
        <Scanning from={from} to={to} />
      ) : (
        <BestFare onClose={onClose} />
      )}
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
      <h3 className="mt-7 text-2xl font-extrabold text-ink-900">Checking Available Options</h3>
      <p className="mt-2 text-slate-500">Looking up routes for your dates…</p>
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
    <div className="relative w-full max-w-md rounded-3xl bg-white p-7 text-center shadow-soft">
      <button
        onClick={onClose}
        aria-label="close"
        className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
      >
        ✕
      </button>

      <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-50">
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-brand-600" fill="currentColor">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
        </svg>
      </div>

      <h3 className="mt-5 font-display text-3xl font-extrabold leading-tight text-ink-900">
        Speak with a travel specialist
      </h3>
      <p className="mt-3 text-slate-600">
        Our agent will review available options for your route and confirm the live price with you on
        the phone before any booking.
      </p>

      {/* Third-party / not-an-airline disclosure right above the call button */}
      <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-left text-xs text-amber-900">
        <strong>Please note:</strong> {SITE.name} is an independent travel agency, not an airline.
        Calls are answered by our specialists and may be recorded for quality assurance.
      </div>

      <a
        href={SITE.phoneHref}
        className="mt-5 flex w-full items-center gap-4 rounded-2xl bg-brand-600 p-4 text-left shadow-soft transition hover:bg-brand-700"
      >
        <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
          </svg>
        </span>
        <span className="flex-1 text-white">
          <span className="block text-lg font-extrabold">Call {SITE.phone}</span>
          <span className="block text-xs text-white/80">24×7 · live agent</span>
        </span>
      </a>

      <button
        onClick={onClose}
        className="mt-3 text-xs font-semibold text-slate-500 underline-offset-4 hover:text-slate-700 hover:underline"
      >
        Or close and continue browsing
      </button>
    </div>
  );
}
