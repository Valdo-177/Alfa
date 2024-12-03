import type { Metadata } from "next";
import {Rajdhani} from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";

const rajdhani = Rajdhani({ subsets: ['latin'], weight: ["300","400","500","600","700"] })

export const metadata: Metadata = {
  title: "Alfa | Medidores de Temperatura para Paneles Solares",
  description:
    "Descubre Alfa, líderes en la fabricación de medidores de temperatura de alta resistencia para paneles solares. Soluciones innovadoras y duraderas diseñadas para soportar condiciones extremas.",
  openGraph: {
    title: "Alfa | Medidores de Temperatura para Paneles Solares",
    description:
      "Bienvenido a Alfa. Conoce nuestros medidores de temperatura diseñados para paneles solares, fabricados para resistir agua, tierra, polvo, caídas y más. Energía solar sostenible con calidad garantizada.",
    type: "website",
    images: {
      url: "https://firebasestorage.googleapis.com/v0/b/unidotaciones-f49fc.appspot.com/o/Preview_alpa.png?alt=media&token=87727b38-b234-4a27-b770-21cbeb970698",
      width: 1200,
      height: 630,
      alt: "Vista previa de los medidores de temperatura de Alfa",
    },
    siteName: "Alfa | Energía Solar",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfa | Medidores de Temperatura para Paneles Solares",
    description:
      "Explora los medidores de temperatura de Alfa, diseñados para soportar las condiciones más extremas en energía solar. Calidad y confiabilidad garantizadas.",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/unidotaciones-f49fc.appspot.com/o/Preview_alpa.png?alt=media&token=87727b38-b234-4a27-b770-21cbeb970698",
    ],
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={rajdhani.className}
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}
