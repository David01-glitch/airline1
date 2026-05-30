import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: `${SITE.name} — Book Flights, Elevate Your Journey`,
  description:
    'AeroTicketHub helps travelers find unbeatable private fares across 400+ global airlines. 24/7 expert support, secure checkout, zero hidden charges.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
