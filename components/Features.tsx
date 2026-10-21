import React from 'react';
import { Section } from './ui/Section';
import { 
  ShoppingCart, 
  Headset, 
  PhoneCall, 
  Layers, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Database, 
  CheckCircle2, 
  Cpu, 
  Lock, 
  ArrowUpRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export const Features: React.FC = () => {
  const { t, isEn } = useLanguage();

  return (
    <Section id="features" className="bg-[#0F0E17]">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-accent mb-4">
          <Sparkles size={14} />
          <span>نسخه ۲.۰.۰ با معماری جدید</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4 leading-tight">
          {t('feat_title')}
        </h2>
        <p className="text-text-muted text-base md:text-lg leading-relaxed">
          {t('feat_subtitle')}
        </p>
      </div>

      {/* 6 Pillars Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-start" dir={isEn ? 'ltr' : 'rtl'}>
        
        {/* Pillar 1: WooCommerce Interactive Cards (Highlight Card) */}
        <motion.div 
          className="lg:col-span-2 glass-panel rounded-3xl p-8 flex flex-col justify-between hover:border-emerald-500/50 transition-all group relative overflow-hidden"
          whileHover={{ y: -4 }}
        >
          <div className="absolute top-0 end-0 w-80 h-80 bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner">
                <ShoppingCart size={28} />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono">
                Pillar #1 • ووکامرس زنده
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
              {t('feat_card_woo_title')}
            </h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6">
              {t('feat_card_woo_desc')}
            </p>
          </div>

          {/* Interactive Visual Mockup inside Card */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=240&auto=format&fit=crop&q=80" 
              alt="Nike Shoe" 
              className="w-16 h-16 rounded-xl object-cover shrink-0 border border-white/10 shadow"
            />
            <div className="flex-1 text-start">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-white">کفش رانینگ نایک فلاینیت اصل</span>
                <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full font-bold">۲۰٪ تخفیف</span>
              </div>
              <div className="text-xs text-emerald-400 font-bold">
                ۱,۸۵۰,۰۰۰ تومان <span className="line-through text-slate-500 text-[10px] font-normal">۲,۳۰۰,۰۰۰</span>
              </div>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-emerald-500 text-white text-xs font-bold shrink-0 flex items-center gap-1.5 shadow-md shadow-emerald-500/20">
              <CheckCircle2 size={14} />
              <span>افزودن مستقیم به سبد خرید</span>
            </div>
          </div>
        </motion.div>

        {/* Pillar 2: Live Human Operator with AI Silence */}
        <motion.div 
          className="glass-panel rounded-3xl p-8 flex flex-col justify-between hover:border-amber-500/50 transition-all group relative overflow-hidden"
          whileHover={{ y: -4 }}
        >
          <div className="absolute top-0 end-0 w-60 h-60 bg-amber-500/10 blur-[70px] rounded-full pointer-events-none -z-10" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
                <Headset size={28} />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono">
                Pillar #2 • تلفیق هوشمند
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
              {t('feat_card_live_operator_title')}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              {t('feat_card_live_operator_desc')}
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
            <span>به محض ورود اپراتور، AI بلافاصله ساکت می‌شود.</span>
          </div>
        </motion.div>

        {/* Pillar 3: Pre-chat Intake & Iranian Lead Generation */}
        <motion.div 
          className="glass-panel rounded-3xl p-8 flex flex-col justify-between hover:border-indigo-500/50 transition-all group relative overflow-hidden"
          whileHover={{ y: -4 }}
        >
          <div className="absolute top-0 end-0 w-60 h-60 bg-indigo-500/10 blur-[70px] rounded-full pointer-events-none -z-10" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-inner">
                <PhoneCall size={28} />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-mono">
                Pillar #3 • لیدجنریشن
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
              {t('feat_card_lead_gen_title')}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              {t('feat_card_lead_gen_desc')}
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
            <span>الگوی شماره ایرانی: 09xxxxxxxxx</span>
            <span className="text-emerald-400 font-bold">100% Valid</span>
          </div>
        </motion.div>

        {/* Pillar 4: 2-Layer Smart Intent Classification */}
        <motion.div 
          className="glass-panel rounded-3xl p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-all group relative overflow-hidden"
          whileHover={{ y: -4 }}
        >
          <div className="absolute top-0 end-0 w-60 h-60 bg-cyan-500/10 blur-[70px] rounded-full pointer-events-none -z-10" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-inner">
                <Layers size={28} />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono">
                Pillar #4 • صفر مصرف توکن
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
              {t('feat_card_classification_title')}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              {t('feat_card_classification_desc')}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
            <span className="px-2 py-1 rounded-lg bg-cyan-500/15 text-cyan-300">لایه ۱: بدون توکن</span>
            <span className="px-2 py-1 rounded-lg bg-white/10 text-slate-300">لایه ۲: برچسب هوشمند</span>
          </div>
        </motion.div>

        {/* Pillar 5: Hormozi Sales Psychology & 8-Layer Prompt */}
        <motion.div 
          className="glass-panel rounded-3xl p-8 flex flex-col justify-between hover:border-purple-500/50 transition-all group relative overflow-hidden"
          whileHover={{ y: -4 }}
        >
          <div className="absolute top-0 end-0 w-60 h-60 bg-purple-500/10 blur-[70px] rounded-full pointer-events-none -z-10" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-inner">
                <Sparkles size={28} />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 font-mono">
                Pillar #5 • پرامپت ۸ لایه
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              {t('feat_card_hormozi_title')}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              {t('feat_card_hormozi_desc')}
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-300 text-xs flex items-center gap-2">
            <CheckCircle2 size={13} className="shrink-0" />
            <span>پاسخ اختصاصی به اعتراض قیمت و رفع تردید خریدار</span>
          </div>
        </motion.div>

        {/* Pillar 6: Super-Sonic Speed & 100% Lightweight (395KB) */}
        <motion.div 
          className="lg:col-span-3 glass-panel rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-secondary/50 transition-all group relative overflow-hidden"
          whileHover={{ y: -4 }}
        >
          <div className="absolute top-0 start-0 w-80 h-80 bg-secondary/10 blur-[100px] rounded-full pointer-events-none -z-10" />

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary/20 border border-secondary/30 flex items-center justify-center text-accent shadow-inner">
                <Zap size={24} />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary/15 border border-secondary/30 text-accent font-mono">
                Pillar #6 • سبک‌ترین افزونه هوش مصنوعی
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
              {t('feat_card_speed_title')}
            </h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              {t('feat_card_speed_desc')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <div className="text-center p-3.5 rounded-2xl bg-white/5 border border-white/10 min-w-[120px]">
              <div className="text-2xl font-extrabold text-accent font-mono">۳۹۵ KB</div>
              <div className="text-[11px] text-slate-400 mt-0.5">حجم کل افزونه</div>
            </div>
            <div className="text-center p-3.5 rounded-2xl bg-white/5 border border-white/10 min-w-[120px]">
              <div className="text-2xl font-extrabold text-emerald-400 font-mono">&lt; ۰.۵s</div>
              <div className="text-[11px] text-slate-400 mt-0.5">زمان بارگذاری</div>
            </div>
            <div className="text-center p-3.5 rounded-2xl bg-white/5 border border-white/10 min-w-[120px]">
              <div className="text-2xl font-extrabold text-primary font-mono">PHP 8.2</div>
              <div className="text-[11px] text-slate-400 mt-0.5">سازگاری کامل</div>
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
};
