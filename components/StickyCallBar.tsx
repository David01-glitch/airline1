import { SITE } from '@/lib/site';

export default function StickyCallBar() {
  return (
    <>
      <div aria-hidden className="h-16 sm:h-14" />
      <a
        href={SITE.phoneHref}
        className="fixed inset-x-0 bottom-0 z-[60] flex items-center justify-center gap-2 border-t border-slate-200 bg-white px-4 pt-2.5 pb-[max(env(safe-area-inset-bottom),0.75rem)] text-slate-800 shadow-[0_-4px_12px_-8px_rgba(0,0,0,0.15)]"
        aria-label={`Call ${SITE.phone}`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand-600" fill="currentColor">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
        </svg>
        <span className="text-sm">
          Travel desk: <span className="font-bold">{SITE.phone}</span>
        </span>
      </a>
    </>
  );
}
