'use client';
import { useEffect } from 'react';
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
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-ink-950/85 p-4">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-7 text-center shadow-soft">
        <button
          onClick={onClose}
          aria-label="close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
        >
          ✕
        </button>

        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-50">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-brand-600" fill="currentColor">
            <path d="M21 16v-2l-8-5V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </div>

        <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight text-ink-900">
          Thanks — we've got your trip details
        </h3>
        <p className="mt-3 text-sm text-slate-600">
          {from && to ? (
            <>
              For your trip from <strong>{from.city}</strong> to <strong>{to.city}</strong>, a
              travel specialist can review available options and confirm the live price with you.
            </>
          ) : (
            <>A travel specialist can review available options and share a quote with you.</>
          )}
        </p>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left text-xs text-slate-600">
          <p>
            <strong>How to reach us:</strong>
          </p>
          <p className="mt-2">
            <strong>Phone:</strong>{' '}
            <a className="font-bold text-brand-700 underline" href={SITE.phoneHref}>
              {SITE.phone}
            </a>
            <br />
            <strong>Email:</strong>{' '}
            <a className="font-bold text-brand-700 underline" href={SITE.emailHref}>
              {SITE.email}
            </a>
            <br />
            <strong>Hours:</strong> {SITE.hours}
          </p>
        </div>

        <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
          {SITE.name} is an independent travel agency, not an airline. Calls may be recorded for
          quality assurance.
        </p>

        <button
          onClick={onClose}
          className="mt-3 text-xs font-semibold text-slate-500 underline-offset-4 hover:text-slate-700 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
}
