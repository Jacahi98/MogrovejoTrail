import { PageIntro } from '@/components/page-intro';
import { ResultsSection } from '@/components/results-section';
import { SponsorsSection, Footer, CookieBanner } from '@/components/sections';
import { FloatingCTA } from '@/components/floating-cta';

export default function ResultadosPage() {
  return (
    <>
      <PageIntro
        eyebrow="Resultados"
        title="Clasificaciones y Resultados"
        description="Consulta los resultados de todas las ediciones del Mogrovejo Trail"
      />
      <ResultsSection />
      <SponsorsSection />
      <Footer />
      <CookieBanner />
      <FloatingCTA />
    </>
  );
}
