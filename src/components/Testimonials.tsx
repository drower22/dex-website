'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    avatar: '/assets/images/avatar1.svg',
    name: 'Ana Lúcia',
    title: 'Dona de Restaurante',
    message: '"Finalmente entendi para onde meu dinheiro estava indo. O Dex salvou minha margem de lucro e me deu clareza total sobre as taxas do iFood. Essencial!"',
  },
  {
    avatar: '/assets/images/avatar2.svg',
    name: 'Carlos Faria',
    title: 'Gerente de Hamburgueria',
    message: '"Horas no Excel? Nunca mais. Recebo o resumo no WhatsApp e pronto. A paz de espírito de ter o controle do negócio na mão não tem preço."',
  },
  {
    avatar: '/assets/images/avatar3.svg',
    name: 'Mariana Costa',
    title: 'Proprietária de Pizzaria',
    message: '"As taxas do iFood eram um completo mistério para mim. O Dex deixou tudo tão claro e fácil de entender que agora me sinto 100% no controle."',
  },
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="testimonials" className="w-full bg-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-purple-dark mb-4">
            Donos de restaurantes <span className="text-brand-yellow-solar">amam o Dex</span>
          </h2>
          <p className="text-lg text-brand-black-charcoal max-w-2xl mx-auto">
            Veja como o Dex está mudando a gestão de negócios como o seu para melhor.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-200/80 flex flex-col transition-shadow duration-300 hover:shadow-md"
              variants={itemVariants}
            >
              <div className="relative w-20 h-20 mx-auto mb-6 bg-brand-purple-light/20 rounded-full flex items-center justify-center border-2 border-brand-purple-light/30">
                <Image src={testimonial.avatar} alt={testimonial.name} width={40} height={40} />
              </div>
              <p className="text-brand-black-charcoal text-base mb-4 flex-grow italic">{testimonial.message}</p>
              <div className="mt-auto">
                <h3 className="font-sora text-lg font-bold text-brand-purple-dark">{testimonial.name}</h3>
                <p className="text-sm text-brand-purple-light">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
