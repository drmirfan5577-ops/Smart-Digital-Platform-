import { useState } from 'react';
import { Search, Mic, Camera, ChevronLeft, ChevronRight, RefreshCw, X } from 'lucide-react';
import { useAppStore } from '@/stores/appStore';

interface BrowserBarProps {
  onSearch: (url: string) => void;
  currentUrl: string;
}

const BrowserBar: React.FC<BrowserBarProps> = ({ onSearch, currentUrl }) => {
  const [query, setQuery] = useState(currentUrl);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    let url = query.trim();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      if (url.includes('.') && !url.includes(' ')) {
        url = 'https://' + url;
      } else {
        url = `https://www.google.com/search?q=${encodeURIComponent(url)}`;
      }
    }
    onSearch(url);
  };

  return (
    <div className="px-3 py-2">
      {/* Browser controls */}
      <div className="flex items-center gap-1 mb-2">
        <div
          className="flex items-center gap-1 px-2 py-1 rounded-lg"
          style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)' }}
        >
          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">SW</span>
          </div>
          <div className="ml-1">
            <p className="text-[10px] font-bold text-gray-800 leading-none">SMART WORLD ORDER</p>
            <p className="text-[8px] text-gray-500 leading-none">ES OneWorld Browser</p>
          </div>
        </div>
        <div className="flex-1" />
        <div
          className="px-2 py-1 rounded-lg text-right"
          style={{ background: 'rgba(255,255,255,0.7)' }}
        >
          <p className="text-[10px] font-bold text-teal-600 leading-none">
            {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </p>
          <p className="text-[8px] text-gray-500 leading-none">
            {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Search/URL bar */}
      <form onSubmit={handleSubmit}>
        <div
          className={`flex items-center gap-2 px-3 py-2 rounded-2xl transition-all duration-200 ${
            isFocused ? 'shadow-lg' : ''
          }`}
          style={{
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: isFocused ? '1.5px solid rgba(30,64,175,0.4)' : '1.5px solid rgba(255,255,255,0.8)',
            boxShadow: isFocused
              ? '0 4px 20px rgba(30,64,175,0.15), inset 0 1px 0 rgba(255,255,255,1)'
              : '0 2px 10px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1)',
          }}
        >
          <Search size={14} className="text-gray-400 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search Google or enter URL..."
            className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
            style={{ fontSize: 13 }}
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} className="text-gray-400 hover:text-gray-600">
              <X size={12} />
            </button>
          )}
          <button type="button" className="text-gray-400 hover:text-blue-500 transition-colors">
            <Mic size={14} />
          </button>
          <button type="button" className="text-gray-400 hover:text-blue-500 transition-colors">
            <Camera size={14} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrowserBar;
