'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const benefits = [
  {
    icon: '/lightbulb.svg',
    title: 'Informações claras',
    description: 'Saiba seu desconto real todos os dias. Sem surpresas, sem achismos.',
  },
  {
    icon: '/tags.svg',
    title: 'Custos na Lupa',
    description: 'Entenda cada taxa e o impacto das entregas grátis no seu bolso.',
  },
  {
    icon: '/clock.svg',
    title: 'Tempo é Dinheiro',
    description: 'Troque horas de planilhas por segundos com o Dex. Foque no seu negócio.',
  },
];

const Benefits = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="benefits" className="w-full bg-brand-purple-dark py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2 
          className="font-sora text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por que seu iFood precisa do <span className="text-brand-yellow-solar">Dex</span>?
        </motion.h2>
        <motion.p 
          className="text-lg text-brand-gray-lilac max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Simplificamos a gestão para você focar no que realmente importa: seus pedidos e seus clientes.
        </motion.p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg text-left border border-gray-200/80"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-purple-light to-brand-purple-dark rounded-xl mb-6 shadow-md">
                <Image src={benefit.icon} alt={benefit.title} width={32} height={32} />
              </div>
              <h3 className="font-sora text-xl font-bold text-brand-black-charcoal mt-4 mb-2">{benefit.title}</h3>
              <p className="text-brand-black-charcoal/80">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
