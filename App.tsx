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
import { ArrowLeft, ArrowRight } from 'lucide-react';
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
                <p className="text-xs md:text-sm font-medium text-text-muted mb-5 leading-[1.8]">{t('social_trusted')}</p>
                
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

                {/* Core Value Badges - Purple Theme */}
                <div className="flex flex-wrap justify-center gap-3 mb-6 text-xs">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                        {t('social_badge_2')}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                        {t('social_badge_3')}
                    </div>
                </div>

                {/* Tangible Metrics - Purple/Violet */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-14 pt-5 border-t border-white/5 text-sm md:text-base font-medium">
                    <div className="text-purple-300 font-bold">
                      {t('social_stat_1_val')}{' '}
                      <span className="text-text-muted font-normal text-xs md:text-sm">{t('social_stat_1_lbl')}</span>
                    </div>
                    <div className="text-violet-400 font-bold">
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
        
        {/* Interactive WooCommerce Sales Demo */}
        <DemoWidget />

        {/* Live Human Operator & Admin Inbox Showcase */}
        <div id="admin-console">
          <AdminShowcase />
        </div>

        {/* Add ID for scrolling */}
        <div id="integrations">
            <Integrations />
        </div>

        <div id="how-it-works">
          <Timeline />
        </div>

        <div id="testimonials">
          <Testimonials />
        </div>
        
        <DevSection />
        <Pricing />
        <FAQ />

        {/* Final CTA - Purple Theme */}
        <Section className="relative overflow-hidden py-24">
            <div className="absolute inset-4 md:inset-8 rounded-[2.5rem] bg-gradient-to-r from-purple-600/30 via-indigo-600/25 to-violet-500/25 opacity-40 z-0"></div>
            <div className="relative z-10 text-center py-12 px-6 max-w-4xl mx-auto">
                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-white mb-6 backdrop-blur-md">
                     <span>🔥 نسخه ۲.۰.۰ چت‌نگار هم‌اکنون در دسترس است</span>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6 leading-[1.4] md:leading-[1.5]">
                     {t('cta_title')}
                 </h2>
                 <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-[1.8]">
                     {t('cta_subtitle')}
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                     <a
                       href="https://www.rtl-theme.com/chatnegar-wordpress-plugin/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="py-4 px-8 rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-base md:text-lg shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
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
