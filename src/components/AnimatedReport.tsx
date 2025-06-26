'use client';

import { motion } from 'framer-motion';

// Using a template literal for the report text as provided
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
• Seus descontos
• Taxa de pagamento online
👉 *Sua taxa está na média*

🎁 Promoções (BÔNUS DO IFOOD)
Descontos que ELES pagaram: R$ 796,08
Seus descontos: R$ 0,00
👉 Você está aproveitando!

🚚 Entregas Grátis
Pedidos: 85
Custo por entrega: ?
👉 Configure seu custo real!

💡 Dica do Dia:
"Frete mínimo de R$3 em 30% das entregas = +R$76 no seu bolso hoje!"

📆 Na segunda tem:
Análise semanal completa
Sugestões personalizadas`;

const AnimatedReport = () => {
  const lines = reportText.split('\n');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } },
  };

  return (
    <motion.div
      className="font-mono text-xs text-white p-4 bg-transparent whitespace-pre-wrap leading-relaxed"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {lines.map((line, index) => (
        <motion.p key={index} variants={lineVariants}>
          {line || '\u00A0'} {/* Render non-breaking space for empty lines */}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default AnimatedReport;
