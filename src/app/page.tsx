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
      <Hero />
      <HowItWorks />
      <SectionDivider theme="light" />
      <ReportExample />
      <SectionDivider theme="dark" />
      <Benefits />
      <SectionDivider theme="light" />
      <Testimonials />
      <SectionDivider theme="light" />
      <Pricing />
      <SectionDivider theme="dark" />
      <Faq />
      <SectionDivider theme="light" />
      <FinalCta />
    </main>
  );
}
