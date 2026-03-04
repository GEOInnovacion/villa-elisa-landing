import type { Lang } from '@/components/header/nav.config';

export const HERO_VIDEO_SRC      = '/videos/villa-elisa-hero.mp4';
export const HERO_VIDEO_WEBM_SRC = '/videos/villa-elisa-hero.webm';
export const HERO_VIDEO_POSTER   = '/images/hero-poster.webp';

// ─────────────────────────────────────────────
// CTA — Cloudbeds (barra "mejor tarifa")
// ─────────────────────────────────────────────
export const CLOUDBEDS_RESERVATION_HREF = 'https://us2.cloudbeds.com/es/reservation/N9kuZu?currency=usd';

// ─────────────────────────────────────────────
// CTA — WhatsApp (mismo número que el header)
// ─────────────────────────────────────────────
const WA_NUMBER = '51950008100';
const WA_MESSAGES: Record<Lang, string> = {
  es: 'Hola, me gustaría hacer una reserva en Villa Elisa Hotel Boutique 🏨',
  en: 'Hello, I would like to make a reservation at Villa Elisa Hotel Boutique 🏨',
};

export function getHeroWhatsappHref(lang: Lang): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGES[lang])}`;
}

// ─────────────────────────────────────────────
// Contenido bilingüe
// ─────────────────────────────────────────────
export type HeroContent = {
  eyebrow: string;
  titleLines: string[];
  cta: string;
  scrollLabel: string;
  // Barra flotante "mejor tarifa"
  bestRateLabel: string;
  bestRateCta: string;
  bestRateNote: string;
};

export const HERO_CONTENT: Record<Lang, HeroContent> = {
  es: {
    eyebrow: 'Arequipa, Perú',
    titleLines: ['Arte.', 'Naturaleza.', 'Silencio.'],
    cta: 'Reservar ahora',
    scrollLabel: 'Descubrir',
    bestRateLabel: 'Mejor tarifa garantizada',
    bestRateCta: 'Reservar ahora',
    bestRateNote: 'Aprovecha descuentos para más noches y reservas de última hora',
  },
  en: {
    eyebrow: 'Arequipa, Peru',
    titleLines: ['Art.', 'Nature.', 'Silence.'],
    cta: 'Book Now',
    scrollLabel: 'Discover',
    bestRateLabel: 'Best rate guaranteed',
    bestRateCta: 'Book now',
    bestRateNote: 'Enjoy discounts for longer stays and last-minute bookings',
  },
};
