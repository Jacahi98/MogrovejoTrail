import { PageIntro } from '@/components/page-intro';
import { InformationSection, SponsorsSection, Footer, CookieBanner } from '@/components/sections';
import { RouteMapSection } from '@/components/route-map-section';
import { SupplySection } from '@/components/supply-section';
import { RegulationSection } from '@/components/regulation-section';
import { AccessSection } from '@/components/access-section';
import { ResultsSection } from '@/components/results-section';
import { FAQSection } from '@/components/faq-section';
import { FloatingCTA } from '@/components/floating-cta';

export default function InformacionPage() {
  return (
    <>
      <PageIntro
        eyebrow="Informacion de carrera"
        title="Todo lo importante para preparar tu Mogrovejo Trail"
        description="Aqui reunimos acceso, perfil del recorrido, avituallamientos, reglamento, resultados recientes y preguntas frecuentes para que el corredor tenga toda la informacion practica en un solo lugar."
      />
      <InformationSection />
      <RouteMapSection />
      <SupplySection />
      <RegulationSection />
      <AccessSection />
      <ResultsSection />
      <FAQSection />
      <SponsorsSection />
      <Footer />
      <CookieBanner />
      <FloatingCTA />
    </>
  );
}
