'use client';

import { motion } from 'framer-motion';

const FinalCta = () => {
  const whatsappUrl = `https://wa.me/NUMERO_DO_TELEFONE?text=${encodeURIComponent('Olá! Quero transformar meus dados em lucro com o Dex!')}`;

  return (
    <section className="w-full bg-brand-purple-dark py-20 md:py-32 overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <div className="absolute -top-20 -left-40 w-96 h-96 bg-brand-yellow-solar/10 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-brand-purple-light/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="font-sora text-4xl md:text-5xl font-bold text-white mb-5">Transforme dados em <span className="text-brand-yellow-solar">lucro</span>.</h2>
          <p className="text-lg text-brand-gray-lilac mb-10 max-w-xl mx-auto">Pare de adivinhar. Comece a agir com a certeza que o <span className="font-bold text-white">Dex</span> te dá. <br/>Teste grátis e veja a diferença no seu caixa.</p>
          
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-yellow-solar text-brand-purple-dark font-sora font-bold py-4 px-12 rounded-full text-xl shadow-2xl shadow-brand-yellow-solar/20"
            whileHover={{ scale: 1.08, y: -5, filter: 'brightness(1.1)', boxShadow: '0px 15px 30px rgba(255, 204, 0, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            Começar meu teste grátis
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCta;
