import {
  HeroSection,
  FeaturesSection,
  PricingSection,
  TestimonialSection,
  FinalCtaSection,
} from '@/src/components/organisms/sections';

export default async function Home() {
  return (
    <div className="min-h-screen font-mono relative overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialSection />
      <FinalCtaSection />
    </div>
  );
}
