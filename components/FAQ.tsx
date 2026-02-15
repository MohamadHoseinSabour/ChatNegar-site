import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "چت‌نگار از چه سرویس‌های هوش مصنوعی پشتیبانی می‌کند؟", a: "چت‌نگار از OpenAI (GPT-4, GPT-3.5)، Google Gemini و OpenRouter (که دسترسی به بیش از ۱۰۰ مدل مانند Claude و Llama را می‌دهد) پشتیبانی می‌کند." },
  { q: "آیا نیاز به دانش کدنویسی دارم؟", a: "اصلاً. افزونه را نصب کنید، کلید API خود را وارد کنید و تمام. شخصی‌سازی کاملاً بصری است." },
  { q: "امنیت داده‌های من چگونه تامین می‌شود؟", a: "کلیدهای API با رمزنگاری AES-256-CBC ذخیره می‌شوند. ما از اعتبارسنجی دقیق nonce و ایمن‌سازی ورودی‌ها استفاده می‌کنیم." },
  { q: "آیا از ووکامرس پشتیبانی می‌کند؟", a: "بله، به طور عمیق. محصولات و سفارشات را به صورت خودکار با پایگاه دانش همگام‌سازی می‌کند." },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-[#0F0E17]">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">سوالات متداول</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-surface border border-white/5 rounded-xl overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-6 text-right hover:bg-white/5 transition-colors"
            >
              <span className="font-medium text-white">{faq.q}</span>
              <ChevronDown className={`transform transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} size={20} />
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <div className="px-6 pb-6 text-text-muted leading-relaxed border-t border-white/5 pt-4 text-right">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
};