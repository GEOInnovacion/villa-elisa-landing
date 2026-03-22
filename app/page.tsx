import Hero from '@/components/hero/Hero';
import Rooms from '@/components/rooms/Rooms';
import Dna from '@/components/dna/Dna';
import Services from '@/components/services/Services';
import Reviews from '@/components/reviews/Reviews';
import Contact from '@/components/contact/Contact';
import SocialBar from '@/components/social-bar/SocialBar';

export default function Home() {
  return (
    <main>
      <Hero />
      <Rooms />
      <Dna />
      <Services />
      <Reviews />
      <Contact />
      <SocialBar />
    </main>
  );
}
