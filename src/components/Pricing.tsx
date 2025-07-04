'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'Resumo diário, direto no WhatsApp',
  'Previsão semanal de repasses',
  'Guarda todo o histórico de vendas',
  'Cálculo para te ajudar a ajustar a precificação',
];

const Pricing = () => {
  const whatsappUrl = `https://wa.me/NUMERO_DO_TELEFONE?text=${encodeURIComponent('Olá! Quero aproveitar a oferta e contratar o plano completo da Dex.')}`;

  return (
    <section id="pricing" className="w-full bg-brand-purple-dark py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.h2 
          className="font-sora text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Um plano simples, <span className="text-brand-yellow-solar">um lucro gigante</span>.
        </motion.h2>
        <motion.p 
          className="text-lg text-brand-gray-lilac max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Sem pegadinhas, sem taxas escondidas. Apenas clareza financeira para o seu restaurante decolar.
        </motion.p>

        <motion.div 
          className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl border-4 border-brand-yellow-solar"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex items-baseline justify-center gap-2 md:gap-3 mb-2">
  <p className="font-sora text-2xl md:text-3xl font-bold text-gray-400 line-through whitespace-nowrap">R$&nbsp;389</p>
  <p className="font-sora text-5xl md:text-6xl font-bold text-brand-purple-dark whitespace-nowrap">
    R$&nbsp;197<span className="text-2xl md:text-3xl font-medium">/mês</span>
  </p>
</div>
          <p className="text-brand-black-charcoal mt-2 mb-8 font-medium">
            Plano completo, sem fidelidade, sem taxa de adesão e sem limites.
          </p>

          <ul className="space-y-4 text-left mb-10 max-w-sm mx-auto">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-brand-yellow-solar text-brand-purple-dark mr-3 flex-shrink-0">
                  <Check size={16} strokeWidth={3} />
                </div>
                <span className="text-brand-black-charcoal">{feature}</span>
              </li>
            ))}
          </ul>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-yellow-solar text-brand-purple-dark font-sora font-bold py-4 px-12 rounded-full text-lg shadow-lg w-full md:w-auto"
            whileHover={{ scale: 1.05, y: -2, filter: 'brightness(1.1)', boxShadow: '0px 10px 30px rgba(255, 204, 0, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Quero testar por 7 dias
          </motion.a>
        </motion.div>
        <p className="text-brand-gray-lilac mt-6 text-sm">Satisfação garantida ou seu dinheiro de volta.</p>
      </div>
    </section>
  );
};

export default Pricing;
