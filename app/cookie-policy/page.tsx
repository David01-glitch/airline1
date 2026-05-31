import PageShell, { Prose } from '@/components/PageShell';
import { SITE } from '@/lib/site';

export const metadata = { title: `Cookie Policy — ${SITE.name}` };

export default function Page() {
  return (
    <PageShell
      eyebrow="Cookie Policy"
      title="How we use cookies"
      subtitle="Last updated: January 1, 2026"
    >
      <Prose>
        <p>
          This Cookie Policy explains how {SITE.name} uses cookies and similar technologies on{' '}
          <a className="text-brand-600 underline" href="/">aerotickethub.com</a> (the "Site"). It
          should be read together with our{' '}
          <a className="text-brand-600 underline" href="/privacy">Privacy Policy</a>.
        </p>

        <h2>1. What are cookies?</h2>
        <p>
          Cookies are small text files placed on your device when you visit a website. They are
          widely used to make websites work, improve user experience and provide information to the
          site owner. Similar technologies (pixels, local storage, SDKs) may also be used; for
          simplicity we refer to all of them as "cookies".
        </p>

        <h2>2. Categories of cookies we use</h2>
        <h3>Strictly necessary</h3>
        <p>
          These cookies are essential for the Site to function — they enable basic navigation, save
          your form input, and remember consent preferences. The Site cannot run without them, so
          they do not require consent.
        </p>

        <h3>Analytics</h3>
        <p>
          We use analytics cookies (for example Google Analytics 4) to understand how visitors use
          the Site so we can improve it. These cookies collect aggregated, anonymised data such as
          pages viewed, time on page and approximate location. You can opt out via our cookie
          banner.
        </p>

        <h3>Advertising</h3>
        <p>
          With your consent we may use advertising cookies (for example Google Ads conversion
          tracking, Meta Pixel) to measure the performance of our marketing campaigns and to show
          relevant ads on other platforms. You can opt out via our cookie banner.
        </p>

        <h2>3. Managing cookies</h2>
        <p>
          You can manage your cookie preferences at any time using the cookie banner that appears
          on your first visit. You can also block or delete cookies through your browser settings
          — see the help section of your browser for instructions. Blocking strictly necessary
          cookies may cause parts of the Site to malfunction.
        </p>

        <h2>4. Do Not Track</h2>
        <p>
          Some browsers offer a "Do Not Track" (DNT) signal. We respect DNT by disabling analytics
          and advertising cookies when DNT is enabled.
        </p>

        <h2>5. Changes to this policy</h2>
        <p>
          We may update this Cookie Policy from time to time. The "Last updated" date reflects the
          most recent revision.
        </p>

        <h2>6. Contact</h2>
        <p>
          For questions about cookies, contact us at{' '}
          <a className="text-brand-600 underline" href={SITE.emailHref}>{SITE.email}</a>.
        </p>
      </Prose>
    </PageShell>
  );
}
