'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
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
    case 'hotels':
      return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" width="28" height="28">
          <rect width="32" height="32" rx="6" fill="#D32F2F" />
          <text x="4" y="23" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="14" fill="#fff">H.com</text>
        </svg>
      );
    case 'kayak':
      return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" width="28" height="28">
          <rect width="32" height="32" rx="6" fill="#FF690F" />
          <text x="3" y="23" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="15" fill="#fff">KYK</text>
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
        <span key={i} className={styles.star}>{i < rating ? '★' : '☆'}</span>
      ))}
    </div>
  );
}

// ─── Carrusel de testimonios ──────────────────────────────────────────────────

const AUTOPLAY_MS = 5000;
const VISIBLE = 3; // tarjetas visibles a la vez en desktop

function TestimonialsCarousel({ lang }: { lang: 'es' | 'en' }) {
  const total = REVIEWS.length;
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((i: number) => {
    setActive(((i % total) + total) % total);
  }, [total]);

  useEffect(() => {
    timerRef.current = setTimeout(() => goTo(active + 1), AUTOPLAY_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, goTo]);

  // Índices de las 3 tarjetas visibles
  const indices = Array.from({ length: VISIBLE }, (_, i) => (active + i) % total);

  return (
    <div className={styles.carouselWrapper}>
      {/* Flecha prev */}
      <button className={styles.carouselPrev} onClick={() => goTo(active - 1)} aria-label="Anterior">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Tarjetas */}
      <div className={styles.testimonials}>
        {indices.map((idx, pos) => {
          const r = REVIEWS[idx];
          const platform = PLATFORMS.find(p => p.id === r.platform);
          return (
            <article
              key={`${r.id}-${pos}`}
              className={styles.testimonialCard}
            >
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

      {/* Flecha next */}
      <button className={styles.carouselNext} onClick={() => goTo(active + 1)} aria-label="Siguiente">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dots */}
      <div className={styles.carouselDots}>
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            className={`${styles.carouselDot}${i === active ? ` ${styles.carouselDotActive}` : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir a opinión ${i + 1}`}
          />
        ))}
      </div>
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

      {/* Carrusel de testimonios */}
      <TestimonialsCarousel lang={lang} />

    </section>
  );
}
