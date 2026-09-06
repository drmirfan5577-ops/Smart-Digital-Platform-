import { useEffect } from 'react';
import { useAppStore } from '@/stores/appStore';
import { THEMES } from '@/constants/themes';
import BottomNav from './BottomNav';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import StatusBar from './StatusBar';
import NewsTicker from '@/components/features/NewsTicker';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { theme, isDark, closeAllSidebars, leftSidebarOpen, rightSidebarOpen } = useAppStore();

  const currentTheme = THEMES.find((t) => t.id === theme) || THEMES[0];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, isDark]);

  return (
    <div
      className="app-container relative flex flex-col"
      style={{
        background: `linear-gradient(160deg, ${currentTheme.gradientFrom} 0%, ${currentTheme.gradientVia} 50%, ${currentTheme.gradientTo} 100%)`,
        minHeight: '100vh',
      }}
    >
      {/* Background decorative orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" style={{ maxWidth: 430, margin: '0 auto', left: 0, right: 0 }}>
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #e53e3e, transparent)' }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #10b981, transparent)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }}
        />
      </div>

      {/* Status Bar */}
      <StatusBar />

      {/* Overlay to close sidebars */}
      {(leftSidebarOpen || rightSidebarOpen) && (
        <div
          className="fixed inset-0 z-30 bg-black/10 backdrop-blur-[1px]"
          onClick={closeAllSidebars}
          style={{ maxWidth: 430, margin: '0 auto', left: 0, right: 0 }}
        />
      )}

      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Right Sidebar */}
      <RightSidebar />

      {/* Main Content */}
      <main
        className="flex-1 overflow-y-auto scrollbar-hide relative z-10"
        style={{ paddingBottom: `calc(var(--bottom-nav-height) + 44px + 8px)` }}
      >
        {children}
      </main>

      {/* News Ticker */}
      <NewsTicker />

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default AppLayout;
