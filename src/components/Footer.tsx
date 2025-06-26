import Link from 'next/link';

const SocialIcon = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-yellow-solar transition-colors">
    {children}
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-brand-purple-dark text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h2 className="font-sora text-3xl font-bold mb-2">Dex</h2>
            <p className="text-gray-400 text-sm">Seu iFood, finalmente com inteligência.</p>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h3 className="font-bold tracking-wider uppercase mb-4">Navegação</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">Como Funciona</Link>
              <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">Preços</Link>
              <Link href="#faq" className="text-gray-400 hover:text-white transition-colors">Dúvidas</Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="md:col-span-1">
            <h3 className="font-bold tracking-wider uppercase mb-4">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</Link>
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-1">
            <h3 className="font-bold tracking-wider uppercase mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c-4.068 0-4.555.018-6.15.09c-1.595.072-2.685.345-3.638.718c-.975.38-1.755 1.158-2.135 2.135c-.373.953-.645 2.043-.718 3.638C.018 7.745 0 8.232 0 12.315s.018 4.57.09 6.15c.072 1.595.345 2.685.718 3.638c.38 1.015 1.16 1.795 2.135 2.135c.953.373 2.043.645 3.638.718c1.595.072 2.082.09 6.15.09s4.555-.018 6.15-.09c1.595-.072 2.685-.345 3.638-.718c.975-.38 1.755-1.158 2.135-2.135c.373-.953.645-2.043.718-3.638c.072-1.58.09-2.082.09-6.15s-.018-4.57-.09-6.15c-.072-1.595-.345-2.685-.718-3.638c-.38-.975-1.16-1.755-2.135-2.135C21.03 2.345 19.94 2.072 18.345 2.09C16.885 2.018 16.385 2 12.315 2zM12 7.188c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zm0 8.125c-1.72 0-3.125-1.405-3.125-3.125S10.28 9.062 12 9.062s3.125 1.405 3.125 3.125S13.72 15.312 12 15.312zm5.438-8.219c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25s1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25z" clipRule="evenodd" /></svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z" /></svg>
              </SocialIcon>
              <SocialIcon href="#">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Dex. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
