'use client';

import { PhotoCarousel } from '@/components/photo-carousel';
import { PhotoGrid } from '@/components/photo-grid';
import { useLanguage } from '@/contexts/language-context';
import { PHOTOS_2025 } from '@/data/photos-2025';

export default function MediaPage() {
  const { t } = useLanguage();

  return (
    <>
      <PhotoCarousel />
      <PhotoGrid
        title={t('galeria.2025.title')}
        subtitle={t('galeria.2025.subtitle')}
        photos={PHOTOS_2025}
        openLabel={t('galeria.openPhoto')}
      />
    </>
  );
}
