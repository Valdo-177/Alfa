import type { Metadata } from "next";
import {Rajdhani} from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";

const rajdhani = Rajdhani({ subsets: ['latin'], weight: ["300","400","500","600","700"] })

export const metadata: Metadata = {
  title: "Alfa - Medición de Temperatura para Paneles Solares",
  description:
    "Alfa es líder en la fabricación de medidores de temperatura para paneles solares. Descubre nuestros productos diseñados para soportar condiciones extremas.",
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
