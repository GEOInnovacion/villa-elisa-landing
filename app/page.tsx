import Hero from '@/components/hero/Hero';
import Rooms from '@/components/rooms/Rooms';

export default function Home() {
  return (
    <main>
      <Hero />
      <Rooms />
      <section
        id="adn"
        style={{ minHeight: '100vh', background: 'var(--color-crema)' }}
        aria-label="Nuestro ADN"
      />
    </main>
  );
}
