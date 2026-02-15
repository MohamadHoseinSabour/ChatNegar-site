import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { MessageSquare, Menu, X, ArrowLeft } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
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

  const navLinks = [
    { name: 'چرا چت‌نگار', href: '#problem-solution' },
    { name: 'مقایسه', href: '#comparison' },
    { name: 'امکانات', href: '#features' },
    { name: 'ادغام‌ها', href: '#integrations' },
    { name: 'راهنما', href: '#how-it-works' },
    { name: 'دمو', href: '#demo' },
    { name: 'نظرات', href: '#testimonials' },
    { name: 'توسعه', href: '#developers' },
    { name: 'قیمت‌ها', href: '#pricing' },
    { name: 'سوالات', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      setMobileMenuOpen(false);
      
      // Delay scrolling slightly to ensure menu closes cleanly before scroll starts
      // This fixes issues on mobile where immediate scroll might be interrupted
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
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 transition-all duration-300 pointer-events-none">
      <nav 
        className={`
          flex flex-col relative transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          rounded-2xl border pointer-events-auto
          ${isScrolled 
            ? 'w-full max-w-[95%] md:max-w-[95%] lg:max-w-7xl bg-[#1A1932]/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50 py-2' 
            : 'w-full max-w-[95%] bg-[#0F0E17]/60 backdrop-blur-lg border-white/5 py-3'
          }
        `}
      >
        {/* Progress Border Overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl overflow-visible z-0">
          <defs>
            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C3AED" /> {/* Purple */}
              <stop offset="100%" stopColor="#EC4899" /> {/* Pink */}
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
            className="drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]" 
          />
        </svg>

        <div className="px-4 md:px-6 flex items-center justify-between w-full relative z-10">
          {/* Logo */}
          <a href="#" onClick={scrollToTop} className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-primary-gradient flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
              <MessageSquare size={20} fill="currentColor" />
            </div>
            <span className="text-xl font-bold font-display tracking-tight text-white">چت‌نگار</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-3 lg:gap-5">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs lg:text-sm font-medium text-text-muted hover:text-white transition-colors relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <Button variant="primary" size="sm" icon={<ArrowLeft size={16} />}>
              شروع کنید
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors z-20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden w-full relative z-10"
            >
              <div className="flex flex-col p-6 gap-3 border-t border-white/10 mt-2 max-h-[80vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-lg font-medium text-text-light py-2 px-4 rounded-xl text-center hover:bg-white/5 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-px bg-white/10 my-2 shrink-0" />
                <Button variant="primary" className="w-full justify-center shrink-0">
                  شروع کنید
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};