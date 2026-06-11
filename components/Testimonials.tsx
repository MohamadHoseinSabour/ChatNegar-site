import React from 'react';
import { Section } from './ui/Section';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const Testimonials: React.FC = () => {
  const { t, isEn } = useLanguage();

  const reviews = [
    {
      name: t("test_rev_1_name"),
      role: t("test_rev_1_role"),
      text: t("test_rev_1_text"),
      stars: 5
    },
    {
      name: t("test_rev_2_name"),
      role: t("test_rev_2_role"),
      text: t("test_rev_2_text"),
      stars: 5
    },
    {
      name: t("test_rev_3_name"),
      role: t("test_rev_3_role"),
      text: t("test_rev_3_text"),
      stars: 5
    }
  ];

  return (
    <Section className="bg-[#0F0E17]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('test_title')}</h2>
        <p className="text-text-muted">{t('test_subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
            <div 
                key={idx}
                className="relative bg-surface p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 text-start"
            >
                <div className="absolute -top-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white rtl:-right-4 ltr:-left-4">
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
