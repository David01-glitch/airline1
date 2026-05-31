import PageShell, { Prose } from '@/components/PageShell';
import { SITE } from '@/lib/site';

export const metadata = { title: `Privacy Policy — ${SITE.name}` };

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy Policy"
      title="Your privacy, simply explained"
      subtitle="Last updated: January 1, 2026"
    >
      <Prose>
        <p>
          {SITE.name} ("we", "us", "our") respects your privacy. This Privacy Policy explains what
          personal information we collect when you interact with our website ({''}
          <a className="text-brand-600 underline" href="/">aerotickethub.com</a>) or call our travel
          desk, how we use it, with whom we share it, and the choices you have. By using our website
          or services you agree to the practices described below.
        </p>

        <h2>1. Information we collect</h2>
        <ul>
          <li>
            <strong>Contact details</strong> you voluntarily share — name, phone number, email
            address, country.
          </li>
          <li>
            <strong>Trip details</strong> you provide on a call — origin, destination, dates,
            traveller count, cabin preferences, passport details where required by the airline.
          </li>
          <li>
            <strong>Payment information</strong> is collected only by a live agent during a recorded
            phone call. <strong>We do not collect or store any payment details on this website.</strong>{' '}
            All payments are processed via PCI-DSS compliant third-party processors (e.g. Stripe,
            Authorize.net, Worldpay) directly under the agent's session.
          </li>
          <li>
            <strong>Device & usage data</strong> — IP address, browser type, device identifiers,
            referring URL, pages visited, time on page. This is collected automatically through
            cookies and analytics tools (see Cookie Policy).
          </li>
        </ul>

        <h2>2. How we use your information</h2>
        <ul>
          <li>To search, quote, book, modify, cancel or refund travel on your behalf.</li>
          <li>To send service messages — itinerary confirmations, schedule changes, receipts.</li>
          <li>To verify identity and prevent fraud, in line with airline and government regulations.</li>
          <li>To improve our website, troubleshoot issues, and measure ad performance.</li>
          <li>With your explicit opt-in only, to send occasional travel offers and news.</li>
        </ul>

        <h2>3. Legal basis (GDPR)</h2>
        <p>
          If you are in the European Economic Area or the United Kingdom, we process your personal
          data on the lawful bases of (a) contract performance — to fulfil your booking; (b)
          legitimate interest — to improve our service and prevent fraud; (c) legal obligation; and
          (d) consent, where required (e.g. marketing emails, non-essential cookies).
        </p>

        <h2>4. How we share information</h2>
        <p>
          We share personal data only with parties that are essential to delivering your travel
          arrangements or operating our business: airlines and Global Distribution Systems (Sabre,
          Amadeus, Travelport), payment processors, ticketing consolidators, fraud screening
          providers, cloud hosting providers, and government authorities where legally required.
        </p>
        <p>
          <strong>We do not sell your personal data to third parties.</strong>
        </p>

        <h2>5. International transfers</h2>
        <p>
          Our service providers may process data outside your country, including in the United
          States and India. Where required, we rely on Standard Contractual Clauses approved by the
          European Commission to safeguard your data.
        </p>

        <h2>6. Data retention</h2>
        <p>
          We keep booking records for up to seven (7) years after the date of travel to comply with
          tax, accounting and regulatory obligations. Marketing data is kept until you withdraw
          consent.
        </p>

        <h2>7. Your rights</h2>
        <p>Depending on your jurisdiction (GDPR, UK GDPR, CCPA, PIPEDA), you may have the right to:</p>
        <ul>
          <li>Request a copy of the personal data we hold about you.</li>
          <li>Correct inaccurate data, or delete data we no longer need.</li>
          <li>Restrict or object to certain processing, or withdraw consent.</li>
          <li>Receive your data in a portable format.</li>
          <li>
            (California residents) Opt out of "sale" or "sharing" of personal information under the
            CCPA — note that we do not sell or share personal information as defined by the CCPA.
          </li>
        </ul>
        <p>
          To exercise any right, email <a className="text-brand-600 underline" href={SITE.emailHref}>{SITE.email}</a> or write
          to us at the address below. We respond within 30 days.
        </p>

        <h2>8. Children</h2>
        <p>
          Our services are intended for adults aged 18 and over. We do not knowingly collect
          information from children under 13. If you believe a child has provided us information,
          please contact us so we can delete it.
        </p>

        <h2>9. Security</h2>
        <p>
          We use industry-standard administrative, technical and physical safeguards including TLS
          encryption, access controls and regular security reviews. Because we do not store payment
          data on our website, your card information never resides on our servers.
        </p>

        <h2>10. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The "Last updated" date at the top reflects
          the most recent revision. Material changes will be notified by email where appropriate.
        </p>

        <h2>11. Contact</h2>
        <p>
          <strong>{SITE.legalName}</strong>
          <br />
          {SITE.address.line1}
          <br />
          {SITE.address.cityState}
          <br />
          {SITE.address.country}
          <br />
          Phone: <a className="text-brand-600 underline" href={SITE.phoneHref}>{SITE.phone}</a>
          <br />
          Email: <a className="text-brand-600 underline" href={SITE.emailHref}>{SITE.email}</a>
        </p>
      </Prose>
    </PageShell>
  );
}
