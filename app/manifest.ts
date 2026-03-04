import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Villa Elisa Hotel Boutique",
    short_name: "Villa Elisa",
    description:
      "Hotel Boutique colonial en Arequipa, Perú. Jardines, piscina privada y restaurante museo.",
    start_url: "/",
    display: "standalone",
    background_color: "#4A2C17",
    theme_color: "#4A2C17",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
    ],
    lang: "es-PE",
    categories: ["travel", "lifestyle"],
  };
}
