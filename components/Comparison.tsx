import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles, DollarSign, Database, Brain, ShoppingBag, Zap } from 'lucide-react';
import { Section } from './ui/Section';
import { useLanguage } from './LanguageContext';

export const Comparison: React.FC = () => {
  const { isEn, t } = useLanguage();

  const comparisonRows = [
    {
      name: t('comp_row_1_name'),
      chatnegar: t('comp_row_1_cn'),
      others: t('comp_row_1_oth'),
      icon: DollarSign,
      highlight: true,
    },
    {
      name: t('comp_row_2_name'),
      chatnegar: t('comp_row_2_cn'),
      others: t('comp_row_2_oth'),
      icon: Database,
      highlight: true,
    },
    {
      name: t('comp_row_3_name'),
      chatnegar: t('comp_row_3_cn'),
      others: t('comp_row_3_oth'),
      icon: ShoppingBag,
      highlight: true,
    },
    {
      name: t('comp_row_4_name'),
      chatnegar: t('comp_row_4_cn'),
      others: t('comp_row_4_oth'),
      icon: Brain,
      highlight: false,
    },
    {
      name: t('comp_row_5_name'),
      chatnegar: t('comp_row_5_cn'),
      others: t('comp_row_5_oth'),
      icon: Zap,
      highlight: false,
    },
  ];

  return (
    <Section id="comparison" className="bg-[#0F0E17] py-20">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-xs font-bold text-purple-300 mb-4">
          <Sparkles size={14} />
          <span>مقایسه شفاف و بدون سانسور</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6 leading-[1.8] md:leading-[1.9]">
          {t('comp_title')}
        </h2>
        <p className="text-text-muted text-base md:text-lg leading-[2.0]">
          {t('comp_subtitle')}
        </p>
      </div>

      <div className="max-w-5xl mx-auto" dir={isEn ? 'ltr' : 'rtl'}>
        {/* Table Headers */}
        <div className="grid grid-cols-12 gap-3 mb-4 text-center pb-4 border-b border-white/10 sticky top-20 bg-[#0F0E17]/95 backdrop-blur-md z-20 px-4">
          <div className="col-span-4 text-start text-xs md:text-sm font-bold text-slate-400">
            {t('comp_header_feat')}
          </div>
          <div className="col-span-4 p-2.5 rounded-2xl bg-primary/20 border border-primary/30 text-white font-extrabold text-xs md:text-base shadow-sm">
            {t('comp_header_chatnegar')}
          </div>
          <div className="col-span-4 p-2.5 rounded-2xl bg-white/5 border border-white/5 text-slate-400 font-semibold text-xs md:text-base">
            {t('comp_header_others')}
          </div>
        </div>

        {/* Rows */}
        <div className="space-y-3.5">
          {comparisonRows.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`grid grid-cols-12 gap-3 items-center p-4 md:p-5 rounded-2xl border transition-all ${
                item.highlight 
                  ? 'bg-white/[0.04] border-primary/25 hover:border-primary/50' 
                  : 'bg-white/[0.02] border-white/5 hover:border-white/15'
              }`}
            >
              {/* Feature Title */}
              <div className="col-span-4 flex items-center gap-3 text-white font-bold text-xs md:text-sm text-start leading-[1.8]">
                <div className="p-2 rounded-xl bg-white/5 text-primary hidden sm:flex shrink-0 border border-white/10">
                  <item.icon size={18} />
                </div>
                <span>{item.name}</span>
              </div>
              
              {/* ChatNegar Value - Royal Purple */}
              <div className="col-span-4 text-center p-3 rounded-xl bg-purple-600/15 border border-purple-500/30 flex flex-col items-center justify-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-white text-xs md:text-sm font-bold leading-[1.8]">
                  {item.chatnegar}
                </span>
              </div>

              {/* Competitors Value */}
              <div className="col-span-4 text-center p-3 rounded-xl bg-red-500/5 border border-red-500/10 flex flex-col items-center justify-center gap-1.5 opacity-70">
                <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                  <X size={14} strokeWidth={3} />
                </div>
                <span className="text-slate-400 text-xs md:text-sm leading-[1.8]">
                  {item.others}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-purple-600/15 via-primary/15 to-transparent border border-purple-500/30 text-xs md:text-sm text-slate-300 text-center flex flex-wrap items-center justify-center gap-2 leading-[1.8]">
          <span className="text-purple-300 font-bold">💡 نتیجه‌گیری اقتصادی:</span>
          <span>با خرید یک‌بار چت‌نگار، در مقایسه با سرویس‌های اشتراکی سالانه بیش از ۲۰ میلیون تومان صرفه‌جویی می‌کنید!</span>
        </div>
      </div>
    </Section>
  );
};
