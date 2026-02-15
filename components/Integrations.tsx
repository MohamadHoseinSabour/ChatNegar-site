import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

const integrations = [
  { name: "WooCommerce", color: "#96588a" },
  { name: "Gravity Forms", color: "#2E73B5" },
  { name: "Elementor", color: "#92003B" },
  { name: "OpenAI", color: "#10A37F" },
  { name: "Google Gemini", color: "#4285F4" },
  { name: "Yoast SEO", color: "#a4286a" },
  { name: "Digits", color: "#F76B1C" },
  { name: "Advanced Custom Fields", color: "#222222" },
];

export const Integrations: React.FC = () => {
  return (
    <Section className="bg-[#0A0914] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">هماهنگ با ابزارهای محبوب شما</h2>
          <p className="text-text-muted text-lg mb-8 leading-relaxed">
            چت‌نگار یک جزیره جدا افتاده نیست. این افزونه به طور خودکار با ووکامرس، فرم‌سازها و سایر افزونه‌های حیاتی وردپرس شما صحبت می‌کند تا تجربه‌ای یکپارچه بسازد.
          </p>
          <ul className="space-y-4">
             <li className="flex items-center gap-3 text-text-light">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                شناسایی وضعیت سفارشات ووکامرس
             </li>
             <li className="flex items-center gap-3 text-text-light">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                خواندن فیلدهای سفارشی ACF برای محصولات
             </li>
             <li className="flex items-center gap-3 text-text-light">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                سازگاری کامل با صفحه ساز المنتور
             </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {integrations.map((tool, idx) => (
                <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                    className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/5 rounded-2xl cursor-default transition-colors group"
                >
                    <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-3 shadow-lg group-hover:shadow-xl transition-all"
                        style={{ backgroundColor: tool.color }}
                    >
                        {tool.name.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-text-light">{tool.name}</span>
                </motion.div>
            ))}
        </div>
      </div>
    </Section>
  );
};