import PageShell, { Prose } from '@/components/PageShell';
import { SITE } from '@/lib/site';

export const metadata = { title: `About — ${SITE.name}` };

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About Us"
      title={`The story behind ${SITE.name}`}
      subtitle="A modern travel desk built around private fares, real human agents, and complete transparency."
    >
      <Prose>
        <p>
          {SITE.name} was founded by travellers who were tired of generic search engines, hidden
          service charges, and call-centre runarounds. We built a small but obsessive team of
          specialists with access to private contract inventory, then layered modern software on
          top so travellers could find better fares, faster.
        </p>
        <h2>What we do</h2>
        <p>
          We help individuals, families, and small businesses book domestic and international
          flights across 400+ airlines. Most of our customers come to us when public engines fail —
          a fare that disappeared, a last-minute booking, a complex multi-city, a name correction,
          or a cancellation that needs human follow-through.
        </p>
        <h2>How we are different</h2>
        <ul>
          <li>Direct access to private and consolidator inventory not shown publicly.</li>
          <li>Human-only support — no chatbot loops, no offshore scripts.</li>
          <li>Flat, transparent service fees disclosed before you confirm.</li>
          <li>Secure checkout backed by PCI-DSS Level 1 infrastructure.</li>
        </ul>
        <h2>Our promise</h2>
        <p>
          Every customer is treated like our only customer. If we cannot beat the public price you
          have already found, we will say so honestly — and help you book the right way anyway.
        </p>
      </Prose>
    </PageShell>
  );
}
