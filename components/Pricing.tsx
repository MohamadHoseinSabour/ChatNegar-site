import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ArrowLeft, Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <Section id="pricing" className="bg-[#0F0E17]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">قیمت‌گذاری ساده و شفاف</h2>
        <p className="text-text-muted">شما فقط هزینه مصرف هوش مصنوعی خود را می‌پردازید.</p>
      </div>

      <div className="max-w-md mx-auto relative group">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary via-purple-600 to-secondary opacity-50 blur-3xl rounded-full group-hover:opacity-70 transition-opacity"></div>
        
        <div className="relative glass-panel rounded-3xl p-8 md:p-12 text-center border-t border-white/20">
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-bold mb-6 border border-emerald-500/20">
                افزونه ۱۰۰٪ رایگان
            </div>
            
            <div className="text-6xl font-bold text-white mb-2" dir="ltr">۰ تومان</div>
            <div className="text-text-muted mb-8">برای همیشه</div>

            <ul className="space-y-4 mb-10 text-right">
                {[
                    "تعداد مکالمه نامحدود", 
                    "پشتیبانی از تمام سرویس‌های هوش مصنوعی", 
                    "همگام‌سازی خودکار پایگاه دانش", 
                    "داشبورد تحلیلی", 
                    "ویژگی‌های حریم خصوصی و امنیت"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-text-light">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                            <Check size={12} strokeWidth={3} />
                        </div>
                        {item}
                    </li>
                ))}
            </ul>

            <Button variant="primary" size="lg" className="w-full" icon={<ArrowLeft size={16} />}>
                اطلاعات بیشتر
            </Button>
            
            <p className="mt-6 text-xs text-text-muted leading-relaxed">
                💡 شما نیاز به یک کلید API از OpenAI، Gemini یا OpenRouter دارید. <br/>
                هزینه میانگین: ~۵ دلار/ماه برای ۵۰۰ مکالمه.
            </p>
        </div>
      </div>
    </Section>
  );
};
