import { Hero } from '@/components/hero';
import { SponsorsSection, Footer, CookieBanner } from '@/components/sections';
import { FloatingCTA } from '@/components/floating-cta';
import { SiteSectionsOverview } from '@/components/site-sections-overview';

export default function Home() {
  return (
    <>
      <Hero />
      <SiteSectionsOverview />
      <SponsorsSection />
      <Footer />
      <CookieBanner />
      <FloatingCTA />
    </>
  );
}
