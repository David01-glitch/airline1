import { SITE } from '@/lib/site';

export default function StickyCallBar() {
  return (
    <>
      <div aria-hidden className="h-20 sm:h-16" />
      <a
        href={SITE.phoneHref}
        className="fixed inset-x-0 bottom-0 z-[60] flex items-center justify-center gap-3 border-t border-brand-700/40 bg-brand-700 px-4 pt-2.5 pb-[max(env(safe-area-inset-bottom),0.75rem)] text-white shadow-[0_-6px_18px_-12px_rgba(0,0,0,0.5)]"
        aria-label={`Call ${SITE.phone}`}
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
          </svg>
        </span>
        <span className="text-sm sm:text-base">
          <span className="font-semibold">Travel desk:</span>{' '}
          <span className="font-extrabold tracking-wide">{SITE.phone}</span>
        </span>
      </a>
    </>
  );
}
