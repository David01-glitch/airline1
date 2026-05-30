import { SITE } from '@/lib/site';

export default function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950 text-white">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=2000&q=70)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/85 to-ink-950" />
        <div className="section py-20">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/80">
              ● {eyebrow}
            </span>
          )}
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
          {subtitle && <p className="mt-4 max-w-2xl text-white/75">{subtitle}</p>}
          <p className="mt-6 text-sm text-white/55">
            Need help right now? Call{' '}
            <a href={SITE.phoneHref} className="font-semibold text-white underline-offset-4 hover:underline">
              {SITE.phone}
            </a>
          </p>
        </div>
      </section>
      <section className="section py-16">{children}</section>
    </>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl space-y-5 text-slate-700 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-ink-900 [&_p]:leading-relaxed [&_li]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
      {children}
    </div>
  );
}
