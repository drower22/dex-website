import type { Metadata } from 'next';
import { Sora, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import PageWrapper from '@/components/PageWrapper';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';
import Script from 'next/script';

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
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KZNB6LSC" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KZNB6LSC');"
          }}
        />
        {/* End Google Tag Manager Script */}
        <Header />
        <PageWrapper>
          {children}
        </PageWrapper>
        <FloatingWhatsApp />
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          \"@context\": \"https://schema.org\",
          \"@type\": \"SiteNavigationElement\",
          \"name\": [\"Início\", \"Como Funciona\", \"Exemplo de Relatório\", \"Benefícios\", \"Depoimentos\", \"Preços\", \"FAQ\", \"Chamada Final\"],
          \"url\": [
            \"https://dex-website-placeholder.vercel.app/#hero\",
            \"https://dex-website-placeholder.vercel.app/#como-funciona\",
            \"https://dex-website-placeholder.vercel.app/#exemplo-relatorio\",
            \"https://dex-website-placeholder.vercel.app/#beneficios\",
            \"https://dex-website-placeholder.vercel.app/#depoimentos\",
            \"https://dex-website-placeholder.vercel.app/#precos\",
            \"https://dex-website-placeholder.vercel.app/#faq\",
            \"https://dex-website-placeholder.vercel.app/#cta-final\"
          ]
        }` }} />
      </body>
    </html>
  );
}
