'use client';

import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { ElevationProfile } from './elevation-profile';

interface RouteData {
  distance: '10K';
  totalDistance: number;
  elevationGain: number;
  maxAltitude: number;
  minAltitude: number;
  wikiloc: string;
  elevationProfile: Array<{ distance: number; altitude: number }>;
  location: string;
}

const routeData: RouteData = {
  distance: '10K',
  totalDistance: 10,
  elevationGain: 400,
  maxAltitude: 956,
  minAltitude: 546,
  wikiloc: 'https://www.wikiloc.com/running-trails/mogrovejo-10k-trail-141347749?h=3p7yarw26p&wa=so&la=en',
  location: 'Mogrovejo, Cantabria',
  elevationProfile: [
    { distance: 0.0, altitude: 643 },
    { distance: 0.3, altitude: 647 },
    { distance: 0.7, altitude: 613 },
    { distance: 1.0, altitude: 583 },
    { distance: 1.3, altitude: 581 },
    { distance: 1.6, altitude: 555 },
    { distance: 2.0, altitude: 586 },
    { distance: 2.3, altitude: 614 },
    { distance: 2.6, altitude: 664 },
    { distance: 3.0, altitude: 680 },
    { distance: 3.3, altitude: 714 },
    { distance: 3.6, altitude: 740 },
    { distance: 4.0, altitude: 768 },
    { distance: 4.3, altitude: 812 },
    { distance: 4.6, altitude: 836 },
    { distance: 4.9, altitude: 854 },
    { distance: 5.3, altitude: 881 },
    { distance: 5.6, altitude: 916 },
    { distance: 5.9, altitude: 929 },
    { distance: 6.3, altitude: 918 },
    { distance: 6.6, altitude: 946 },
    { distance: 6.9, altitude: 933 },
    { distance: 7.2, altitude: 906 },
    { distance: 7.6, altitude: 891 },
    { distance: 7.9, altitude: 863 },
    { distance: 8.2, altitude: 825 },
    { distance: 8.6, altitude: 807 },
    { distance: 8.9, altitude: 788 },
    { distance: 9.2, altitude: 750 },
    { distance: 9.6, altitude: 693 },
    { distance: 9.9, altitude: 654 },
  ],
};

export function RouteMapSection() {

  return (
    <section id="recorrido" className="relative border-t border-[var(--border-color)] bg-[radial-gradient(circle_at_top_left,_rgba(44,74,111,0.24),_transparent_42%),linear-gradient(180deg,var(--bg-primary),var(--bg-secondary))]">
      <div className="py-16 relative">
        {/* Destellos decorativos muy sutiles */}
        <div className="absolute top-20 left-12 w-32 h-32 bg-[#2C4A6F] opacity-2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-[#4A6FA0] opacity-2 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-[#2C4A6F] opacity-2 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-8">
            {/* Sección: Calendario y Ubicación - Calendario pequeño, mapa grande */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
          {/* Fecha y Ubicación */}
          <div className="bg-white dark:bg-[#fafafa] rounded-xl shadow-lg p-4 sm:p-6 border-3 border-[#2C4A6F] flex flex-col justify-center gap-6">
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#2C4A6F] uppercase tracking-wide mb-1">Fecha</p>
              <p className="font-roboto-condensed text-xl sm:text-2xl font-bold text-[#2C4A6F]">25 de julio de 2026</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#2C4A6F] uppercase tracking-wide mb-1">Ubicación</p>
              <p className="font-roboto-condensed text-xl sm:text-2xl font-bold text-[#2C4A6F]">{routeData.location}</p>
            </div>
          </div>

          {/* Ubicación - Mapa */}
          <div className="md:col-span-2 rounded-xl shadow-lg overflow-hidden border-3 border-[#2C4A6F] h-72 sm:h-[450px]">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=43.1827,-4.8477&z=14&output=embed"
            ></iframe>
          </div>
        </motion.div>

        {/* Sección: Perfil de la Carrera */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-[#fafafa] rounded-xl shadow-lg p-8 border-3 border-[#2C4A6F]"
        >
          <h3 className="font-roboto-condensed text-2xl font-bold text-[#2C4A6F] mb-6">PERFIL DE LA CARRERA</h3>
          <ElevationProfile
            data={routeData.elevationProfile}
            maxAltitude={routeData.maxAltitude}
            minAltitude={routeData.minAltitude}
            totalDistance={routeData.totalDistance}
          />

          {/* Datos y botones en la misma fila - ancho completo */}
          <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8 pt-8 border-t-2 border-[#2C4A6F]">
            {/* Datos de la ruta - más pequeños */}
            <div className="flex flex-wrap gap-2 sm:gap-3 flex-1 w-full">
              <div className="text-center bg-white dark:bg-white rounded-lg p-2 sm:p-3 border-2 border-[#2C4A6F] flex-1 min-w-[100px]">
                <p className="text-[10px] sm:text-xs font-semibold text-[#2C4A6F] uppercase tracking-wide mb-1">Distancia</p>
                <p className="text-base sm:text-lg font-bold text-[#2C4A6F]">{routeData.totalDistance}km</p>
              </div>
              <div className="text-center bg-white dark:bg-white rounded-lg p-2 sm:p-3 border-2 border-[#2C4A6F] flex-1 min-w-[100px]">
                <p className="text-[10px] sm:text-xs font-semibold text-[#2C4A6F] uppercase tracking-wide mb-1">Desnivel</p>
                <p className="text-base sm:text-lg font-bold text-[#2C4A6F]">{routeData.elevationGain}m</p>
              </div>
              <div className="text-center bg-white dark:bg-white rounded-lg p-2 sm:p-3 border-2 border-[#2C4A6F] flex-1 min-w-[100px]">
                <p className="text-[10px] sm:text-xs font-semibold text-[#2C4A6F] uppercase tracking-wide mb-1">Máx.</p>
                <p className="text-base sm:text-lg font-bold text-[#2C4A6F]">{routeData.maxAltitude}m</p>
              </div>
              <div className="text-center bg-white dark:bg-white rounded-lg p-2 sm:p-3 border-2 border-[#2C4A6F] flex-1 min-w-[100px]">
                <p className="text-[10px] sm:text-xs font-semibold text-[#2C4A6F] uppercase tracking-wide mb-1">Mín.</p>
                <p className="text-base sm:text-lg font-bold text-[#2C4A6F]">{routeData.minAltitude}m</p>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
              <a
                href="/routes/mogrovejo-10k.gpx"
                download
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-[#2C4A6F] hover:bg-[#1f3650] text-white font-bold text-sm rounded-lg transition-all shadow-lg whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                GPX
              </a>
              <a
                href={routeData.wikiloc}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3 sm:px-5 py-2 sm:py-3 border-2 border-[#2C4A6F] text-[#2C4A6F] dark:text-[#2C4A6F] hover:bg-[#f0f5f8] dark:hover:bg-[#f0f5f8] font-bold text-sm rounded-lg transition-all whitespace-nowrap"
              >
                <ExternalLink className="w-4 h-4" />
                Wikiloc
              </a>
            </div>
          </div>
        </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
