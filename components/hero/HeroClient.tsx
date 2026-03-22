'use client';

import { useRef, useEffect } from 'react';
import { useLang } from '@/components/header/LangContext';
import { HERO_CONTENT, CLOUDBEDS_RESERVATION_HREF, getHeroWhatsappHref } from './hero.config';
import HeroVideo from './HeroVideo';
import styles from './Hero.module.css';

// ─── Íconos ───────────────────────────────────────────────────────────────────

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

// ─── Constantes de padding inicial ───────────────────────────────────────────
// Deben coincidir con los valores del CSS
const PAD_TOP_INIT    = 72;
const PAD_SIDE_INIT   = 44;
const PAD_BOTTOM_INIT = 44;

// ─── Componente ───────────────────────────────────────────────────────────────

export default function HeroClient() {
  const { lang }     = useLang();
  const content      = HERO_CONTENT[lang];
  const whatsappHref = getHeroWhatsappHref(lang);

  const frameRef = useRef<HTMLDivElement>(null);
  const rafRef   = useRef<number>(0);

  // ── Animación de scroll: reduce el padding hasta 0 ─────────────────────────
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onScroll = () => {
      const frame = frameRef.current;
      if (!frame) return;

      // t: 0 → 1 mientras scrollY va de 0 a la mitad de la sección
      const maxScroll = window.innerHeight * 0.6;
      const t = Math.min(1, window.scrollY / maxScroll);

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const padTop    = PAD_TOP_INIT    * (1 - t);
        const padSide   = PAD_SIDE_INIT   * (1 - t);
        const padBottom = PAD_BOTTOM_INIT * (1 - t);
        frame.style.padding = `${padTop}px ${padSide}px ${padBottom}px`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section id="inicio" className={styles.hero} aria-label="Hero — Villa Elisa">

      {/* videoFrame tiene padding CSS inicial; JS lo reduce al scrollear */}
      <div ref={frameRef} className={styles.videoFrame}>
        <div className={styles.videoWrapper}>
          <HeroVideo />
          <div className={styles.videoOverlay} aria-hidden="true" />

          {/* Título centrado */}
          <div className={styles.videoContent}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              {content.eyebrow}
              <span className={styles.eyebrowLine} aria-hidden="true" />
            </p>
            <h1 className={styles.title}>
              {content.titleLines.map((line, i) => (
                <span key={`${lang}-${i}`} className={styles.titleLine}>{line}</span>
              ))}
            </h1>
          </div>

        </div>
      </div>

      {/* Barra "mejor tarifa" — absolute sobre la sección, mitad fuera del video */}
      <div className={styles.bestRate}>
        <div className={styles.bestRateLeft}>
          <span className={styles.bestRateLabel}>
            <span className={styles.bestRateStar}><StarIcon /></span>
            {content.bestRateLabel}
          </span>
          <span className={styles.bestRateNote}>{content.bestRateNote}</span>
        </div>
        <div className={styles.bestRateDivider} aria-hidden="true" />
        <a
          href={CLOUDBEDS_RESERVATION_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bestRateCta}
          aria-label={content.bestRateCta}
        >
          {content.bestRateCta}
          <ArrowRightIcon className={styles.ctaIcon} />
        </a>
      </div>

    </section>
  );
}
