import type { Lang } from '@/components/header/nav.config';

export type SocialLink = {
  id: string;
  name: string;
  href: string;
  icon: 'instagram' | 'facebook' | 'tripadvisor' | 'tiktok';
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    href: 'https://www.instagram.com/villaelisahotelboutique/',
    icon: 'instagram',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    href: 'https://www.facebook.com/VillaElisaHB/',
    icon: 'facebook',
  },
  {
    id: 'tripadvisor',
    name: 'TripAdvisor',
    href: 'https://www.tripadvisor.com/Hotel_Review-g294313-d2367023-Reviews-Hotel_Boutique_Villa_Elisa-Arequipa_Arequipa_Region.html',
    icon: 'tripadvisor',
  },
];

export const SOCIAL_BAR_LABEL: Record<Lang, string> = {
  es: 'Síguenos',
  en: 'Follow us',
};
