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
    <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white text-center shadow-soft">
      <button
        onClick={onClose}
        aria-label="close"
        className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-slate-600 backdrop-blur transition hover:bg-white"
      >
        ✕
      </button>

      {/* Bright gradient top bar */}
      <div className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-600 px-6 pt-7 pb-6 text-white">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold tracking-widest text-emerald-200 backdrop-blur">
          <span className="relative grid place-items-center">
            <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-emerald-300/80" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-300" />
          </span>
          AGENT AVAILABLE NOW
        </span>
        <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight">
          Good news —<br />
          <span className="bg-gradient-to-r from-emerald-200 to-white bg-clip-text text-transparent">
            a specialist is ready for you
          </span>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/85">
          Skip the endless tabs. A live travel agent will check available options for your route,
          walk you through the fare rules, and find the right itinerary — fast, honest, and over a
          single phone call.
        </p>
      </div>

      <div className="px-6 pb-7 pt-5">
        {/* Bullet list of what the call gives them */}
        <ul className="space-y-2 text-left text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <CheckDot />
            Personalised quote for <strong>your exact dates and route</strong>
          </li>
          <li className="flex items-start gap-2">
            <CheckDot />
            <strong>No service fee</strong> — you pay the live airline price quoted on the call
          </li>
          <li className="flex items-start gap-2">
            <CheckDot />
            Real human · <strong>average pickup under 30 seconds</strong>
          </li>
        </ul>

        <a
          href={SITE.phoneHref}
          className="mt-5 flex w-full items-center gap-4 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 p-4 text-left shadow-soft transition hover:brightness-110"
        >
          <span className="relative grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/40" />
            <svg viewBox="0 0 24 24" className="relative h-5 w-5" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
            </svg>
          </span>
          <span className="flex-1 text-white">
            <span className="block text-lg font-extrabold">Call {SITE.phone}</span>
            <span className="block text-xs text-white/85">Tap to talk to your specialist now</span>
          </span>
        </a>

        {/* Compliance footnote — small but present */}
        <p className="mt-4 text-[11px] leading-relaxed text-slate-500">
          {SITE.name} is an independent travel agency, not an airline. Calls may be recorded for
          quality assurance.
        </p>

        <button
          onClick={onClose}
          className="mt-3 text-xs font-semibold text-slate-500 underline-offset-4 hover:text-slate-700 hover:underline"
        >
          Or close and continue browsing
        </button>
      </div>
    </div>
  );
}

function CheckDot() {
  return (
    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
