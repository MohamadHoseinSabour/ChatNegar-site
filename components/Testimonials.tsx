import React from 'react';
import { Section } from './ui/Section';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "سارا محمدی",
    role: "مدیر فروشگاه لباس",
    text: "باورم نمیشد نصبش انقدر راحت باشه. الان ۶۰٪ تیکت‌های پشتیبانی ما به صورت خودکار پاسخ داده میشه و مشتری‌ها عاشق سرعت پاسخگویی هستن.",
    stars: 5
  },
  {
    name: "علی رضایی",
    role: "توسعه دهنده وردپرس",
    text: "به عنوان یک دولوپر، هوک‌هایی که برای شخصی‌سازی گذاشتید عالیه. تونستم چت‌نگار رو دقیقاً با سیستم CRM شرکتمون سینک کنم.",
    stars: 5
  },
  {
    name: "مریم کاظمی",
    role: "مدیر دیجیتال مارکتینگ",
    text: "فروش ما در ساعات غیر اداری ۳۰٪ افزایش پیدا کرده. مشتری وقتی همون لحظه جواب سوالش رو میگیره، خرید میکنه. به همین سادگی.",
    stars: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section className="bg-[#0F0E17]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">چرا مدیران سایت‌ها عاشق چت‌نگار هستند؟</h2>
        <p className="text-text-muted">نظرات واقعی از کاربرانی که پشتیبانی خود را متحول کردند</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
            <div 
                key={idx}
                className="relative bg-surface p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
            >
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                    <Quote size={20} fill="currentColor" />
                </div>
                
                <div className="flex gap-1 mb-6">
                    {[...Array(review.stars)].map((_, i) => (
                        <Star key={i} size={16} fill="#F59E0B" className="text-accent" />
                    ))}
                </div>
                
                <p className="text-text-light leading-relaxed mb-6 min-h-[80px]">
                    "{review.text}"
                </p>
                
                <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                        {review.name.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm">{review.name}</h4>
                        <span className="text-xs text-text-muted">{review.role}</span>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </Section>
  );
};
