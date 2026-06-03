import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import StickyCallBar from '@/components/StickyCallBar';
import FloatingCallWidget from '@/components/FloatingCallWidget';
import { SITE } from '@/lib/site';

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://aerotickethub.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: `${SITE.name} — Book Flights with a Live Travel Specialist`,
    template: `%s · ${SITE.name}`,
  },
  description:
    `${SITE.name} is an independent third-party travel agency based in New York. We help travellers find and book flights with a live specialist on the phone. We are not an airline. Sample fares only; live prices confirmed by phone.`,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  keywords: ['flights', 'travel agency', 'phone booking', 'travel desk', 'flight specialist'],
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} — Independent Travel Agency`,
    description:
      'Talk to a live travel specialist and book your next flight by phone. Independent agency, transparent pricing, 24/7 support.',
    url: BASE,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — Independent Travel Agency`,
    description: 'Talk to a live travel specialist and book your next flight by phone.',
  },
  robots: { index: true, follow: true },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: SITE.name,
  legalName: SITE.legalName,
  description:
    'Independent third-party travel agency offering phone-based flight booking with live specialists. We are not an airline.',
  url: BASE,
  telephone: SITE.phone,
  email: SITE.email,
  foundingDate: String(SITE.founded),
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.line1,
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10004',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  sameAs: [SITE.social.facebook, SITE.social.twitter, SITE.social.instagram, SITE.social.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Skip-to-content for screen readers / keyboard users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-3 focus:py-2 focus:text-ink-900 focus:shadow-soft"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <StickyCallBar />
        <FloatingCallWidget />
        <CookieBanner />
      </body>
    </html>
  );
}
