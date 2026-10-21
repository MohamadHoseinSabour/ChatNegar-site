import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { MessageSquare, Menu, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { useLanguage } from './LanguageContext';

export const Navbar: React.FC = () => {
  const { isEn, t, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Focused 5-6 core links for desktop to ensure the buy button NEVER overflows
  const desktopLinks = [
    { name: t('nav_features'), href: '#features' },
    { name: t('nav_demo'), href: '#demo' },
    { name: t('nav_admin'), href: '#admin-console' },
    { name: t('nav_comparison'), href: '#comparison' },
    { name: t('nav_pricing'), href: '#pricing' },
    { name: t('nav_faq'), href: '#faq' },
  ];

  // Full list of links for mobile drawer
  const mobileNavLinks = [
    { name: t('nav_why'), href: '#problem-solution' },
    { name: t('nav_features'), href: '#features' },
    { name: t('nav_demo'), href: '#demo' },
    { name: t('nav_admin'), href: '#admin-console' },
    { name: t('nav_comparison'), href: '#comparison' },
    { name: t('nav_integrations'), href: '#integrations' },
    { name: t('nav_timeline'), href: '#how-it-works' },
    { name: t('nav_testimonials'), href: '#testimonials' },
    { name: t('nav_pricing'), href: '#pricing' },
    { name: t('nav_faq'), href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      setMobileMenuOpen(false);
      
      setTimeout(() => {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 px-3 sm:px-6 transition-all duration-300 pointer-events-none">
      <nav 
        className={`
          flex flex-col relative transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          rounded-2xl border pointer-events-auto w-full max-w-6xl overflow-hidden
          ${isScrolled 
            ? 'bg-[#1A1932]/90 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50 py-2.5 px-3 sm:px-5' 
            : 'bg-[#0F0E17]/80 backdrop-blur-lg border-white/10 py-3 px-3 sm:px-5'
          }
        `}
      >
        {/* Progress Border Overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl overflow-visible z-0">
          <defs>
            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          <motion.rect
            x="1" 
            y="1" 
            width="calc(100% - 2px)" 
            height="calc(100% - 2px)" 
            rx="15" 
            ry="15"
            fill="none"
            stroke="url(#progress-gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ pathLength }}
            className="drop-shadow-[0_0_10px_rgba(79,70,229,0.45)]" 
          />
        </svg>

        <div className="flex items-center justify-between w-full relative z-10 gap-3">
          {/* Logo */}
          <a href="#" onClick={scrollToTop} className="flex items-center gap-2 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-primary-gradient flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
              <MessageSquare size={18} fill="currentColor" />
            </div>
            <span className="text-lg sm:text-xl font-bold font-display tracking-tight text-white">{t('logo')}</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {desktopLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs xl:text-sm font-medium text-text-muted hover:text-white transition-colors relative group whitespace-nowrap py-1"
              >
                {link.name}
                <span className="absolute -bottom-0.5 right-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <button
              onClick={toggleLanguage}
              className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white font-mono cursor-pointer shrink-0"
            >
              {isEn ? 'FA' : 'EN'}
            </button>
            <Button 
              variant="primary" 
              size="sm" 
              className="whitespace-nowrap px-4 py-2 text-xs sm:text-sm font-bold shrink-0 shadow-lg shadow-primary/30"
              icon={isEn ? <ArrowRight size={15} /> : <ArrowLeft size={15} />} 
              href="https://www.rtl-theme.com/chatnegar-wordpress-plugin/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {t('nav_buy') || (isEn ? 'Buy Now' : 'خرید چت‌نگار')}
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors z-20 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden w-full relative z-10"
            >
              <div className="flex flex-col p-5 gap-2 border-t border-white/10 mt-3 max-h-[80vh] overflow-y-auto">
                {mobileNavLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-medium text-text-light py-2 px-3 rounded-xl text-start hover:bg-white/5 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-px bg-white/10 my-2 shrink-0" />
                <button
                  onClick={() => {
                    toggleLanguage();
                    setMobileMenuOpen(false);
                  }}
                  className="text-xs font-semibold py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white font-mono text-center cursor-pointer shrink-0"
                >
                  {isEn ? 'فارسی (FA)' : 'English (EN)'}
                </button>
                <div className="h-px bg-white/10 my-1 shrink-0" />
                <Button 
                  variant="primary" 
                  className="w-full justify-center shrink-0 py-3 font-bold" 
                  icon={isEn ? <ArrowRight size={16} /> : <ArrowLeft size={16} />} 
                  href="https://www.rtl-theme.com/chatnegar-wordpress-plugin/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {t('nav_buy') || (isEn ? 'Buy Now' : 'خرید چت‌نگار')}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};
