'use client';

import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-gray-lilac">
      <motion.div
        className="w-16 h-16 border-4 border-brand-yellow-solar border-t-brand-purple-dark rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1,
        }}
      />
    </div>
  );
};

export default Loader;
