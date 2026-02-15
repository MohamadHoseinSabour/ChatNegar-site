import React from 'react';
import { Section } from './ui/Section';

const steps = [
  { id: 1, title: "نصب و فعال‌سازی", desc: "افزونه را در وردپرس آپلود کنید. جداول و تنظیمات به صورت خودکار ایجاد می‌شوند." },
  { id: 2, title: "اتصال هوش مصنوعی", desc: "انتخاب OpenAI، Gemini یا OpenRouter. کلید API را وارد کنید." },
  { id: 3, title: "ساخت دانش", desc: "همگام‌سازی نوشته‌ها، محصولات و سفارشات. چت‌نگار به صورت خودکار کانتکست را می‌سازد." },
  { id: 4, title: "شروع به کار", desc: "ویجت بلافاصله ظاهر می‌شود. ارائه پشتیبانی ۲۴/۷ را شروع کنید." }
];

export const Timeline: React.FC = () => {
  return (
    <Section id="how-it-works" className="bg-[#0F0E17]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">راه‌اندازی در ۳ دقیقه</h2>
        <p className="text-text-muted">بدون کدنویسی. بدون تنظیمات پیچیده.</p>
      </div>
      
      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-l from-transparent via-primary to-transparent opacity-30 dashed-line"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center text-center group">
              {/* Step Circle */}
              <div className="w-16 h-16 rounded-full bg-[#1A1932] border border-primary/30 flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform z-10 mb-6">
                <span className="text-gradient">{step.id}</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-text-muted text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};