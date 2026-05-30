import PageShell, { Prose } from '@/components/PageShell';
import { SITE } from '@/lib/site';

export const metadata = { title: `Terms & Conditions — ${SITE.name}` };

export default function TermsPage() {
  return (
    <PageShell eyebrow="Terms" title="Terms & Conditions" subtitle="Please read carefully before using our services.">
      <Prose>
        <p>
          These terms govern your use of {SITE.name}. By engaging our services you accept the
          following conditions.
        </p>
        <h2>Our role</h2>
        <p>
          {SITE.name} is an independent third-party travel intermediary. We are not an airline and
          do not operate flights. We facilitate bookings between you and the airline of your choice.
        </p>
        <h2>Pricing & availability</h2>
        <p>
          All fares are subject to airline availability and may change without notice. The final
          price (including any service fee) will be confirmed before payment.
        </p>
        <h2>Bookings & changes</h2>
        <p>
          Changes, cancellations, and refunds follow the rules of the operating airline. Any
          service charges levied by {SITE.name} are disclosed in advance and are non-refundable.
        </p>
        <h2>Liability</h2>
        <p>
          {SITE.name} is not liable for delays, cancellations, schedule changes, lost baggage, or
          any disruption caused by airlines or third parties. Disputes are governed by the laws of
          the United States.
        </p>
      </Prose>
    </PageShell>
  );
}
