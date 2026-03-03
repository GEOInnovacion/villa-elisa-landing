import type { Lang } from '@/components/header/nav.config';

// ─────────────────────────────────────────────
// Media — reemplazar cuando tengas los archivos
// ─────────────────────────────────────────────
// Dejar vacío ('') para usar el fallback de gradiente animado
// IMPORTANTE: los browsers solo soportan .mp4 (H.264) y .webm (VP9).
// Si tienes un .mkv, conviértelo con: ffmpeg -i video.mkv -c:v libx264 -crf 23 -c:a aac villa-elisa-hero.mp4
export const HERO_VIDEO_SRC = '/videos/villa-elisa-hero.mp4';
export const HERO_VIDEO_WEBM_SRC = '';   // ej: '/videos/villa-elisa-hero.webm'  (mejor compresión)
export const HERO_VIDEO_POSTER = '';     // ej: '/images/hero-poster.jpg'

// ─────────────────────────────────────────────
// CTA — Cloudbeds (barra "mejor tarifa")
// ─────────────────────────────────────────────
export const CLOUDBEDS_RESERVATION_HREF = 'https://us2.cloudbeds.com/es/reservation/N9kuZu?currency=usd';

// ─────────────────────────────────────────────
// CTA — WhatsApp (mismo número que el header)
// ─────────────────────────────────────────────
const WA_NUMBER = '51999999999'; // ← reemplazar con el número real
const WA_MESSAGES: Record<Lang, string> = {
  es: 'Hola, me gustaría reservar una habitación en Villa Elisa',
  en: 'Hello, I would like to book a room at Villa Elisa',
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
