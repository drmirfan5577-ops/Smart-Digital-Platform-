import { useState } from 'react';
import { Settings, Lock, Info, Shield, Eye, Globe, Image as ImageIcon, Moon, Sun, Languages } from 'lucide-react';
import { useAppStore } from '@/stores/appStore';
import { THEMES, LANGUAGES } from '@/constants/themes';
import AdminPanel from '@/components/features/AdminPanel';
import ThemeSelector from '@/components/features/ThemeSelector';

type Section = 'main' | 'gallery' | 'settings' | 'about' | 'admin';

const ESOneWorldTab: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('main');
  const [showThemes, setShowThemes] = useState(false);
  const { isDark, toggleDark, language, setLanguage } = useAppStore();

  if (activeSection === 'admin') {
    return <AdminPanel onBack={() => setActiveSection('main')} />;
  }

  if (activeSection === 'gallery') {
    const GALLERY_IMAGES = [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&q=80',
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=200&q=80',
      'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&q=80',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&q=80',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=200&q=80',
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=200&q=80',
      'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=200&q=80',
      'https://images.unsplash.com/photo-1439853949212-36589f45df5e?w=200&q=80',
    ];
    return (
      <div className="fade-in">
        <div className="px-4 py-3 flex items-center gap-3">
          <button onClick={() => setActiveSection('main')} className="text-gray-500 text-sm">←</button>
          <h1 className="text-lg font-bold text-gray-800">🖼️ Gallery</h1>
        </div>
        <div className="px-3 grid grid-cols-3 gap-1">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl overflow-hidden"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activeSection === 'settings') {
    return (
      <div className="fade-in">
        <div className="px-4 py-3 flex items-center gap-3">
          <button onClick={() => setActiveSection('main')} className="text-gray-500 text-sm">←</button>
          <h1 className="text-lg font-bold text-gray-800">⚙️ Settings</h1>
        </div>
        <div className="px-4 space-y-3 pb-6">
          {/* Appearance */}
          <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.7)' }}>
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Appearance</p>
            </div>
            <button
              onClick={toggleDark}
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                {isDark ? <Moon size={16} className="text-indigo-600" /> : <Sun size={16} className="text-amber-500" />}
                <span className="text-sm text-gray-700">Dark Mode</span>
              </div>
              <div
                className={`w-10 h-6 rounded-full transition-all ${isDark ? 'bg-indigo-600' : 'bg-gray-200'}`}
              >
                <div className={`w-5 h-5 rounded-full bg-white shadow m-0.5 transition-all ${isDark ? 'translate-x-4' : 'translate-x-0'}`} />
              </div>
            </button>
            <button
              onClick={() => setShowThemes(true)}
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/60 transition-colors border-t border-gray-100"
            >
              <div className="flex items-center gap-3">
                <span className="text-base">🎨</span>
                <span className="text-sm text-gray-700">Theme</span>
              </div>
              <span className="text-xs text-gray-400 capitalize">{useAppStore.getState().theme.replace('-', ' ')}</span>
            </button>
          </div>

          {/* Language */}
          <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.7)' }}>
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Language</p>
            </div>
            <div className="p-3 flex flex-wrap gap-2">
              {LANGUAGES.slice(0, 8).map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                  style={{
                    background: language === l.code ? 'linear-gradient(135deg, #1e40af, #3b82f6)' : 'rgba(241,245,249,0.8)',
                    color: language === l.code ? 'white' : '#475569',
                  }}
                >
                  {l.native}
                </button>
              ))}
            </div>
          </div>
        </div>
        {showThemes && <ThemeSelector onClose={() => setShowThemes(false)} />}
      </div>
    );
  }

  if (activeSection === 'about') {
    return (
      <div className="fade-in">
        <div className="px-4 py-3 flex items-center gap-3">
          <button onClick={() => setActiveSection('main')} className="text-gray-500 text-sm">←</button>
          <h1 className="text-lg font-bold text-gray-800">ℹ️ About Us</h1>
        </div>
        <div className="px-4 space-y-4 pb-6">
          <div className="rounded-2xl p-4" style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', border: '1px solid #bfdbfe' }}>
            <p className="text-center text-lg font-black text-blue-800 mb-1">ESOneWorld</p>
            <p className="text-center text-xs text-blue-600 italic">
              "Neither a Global Village nor a Global Community,<br />it's a Global Family Platform"
            </p>
          </div>
          <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.7)' }}>
            <p className="text-sm font-bold text-gray-700 mb-2">🌟 Our Vision & Mission</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              ESOneWorld aims to connect humanity through faith, technology, and digital intelligence. 
              Built on the foundation of Islamic values, we serve as a comprehensive digital platform 
              for Muslims and global citizens alike.
            </p>
          </div>
          <div className="rounded-2xl p-4 space-y-2" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.7)' }}>
            <p className="text-sm font-bold text-gray-700">📧 Connect With Us</p>
            {['admin@drirfan.online', 'contact@drirfan.online', 'info@drirfan.online', 'support@drirfan.online'].map(e => (
              <a key={e} href={`mailto:${e}`} className="block text-xs text-blue-600 hover:underline">{e}</a>
            ))}
          </div>
          <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.7)' }}>
            <p className="text-sm font-bold text-gray-700 mb-2">⚖️ Legal</p>
            <div className="space-y-1">
              {['Privacy Policy', 'Terms & Conditions', 'Disclaimer', 'Copyright Notice', 'Warnings'].map(item => (
                <button key={item} className="w-full text-left text-xs text-gray-600 py-2 border-b border-gray-100 last:border-0 hover:text-blue-600 transition-colors">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in pb-4">
      {/* Header */}
      <div className="px-4 py-3">
        <h1 className="text-lg font-bold text-gray-800">🌟 ESOneWorld</h1>
        <p className="text-xs text-gray-500">Global Family Platform</p>
      </div>

      {/* Main Menu Grid */}
      <div className="px-4 grid grid-cols-2 gap-3">
        {[
          { id: 'gallery' as Section, icon: '🖼️', label: 'Gallery', desc: 'Photos & Media', color: '#db2777' },
          { id: 'settings' as Section, icon: '⚙️', label: 'Settings', desc: 'App Preferences', color: '#7c3aed' },
          { id: 'about' as Section, icon: 'ℹ️', label: 'About Us', desc: 'Vision & Mission', color: '#0369a1' },
          { id: 'admin' as Section, icon: '🔐', label: 'Admin Panel', desc: 'Full Control', color: '#c2410c' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className="flex flex-col items-center gap-2 p-4 rounded-2xl transition-all active:scale-95"
            style={{
              background: `${item.color}10`,
              border: `1px solid ${item.color}25`,
              boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
            }}
          >
            <span className="text-3xl">{item.icon}</span>
            <div className="text-center">
              <p className="text-sm font-bold" style={{ color: item.color }}>{item.label}</p>
              <p className="text-[10px] text-gray-500 mt-0.5">{item.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Quick Info */}
      <div className="px-4 mt-4">
        <div
          className="rounded-2xl p-4"
          style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.7)' }}
        >
          <p className="text-xs font-bold text-gray-700 mb-2">🌍 Platform Stats</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'App Version', value: 'v2.0.0', icon: '📱' },
              { label: 'Platform', value: 'ESOneWorld', icon: '🌐' },
              { label: 'Developer', value: 'Dr. Irfan', icon: '👨‍💻' },
              { label: 'Domain', value: 'drirfan.online', icon: '🔗' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <span className="text-sm">{s.icon}</span>
                <div>
                  <p className="text-[9px] text-gray-400">{s.label}</p>
                  <p className="text-[11px] font-semibold text-gray-700">{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="px-4 mt-3">
        <div
          className="rounded-2xl p-4 text-center"
          style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)', border: '1px solid rgba(200,220,255,0.5)' }}
        >
          <p className="text-xs font-bold text-blue-800">OUR VISION</p>
          <p className="text-sm font-semibold text-gray-700 mt-1 italic leading-relaxed">
            "Neither a Global Village nor a Global Community,<br />
            <span className="text-blue-700 font-bold">it's a Global Family Platform</span>"
          </p>
        </div>
      </div>
    </div>
  );
};

export default ESOneWorldTab;
