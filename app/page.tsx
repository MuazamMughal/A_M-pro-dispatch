import Hero from '@/components/Hero';
import StatsStrip from '@/components/StatsStrip';
import Services from '@/components/Services';
import Equipment from '@/components/Equipment';
import Calculator from '@/components/Calculator';
import WhyUs from '@/components/WhyUs';
import CarrierOnboarding from '@/components/CarrierOnboarding';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Services />
      <Equipment />
      <Calculator />
      <WhyUs />
      <CarrierOnboarding />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </>
  );
}
