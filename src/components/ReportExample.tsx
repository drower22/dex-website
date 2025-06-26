'use client';

import { motion } from 'framer-motion';
import AnimatedDetailedReport from './AnimatedDetailedReport';
import Image from 'next/image';
import PhoneMockup from './PhoneMockup';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const ReportExample = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const ChatContent = () => (
    <div className="flex h-full flex-col bg-brand-whatsapp-bg">
      {/* Header with Mascot */}
      <div className="flex flex-shrink-0 items-center p-2 bg-brand-purple-dark text-white shadow-md">
        <Image src="/assets/images/dex_ifood.png" alt="Dex Mascot" width={40} height={40} className="rounded-full bg-brand-purple-light p-0.5" />
        <div className="ml-3">
          <h3 className="font-bold">Dex</h3>
          <p className="text-xs opacity-80">online</p>
        </div>
      </div>

      {/* Chat content */}
      <div className="flex-grow overflow-hidden">
        <AnimatedDetailedReport />
      </div>
    </div>
  );

  return (
    <section id="report-example" className="w-full bg-gradient-to-br from-brand-gray-lilac/20 via-white to-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-16">
        
        {/* Coluna do Mockup */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {isDesktop ? (
            <PhoneMockup>
              <ChatContent />
            </PhoneMockup>
          ) : (
            <div className="w-full max-w-sm mx-auto">
              <div className="rounded-2xl shadow-2xl overflow-hidden h-[550px]">
                <ChatContent />
              </div>
            </div>
          )}
        </motion.div>

        {/* Coluna de Texto */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-purple-dark mb-4">
            Seu lucro, <span className="text-brand-yellow-solar">sem enrolação</span>.
          </h2>
          <p className="text-lg text-brand-black-charcoal max-w-lg mx-auto md:mx-0">
            O <span className="font-bold text-brand-purple-dark">Dex</span> entrega o resumo financeiro que você entende de verdade. Veja um exemplo real de como sua mensagem chegará no WhatsApp.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ReportExample;
