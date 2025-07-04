'use client';

import AccordionItem from './AccordionItem';

const faqData = [
  {
    question: 'O Dex é algum tipo de robô?',
    answer: 'Pode me chamar de sua raposa analista! Uso inteligência artificial para processar seus dados, mas com o cuidado e a perspicácia que só o Dex tem.'
  },
  {
    question: 'O que o Dex mostra no resumo financeiro?',
    answer: 'Mostro tudo que o iFood repassou, descontos cobrados, pedidos cancelados e taxas. Você finalmente entende quanto entrou limpo — e com outras informações consigo até estimar seu lucro.'
  },
  {
    question: 'Meus dados financeiros estão seguros?',
    answer: 'Totalmente. Seus dados são processados e armazenados com segurança. A privacidade e proteção do seu negócio são minha prioridade máxima.'
  },
  {
    question: 'Preciso instalar algum aplicativo ou programa?',
    answer: 'Não, e essa é a mágica! Tudo acontece pelo WhatsApp. Você só precisa me mandar a planilha do iFood por lá e pronto: o resumo chega no mesmo número. Simples assim.'
  },
  {
    question: 'Precisa ser o dono para enviar a planilha?',
    answer: 'Nada disso! Pode ser um funcionário de confiança, usando outro celular. Eu faço a análise do mesmo jeito e envio o resumo direto pro número do dono.'
  },
  {
    question: 'Funciona para mais de uma loja?',
    answer: 'Sim! O Dex foi feito para quem tem uma ou várias lojas. É só mandar as planilhas separadas e eu te entrego o resumo individual de cada unidade.'
  },
  {
    question: 'Tenho que enviar a planilha todo dia?',
    answer: 'Não! Você decide a frequência: pode ser diária, semanal ou quando quiser revisar os números. Eu tô sempre pronto pra analisar.'
  },
  {
    question: 'Posso cancelar quando quiser?',
    answer: 'Claro! Aqui é liberdade total. Sem letras miúdas, sem burocracia. Você pode testar e ficar só se fizer sentido pra você.'
  }
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
