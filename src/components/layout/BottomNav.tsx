import { useAppStore } from '@/stores/appStore';
import { TabId } from '@/types';

const TABS: { id: TabId; icon: string; label: string; labelUrdu: string; color: string }[] = [
  { id: 'home', icon: '🏠', label: 'Home', labelUrdu: 'ہوم', color: '#1e40af' },
  { id: 'guests', icon: '💬', label: 'Guests', labelUrdu: 'مہمان', color: '#059669' },
  { id: 'global', icon: '🌍', label: 'Global', labelUrdu: 'عالمی', color: '#7c3aed' },
  { id: 'esmart', icon: '⚡', label: 'E-Smart', labelUrdu: 'ای سمارٹ', color: '#0891b2' },
  { id: 'paradise', icon: '☪️', label: 'Paradise', labelUrdu: 'جنت', color: '#065f46' },
  { id: 'esonewold', icon: '🌟', label: 'ESOneWorld', labelUrdu: 'ای ایس', color: '#c2410c' },
];

const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab } = useAppStore();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 glass-card border-t border-white/60"
      style={{
        maxWidth: 430,
        margin: '0 auto',
        left: 0,
        right: 0,
        height: 'var(--bottom-nav-height)',
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
      }}
    >
      <div className="flex items-stretch h-full">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex-1 flex flex-col items-center justify-center gap-0.5 transition-all duration-200 relative"
              style={{ minHeight: 44 }}
            >
              {isActive && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                  style={{ background: tab.color }}
                />
              )}
              <span className={`text-xl transition-all duration-200 ${isActive ? 'scale-110' : 'scale-100 opacity-70'}`}>
                {tab.icon}
              </span>
              <span
                className="text-[9px] font-semibold tracking-tight leading-none"
                style={{ color: isActive ? tab.color : '#94a3b8' }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
