import { SITE } from '@/lib/site';

export default function StickyCallBar() {
  return (
    <>
      {/* Spacer so content doesn't sit underneath the fixed bar */}
      <div aria-hidden className="h-16 sm:h-14" />
      <a
        href={SITE.phoneHref}
        className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-3 bg-gradient-to-r from-brand-600 to-brand-700 px-4 py-3 text-white shadow-[0_-6px_20px_-8px_rgba(0,0,0,0.35)] sm:py-3.5"
        aria-label={`Call ${SITE.phone}`}
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
          </svg>
        </span>
        <span className="text-sm font-semibold sm:text-base">
          Call our travel desk —{' '}
          <span className="font-extrabold tracking-wide">{SITE.phone}</span>
        </span>
      </a>
    </>
  );
}
