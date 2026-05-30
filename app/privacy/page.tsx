import PageShell, { Prose } from '@/components/PageShell';
import { SITE } from '@/lib/site';

export const metadata = { title: `Privacy Policy — ${SITE.name}` };

export default function PrivacyPage() {
  return (
    <PageShell eyebrow="Privacy Policy" title="How we handle your data" subtitle="Last updated: 2026">
      <Prose>
        <p>
          {SITE.name} respects your privacy. This policy explains what we collect, how we use it,
          and the choices you have. By using our site or services you agree to the practices below.
        </p>
        <h2>Information we collect</h2>
        <ul>
          <li>Booking details: traveller names, dates of birth, contact, passport when required.</li>
          <li>Payment data: handled by PCI-DSS compliant processors. We do not store card numbers.</li>
          <li>Device data: IP, browser, anonymised analytics to improve the experience.</li>
        </ul>
        <h2>How we use it</h2>
        <ul>
          <li>To search, book and modify your travel and to contact you about your trip.</li>
          <li>To prevent fraud, comply with airline and government regulations.</li>
          <li>To send service updates and, with consent, occasional travel offers.</li>
        </ul>
        <h2>Sharing</h2>
        <p>
          We share booking data only with airlines, GDS systems, payment processors and authorities
          where legally required. We never sell your personal data.
        </p>
        <h2>Your rights</h2>
        <p>
          You may request a copy, correction or deletion of your data at any time by emailing{' '}
          <a className="text-brand-600 underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </Prose>
    </PageShell>
  );
}
