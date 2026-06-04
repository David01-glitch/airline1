import PageShell, { Prose } from '@/components/PageShell';
import { SITE } from '@/lib/site';

export const metadata = { title: `Disclosure — ${SITE.name}` };

export default function Page() {
  return (
    <PageShell
      eyebrow="Disclosure"
      title="Affiliate, Compensation & Affiliation Disclosure"
      subtitle="Full transparency about how we earn, who we work with, and what that means for you."
    >
      <Prose>
        <h2>FTC affiliate / commission disclosure</h2>
        <p>
          In accordance with the U.S. Federal Trade Commission&apos;s 16 CFR Part 255 (Guides
          Concerning the Use of Endorsements and Testimonials in Advertising), {SITE.name}{' '}
          discloses the following financial relationships up front:
        </p>
        <ul>
          <li>
            <strong>Airline & consolidator commissions.</strong> When you book a flight through one
            of our travel specialists, {SITE.name} earns a commission from the airline or our
            ticketing consolidator. This commission is paid by the supplier, not by you. It does
            not increase the price of your ticket.
          </li>
          <li>
            <strong>No service fee charged to travellers.</strong> We do not add a service fee on
            top of the airline fare. The price quoted by our agent is the live airline fare plus
            applicable airline taxes — nothing extra from us. Our entire revenue comes from supplier
            commissions.
          </li>
          <li>
            <strong>Third-party advertising platforms.</strong> {SITE.name} advertises on Google
            Ads, Meta (Facebook/Instagram), and other paid platforms. We pay those platforms; they
            do not pay us. Our ads are clearly labelled by the platforms as &ldquo;Sponsored&rdquo;.
          </li>
          <li>
            <strong>No undisclosed affiliate links.</strong> The Site does not currently host
            affiliate marketing links to third-party retailers or services. If we add any in the
            future they will be clearly labelled <em>&ldquo;affiliate link&rdquo;</em> next to the
            link.
          </li>
        </ul>

        <h2>Affiliation with airlines</h2>
        <p>
          {SITE.name} is an <strong>independent third-party travel agency</strong>. We are not
          affiliated, associated, authorised, endorsed by, or in any way officially connected with
          any airline, hotel, car-hire company, alliance, or government agency.
        </p>
        <p>
          Airline names, trademarks, logos and brand assets that may appear on the Site —
          including but not limited to American Airlines, Delta Air Lines, United Airlines,
          British Airways, Emirates, Lufthansa and others — remain the property of their respective
          owners. Their use on the Site is for identification purposes only and does not imply
          affiliation, endorsement, sponsorship or any formal commercial relationship.
        </p>

        <h2>How we earn revenue (in detail)</h2>
        <p>
          {SITE.name} is a privately owned, U.S.-registered travel agency. Our entire revenue comes
          from two sources:
        </p>
        <ol>
          <li>
            <strong>Direct airline commissions</strong> — major U.S. and international airlines pay
            us a small percentage commission on every confirmed booking, in line with standard
            travel-agency contracts.
          </li>
          <li>
            <strong>Consolidator commissions and over-rides</strong> — for long-haul international
            routes, we work with ticketing consolidators that pay us a commission based on volume.
            This is how travel agencies have operated since deregulation; it is not a hidden fee
            paid by the traveller.
          </li>
        </ol>
        <p>
          We do <strong>not</strong> charge searching, quoting, or advisory fees. If you call,
          email or use the search widget on this Site and decide not to book, you owe us nothing.
        </p>

        <h2>Sample fare prices on this Site</h2>
        <p>
          Any prices shown on the Site (e.g. in marketing or blog content) are{' '}
          <strong>illustrative sample fares</strong> based on past observed booking data. They are
          not live fares and are not bookable as shown. The actual price for your specific
          itinerary will be confirmed verbally by our agent before any payment. See our{' '}
          <a className="text-brand-600 underline" href="/sample-fare-disclosure">
            Sample Fare Disclosure
          </a>{' '}
          for details.
        </p>

        <h2>No payment processing on this Site</h2>
        <p>
          The Site does not process payments, store card information, or accept money in any form.
          All transactions occur exclusively over the phone with a live agent on a recorded line,
          via PCI-DSS Level 1 compliant third-party payment processors. {SITE.name} does not see
          or retain your full card number at any point.
        </p>

        <h2>Sponsored content</h2>
        <p>
          As of the &ldquo;last updated&rdquo; date below, the {SITE.name} blog does not host
          sponsored posts, paid product reviews, or paid placement of any kind. All blog articles
          are written by our travel team and reflect independent opinion based on operational
          experience. If we ever publish sponsored content, it will be marked &ldquo;Sponsored&rdquo;
          or &ldquo;Paid Partnership&rdquo; at the top of the article in line with the FTC
          guidelines.
        </p>

        <h2>Reviews & testimonials</h2>
        <p>
          Customer reviews displayed on the Site are based on feedback we have received from real
          customers. Names and identifying details have been edited for privacy. We do not pay for
          reviews and we do not remove negative reviews unless they contain false statements,
          confidential information, or personal attacks. We aim to display a mix of ratings rather
          than only five-star reviews.
        </p>

        <h2>Regulatory disclosures</h2>
        <p>
          {SITE.legalName} operates from {SITE.fullAddress}. We comply with applicable U.S. federal
          and state travel-agency, consumer-protection, and tax regulations, including:
        </p>
        <ul>
          {SITE.sellerRegistrations.map((r) => (
            <li key={r}>{r}</li>
          ))}
          <li>U.S. Department of Transportation rules on advertised fares and refunds.</li>
          <li>FTC Mail, Internet, and Telephone Order Merchandise Rule (where applicable).</li>
          <li>State sales-tax collection where required.</li>
        </ul>

        <h2>Contact</h2>
        <p>
          Questions about any of the disclosures above? Write to{' '}
          <a className="text-brand-600 underline" href={SITE.emailHref}>
            {SITE.email}
          </a>{' '}
          or call <a className="text-brand-600 underline" href={SITE.phoneHref}>{SITE.phone}</a>.
        </p>

        <p className="text-xs text-slate-500">
          <em>
            Last updated{' '}
            {new Date().toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
            .
          </em>
        </p>
      </Prose>
    </PageShell>
  );
}
