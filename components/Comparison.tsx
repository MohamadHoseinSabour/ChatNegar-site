import React from 'react';
import { Section } from './ui/Section';
import { 
  Check, 
  X, 
  DollarSign, 
  Database, 
  ShoppingCart, 
  Bot, 
  Headset, 
  Zap,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export const Comparison: React.FC = () => {
  const { t, isEn } = useLanguage();

  const comparisonRows = [
    {
      name: t('comp_row_pricing_name'),
      chatnegar: t('comp_row_pricing_chatnegar'),
      others: t('comp_row_pricing_others'),
      icon: DollarSign,
      highlight: true,
    },
    {
      name: t('comp_row_data_name'),
      chatnegar: t('comp_row_data_chatnegar'),
      others: t('comp_row_data_others'),
      icon: Database,
      highlight: false,
    },
    {
      name: t('comp_row_woo_name'),
      chatnegar: t('comp_row_woo_chatnegar'),
      others: t('comp_row_woo_others'),
      icon: ShoppingCart,
      highlight: true,
    },
    {
      name: t('comp_row_ai_name'),
      chatnegar: t('comp_row_ai_chatnegar'),
      others: t('comp_row_ai_others'),
      icon: Bot,
      highlight: false,
    },
    {
      name: t('comp_row_handoff_name'),
      chatnegar: t('comp_row_handoff_chatnegar'),
      others: t('comp_row_handoff_others'),
      icon: Headset,
      highlight: true,
    },
    {
      name: t('comp_row_speed_name'),
      chatnegar: t('comp_row_speed_chatnegar'),
      others: t('comp_row_speed_others'),
      icon: Zap,
      highlight: false,
    },
  ];

  return (
    <Section id="comparison" className="bg-[#0F0E17] py-20">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 mb-4">
          <Sparkles size={14} />
          <span>مقایسه شفاف و بدون سانسور</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4 leading-tight">
          {t('comp_title')}
        </h2>
        <p className="text-text-muted text-base md:text-lg leading-relaxed">
          {t('comp_subtitle')}
        </p>
      </div>

      <div className="max-w-5xl mx-auto" dir={isEn ? 'ltr' : 'rtl'}>
        {/* Table Headers */}
        <div className="grid grid-cols-12 gap-3 mb-4 text-center pb-4 border-b border-white/10 sticky top-20 bg-[#0F0E17]/95 backdrop-blur-md z-20 px-4">
          <div className="col-span-4 text-start text-xs md:text-sm font-bold text-slate-400">
            {t('comp_header_feat')}
          </div>
          <div className="col-span-4 p-2 rounded-2xl bg-primary/20 border border-primary/30 text-white font-extrabold text-xs md:text-base shadow-sm">
            {t('comp_header_chatnegar')}
          </div>
          <div className="col-span-4 p-2 rounded-2xl bg-white/5 border border-white/5 text-slate-400 font-semibold text-xs md:text-base">
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
              <div className="col-span-4 flex items-center gap-3 text-white font-bold text-xs md:text-sm text-start">
                <div className="p-2 rounded-xl bg-white/5 text-primary hidden sm:flex shrink-0 border border-white/10">
                  <item.icon size={18} />
                </div>
                <span>{item.name}</span>
              </div>
              
              {/* ChatNegar Value */}
              <div className="col-span-4 text-center p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center justify-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-slate-900 flex items-center justify-center shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-white text-xs md:text-sm font-bold leading-snug">
                  {item.chatnegar}
                </span>
              </div>

              {/* Competitors Value */}
              <div className="col-span-4 text-center p-3 rounded-xl bg-red-500/5 border border-red-500/10 flex flex-col items-center justify-center gap-1.5 opacity-70">
                <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                  <X size={14} strokeWidth={3} />
                </div>
                <span className="text-slate-400 text-xs md:text-sm leading-snug">
                  {item.others}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-primary/10 to-transparent border border-emerald-500/20 text-xs md:text-sm text-slate-300 text-center flex flex-wrap items-center justify-center gap-2">
          <span className="text-emerald-400 font-bold">💡 نتیجه‌گیری اقتصادی:</span>
          <span>با خرید یک‌بار چت‌نگار، در مقایسه با سرویس‌های اشتراکی سالانه بیش از ۲۰ میلیون تومان صرفه‌جویی می‌کنید!</span>
        </div>
      </div>
    </Section>
  );
};
