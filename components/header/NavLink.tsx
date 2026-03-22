'use client';

import { useLang } from './LangContext';
import type { NavItem } from './nav.config';
import styles from './Header.module.css';

type NavLinkProps = {
  item: NavItem;
  onClick?: () => void;
};

export default function NavLink({ item, onClick }: NavLinkProps) {
  const { lang } = useLang();

  return (
    <a
      href={item.href}
      className={styles.navLink}
      onClick={onClick}
    >
      {item.label[lang]}
    </a>
  );
}
