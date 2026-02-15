import React from 'react';
import { Section } from './ui/Section';
import { Terminal } from 'lucide-react';

const codeSnippet = `// Customize the system prompt dynamically
add_filter('chatnegar/system_prompt', function($prompt, $session) {
    if (is_product()) {
        $prompt .= "\\nFocus on product support.";
    }
    return $prompt;
}, 10, 2);

// Hook into responses
add_action('chatnegar/response_received', function($res, $id) {
    // Send to CRM
}, 10, 2);`;

export const DevSection: React.FC = () => {
  return (
    <Section id="developers" className="bg-[#0A0914]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
           <div className="flex items-center gap-3 mb-6 text-accent">
               <Terminal size={24} />
               <span className="font-mono font-bold">دوست‌دار توسعه‌دهنده</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">ساخته شده برای توسعه‌دهندگانی که کنترل کامل می‌خواهند</h2>
           <p className="text-text-muted mb-8 text-lg">
             هوک‌ها و فیلترهای گسترده به شما امکان می‌دهند چت‌نگار را عمیقاً با جریان‌های کاری اختصاصی خود ادغام کنید.
           </p>
           
           <div className="flex flex-wrap gap-2">
             {['chatnegar/system_prompt', 'chatnegar/message_sent', 'chatnegar/api_response'].map(hook => (
                <span key={hook} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-purple-300">
                    {hook}
                </span>
             ))}
             <span className="px-3 py-1 text-xs font-mono text-text-muted">+ ۱۲ مورد دیگر</span>
           </div>
        </div>

        <div className="relative group order-1 md:order-2 w-full max-w-[85vw] md:max-w-full mx-auto" dir="ltr">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-3xl -z-10 group-hover:bg-primary/30 transition-colors"></div>
            <div className="bg-[#1E1E1E] rounded-xl border border-white/10 p-4 shadow-2xl font-mono text-sm overflow-hidden text-left">
                <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <pre className="text-slate-300 overflow-x-auto p-1">
                    <code>{codeSnippet}</code>
                </pre>
            </div>
        </div>
      </div>
    </Section>
  );
};