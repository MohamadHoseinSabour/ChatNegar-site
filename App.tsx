import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Timeline } from './components/Timeline';
import { DemoWidget } from './components/DemoWidget';
import { ProblemSolution } from './components/ProblemSolution';
import { DevSection } from './components/DevSection';
import { FAQ } from './components/FAQ';
import { Pricing } from './components/Pricing';
import { Comparison } from './components/Comparison'; // Imported
import { Integrations } from './components/Integrations'; // Imported
import { Testimonials } from './components/Testimonials'; // Imported
import { Button } from './components/ui/Button';
import { ArrowLeft } from 'lucide-react';
import { Section } from './components/ui/Section';

const App: React.FC = () => {
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
            alert("🎉 کد کونامی فعال شد! شما راز مخفی را پیدا کردید!");
            // Ideally trigger confetti here
        }
        return newSeq;
      });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bg-[#0F0E17] min-h-screen text-text-light font-sans selection:bg-primary/30 selection:text-white" dir="rtl">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Social Proof Bar */}
        <div className="border-y border-white/5 bg-[#0A0914] py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm text-text-muted mb-6">مورد اعتماد بیش از ۵۰۰ سایت وردپرسی در سراسر جهان</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder Logos */}
                    {['TechCorp', 'EduLearn', 'Shopifyy', 'ServicePro', 'AgencyX'].map(name => (
                        <span key={name} className="text-xl font-bold font-display cursor-default">{name}</span>
                    ))}
                </div>
                <div className="flex justify-center gap-8 mt-8 text-sm md:text-base font-medium">
                    <div className="text-emerald-400">۵۰,۰۰۰+ <span className="text-text-muted font-normal">مکالمه</span></div>
                    <div className="text-emerald-400">۹۹.۲٪ <span className="text-text-muted font-normal">آپتایم</span></div>
                    <div className="text-accent">۴.۹/۵ <span className="text-text-muted font-normal">امتیاز</span></div>
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
        <Section id="demo" className="bg-[#0A0914]">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div>
                     <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">چت‌نگار را در عمل ببینید</h2>
                     <p className="text-lg text-text-muted mb-8">رابط کاربری واقعی چت را تجربه کنید که مشتریان شما عاشق آن خواهند شد. از فرمت‌بندی متن غنی، پاسخ‌های سریع پشتیبانی می‌کند و حسی کاملاً طبیعی دارد.</p>
                     
                     <div className="space-y-4">
                         {[
                             "هدر گرادینت قابل شخصی‌سازی", 
                             "انیمیشن افکت تایپ",
                             "پاسخ‌های سریع هوشمند",
                             "شمارش کاراکتر زنده"
                         ].map((feat, i) => (
                             <div key={i} className="flex items-center gap-3">
                                 <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                 <span className="text-text-light">{feat}</span>
                             </div>
                         ))}
                     </div>
                 </div>
                 <div className="flex justify-center">
                    <DemoWidget />
                 </div>
             </div>
        </Section>

        <div id="testimonials">
            <Testimonials />
        </div>
        
        <DevSection />
        <Pricing />
        <FAQ />

        {/* Final CTA */}
        <Section className="relative overflow-hidden">
            <div className="absolute inset-4 md:inset-8 rounded-[2.5rem] bg-primary-gradient opacity-20 z-0"></div>
            <div className="relative z-10 text-center py-16 px-6">
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">آماده تحول در پشتیبانی خود هستید؟</h2>
                 <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">به صدها سایت وردپرسی بپیوندید که از پشتیبانی هوش مصنوعی استفاده می‌کنند. کاملاً رایگان.</p>
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                     <Button size="lg" variant="primary" icon={<ArrowLeft size={16} />}>اطلاعات بیشتر</Button>
                 </div>
             </div>
        </Section>
      </main>

      <div className="py-6 text-center text-xs text-text-muted">
        © 2026 چت‌نگار. ساخته شده با ❤️ برای وردپرس.
      </div>
    </div>
  );
};

export default App;
