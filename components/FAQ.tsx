import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t("faq_1_q"), a: t("faq_1_a") },
    { q: t("faq_2_q"), a: t("faq_2_a") },
    { q: t("faq_3_q"), a: t("faq_3_a") },
    { q: t("faq_4_q"), a: t("faq_4_a") },
  ];

  return (
    <Section id="faq" className="bg-[#0F0E17]">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">{t('faq_title')}</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-surface border border-white/5 rounded-xl overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-6 text-start hover:bg-white/5 transition-colors cursor-pointer"
            >
              <span className="font-medium text-white">{faq.q}</span>
              <ChevronDown className={`transform transition-transform shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} size={20} />
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <div className="px-6 pb-6 text-text-muted leading-relaxed border-t border-white/5 pt-4 text-start">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
};