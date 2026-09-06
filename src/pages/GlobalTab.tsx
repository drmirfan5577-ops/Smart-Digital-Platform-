import { Users, Globe, MessageSquare, TrendingUp } from 'lucide-react';

const COMMUNITIES = [
  { id: '1', name: 'Islamic Community', nameUrdu: 'اسلامی برادری', members: '2.4M', icon: '☪️', color: '#065f46', desc: 'Faith, Unity, Brotherhood' },
  { id: '2', name: 'Tech & Innovation', nameUrdu: 'ٹیک اور اختراع', members: '890K', icon: '💻', color: '#1d4ed8', desc: 'Latest in Technology' },
  { id: '3', name: 'Family Circle', nameUrdu: 'خاندانی حلقہ', members: '1.2M', icon: '👨‍👩‍👧‍👦', color: '#c2410c', desc: 'Global Family Platform' },
  { id: '4', name: 'News & Current Affairs', nameUrdu: 'خبریں', members: '3.1M', icon: '📰', color: '#7c3aed', desc: 'World News Updates' },
  { id: '5', name: 'Education Hub', nameUrdu: 'تعلیمی مرکز', members: '560K', icon: '📚', color: '#0369a1', desc: 'Learning Together' },
  { id: '6', name: 'Health & Wellness', nameUrdu: 'صحت', members: '430K', icon: '🏥', color: '#dc2626', desc: 'Your Health Matters' },
];

const TRENDING = [
  { tag: '#ESOneWorld', posts: '45.2K' },
  { tag: '#UniOrbi', posts: '23.1K' },
  { tag: '#IslamicContent', posts: '89.4K' },
  { tag: '#GlobalFamily', posts: '12.8K' },
  { tag: '#DrIrfan', posts: '8.6K' },
];

const GlobalTab: React.FC = () => {
  return (
    <div className="fade-in pb-4">
      <div className="px-4 py-3">
        <h1 className="text-lg font-bold text-gray-800">🌍 Global</h1>
        <p className="text-xs text-gray-500 mt-0.5">Groups, Communities & World Connect</p>
      </div>

      {/* Stats */}
      <div className="px-4 mb-4">
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: <Users size={16} />, label: 'Members', value: '8.2M', color: '#1d4ed8' },
            { icon: <Globe size={16} />, label: 'Countries', value: '142', color: '#059669' },
            { icon: <MessageSquare size={16} />, label: 'Groups', value: '34K', color: '#7c3aed' },
          ].map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-3 rounded-2xl"
              style={{
                background: `${s.color}10`,
                border: `1px solid ${s.color}20`,
              }}
            >
              <div style={{ color: s.color }}>{s.icon}</div>
              <span className="text-base font-bold mt-1" style={{ color: s.color }}>{s.value}</span>
              <span className="text-[9px] text-gray-500">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trending */}
      <div className="px-4 mb-4">
        <div
          className="rounded-2xl p-3"
          style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.7)' }}
        >
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={14} className="text-orange-500" />
            <span className="text-xs font-bold text-gray-700">Trending Topics</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {TRENDING.map((t) => (
              <div
                key={t.tag}
                className="px-2 py-1 rounded-full flex items-center gap-1"
                style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', border: '1px solid #bfdbfe' }}
              >
                <span className="text-xs font-semibold text-blue-700">{t.tag}</span>
                <span className="text-[9px] text-blue-400">{t.posts}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Communities */}
      <div className="px-4">
        <h2 className="text-sm font-bold text-gray-700 mb-3">Featured Communities</h2>
        <div className="space-y-2">
          {COMMUNITIES.map((c) => (
            <div
              key={c.id}
              className="flex items-center gap-3 p-3 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.75)',
                border: '1px solid rgba(255,255,255,0.8)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: `${c.color}15`, border: `1px solid ${c.color}25` }}
              >
                {c.icon}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-gray-800">{c.name}</p>
                <p className="text-[9px] text-gray-400 font-urdu">{c.nameUrdu}</p>
                <p className="text-xs text-gray-500 mt-0.5">{c.desc}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold" style={{ color: c.color }}>{c.members}</p>
                <p className="text-[9px] text-gray-400">members</p>
                <button
                  className="mt-1 px-2 py-0.5 rounded-full text-[9px] font-semibold text-white"
                  style={{ background: c.color }}
                >
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalTab;
