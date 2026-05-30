import ServicePage from '@/components/ServicePage';
import { SITE } from '@/lib/site';

export const metadata = { title: `Name Correction — ${SITE.name}` };

export default function Page() {
  return (
    <ServicePage
      eyebrow="Name Correction"
      title="Misspelled name on a ticket? We can fix it"
      subtitle="Most airlines allow corrections — but only inside narrow windows and rules. Move quickly and most fixes are free or low-cost."
      intro="A single wrong letter can deny boarding. The good news: a typo, a maiden vs married name, or a missed middle initial can almost always be corrected if you reach us before the airline's cutoff window."
      steps={[
        { title: 'Call within the window', desc: 'The sooner the better — most airlines allow free corrections within 24 hours of booking.' },
        { title: 'Share the correct ID', desc: 'We need the exact spelling as on the passport/government ID being used to fly.' },
        { title: 'We submit the correction', desc: 'We file directly with the airline along with supporting documents.' },
        { title: 'New ticket issued', desc: 'Your corrected e-ticket arrives by email, usually same day.' },
      ]}
      faqs={[
        { q: 'What counts as a name correction (vs. a name change)?', a: 'Typos, transposed letters, missing middle name, or a maiden vs. married name are corrections. Replacing one passenger with a different person is a change and is not allowed by most airlines.' },
        { q: 'Is there a fee?', a: 'Many airlines waive minor corrections; some charge a small fee. We confirm the cost before processing.' },
        { q: 'How late can I correct a name?', a: 'Typically up to 24–72 hours before departure depending on the airline, but the earlier the easier.' },
        { q: 'What about my onward connections?', a: 'We coordinate corrections across all segments of a multi-leg booking to keep your itinerary intact.' },
      ]}
    />
  );
}
