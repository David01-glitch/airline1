import ServicePage from '@/components/ServicePage';
import { SITE } from '@/lib/site';

export const metadata = { title: `Flight Changes — ${SITE.name}` };

export default function Page() {
  return (
    <ServicePage
      eyebrow="Flight Changes"
      title="Change your flight without the hold music"
      subtitle="Date, time, route, or even airline — we negotiate the change for you and confirm the new booking on the spot."
      intro="Plans shift. Airlines' change rules are layered and time-sensitive. A quick call lets us check fare rules across all your fare buckets and walk you through the cheapest path to your new itinerary."
      steps={[
        { title: 'Call with your booking', desc: 'Have your PNR or booking reference handy if possible.' },
        { title: 'We check options', desc: 'Fare rules, change fees, fare differences — across the entire airline alliance.' },
        { title: 'Approve the new itinerary', desc: 'You see the total cost (if any) before we lock anything in.' },
        { title: 'Updated ticket emailed', desc: 'New confirmation arrives in your inbox in minutes.' },
      ]}
      faqs={[
        { q: 'Will I pay a change fee?', a: 'Depends on the airline and fare class. Many flexible fares allow free changes — we will tell you upfront.' },
        { q: 'Can I change just one passenger?', a: 'Yes, in most cases passengers can be changed individually within the same booking.' },
        { q: 'How late can I change a flight?', a: 'Usually up to 2 hours before departure, but it varies by airline. Sooner is always cheaper.' },
        { q: 'Will my seat selection carry over?', a: 'We re-secure your seat preferences on the new flight whenever the cabin allows.' },
      ]}
    />
  );
}
