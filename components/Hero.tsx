import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Headset } from 'lucide-react';
import { Button } from './ui/Button';

interface HeroChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

const HERO_CHAT_SCENARIO: Array<{ type: HeroChatMessage['sender']; text: string; delay: number }> = [
  { type: 'bot', text: 'سلام! چطور میتوانم کمکتان کنم؟', delay: 900 },
  { type: 'user', text: 'سفارش شماره #1234 من کجاست؟', delay: 1200 },
  { type: 'bot', text: 'در حال بررسی... سفارش #1234 ارسال شده است و تا ساعت ۵ امروز میرسد.', delay: 1300 },
];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const HERO_CHAT_PLAYBACK_RATE = 0.55;
const heroFast = (ms: number, min = 0) => Math.max(min, Math.round(ms * HERO_CHAT_PLAYBACK_RATE));
const getHeroChatTimestamp = () => new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
const createInitialMiniMessage = (): HeroChatMessage => ({
  id: 1,
  text: HERO_CHAT_SCENARIO[0].text,
  sender: HERO_CHAT_SCENARIO[0].type,
  timestamp: getHeroChatTimestamp(),
});

export const Hero: React.FC = () => {
  const [miniMessages, setMiniMessages] = useState<HeroChatMessage[]>(() => [createInitialMiniMessage()]);
  const [isMiniTyping, setIsMiniTyping] = useState(false);
  const [miniInputText, setMiniInputText] = useState('');
  const [miniStep, setMiniStep] = useState(1);
  const [hasMiniScrollStarted, setHasMiniScrollStarted] = useState(false);

  const miniWidgetRef = useRef<HTMLElement>(null);
  const miniMessagesRef = useRef<HTMLDivElement>(null);
  const miniMessageIdRef = useRef(2);
  const miniIsInView = useInView(miniWidgetRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (window.scrollY > 0) {
      setHasMiniScrollStarted(true);
    }

    const handleScroll = () => {
      setHasMiniScrollStarted(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!miniIsInView || !hasMiniScrollStarted) {
      return;
    }

    let timeout: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    if (miniStep >= HERO_CHAT_SCENARIO.length) {
      setIsMiniTyping(false);
      return () => {
        cancelled = true;
        if (timeout) {
          clearTimeout(timeout);
        }
      };
    }

    const runMiniScenario = async () => {
      const currentAction = HERO_CHAT_SCENARIO[miniStep];

      if (currentAction.type === 'bot') {
        setIsMiniTyping(true);
        await wait(heroFast(850, 220));
        if (cancelled) {
          return;
        }
        setIsMiniTyping(false);
      } else {
        const chars = currentAction.text.split('');
        for (const char of chars) {
          if (cancelled) {
            return;
          }
          setMiniInputText((prev) => prev + char);
          await wait(heroFast(45, 16));
        }
        await wait(heroFast(250, 90));
        if (cancelled) {
          return;
        }
        setMiniInputText('');
      }

      if (cancelled) {
        return;
      }

      setMiniMessages((prev) => [
        ...prev,
        {
          id: miniMessageIdRef.current++,
          text: currentAction.text,
          sender: currentAction.type,
          timestamp: getHeroChatTimestamp(),
        },
      ]);

      timeout = setTimeout(() => {
        if (!cancelled) {
          setMiniStep((prev) => prev + 1);
        }
      }, heroFast(currentAction.delay, 220));
    };

    runMiniScenario();

    return () => {
      cancelled = true;
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [miniStep, miniIsInView, hasMiniScrollStarted]);

  useEffect(() => {
    if (miniMessagesRef.current) {
      miniMessagesRef.current.scrollTop = miniMessagesRef.current.scrollHeight;
    }
  }, [miniMessages, isMiniTyping]);

  const restartMiniChat = () => {
    miniMessageIdRef.current = 2;
    setMiniMessages([createInitialMiniMessage()]);
    setMiniStep(1);
    setMiniInputText('');
    setIsMiniTyping(false);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>

      <div className="container mx-auto px-4 max-w-7xl flex flex-col items-center text-center z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-accent mt-8 md:mt-10 mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          نسخه 1.1.1 - اکنون با پشتیبانی از چندین هوش مصنوعی
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6 max-w-5xl leading-[2.1] md:leading-[1.9]"
        >
          <span className="block">پاسخ سریع، فروش بیشتر.</span>
          <span className="block mt-7 md:mt-8">
            <span className="text-gradient">چت‌نگار</span> همیشه آنلاین است.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed"
        >
          چت‌نگار یک ربات چت هوشمند است که از محتوای سایت، محصولات و سفارشات شما یاد می‌گیرد تا پشتیبانی فوری و دقیق
          ارائه دهد. بدون نیاز به کدنویسی.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <Button variant="primary" size="lg" icon={<ArrowLeft size={16} />}>
            اطلاعات بیشتر
          </Button>
        </motion.div>

        {/* Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-text-muted"
        >
          {['سازگار با وردپرس 5.8+', 'آماده برای ووکامرس', 'سازگار با قوانین GDPR'].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-secondary" />
              {item}
            </div>
          ))}
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
          className="mt-16 w-full max-w-4xl relative perspective-1000"
        >
          {/* Decorative Glow behind mockup */}
          <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full transform scale-75"></div>

          {/* Browser Container: Auto height on mobile, 16:9 on desktop */}
          <div className="relative rounded-2xl border border-white/10 bg-[#1A1932]/90 backdrop-blur-xl shadow-2xl overflow-hidden md:aspect-[16/9] group text-right" dir="rtl">
            {/* Fake Browser UI */}
            <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2" dir="ltr">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="mx-auto w-1/2 h-6 bg-white/5 rounded-md text-xs flex items-center justify-center text-white/30 font-mono">
                store.example.com
              </div>
            </div>

            {/* Fake Website Content */}
            <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:h-full bg-[#0F0E17]">
              {/* Content Placeholders (Hidden on small mobile to focus on widget) */}
              <div className="hidden md:block col-span-1 md:col-span-8 space-y-4">
                <div className="h-32 rounded-lg bg-white/5 animate-pulse"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 rounded-lg bg-white/5 animate-pulse"></div>
                  <div className="h-24 rounded-lg bg-white/5 animate-pulse"></div>
                </div>
              </div>

              {/* Chat Widget Mockup Layered */}
              <div className="relative w-full md:absolute md:bottom-8 md:right-8 md:left-auto md:w-[336px] z-20">
                <section ref={miniWidgetRef} className="chatnegar-window chatnegar-window--mini" role="dialog" aria-label="پنجره چت" aria-hidden="false">
                  <header className="chatnegar-header" style={{ color: 'rgb(255, 255, 255)' }}>
                    <div className="chatnegar-agent">
                      <div className="chatnegar-agent-avatar" aria-hidden="true">
                        <Headset />
                      </div>
                      <div className="chatnegar-agent-info">
                        <strong className="chatnegar-agent-name">تیم پشتیبانی</strong>
                        <span className="chatnegar-agent-title">
                          پشتیبانی آنلاین
                          <i className="chatnegar-status-dot" aria-hidden="true" />
                        </span>
                      </div>
                    </div>

                    <div className="chatnegar-header-actions">
                      <button type="button" className="chatnegar-menu-toggle" aria-label="منو" hidden>
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <path
                            d="M5 7h14M5 12h14M5 17h10"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <button type="button" className="chatnegar-close-window" aria-label="بستن" title="شروع مجدد" onClick={restartMiniChat}>×</button>
                    </div>
                  </header>

                  <div ref={miniMessagesRef} className="chatnegar-messages" role="log" aria-live="polite">
                    <AnimatePresence>
                      {miniMessages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          className={`chatnegar-msg ${message.sender === 'user' ? 'chatnegar-msg--user' : 'chatnegar-msg--assistant'}`}
                        >
                          <div className="chatnegar-msg-content">{message.text}</div>
                          <div className="chatnegar-msg-meta">{message.timestamp}</div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  <div className="chatnegar-typing" hidden={!isMiniTyping} aria-hidden={!isMiniTyping}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="chatnegar-quick-replies" hidden></div>

                  <footer className="chatnegar-footer">
                    <div className="chatnegar-input-wrap">
                      <button type="button" className="chatnegar-input-action chatnegar-attach" aria-label="Attach" hidden>
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <path
                            d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      <button type="button" className="chatnegar-input-action chatnegar-emoji" aria-label="Emoji">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8"></circle>
                          <circle cx="9" cy="10" r="1" fill="currentColor"></circle>
                          <circle cx="15" cy="10" r="1" fill="currentColor"></circle>
                          <path
                            d="M8.5 14.5c.9 1.4 2.1 2 3.5 2s2.6-.6 3.5-2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>

                      <textarea className="chatnegar-input" rows={1} readOnly value={miniInputText} placeholder="پیامی بنویسید..."></textarea>

                      <button type="button" className="chatnegar-send" aria-label="Send message" disabled={!miniInputText.trim()}>
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <path d="M4 12h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </button>
                    </div>

                    <div className="chatnegar-char-count" hidden>
                      0/500
                    </div>
                    <div className="chatnegar-powered-by">قدرت گرفته از چتنگار</div>
                  </footer>
                </section>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
