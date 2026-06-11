import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const ProblemSolution: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="problem-solution" className="bg-[#0F0E17]">
      <div className="grid md:grid-cols-2 gap-0 md:gap-8 rounded-3xl overflow-hidden border border-white/10">
        
        {/* Problem */}
        <div className="p-10 md:p-16 bg-red-500/5 relative">
          <div className="absolute top-0 w-1 h-full bg-red-500/50 rtl:right-0 ltr:left-0"></div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                <X size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">{t('prob_title')}</h3>
          </div>
          <ul className="space-y-6">
             <li className="flex items-start gap-4 opacity-80">
                <span className="mt-2 w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                <p className="text-text-light">{t('prob_desc_1')}</p>
             </li>
             <li className="flex items-start gap-4 opacity-80">
                <span className="mt-2 w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                <p className="text-text-light">{t('prob_desc_2')}</p>
             </li>
             <li className="flex items-start gap-4 opacity-80">
                <span className="mt-2 w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                <p className="text-text-light">{t('prob_desc_3')}</p>
             </li>
          </ul>
        </div>

        {/* Solution */}
        <div className="p-10 md:p-16 bg-emerald-500/5 relative">
          <div className="absolute top-0 w-1 h-full bg-emerald-500/50 rtl:right-0 ltr:left-0"></div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Check size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">{t('sol_title')}</h3>
          </div>
           <ul className="space-y-6">
             <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4"
             >
                <div className="p-1 bg-emerald-500/20 rounded-full text-emerald-500 mt-0.5"><Check size={14} /></div>
                <p className="text-lg font-medium text-white">{t('sol_desc_1')}</p>
             </motion.li>
             <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
             >
                <div className="p-1 bg-emerald-500/20 rounded-full text-emerald-500 mt-0.5"><Check size={14} /></div>
                <p className="text-lg font-medium text-white">{t('sol_desc_2')}</p>
             </motion.li>
             <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
             >
                <div className="p-1 bg-emerald-500/20 rounded-full text-emerald-500 mt-0.5"><Check size={14} /></div>
                <p className="text-lg font-medium text-white">{t('sol_desc_3')}</p>
             </motion.li>
          </ul>
        </div>

      </div>
    </Section>
  );
};