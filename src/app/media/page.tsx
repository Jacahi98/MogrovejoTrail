import { PageIntro } from '@/components/page-intro';
import { GallerySection } from '@/components/gallery-section';
import { VideosSection } from '@/components/videos-section';
import { SponsorsSection, Footer, CookieBanner } from '@/components/sections';

export default function MediaPage() {
  return (
    <>
      <PageIntro
        eyebrow="Media"
        title="Ambiente, recorrido y memoria de carrera"
        description="Imagenes del terreno, ambiente de salida y videos de la prueba para hacerse una idea real de lo que se vive en Mogrovejo."
      />
      <GallerySection />
      <VideosSection />
      <SponsorsSection />
      <Footer />
      <CookieBanner />
    </>
  );
}
