import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Timeline } from './components/Timeline';
import { DemoWidget } from './components/DemoWidget';
import { AdminShowcase } from './components/AdminShowcase';
import { ProblemSolution } from './components/ProblemSolution';
import { DevSection } from './components/DevSection';
import { FAQ } from './components/FAQ';
import { Pricing } from './components/Pricing';
import { Comparison } from './components/Comparison';
import { Integrations } from './components/Integrations';
import { Testimonials } from './components/Testimonials';
import { Button } from './components/ui/Button';
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Section } from './components/ui/Section';
import { useLanguage } from './components/LanguageContext';

const App: React.FC = () => {
  const { isEn, t } = useLanguage();
  const [konami, setKonami] = useState<string[]>([]);
  const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKonami(prev => {
        const newSeq = [...prev, e.key];
        if (newSeq.length > KONAMI_CODE.length) {
            newSeq.shift();
        }
        if (newSeq.join('') === KONAMI_CODE.join('')) {
            alert(isEn 
              ? "🎉 Konami Code activated! ChatNegar 2.0 Secret Unlocked!" 
              : "🎉 کد کونامی فعال شد! راز چت‌نگار ۲.۰ باز شد!"
            );
        }
        return newSeq;
      });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEn]);

  return (
    <div className={`bg-[#0F0E17] min-h-screen text-text-light ${isEn ? 'font-en' : 'font-sans'} selection:bg-primary/30 selection:text-white`} dir={isEn ? 'ltr' : 'rtl'}>
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Social Proof Bar */}
        <div className="border-y border-white/5 bg-[#0A0914] py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="text-xs md:text-sm font-medium text-text-muted mb-5">{t('social_trusted')}</p>
                
                {/* Theme Compatibility Badges */}
                <div className="flex flex-wrap justify-center items-center gap-2.5 md:gap-4 mb-6">
                    {[
                      { name: isEn ? 'WoodMart' : 'وودمارت (WoodMart)', icon: '🛍️' },
                      { name: isEn ? 'IranKala' : 'ایران‌کالا', icon: '⚡' },
                      { name: isEn ? 'NikiKala' : 'نیکی‌کالا', icon: '🎯' },
                      { name: isEn ? 'Ahoora' : 'اهورا', icon: '🚀' },
                      { name: isEn ? 'Flatsome' : 'فلت‌سام (Flatsome)', icon: '💎' },
                    ].map(theme => (
                        <span key={theme.name} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-primary/40 transition-colors">
                            <span>{theme.icon}</span>
                            <span>{theme.name}</span>
                        </span>
                    ))}
                </div>

                {/* Core Value Badges */}
                <div className="flex flex-wrap justify-center gap-3 mb-6 text-xs">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        {t('social_badge_2')}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                        {t('social_badge_3')}
                    </div>
                </div>

                {/* Tangible Metrics */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-14 pt-5 border-t border-white/5 text-sm md:text-base font-medium">
                    <div className="text-emerald-400 font-bold">
                      {t('social_stat_1_val')}{' '}
                      <span className="text-text-muted font-normal text-xs md:text-sm">{t('social_stat_1_lbl')}</span>
                    </div>
                    <div className="text-emerald-400 font-bold">
                      {t('social_stat_2_val')}{' '}
                      <span className="text-text-muted font-normal text-xs md:text-sm">{t('social_stat_2_lbl')}</span>
                    </div>
                    <div className="text-accent font-bold">
                      {t('social_stat_3_val')}{' '}
                      <span className="text-text-muted font-normal text-xs md:text-sm">{t('social_stat_3_lbl')}</span>
                    </div>
                </div>
            </div>
        </div>

        <ProblemSolution />
        
        <div id="comparison">
            <Comparison />
        </div>
        
        <Features />
        
        {/* Add ID for scrolling */}
        <div id="integrations">
            <Integrations />
        </div>

        <Timeline />
        
        {/* Demo Section Wrapper */}
        <Section id="demo" className="bg-[#0A0914] py-20">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div className={isEn ? "text-left" : "text-right"}>
                     <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-accent mb-4">
                         <Sparkles size={14} />
                         <span>{isEn ? 'Realistic E-commerce Scenario' : 'سناریوی واقعی فروشگاهی'}</span>
                     </div>
                     <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6 leading-tight">
                         {t('demo_title')}
                     </h2>
                     <p className="text-base md:text-lg text-text-muted mb-8 leading-relaxed">
                         {t('demo_desc')}
                     </p>
                     
                     <div className="space-y-4">
                         {[
                             t('demo_feat_1'), 
                             t('demo_feat_2'),
                             t('demo_feat_3'),
                             t('demo_feat_4')
                         ].map((feat, i) => (
                             <div key={i} className="flex items-center gap-3">
                                 <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                                     <CheckCircle2 size={15} />
                                 </div>
                                 <span className="text-text-light font-medium text-sm md:text-base">{feat}</span>
                             </div>
                         ))}
                     </div>
                 </div>
                 <div className="flex justify-center">
                    <DemoWidget />
                 </div>
             </div>
        </Section>

        {/* Dedicated Admin Console Showcase Section */}
        <AdminShowcase />

        <div id="testimonials">
            <Testimonials />
        </div>
        
        <DevSection />
        <Pricing />
        <FAQ />

        {/* Final CTA */}
        <Section className="relative overflow-hidden py-24">
            <div className="absolute inset-4 md:inset-8 rounded-[2.5rem] bg-gradient-to-r from-emerald-500/20 via-primary/20 to-secondary/20 opacity-30 z-0"></div>
            <div className="relative z-10 text-center py-12 px-6 max-w-4xl mx-auto">
                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-white mb-6 backdrop-blur-md">
                     <span>🔥 نسخه ۲.۰.۰ چت‌نگار هم‌اکنون در دسترس است</span>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6 leading-tight">
                     {t('cta_title')}
                 </h2>
                 <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                     {t('cta_subtitle')}
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                     <a
                       href="https://www.rtl-theme.com/chatnegar-wordpress-plugin/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="py-4 px-8 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-white font-extrabold text-base md:text-lg shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                     >
                       <span>{t('hero_cta_primary')}</span>
                       {isEn ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
                     </a>
                 </div>
             </div>
        </Section>
      </main>

      <div className="py-8 text-center text-xs text-text-muted border-t border-white/5">
        {t('footer_copyright')}
      </div>
    </div>
  );
};

export default App;
