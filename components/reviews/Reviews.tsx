'use client';

import { useLang } from '@/components/header/LangContext';
import { PLATFORMS, REVIEWS, REVIEWS_SECTION } from './reviews.config';
import styles from './Reviews.module.css';

// ─── Logos SVG por plataforma ─────────────────────────────────────────────────

function PlatformLogo({ id }: { id: string }) {
  switch (id) {
    case 'tripadvisor':
      return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" width="28" height="28">
          <circle cx="16" cy="16" r="16" fill="#34E0A1" />
          <circle cx="10" cy="17" r="4" fill="#fff" />
          <circle cx="22" cy="17" r="4" fill="#fff" />
          <circle cx="10" cy="17" r="2" fill="#00AF87" />
          <circle cx="22" cy="17" r="2" fill="#00AF87" />
          <path d="M7 13c2-3 4.5-4 9-4s7 1 9 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'booking':
      return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" width="28" height="28">
          <rect width="32" height="32" rx="6" fill="#003580" />
          <text x="5" y="23" fontFamily="Georgia, serif" fontWeight="700" fontSize="18" fill="#fff">B.</text>
        </svg>
      );
    case 'expedia':
      return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" width="28" height="28">
          <rect width="32" height="32" rx="6" fill="#FFC72C" />
          <text x="5" y="23" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="16" fill="#00355F">Ex</text>
        </svg>
      );
    case 'airbnb':
      return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" width="28" height="28">
          <rect width="32" height="32" rx="16" fill="#FF5A5F" />
          <path d="M16 7c-1.2 2.8-4.5 7-4.5 9.5a4.5 4.5 0 009 0C20.5 14 17.2 9.8 16 7z" fill="#fff" />
          <circle cx="16" cy="22" r="1.5" fill="#fff" />
        </svg>
      );
    default:
      return null;
  }
}

// ─── Estrellas ────────────────────────────────────────────────────────────────

function Stars({ rating }: { rating: number }) {
  return (
    <div className={styles.stars} aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={styles.star}>
          {i < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function Reviews() {
  const { lang } = useLang();
  const content  = REVIEWS_SECTION;

  return (
    <section id="rankings" className={styles.reviews}
      aria-label={content.eyebrow[lang]}>

      {/* Cabecera */}
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>{content.eyebrow[lang]}</p>
          <h2 className={styles.title}>{content.title[lang]}</h2>
        </div>
      </div>

      {/* Badges de plataformas */}
      <div className={styles.platforms}>
        {PLATFORMS.map((p) => (
          <a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.platformCard}
            aria-label={`${p.name} — ${p.score}${p.maxScore} ${p.scoreLabel[lang]}`}
          >
            <div className={styles.platformTop}>
              <div className={styles.platformLogo}>
                <PlatformLogo id={p.logo} />
              </div>
              <span className={styles.platformName}>{p.name}</span>
            </div>

            <div className={styles.platformScore}>
              <span className={styles.scoreNumber}>{p.score}</span>
              <span className={styles.scoreMax}>{p.maxScore}</span>
            </div>

            <div className={styles.platformMeta}>
              <span className={styles.scoreLabel}>{p.scoreLabel[lang]}</span>
              <span className={styles.reviewCount}>{p.reviewCount[lang]}</span>
            </div>

            <svg className={styles.platformArrow} width="14" height="14"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        ))}
      </div>

      {/* Divisor */}
      <div className={styles.divider}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>
          {lang === 'es' ? 'Opiniones destacadas' : 'Featured reviews'}
        </span>
        <div className={styles.dividerLine} />
      </div>

      {/* Testimonios */}
      <div className={styles.testimonials}>
        {REVIEWS.map((r) => {
          const platform = PLATFORMS.find(p => p.id === r.platform);
          return (
            <article key={r.id} className={styles.testimonialCard}>
              <Stars rating={r.rating} />
              <p className={styles.testimonialText}>{r.text[lang]}</p>
              <div className={styles.testimonialAuthor}>
                <div>
                  <p className={styles.authorName}>{r.author}</p>
                  <p className={styles.authorCountry}>{r.country[lang]}</p>
                </div>
                {platform && (
                  <span className={styles.authorPlatform}>{platform.name}</span>
                )}
              </div>
            </article>
          );
        })}
      </div>

    </section>
  );
}
