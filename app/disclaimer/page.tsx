import PageShell, { Prose } from '@/components/PageShell';
import { SITE } from '@/lib/site';

export const metadata = { title: `Disclaimer — ${SITE.name}` };

export default function Page() {
  return (
    <PageShell
      eyebrow="Disclaimer"
      title="Disclaimer"
      subtitle="Important information about this website and our services."
    >
      <Prose>
        <h2>Third-party intermediary</h2>
        <p>
          {SITE.name} is an independent third-party travel intermediary. We are not an airline,
          airport, ticketing authority, government agency, or supplier of travel products. We do
          not operate flights, issue tickets ourselves, or act as the agent of any single airline.
          We facilitate bookings between travellers and the airlines they select.
        </p>

        <h2>Airline names, trademarks and logos</h2>
        <p>
          All airline names, trademarks, logos and brand assets referenced on this Site —
          including but not limited to American Airlines, Delta Air Lines, United Airlines, British
          Airways, Emirates, Lufthansa and others — remain the property of their respective owners.
          Their use on this Site is for identification purposes only and does not imply affiliation,
          endorsement or sponsorship.
        </p>

        <h2>Information accuracy</h2>
        <p>
          We strive to keep fares, schedules and policies accurate but we make no warranty of any
          kind, express or implied, about the completeness, accuracy, reliability or availability
          of the information on the Site. All fares shown are samples; the actual price for any
          itinerary will be confirmed verbally by our agent before any payment.
        </p>

        <h2>No professional advice</h2>
        <p>
          Content on the Site, including our blog, is provided for general informational purposes
          only and does not constitute legal, financial, medical or other professional advice. You
          should consult a qualified professional for specific guidance.
        </p>

        <h2>External links</h2>
        <p>
          The Site may contain links to third-party websites. {SITE.name} has no control over the
          content of those sites and accepts no responsibility for them or for any loss or damage
          arising from your use of them.
        </p>

        <h2>No payment processing on this Site</h2>
        <p>
          <strong>This Site does not collect or process payments.</strong> All transactions are
          completed by phone with a live agent on a recorded line. Any party claiming to take a
          payment through this Site is not authorised to do so.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, {SITE.name} shall not be liable for any loss or
          damage arising from your use of this Site or reliance on its content. Please refer to our{' '}
          <a className="text-brand-600 underline" href="/terms">Terms &amp; Conditions</a> for the full
          limitation-of-liability clause.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Reach us at <a className="text-brand-600 underline" href={SITE.emailHref}>{SITE.email}</a> or call{' '}
          <a className="text-brand-600 underline" href={SITE.phoneHref}>{SITE.phone}</a>.
        </p>
      </Prose>
    </PageShell>
  );
}
