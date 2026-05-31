import PageShell, { Prose } from '@/components/PageShell';
import Icon from '@/components/Icon';
import { SITE } from '@/lib/site';

export const metadata = { title: `Payment Policy — ${SITE.name}` };

export default function Page() {
  return (
    <PageShell
      eyebrow="Payment Policy"
      title="How payments work at AeroTicketHub"
      subtitle="100% phone-based. Zero payment processing on the website."
    >
      <div className="mx-auto mb-10 max-w-3xl rounded-3xl border border-amber-200 bg-amber-50 p-6 text-amber-900">
        <div className="flex items-start gap-3">
          <Icon name="shield" className="h-6 w-6 shrink-0" />
          <div>
            <p className="font-bold">No payments are accepted on this website.</p>
            <p className="mt-1 text-sm">
              The Site is informational. All transactions are completed by phone with a live
              specialist on a recorded line — call <a className="font-bold underline" href={SITE.phoneHref}>{SITE.phone}</a>.
            </p>
          </div>
        </div>
      </div>

      <Prose>
        <h2>1. Why phone-only?</h2>
        <p>
          Air travel pricing and fare rules change minute to minute. A short call with our
          specialist ensures (a) the displayed fare is still available, (b) the exact rules — change
          fees, baggage, refundability — are explained to you, and (c) your name, payment method
          and itinerary are verified before any charge is made. This eliminates the most common
          source of disputes — incorrect ticket data submitted through self-serve checkout.
        </p>

        <h2>2. How a typical booking goes</h2>
        <ul>
          <li>You search a route on our website and tap the call button.</li>
          <li>An agent answers within 30 seconds and pulls the live fare options.</li>
          <li>The agent explains itinerary, total cost, service fee (if any), and fare rules.</li>
          <li>You authorise the charge verbally on the recorded line.</li>
          <li>
            The agent enters your card details directly into the airline's or processor's secure
            payment terminal. We never re-type or store the number.
          </li>
          <li>Your e-ticket arrives by email within minutes.</li>
        </ul>

        <h2>3. Accepted payment methods</h2>
        <p>
          Major credit and debit cards (Visa, Mastercard, American Express, Discover), select
          digital wallets (Apple Pay, Google Pay), and approved bank transfers. All payments are
          processed by certified PCI-DSS Level 1 third-party processors (e.g. Stripe,
          Authorize.net, Worldpay).
        </p>

        <h2>4. Service fee</h2>
        <p>
          On some itineraries we charge a flat service fee for the agent's time, fare-rule
          research and post-booking support. The fee is disclosed verbally before payment and
          itemised on your receipt. The fee is non-refundable once the ticket is issued.
        </p>

        <h2>5. Receipts and confirmations</h2>
        <p>
          You will receive (a) an airline e-ticket from the carrier itself, and (b) a separate
          payment receipt from the payment processor. Forward either to{' '}
          <a className="text-brand-600 underline" href={SITE.emailHref}>{SITE.email}</a> if you do
          not receive both within one hour.
        </p>

        <h2>6. Disputes and chargebacks</h2>
        <p>
          If you believe a charge is incorrect, please call us first at{' '}
          <a className="text-brand-600 underline" href={SITE.phoneHref}>{SITE.phone}</a>. Most
          issues can be resolved in a single call. If we cannot resolve it, you retain all rights
          to dispute the charge with your card issuer.
        </p>

        <h2>7. Refunds</h2>
        <p>
          See our <a className="text-brand-600 underline" href="/cancellation-refund">Cancellation &amp; Refund</a> page
          for full details on refund eligibility, timing and process.
        </p>

        <h2>8. Fraud warning</h2>
        <p>
          {SITE.name} will <strong>never</strong> ask you to wire funds, pay in gift cards, send
          cryptocurrency, or pay through any messaging app (WhatsApp, Telegram, etc.). If anyone
          claiming to represent {SITE.name} requests this, hang up and report it to{' '}
          <a className="text-brand-600 underline" href={SITE.emailHref}>{SITE.email}</a>.
        </p>
      </Prose>
    </PageShell>
  );
}
