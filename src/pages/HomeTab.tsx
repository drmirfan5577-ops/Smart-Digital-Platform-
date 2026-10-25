import { useState } from 'react';
import BismillahHeader from '@/components/features/BismillahHeader';
import BrowserBar from '@/components/features/BrowserBar';
import DiamondIcon from '@/components/features/DiamondIcon';
import StatsWidget from '@/components/features/StatsWidget';
import { HOME_APPS } from '@/constants/apps';
import { useAppStore } from '@/stores/appStore';

const HomeTab: React.FC = () => {
  const { setCurrentUrl } = useAppStore();
  const [category, setCategory] = useState('all');
  const hubCategories: Record<string, string> = {
    'islamic-hub': 'islamic', 'smart-hub': 'utility', 'social-hub': 'social',
    'news-hub': 'news', 'ai-hub': 'ai', 'general-hub': 'all',
  };
  const handleSearch = (url: string) => {
    setCurrentUrl(url);
    window.location.assign(url);
  };
  const apps = category === 'all' ? HOME_APPS : HOME_APPS.filter((app) => app.category === category);

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
            <span className="text-[10px] text-gray-400">Links open in a new tab</span>
          </div>

          <label className="block text-xs text-gray-600 mb-4">
            Explore
            <select aria-label="Filter apps and platforms" value={category} onChange={(e) => setCategory(e.target.value)} className="ml-2 rounded-lg border p-1 bg-white">
              {['all', 'islamic', 'social', 'news', 'utility', 'media', 'ai'].map((value) => <option key={value} value={value}>{value === 'all' ? 'All apps & sites' : value.toUpperCase()}</option>)}
            </select>
          </label>
          <div className="grid grid-cols-4 gap-2 justify-items-center">
            {apps.map((app) => (
              <DiamondIcon
                key={app.id}
                app={app}
                size={56}
                onClick={app.category === 'hub' ? () => setCategory(hubCategories[app.id]) : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
