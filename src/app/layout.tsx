import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zanoni Alfredo Salas Tobón | Portfolio Profesional",
  description: "Desarrollador Full Stack especializado en Next.js, React, TypeScript y soluciones web modernas. Descubre mis proyectos, habilidades y servicios.",
  keywords: ["Zanoni Alfredo Salas Tobón", "desarrollador", "full stack", "Next.js", "React", "TypeScript", "portfolio", "web developer"],
  authors: [{ name: "Zanoni Alfredo Salas Tobón" }],
  openGraph: {
    title: "Zanoni Alfredo Salas Tobón | Portfolio Profesional",
    description: "Desarrollador Full Stack especializado en Next.js, React, TypeScript y soluciones web modernas.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zanoni Alfredo Salas Tobón | Portfolio",
    description: "Desarrollador Full Stack especializado en Next.js, React, TypeScript",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-background-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}
