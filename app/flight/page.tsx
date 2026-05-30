import PageShell from '@/components/PageShell';
import BookingWidget from '@/components/BookingWidget';
import { Features, ValueProps } from '@/components/Sections';
import { SITE } from '@/lib/site';

export const metadata = { title: `Flights — ${SITE.name}` };

export default function FlightPage() {
  return (
    <PageShell
      eyebrow="Flight Search"
      title="Find your flight in seconds"
      subtitle="One-way private fares across 400+ airlines. Talk to a specialist any time to finalise the right itinerary for you."
    >
      <BookingWidget />
      <div className="mt-12">
        <Features />
        <ValueProps />
      </div>
    </PageShell>
  );
}
