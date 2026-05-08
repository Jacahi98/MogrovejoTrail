import type { Metadata } from "next";
import { Bebas_Neue, Oswald, Righteous, Space_Grotesk, Roboto_Flex } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/contexts/theme-context";
import { LanguageProvider } from "@/contexts/language-context";
import { Header } from "@/components/header";
import { ProgressBar } from "@/components/progress-bar";
import { Footer } from "@/components/sections";
import { FloatingCTA } from "@/components/floating-cta";
import "./globals.css";

export const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
export const oswald = Oswald({ weight: "700", subsets: ["latin"] });
export const righteous = Righteous({ weight: "400", subsets: ["latin"] });
export const spaceGrotesk = Space_Grotesk({ weight: "700", subsets: ["latin"] });
export const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://mogrovejo-trail.vercel.app'),
  title: "Mogrovejo Trail 2026 | Carrera de Trail Running",
  description: "Únete a la carrera de trail más espectacular de las montañas de Mogrovejo. 25 de julio de 2026. 10K Trail, Andarines y Carreras Infantiles.",
  keywords: ["trail running", "carrera de montaña", "mogrovejo", "trail", "cantabria", "picos de europa"],
  openGraph: {
    title: "Mogrovejo Trail 2026",
    description: "25 de julio de 2026 · Mogrovejo, Cantabria · 10K Trail, Andarines y Carreras Infantiles",
    type: "website",
    url: "https://mogrovejo-trail.vercel.app",
    images: [{ url: "/logos/nuevo logo mogrovejo trail CIRCULO 3.png", width: 800, height: 800, alt: "Mogrovejo Trail 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mogrovejo Trail 2026",
    description: "25 de julio de 2026 · Mogrovejo, Cantabria · 10K Trail, Andarines y Carreras Infantiles",
    images: ["/logos/nuevo logo mogrovejo trail CIRCULO 3.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className="h-full scroll-smooth antialiased"
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <ProgressBar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingCTA />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
