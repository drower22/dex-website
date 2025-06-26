'use client';

import AccordionItem from './AccordionItem';

const faqData = [
  {
    question: 'O Dex é algum tipo de robô?',
    answer: 'Pode me chamar de sua raposa analista! Uso inteligência artificial para processar seus dados, mas com o cuidado e a perspicácia que só o Dex tem.',
  },
  {
    question: 'Meus dados financeiros estão seguros?',
    answer: 'Totalmente. Seus dados são processados e armazenados com segurança. A privacidade e proteção do seu negócio são nossa prioridade máxima.',
  },
  {
    question: 'Preciso instalar algum aplicativo ou programa?',
    answer: 'Não, e essa é a mágica! Tudo acontece pelo WhatsApp. Você envia a planilha do iFood e recebe o resumo financeiro ali mesmo. Simples assim.',
  },
  {
    question: 'Funciona para mais de um loja?',
    answer: 'Sim! O Dex foi feito para donos de multiplas lojas também. Pode enviar as planilhas de quantas lojas precisar, e terá a análise para cada uma.',
  },
];

const Faq = () => {
  return (
    <section id="faq" className="w-full bg-white py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-purple-dark mb-4">
            Ainda tem dúvidas? O <span className="text-brand-yellow-solar">Dex</span> responde.
          </h2>
          <p className="text-lg text-brand-black-charcoal max-w-xl mx-auto">
            Separamos as perguntas mais comuns para te ajudar a dar o próximo passo com segurança.
          </p>
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
