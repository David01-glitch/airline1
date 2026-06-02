import ServicePage from '@/components/ServicePage';
import { SITE } from '@/lib/site';

export const metadata = { title: `Cancellation & Refund — ${SITE.name}` };

export default function Page() {
  return (
    <ServicePage
      eyebrow="Cancellation & Refund"
      title="Cancel a flight, claim your refund — without the runaround"
      subtitle="We handle the airline conversation so you don't have to sit on hold for hours."
      intro="Refund eligibility depends on fare type, timing and the reason for cancellation. Our team knows exactly which form, fare bucket and escalation path to use to get your money back as quickly as the rules allow."
      steps={[
        { title: 'Tell us the booking', desc: 'Share your PNR or booking reference — we pull the full fare rules instantly.' },
        { title: 'We confirm eligibility', desc: 'You see the exact refundable amount, fees and timeline before we cancel.' },
        { title: 'Cancellation processed', desc: 'We file the cancellation and refund request with the airline on your behalf.' },
        { title: 'Refund tracked to you', desc: 'We follow up with the airline until the money hits your statement.' },
      ]}
      faqs={[
        { q: 'How long does a refund take?', a: 'Most airlines process refunds within 7–20 business days; some carriers up to 90 days.' },
        { q: 'How are refunds calculated?', a: 'Airline-imposed fares and taxes are refunded according to the airline\'s fare rules. We do not add a service fee, so there is nothing extra for us to deduct.' },
        { q: 'What if my flight was cancelled by the airline?', a: 'You\'re entitled to a full refund. We file and chase the claim on your behalf at no charge.' },
        { q: 'Can I get a partial refund?', a: 'Yes, for unused legs of a multi-segment ticket — we calculate the refundable value for you.' },
      ]}
    />
  );
}
