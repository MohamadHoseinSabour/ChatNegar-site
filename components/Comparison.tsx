import React from 'react';
import { Section } from './ui/Section';
import { Check, X, Zap, Clock, DollarSign, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export const Comparison: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    { name: t("comp_row_response_name"), chatnegar: t("comp_row_response_chatnegar"), others: t("comp_row_response_others"), icon: Clock },
    { name: t("comp_row_uptime_name"), chatnegar: t("comp_row_uptime_chatnegar"), others: t("comp_row_uptime_others"), icon: Zap },
    { name: t("comp_row_pricing_name"), chatnegar: t("comp_row_pricing_chatnegar"), others: t("comp_row_pricing_others"), icon: DollarSign },
    { name: t("comp_row_memory_name"), chatnegar: t("comp_row_memory_chatnegar"), others: t("comp_row_memory_others"), icon: Brain },
    { name: t("comp_row_multilingual_name"), chatnegar: t("comp_row_multilingual_chatnegar"), others: t("comp_row_multilingual_others"), icon: GlobeIcon },
  ];

  return (
    <Section className="bg-[#0F0E17]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('comp_title')}</h2>
        <p className="text-text-muted">{t('comp_subtitle')}</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-4 text-center pb-4 border-b border-white/10 sticky top-20 bg-[#0F0E17]/90 backdrop-blur z-20">
          <div className="text-text-muted font-medium">{t('comp_header_feat')}</div>
          <div className="text-primary font-bold text-sm md:text-lg">{t('comp_header_chatnegar')}</div>
          <div className="text-text-muted font-medium text-xs md:text-base">{t('comp_header_others')}</div>
        </div>

        <div className="space-y-4">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="grid grid-cols-3 gap-4 items-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 text-white font-medium text-xs md:text-base">
                <div className="p-2 rounded-lg bg-white/5 text-text-muted hidden md:block shrink-0">
                    <item.icon size={18} />
                </div>
                {item.name}
              </div>
              
              <div className="text-center flex flex-col items-center justify-center gap-1">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-1">
                    <Check size={16} strokeWidth={3} />
                </div>
                <span className="text-white text-xs md:text-sm font-bold">{item.chatnegar}</span>
              </div>

              <div className="text-center flex flex-col items-center justify-center gap-1 opacity-60 grayscale">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 mb-1">
                    <X size={16} strokeWidth={3} />
                </div>
                <span className="text-text-muted text-xs md:text-sm">{item.others}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const GlobeIcon = ({ size }: { size: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
);