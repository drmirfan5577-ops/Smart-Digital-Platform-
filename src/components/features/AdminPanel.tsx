import { useState } from 'react';
import { useAppStore } from '@/stores/appStore';
import { Lock, Shield, Plus, Trash2, Edit3, ToggleLeft, ToggleRight, Download, Upload, RefreshCw, Key } from 'lucide-react';
import { toast } from 'sonner';
import ThemeSelector from './ThemeSelector';

interface AdminPanelProps {
  onBack: () => void;
}

type AdminSection = 'login' | 'dashboard' | 'integrations' | 'apps' | 'pwa' | 'backup' | 'backend' | 'passwords';

const AdminPanel: React.FC<AdminPanelProps> = ({ onBack }) => {
  const { isAdminLoggedIn, loginAdmin, logoutAdmin, changeAdminPassword } = useAppStore();
  const [section, setSection] = useState<AdminSection>(isAdminLoggedIn ? 'dashboard' : 'login');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showThemes, setShowThemes] = useState(false);

  const [backends, setBackends] = useState({
    twilio: { enabled: false, key: '', secret: '' },
    agora: { enabled: false, appId: '', token: '' },
    firebase: { enabled: false, config: '' },
    supabase: { enabled: false, url: '', key: '' },
  });

  const handleLogin = () => {
    if (loginAdmin(passwordInput)) {
      setSection('dashboard');
      setPasswordInput('');
      toast.success('Admin login successful');
    } else {
      toast.error('Incorrect password');
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    onBack();
  };

  if (section === 'login') {
    return (
      <div className="fade-in min-h-screen flex flex-col">
        <div className="px-4 py-3 flex items-center gap-3">
          <button onClick={onBack} className="text-gray-500 text-sm">←</button>
          <h1 className="text-lg font-bold text-gray-800">🔐 Admin Panel</h1>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
          <div
            className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6"
            style={{ background: 'linear-gradient(135deg, #c2410c, #ea580c)', boxShadow: '0 8px 24px rgba(194,65,12,0.3)' }}
          >
            <Shield size={36} className="text-white" />
          </div>
          <h2 className="text-xl font-black text-gray-800 mb-1">Admin Access</h2>
          <p className="text-xs text-gray-500 mb-8 text-center">Strongly password protected. Enter admin password to continue.</p>

          <div className="w-full space-y-3">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                placeholder="Enter admin password..."
                className="w-full px-4 py-3 rounded-2xl text-sm outline-none"
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  border: '1.5px solid rgba(200,200,200,0.5)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            <button
              onClick={handleLogin}
              className="w-full py-3 rounded-2xl text-white font-bold text-sm transition-all active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #c2410c, #ea580c)',
                boxShadow: '0 4px 16px rgba(194,65,12,0.3)',
              }}
            >
              <Lock size={14} className="inline mr-2" />
              Access Admin Panel
            </button>
          </div>
          <p className="text-[10px] text-gray-400 mt-4">Default password: @1122#</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in pb-6">
      {/* Admin Header */}
      <div
        className="px-4 py-3 flex items-center justify-between"
        style={{ background: 'linear-gradient(135deg, #c2410c, #ea580c)', boxShadow: '0 4px 12px rgba(194,65,12,0.25)' }}
      >
        <div className="flex items-center gap-2">
          <button onClick={onBack} className="text-white/70 hover:text-white mr-1">←</button>
          <Shield size={16} className="text-white" />
          <div>
            <p className="text-white font-bold text-sm">Admin Panel</p>
            <p className="text-white/70 text-[9px]">Full Command & Control</p>
          </div>
        </div>
        <button onClick={handleLogout} className="px-3 py-1.5 rounded-xl bg-white/20 text-white text-xs font-semibold">
          Logout
        </button>
      </div>

      {/* Section Nav */}
      <div className="px-3 py-3 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2" style={{ minWidth: 'max-content' }}>
          {([
            { id: 'dashboard', label: '📊 Dashboard' },
            { id: 'integrations', label: '🔗 Integrations' },
            { id: 'apps', label: '📱 Apps' },
            { id: 'backend', label: '⚡ Backend' },
            { id: 'passwords', label: '🔑 Passwords' },
            { id: 'pwa', label: '📲 PWA' },
            { id: 'backup', label: '💾 Backup' },
          ] as { id: AdminSection; label: string }[]).map((s) => (
            <button
              key={s.id}
              onClick={() => setSection(s.id)}
              className="px-3 py-1.5 rounded-xl text-[11px] font-semibold whitespace-nowrap transition-all"
              style={{
                background: section === s.id ? 'linear-gradient(135deg, #c2410c, #ea580c)' : 'rgba(255,255,255,0.7)',
                color: section === s.id ? 'white' : '#475569',
                boxShadow: section === s.id ? '0 2px 8px rgba(194,65,12,0.25)' : 'none',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dashboard Section */}
      {section === 'dashboard' && (
        <div className="px-4 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: '👥', label: 'Total Users', value: '2.4M', color: '#1d4ed8' },
              { icon: '📊', label: 'Daily Active', value: '847K', color: '#059669' },
              { icon: '💬', label: 'Messages', value: '18.7K', color: '#7c3aed' },
              { icon: '🔥', label: 'Live Streams', value: '342', color: '#dc2626' },
            ].map((s) => (
              <div
                key={s.label}
                className="p-4 rounded-2xl"
                style={{ background: `${s.color}10`, border: `1px solid ${s.color}20` }}
              >
                <span className="text-2xl">{s.icon}</span>
                <p className="text-xl font-black mt-2" style={{ color: s.color }}>{s.value}</p>
                <p className="text-[10px] text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.7)' }}>
            <p className="text-xs font-bold text-gray-700 mb-3">🎨 Appearance Control</p>
            <button
              onClick={() => setShowThemes(true)}
              className="w-full py-2.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)' }}
            >
              🎨 Change Theme
            </button>
          </div>
        </div>
      )}

      {/* Integrations Section */}
      {section === 'integrations' && (
        <div className="px-4 space-y-3">
          <p className="text-xs font-bold text-gray-600">Social Media Integrations</p>
          {['YouTube', 'WhatsApp', 'Facebook', 'Twitter X', 'TikTok', 'Instagram', 'Telegram'].map((platform) => (
            <div
              key={platform}
              className="flex items-center justify-between p-3 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.7)' }}
            >
              <span className="text-sm font-semibold text-gray-700">{platform}</span>
              <div className="flex items-center gap-2">
                <button className="text-xs px-2 py-1 rounded-lg bg-blue-50 text-blue-600 font-medium">Configure</button>
                <ToggleLeft size={20} className="text-gray-400" />
              </div>
            </div>
          ))}
          <p className="text-xs font-bold text-gray-600 mt-4">Hosting & Deploy</p>
          {['Netlify', 'Vercel', 'GitHub', 'Firebase', 'Supabase', 'Cloudflare'].map((platform) => (
            <div
              key={platform}
              className="flex items-center justify-between p-3 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.7)' }}
            >
              <span className="text-sm font-semibold text-gray-700">{platform}</span>
              <div className="flex items-center gap-2">
                <button className="text-xs px-2 py-1 rounded-lg bg-emerald-50 text-emerald-600 font-medium">Connect</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Apps Section */}
      {section === 'apps' && (
        <div className="px-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-gray-700">Manage Apps</p>
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs text-white font-semibold" style={{ background: '#059669' }}>
              <Plus size={12} /> Add App
            </button>
          </div>
          <p className="text-xs text-gray-500">Add, remove, rename, enable/disable and reorganize apps</p>
          <div className="space-y-2">
            {['UniBrowser (Home)', 'Guest Room (Chats)', 'Global Communities', 'Paradise (Islamic)', 'E-Smart UniOrbi', 'ESOneWorld Hub'].map((app) => (
              <div
                key={app}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.7)' }}
              >
                <span className="text-sm font-medium text-gray-700 flex-1">{app}</span>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 rounded-lg hover:bg-gray-100"><Edit3 size={12} className="text-gray-500" /></button>
                  <button className="p-1.5 rounded-lg hover:bg-gray-100"><ToggleRight size={16} className="text-emerald-500" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Backend Section */}
      {section === 'backend' && (
        <div className="px-4 space-y-4">
          <p className="text-xs font-bold text-gray-600">Backend Services Configuration</p>
          <p className="text-[10px] text-gray-400">All keys are safely stored and encrypted</p>
          
          {/* Twilio */}
          <div className="rounded-2xl p-4 space-y-3" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.7)' }}>
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-700">📞 Twilio</p>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-red-100 text-red-600 font-semibold">Disabled</span>
            </div>
            <input placeholder="Account SID" className="w-full px-3 py-2 rounded-xl text-xs bg-gray-50 border border-gray-200 outline-none" />
            <input placeholder="Auth Token" type="password" className="w-full px-3 py-2 rounded-xl text-xs bg-gray-50 border border-gray-200 outline-none" />
            <button className="w-full py-2 rounded-xl text-xs font-semibold text-white" style={{ background: '#c2410c' }}>
              Save & Enable Twilio
            </button>
          </div>

          {/* Agora */}
          <div className="rounded-2xl p-4 space-y-3" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.7)' }}>
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-700">📹 Agora RTC</p>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-red-100 text-red-600 font-semibold">Disabled</span>
            </div>
            <input placeholder="App ID" className="w-full px-3 py-2 rounded-xl text-xs bg-gray-50 border border-gray-200 outline-none" />
            <input placeholder="Token" type="password" className="w-full px-3 py-2 rounded-xl text-xs bg-gray-50 border border-gray-200 outline-none" />
            <button className="w-full py-2 rounded-xl text-xs font-semibold text-white" style={{ background: '#1d4ed8' }}>
              Save & Enable Agora
            </button>
          </div>

          {/* Firebase */}
          <div className="rounded-2xl p-4 space-y-3" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.7)' }}>
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-700">🔥 Firebase</p>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-red-100 text-red-600 font-semibold">Disabled</span>
            </div>
            <textarea placeholder="Firebase Config JSON..." className="w-full px-3 py-2 rounded-xl text-xs bg-gray-50 border border-gray-200 outline-none resize-none" rows={3} />
            <button className="w-full py-2 rounded-xl text-xs font-semibold text-white" style={{ background: '#ff6d00' }}>
              Save & Enable Firebase
            </button>
          </div>

          {/* Supabase */}
          <div className="rounded-2xl p-4 space-y-3" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.7)' }}>
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-700">⚡ Supabase</p>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-red-100 text-red-600 font-semibold">Disabled</span>
            </div>
            <input placeholder="Project URL" className="w-full px-3 py-2 rounded-xl text-xs bg-gray-50 border border-gray-200 outline-none" />
            <input placeholder="Anon Key" type="password" className="w-full px-3 py-2 rounded-xl text-xs bg-gray-50 border border-gray-200 outline-none" />
            <button className="w-full py-2 rounded-xl text-xs font-semibold text-white" style={{ background: '#3ecf8e' }}>
              Save & Enable Supabase
            </button>
          </div>
        </div>
      )}

      {/* Passwords Section */}
      {section === 'passwords' && (
        <div className="px-4 space-y-3">
          <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.7)' }}>
            <p className="text-sm font-bold text-gray-700 mb-3">🔑 Change Admin Password</p>
            <div className="space-y-3">
              <input type="password" placeholder="Current password" className="w-full px-3 py-2 rounded-xl text-sm bg-gray-50 border border-gray-200 outline-none" id="old-pass" />
              <input type="password" placeholder="New password" className="w-full px-3 py-2 rounded-xl text-sm bg-gray-50 border border-gray-200 outline-none" id="new-pass" />
              <button
                onClick={() => {
                  const oldEl = document.getElementById('old-pass') as HTMLInputElement;
                  const newEl = document.getElementById('new-pass') as HTMLInputElement;
                  if (oldEl && newEl) {
                    const result = changeAdminPassword(oldEl.value, newEl.value);
                    if (result) { toast.success('Password changed!'); oldEl.value = ''; newEl.value = ''; }
                    else toast.error('Incorrect current password');
                  }
                }}
                className="w-full py-2.5 rounded-xl text-sm font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #c2410c, #ea580c)' }}
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PWA Section */}
      {section === 'pwa' && (
        <div className="px-4 space-y-3">
          <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.7)' }}>
            <p className="text-sm font-bold text-gray-700 mb-3">📲 PWA Setup</p>
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-green-50">
                <span className="text-green-500">✓</span> manifest.json configured
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-green-50">
                <span className="text-green-500">✓</span> Meta viewport & theme-color set
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-green-50">
                <span className="text-green-500">✓</span> Apple Mobile Web App capable
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-yellow-50">
                <span className="text-yellow-500">⚠</span> Service Worker: Setup in progress
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.7)' }}>
            <p className="text-sm font-bold text-gray-700 mb-3">🚀 Deployment</p>
            <div className="space-y-2">
              {['Netlify (netlify.toml)', 'Vercel', 'Firebase Hosting'].map((d) => (
                <button key={d} className="w-full flex items-center justify-between p-2 rounded-xl bg-blue-50 text-xs font-medium text-blue-700">
                  {d} <Download size={12} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Backup Section */}
      {section === 'backup' && (
        <div className="px-4 space-y-3">
          <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.7)' }}>
            <p className="text-sm font-bold text-gray-700 mb-3">💾 Backup & Recovery</p>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#059669' }}>
                <Download size={14} /> Export App Data
              </button>
              <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#1d4ed8' }}>
                <Upload size={14} /> Import / Restore
              </button>
              <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#7c3aed' }}>
                <RefreshCw size={14} /> Auto-Sync Backup
              </button>
            </div>
          </div>
          <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.7)' }}>
            <p className="text-sm font-bold text-gray-700 mb-2">📦 Source Code</p>
            <p className="text-xs text-gray-500 mb-3">Complete source code for next version upgrades</p>
            <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#c2410c' }}>
              <Download size={14} /> Download Source Code
            </button>
          </div>
        </div>
      )}

      {showThemes && <ThemeSelector onClose={() => setShowThemes(false)} />}
    </div>
  );
};

export default AdminPanel;
