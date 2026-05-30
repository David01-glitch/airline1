import Hero from '@/components/Hero';
import { About, CallCTA, Destinations, Features, Testimonials, ValueProps } from '@/components/Sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Destinations />
      <ValueProps />
      <Testimonials />
      <CallCTA />
    </>
  );
}
