'use client';

import { motion } from 'framer-motion';

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

const PhoneMockup = ({ children, className }: PhoneMockupProps) => (
  <motion.div 
    className="relative mx-auto bg-transparent rounded-[2.5rem] h-[550px] w-[280px] shadow-2xl"
    initial={{ opacity: 0, scale: 0.8, y: 50 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
  >

    <div className={`rounded-[2rem] overflow-hidden w-full h-full ${className}`}>
      {children}
    </div>
  </motion.div>
);

export default PhoneMockup;
