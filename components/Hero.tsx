import React from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>

      <div className="container mx-auto px-4 max-w-7xl flex flex-col items-center text-center z-10">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-accent mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          نسخه ۱.۱.۱ — اکنون با پشتیبانی از چندین هوش مصنوعی
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white mb-6 max-w-5xl leading-[1.2]"
        >
          فروشگاه وردپرس شما <br className="hidden md:block" />
          <span className="text-gradient">هرگز نمی‌خوابد.</span> پشتیبانی شما هم نباید بخوابد.
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed"
        >
          چت‌نگار یک ربات چت هوشمند است که از محتوا، محصولات و سفارشات شما یاد می‌گیرد تا پشتیبانی فوری و دقیق ارائه دهد — ۲۴/۷. بدون نیاز به کدنویسی.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <Button variant="primary" size="lg">
            نصب رایگان افزونه
          </Button>
          <Button variant="secondary" size="lg" icon={<Play size={16} fill="currentColor" />}>
            مشاهده دمو
          </Button>
        </motion.div>

        {/* Trust Line */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-text-muted"
        >
          {["سازگار با وردپرس ۵.۸+", "آماده برای ووکامرس", "سازگار با قوانین GDPR"].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-secondary" />
              {item}
            </div>
          ))}
        </motion.div>

        {/* Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 100, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="mt-16 w-full max-w-4xl relative perspective-1000"
        >
           {/* Decorative Glow behind mockup */}
           <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full transform scale-75"></div>
           
           {/* Browser Container: Auto height on mobile, 16:9 on desktop */}
           <div className="relative rounded-2xl border border-white/10 bg-[#1A1932]/90 backdrop-blur-xl shadow-2xl overflow-hidden md:aspect-[16/9] group text-right" dir="rtl">
              
              {/* Fake Browser UI */}
              <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2" dir="ltr">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="mx-auto w-1/2 h-6 bg-white/5 rounded-md text-xs flex items-center justify-center text-white/30 font-mono">
                  store.example.com
                </div>
              </div>
              
              {/* Fake Website Content */}
              <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:h-full bg-[#0F0E17]">
                
                {/* Content Placeholders (Hidden on small mobile to focus on widget) */}
                <div className="hidden md:block col-span-1 md:col-span-8 space-y-4">
                  <div className="h-32 rounded-lg bg-white/5 animate-pulse"></div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="h-24 rounded-lg bg-white/5 animate-pulse"></div>
                     <div className="h-24 rounded-lg bg-white/5 animate-pulse"></div>
                  </div>
                </div>

                {/* Chat Widget Mockup Layered */}
                {/* Position: Relative flow on mobile, absolute pinned on desktop */}
                <div className="relative w-full md:absolute md:bottom-8 md:right-8 md:left-auto md:w-80 bg-surface border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden z-20">
                    {/* Header */}
                    <div className="h-12 md:h-14 bg-primary-gradient flex items-center px-4 gap-3">
                        <div className="w-7 h-7 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center text-xs">🤖</div>
                        <div className="text-white text-sm font-bold">پشتیبان آنلاین</div>
                    </div>
                    {/* Body */}
                    <div className="p-3 md:p-4 space-y-3 bg-[#1A1932] h-48 md:h-64 flex flex-col overflow-hidden">
                        <div className="bg-white/10 p-2 rounded-lg rounded-tr-none self-start text-xs text-slate-200 max-w-[85%]">
                            سلام! چطور می‌توانم کمکتان کنم؟
                        </div>
                        <div className="bg-primary/20 border border-primary/30 p-2 rounded-lg rounded-tl-none self-end text-xs text-white max-w-[85%]">
                            سفارش شماره #1234 من کجاست؟
                        </div>
                         <div className="bg-white/10 p-2 rounded-lg rounded-tr-none self-start text-xs text-slate-200 max-w-[85%]">
                            در حال بررسی... سفارش #1234 **ارسال شده** است و تا ساعت ۵ امروز می‌رسد.
                        </div>
                    </div>
                    {/* Input */}
                    <div className="p-2 md:p-3 border-t border-white/10 bg-[#1A1932] flex gap-2">
                        <div className="h-8 bg-white/5 rounded flex-1"></div>
                        <div className="h-8 w-8 bg-primary rounded"></div>
                    </div>
                </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};