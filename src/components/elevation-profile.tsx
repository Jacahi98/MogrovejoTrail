'use client';

import { motion } from 'framer-motion';

interface ElevationData {
  distance: number;
  altitude: number;
}

interface ElevationProfileProps {
  data: ElevationData[];
  maxAltitude: number;
  minAltitude: number;
  totalDistance: number;
}

export function ElevationProfile({
  data,
  maxAltitude,
  minAltitude,
  totalDistance,
}: ElevationProfileProps) {
  const width = 800;
  const height = 300;
  const padding = { top: 20, right: 20, bottom: 40, left: 60 };
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;

  // Escalar datos
  const xScale = (dist: number) => (dist / totalDistance) * graphWidth;
  const yScale = (alt: number) => ((maxAltitude - alt) / (maxAltitude - minAltitude)) * graphHeight;

  // Crear path del perfil
  let pathD = `M ${padding.left} ${padding.top + yScale(data[0].altitude)}`;
  for (let i = 1; i < data.length; i++) {
    const x = padding.left + xScale(data[i].distance);
    const y = padding.top + yScale(data[i].altitude);
    pathD += ` L ${x} ${y}`;
  }

  // Crear área bajo la curva
  const areaD = pathD + ` L ${padding.left + graphWidth} ${padding.top + graphHeight} L ${padding.left} ${padding.top + graphHeight} Z`;

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="w-full">
      {/* Gradiente de fondo */}
      <defs>
        <linearGradient id="elevationGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(90, 125, 106, 0.4)" />
          <stop offset="100%" stopColor="rgba(90, 125, 106, 0.1)" />
        </linearGradient>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5a7d6a" />
          <stop offset="100%" stopColor="#7a9d8a" />
        </linearGradient>
      </defs>

      {/* Área bajo la curva */}
      <motion.path
        d={areaD}
        fill="url(#elevationGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Línea de perfil */}
      <motion.path
        d={pathD}
        stroke="url(#lineGradient)"
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />

      {/* Grid horizontal */}
      {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
        const y = padding.top + graphHeight * ratio;
        const altitude = maxAltitude - (maxAltitude - minAltitude) * ratio;
        return (
          <g key={`grid-${ratio}`}>
            <line
              x1={padding.left}
              y1={y}
              x2={padding.left + graphWidth}
              y2={y}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth={1}
              strokeDasharray="4"
            />
            <text
              x={padding.left - 10}
              y={y}
              textAnchor="end"
              dominantBaseline="middle"
              className="text-xs fill-[var(--text-secondary)]"
            >
              {Math.round(altitude)}m
            </text>
          </g>
        );
      })}

      {/* Eje X (distancia) */}
      {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
        const x = padding.left + graphWidth * ratio;
        const distance = totalDistance * ratio;
        return (
          <g key={`dist-${ratio}`}>
            <text
              x={x}
              y={height - 10}
              textAnchor="middle"
              className="text-xs fill-[var(--text-secondary)]"
            >
              {Math.round(distance)}km
            </text>
          </g>
        );
      })}

      {/* Label Y */}
      <text
        x={20}
        y={height / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        transform={`rotate(-90 20 ${height / 2})`}
        className="text-xs fill-[var(--text-secondary)]"
      >
        Altitud (m)
      </text>

      {/* Label X */}
      <text x={width / 2} y={height - 5} textAnchor="middle" className="text-xs fill-[var(--text-secondary)]">
        Distancia (km)
      </text>
    </svg>
  );
}
