import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  PhoneCall, 
  CheckCircle2, 
  Archive, 
  Headset, 
  Bot, 
  User, 
  Lock, 
  Unlock, 
  Send, 
  Phone, 
  MapPin, 
  Globe, 
  ShoppingCart, 
  Sparkles, 
  ArrowRight,
  ArrowLeft,
  Shield,
  Layers
} from 'lucide-react';
import { Section } from './ui/Section';
import { useLanguage } from './LanguageContext';

export const AdminShowcase: React.FC = () => {
  const { isEn, t } = useLanguage();

  // Active queue tab: 'needs_operator' | 'phone_consult' | 'successful_sale' | 'resolved'
  const [activeTab, setActiveTab] = useState<'needs_operator' | 'phone_consult' | 'successful_sale' | 'resolved'>('needs_operator');
  
  // Operator Takeover state (true = human operator took over, AI muted)
  const [isTakeover, setIsTakeover] = useState(true);
  
  // Tag lock state
  const [isTagLocked, setIsTagLocked] = useState(false);

  // Quick reply input
  const [adminReply, setAdminReply] = useState('');
  const [messagesList, setMessagesList] = useState([
    {
      id: 1,
      sender: 'system',
      text: isEn ? 'Pre-chat intake: Amirreza (09123456789) verified.' : 'فرم پیش از چت: امیررضا (۰۹۱۲۳۴۵۶۷۸۹) تایید شد.',
      time: '14:20',
    },
    {
      id: 2,
      sender: 'user',
      text: isEn ? 'What lightweight running shoe under 2M do you suggest?' : 'برای هدیه تولد یه کفش ورزشی سبک تا ۲ میلیون چی پیشنهاد میدی؟',
      time: '14:21',
    },
    {
      id: 3,
      sender: 'bot',
      text: isEn ? 'Rendered Nike Flyknit Product Card (Price: 1,850,000 T) -> Customer added to cart!' : 'کارت خرید کفش نایک فلاینیت رندر شد -> مشتری به سبد خرید افزود!',
      time: '14:21',
    },
    {
      id: 4,
      sender: 'user',
      text: isEn ? 'Do you have express courier for today in Tehran? I want to speak to support.' : 'امکان ارسال فوری با پیک برای امروز تهران دارید؟ میخوام با پشتیبان صحبت کنم.',
      time: '14:22',
    },
  ]);

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminReply.trim()) return;
    setMessagesList((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: 'operator',
        text: adminReply,
        time: new Date().toLocaleTimeString(isEn ? 'en-US' : 'fa-IR', { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setAdminReply('');
  };

  const handleCannedReply = (text: string) => {
    setAdminReply(text);
  };

  return (
    <Section id="admin-console" className="bg-[#0A0914] relative overflow-hidden py-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-accent mb-4">
          <Sparkles size={14} />
          <span>{t('admin_badge')}</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-5 leading-[1.4] md:leading-[1.5]">
          {t('admin_title')}
        </h2>
        <p className="text-base md:text-lg text-text-muted leading-[1.8]">
          {t('admin_subtitle')}
        </p>
      </div>

      {/* Admin Window Frame */}
      <div className="max-w-6xl mx-auto bg-[#141324] border border-white/10 rounded-3xl shadow-2xl overflow-hidden text-start" dir={isEn ? 'ltr' : 'rtl'}>
        {/* WordPress Admin Top Bar */}
        <div className="bg-[#1C1B30] border-b border-white/10 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5" dir="ltr">
              <span className="w-3 h-3 rounded-full bg-red-500/70 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/70 inline-block" />
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-2 text-slate-300 font-medium">
              <span className="bg-primary/20 text-primary px-2 py-0.5 rounded font-mono font-bold">WP 6.7</span>
              <span>پیشخوان وردپرس &gt; گفتگوی زنده چت‌نگار ۲.۰</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              وب‌سوکت: فعال و متصل
            </span>
            <span className="bg-white/5 px-2.5 py-1 rounded-md border border-white/5 font-mono">
              DB: Local MySQL
            </span>
          </div>
        </div>

        {/* Console Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          {/* Left Column: Queue Tabs & Conversations List (3 cols) */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-e border-white/10 bg-[#100F1F] p-4 flex flex-col">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              {isEn ? 'Conversation Queues' : 'صف‌های هوشمند گفتگو'}
            </h4>

            {/* Queue Filter Tabs */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button
                type="button"
                onClick={() => setActiveTab('needs_operator')}
                className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'needs_operator'
                    ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <Headset size={14} />
                  <span>{t('admin_tab_needs_operator')}</span>
                </div>
                <span className="px-1.5 py-0.2 rounded-full bg-rose-500 text-white text-[10px]">2</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('phone_consult')}
                className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'phone_consult'
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <PhoneCall size={14} />
                  <span>{t('admin_tab_phone_consult')}</span>
                </div>
                <span className="px-1.5 py-0.2 rounded-full bg-amber-500 text-slate-900 text-[10px]">1</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('successful_sale')}
                className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'successful_sale'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <ShoppingCart size={14} />
                  <span>{t('admin_tab_successful_sale')}</span>
                </div>
                <span className="px-1.5 py-0.2 rounded-full bg-emerald-500 text-white text-[10px]">5</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('resolved')}
                className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'resolved'
                    ? 'bg-slate-500/20 text-slate-300 border border-slate-500/30'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} />
                  <span>{t('admin_tab_resolved')}</span>
                </div>
                <span className="px-1.5 py-0.2 rounded-full bg-slate-700 text-slate-300 text-[10px]">14</span>
              </button>
            </div>

            {/* Conversation Items in Active Queue */}
            <div className="flex-1 space-y-2 overflow-y-auto">
              {/* Item 1 (Active) */}
              <div className="p-3 rounded-2xl bg-primary/15 border border-primary/30 cursor-pointer shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white text-xs">امیررضا صابری</span>
                  <span className="text-[10px] text-primary font-mono">14:22</span>
                </div>
                <p className="text-[11px] text-slate-300 truncate mb-2">
                  امکان ارسال فوری با پیک برای امروز تهران دارید؟
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[10px] text-rose-400 font-bold bg-rose-500/10 px-2 py-0.5 rounded-md">
                    نیاز به کارشناس
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold">سبد: ۱.۸۵M</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 cursor-pointer transition-colors opacity-70">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-200 text-xs">سارا کاظمی</span>
                  <span className="text-[10px] text-slate-400 font-mono">14:15</span>
                </div>
                <p className="text-[11px] text-slate-400 truncate mb-2">
                  کد تخفیف اولین خرید اعمال نشد...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md font-medium">
                    مشاوره تخفیف
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">0935***1200</span>
                </div>
              </div>
            </div>

            {/* Quick Status Note */}
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-400 flex items-center gap-2">
              <Shield size={14} className="text-secondary shrink-0" />
              <span>همه داده‌ها در دیتابیس لوکال سایت شما ثبت شده است.</span>
            </div>
          </div>

          {/* Middle Column: Active Chat Stream & Takeover Controls (5 cols) */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-e border-white/10 p-4 flex flex-col justify-between bg-[#141324]">
            {/* Chat Header & Takeover Switcher */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>امیررضا صابری</span>
                    <span className="text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-mono">
                      خریدار آنلاین
                    </span>
                  </h3>
                  <div className="text-[11px] mt-0.5">
                    {isTakeover ? (
                      <span className="text-amber-400 font-bold inline-flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        {t('admin_status_operator_active')}
                      </span>
                    ) : (
                      <span className="text-emerald-400 inline-flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {t('admin_status_ai_active')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Takeover vs Release Buttons */}
                <div className="flex items-center gap-2">
                  {isTakeover ? (
                    <button
                      type="button"
                      onClick={() => setIsTakeover(false)}
                      className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-white/10 flex items-center gap-1.5 transition-all shadow-sm"
                    >
                      <Bot size={13} className="text-primary" />
                      <span>{t('admin_release_btn')}</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsTakeover(true)}
                      className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-amber-500/20"
                    >
                      <Headset size={13} />
                      <span>{t('admin_takeover_btn')}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Chat Message Stream */}
              <div className="space-y-3 h-[280px] overflow-y-auto pr-1">
                {messagesList.map((m) => (
                  <div key={m.id} className="text-xs">
                    {m.sender === 'system' ? (
                      <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-center text-[11px] text-slate-400 font-mono">
                        {m.text}
                      </div>
                    ) : (
                      <div
                        className={`flex flex-col ${
                          m.sender === 'user' ? 'items-start' : 'items-end'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1 text-[10px] text-slate-400">
                          <span>
                            {m.sender === 'user'
                              ? 'کاربر'
                              : m.sender === 'operator'
                              ? 'شما (اپراتور)'
                              : 'هوش مصنوعی ۲.۰'}
                          </span>
                          <span className="font-mono">{m.time}</span>
                        </div>
                        <div
                          className={`p-3 rounded-2xl max-w-[90%] leading-relaxed ${
                            m.sender === 'user'
                              ? 'bg-white/10 text-white rounded-tl-none'
                              : m.sender === 'operator'
                              ? 'bg-amber-500/20 border border-amber-500/30 text-amber-200 rounded-tr-none'
                              : 'bg-primary/20 border border-primary/30 text-indigo-100 rounded-tr-none'
                          }`}
                        >
                          {m.text}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Canned Chips & Reply Box */}
            <div className="mt-4 pt-3 border-t border-white/10">
              <div className="flex items-center gap-1.5 mb-2 overflow-x-auto pb-1 text-[10px]">
                <span className="text-slate-400 shrink-0">پاسخ سریع:</span>
                <button
                  type="button"
                  onClick={() => handleCannedReply('سلام! بله، ارسال با پیک ویژه ظرف ۳ ساعت انجام میشه.')}
                  className="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5 shrink-0"
                >
                  ارسال ۳ ساعته پیک 🛵
                </button>
                <button
                  type="button"
                  onClick={() => handleCannedReply('همین الان باهاتون تماس میگیرم تا هماهنگ کنیم.')}
                  className="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5 shrink-0"
                >
                  تماس تلفنی فوری 📞
                </button>
              </div>

              <form onSubmit={handleSendReply} className="flex gap-2">
                <input
                  type="text"
                  value={adminReply}
                  onChange={(e) => setAdminReply(e.target.value)}
                  placeholder={t('admin_quick_reply_placeholder')}
                  className="flex-1 h-10 px-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  disabled={!adminReply.trim()}
                  className="h-10 px-4 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs font-bold flex items-center gap-1.5 disabled:opacity-40 transition-all shadow-sm"
                >
                  <span>{t('admin_send_btn')}</span>
                  {isEn ? <ArrowRight size={13} /> : <ArrowLeft size={13} />}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Customer Lead Card & Smart AI Tags (3 cols) */}
          <div className="lg:col-span-3 p-4 bg-[#100F1F] flex flex-col justify-between">
            <div>
              {/* Lead Dossier */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <User size={14} className="text-primary" />
                    <span>{t('admin_lead_card_title')}</span>
                  </h4>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-mono font-bold">
                    لید تاییدشده
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div>
                    <span className="text-slate-400 text-[11px] block">{t('admin_lead_name_label')}</span>
                    <strong className="text-white text-xs">امیررضا صابری</strong>
                  </div>

                  <div>
                    <span className="text-slate-400 text-[11px] block">{t('admin_lead_phone_label')}</span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-emerald-400 font-mono font-bold text-xs" dir="ltr">
                        09123456789
                      </span>
                      <a
                        href="tel:09123456789"
                        className="inline-flex items-center gap-1 text-[10px] bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 px-2 py-1 rounded-lg font-bold border border-emerald-500/30 transition-colors"
                      >
                        <Phone size={10} />
                        <span>{t('admin_lead_call_action')}</span>
                      </a>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5 space-y-1 text-[11px] text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-slate-500 shrink-0" />
                      <span>{t('admin_lead_location_val')}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Globe size={12} className="text-slate-500 shrink-0" />
                      <span className="truncate">{t('admin_lead_page_val')}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <ShoppingCart size={12} className="shrink-0" />
                      <span>{t('admin_lead_cart_val')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Smart Intent Tags */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Sparkles size={13} className="text-amber-400" />
                    <span>{t('admin_tags_title')}</span>
                  </h4>
                  <button
                    type="button"
                    onClick={() => setIsTagLocked(!isTagLocked)}
                    className={`p-1 rounded-md transition-colors ${
                      isTagLocked ? 'bg-amber-500/20 text-amber-400' : 'bg-white/5 text-slate-400'
                    }`}
                    title={t('admin_tag_lock')}
                  >
                    {isTagLocked ? <Lock size={12} /> : <Unlock size={12} />}
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className="px-2 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/20 text-indigo-300 text-[10px] font-medium font-mono">
                    {t('admin_tag_1')}
                  </span>
                  <span className="px-2 py-1 rounded-lg bg-rose-500/15 border border-rose-500/20 text-rose-300 text-[10px] font-medium font-mono">
                    {t('admin_tag_2')}
                  </span>
                  <span className="px-2 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/20 text-emerald-300 text-[10px] font-medium font-mono">
                    {t('admin_tag_3')}
                  </span>
                </div>

                <div className="text-[10px] text-slate-400">
                  تشخیص لایه اول با <span className="text-emerald-400 font-bold">۰ مصرف توکن</span>
                </div>
              </div>
            </div>

            {/* Bottom 2-Layer Badge */}
            <div className="mt-4 p-2.5 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-[11px] text-slate-300 flex items-center gap-2">
              <Layers size={14} className="text-accent shrink-0" />
              <span>دسترسی مستقیم از پیشخوان وردپرس بدون خروج به سرویس‌های متفرقه</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
