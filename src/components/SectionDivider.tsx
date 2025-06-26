'use client';

import { motion } from 'framer-motion';

type SectionDividerProps = {
  theme?: 'light' | 'dark';
};

const SectionDivider = ({ theme = 'light' }: SectionDividerProps) => {
  const dividerColorClass = theme === 'light'
    ? 'via-gray-300/70' // For light backgrounds
    : 'via-brand-purple-light/30'; // For dark backgrounds

  return (
    <motion.div
      className="w-full my-8 md:my-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <div className={`h-px w-1/2 max-w-lg mx-auto bg-gradient-to-r from-transparent ${dividerColorClass} to-transparent`}></div>
    </motion.div>
  );
};

export default SectionDivider;
