'use client';

import { useLang } from '@/components/header/LangContext';
import { SOCIAL_LINKS, SOCIAL_BAR_LABEL } from './social-bar.config';
import styles from './SocialBar.module.css';

/* ─── SVG Icons ─────────────────────────────────────────────── */

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TripAdvisorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.5 2 2 4.5 2 4.5l2.2 2.6C2.8 8.4 2 10.1 2 12c0 3.3 2.7 6 6 6 1.6 0 3-.6 4-1.6 1 1 2.4 1.6 4 1.6 3.3 0 6-2.7 6-6 0-1.9-.8-3.6-2.2-4.9L22 4.5S17.5 2 12 2zM8 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm8 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zM8 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.15v-3.44a4.85 4.85 0 01-3.59-1.43V6.69h3.59z" />
    </svg>
  );
}

const ICON_MAP = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tripadvisor: TripAdvisorIcon,
  tiktok: TikTokIcon,
} as const;

/* ─── Component ─────────────────────────────────────────────── */

export default function SocialBar() {
  const { lang } = useLang();

  return (
    <nav className={styles.bar} aria-label={SOCIAL_BAR_LABEL[lang]}>
      <span className={styles.label}>{SOCIAL_BAR_LABEL[lang]}</span>

      <span className={styles.divider} aria-hidden="true" />

      <div className={styles.icons}>
        {SOCIAL_LINKS.map((link) => {
          const Icon = ICON_MAP[link.icon];
          return (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label={link.name}
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
