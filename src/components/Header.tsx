'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Como Funciona', href: '#como-funciona' },
  { name: 'Preços', href: '#precos' },
  { name: 'Dúvidas Frequentes', href: '#duvidas-frequentes' },
  { name: 'Chamada Final', href: '#chamada-final' },
  { name: 'Contato', href: '#footer' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/NUMERO_DO_TELEFONE?text=${encodeURIComponent('Olá! Quero testar o Dex!')}`;

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className={`font-sora text-3xl font-bold ${isScrolled ? 'text-brand-purple-dark' : 'text-white'}`}>Dex</h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={`font-medium transition-colors ${isScrolled ? 'text-brand-black-charcoal hover:text-brand-purple-dark' : 'text-white hover:text-brand-yellow-solar'}`}>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <motion.a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-brand-yellow-solar text-brand-purple-dark font-bold py-2 px-5 rounded-lg text-sm"
              whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Começar Agora
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md">
              <Image src={isOpen ? "/x.svg" : "/menu.svg"} alt="Menu" width={28} height={28} className={`${isScrolled || isOpen ? '' : 'invert'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white fixed top-0 left-0 w-full h-screen"
          >
            <div className="absolute top-5 right-5">
              <button onClick={() => setIsOpen(false)} className="p-2">
                <Image src="/assets/icons/x.svg" alt="Fechar Menu" width={28} height={28} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <nav className="flex flex-col items-center space-y-8">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="font-sora text-2xl font-medium text-brand-purple-dark hover:text-brand-yellow-solar transition-colors">
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-12">
                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-yellow-solar text-brand-purple-dark font-bold py-4 px-8 rounded-full hover:brightness-110 transition-all text-lg">
                  Começar Agora
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
