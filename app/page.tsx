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

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustReviews />
      <TrustBadges />
      <Features />
      <FlightInfo />
      <About />
      <TravelByRegion />
      <BookingSteps />
      <TollFreeBand />
      <Destinations />
      <AffordableTips />
      <ValueProps />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <CallCTA />
    </>
  );
}
