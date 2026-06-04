import Hero from '@/components/Hero';
import { About, CallCTA, Destinations, Features, Testimonials, ValueProps } from '@/components/Sections';
import {
  AffordableTips,
  Newsletter,
  TravelByRegion,
  TrustBadges,
} from '@/components/MoreSections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Features />
      <About />
      <TravelByRegion />
      <Destinations />
      <AffordableTips />
      <ValueProps />
      <Testimonials />
      <Newsletter />
      <CallCTA />
    </>
  );
}
