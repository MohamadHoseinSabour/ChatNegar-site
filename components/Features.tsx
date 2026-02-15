import React from 'react';
import { Section } from './ui/Section';
import { Bot, FileText, BarChart3, Palette, Zap, Shield, Database, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

export const Features: React.FC = () => {
  return (
    <Section id="features" className="bg-[#0F0E17]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">هر آنچه برای پشتیبانی هوشمند نیاز دارید</h2>
        <p className="text-text-muted text-lg">یک سیستم پشتیبانی کامل هوش مصنوعی که مخصوص وردپرس و ووکامرس ساخته شده است</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
        
        {/* Large Card */}
        <motion.div 
          className="md:col-span-2 md:row-span-2 glass-panel rounded-3xl p-8 flex flex-col justify-between hover:border-primary/50 transition-colors group"
          whileHover={{ y: -5 }}
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <Bot size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">موتور هوش مصنوعی چندگانه</h3>
            <p className="text-text-muted leading-relaxed">اتصال به OpenAI، Google Gemini یا OpenRouter. دریافت مدل‌های موجود به صورت پویا، تنظیم دما (Temperature) و مدیریت پنجره متن با مکانیزم تلاش مجدد داخلی.</p>
          </div>
          <div className="mt-8 flex gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
             <div className="h-12 w-24 bg-white/10 rounded-lg flex items-center justify-center text-xs font-mono">OpenAI</div>
             <div className="h-12 w-24 bg-white/10 rounded-lg flex items-center justify-center text-xs font-mono">Gemini</div>
             <div className="h-12 w-24 bg-white/10 rounded-lg flex items-center justify-center text-xs font-mono">Llama</div>
          </div>
        </motion.div>

        {/* Medium Card - KB */}
        <motion.div 
          className="md:col-span-1 md:row-span-2 glass-panel rounded-3xl p-6 flex flex-col hover:border-emerald-500/50 transition-colors"
          whileHover={{ y: -5 }}
        >
          <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <FileText size={20} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">پایگاه دانش هوشمند</h3>
          <p className="text-text-muted text-sm flex-grow">آپلود TXT، MD، CSV یا همگام‌سازی خودکار از نوشته‌های وردپرس و محصولات ووکامرس.</p>
          <div className="mt-4 h-24 bg-surface rounded-xl border border-white/5 relative overflow-hidden p-2">
            <div className="absolute top-2 right-2 left-2 h-2 bg-emerald-500/20 rounded-full animate-pulse"></div>
            <div className="absolute top-6 right-2 left-8 h-2 bg-white/10 rounded-full"></div>
            <div className="absolute top-10 right-2 left-4 h-2 bg-white/10 rounded-full"></div>
          </div>
        </motion.div>

        {/* Small Cards */}
        <motion.div className="md:col-span-1 glass-panel rounded-3xl p-6 hover:border-amber-500/50 transition-colors" whileHover={{ y: -5 }}>
           <Palette className="text-amber-400 mb-3" />
           <h4 className="font-bold text-white">سفارشی‌سازی بصری</h4>
           <p className="text-xs text-text-muted mt-1">تغییر زنده تمام جزئیات ظاهری.</p>
        </motion.div>

         <motion.div className="md:col-span-1 glass-panel rounded-3xl p-6 hover:border-purple-500/50 transition-colors" whileHover={{ y: -5 }}>
           <Zap className="text-purple-400 mb-3" />
           <h4 className="font-bold text-white">پاسخ‌های سریع</h4>
           <p className="text-xs text-text-muted mt-1">دکمه‌های از پیش تنظیم شده برای سرعت.</p>
        </motion.div>

        {/* Wide Card - Analytics */}
        <motion.div className="md:col-span-2 glass-panel rounded-3xl p-6 flex items-center gap-6 hover:border-pink-500/50 transition-colors" whileHover={{ y: -5 }}>
             <div className="flex-1">
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 mb-4">
                    <BarChart3 size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">داشبورد تحلیلی</h3>
                <p className="text-text-muted text-sm mt-2">آمار زنده مکالمات، مصرف توکن و نرخ رضایت کاربران.</p>
             </div>
             <div className="w-32 h-24 flex items-end justify-between gap-1 px-2 pb-2 border-b border-r border-white/10" dir="ltr">
                {[40, 70, 45, 90, 60].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className="w-4 bg-pink-500/50 rounded-t-sm"></div>
                ))}
             </div>
        </motion.div>

        {/* Small Cards Row */}
        <motion.div className="glass-panel rounded-3xl p-6 flex flex-col justify-center items-center text-center" whileHover={{ scale: 1.05 }}>
            <Shield className="text-green-400 mb-2" />
            <h4 className="font-bold text-white text-sm">امنیت سازمانی</h4>
        </motion.div>

        <motion.div className="glass-panel rounded-3xl p-6 flex flex-col justify-center items-center text-center" whileHover={{ scale: 1.05 }}>
            <Database className="text-indigo-400 mb-2" />
            <h4 className="font-bold text-white text-sm">همگام با ووکامرس</h4>
        </motion.div>

         <motion.div className="glass-panel rounded-3xl p-6 flex flex-col justify-center items-center text-center" whileHover={{ scale: 1.05 }}>
            <Smile className="text-yellow-400 mb-2" />
            <h4 className="font-bold text-white text-sm">رهگیری رضایت</h4>
        </motion.div>

      </div>
    </Section>
  );
};