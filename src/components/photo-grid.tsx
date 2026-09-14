'use client';

interface GridPhoto {
  src: string;
  alt: string;
}

interface PhotoGridProps {
  title: string;
  subtitle?: string;
  photos: GridPhoto[];
  /** Texto accesible del enlace de cada miniatura ("Abrir la foto en grande"). */
  openLabel: string;
}

export function PhotoGrid({ title, subtitle, photos, openLabel }: PhotoGridProps) {
  if (photos.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-black px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h2 className="font-roboto-condensed text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          {subtitle ? <p className="mt-2 text-white/60">{subtitle}</p> : null}
        </div>

        {/* Rejilla de miniaturas: las celdas son verticales (2:3) porque casi
            todas las fotos lo son; con aspect-square se recortaria media foto.
            Cada miniatura abre el WebP a tamano completo en otra pestana. */}
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 xl:grid-cols-5">
          {photos.map((photo) => (
            <li key={photo.src}>
              <a
                href={photo.src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${openLabel}: ${photo.alt}`}
                className="group block overflow-hidden rounded-sm bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[2/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
