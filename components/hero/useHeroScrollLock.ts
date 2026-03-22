'use client';

import { useEffect, useRef, useCallback } from 'react';

// ─── Tipos ────────────────────────────────────────────────────────────────────

export type ScrollLockOptions = {
  sectionRef: React.RefObject<HTMLElement | null>;
  onProgress: (t: number) => void;
  nextSectionId?: string;
  /** px de deltaY necesarios para avanzar t en 1.0. Default: 1200 */
  totalPx?: number;
};

// ─── Máquina de estados ───────────────────────────────────────────────────────
//
//   LOCKED ──(t≥1)──► FREE_FORWARD ──(scrollY≈0, delta<0)──► LOCKED (t=1)
//     ▲                                                              │
//     │                                                     retrocede t
//     └──────────────(t≤0)──── LOCKED ◄───────────────────────────────
//
//  LOCKED:        intercepta wheel/touch/keys, anima t en ambas direcciones.
//  FREE_FORWARD:  scroll nativo habilitado (sección siguiente visible).
//                 Si el usuario sube al borde, vuelve a LOCKED con t=1.
//  (No hay FREE_BACKWARD permanente — cuando t=0 simplemente se desbloquea
//   y el usuario puede hacer scroll natural hacia arriba.)

type State = 'LOCKED' | 'FREE_FORWARD';

const DONE_THRESHOLD = 0.998;

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useHeroScrollLock({
  sectionRef,
  onProgress,
  nextSectionId,
  totalPx = 1200,
}: ScrollLockOptions) {

  // ── Estado interno (solo refs — sin re-renders) ────────────────────────────
  const stateRef    = useRef<State>('LOCKED');
  const tRef        = useRef(0);
  const rafRef      = useRef<number>(0);
  const touchStartY = useRef(0);

  // ── Helpers de body lock ───────────────────────────────────────────────────
  const lockBody = useCallback(() => {
    document.documentElement.style.overflow = 'hidden';
  }, []);

  const unlockBody = useCallback(() => {
    document.documentElement.style.overflow = '';
  }, []);

  // ── Aplica t → DOM (sin tocar window.scrollY) ──────────────────────────────
  const applyT = useCallback((raw: number) => {
    const t = Math.max(0, Math.min(1, raw));
    tRef.current = t;
    onProgress(t);
  }, [onProgress]);

  // ── Transición LOCKED → FREE_FORWARD ──────────────────────────────────────
  const goFreeForward = useCallback(() => {
    stateRef.current = 'FREE_FORWARD';
    applyT(1);
    unlockBody();

    const target = nextSectionId
      ? document.getElementById(nextSectionId)
      : (sectionRef.current?.nextElementSibling as HTMLElement | null);

    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [nextSectionId, applyT, sectionRef, unlockBody]);

  // ── Transición FREE_FORWARD → LOCKED (t=1, retrocediendo) ────────────────
  const goLockedFromForward = useCallback(() => {
    stateRef.current = 'LOCKED';
    tRef.current     = 1;
    // Volver al scroll top para que el hero sea visible
    window.scrollTo({ top: 0, behavior: 'instant' });
    lockBody();
    // Disparar primer frame de retroceso para que se vea el cambio
    applyT(1);
  }, [applyT, lockBody]);

  // ── Mueve t mientras está LOCKED ──────────────────────────────────────────
  const moveT = useCallback((deltaPx: number) => {
    // deltaPx > 0 = abajo (avanza), < 0 = arriba (retrocede)
    const step = deltaPx / totalPx;
    const next = tRef.current + step;

    if (next >= DONE_THRESHOLD) {
      // Completó → liberar hacia adelante
      goFreeForward();
      return;
    }

    if (next <= 0) {
      // Llegó al inicio → liberar hacia arriba (scroll nativo)
      applyT(0);
      stateRef.current = 'LOCKED'; // permanece LOCKED en t=0, ready para bajar
      unlockBody();
      // Nota: se mantiene LOCKED en t=0 pero con body desbloqueado.
      // El próximo scroll abajo lo volverá a bloquear automáticamente.
      return;
    }

    applyT(next);
  }, [totalPx, goFreeForward, applyT, unlockBody]);

  // ── Handlers ──────────────────────────────────────────────────────────────
  useEffect(() => {
    // reduced-motion: saltar directo al final sin bloquear nada
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      stateRef.current = 'FREE_FORWARD';
      applyT(1);
      return;
    }

    lockBody();

    const schedule = (fn: () => void) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(fn);
    };

    // ── wheel ──────────────────────────────────────────────────────────────
    const onWheel = (e: WheelEvent) => {
      const delta = normalizeWheel(e);

      if (stateRef.current === 'FREE_FORWARD') {
        // Solo nos importa scroll arriba cuando estamos en scrollY ≈ 0
        if (delta >= 0) return;
        if (window.scrollY > 8) return;
        // El usuario está en el borde superior de la sección siguiente → re-bloquear
        e.preventDefault();
        goLockedFromForward();
        schedule(() => moveT(delta)); // primer step hacia atrás
        return;
      }

      // LOCKED
      // Si t=0 y scroll arriba → desbloquear body y dejar pasar (scroll nativo hacia arriba)
      if (tRef.current <= 0 && delta < 0) {
        unlockBody();
        return;
      }

      // Si t=0 y scroll abajo → re-bloquear y avanzar
      if (tRef.current <= 0 && delta > 0) {
        lockBody();
      }

      e.preventDefault();
      schedule(() => moveT(delta));
    };

    // ── touch ──────────────────────────────────────────────────────────────
    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (stateRef.current !== 'LOCKED') return;
      const currentY = e.touches[0]?.clientY ?? 0;
      const delta    = (touchStartY.current - currentY) * 2.5;
      if (delta === 0) return;
      e.preventDefault();
      touchStartY.current = currentY;
      schedule(() => moveT(delta));
    };

    // ── keyboard ──────────────────────────────────────────────────────────
    const onKeyDown = (e: KeyboardEvent) => {
      if (stateRef.current !== 'LOCKED') return;
      const keyMap: Record<string, number> = {
        ArrowDown:  80,
        ArrowUp:   -80,
        PageDown:   window.innerHeight * 0.8,
        PageUp:    -window.innerHeight * 0.8,
        ' ':        window.innerHeight * 0.8,
        End:        99999,
        Home:      -99999,
      };
      const delta = keyMap[e.key];
      if (delta === undefined) return;
      e.preventDefault();
      moveT(delta);
    };

    document.addEventListener('wheel',      onWheel,      { passive: false });
    document.addEventListener('touchstart', onTouchStart, { passive: true  });
    document.addEventListener('touchmove',  onTouchMove,  { passive: false });
    document.addEventListener('keydown',    onKeyDown);

    return () => {
      document.removeEventListener('wheel',      onWheel);
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchmove',  onTouchMove);
      document.removeEventListener('keydown',    onKeyDown);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      unlockBody();
    };
  }, [moveT, goLockedFromForward, applyT, lockBody, unlockBody]);

  return {
    /** Fuerza completar la animación (ej: click en CTA) */
    forceRelease: goFreeForward,
  };
}

// ─── Normaliza deltaY entre modos de dispositivo ──────────────────────────────
function normalizeWheel(e: WheelEvent): number {
  if (e.deltaMode === 1) return e.deltaY * 16;  // líneas
  if (e.deltaMode === 2) return e.deltaY * window.innerHeight; // páginas
  return e.deltaY; // píxeles (por defecto)
}
