import { useState } from 'react';
import { Search, Camera, X } from 'lucide-react';

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

    const input = query.trim();
    let url: string;
    try {
      const candidate = new URL(/^https?:\/\//i.test(input) ? input : `https://${input}`);
      url = !/\s/.test(input) && candidate.hostname.includes('.') && !/^[a-z][a-z\d+.-]*:/i.test(input.replace(/^https?:/i, ''))
        ? candidate.href
        : `https://www.google.com/search?q=${encodeURIComponent(input)}`;
    } catch {
      url = `https://www.google.com/search?q=${encodeURIComponent(input)}`;
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
            aria-label="Search or enter a website address"
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
            <button aria-label="Clear search" type="button" onClick={() => setQuery('')} className="text-gray-400 hover:text-gray-600">
              <X size={12} />
            </button>
          )}
          <button type="submit" aria-label="Open website or search" className="text-blue-600 hover:text-blue-800 transition-colors"><Search size={16} /></button>
          <a href="https://lens.google/" target="_blank" rel="noopener noreferrer" aria-label="Open Google Lens image search" className="text-gray-400 hover:text-blue-500 transition-colors"><Camera size={14} /></a>
        </div>
      </form>
    </div>
  );
};

export default BrowserBar;
