import { useState } from 'react';
import BismillahHeader from '@/components/features/BismillahHeader';
import BrowserBar from '@/components/features/BrowserBar';
import DiamondIcon from '@/components/features/DiamondIcon';
import StatsWidget from '@/components/features/StatsWidget';
import { HOME_APPS } from '@/constants/apps';
import { useAppStore } from '@/stores/appStore';

const HomeTab: React.FC = () => {
  const { setCurrentUrl } = useAppStore();
  const [embeddedUrl, setEmbeddedUrl] = useState('');
  const [showBrowser, setShowBrowser] = useState(false);

  const handleSearch = (url: string) => {
    setCurrentUrl(url);
    setEmbeddedUrl(url);
    setShowBrowser(true);
  };

  const handleAppClick = (url: string) => {
    if (url) {
      handleSearch(url);
    }
  };

  if (showBrowser && embeddedUrl) {
    return (
      <div className="flex flex-col" style={{ height: 'calc(100vh - 120px)' }}>
        <div className="px-3 py-2 glass-card border-b border-white/40">
          <BrowserBar onSearch={handleSearch} currentUrl={embeddedUrl} />
          <div className="flex items-center gap-2 px-1 mt-1">
            <button
              onClick={() => setShowBrowser(false)}
              className="text-xs text-gray-500 hover:text-gray-800 flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-white/60"
            >
              ← Home
            </button>
            <span className="text-xs text-gray-400 truncate flex-1">{embeddedUrl}</span>
          </div>
        </div>
        <iframe
          src={embeddedUrl}
          className="flex-1 w-full border-0"
          title="Browser"
          sandbox="allow-same-origin allow-scripts allow-forms allow-navigation allow-popups"
        />
      </div>
    );
  }

  return (
    <div className="fade-in">
      {/* Bismillah + Star Sidebars */}
      <BismillahHeader />

      {/* Browser Bar */}
      <BrowserBar onSearch={handleSearch} currentUrl="" />

      {/* Stats Widget */}
      <StatsWidget />

      {/* Apps Grid - Diamond Icons */}
      <div className="px-3 pb-4">
        <div
          className="rounded-2xl p-3"
          style={{
            background: 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.7)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-gray-700">🚀 Quick Access</span>
            <span className="text-[10px] text-gray-400">Tap to open</span>
          </div>

          <div className="grid grid-cols-4 gap-2 justify-items-center">
            {HOME_APPS.map((app) => (
              <DiamondIcon
                key={app.id}
                app={app}
                size={56}
                onClick={() => handleAppClick(app.url || '')}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
