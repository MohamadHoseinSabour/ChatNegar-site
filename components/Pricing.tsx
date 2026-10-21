import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Gift, 
  Zap, 
  Clock 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export const Pricing: React.FC = () => {
  const { t, isEn } = useLanguage();

  const bonuses = [
    {
      title: t('price_feat_1'),
      badge: isEn ? 'Core License' : 'لایسنس اصلی',
      highlight: true,
    },
    {
      title: t('price_feat_2'),
      badge: isEn ? 'Bonus #1 • Value: 850,000 T' : 'بونوس ۱ • ارزش ۸۵۰,۰۰۰ تومان (رایگان)',
      highlight: false,
    },
    {
      title: t('price_feat_3'),
      badge: isEn ? 'Bonus #2 • Value: 450,000 T' : 'بونوس ۲ • ارزش ۴۵۰,۰۰۰ تومان (رایگان)',
      highlight: false,
    },
    {
      title: t('price_feat_4'),
      badge: isEn ? 'Bonus #3 • Value: 600,000 T' : 'بونوس ۳ • ارزش ۶۰۰,۰۰۰ تومان (رایگان)',
      highlight: false,
    },
    {
      title: t('price_feat_5'),
      badge: isEn ? '100% Risk Free' : 'ضمانت ۱۰۰٪ رضایت',
      highlight: false,
    },
  ];

  return (
    <Section id="pricing" className="bg-[#0F0E17] py-20 relative overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-emerald-500/15 via-primary/20 to-secondary/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="text-center mb-14 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 mb-4">
          <Gift size={14} />
          <span>{t('price_badge')}</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4 leading-tight">
          {t('price_title')}
        </h2>
        <p className="text-text-muted text-base md:text-lg leading-relaxed">
          {t('price_subtitle')}
        </p>
      </div>

      {/* Grand Slam Offer Box */}
      <div className="max-w-2xl mx-auto relative group" dir={isEn ? 'ltr' : 'rtl'}>
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-primary to-secondary rounded-[36px] blur-xl opacity-40 group-hover:opacity-70 transition-all duration-700 -z-10" />
        
        <div className="relative glass-panel rounded-[32px] p-8 md:p-12 text-start border border-white/20 bg-[#141328]/95 shadow-2xl backdrop-blur-2xl">
          {/* Header Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-extrabold block mb-1">
                {isEn ? 'Alex Hormozi Grand Slam Offer' : 'پیشنهاد ارزش‌آفرین هرموزی (ارزش واقعی: ۲.۵ میلیون)'}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {isEn ? 'ChatNegar 2.0 Lifetime Pass' : 'پکیج کامل چت‌نگار ۲.۰ مادام‌العمر'}
              </h3>
            </div>
            
            <div className="text-end">
              <div className="text-3xl md:text-4xl font-extrabold text-white font-mono" dir="ltr">
                {t('price_amount')}
              </div>
              <div className="text-xs text-emerald-400 font-medium">
                {t('price_period')}
              </div>
            </div>
          </div>

          {/* Value Stacking List */}
          <div className="mb-8 space-y-3.5">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              {isEn ? 'Everything Included in Your License:' : 'آنچه با خرید دریافت می‌کنید (Value Stack):'}
            </h4>

            {bonuses.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs md:text-sm font-bold text-white leading-snug">
                    {item.title}
                  </div>
                  <span className="text-[10px] text-emerald-400/90 font-medium block mt-0.5">
                    {item.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* High-Converting CTA Button */}
          <div className="space-y-4">
            <a
              href="https://www.rtl-theme.com/chatnegar-wordpress-plugin/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-white text-base md:text-lg font-extrabold shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <span>{t('price_cta')}</span>
              {isEn ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck size={15} />
                <span>گارانتی اصالت و بازگشت وجه راست‌چین</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap size={14} className="text-amber-400" />
                <span>دریافت و دانلود آنی بلافاصله پس از پرداخت</span>
              </div>
            </div>
          </div>

          {/* Transparency Note */}
          <p className="mt-8 text-xs text-text-muted leading-relaxed text-center p-3 rounded-xl bg-white/5 border border-white/5">
            {t('price_note')}
          </p>
        </div>
      </div>
    </Section>
  );
};
