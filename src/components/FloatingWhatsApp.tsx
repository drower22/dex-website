'use client';

import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  const whatsappUrl = `https://wa.me/NUMERO_DO_TELEFONE?text=${encodeURIComponent('Olá! Vi seu site e quero saber mais sobre o Dex.')}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Fale conosco no WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.225 4.485 4.67-1.224zM16.462 14.383c-.273-.136-1.617-.796-1.868-.887-.251-.09-.434-.136-.617.137-.182.274-.706.887-.866 1.064-.16.177-.32.197-.592.061-.273-.136-1.146-.42-2.183-1.346-.805-.717-1.347-1.612-1.516-1.887-.17-.274-.018-.421.118-.557.121-.121.273-.318.409-.495.136-.177.182-.293.273-.495.09-.202.045-.38-.023-.516-.068-.136-.617-1.475-.845-2.015-.227-.54-.454-.466-.617-.474-.16-.007-.343-.007-.525-.007-.182 0-.479.068-.729.343-.25.274-.97.954-.97 2.322s.995 2.698 1.13 2.875c.136.177 1.977 3.02 4.793 4.225.713.306 1.265.489 1.694.625.713.227 1.36.195 1.871.118.571-.085 1.617-.657 1.845-1.294.228-.637.228-1.183.16-1.294-.068-.112-.25-.177-.525-.314z"/>
      </svg>
    </motion.a>
  );
};

export default FloatingWhatsApp;
