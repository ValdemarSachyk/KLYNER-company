import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Portfolio from '@/components/Portfolio';
import ServiceAreas from '@/components/ServiceAreas';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <Testimonials />
        <Portfolio />
        <ServiceAreas />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
