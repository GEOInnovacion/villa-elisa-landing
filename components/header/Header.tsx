import { NAV_ITEMS } from './nav.config';
import HeaderClient from './HeaderClient';
import HeaderMobile from './HeaderMobile';
import NavLink from './NavLink';
import WhatsAppButton from './WhatsAppButton';
import LangToggle from './LangToggle';
import styles from './Header.module.css';

/**
 * Logo del hotel.
 * - Cuando tengas el logo listo, colócalo en /public/logo.png (o .svg)
 *   y cambia HAS_LOGO a true.
 * - Por ahora muestra el nombre tipográfico como fallback.
 */
const HAS_LOGO = true; // ← cambiar a true cuando el logo esté en /public/logo.png

function Logo() {
  if (HAS_LOGO) {
    return (
      <a href="#inicio" className={styles.logo} aria-label="Villa Elisa — Ir al inicio">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="Villa Elisa Hotel Boutique"
          className={styles.logoImage}
          width={160}
          height={48}
        />
      </a>
    );
  }

  return (
    <a href="#inicio" className={styles.logo} aria-label="Villa Elisa — Ir al inicio">
      <span className={styles.logoText}>
        Villa Elisa
        <span className={styles.logoAccent}>Hotel Boutique · Arequipa</span>
      </span>
    </a>
  );
}

export default function Header() {
  return (
    <HeaderClient>
      <header className={styles.header} role="banner">
        <Logo />

        {/* Nav — Desktop (oculta en mobile via CSS) */}
        <nav className={styles.nav} aria-label="Navegación principal">
          {NAV_ITEMS.map(item => (
            <NavLink key={item.id} item={item} />
          ))}
        </nav>

        {/* Acciones — Desktop */}
        <div className={styles.actions}>
          <WhatsAppButton />
          <LangToggle />
          {/* Hamburger + Drawer — Mobile (visible solo en mobile via CSS) */}
          <HeaderMobile />
        </div>

        {/* Línea decorativa dorada */}
        <div className={styles.goldenLine} aria-hidden="true" />
      </header>
    </HeaderClient>
  );
}
