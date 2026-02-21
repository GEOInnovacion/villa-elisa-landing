import Hero from '@/components/hero/Hero';
import Rooms from '@/components/rooms/Rooms';
import Dna from '@/components/dna/Dna';
import Services from '@/components/services/Services';

export default function Home() {
  return (
    <main>
      <Hero />
      <Rooms />
      <Dna />
      <Services />
    </main>
  );
}
