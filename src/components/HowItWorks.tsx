'use client';

import { motion } from 'framer-motion';
import { Upload, BrainCircuit, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: '1. Envie seu relatório iFood',
    description: 'Exporte o relatório de vendas do seu painel iFood e envie para o nosso WhatsApp. É simples e rápido.',
  },
  {
    icon: BrainCircuit,
    title: '2. Deixe a mágica acontecer',
    description: 'Nossa inteligência processa tudo: vendas, taxas, promoções e cancelamentos em segundos.',
  },
  {
    icon: BarChart3,
    title: '3. Receba seu lucro real',
    description: 'Você recebe um resumo direto ao ponto, com seu lucro líquido e dicas para lucrar ainda mais.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full bg-gradient-to-b from-[#5f2a8a] to-brand-purple-dark py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-white mb-4">
            Como o <span className="text-brand-yellow-solar">Dex</span> transforma dados em lucro?
          </h2>
          <p className="text-lg text-brand-gray-lilac max-w-2xl mx-auto">
            Em apenas três passos, você sai de uma planilha complexa para uma decisão inteligente.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 items-center">
          <motion.div 
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start gap-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-brand-purple-light/20 rounded-full shadow-lg">
                    <Icon className="w-6 h-6 text-brand-yellow-solar" />
                  </div>
                  <div>
                    <h3 className="font-sora text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-brand-gray-lilac text-base">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
