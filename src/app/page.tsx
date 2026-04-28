import { Hero } from '@/components/hero';
import { ModalitiesSection } from '@/components/modalities-section';
import { SponsorsSection, Footer, CookieBanner } from '@/components/sections';
import { FloatingCTA } from '@/components/floating-cta';
import { SiteSectionsOverview } from '@/components/site-sections-overview';

export default function Home() {
  return (
    <>
      <Hero />
      <ModalitiesSection />
      <SiteSectionsOverview />
      <SponsorsSection />
      <Footer />
      <CookieBanner />
      <FloatingCTA />
    </>
  );
}
