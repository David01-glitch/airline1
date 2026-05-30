import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOGS } from '@/lib/content';
import { BLOG_BODY } from '@/lib/blogContent';
import { SITE } from '@/lib/site';
import Icon from '@/components/Icon';

export function generateStaticParams() {
  return BLOGS.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = BLOGS.find((b) => b.slug === params.slug);
  return { title: post ? `${post.title} — ${SITE.name}` : SITE.name };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = BLOGS.find((b) => b.slug === params.slug);
  if (!post) return notFound();
  const body = BLOG_BODY[params.slug] ?? [];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950 text-white">
        <div className="absolute inset-0 -z-10 opacity-40 bg-cover bg-center" style={{ backgroundImage: `url(${post.img})` }} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/70 to-ink-950" />
        <div className="section py-24">
          <Link href="/blog" className="text-sm font-semibold text-white/70 hover:text-white">← All articles</Link>
          <div className="mt-4 flex items-center gap-2 text-xs">
            <span className="rounded-full bg-brand-500/20 px-2.5 py-0.5 font-bold text-brand-100">{post.category}</span>
            <span className="text-white/60">{post.date} · {post.read}</span>
          </div>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">{post.excerpt}</p>
        </div>
      </section>

      <article className="section py-16">
        <div className="mx-auto max-w-2xl space-y-5 text-lg leading-relaxed text-slate-700">
          {body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 p-8 text-white">
          <h3 className="font-display text-2xl font-extrabold">Want a specialist to plan this for you?</h3>
          <p className="mt-2 text-white/85">A {SITE.name} agent will find private fares and lock in the right itinerary in minutes.</p>
          <a href={SITE.phoneHref} className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3 font-extrabold text-brand-700">
            <Icon name="headset" className="h-5 w-5" /> Call {SITE.phone}
          </a>
        </div>
      </article>
    </>
  );
}
