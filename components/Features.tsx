import React from 'react';
import { Section } from './ui/Section';
import { Bot, FileText, BarChart3, Palette, Zap, Shield, Database, Smile, Languages, Puzzle, BellRing } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="features" className="bg-[#0F0E17]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('feat_title')}</h2>
        <p className="text-text-muted text-lg">{t('feat_subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
        
        {/* Large Card */}
        <motion.div 
          className="md:col-span-2 md:row-span-2 glass-panel rounded-3xl p-8 flex flex-col justify-between hover:border-primary/50 transition-colors group text-start"
          whileHover={{ y: -5 }}
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <Bot size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{t('feat_card_ai_title')}</h3>
            <p className="text-text-muted leading-relaxed">{t('feat_card_ai_desc')}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 opacity-50 group-hover:opacity-100 transition-opacity">
             <div className="h-12 w-24 bg-white/10 rounded-lg flex items-center justify-center text-xs font-mono">OpenAI</div>
             <div className="h-12 w-24 bg-white/10 rounded-lg flex items-center justify-center text-xs font-mono">Gemini</div>
             <div className="h-12 w-24 bg-white/10 rounded-lg flex items-center justify-center text-xs font-mono">OpenRouter</div>
             <div className="h-12 w-24 bg-white/10 rounded-lg flex items-center justify-center text-xs font-mono">Gap GPT</div>
             <div className="h-12 w-24 bg-white/10 rounded-lg border border-dashed border-white/15 flex items-center justify-center text-[11px] font-mono text-text-muted opacity-40">
               Aval AI
             </div>
             <div className="h-12 w-24 bg-white/10 rounded-lg border border-dashed border-white/15 flex items-center justify-center text-[11px] font-mono text-text-muted opacity-40">
               Claude
             </div>
          </div>
        </motion.div>

        {/* Medium Card - KB */}
        <motion.div 
          className="md:col-span-1 md:row-span-2 glass-panel rounded-3xl p-6 flex flex-col hover:border-emerald-500/50 transition-colors text-start"
          whileHover={{ y: -5 }}
        >
          <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <FileText size={20} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{t('feat_card_kb_title')}</h3>
          <p className="text-text-muted text-sm flex-grow">{t('feat_card_kb_desc')}</p>
          <div className="mt-4 h-24 bg-surface rounded-xl border border-white/5 relative overflow-hidden p-2">
            <div className="absolute top-2 right-2 left-2 h-2 bg-emerald-500/20 rounded-full animate-pulse"></div>
            <div className="absolute top-6 right-2 left-8 h-2 bg-white/10 rounded-full"></div>
            <div className="absolute top-10 right-2 left-4 h-2 bg-white/10 rounded-full"></div>
          </div>
        </motion.div>

        {/* Small Cards */}
        <motion.div className="md:col-span-1 glass-panel rounded-3xl p-6 hover:border-amber-500/50 transition-colors text-start" whileHover={{ y: -5 }}>
           <Palette className="text-amber-400 mb-3" />
           <h4 className="font-bold text-white">{t('feat_card_custom_title')}</h4>
           <p className="text-xs text-text-muted mt-1">{t('feat_card_custom_desc')}</p>
        </motion.div>

         <motion.div className="md:col-span-1 glass-panel rounded-3xl p-6 hover:border-purple-500/50 transition-colors text-start" whileHover={{ y: -5 }}>
           <Zap className="text-purple-400 mb-3" />
           <h4 className="font-bold text-white">{t('feat_card_quick_title')}</h4>
           <p className="text-xs text-text-muted mt-1">{t('feat_card_quick_desc')}</p>
        </motion.div>

        {/* Wide Card - Analytics */}
        <motion.div className="md:col-span-2 glass-panel rounded-3xl p-6 flex items-center gap-6 hover:border-pink-500/50 transition-colors text-start" whileHover={{ y: -5 }}>
             <div className="flex-1">
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 mb-4">
                    <BarChart3 size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">{t('feat_card_analytics_title')}</h3>
                <p className="text-text-muted text-sm mt-2">{t('feat_card_analytics_desc')}</p>
             </div>
             <div className="w-32 h-24 flex items-end justify-between gap-1 px-2 pb-2 border-b border-r border-white/10 shrink-0" dir="ltr">
                {[40, 70, 45, 90, 60].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className="w-4 bg-pink-500/50 rounded-t-sm"></div>
                ))}
             </div>
        </motion.div>

        {/* Small Cards Row */}
        <motion.div className="glass-panel rounded-3xl p-6 hover:border-green-500/50 transition-colors text-start" whileHover={{ y: -5 }}>
             <Shield className="text-green-400 mb-3" />
             <h4 className="font-bold text-white">{t('feat_card_security_title')}</h4>
             <p className="text-xs text-text-muted mt-1">{t('feat_card_security_desc')}</p>
        </motion.div>

        <motion.div className="glass-panel rounded-3xl p-6 hover:border-indigo-500/50 transition-colors text-start" whileHover={{ y: -5 }}>
             <Database className="text-indigo-400 mb-3" />
             <h4 className="font-bold text-white">{t('feat_card_woo_title')}</h4>
             <p className="text-xs text-text-muted mt-1">{t('feat_card_woo_desc')}</p>
        </motion.div>

         <motion.div className="glass-panel rounded-3xl p-6 hover:border-yellow-500/50 transition-colors text-start" whileHover={{ y: -5 }}>
             <Smile className="text-yellow-400 mb-3" />
             <h4 className="font-bold text-white">{t('feat_card_satisfaction_title')}</h4>
             <p className="text-xs text-text-muted mt-1">{t('feat_card_satisfaction_desc')}</p>
        </motion.div>

        <motion.div className="glass-panel rounded-3xl p-6 hover:border-cyan-500/50 transition-colors text-start" whileHover={{ y: -5 }}>
             <Languages className="text-cyan-400 mb-3" />
             <h4 className="font-bold text-white">{t('feat_card_lang_title')}</h4>
             <p className="text-xs text-text-muted mt-1">{t('feat_card_lang_desc')}</p>
        </motion.div>

        <motion.div className="glass-panel rounded-3xl p-6 hover:border-orange-500/50 transition-colors text-start" whileHover={{ y: -5 }}>
             <Puzzle className="text-orange-400 mb-3" />
             <h4 className="font-bold text-white">{t('feat_card_integration_title')}</h4>
             <p className="text-xs text-text-muted mt-1">{t('feat_card_integration_desc')}</p>
        </motion.div>

        <motion.div className="glass-panel rounded-3xl p-6 hover:border-rose-500/50 transition-colors text-start" whileHover={{ y: -5 }}>
             <BellRing className="text-rose-400 mb-3" />
             <h4 className="font-bold text-white">{t('feat_card_notifications_title')}</h4>
             <p className="text-xs text-text-muted mt-1">{t('feat_card_notifications_desc')}</p>
        </motion.div>

      </div>
    </Section>
  );
};
