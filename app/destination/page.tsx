import PageShell from '@/components/PageShell';
import { Destinations } from '@/components/Sections';
import { SITE } from '@/lib/site';

export const metadata = { title: `Destinations — ${SITE.name}` };

export default function DestinationPage() {
  return (
    <PageShell
      eyebrow="Destinations"
      title="Where to next?"
      subtitle="A hand-picked list of cities our travellers are loving right now. Call us for any route — we cover the planet."
    >
      <Destinations />
    </PageShell>
  );
}
