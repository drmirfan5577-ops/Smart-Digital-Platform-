import { useAppStore } from '@/stores/appStore';
import { RIGHT_SIDEBAR_ITEMS } from '@/constants/apps';
import { X } from 'lucide-react';
import ThemeSelector from '@/components/features/ThemeSelector';
import { useState } from 'react';

const RightSidebar: React.FC = () => {
  const { rightSidebarOpen, toggleRightSidebar } = useAppStore();
  const [showThemes, setShowThemes] = useState(false);

  const handleItemClick = (id: string) => {
    if (id === 'themes') {
      setShowThemes(true);
    }
  };

  return (
    <>
      <div
        className={`fixed right-0 top-0 bottom-0 z-40 flex flex-col transition-transform duration-300 ease-out ${
          rightSidebarOpen ? 'translate-x-0 slide-in-right' : 'translate-x-full'
        }`}
        style={{
          width: 80,
          background: 'rgba(255,255,255,0.94)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderLeft: '1px solid rgba(255,255,255,0.7)',
          boxShadow: '-4px 0 24px rgba(0,0,0,0.1)',
        }}
      >
        <div className="flex items-center justify-between px-2 py-3 border-b border-white/50">
          <button onClick={toggleRightSidebar} className="p-1 rounded-full hover:bg-gray-100">
            <X size={14} className="text-gray-500" />
          </button>
          <span className="text-xs font-bold text-gray-600">More</span>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide py-2">
          {RIGHT_SIDEBAR_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className="w-full flex flex-col items-center gap-1 px-2 py-2.5 hover:bg-white/60 transition-colors rounded-lg mx-1"
              style={{ width: 'calc(100% - 8px)' }}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-[9px] text-gray-500 font-medium text-center leading-tight">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {showThemes && (
        <ThemeSelector onClose={() => setShowThemes(false)} />
      )}
    </>
  );
};

export default RightSidebar;
