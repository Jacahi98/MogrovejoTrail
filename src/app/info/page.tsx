'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ModilitiesDetailSection } from '@/components/modalities-detail-section';
import { WorkshopSection } from '@/components/workshop-section';
import { RegulationSection } from '@/components/regulation-section';
import { FAQSection } from '@/components/faq-section';
import { VolunteersSection } from '@/components/volunteers-section';

function InfoPageContent() {
  const searchParams = useSearchParams();
  const initialModality = searchParams.get('modality');

  return (
    <>
      <ModilitiesDetailSection initialModality={initialModality || undefined} />
      <WorkshopSection />
      <RegulationSection />
      <FAQSection />
      <VolunteersSection />
    </>
  );
}

export default function InfoPage() {
  return (
    <Suspense>
      <InfoPageContent />
    </Suspense>
  );
}
