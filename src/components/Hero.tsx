'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const whatsappUrl = `https://wa.me/NUMERO_DO_TELEFONE?text=${encodeURIComponent('Olá! Quero um resumo do meu iFood.')}`;

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 md:py-32 overflow-hidden bg-brand-purple-dark">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 to-transparent"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-yellow-solar/20 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-purple-light/20 rounded-full filter blur-3xl opacity-50"></div>
      <div className="max-w-2xl mx-auto">
        {/* Mascote e balão de fala */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
                    <Image 
            src="/assets/images/dex_ifood.png"
            alt="Mascote Dex, uma raposa roxa simpática"
            width={320}
            height={320}
            className="mx-auto mb-6 w-56 h-56 md:w-80 md:h-80 object-contain [filter:drop-shadow(0px_10px_15px_rgba(0,0,0,0.3))]"
            priority
          />
          
        </motion.div>

        {/* Conteúdo principal */}
        <motion.h1 
          className="font-sora text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Seu iFood, finalmente com <span className="text-brand-yellow-solar">Dex</span>.
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-brand-gray-lilac max-w-xl mx-auto mb-8 drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Receba resumos financeiros diários do seu iFood, direto no WhatsApp. Simples, rápido e sem planilhas.
        </motion.p>

        {/* Botão CTA */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-yellow-solar text-brand-purple-dark font-sora font-bold py-4 px-10 rounded-full text-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05, y: -4, filter: 'brightness(1.1)' }}
          whileTap={{ scale: 0.95 }}
        >
          Receber resumo agora
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
