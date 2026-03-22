'use client';

import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function HeaderScrollWrapper({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className={`${styles.headerWrapper} ${scrolled ? styles.scrolled : styles.atTop}`}>
      {children}
    </div>
  );
}
