import Hero from '@/components/Hero';
import { About, CallCTA, Destinations, Features, Testimonials, ValueProps } from '@/components/Sections';
import {
  AffordableTips,
  Newsletter,
  TravelByRegion,
  TrustBadges,
} from '@/components/MoreSections';
import {
  BookingSteps,
  FAQ,
  FlightInfo,
  TollFreeBand,
  TrustReviews,
} from '@/components/ASAPSections';
import SidebarWidgets from '@/components/SidebarWidgets';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustReviews />

      {/* Two-column main with sticky sidebar */}
      <section className="section py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0 space-y-12">
            <Features />
            <FlightInfo />
            <BookingSteps />
            <TollFreeBand />
            <About />
            <TravelByRegion />
            <Destinations />
            <AffordableTips />
            <ValueProps />
            <Testimonials />
            <FAQ />
          </div>
          <SidebarWidgets />
        </div>
      </section>

      <Newsletter />
      <TrustBadges />
      <CallCTA />
    </>
  );
}
