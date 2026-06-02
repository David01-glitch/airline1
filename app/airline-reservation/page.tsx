import ServicePage from '@/components/ServicePage';
import { SITE } from '@/lib/site';

export const metadata = { title: `Airline Reservation — ${SITE.name}` };

export default function Page() {
  return (
    <ServicePage
      eyebrow="Airline Reservation"
      title="Book any airline in one call"
      subtitle="Domestic. International. Multi-city. Last-minute. Whatever your route, we can lock in the best available fare."
      intro="Reservations through a specialist mean fewer surprises — we walk you through fare rules, baggage, seat selection and check-in timing before you pay, so what you see is exactly what you get."
      steps={[
        { title: 'Share your trip', desc: 'Call us with your dates, route, traveller count and any preferences.' },
        { title: 'Get private fares', desc: 'We search public and private inventory across 400+ carriers.' },
        { title: 'Review options', desc: 'You see itinerary, fare rules and total cost before confirming.' },
        { title: 'Confirm & fly', desc: 'Pay securely, receive your e-ticket and a 24/7 support contact.' },
      ]}
      faqs={[
        { q: 'How fast can a reservation be made?', a: 'Most reservations are confirmed within 5–10 minutes of you approving the itinerary.' },
        { q: 'Can I book for someone else?', a: 'Yes. We just need the traveller\'s full name as on their passport/ID and contact details.' },
        { q: 'Do you charge a service fee?', a: 'No. We do not charge any service fee. You pay the live airline fare quoted on the call — our earnings come from airline commissions, not from you.' },
        { q: 'Which payment methods are accepted?', a: 'All major credit/debit cards, Apple Pay, Google Pay, and select bank transfers — taken by a live agent over a recorded phone call. We do not collect payment information on this website.' },
      ]}
    />
  );
}
