'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const KEY = 'ath_cookie_consent_v1';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      // ignore (private mode etc.)
    }
  }, []);

  const set = (value: 'all' | 'essential') => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ value, ts: Date.now() }));
    } catch {}
    setShow(false);
  };

  if (!show) return null;
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:max-w-md">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <p className="text-sm font-bold text-ink-900">We use cookies</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          We use strictly necessary cookies to run this site, and — with your consent — analytics
          and advertising cookies to improve our service. See our{' '}
          <Link href="/cookie-policy" className="font-semibold text-brand-700 underline">
            Cookie Policy
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="font-semibold text-brand-700 underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            onClick={() => set('all')}
            className="flex-1 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white shadow-soft transition hover:bg-brand-700"
          >
            Accept all
          </button>
          <button
            onClick={() => set('essential')}
            className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-ink-900 transition hover:bg-slate-50"
          >
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
}
