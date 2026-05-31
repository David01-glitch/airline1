import PageShell, { Prose } from '@/components/PageShell';
import { SITE } from '@/lib/site';

export const metadata = { title: `Terms & Conditions — ${SITE.name}` };

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Terms"
      title="Terms & Conditions"
      subtitle="Please read carefully before using our services."
    >
      <Prose>
        <p>
          These Terms &amp; Conditions ("Terms") govern your use of the {SITE.name} website (the
          "Site") and the travel services we provide ("Services"). By using the Site or engaging
          our Services you accept these Terms.
        </p>

        <h2>1. Who we are</h2>
        <p>
          {SITE.legalName}, with its registered office at {SITE.fullAddress}, is an independent
          third-party travel intermediary. We are not an airline, hotel, car-hire company or any
          other supplier of travel products; we facilitate bookings between you and the airline you
          select.
        </p>

        <h2>2. Phone-only bookings — no online payments</h2>
        <p>
          <strong>The Site does not accept payments or process credit card transactions.</strong>{' '}
          The Site is for informational purposes only — to display fares, services and policies,
          and to enable travellers to contact our specialists. All bookings, fare quotes and
          payments are completed exclusively over the phone with a live agent on a recorded line
          after you have reviewed and verbally approved (a) the complete itinerary, (b) the total
          cost including any service fee, and (c) the airline's fare rules.
        </p>

        <h2>3. Eligibility</h2>
        <p>
          You must be at least 18 years of age and able to enter into a legally binding contract to
          use our Services.
        </p>

        <h2>4. Pricing & availability</h2>
        <p>
          Fares displayed on the Site are sample prices and are not guaranteed. The actual price of
          any itinerary will be confirmed verbally by our agent before payment. Prices may change
          at any time prior to booking due to airline inventory, currency fluctuations or fare-rule
          changes. Any service fee charged by {SITE.name} will always be disclosed before payment
          and is non-refundable once the ticket is issued.
        </p>

        <h2>5. Bookings, changes & cancellations</h2>
        <p>
          Each ticket is governed by the fare rules of the operating airline. Changes,
          cancellations, refunds, name corrections and date alterations are subject to those rules
          plus any service fee disclosed by our agent. Some fares are non-refundable and
          non-changeable; you will be advised before confirming.
        </p>

        <h2>6. Refunds</h2>
        <p>
          Refund eligibility, amount and timing are determined by the airline. We process refund
          requests with the airline on your behalf at no additional charge for airline-initiated
          cancellations. For voluntary cancellations, the airline's fare-rule penalty applies in
          addition to any {SITE.name} service fee. Refunds are returned to the original method of
          payment within the timeframe set by the airline (typically 7–90 business days).
        </p>

        <h2>7. Travel documents</h2>
        <p>
          You are solely responsible for ensuring you hold valid passports, visas, health
          documentation and any other documents required by your origin, transit and destination
          countries. {SITE.name} is not liable for any loss or expense caused by your failure to
          carry the correct documents.
        </p>

        <h2>8. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, {SITE.name}'s aggregate liability arising out of
          or related to your use of the Site or Services shall not exceed the service fee paid to
          {SITE.name} for the relevant booking. We are not liable for: airline delays,
          cancellations, schedule changes, denied boarding, lost baggage, missed connections, force
          majeure events, or any indirect, consequential, special or punitive damages.
        </p>

        <h2>9. Intellectual property</h2>
        <p>
          All content on this Site — text, graphics, logos, images — is the property of {SITE.name}
          or its licensors and is protected by copyright. Airline names, trademarks and logos shown
          remain the property of their respective owners and are used for identification only.
        </p>

        <h2>10. Prohibited use</h2>
        <p>
          You agree not to: (a) use the Site for any unlawful purpose; (b) attempt to gain
          unauthorised access; (c) interfere with the operation of the Site; (d) scrape or
          systematically extract content; (e) impersonate any person or entity.
        </p>

        <h2>11. Governing law</h2>
        <p>
          These Terms are governed by the laws of the State of New York, USA. Any dispute will be
          resolved in the state or federal courts located in New York County, New York.
        </p>

        <h2>12. Contact</h2>
        <p>
          Questions about these Terms? Contact us at{' '}
          <a className="text-brand-600 underline" href={SITE.emailHref}>{SITE.email}</a> or call{' '}
          <a className="text-brand-600 underline" href={SITE.phoneHref}>{SITE.phone}</a>.
        </p>
      </Prose>
    </PageShell>
  );
}
