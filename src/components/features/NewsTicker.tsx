import { useState } from 'react';

const NEWS_ITEMS = [
  "📰 Global markets rise amid tech advancements | عالمی منڈیاں ترقی کی راہ پر",
  "🌍 ESOneWorld: Neither a Global Village nor a Global Community, it's a Global Family Platform",
  "📡 Al Jazeera: Major developments in international affairs | بین الاقوامی امور میں اہم پیش رفت",
  "🕌 Prayer Times Updated | نماز کے اوقات اپ ڈیٹ ہو گئے",
  "⚡ UniOrbi Smart Platform - Your All-in-One Digital Hub",
  "📖 Daily Quran | آج کی آیت: بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  "🌟 ESOneWorld - Connected with the World, Rooted in Faith",
];

const NewsTicker: React.FC = () => {
  const [visible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="fixed z-40 overflow-hidden"
      style={{
        bottom: 'var(--bottom-nav-height)',
        left: 0,
        right: 0,
        maxWidth: 430,
        margin: '0 auto',
        background: 'linear-gradient(90deg, #1e40af, #0891b2, #059669, #1e40af)',
        height: 28,
      }}
    >
      <div className="flex items-center h-full overflow-hidden">
        <div className="px-2 text-white text-[10px] font-bold whitespace-nowrap border-r border-white/30">
          LIVE
        </div>
        <div className="overflow-hidden flex-1">
          <div className="news-ticker text-white text-[11px] font-medium py-0 leading-none flex items-center h-full">
            {NEWS_ITEMS.join('   ◆   ')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
