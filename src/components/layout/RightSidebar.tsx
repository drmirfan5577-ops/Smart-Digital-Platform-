import { useAppStore } from '@/stores/appStore';
import { RIGHT_SIDEBAR_ITEMS } from '@/constants/apps';
import { X } from 'lucide-react';
import ThemeSelector from '@/components/features/ThemeSelector';
import { useState } from 'react';

const RightSidebar: React.FC = () => {
  const { rightSidebarOpen, toggleRightSidebar, setActiveTab, bookmarks, addBookmark, removeBookmark } = useAppStore();
  const [showThemes, setShowThemes] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [bookmarkUrl, setBookmarkUrl] = useState('');
  const [error, setError] = useState('');

  const handleItemClick = (id: string) => {
    if (id === 'themes') {
      setShowThemes(true);
    } else if (id === 'bookmarks' || id === 'favorites') {
      setShowBookmarks(true);
    } else {
      setActiveTab('home');
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
          {RIGHT_SIDEBAR_ITEMS.map((item) => item.url ? (
            <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 px-2 py-2.5 hover:bg-white/60 rounded-lg mx-1">
              <span className="text-xl">{item.icon}</span>
              <span className="text-[9px] text-gray-500 font-medium text-center leading-tight">{item.label}</span>
            </a>
          ) : (
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

      {showBookmarks && (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4" onClick={() => setShowBookmarks(false)}>
          <section role="dialog" aria-modal="true" aria-label="Bookmarks and favorites" className="bg-white rounded-2xl p-4 w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between mb-3"><h2 className="font-bold">Bookmarks & Favorites</h2><button aria-label="Close bookmarks" onClick={() => setShowBookmarks(false)}><X size={18} /></button></div>
            <form onSubmit={(e) => {
              e.preventDefault();
              try {
                const url = new URL(bookmarkUrl.includes('://') ? bookmarkUrl : `https://${bookmarkUrl}`);
                if (!['https:', 'http:'].includes(url.protocol) || !url.hostname.includes('.')) throw new Error();
                addBookmark(url.href); setBookmarkUrl(''); setError('');
              } catch { setError('Enter a valid website address.'); }
            }} className="flex gap-2">
              <input aria-label="Website to bookmark" value={bookmarkUrl} onChange={(e) => setBookmarkUrl(e.target.value)} placeholder="https://example.com" required className="border rounded-lg p-2 min-w-0 flex-1 text-sm" />
              <button className="bg-blue-700 text-white px-3 rounded-lg">Save</button>
            </form>
            {error && <p role="alert" className="text-red-700 text-xs mt-2">{error}</p>}
            <p className="text-xs text-gray-500 my-3">Saved in this browser. Select a link to open it in a new tab.</p>
            {!bookmarks.length && <p className="text-sm text-gray-600">Add a favorite website above to get started.</p>}
            <ul className="max-h-64 overflow-y-auto space-y-3">{bookmarks.filter((url) => /^https?:\/\//i.test(url)).map((url) => <li key={url} className="flex gap-2"><a className="text-blue-700 text-sm truncate flex-1 underline" href={url} target="_blank" rel="noopener noreferrer">{url}</a><button className="text-xs text-gray-500" onClick={() => removeBookmark(url)}>Remove</button></li>)}</ul>
          </section>
        </div>
      )}
      {showThemes && (
        <ThemeSelector onClose={() => setShowThemes(false)} />
      )}
    </>
  );
};

export default RightSidebar;
