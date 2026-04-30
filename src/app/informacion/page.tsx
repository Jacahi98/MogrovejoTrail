import { PageIntro } from '@/components/page-intro';
import { SponsorsSection, Footer, CookieBanner } from '@/components/sections';
import { RouteMapSection } from '@/components/route-map-section';
import { RegulationSection } from '@/components/regulation-section';
import { AccessSection } from '@/components/access-section';
import { FAQSection } from '@/components/faq-section';
import { FloatingCTA } from '@/components/floating-cta';

export default function InformacionPage() {
  return (
    <>
      <PageIntro
        title="Todo lo que necesitas saber"
        description="Información práctica sobre el recorrido, reglamento, acceso y aparcamiento."
      />
      <RouteMapSection />
      <RegulationSection />
      <AccessSection />
      <FAQSection />
      <SponsorsSection />
      <Footer />
      <CookieBanner />
      <FloatingCTA />
    </>
  );
}
