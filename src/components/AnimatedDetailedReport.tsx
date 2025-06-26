'use client';

import { motion } from 'framer-motion';

const reportText = `📊 RESUMO DE VENDAS - 07/06/2025

💰 Faturamento Total: R$ 10.417,01
📦 Número de Pedidos: 177
🎟️ Ticket Médio: R$ 58,85

🛒 Pedidos por Canal:

IFOOD: 177 pedidos

💳 Vendas por Forma de Pagamento:

Pix (Loja): R$ 3.780,00

Crédito (Loja): R$ 3.219,09

Débito (Loja): R$ 1.126,10

Outros: R$ 2.291,82

🔍 CUSTOS IFOOD (TUDO QUE VOCÊ PAGOU)

✔ Taxa Completa (14,45% = R$1.505,12)

Inclui:
• Comissão por venda
• Taxa de operação
• Seus descontos (promoções que você bancou)
• Taxa de pagamento online
👉 *Sua taxa está na média do mercado (14-15%)*

🎁 Promoções (BÔNUS DO IFOOD)

Descontos que ELES pagaram: R$ 796,08

Seus descontos: R$ 0,00
👉 Você está aproveitando bem os benefícios!

🚚 Entregas Grátis

Pedidos: 85

Custo por entrega: ?
👉 Precisamos configurar seu custo real pra calcular melhor!

💡 Dica do Dia:
"Frete mínimo de R$3 em 30% das entregas = +R$76 no seu bolso hoje!"

📆 Na segunda tem:

Análise semanal completa

Sugestões personalizadas`;

const AnimatedDetailedReport = () => {
  const reportLines = reportText.split('\n');
  const scrollDuration = reportLines.length * 0.6;

  return (
    // This outer div is the chat screen background
    <div className="h-full w-full p-3 bg-[#E5DDD5]">
      {/* The message bubble */}
      <div className="relative bg-white rounded-xl shadow-md p-3 max-w-xs">
        {/* This div clips the scrolling content inside the bubble */}
        <div className="overflow-hidden h-full">
          <motion.div
            animate={{ y: [0, -550] }} // Adjust based on content height
            transition={{
              duration: scrollDuration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
              delay: 2,
              repeatDelay: 2,
            }}
          >
            <div className="font-sans text-sm text-brand-black-charcoal whitespace-pre-wrap">
              {reportLines.map((line, index) => (
                <div key={index}>{line || '\u00A0'}</div>
              ))}
            </div>
            <div className="text-right text-xs text-gray-400 mt-2">
              18:42 <span className="text-blue-500">✓✓</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedDetailedReport;
