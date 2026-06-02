import PageShell, { Prose } from '@/components/PageShell';
import { SITE } from '@/lib/site';

export const metadata = { title: `Sample Fare Disclosure — ${SITE.name}` };

export default function Page() {
  return (
    <PageShell
      eyebrow="Pricing Transparency"
      title="Sample Fare Disclosure"
      subtitle="How prices are shown on this website and how live prices are confirmed."
    >
      <Prose>
        <h2>What you see on the website</h2>
        <p>
          The fares shown on {SITE.name} — including the price tags on destination cards and any
          example prices in our blog or marketing — are <strong>illustrative sample fares</strong>.
          They are reference prices based on past booking data we have observed for similar routes
          and travel windows.
        </p>
        <p>
          These sample fares are <strong>not live prices</strong>. They are not bookable as shown.
          They are intended only to give travellers a rough idea of what a route has historically
          cost.
        </p>

        <h2>What is included (and not) in a sample fare</h2>
        <ul>
          <li>Sample fares typically reflect the base airline fare plus standard taxes and fees.</li>
          <li>They do <strong>not</strong> include our service fee (typically $25–$50 per ticket).</li>
          <li>They do not reflect seasonal surcharges, fuel adjustments, or last-minute price changes.</li>
          <li>They may not reflect baggage, seat selection or upgrade charges.</li>
        </ul>

        <h2>How the live price is confirmed</h2>
        <p>
          When you call our travel desk at{' '}
          <a className="text-brand-600 underline" href={SITE.phoneHref}>{SITE.phone}</a>, a
          specialist will:
        </p>
        <ul>
          <li>Pull the actual live fare from the airline or our consolidator for your dates.</li>
          <li>Add any applicable taxes, fees and our service fee.</li>
          <li>Tell you the total amount that will be charged before any payment is taken.</li>
          <li>Read out the fare rules — change fees, refundability, baggage — for your approval.</li>
        </ul>
        <p>
          No charge is processed until you have verbally approved the total amount on a recorded
          line.
        </p>

        <h2>Why prices change so often</h2>
        <p>
          Airline pricing is governed by sophisticated revenue-management systems that adjust fares
          minute-to-minute based on remaining seats, search demand, fuel costs, currency rates and
          route competition. A sample fare we observed yesterday may not be available today; a
          fare we quote on a Monday call may have changed by Tuesday.
        </p>

        <h2>How to dispute a charge</h2>
        <p>
          If you believe a charge does not match the price quoted on the call, contact us
          immediately at{' '}
          <a className="text-brand-600 underline" href={SITE.phoneHref}>{SITE.phone}</a> or{' '}
          <a className="text-brand-600 underline" href={SITE.emailHref}>{SITE.email}</a>. We retain
          the call recording for quality assurance and will work with you to resolve any genuine
          discrepancy.
        </p>
      </Prose>
    </PageShell>
  );
}
