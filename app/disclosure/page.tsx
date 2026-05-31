import PageShell, { Prose } from '@/components/PageShell';
import { SITE } from '@/lib/site';

export const metadata = { title: `Disclosure — ${SITE.name}` };

export default function Page() {
  return (
    <PageShell
      eyebrow="Disclosure"
      title="Disclosure & Affiliations"
      subtitle="Full transparency about how we operate and earn."
    >
      <Prose>
        <h2>Independent intermediary</h2>
        <p>
          {SITE.name} is an independent third-party travel intermediary, not an airline. We are not
          affiliated, associated, authorised, endorsed by, or in any way officially connected with
          American Airlines, Delta, United, British Airways, Emirates, or any other carrier shown
          on this Site. Airline names, trademarks, logos and brand assets remain the property of
          their respective owners and are used only for the purpose of identifying the carrier
          operating a particular route or itinerary.
        </p>

        <h2>How we earn revenue</h2>
        <p>
          {SITE.name} earns revenue through (a) commissions paid by airlines and consolidators on
          successful bookings; (b) a flat service fee disclosed verbally to the traveller before
          payment and shown on the final receipt. We do not charge any fee for searching, quoting
          or advising — only when a booking is confirmed.
        </p>

        <h2>No payment processing on this website</h2>
        <p>
          The Site does not process payments, store card information, or accept money in any form.
          All transactions occur exclusively over the phone with a live agent on a recorded line,
          via PCI-DSS compliant third-party processors.
        </p>

        <h2>Fare display</h2>
        <p>
          Prices shown on the Site (e.g. destination cards, sample fares in the search widget) are
          historical samples for illustration only. The actual price for any specific itinerary
          will be confirmed verbally by our agent before payment. Prices change continuously and
          are not guaranteed by the Site.
        </p>

        <h2>Sponsored content & affiliate links</h2>
        <p>
          The Site does not currently host sponsored content or affiliate links. Our blog articles
          are written independently by the {SITE.name} team and reflect our own opinions and
          experience. Any future sponsored content will be clearly labelled.
        </p>

        <h2>Reviews</h2>
        <p>
          Customer reviews displayed on the Site are based on feedback we have received. Names and
          identifying details have been edited for privacy. We do not pay for reviews and do not
          remove negative reviews unless they contain false claims, personal attacks or
          confidential information.
        </p>

        <h2>Regulatory registration</h2>
        <p>
          {SITE.legalName} operates from {SITE.fullAddress} and complies with applicable U.S.
          federal and state travel-agency, tax and consumer-protection regulations.
        </p>

        <h2>Contact</h2>
        <p>
          For any disclosure-related question, write to{' '}
          <a className="text-brand-600 underline" href={SITE.emailHref}>{SITE.email}</a>.
        </p>
      </Prose>
    </PageShell>
  );
}
