import { RouteMapSection } from '@/components/route-map-section';
import { SupplySection } from '@/components/supply-section';
import { RegulationSection } from '@/components/regulation-section';
import { FAQSection } from '@/components/faq-section';
import { TeamSection } from '@/components/team-section';

export default function InfoPage() {
  return (
    <>
      <RouteMapSection />
      <SupplySection />
      <RegulationSection />
      <FAQSection />
      <TeamSection />
    </>
  );
}
