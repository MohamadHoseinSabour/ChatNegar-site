import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const Pricing: React.FC = () => {
  const { t, isEn } = useLanguage();

  const pricingFeats = [
    t("price_feat_1"),
    t("price_feat_2"),
    t("price_feat_3"),
    t("price_feat_4"),
    t("price_feat_5"),
  ];

  return (
    <Section id="pricing" className="bg-[#0F0E17]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('price_title')}</h2>
        <p className="text-text-muted">{t('price_subtitle')}</p>
      </div>

      <div className="max-w-md mx-auto relative group">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary via-purple-600 to-secondary opacity-50 blur-3xl rounded-full group-hover:opacity-70 transition-opacity"></div>
        
        <div className="relative glass-panel rounded-3xl p-8 md:p-12 text-center border-t border-white/20">
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-bold mb-6 border border-emerald-500/20">
                {t('price_badge')}
            </div>
            
            <div className="text-5xl md:text-6xl font-bold text-white mb-2" dir="ltr">{t('price_amount')}</div>
            <div className="text-text-muted mb-8">{t('price_period')}</div>

            <ul className="space-y-4 mb-10 text-start">
                {pricingFeats.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-text-light">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                            <Check size={12} strokeWidth={3} />
                        </div>
                        {item}
                    </li>
                ))}
            </ul>

            <Button variant="primary" size="lg" className="w-full justify-center" icon={isEn ? <ArrowRight size={16} /> : <ArrowLeft size={16} />} href="https://www.rtl-theme.com/chatnegar-wordpress-plugin/" target="_blank" rel="noopener noreferrer">
                {t('learn_more')}
            </Button>
            
            <p className="mt-6 text-xs text-text-muted leading-relaxed text-center">
                {t('price_note')}
            </p>
        </div>
      </div>
    </Section>
  );
};
