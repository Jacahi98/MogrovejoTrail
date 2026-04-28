import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/theme-context";
import { LanguageProvider } from "@/contexts/language-context";
import { Header } from "@/components/header";
import { ProgressBar } from "@/components/progress-bar";
import "./globals.css";

export const metadata: Metadata = {
  title: "MogrovejoTrail 2026 | Carrera de Trail Running",
  description: "Únete a la carrera de trail más espectacular de las montañas de Mogrovejo. 1 de agosto de 2026. Varias modalidades para todos los niveles.",
  keywords: ["trail running", "carrera de montaña", "mogrovejo", "trail"],
  openGraph: {
    title: "MogrovejoTrail 2026",
    description: "La carrera de trail más emocionante del verano",
    type: "website",
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
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <ProgressBar />
            <main className="flex-1">{children}</main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
