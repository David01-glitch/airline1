import { SITE } from '@/lib/site';

export default function CallButton({ variant = 'solid', label }: { variant?: 'solid' | 'ghost'; label?: string }) {
  const cls =
    variant === 'solid'
      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-soft'
      : 'border border-white/20 text-white hover:bg-white/10';
  return (
    <a href={SITE.phoneHref} className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 font-semibold transition ${cls}`}>
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
      </svg>
      <span className="whitespace-nowrap">{label ?? `Call To Book · ${SITE.phone}`}</span>
    </a>
  );
}
