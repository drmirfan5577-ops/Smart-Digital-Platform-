import { useAppStore } from '@/stores/appStore';
import { THEMES } from '@/constants/themes';
import { X, Check } from 'lucide-react';

interface ThemeSelectorProps {
  onClose: () => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onClose }) => {
  const { theme, setTheme } = useAppStore();

  return (
    <div className="fixed inset-0 z-50 flex items-end" style={{ maxWidth: 430, margin: '0 auto', left: 0, right: 0 }}>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative w-full rounded-t-3xl overflow-hidden fade-in"
        style={{
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          maxHeight: '80vh',
        }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>

        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-bold text-gray-800">🎨 Select Theme</h2>
            <p className="text-xs text-gray-500 font-urdu">تھیم منتخب کریں</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-gray-100 transition-colors">
            <X size={18} className="text-gray-500" />
          </button>
        </div>

        <div className="overflow-y-auto scrollbar-hide p-4" style={{ maxHeight: 'calc(80vh - 100px)' }}>
          <div className="grid grid-cols-2 gap-3">
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => { setTheme(t.id); onClose(); }}
                className="relative overflow-hidden rounded-2xl border-2 transition-all duration-200"
                style={{
                  borderColor: theme === t.id ? t.accentColor : 'transparent',
                  boxShadow: theme === t.id ? `0 0 0 3px ${t.accentColor}22, 0 4px 12px rgba(0,0,0,0.08)` : '0 2px 8px rgba(0,0,0,0.06)',
                }}
              >
                {/* Theme Preview */}
                <div
                  className="h-20 w-full"
                  style={{
                    background: `linear-gradient(135deg, ${t.gradientFrom} 0%, ${t.gradientVia} 50%, ${t.gradientTo} 100%)`,
                  }}
                />
                {/* Label */}
                <div
                  className="px-3 py-2 text-left"
                  style={{ background: `${t.accentColor}18` }}
                >
                  <p className="text-xs font-bold" style={{ color: t.accentColor }}>{t.name}</p>
                  <p className="text-[10px] text-gray-500 font-urdu">{t.nameUrdu}</p>
                </div>
                {theme === t.id && (
                  <div
                    className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: t.accentColor }}
                  >
                    <Check size={12} className="text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
