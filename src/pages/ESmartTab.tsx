import { ExternalLink, Mail, Globe } from 'lucide-react';

const UNIORBI_APPS = [
  { id: 'unifeel', name: 'UniFeel', icon: '💖', color: '#db2777', desc: 'Emotions & Wellness', url: 'https://www.uniorbi.com' },
  { id: 'uniedge', name: 'UniEdge', icon: '⚡', color: '#0891b2', desc: 'Edge Computing', url: 'https://www.uniorbi.com' },
  { id: 'uniweb', name: 'UniWeb', icon: '🌐', color: '#1d4ed8', desc: 'Web Solutions', url: 'https://www.uniorbi.com' },
  { id: 'unihome', name: 'UniHome', icon: '🏠', color: '#c2410c', desc: 'Smart Home', url: 'https://www.uniorbi.com' },
  { id: 'unihost', name: 'UniHost', icon: '🖥️', color: '#7c3aed', desc: 'Hosting Services', url: 'https://www.uniorbi.com' },
  { id: 'unimail', name: 'UniMail', icon: '📧', color: '#065f46', desc: 'Email Platform', url: 'https://www.uniorbi.com' },
  { id: 'uninews', name: 'UniNews', icon: '📰', color: '#92400e', desc: 'News Feed', url: 'https://www.uniorbi.com' },
  { id: 'uniflow', name: 'UniFlow', icon: '🔄', color: '#0369a1', desc: 'Workflow Automation', url: 'https://www.uniorbi.com' },
];

const INTEGRATIONS = [
  { name: 'YouTube', icon: '▶️', color: '#ff0000' },
  { name: 'WhatsApp', icon: '💬', color: '#25d366' },
  { name: 'Facebook', icon: '📘', color: '#1877f2' },
  { name: 'Twitter X', icon: '🐦', color: '#000000' },
  { name: 'TikTok', icon: '🎵', color: '#010101' },
  { name: 'Instagram', icon: '📸', color: '#e1306c' },
  { name: 'Telegram', icon: '✈️', color: '#0088cc' },
  { name: 'Netlify', icon: '🚀', color: '#00c7b7' },
  { name: 'GitHub', icon: '🐙', color: '#24292f' },
  { name: 'Vercel', icon: '▲', color: '#000000' },
  { name: 'Firebase', icon: '🔥', color: '#ff6d00' },
  { name: 'Supabase', icon: '⚡', color: '#3ecf8e' },
  { name: 'ChatGPT', icon: '🤖', color: '#10a37f' },
  { name: 'Gemini', icon: '✨', color: '#4285f4' },
  { name: 'Claude', icon: '🧠', color: '#d4a853' },
  { name: 'WordPress', icon: '🌐', color: '#21759b' },
];

const ESmartTab: React.FC = () => {
  return (
    <div className="fade-in pb-4">
      {/* Header */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-black text-white"
            style={{ background: 'linear-gradient(135deg, #0891b2, #0369a1)', boxShadow: '0 4px 16px rgba(8,145,178,0.3)' }}
          >
            U
          </div>
          <div>
            <h1 className="text-lg font-black text-gray-800">UniOrbi</h1>
            <p className="text-xs text-cyan-600">@uniorbi.com · Main Platform</p>
          </div>
        </div>
      </div>

      {/* Platform Banner */}
      <div className="px-4 mb-4">
        <div
          className="rounded-3xl p-4"
          style={{
            background: 'linear-gradient(135deg, #0891b2 0%, #0369a1 50%, #1d4ed8 100%)',
            boxShadow: '0 8px 24px rgba(8,145,178,0.3)',
          }}
        >
          <p className="text-white/80 text-xs font-semibold mb-1">E-Smart Platform</p>
          <p className="text-white text-xl font-black mb-1">UniOrbi Ecosystem</p>
          <p className="text-white/70 text-xs">Your All-in-One Digital Intelligence Hub</p>
          <div className="flex items-center gap-2 mt-3">
            <a
              href="https://www.uniorbi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white/20 text-white text-xs font-semibold flex items-center gap-1 hover:bg-white/30 transition-colors"
            >
              <Globe size={10} /> www.uniorbi.com
            </a>
            <a
              href="https://www.drirfan.online"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white/20 text-white text-xs font-semibold flex items-center gap-1 hover:bg-white/30 transition-colors"
            >
              <Globe size={10} /> drirfan.online
            </a>
          </div>
        </div>
      </div>

      {/* UniOrbi Apps */}
      <div className="px-4 mb-4">
        <h2 className="text-sm font-bold text-gray-700 mb-3">UniOrbi Branches</h2>
        <div className="grid grid-cols-4 gap-2">
          {UNIORBI_APPS.map((app) => (
            <a
              key={app.id}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all active:scale-95"
              style={{
                background: `${app.color}10`,
                border: `1px solid ${app.color}20`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{ background: `${app.color}18` }}
              >
                {app.icon}
              </div>
              <span className="text-[9px] font-bold text-center" style={{ color: app.color }}>
                {app.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Integrations */}
      <div className="px-4 mb-4">
        <h2 className="text-sm font-bold text-gray-700 mb-3">⚡ Integrations</h2>
        <div
          className="rounded-2xl p-3"
          style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.7)' }}
        >
          <div className="flex flex-wrap gap-2">
            {INTEGRATIONS.map((i) => (
              <div
                key={i.name}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full"
                style={{
                  background: `${i.color}12`,
                  border: `1px solid ${i.color}25`,
                }}
              >
                <span className="text-sm">{i.icon}</span>
                <span className="text-[10px] font-semibold" style={{ color: i.color === '#000000' || i.color === '#010101' ? '#374151' : i.color }}>
                  {i.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Email Contacts */}
      <div className="px-4">
        <h2 className="text-sm font-bold text-gray-700 mb-3">📧 Contact</h2>
        <div className="space-y-2">
          {[
            'Admin@drirfan.online',
            'Contact@drirfan.online',
            'Info@drirfan.online',
            'Support@drirfan.online',
          ].map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="flex items-center gap-3 p-3 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.7)' }}
            >
              <Mail size={14} className="text-cyan-600" />
              <span className="text-xs font-medium text-gray-700">{email}</span>
              <ExternalLink size={10} className="text-gray-400 ml-auto" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ESmartTab;
