import { PageIntro } from '@/components/page-intro';
import { ContactSection } from '@/components/contact-section';
import { TeamSection } from '@/components/team-section';
import { Footer, CookieBanner } from '@/components/sections';

export default function ContactoPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contacto"
        title="Organizacion y atencion al corredor"
        description="Inscripciones, incidencias, prensa, patrocinios y coordinacion con clubs o voluntariado."
      />
      <ContactSection />
      <TeamSection />
      <Footer />
      <CookieBanner />
    </>
  );
}
