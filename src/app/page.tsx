import { Hero } from '@/components/hero';
import { VideoSection } from '@/components/video-section';
import { ModalitiesSection } from '@/components/modalities-section';
import { CookieBanner } from '@/components/sections';
import { FloatingCTA } from '@/components/floating-cta';

export default function Home() {
  return (
    <>
      <Hero />
      <ModalitiesSection />
      <VideoSection />
      <CookieBanner />
      <FloatingCTA />
    </>
  );
}
