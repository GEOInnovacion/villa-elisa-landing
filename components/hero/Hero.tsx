/**
 * Hero — punto de entrada.
 *
 * Toda la lógica vive en HeroClient (Client Component),
 * que maneja el scroll-driven animation, el idioma
 * y el contenido de forma centralizada.
 *
 * Para cambiar textos / video / WhatsApp → hero.config.ts
 */
import HeroClient from './HeroClient';

export default function Hero() {
  return <HeroClient />;
}
