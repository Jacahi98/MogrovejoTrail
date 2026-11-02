import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob: https://img.youtube.com https://i.ytimg.com",
  "media-src 'self'",
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com https://docs.google.com https://maps.google.com",
  "connect-src 'self' https://vitals.vercel-insights.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Solo desarrollo: sin esto Next bloquea su conexión de desarrollo si abres la web por 127.0.0.1 (en vez de localhost),
  // React no llega a engancharse y las animaciones de entrada dejan toda la portada invisible. No afecta a producción.
  allowedDevOrigins: ['127.0.0.1'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Content-Security-Policy', value: csp },
        ],
      },
      {
        source: '/img/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/logos/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/video/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800' }],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/informacion', destination: '/info', permanent: true },
    ];
  },
};

export default nextConfig;
