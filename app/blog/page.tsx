import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { BLOGS } from '@/lib/content';
import { SITE } from '@/lib/site';

export const metadata = { title: `Blog — ${SITE.name}` };

export default function BlogIndex() {
  return (
    <PageShell
      eyebrow="Blog"
      title="Insider notes for smarter travel"
      subtitle="Tips, fare hacks and policy explainers from our specialists. Updated weekly."
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {BLOGS.map((b) => (
          <Link key={b.slug} href={`/blog/${b.slug}`} className="group block">
            <article className="card overflow-hidden transition group-hover:-translate-y-1 group-hover:shadow-glow">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url(${b.img})` }}
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-brand-50 px-2.5 py-0.5 font-bold text-brand-700">
                    {b.category}
                  </span>
                  <span className="text-slate-400">{b.date} · {b.read}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-extrabold leading-snug text-ink-900 group-hover:text-brand-700">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{b.excerpt}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-700">
                  Read article →
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
