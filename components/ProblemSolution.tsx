import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <Section id="problem-solution" className="bg-[#0F0E17]">
      <div className="grid md:grid-cols-2 gap-0 md:gap-8 rounded-3xl overflow-hidden border border-white/10">
        
        {/* Problem (Right in RTL flow) */}
        <div className="p-10 md:p-16 bg-red-500/5 relative">
          <div className="absolute top-0 right-0 w-1 h-full bg-red-500/50"></div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                <X size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">پشتیبانی سنتی دیگر جوابگو نیست</h3>
          </div>
          <ul className="space-y-6">
             <li className="flex items-start gap-4 opacity-80">
                <span className="mt-1 w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                <p className="text-text-light">مشتریان ساعت‌ها برای پاسخ به سوالات ساده منتظر می‌مانند.</p>
             </li>
             <li className="flex items-start gap-4 opacity-80">
                <span className="mt-1 w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                <p className="text-text-light">تیم شما مدام به سوالات تکراری پاسخ می‌دهد.</p>
             </li>
             <li className="flex items-start gap-4 opacity-80">
                <span className="mt-1 w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                <p className="text-text-light">دانش در اسناد، محصولات و صفحات مختلف پراکنده شده است.</p>
             </li>
          </ul>
        </div>

        {/* Solution (Left in RTL flow) */}
        <div className="p-10 md:p-16 bg-emerald-500/5 relative">
          <div className="absolute top-0 right-0 w-1 h-full bg-emerald-500/50"></div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Check size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">چت‌نگار همه چیز را تغییر می‌دهد</h3>
          </div>
           <ul className="space-y-6">
             <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4"
             >
                <div className="p-1 bg-emerald-500/20 rounded-full text-emerald-500 mt-0.5"><Check size={14} /></div>
                <p className="text-lg font-medium text-white">پاسخگویی فوری هوش مصنوعی با استفاده از محتوای سایت شما.</p>
             </motion.li>
             <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
             >
                <div className="p-1 bg-emerald-500/20 rounded-full text-emerald-500 mt-0.5"><Check size={14} /></div>
                <p className="text-lg font-medium text-white">پایگاه دانش هوشمند که از نوشته‌ها و محصولات یاد می‌گیرد.</p>
             </motion.li>
             <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
             >
                <div className="p-1 bg-emerald-500/20 rounded-full text-emerald-500 mt-0.5"><Check size={14} /></div>
                <p className="text-lg font-medium text-white">داشبورد تحلیلی کامل برای رصد تمام مکالمات.</p>
             </motion.li>
          </ul>
        </div>

      </div>
    </Section>
  );
};