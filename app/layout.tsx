import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import { LangProvider } from "@/components/header/LangContext";

export const metadata: Metadata = {
  title: "Villa Elisa | Hotel Boutique Arequipa",
  description:
    "Descubre Villa Elisa, un hotel boutique de arte y naturaleza en el corazón de Arequipa. Habitaciones únicas, jardines y piscina en un entorno de sillar colonial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <LangProvider>
          <Header />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
