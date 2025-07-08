import Benefits from '@/components/Benefits';
import Faq from '@/components/Faq';
import FinalCta from '@/components/FinalCta';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import ReportExample from '@/components/ReportExample';
import SectionDivider from '@/components/SectionDivider';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main>
      <section id="inicio">
  <Hero />
</section>
      <section id="como-funciona">
  <HowItWorks />
</section>
      <SectionDivider theme="light" />
      <section id="exemplo-relatorio">
  <ReportExample />
</section>
      <SectionDivider theme="dark" />
      <section id="beneficios">
  <Benefits />
</section>
      <SectionDivider theme="light" />
      <section id="depoimentos">
  <Testimonials />
</section>
      <SectionDivider theme="light" />
      <section id="precos">
  <Pricing />
</section>
      <SectionDivider theme="dark" />
      <section id="duvidas-frequentes">
  <Faq />
</section>
      <SectionDivider theme="light" />
      <section id="chamada-final">
  <FinalCta />
</section>
    </main>
  );
}
