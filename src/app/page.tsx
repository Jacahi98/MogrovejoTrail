import { Hero } from '@/components/hero';
import { ModalitiesSection } from '@/components/modalities-section';
import { CookieBanner } from '@/components/sections';
import { FloatingCTA } from '@/components/floating-cta';

export default function Home() {
  return (
    <>
      <Hero />
      <ModalitiesSection />
      <CookieBanner />
      <FloatingCTA />
    </>
  );
}
