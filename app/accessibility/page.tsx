import PageShell, { Prose } from '@/components/PageShell';
import { SITE } from '@/lib/site';

export const metadata = { title: `Accessibility Statement — ${SITE.name}` };

export default function Page() {
  return (
    <PageShell
      eyebrow="Accessibility"
      title="Accessibility Statement"
      subtitle={`Our commitment to making ${SITE.name} usable for everyone.`}
    >
      <Prose>
        <h2>Our commitment</h2>
        <p>
          {SITE.name} is committed to ensuring digital accessibility for people with disabilities.
          We are continually improving the user experience for everyone and applying the relevant
          accessibility standards to achieve this.
        </p>

        <h2>Conformance status</h2>
        <p>
          We aim to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1
          Level AA</strong>. These guidelines explain how to make web content more accessible for
          people with disabilities, and user-friendly for everyone.
        </p>

        <h2>What we have done</h2>
        <ul>
          <li>Semantic HTML structure with proper headings and landmarks.</li>
          <li>Sufficient colour contrast between text and background.</li>
          <li>Keyboard-navigable forms, menus and dialogs.</li>
          <li>Descriptive labels and aria attributes on interactive elements.</li>
          <li>Alternative text on meaningful images.</li>
          <li>Responsive design that adapts to text resizing and viewport changes.</li>
          <li>Phone-based booking option for travellers who prefer not to use the web form.</li>
        </ul>

        <h2>Alternatives if you cannot use the website</h2>
        <p>
          Every service we offer — search, quotes, booking, changes, cancellations and refunds —
          can be completed entirely by phone with a live specialist. Call{' '}
          <a className="text-brand-600 underline" href={SITE.phoneHref}>{SITE.phone}</a> at any
          time, 24×7, and our team will assist you directly with no need to use the website.
        </p>

        <h2>Feedback</h2>
        <p>
          We welcome feedback on the accessibility of the {SITE.name} website. If you encounter any
          barrier, or have a suggestion for improvement, please let us know:
        </p>
        <ul>
          <li>Email: <a className="text-brand-600 underline" href={SITE.emailHref}>{SITE.email}</a></li>
          <li>Phone: <a className="text-brand-600 underline" href={SITE.phoneHref}>{SITE.phone}</a></li>
          <li>
            Postal mail: {SITE.legalName}, {SITE.address.line1}, {SITE.address.cityState},{' '}
            {SITE.address.country}
          </li>
        </ul>
        <p>
          We aim to respond to accessibility feedback within <strong>5 business days</strong>.
        </p>

        <h2>Limitations</h2>
        <p>
          Despite our best efforts, some content on the website may not yet be fully accessible.
          This includes some third-party plugins, embedded media, and user-generated content that
          we do not directly control. If you encounter any such limitation, please contact us and
          we will provide the information in an accessible alternative format.
        </p>

        <h2>Date</h2>
        <p>This statement was last reviewed on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.</p>
      </Prose>
    </PageShell>
  );
}
