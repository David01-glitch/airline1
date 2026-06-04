import Link from 'next/link';
import { SITE } from '@/lib/site';

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span
        className={`grid h-9 w-9 place-items-center rounded-xl ${
          light ? 'bg-white/15' : 'bg-brand-600'
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      </span>
      <span className={`text-xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-ink-900'}`}>
        aero<span className="text-brand-500">ticket</span>hub
      </span>
    </Link>
  );
}
