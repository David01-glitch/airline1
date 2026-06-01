import { SITE } from '@/lib/site';

export default function StickyCallBar() {
  return (
    <>
      {/* Spacer so content doesn't sit underneath the fixed bar */}
      <div aria-hidden className="h-24 sm:h-20" />
      <a
        href={SITE.phoneHref}
        className="fixed inset-x-0 bottom-0 z-[60] flex items-center justify-center gap-3 bg-gradient-to-r from-brand-600 to-brand-700 px-4 pt-3 pb-[max(env(safe-area-inset-bottom),1.5rem)] text-white shadow-[0_-10px_30px_-12px_rgba(0,0,0,0.5)]"
        aria-label={`Call ${SITE.phone}`}
      >
        <span className="relative grid h-10 w-10 place-items-center rounded-full bg-white/15">
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/40" />
          <svg viewBox="0 0 24 24" className="relative h-5 w-5" fill="currentColor">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
          </svg>
        </span>
        <span className="text-left text-sm sm:text-base">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-white/80 sm:text-xs">
            Talk to a Travel Specialist · 24×7
          </span>
          <span className="block text-base font-extrabold tracking-wide sm:text-lg">
            {SITE.phone}
          </span>
        </span>
      </a>
    </>
  );
}
