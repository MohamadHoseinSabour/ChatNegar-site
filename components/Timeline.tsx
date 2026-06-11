import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const stepGridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.08,
    },
  },
};

const stepCardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const stepCircleVariants = {
  hidden: {
    scale: 0.9,
    borderColor: 'rgba(99, 102, 241, 0.25)',
    boxShadow: '0 0 0 rgba(0,0,0,0)',
  },
  visible: {
    scale: [0.9, 1.08, 1],
    borderColor: ['rgba(99, 102, 241, 0.25)', 'rgba(167, 139, 250, 0.9)', 'rgba(99, 102, 241, 0.35)'],
    boxShadow: [
      '0 0 0 rgba(0,0,0,0)',
      '0 0 26px rgba(99, 102, 241, 0.45), 0 0 42px rgba(124, 58, 237, 0.25)',
      '0 12px 28px rgba(99, 102, 241, 0.18)',
    ],
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

export const Timeline: React.FC = () => {
  const { t, isEn } = useLanguage();

  const steps = [
    { id: 1, title: t("time_step_1_title"), desc: t("time_step_1_desc") },
    { id: 2, title: t("time_step_2_title"), desc: t("time_step_2_desc") },
    { id: 3, title: t("time_step_3_title"), desc: t("time_step_3_desc") },
    { id: 4, title: t("time_step_4_title"), desc: t("time_step_4_desc") }
  ];

  return (
    <Section id="how-it-works" className="bg-[#0F0E17]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('time_title')}</h2>
        <p className="text-text-muted">{t('time_subtitle')}</p>
      </div>
      
      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <motion.div
          className={`hidden md:block absolute top-8 left-0 w-full h-0.5 opacity-30 dashed-line bg-gradient-to-r from-transparent via-primary to-transparent`}
          initial={{ scaleX: 0.3, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.35 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={stepGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          {steps.map((step) => (
            <motion.div key={step.id} className="relative flex flex-col items-center text-center group" variants={stepCardVariants}>
              {/* Step Circle */}
              <motion.div
                className="w-16 h-16 rounded-full bg-[#1A1932] border border-primary/30 flex items-center justify-center text-xl font-bold text-white z-10 mb-6"
                variants={stepCircleVariants}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.25 }}
              >
                <span className="text-gradient">{step.id}</span>
              </motion.div>
               
              <motion.h3 className="text-lg font-bold text-white mb-2" initial={{ opacity: 0.6 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                {step.title}
              </motion.h3>
              <p className="text-text-muted text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
