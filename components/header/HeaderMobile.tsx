'use client';

import { useState, useEffect } from 'react';
import { NAV_ITEMS } from './nav.config';
import { useLang } from './LangContext';
import WhatsAppButton from './WhatsAppButton';
import LangToggle from './LangToggle';
import styles from './Header.module.css';

export default function HeaderMobile() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);

  // Bloquear scroll del body cuando el drawer está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        className={`${styles.hamburger} ${open ? styles.open : ''}`}
        onClick={() => setOpen(prev => !prev)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
      >
        <span className={styles.hamburgerLine} />
        <span className={styles.hamburgerLine} />
        <span className={styles.hamburgerLine} />
      </button>

      {/* Overlay */}
      <div
        className={`${styles.drawerOverlay} ${open ? styles.open : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Drawer */}
      <nav
        className={`${styles.drawer} ${open ? styles.open : ''}`}
        aria-label="Menú de navegación móvil"
      >
        {NAV_ITEMS.map(item => (
          <a
            key={item.id}
            href={item.href}
            className={styles.drawerNavLink}
            onClick={close}
          >
            {item.label[lang]}
          </a>
        ))}

        <div className={styles.drawerActions}>
          <div className={styles.drawerWhatsapp}>
            <WhatsAppButton />
          </div>
          <LangToggle />
        </div>
      </nav>
    </>
  );
}
