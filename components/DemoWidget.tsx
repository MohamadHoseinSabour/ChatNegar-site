import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { 
  Headset, 
  User, 
  ShoppingCart, 
  Check, 
  Loader2, 
  Star, 
  Phone, 
  RotateCcw, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight,
  Sparkles,
  Bot
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface ProductCardData {
  id: string;
  title: string;
  badge: string;
  price: string;
  oldPrice: string;
  stock: string;
  imageUrl: string;
}

interface MessageItem {
  id: number;
  sender: 'user' | 'bot' | 'operator' | 'system';
  text: string;
  timestamp: string;
  product?: ProductCardData;
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const DemoWidget: React.FC = () => {
  const { isEn, t } = useLanguage();

  // Phase State: 1 = Intake Form, 2 = Chat (with Product & Handoff), 3 = CSAT Form
  const [phase, setPhase] = useState<1 | 2 | 3>(1);
  const [activeStepTab, setActiveStepTab] = useState<1 | 2 | 3 | 4>(1);

  // Intake Form fields
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [isIntakeAutoTyping, setIsIntakeAutoTyping] = useState(false);

  // Chat conversation state
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [typingSender, setTypingSender] = useState<'bot' | 'operator'>('bot');
  const [inputText, setInputText] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [cartButtonState, setCartButtonState] = useState<'idle' | 'loading' | 'added'>('idle');

  // CSAT Rating state
  const [csatRating, setCsatRating] = useState<number>(5);
  const [csatSubmitted, setCsatSubmitted] = useState<boolean>(false);

  const widgetRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasEnteredView = useInView(widgetRef, { once: true, amount: 0.3 });
  const scenarioRunningRef = useRef(false);

  const getNowTime = () => 
    new Date().toLocaleTimeString(isEn ? 'en-US' : 'fa-IR', { hour: '2-digit', minute: '2-digit' });

  // Reset or initialize on language change
  useEffect(() => {
    resetDemo();
  }, [isEn]);

  const resetDemo = () => {
    scenarioRunningRef.current = false;
    setPhase(1);
    setActiveStepTab(1);
    setUserName('');
    setUserPhone('');
    setIsIntakeAutoTyping(false);
    setMessages([]);
    setIsTyping(false);
    setInputText('');
    setCartCount(0);
    setCartButtonState('idle');
    setCsatRating(5);
    setCsatSubmitted(false);
  };

  // Run multi-phase scenario when scrolled into view
  useEffect(() => {
    if (!hasEnteredView || scenarioRunningRef.current) return;
    
    let isCancelled = false;
    scenarioRunningRef.current = true;

    const runAutomatedScenario = async () => {
      // PHASE 1: Pre-Chat Intake Form Typing
      await wait(600);
      if (isCancelled) return;
      setIsIntakeAutoTyping(true);

      const demoName = isEn ? 'Amirreza' : 'امیررضا';
      const demoPhone = '09123456789';

      // Type name
      for (const char of demoName.split('')) {
        if (isCancelled) return;
        setUserName((prev) => prev + char);
        await wait(65);
      }
      await wait(300);

      // Type phone
      for (const char of demoPhone.split('')) {
        if (isCancelled) return;
        setUserPhone((prev) => prev + char);
        await wait(65);
      }
      await wait(600);
      if (isCancelled) return;
      setIsIntakeAutoTyping(false);

      // Transition to Phase 2: Active Chat
      setPhase(2);
      setActiveStepTab(2);
      await wait(600);
      if (isCancelled) return;

      // User asks product query
      const userQuestion1 = t('demo_msg_user_product');
      for (const char of userQuestion1.split('')) {
        if (isCancelled) return;
        setInputText((prev) => prev + char);
        await wait(24);
      }
      await wait(400);
      if (isCancelled) return;
      setInputText('');

      setMessages((prev) => [
        ...prev,
        {
          id: 1,
          sender: 'user',
          text: userQuestion1,
          timestamp: getNowTime(),
        },
      ]);

      // AI Typing
      setTypingSender('bot');
      setIsTyping(true);
      await wait(1200);
      if (isCancelled) return;
      setIsTyping(false);

      // AI responds with product card
      setMessages((prev) => [
        ...prev,
        {
          id: 2,
          sender: 'bot',
          text: t('demo_msg_bot_product'),
          timestamp: getNowTime(),
          product: {
            id: 'nike-flyknit',
            title: t('demo_prod_title'),
            badge: t('demo_prod_badge'),
            price: t('demo_prod_price'),
            oldPrice: t('demo_prod_old_price'),
            stock: t('demo_prod_stock'),
            imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=80',
          },
        },
      ]);

      // Auto simulate "Add to Cart" click
      await wait(1400);
      if (isCancelled) return;
      setCartButtonState('loading');
      await wait(800);
      if (isCancelled) return;
      setCartButtonState('added');
      setCartCount(1);

      // PHASE 3: User asks for courier and human support
      await wait(1600);
      if (isCancelled) return;
      setActiveStepTab(3);

      const userQuestion2 = t('demo_msg_user_operator');
      for (const char of userQuestion2.split('')) {
        if (isCancelled) return;
        setInputText((prev) => prev + char);
        await wait(24);
      }
      await wait(350);
      if (isCancelled) return;
      setInputText('');

      setMessages((prev) => [
        ...prev,
        {
          id: 3,
          sender: 'user',
          text: userQuestion2,
          timestamp: getNowTime(),
        },
      ]);

      // System notification: handoff to human support with AI silence
      await wait(800);
      if (isCancelled) return;
      setMessages((prev) => [
        ...prev,
        {
          id: 4,
          sender: 'system',
          text: t('demo_system_handoff'),
          timestamp: getNowTime(),
        },
      ]);

      // Operator is typing
      await wait(900);
      if (isCancelled) return;
      setTypingSender('operator');
      setIsTyping(true);
      await wait(1400);
      if (isCancelled) return;
      setIsTyping(false);

      // Operator reply
      setMessages((prev) => [
        ...prev,
        {
          id: 5,
          sender: 'operator',
          text: t('demo_msg_operator_reply'),
          timestamp: getNowTime(),
        },
      ]);

      // PHASE 4: CSAT Rating Form
      await wait(2000);
      if (isCancelled) return;
      setActiveStepTab(4);
      setPhase(3);
    };

    runAutomatedScenario();

    return () => {
      isCancelled = true;
    };
  }, [hasEnteredView, isEn, t]);

  // Auto scroll chat to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, phase]);

  const handleAddToCart = () => {
    if (cartButtonState === 'added') return;
    setCartButtonState('loading');
    setTimeout(() => {
      setCartButtonState('added');
      setCartCount(1);
    }, 600);
  };

  const handleManualStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userPhone.trim()) {
      setUserName(isEn ? 'Amirreza' : 'امیررضا');
      setUserPhone('09123456789');
    }
    setPhase(2);
    setActiveStepTab(2);
  };

  const handleManualSubmitCsat = () => {
    setCsatSubmitted(true);
  };

  return (
    <div className="w-full max-w-[420px] mx-auto">
      {/* Scenario Stage Pills */}
      <div className="flex items-center justify-between gap-1.5 p-1.5 bg-[#141324] border border-white/10 rounded-2xl mb-3 text-[11px] font-medium" dir={isEn ? 'ltr' : 'rtl'}>
        {[
          { step: 1, label: isEn ? '1. Intake' : '۱. لیدجنریشن' },
          { step: 2, label: isEn ? '2. In-Cart' : '۲. کارت خرید' },
          { step: 3, label: isEn ? '3. Handoff' : '۳. اپراتور زنده' },
          { step: 4, label: isEn ? '4. CSAT' : '۴. نظرسنجی' },
        ].map((item) => (
          <div
            key={item.step}
            className={`flex-1 text-center py-1.5 px-2 rounded-xl transition-all duration-300 ${
              activeStepTab === item.step
                ? 'bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-md shadow-primary/25'
                : activeStepTab > item.step
                ? 'text-emerald-400 bg-emerald-500/10'
                : 'text-slate-400 bg-white/5'
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* Main Widget Window */}
      <section
        ref={widgetRef}
        className="chatnegar-window chatnegar-window--full shadow-2xl border border-white/15 overflow-hidden flex flex-col bg-[#F3F4F8] rounded-[24px]"
        role="dialog"
        aria-label="ChatNegar Demo Window"
        dir={isEn ? 'ltr' : 'rtl'}
      >
        {/* Header */}
        <header className="chatnegar-header bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white p-3.5 relative flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white backdrop-blur-md">
                {activeStepTab >= 3 ? <User size={20} /> : <Headset size={20} />}
              </div>
              <span className="absolute bottom-0 end-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#4F46E5]" />
            </div>
            
            <div className="text-start">
              <strong className="block text-[15px] font-bold leading-tight">
                {activeStepTab >= 3 ? t('demo_operator_name') : t('demo_assistant')}
              </strong>
              <div className="flex items-center gap-1.5 text-[11px] text-white/80 font-normal">
                {activeStepTab >= 3 ? (
                  <span className="inline-flex items-center gap-1 text-amber-300 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse"></span>
                    {isEn ? 'Human Operator Online' : 'اپراتور انسانی متصل است'}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    {t('mockup_online')}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Cart Icon & Reset Controls */}
          <div className="flex items-center gap-2">
            {cartCount > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="relative bg-white/15 px-2.5 py-1.5 rounded-xl flex items-center gap-1 text-xs font-bold text-white border border-white/20"
                title={isEn ? 'Cart Items' : 'اقلام سبد خرید'}
              >
                <ShoppingCart size={14} className="text-emerald-300" />
                <span>{cartCount}</span>
              </motion.div>
            )}

            <button
              type="button"
              onClick={resetDemo}
              className="w-8 h-8 rounded-xl bg-white/15 hover:bg-white/25 transition-colors flex items-center justify-center text-white border border-white/20"
              title={t('demo_restart_btn')}
            >
              <RotateCcw size={14} />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 relative overflow-hidden flex flex-col bg-[#F3F4F8]">
          <AnimatePresence mode="wait">
            {/* PHASE 1: PRE-CHAT INTAKE FORM */}
            {phase === 1 && (
              <motion.div
                key="phase-intake"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="flex-1 flex flex-col justify-center p-6 text-slate-800"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary mx-auto mb-3 flex items-center justify-center shadow-inner">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {t('demo_intake_title')}
                  </h3>
                  <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                    {t('demo_intake_privacy')}
                  </p>

                  <form onSubmit={handleManualStartChat} className="space-y-4 text-start">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">
                        {t('demo_intake_name_label')}
                      </label>
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder={isEn ? 'e.g. Amirreza' : 'مثال: امیررضا صابری'}
                        className="w-full h-10 px-3.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-primary bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1 flex items-center justify-between">
                        <span>{t('demo_intake_phone_label')}</span>
                        <span className="text-[10px] text-emerald-600 font-normal">اعتبارسنجی ۱۰۰٪</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          value={userPhone}
                          onChange={(e) => setUserPhone(e.target.value)}
                          placeholder="09123456789"
                          className="w-full h-10 px-3.5 pe-10 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-primary bg-slate-50 font-mono text-start"
                          dir="ltr"
                        />
                        <Phone size={14} className="absolute end-3.5 top-3 text-slate-400" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full h-11 bg-gradient-to-r from-primary to-secondary text-white rounded-xl text-xs font-bold shadow-md shadow-primary/30 hover:opacity-95 transition-opacity flex items-center justify-center gap-2 mt-4"
                    >
                      <span>{t('demo_intake_btn')}</span>
                      {isEn ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
                    </button>
                  </form>
                </div>
              </motion.div>
            )}

            {/* PHASE 2 & 3: CONVERSATION WITH PRODUCT CARD & HANDOFF */}
            {phase === 2 && (
              <motion.div
                key="phase-chat"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col h-full overflow-hidden"
              >
                {/* AI Silence Indicator when Operator Takes Over */}
                {activeStepTab >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-amber-500/15 border-b border-amber-500/20 px-3.5 py-1.5 flex items-center justify-between text-[11px] text-amber-700 dark:text-amber-300"
                  >
                    <span className="flex items-center gap-1.5 font-bold">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      {isEn ? 'AI Silenced | Operator Takeover Active' : 'سکوت کامل هوش مصنوعی | اپراتور متصل شد'}
                    </span>
                    <span className="text-[10px] bg-amber-500/20 px-2 py-0.5 rounded-full font-mono">
                      Takeover: ON
                    </span>
                  </motion.div>
                )}

                {/* Messages Stream */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-3.5 space-y-3.5 text-slate-800">
                  {messages.map((msg) => (
                    <div key={msg.id} className="space-y-2">
                      {/* System Notice */}
                      {msg.sender === 'system' ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="my-2 p-2 bg-indigo-50 border border-indigo-200/80 rounded-xl text-center text-[11px] text-indigo-700 font-medium flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <ShieldCheck size={14} className="text-primary shrink-0" />
                          <span>{msg.text}</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          className={`flex flex-col ${
                            msg.sender === 'user' ? 'items-end' : 'items-start'
                          }`}
                        >
                          {/* Sender Label for Operator */}
                          {msg.sender === 'operator' && (
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-600 mb-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              <span>{t('demo_operator_name')}</span>
                            </div>
                          )}

                          {/* Message Bubble */}
                          <div
                            className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-xs md:text-sm leading-relaxed shadow-sm ${
                              msg.sender === 'user'
                                ? 'bg-gradient-to-r from-primary to-secondary text-white rounded-br-none'
                                : msg.sender === 'operator'
                                ? 'bg-amber-50 border border-amber-200 text-slate-900 rounded-bl-none'
                                : 'bg-white border border-slate-200 text-slate-900 rounded-bl-none'
                            }`}
                          >
                            <p className="whitespace-pre-wrap">{msg.text}</p>

                            {/* INTERACTIVE WOOCOMMERCE PRODUCT CARD */}
                            {msg.product && (
                              <motion.div
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-3 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-md text-start"
                              >
                                <div className="relative">
                                  <img
                                    src={msg.product.imageUrl}
                                    alt={msg.product.title}
                                    className="w-full h-32 object-cover"
                                  />
                                  <span className="absolute top-2 start-2 px-2 py-0.5 rounded-full bg-red-500 text-white text-[10px] font-bold shadow">
                                    {msg.product.badge}
                                  </span>
                                  <span className="absolute bottom-2 start-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px]">
                                    {msg.product.stock}
                                  </span>
                                </div>

                                <div className="p-3">
                                  <h4 className="font-bold text-xs text-slate-900 mb-1 leading-snug">
                                    {msg.product.title}
                                  </h4>
                                  
                                  <div className="flex items-baseline gap-2 mb-3">
                                    <span className="text-sm font-extrabold text-emerald-600">
                                      {msg.product.price}
                                    </span>
                                    <span className="text-[11px] text-slate-400 line-through">
                                      {msg.product.oldPrice}
                                    </span>
                                  </div>

                                  <button
                                    type="button"
                                    onClick={handleAddToCart}
                                    disabled={cartButtonState === 'added'}
                                    className={`w-full py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-300 shadow-sm ${
                                      cartButtonState === 'added'
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white'
                                    }`}
                                  >
                                    {cartButtonState === 'loading' ? (
                                      <>
                                        <Loader2 size={13} className="animate-spin" />
                                        <span>{isEn ? 'Adding to Cart...' : 'در حال افزودن...'}</span>
                                      </>
                                    ) : cartButtonState === 'added' ? (
                                      <>
                                        <Check size={14} strokeWidth={3} />
                                        <span>{t('demo_prod_added_btn')}</span>
                                      </>
                                    ) : (
                                      <>
                                        <ShoppingCart size={13} />
                                        <span>{t('demo_prod_add_btn')}</span>
                                      </>
                                    )}
                                  </button>
                                </div>
                              </motion.div>
                            )}
                          </div>

                          <span className="text-[10px] text-slate-400 mt-1 px-1 font-mono">
                            {msg.timestamp}
                          </span>
                        </motion.div>
                      )}
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-2 bg-white border border-slate-200 rounded-xl w-max text-xs text-slate-500"
                    >
                      {typingSender === 'operator' ? (
                        <User size={13} className="text-amber-500 animate-pulse" />
                      ) : (
                        <Bot size={13} className="text-primary animate-pulse" />
                      )}
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Footer Input Bar */}
                <footer className="p-2.5 bg-white border-t border-slate-200">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={inputText}
                      placeholder={t('mockup_placeholder')}
                      className="flex-1 h-10 px-3 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-800 focus:outline-none"
                    />
                    <button
                      type="button"
                      disabled={!inputText.trim()}
                      className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center disabled:opacity-40 shadow-sm"
                    >
                      {isEn ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                    </button>
                  </div>
                  <div className="text-center text-[10px] text-slate-400 mt-1.5">
                    {t('mockup_powered_by')}
                  </div>
                </footer>
              </motion.div>
            )}

            {/* PHASE 4: CSAT RATING & SURVEY */}
            {phase === 3 && (
              <motion.div
                key="phase-csat"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="flex-1 flex flex-col justify-center p-6 text-slate-800"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center">
                  <div className="w-14 h-14 rounded-full bg-amber-500/10 text-amber-500 mx-auto mb-3 flex items-center justify-center">
                    <Star size={30} fill="currentColor" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {t('demo_csat_title')}
                  </h3>
                  <p className="text-xs text-slate-500 mb-5">
                    {isEn ? 'Your feedback helps improve human & AI response quality.' : 'نظر شما کیفیت پاسخگویی هوش مصنوعی و کارشناسان را ارتقا می‌دهد.'}
                  </p>

                  {/* Golden Stars */}
                  <div className="flex justify-center gap-2 mb-6" dir="ltr">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setCsatRating(star)}
                        className="transition-transform hover:scale-125 focus:outline-none"
                      >
                        <Star
                          size={28}
                          className={
                            star <= csatRating
                              ? 'text-amber-400 fill-amber-400 drop-shadow-sm'
                              : 'text-slate-300'
                          }
                        />
                      </button>
                    ))}
                  </div>

                  {csatSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-bold text-emerald-700"
                    >
                      {t('demo_csat_thanks')}
                    </motion.div>
                  ) : (
                    <button
                      type="button"
                      onClick={handleManualSubmitCsat}
                      className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl text-xs font-bold shadow-md shadow-amber-500/25 hover:opacity-95 transition-opacity"
                    >
                      {t('demo_csat_btn')}
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={resetDemo}
                    className="mt-4 text-[11px] text-slate-500 hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <RotateCcw size={12} />
                    <span>{t('demo_restart_btn')}</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};
