import type { Metadata } from 'next';
import { Sora, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import PageWrapper from '@/components/PageWrapper';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  icons: {
    icon: '/assets/images/dex_ifood.png',
  },
  title: 'Dex | Seu Resumo Financeiro Inteligente no WhatsApp',
  description: 'Receba o resumo diário do seu restaurante (iFood) direto no WhatsApp. Saiba seu lucro, controle taxas e evite prejuízos. Teste grátis!',
  openGraph: {
    title: 'Dex | Seu Resumo Financeiro Inteligente no WhatsApp',
    description: 'Menos planilhas, mais lucro. Receba resumos diários sobre o desempenho do seu restaurante no iFood diretamente no seu WhatsApp.',
    url: 'https://dex-website-placeholder.vercel.app/',
    siteName: 'Dex',
    images: [
      {
        url: 'https://dex-website-placeholder.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dex - Resumos financeiros inteligentes para seu restaurante',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dex | Seu Resumo Financeiro Inteligente no WhatsApp',
    description: 'Menos planilhas, mais lucro. Receba resumos diários sobre o desempenho do seu restaurante no iFood diretamente no seu WhatsApp.',
    images: ['https://dex-website-placeholder.vercel.app/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <Header />
        <PageWrapper>
          {children}
        </PageWrapper>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
