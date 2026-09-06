import { useState } from 'react';
import { Phone, Video, Mic, Image, Send, Search, Plus, MoreVertical } from 'lucide-react';
import { Contact, ChatMessage } from '@/types';

const MOCK_CONTACTS: Contact[] = [
  { id: '1', name: 'Dr. Irfan', avatar: '👨‍⚕️', status: 'online', lastMessage: 'السلام علیکم', unread: 2, lastSeen: 'now' },
  { id: '2', name: 'Ahmad Ali', avatar: '👨', status: 'online', lastMessage: 'How are you?', unread: 0, lastSeen: '2 min' },
  { id: '3', name: 'Family Group', avatar: '👨‍👩‍👧‍👦', status: 'online', lastMessage: 'Alhamdulillah', unread: 5, lastSeen: '5 min' },
  { id: '4', name: 'UniOrbi Team', avatar: '💼', status: 'online', lastMessage: 'Meeting at 3pm', unread: 1, lastSeen: '10 min' },
  { id: '5', name: 'Sara Khan', avatar: '👩', status: 'away', lastMessage: 'JazakAllah Khair', unread: 0, lastSeen: '1 hr' },
  { id: '6', name: 'Tech Community', avatar: '💻', status: 'online', lastMessage: 'New update released!', unread: 8, lastSeen: '20 min' },
];

const INITIAL_MESSAGES: ChatMessage[] = [
  { id: '1', sender: 'Dr. Irfan', content: 'السلام علیکم ورحمتہ اللہ', timestamp: new Date(Date.now() - 300000), type: 'text', isOwn: false },
  { id: '2', sender: 'You', content: 'وعلیکم السلام! کیسے ہیں آپ؟', timestamp: new Date(Date.now() - 240000), type: 'text', isOwn: true },
  { id: '3', sender: 'Dr. Irfan', content: 'الحمدللہ بہت اچھے۔ ESOneWorld پروجیکٹ پر کام ہو رہا ہے۔', timestamp: new Date(Date.now() - 180000), type: 'text', isOwn: false },
  { id: '4', sender: 'You', content: 'ماشاء اللہ! بہت اچھا لگ رہا ہے۔', timestamp: new Date(Date.now() - 120000), type: 'text', isOwn: true },
  { id: '5', sender: 'Dr. Irfan', content: 'جزاک اللہ خیر 🤲', timestamp: new Date(Date.now() - 60000), type: 'text', isOwn: false },
];

const GuestsTab: React.FC = () => {
  const [activeChat, setActiveChat] = useState<Contact | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [activeSection, setActiveSection] = useState<'chats' | 'calls' | 'live'>('chats');

  const sendMessage = () => {
    if (!inputText.trim()) return;
    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'You',
      content: inputText,
      timestamp: new Date(),
      type: 'text',
      isOwn: true,
    };
    setMessages((prev) => [...prev, newMsg]);
    setInputText('');
  };

  const formatTime = (d: Date) => d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  if (activeChat) {
    return (
      <div className="flex flex-col" style={{ height: 'calc(100vh - 120px)' }}>
        {/* Chat Header */}
        <div
          className="flex items-center gap-3 px-4 py-3 border-b border-white/40"
          style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(16px)' }}
        >
          <button onClick={() => setActiveChat(null)} className="text-gray-500 hover:text-gray-800 mr-1">←</button>
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl glass-icon">
            {activeChat.avatar}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-800 text-sm">{activeChat.name}</p>
            <p className="text-[10px] text-emerald-500">{activeChat.status === 'online' ? '● Online' : `Last seen ${activeChat.lastSeen}`}</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-white/60 transition-colors"><Phone size={16} className="text-emerald-600" /></button>
            <button className="p-2 rounded-full hover:bg-white/60 transition-colors"><Video size={16} className="text-blue-600" /></button>
            <button className="p-2 rounded-full hover:bg-white/60 transition-colors"><MoreVertical size={16} className="text-gray-500" /></button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-3">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[75%] px-3 py-2 rounded-2xl ${msg.isOwn ? 'rounded-tr-sm' : 'rounded-tl-sm'}`}
                style={{
                  background: msg.isOwn
                    ? 'linear-gradient(135deg, #d1fae5, #6ee7b7)'
                    : 'rgba(255,255,255,0.9)',
                  border: msg.isOwn ? 'none' : '1px solid rgba(255,255,255,0.8)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}
              >
                <p className="text-sm text-gray-800">{msg.content}</p>
                <p className="text-[9px] text-gray-400 mt-1 text-right">{formatTime(msg.timestamp)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div
          className="px-3 py-2 border-t border-white/40 flex items-center gap-2"
          style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(16px)' }}
        >
          <button className="p-2 rounded-full hover:bg-gray-100"><Plus size={16} className="text-gray-500" /></button>
          <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-full" style={{ background: 'rgba(240,248,255,0.8)', border: '1px solid rgba(220,230,255,0.6)' }}>
            <input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder-gray-400"
            />
            <button className="text-gray-400"><Image size={14} /></button>
          </div>
          <button
            onClick={inputText.trim() ? sendMessage : undefined}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{
              background: inputText.trim() ? 'linear-gradient(135deg, #059669, #10b981)' : 'rgba(200,200,200,0.5)',
            }}
          >
            {inputText.trim() ? <Send size={14} className="text-white ml-0.5" /> : <Mic size={14} className="text-gray-400" />}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in">
      {/* Section Tabs */}
      <div className="px-4 py-3">
        <h1 className="text-lg font-bold text-gray-800 mb-3">💬 Guest Room</h1>
        <div className="flex gap-2">
          {(['chats', 'calls', 'live'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              className="flex-1 py-2 rounded-xl text-xs font-semibold transition-all"
              style={{
                background: activeSection === s
                  ? 'linear-gradient(135deg, #1e40af, #3b82f6)'
                  : 'rgba(255,255,255,0.7)',
                color: activeSection === s ? 'white' : '#64748b',
                boxShadow: activeSection === s ? '0 4px 12px rgba(30,64,175,0.25)' : 'none',
              }}
            >
              {s === 'chats' ? '💬 Chats' : s === 'calls' ? '📞 Calls' : '🔴 Live'}
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="px-4 mb-3">
        <div className="flex items-center gap-2 px-3 py-2 rounded-2xl" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.7)' }}>
          <Search size={14} className="text-gray-400" />
          <input placeholder="Search contacts..." className="flex-1 bg-transparent text-sm text-gray-600 outline-none placeholder-gray-400" />
        </div>
      </div>

      {activeSection === 'chats' && (
        <div className="px-3 space-y-1">
          {MOCK_CONTACTS.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveChat(c)}
              className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-white/70 transition-colors text-left"
              style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.7)' }}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl glass-icon">
                  {c.avatar}
                </div>
                {c.status === 'online' && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-gray-800">{c.name}</span>
                  <span className="text-[10px] text-gray-400">{c.lastSeen}</span>
                </div>
                <p className="text-xs text-gray-500 truncate mt-0.5">{c.lastMessage}</p>
              </div>
              {c.unread > 0 && (
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                  <span className="text-[10px] text-white font-bold">{c.unread}</span>
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {activeSection === 'calls' && (
        <div className="px-4 text-center py-8">
          <div className="text-5xl mb-4">📞</div>
          <p className="text-gray-600 font-semibold">Audio & Video Calling</p>
          <p className="text-sm text-gray-400 mt-2">Powered by Agora & Twilio</p>
          <div className="grid grid-cols-2 gap-3 mt-6">
            <button className="py-3 rounded-2xl text-sm font-semibold text-white" style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}>
              📞 Voice Call
            </button>
            <button className="py-3 rounded-2xl text-sm font-semibold text-white" style={{ background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)' }}>
              📹 Video Call
            </button>
          </div>
        </div>
      )}

      {activeSection === 'live' && (
        <div className="px-4">
          <div className="rounded-2xl p-4 mb-3" style={{ background: 'linear-gradient(135deg, #dc2626, #ef4444)', boxShadow: '0 4px 16px rgba(220,38,38,0.3)' }}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-white pulse-glow" />
              <span className="text-white font-bold text-sm">LIVE STREAMING</span>
            </div>
            <p className="text-white/80 text-xs">Powered by Agora RTC</p>
          </div>
          <p className="text-gray-500 text-sm text-center">Live streams will appear here</p>
        </div>
      )}
    </div>
  );
};

export default GuestsTab;
