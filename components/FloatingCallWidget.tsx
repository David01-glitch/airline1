'use client';
import { useState, useEffect } from 'react';
import { SITE } from '@/lib/site';

export default function FloatingCallWidget() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Show after small scroll so it doesn't crowd the hero
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 md:block">
      {open ? (
        <div className="relative w-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
          <button
            onClick={() => setOpen(false)}
            aria-label="close call widget"
            className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-slate-100 text-xs text-slate-600 hover:bg-slate-200"
          >
            ✕
          </button>
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            ● Travel expert online
          </p>
          <h3 className="mt-2 text-lg font-extrabold text-ink-900">Talk to our expert</h3>
          <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
            <li>✓ Affordable phone-only fares</li>
            <li>✓ Personalised quote in ~60 sec</li>
            <li>✓ No service fee</li>
            <li>✓ 24×7 live agents</li>
          </ul>
          <a
            href={SITE.phoneHref}
            className="mt-3 flex items-center gap-2 rounded-xl bg-brand-600 px-3 py-2.5 text-sm font-bold text-white shadow-soft hover:bg-brand-700"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
            </svg>
            {SITE.phone}
          </a>
          <p className="mt-2 text-[10px] text-slate-400">
            Independent travel agency. Calls may be recorded.
          </p>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          aria-label="open call widget"
          className="group relative grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-white shadow-soft transition hover:bg-brand-700"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/30" />
          <svg viewBox="0 0 24 24" className="relative h-6 w-6" fill="currentColor">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
          </svg>
        </button>
      )}
    </div>
  );
}
