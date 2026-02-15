import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Headset } from 'lucide-react';

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
  const [inputText, setInputText] = useState('');

  const scrollRef = useRef<HTMLDivElement>(null);

  const scenario = [
    { type: 'bot', text: 'سلام! 👋 به فروشگاه ما خوش آمدید. چطور می‌توانم کمکتان کنم؟', delay: 500 },
    { type: 'user', text: 'پیگیری سفارش', delay: 2000 },
    { type: 'bot', text: 'حتما! لطفا شماره سفارش خود را وارد کنید.', delay: 1000 },
    { type: 'user', text: '#1234', delay: 1500 },
    { type: 'bot', text: 'در حال بررسی وضعیت سفارش #1234...', delay: 800 },
    { type: 'bot', text: 'خبر خوب! سفارش شما **در حال ارسال** است و تا ساعت ۵ امروز می‌رسد.', delay: 1500 },
    { type: 'user', text: 'اگر سایز مناسب نبود می‌توانم مرجوع کنم؟', delay: 3000 },
    {
      type: 'bot',
      text: 'بله، ما ضمانت بازگشت ۳۰ روزه داریم. می‌توانید از طریق داشبورد حساب کاربری خود درخواست مرجوعی دهید.',
      delay: 2000,
    },
  ];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const runScenario = async () => {
      if (step < scenario.length) {
        const currentAction = scenario[step];

        if (currentAction.type === 'bot') {
          setIsTyping(true);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setIsTyping(false);
        } else {
          const chars = currentAction.text.split('');
          for (let i = 0; i < chars.length; i += 1) {
            setInputText((prev) => prev + chars[i]);
            await new Promise((resolve) => setTimeout(resolve, 50));
          }
          await new Promise((resolve) => setTimeout(resolve, 300));
          setInputText('');
        }

        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            text: currentAction.text,
            sender: currentAction.type as 'user' | 'bot',
            timestamp: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
          },
        ]);

        timeout = setTimeout(() => {
          setStep((prev) => prev + 1);
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
    setInputText('');
    setIsTyping(false);
  };

  return (
    <section className="chatnegar-window chatnegar-window--full mx-auto" role="dialog" aria-label="پنجره چت" aria-hidden="false" dir="rtl">
      <header className="chatnegar-header" style={{ color: 'rgb(255, 255, 255)' }}>
        <div className="chatnegar-agent">
          <div className="chatnegar-agent-avatar" aria-hidden="true">
            <Headset />
          </div>
          <div className="chatnegar-agent-info">
            <strong className="chatnegar-agent-name">تیم پشتیبانی</strong>
            <span className="chatnegar-agent-title">پشتیبانی آنلاین</span>
            <span className="chatnegar-agent-status">
              <i className="chatnegar-status-dot" aria-hidden="true" />
              آنلاین
            </span>
          </div>
        </div>

        <div className="chatnegar-header-actions">
          <button type="button" className="chatnegar-menu-toggle" aria-label="منو" hidden>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M5 7h14M5 12h14M5 17h10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button type="button" className="chatnegar-close-window" aria-label="بستن" title="شروع مجدد" onClick={restartDemo}>
            ×
          </button>
        </div>

        <div className="chatnegar-menu" hidden>
          <button type="button" className="chatnegar-clear-chat">پاک کردن گفتگو</button>
          <button type="button" className="chatnegar-end-chat">پایان گفتگو</button>
        </div>
      </header>

      <div ref={scrollRef} className="chatnegar-messages" role="log" aria-live="polite">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`chatnegar-msg ${msg.sender === 'user' ? 'chatnegar-msg--user' : 'chatnegar-msg--assistant'}`}
            >
              <div className="chatnegar-msg-content">{msg.text}</div>
              <div className="chatnegar-msg-meta">{msg.timestamp}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="chatnegar-typing" hidden={!isTyping} aria-hidden={!isTyping}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="chatnegar-quick-replies" hidden></div>

      <div className="chatnegar-end-popup" hidden>
        <div className="chatnegar-end-popup-backdrop"></div>
        <div className="chatnegar-end-popup-dialog" role="dialog" aria-label="پایان گفتگو">
          <button type="button" className="chatnegar-end-popup-close" aria-label="بستن">
            ×
          </button>
        </div>
      </div>

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

          <textarea
            className="chatnegar-input"
            rows={1}
            readOnly
            value={inputText}
            placeholder="پیام خود را بنویسید..."
          ></textarea>

          <button type="button" className="chatnegar-send" aria-label="Send message" disabled={!inputText.trim()}>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 12h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>

        <div className="chatnegar-emoji-panel" hidden></div>
        <div className="chatnegar-char-count" hidden>
          0/500
        </div>
        <div className="chatnegar-powered-by">قدرت گرفته از چتنگار</div>
      </footer>
    </section>
  );
};
