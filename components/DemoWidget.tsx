import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MoreVertical, RefreshCw, ArrowLeft } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export const DemoWidget: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState(0);
  const [inputText, setInputText] = useState("");
  
  const scrollRef = useRef<HTMLDivElement>(null);

  const scenario = [
    { type: 'bot', text: 'سلام! 👋 به فروشگاه ما خوش آمدید. چطور می‌توانم کمکتان کنم؟', delay: 500 },
    { type: 'user', text: 'پیگیری سفارش', delay: 2000 },
    { type: 'bot', text: 'حتما! لطفا شماره سفارش خود را وارد کنید.', delay: 1000 },
    { type: 'user', text: '#1234', delay: 1500 },
    { type: 'bot', text: 'در حال بررسی وضعیت سفارش #1234...', delay: 800 },
    { type: 'bot', text: 'خبر خوب! سفارش شما **در حال ارسال** است و تا ساعت ۵ امروز می‌رسد.', delay: 1500 },
    { type: 'user', text: 'اگر سایز مناسب نبود می‌توانم مرجوع کنم؟', delay: 3000 },
    { type: 'bot', text: 'بله، ما ضمانت بازگشت ۳۰ روزه داریم. می‌توانید از طریق داشبورد حساب کاربری خود درخواست مرجوعی دهید.', delay: 2000 },
  ];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const runScenario = async () => {
      if (step < scenario.length) {
        const currentAction = scenario[step];
        
        // Simulate typing delay for bot
        if (currentAction.type === 'bot') {
            setIsTyping(true);
            await new Promise(r => setTimeout(r, 1000)); // typing time
            setIsTyping(false);
        } else {
             // Simulate user typing into input
             const chars = currentAction.text.split('');
             for (let i = 0; i < chars.length; i++) {
                setInputText(prev => prev + chars[i]);
                await new Promise(r => setTimeout(r, 50));
             }
             await new Promise(r => setTimeout(r, 300));
             setInputText("");
        }

        setMessages(prev => [...prev, {
            id: Date.now(),
            text: currentAction.text,
            sender: currentAction.type as 'user' | 'bot',
            timestamp: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })
        }]);

        timeout = setTimeout(() => {
          setStep(s => s + 1);
        }, currentAction.delay);
      }
    };

    runScenario();

    return () => clearTimeout(timeout);
  }, [step]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const restartDemo = () => {
      setMessages([]);
      setStep(0);
      setInputText("");
  };

  return (
    <div className="relative w-full max-w-sm mx-auto bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px] font-sans" dir="rtl">
      {/* Widget Header */}
      <div className="bg-primary-gradient p-4 flex items-center justify-between text-white shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg">
                🤖
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-primary rounded-full"></span>
          </div>
          <div>
            <h3 className="font-bold text-sm">دستیار پشتیبانی</h3>
            <p className="text-xs text-white/80">آنلاین | پاسخگویی آنی</p>
          </div>
        </div>
        <div className="flex gap-2">
            <button onClick={restartDemo} className="p-1 hover:bg-white/10 rounded" title="شروع مجدد"><RefreshCw size={18} /></button>
            <MoreVertical size={18} className="cursor-pointer opacity-80" />
            <X size={18} className="cursor-pointer opacity-80" />
        </div>
      </div>

      {/* Messages Area */}
      <div ref={scrollRef} className="flex-1 bg-[#1A1932] p-4 overflow-y-auto space-y-4">
        <div className="text-center text-xs text-text-muted my-2">امروز</div>
        
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              // In RTL: justify-start is Right (User), justify-end is Left (Bot)
              // We want User on Left (end) and Bot on Right (start) like standard RTL messengers? 
              // Wait, in Telegram/WhatsApp RTL: "Me" is Right, "Other" is Left.
              // So User (Me) -> Right (Start). Bot (Other) -> Left (End).
              className={`flex ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm ${
                msg.sender === 'user' 
                  ? 'bg-primary text-white rounded-tr-none' // User on Right, tail on top-right
                  : 'bg-white/10 text-slate-200 rounded-tl-none border border-white/5' // Bot on Left, tail on top-left
              }`}>
                {msg.text}
                <div className={`text-[10px] mt-1 text-left opacity-60`}>
                    {msg.timestamp}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-end">
            <div className="bg-white/10 text-slate-200 rounded-2xl rounded-tl-none p-4 flex gap-1 items-center h-10 w-16">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-3 bg-surface border-t border-white/10 shrink-0">
          
        {/* Quick Replies (Simulated) */}
        {messages.length === 1 && (
            <div className="flex gap-2 mb-3 overflow-x-auto pb-1 no-scrollbar">
                <button className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-primary hover:bg-primary/10 transition-colors">پیگیری سفارش</button>
                <button className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-primary hover:bg-primary/10 transition-colors">قوانین مرجوعی</button>
            </div>
        )}

        <div className="flex items-center gap-2 bg-[#0F0E17] border border-white/10 rounded-xl px-3 py-2 focus-within:border-primary/50 transition-colors">
          <input 
            type="text" 
            value={inputText}
            readOnly
            placeholder="پیامی بنویسید..." 
            className="bg-transparent flex-1 outline-none text-sm text-white placeholder:text-text-muted text-right"
          />
          <button className="p-2 bg-primary rounded-lg text-white shadow-lg hover:bg-primary-dark transition-colors rotate-180">
            <Send size={16} />
          </button>
        </div>
        <div className="text-center mt-2 text-[10px] text-text-muted">
            قدرت گرفته از چت‌نگار
        </div>
      </div>
    </div>
  );
};