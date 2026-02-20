'use client';

import { useRef, useCallback } from 'react';
import { useLang } from '@/components/header/LangContext';
import { HERO_CONTENT, getHeroWhatsappHref } from './hero.config';
import { useHeroScrollLock } from './useHeroScrollLock';
import HeroVideo from './HeroVideo';
import styles from './Hero.module.css';

// ─── Helpers de interpolación ─────────────────────────────────────────────────

function clamp01(t: number) {
  return Math.max(0, Math.min(1, t));
}

function mapRange(t: number, start: number, end: number) {
  return clamp01((t - start) / (end - start));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// ─── Íconos ───────────────────────────────────────────────────────────────────

function ArrowRightIcon() {
  return (
    <svg
      className={styles.ctaIcon}
      width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      className={styles.scrollHintChevron}
      width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

// ─── Fases de la animación (t: 0 → 1) ────────────────────────────────────────

const PHASE_EXPAND_END = 0.88;

const WORD_PHASES = [
  { start: 0.08, end: 0.26 }, // "Arte."
  { start: 0.30, end: 0.50 }, // "Naturaleza."
  { start: 0.55, end: 0.75 }, // "Silencio."
] as const;

const OVERLAY_START    = 0.18;
const OVERLAY_END      = 0.72;
const EYEBROW_START    = 0.78;
const EYEBROW_END      = 0.92;
const SCROLL_HINT_HIDE = 0.10;

// ─── Tamaños del rectángulo ───────────────────────────────────────────────────

function getInitialSize() {
  const vw = window.innerWidth;
  const isMobile = vw <= 768;
  const w = isMobile
    ? Math.min(220, vw * 0.58)
    : Math.min(290, vw * 0.20);
  return { w, h: w * 1.55 };
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function HeroClient() {
  const { lang }     = useLang();
  const content      = HERO_CONTENT[lang];
  const whatsappHref = getHeroWhatsappHref(lang);

  // DOM refs — mutados directamente en onProgress (sin re-render)
  const sectionRef    = useRef<HTMLElement>(null);
  const videoRectRef  = useRef<HTMLDivElement>(null);
  const overlayRef    = useRef<HTMLDivElement>(null);
  const wordRefs      = useRef<(HTMLSpanElement | null)[]>([]);
  const eyebrowRef    = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  // ─── onProgress: aplica t (0–1) a todos los elementos DOM ─────────────────
  const onProgress = useCallback((t: number) => {
    const rect = videoRectRef.current;
    if (!rect) return;

    // ── Expansión del rectángulo ────────────────────────────────────────────
    const tRaw   = mapRange(t, 0, PHASE_EXPAND_END);
    const tEased = easeInOutCubic(tRaw);

    const init   = getInitialSize();
    const targetW = window.innerWidth;
    const targetH = window.innerHeight;

    rect.style.width        = `${lerp(init.w, targetW, tEased)}px`;
    rect.style.height       = `${lerp(init.h, targetH, tEased)}px`;
    rect.style.borderRadius = `${lerp(3, 0, tEased)}px`;
    rect.style.setProperty('--rect-border-opacity', `${lerp(0.6, 0, tEased)}`);

    // ── Overlay ─────────────────────────────────────────────────────────────
    if (overlayRef.current) {
      overlayRef.current.style.opacity = `${mapRange(t, OVERLAY_START, OVERLAY_END)}`;
    }

    // ── Palabras ─────────────────────────────────────────────────────────────
    wordRefs.current.forEach((el, i) => {
      if (!el) return;
      const phase = WORD_PHASES[i];
      if (!phase) return;
      el.classList.toggle(styles.wordVisible, mapRange(t, phase.start, phase.end) > 0.01);
    });

    // ── Eyebrow ──────────────────────────────────────────────────────────────
    if (eyebrowRef.current) {
      const tEye = mapRange(t, EYEBROW_START, EYEBROW_END);
      eyebrowRef.current.style.opacity   = `${tEye}`;
      eyebrowRef.current.style.transform = `translateY(${(1 - tEye) * 8}px)`;
    }

    // ── Scroll hint ───────────────────────────────────────────────────────────
    if (scrollHintRef.current) {
      scrollHintRef.current.style.opacity = `${1 - mapRange(t, 0, SCROLL_HINT_HIDE)}`;
    }
  }, []);

  // ─── Scroll lock — toda la lógica de intercepción vive aquí ───────────────
  const { forceRelease } = useHeroScrollLock({
    sectionRef,
    onProgress,
    nextSectionId: 'habitaciones',
    // totalPx: px de scroll necesarios para completar t 0→1.
    // Más alto = animación más lenta/cinematográfica.
    totalPx: 1400,
  });

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <section
      ref={sectionRef}
      id="inicio"
      className={styles.hero}
      aria-label="Hero — Villa Elisa"
    >
      <div className={styles.sticky}>

        {/* Fondo oscuro detrás del rectángulo */}
        <div className={styles.backdrop} aria-hidden="true" />

        {/* Rectángulo de video — crece con el scroll */}
        <div ref={videoRectRef} className={styles.videoRect}>

          {/* Video o fallback gradiente */}
          <HeroVideo />

          {/* Overlay oscuro dentro del rect */}
          <div
            ref={overlayRef}
            className={styles.videoOverlay}
            style={{ opacity: 0 }}
            aria-hidden="true"
          />

          {/* Palabras del título sobre el video */}
          <div className={styles.wordsLayer} aria-hidden="true">
            {content.titleLines.map((line, i) => (
              <span
                key={`${lang}-${i}`}
                ref={el => { wordRefs.current[i] = el; }}
                className={styles.word}
              >
                {line}
              </span>
            ))}
          </div>

          {/* Eyebrow — aparece al final de la expansión */}
          <div
            ref={eyebrowRef}
            className={styles.videoEyebrow}
            style={{ opacity: 0 }}
          >
            <span className={styles.eyebrowLine} aria-hidden="true" />
            {content.eyebrow}
            <span className={styles.eyebrowLine} aria-hidden="true" />
          </div>

        </div>{/* /videoRect */}

        {/* ── CTA — siempre visible, fuera del rectángulo ────────────────── */}
        <div className={styles.ctaZone}>

          {/* Hint de scroll — desaparece rápido */}
          <div
            ref={scrollHintRef}
            className={styles.scrollHint}
            aria-hidden="true"
          >
            {lang === 'es' ? 'Desliza para descubrir' : 'Scroll to discover'}
            <ChevronDownIcon />
          </div>

          {/* Botón principal — click fuerza el release si aún está animando */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
            aria-label={content.cta}
            onClick={() => forceRelease()}
          >
            {content.cta}
            <ArrowRightIcon />
          </a>

        </div>

        {/* Acento dorado */}
        <div className={styles.goldenAccent} aria-hidden="true" />

      </div>{/* /sticky */}
    </section>
  );
}
