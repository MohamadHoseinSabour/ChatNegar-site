import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, noPadding = false }) => {
  return (
    <section 
      id={id} 
      className={`relative w-full ${!noPadding ? 'py-20 lg:py-32' : ''} ${className} overflow-hidden`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl"
      >
        {children}
      </motion.div>
    </section>
  );
};