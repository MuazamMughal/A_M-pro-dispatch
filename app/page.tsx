import Hero from '@/components/Hero';
import StatsStrip from '@/components/StatsStrip';
import Services from '@/components/Services';
import Equipment from '@/components/Equipment';
import WhyUs from '@/components/WhyUs';
import HowItWorks from '@/components/HowItWorks';
import CarrierOnboarding from '@/components/CarrierOnboarding';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Services />
      <Equipment />
      <WhyUs />
      <HowItWorks />
      <CarrierOnboarding />
      <FAQ />
      <ContactForm />
    </>
  );
}
