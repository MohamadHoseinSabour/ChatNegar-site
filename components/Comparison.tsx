import React from 'react';
import { Section } from './ui/Section';
import { Check, X, Zap, Clock, DollarSign, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

export const Comparison: React.FC = () => {
  const features = [
    { name: "زمان پاسخگویی", chatnegar: "کمتر از ۲ ثانیه", others: "۱۵ دقیقه تا ۲۴ ساعت", icon: Clock },
    { name: "دسترسی", chatnegar: "۲۴/۷ بدون تعطیلی", others: "ساعات اداری", icon: Zap },
    { name: "هزینه ماهیانه", chatnegar: "رایگان (پرداخت فقط برای API)", others: "۵۰۰+ هزار تومان / ایجنت", icon: DollarSign },
    { name: "حافظه متنی", chatnegar: "نامحدود (Vector DB)", others: "محدود به حافظه انسان", icon: Brain },
    { name: "پشتیبانی چندزبانه", chatnegar: "۵۰+ زبان زنده دنیا", others: "نیازمند استخدام مترجم", icon: GlobeIcon },
  ];

  return (
    <Section className="bg-[#0F0E17]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">چرا چت‌نگار انتخاب بهتری است؟</h2>
        <p className="text-text-muted">مقایسه شفاف با روش‌های سنتی و پلاکین‌های قدیمی</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-4 text-center pb-4 border-b border-white/10 sticky top-20 bg-[#0F0E17]/90 backdrop-blur z-20">
          <div className="text-text-muted font-medium">ویژگی</div>
          <div className="text-primary font-bold text-lg">چت‌نگار 🚀</div>
          <div className="text-text-muted font-medium">پشتیبانی سنتی 🐢</div>
        </div>

        <div className="space-y-4">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="grid grid-cols-3 gap-4 items-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 text-white font-medium text-sm md:text-base">
                <div className="p-2 rounded-lg bg-white/5 text-text-muted hidden md:block">
                    <item.icon size={18} />
                </div>
                {item.name}
              </div>
              
              <div className="text-center flex flex-col items-center justify-center gap-1">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-1">
                    <Check size={16} strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-bold">{item.chatnegar}</span>
              </div>

              <div className="text-center flex flex-col items-center justify-center gap-1 opacity-60 grayscale">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 mb-1">
                    <X size={16} strokeWidth={3} />
                </div>
                <span className="text-text-muted text-sm">{item.others}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const GlobeIcon = ({ size }: { size: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
);