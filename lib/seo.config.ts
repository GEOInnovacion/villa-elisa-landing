/**
 * seo.config.ts — Fuente única de verdad para todo el SEO de Villa Elisa.
 *
 * Para actualizar datos del hotel (teléfono, email, scores, etc.):
 *   → editar HOTEL_INFO
 *
 * Para actualizar textos de metadata en ES/EN:
 *   → editar SEO_CONTENT
 *
 * Para añadir keywords, FAQs o amenities:
 *   → editar los arrays correspondientes
 */

// ─── Constantes globales ──────────────────────────────────────────────────────

export const SITE_URL  = "https://www.villaelisahotel.com";  // ← reemplazar con dominio real
export const SITE_NAME = "Villa Elisa Hotel Boutique";

// ─── Datos del hotel (fuente única) ──────────────────────────────────────────

export const HOTEL_INFO = {
  phone:         "+51950008100",
  phoneDisplay:  "+51 950 008 100",
  email:         "reservas@villaelisahotel.com",        // ← reemplazar
  address: {
    street:   "Calle Consuelo 114",
    district: "Yanahuara",
    city:     "Arequipa",
    country:  "PE",
    postal:   "04013",
  },
  geo: { lat: -16.396, lng: -71.544 },
  checkin:       "14:00",
  checkout:      "12:00",
  numberOfRooms: 5,
  priceRange:    "$$",
  starRating:    "4",
  ratings: {
    tripadvisor: { score: "4.9", max: "5",  reviews: 689  },
    booking:     { score: "9.3", max: "10", reviews: null },
    expedia:     { score: "9.8", max: "10", reviews: 133  },
  },
  externalProfiles: [
    "https://www.tripadvisor.com/Hotel_Review-g294313-d2367023-Reviews-Hotel_Boutique_Villa_Elisa-Arequipa_Arequipa_Region.html",
    "https://www.booking.com/hotel/pe/villa-elisa-boutique.html",
    "https://www.expedia.com/Arequipa-Hotels-Hotel-Boutique-Villa-Elisa.h10517032.Hotel-Information",
  ],
  images: [
    "/og-image.jpg",
    "/images/rooms/vip.jpg",
    "/images/services/restaurante.jpg",
  ],
} as const;

// ─── Contenido SEO bilingüe ───────────────────────────────────────────────────

export type Lang = "es" | "en";

export const SEO_CONTENT: Record<Lang, {
  title:       string;
  description: string;
  ogTitle:     string;
  ogDesc:      string;
  twitterDesc: string;
  ogImageAlt:  string;
  keywords:    string[];
  faqs: Array<{ question: string; answer: string }>;
  amenities:   string[];
  breadcrumb:  string;   // label del ítem raíz en el breadcrumb
}> = {
  es: {
    title:
      "Villa Elisa Hotel Boutique | Arequipa, Perú",
    description:
      "Hotel Boutique Villa Elisa en Arequipa, Perú. Arquitectura colonial de sillar, jardines de lavanda, piscina privada, restaurante museo y atención personalizada. #4 en TripAdvisor · 9.8/10 en Expedia.",
    ogTitle:
      "Villa Elisa Hotel Boutique | Arequipa, Perú",
    ogDesc:
      "Hotel boutique colonial en el corazón de Arequipa. Jardines de lavanda, piscina privada, restaurante museo. #4 en TripAdvisor · 9.8/10 en Expedia.",
    twitterDesc:
      "Hotel boutique colonial en Arequipa. Jardines de lavanda, piscina privada, restaurante museo. #4 en TripAdvisor.",
    ogImageAlt:
      "Villa Elisa Hotel Boutique — Arequipa, Perú",
    keywords: [
      "hotel boutique arequipa",
      "villa elisa arequipa",
      "hotel arequipa peru",
      "hotel colonial arequipa",
      "hotel yanahuara arequipa",
      "boutique hotel arequipa",
      "hotel romántico arequipa",
      "alojamiento arequipa",
      "hotel sillar arequipa",
      "hotel jardines arequipa",
      "hotel piscina arequipa",
      "restaurante museo arequipa",
      "hotel cerca plaza arequipa",
      "hotel tripadvisor arequipa",
      "mejor hotel arequipa",
    ],
    faqs: [
      {
        question: "¿Dónde está ubicado Villa Elisa Hotel Boutique?",
        answer:
          "Villa Elisa se encuentra en Calle Consuelo 114, Yanahuara, Arequipa, Perú — a pocos minutos caminando del centro histórico.",
      },
      {
        question: "¿Cuál es la puntuación de Villa Elisa en TripAdvisor?",
        answer:
          "Villa Elisa tiene una puntuación de 4.9/5 en TripAdvisor y es el #4 de 144 hoteles en Arequipa, con 689 reseñas verificadas.",
      },
      {
        question: "¿Qué servicios ofrece Villa Elisa?",
        answer:
          "Villa Elisa ofrece habitaciones boutique, piscina privada, restaurante museo novoandino, sala de reuniones, sesiones de fotos en jardines coloniales, tours en moto y paquetes especiales para bodas y celebraciones.",
      },
      {
        question: "¿Cómo hago una reserva en Villa Elisa?",
        answer:
          "Puedes reservar directamente por WhatsApp al +51 950 008 100 o completando el formulario de contacto en nuestro sitio web.",
      },
      {
        question: "¿Tiene Villa Elisa piscina?",
        answer:
          "Sí, Villa Elisa cuenta con una piscina privada climatizada con vista al jardín de lavanda, exclusiva para huéspedes.",
      },
    ],
    amenities: [
      "Piscina privada",
      "Restaurante museo",
      "WiFi gratuito",
      "Jardines de lavanda",
      "Tours en moto",
      "Sala de reuniones",
      "Servicio de mayordomía",
    ],
    breadcrumb: "Inicio",
  },

  en: {
    title:
      "Villa Elisa Boutique Hotel | Arequipa, Peru",
    description:
      "Villa Elisa Boutique Hotel in Arequipa, Peru. Colonial sillar architecture, lavender gardens, private pool, museum restaurant and personalised service. #4 on TripAdvisor · 9.8/10 on Expedia.",
    ogTitle:
      "Villa Elisa Boutique Hotel | Arequipa, Peru",
    ogDesc:
      "Colonial boutique hotel in the heart of Arequipa. Lavender gardens, private pool, museum restaurant. #4 on TripAdvisor · 9.8/10 on Expedia.",
    twitterDesc:
      "Colonial boutique hotel in Arequipa. Lavender gardens, private pool, museum restaurant. #4 on TripAdvisor.",
    ogImageAlt:
      "Villa Elisa Boutique Hotel — Arequipa, Peru",
    keywords: [
      "boutique hotel arequipa",
      "villa elisa arequipa",
      "hotel arequipa peru",
      "colonial hotel arequipa",
      "yanahuara hotel arequipa",
      "best hotel arequipa",
      "arequipa accommodation",
      "luxury hotel arequipa",
      "romantic hotel arequipa",
      "arequipa boutique stay",
      "private pool hotel arequipa",
      "museum restaurant arequipa",
      "tripadvisor arequipa hotel",
      "arequipa hotel with garden",
      "peru boutique hotel",
    ],
    faqs: [
      {
        question: "Where is Villa Elisa Boutique Hotel located?",
        answer:
          "Villa Elisa is located at Calle Consuelo 114, Yanahuara, Arequipa, Peru — a short walk from the historic city centre.",
      },
      {
        question: "What is Villa Elisa's TripAdvisor rating?",
        answer:
          "Villa Elisa holds a score of 4.9/5 on TripAdvisor and ranks #4 out of 144 hotels in Arequipa, with 689 verified reviews.",
      },
      {
        question: "What services does Villa Elisa offer?",
        answer:
          "Villa Elisa offers boutique rooms, a private heated pool, a novo-Andean museum restaurant, a meeting room, photo sessions in colonial gardens, motorcycle tours and special packages for weddings and celebrations.",
      },
      {
        question: "How do I make a reservation at Villa Elisa?",
        answer:
          "You can book directly via WhatsApp at +51 950 008 100 or by completing the contact form on our website.",
      },
      {
        question: "Does Villa Elisa have a swimming pool?",
        answer:
          "Yes, Villa Elisa has a private heated pool overlooking the lavender garden, exclusively available to guests.",
      },
    ],
    amenities: [
      "Private pool",
      "Museum restaurant",
      "Free WiFi",
      "Lavender gardens",
      "Motorcycle tours",
      "Meeting room",
      "Butler service",
    ],
    breadcrumb: "Home",
  },
};

// ─── Helper: construye el JSON-LD para un idioma dado ─────────────────────────

export function buildJsonLd(lang: Lang) {
  const c = SEO_CONTENT[lang];
  const h = HOTEL_INFO;

  return {
    "@context": "https://schema.org",
    "@graph": [
      // Hotel
      {
        "@type": "Hotel",
        "@id": `${SITE_URL}/#hotel`,
        name: SITE_NAME,
        description: c.description,
        url: SITE_URL,
        telephone: h.phone,
        email: h.email,
        priceRange: h.priceRange,
        starRating: { "@type": "Rating", ratingValue: h.starRating },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: h.ratings.tripadvisor.score,
          reviewCount: String(h.ratings.tripadvisor.reviews),
          bestRating: h.ratings.tripadvisor.max,
          worstRating: "1",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress:   h.address.street,
          addressLocality: h.address.district,
          addressRegion:   h.address.city,
          addressCountry:  h.address.country,
          postalCode:      h.address.postal,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude:  h.geo.lat,
          longitude: h.geo.lng,
        },
        image: h.images.map((img) => `${SITE_URL}${img}`),
        amenityFeature: c.amenities.map((name) => ({
          "@type": "LocationFeatureSpecification",
          name,
          value: true,
        })),
        checkinTime:      h.checkin,
        checkoutTime:     h.checkout,
        numberOfRooms:    h.numberOfRooms,
        currenciesAccepted: "PEN, USD",
        paymentAccepted:  "Cash, Credit Card",
        sameAs: h.externalProfiles,
      },

      // WebSite
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: c.description,
        inLanguage: ["es-PE", "en-US"],
        publisher: { "@id": `${SITE_URL}/#hotel` },
      },

      // WebPage
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: c.title,
        isPartOf:  { "@id": `${SITE_URL}/#website` },
        about:     { "@id": `${SITE_URL}/#hotel` },
        inLanguage: lang === "es" ? "es-PE" : "en-US",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: c.breadcrumb, item: SITE_URL },
          ],
        },
      },

      // FAQPage
      {
        "@type": "FAQPage",
        mainEntity: c.faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };
}
