import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/header/Header";
import { LangProvider } from "@/components/header/LangContext";
import { SITE_NAME, SITE_URL, SEO_CONTENT, buildJsonLd } from "@/lib/seo.config";

// El idioma por defecto del sitio es español.
// El JSON-LD usa ES como base (los motores de búsqueda lo indexan en ambos idiomas
// gracias a los hreflang y al contenido del propio HTML).
const DEFAULT_LANG = "es" as const;
const seo = SEO_CONTENT[DEFAULT_LANG];

// ─── Viewport ────────────────────────────────────────────────────────────────

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4A2C17",
};

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:  seo.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: seo.description,
  keywords:    seo.keywords,

  authors:   [{ name: SITE_NAME, url: SITE_URL }],
  creator:   SITE_NAME,
  publisher: SITE_NAME,

  alternates: {
    canonical: "/",
    languages: {
      "es-PE": "/",
      "en-US": "/",
    },
  },

  openGraph: {
    type:            "website",
    url:             SITE_URL,
    siteName:        SITE_NAME,
    locale:          "es_PE",
    alternateLocale: ["en_US"],
    title:           seo.ogTitle,
    description:     seo.ogDesc,
    images: [
      {
        url:    "/og-image.webp",
        width:  1200,
        height: 630,
        alt:    seo.ogImageAlt,
        type:   "image/webp",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       seo.ogTitle,
    description: seo.twitterDesc,
    images:      ["/og-image.jpg"],
  },

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-image-preview": "large",
      "max-snippet":       -1,
      "max-video-preview": -1,
    },
  },

  // verification: {
  //   google: "REEMPLAZAR_CON_CODIGO_GOOGLE_SEARCH_CONSOLE",
  // },

  applicationName: SITE_NAME,
  category:        "travel",
  referrer:        "origin-when-cross-origin",
  formatDetection: { telephone: true, email: true, address: true },
};

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(DEFAULT_LANG)) }}
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <LangProvider>
          <Header />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
