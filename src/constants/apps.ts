import { AppIcon } from '@/types';

export const HOME_APPS: AppIcon[] = [
  // Hubs Row 1
  { id: 'islamic-hub', name: 'Islamic Hub', nameUrdu: 'اسلامی مرکز', icon: '☪️', url: '', color: '#065f46', gradientFrom: '#d1fae5', gradientTo: '#059669', category: 'hub' },
  { id: 'smart-hub', name: 'Smart Hub', nameUrdu: 'سمارٹ مرکز', icon: '🧠', url: '', color: '#1d4ed8', gradientFrom: '#dbeafe', gradientTo: '#2563eb', category: 'hub' },
  { id: 'social-hub', name: 'Social Hub', nameUrdu: 'سوشل مرکز', icon: '🌐', url: '', color: '#7c3aed', gradientFrom: '#ede9fe', gradientTo: '#8b5cf6', category: 'hub' },
  { id: 'news-hub', name: 'News Hub', nameUrdu: 'خبریں', icon: '📰', url: '', color: '#c2410c', gradientFrom: '#ffedd5', gradientTo: '#ea580c', category: 'hub' },
  // Row 2
  { id: 'ai-hub', name: 'A.I Hub', nameUrdu: 'اے آئی', icon: '🤖', url: '', color: '#7c3aed', gradientFrom: '#f5f3ff', gradientTo: '#8b5cf6', category: 'hub' },
  { id: 'general-hub', name: 'General Hub', nameUrdu: 'عام مرکز', icon: '📁', url: '', color: '#0369a1', gradientFrom: '#e0f2fe', gradientTo: '#0284c7', category: 'hub' },
  { id: 'quran-paak', name: 'Quran Paak', nameUrdu: 'قرآن پاک', icon: '📖', url: 'https://quran.com', color: '#065f46', gradientFrom: '#d1fae5', gradientTo: '#10b981', category: 'islamic' },
  { id: 'ahaadees', name: 'Ahaadees', nameUrdu: 'احادیث', icon: '📜', url: 'https://sunnah.com', color: '#92400e', gradientFrom: '#fef3c7', gradientTo: '#d97706', category: 'islamic' },
  // Row 3
  { id: 'prayers', name: 'Prayers & Azkaar', nameUrdu: 'نماز و اذکار', icon: '🤲', url: 'https://www.islamicfinder.org/duas/', color: '#065f46', gradientFrom: '#ecfdf5', gradientTo: '#10b981', category: 'islamic' },
  { id: 'tafsir', name: 'Tafsir', nameUrdu: 'تفسیر', icon: '📗', url: 'https://quran.com/1:1/tafsirs', color: '#166534', gradientFrom: '#f0fdf4', gradientTo: '#16a34a', category: 'islamic' },
  { id: 'quran-science', name: 'Quran Science', nameUrdu: 'علم القرآن', icon: '⚛️', url: 'https://quran.com', color: '#1e40af', gradientFrom: '#eff6ff', gradientTo: '#3b82f6', category: 'islamic' },
  { id: 'facebook', name: 'Facebook', nameUrdu: 'فیسبک', icon: '📘', url: 'https://facebook.com', color: '#1877f2', gradientFrom: '#dbeafe', gradientTo: '#1877f2', category: 'social' },
  // Row 4
  { id: 'instagram', name: 'Instagram', nameUrdu: 'انسٹاگرام', icon: '📸', url: 'https://instagram.com', color: '#e1306c', gradientFrom: '#fce7f3', gradientTo: '#ec4899', category: 'social' },
  { id: 'youtube', name: 'YouTube', nameUrdu: 'یوٹیوب', icon: '▶️', url: 'https://youtube.com', color: '#ff0000', gradientFrom: '#fee2e2', gradientTo: '#ef4444', category: 'social' },
  { id: 'app-store', name: 'App Store', nameUrdu: 'ایپ اسٹور', icon: '🍎', url: 'https://apps.apple.com', color: '#0071e3', gradientFrom: '#dbeafe', gradientTo: '#3b82f6', category: 'utility' },
  { id: 'bbc-news', name: 'BBC News', nameUrdu: 'بی بی سی', icon: '📡', url: 'https://bbc.com', color: '#bb1919', gradientFrom: '#fee2e2', gradientTo: '#dc2626', category: 'news' },
  // Row 5
  { id: 'bbc-urdu', name: 'BBC Urdu', nameUrdu: 'بی بی سی اردو', icon: '📡', url: 'https://bbc.com/urdu', color: '#bb1919', gradientFrom: '#fecaca', gradientTo: '#ef4444', category: 'news' },
  { id: 'al-jazeera', name: 'Al Jazeera', nameUrdu: 'الجزیرہ', icon: '🌍', url: 'https://aljazeera.com', color: '#a16207', gradientFrom: '#fef9c3', gradientTo: '#ca8a04', category: 'news' },
  { id: 'aljazeera-urdu', name: 'Al Jazeera Urdu', nameUrdu: 'الجزیرہ اردو', icon: '🌍', url: 'https://aljazeera.com', color: '#0369a1', gradientFrom: '#e0f2fe', gradientTo: '#0284c7', category: 'news' },
  { id: 'gmail', name: 'Gmail', nameUrdu: 'جی میل', icon: '📧', url: 'https://gmail.com', color: '#ea4335', gradientFrom: '#fee2e2', gradientTo: '#f87171', category: 'utility' },
  // Row 6
  { id: 'google-maps', name: 'Google Maps', nameUrdu: 'گوگل نقشہ', icon: '🗺️', url: 'https://maps.google.com', color: '#34a853', gradientFrom: '#dcfce7', gradientTo: '#4ade80', category: 'utility' },
  { id: 'whatsapp', name: 'WhatsApp', nameUrdu: 'واٹس ایپ', icon: '💬', url: 'https://web.whatsapp.com', color: '#25d366', gradientFrom: '#dcfce7', gradientTo: '#22c55e', category: 'social' },
  { id: 'officesuite', name: 'OfficeSuite', nameUrdu: 'آفس سوٹ', icon: '📋', url: 'https://mobi.office/', color: '#7c3aed', gradientFrom: '#ede9fe', gradientTo: '#8b5cf6', category: 'utility' },
  { id: 'media-player', name: 'Media Player', nameUrdu: 'میڈیا پلیئر', icon: '🎬', url: 'https://www.videolan.org/vlc/', color: '#0ea5e9', gradientFrom: '#e0f2fe', gradientTo: '#38bdf8', category: 'media' },
  // Row 7
  { id: 'gallery', name: 'Gallery', nameUrdu: 'گیلری', icon: '🖼️', url: 'https://photos.google.com/', color: '#db2777', gradientFrom: '#fce7f3', gradientTo: '#ec4899', category: 'media' },
  { id: 'wordpress', name: 'WordPress', nameUrdu: 'ورڈپریس', icon: '🌐', url: 'https://wordpress.com', color: '#21759b', gradientFrom: '#e0f2fe', gradientTo: '#0284c7', category: 'utility' },
  { id: 'twitter', name: 'X (Twitter)', nameUrdu: 'ٹوئٹر', icon: '🐦', url: 'https://x.com', color: '#000000', gradientFrom: '#f1f5f9', gradientTo: '#475569', category: 'social' },
  { id: 'tiktok', name: 'TikTok', nameUrdu: 'ٹک ٹاک', icon: '🎵', url: 'https://tiktok.com', color: '#010101', gradientFrom: '#f0fdf4', gradientTo: '#4ade80', category: 'social' },
  ...[
    { id: 'chatgpt', name: 'ChatGPT', url: 'https://chatgpt.com/' },
    { id: 'gemini', name: 'Gemini', url: 'https://gemini.google.com/' },
    { id: 'claude', name: 'Claude', url: 'https://claude.ai/' },
  ].map((app) => ({ ...app, icon: '✦', color: '#065f46', gradientFrom: '#d1fae5', gradientTo: '#059669', category: 'ai' })),
];

export interface SidebarItem { id: string; label: string; icon: string; url?: string }

export const RIGHT_SIDEBAR_ITEMS: SidebarItem[] = [
  { id: 'filters', label: 'Filters', icon: '🔧' },
  { id: 'icon-mgmt', label: 'App Directory', icon: '⚙️' },
  { id: 'agora', url: 'https://www.agora.io/', label: 'Agora', icon: '📞' },
  { id: 'capcut', url: 'https://www.capcut.com/', label: 'CapCut', icon: '✂️' },
  { id: 'netlify', url: 'https://app.netlify.com/', label: 'Netlify', icon: '🚀' },
  { id: 'vercel', url: 'https://vercel.com/', label: 'Vercel', icon: '▲' },
  { id: 'firebase', url: 'https://console.firebase.google.com/', label: 'Firebase', icon: '🔥' },
  { id: 'supabase', url: 'https://supabase.com/dashboard', label: 'Supabase', icon: '⚡' },
  { id: 'expo-go', url: 'https://expo.dev/go', label: 'Expo Go', icon: '📱' },
  { id: 'themes', label: 'Themes', icon: '🎨' },
  { id: 'task-mgr', url: 'https://tasks.google.com/', label: 'Task Mgr', icon: '✅' },
  { id: 'bookmarks', label: 'Bookmarks', icon: '🔖' },
  { id: 'prayer-times', url: 'https://www.islamicfinder.org/', label: 'Prayer Times', icon: '🕌' },
  { id: 'favorites', label: 'Favorites', icon: '❤️' },
  { id: 'deploy', url: 'https://app.netlify.com/', label: 'Deploy Setup', icon: '🛸' },
  { id: 'reminders', url: 'https://calendar.google.com/', label: 'Reminders', icon: '⏰' },
  { id: 'notes', url: 'https://keep.google.com/', label: 'Notes', icon: '📝' },
];

export const LEFT_SIDEBAR_ITEMS: SidebarItem[] = [
  { id: 'weather', url: 'https://weather.com/', label: 'Weather', icon: '⛅' },
  { id: 'sheets', url: 'https://sheets.google.com/', label: 'Sheets', icon: '📊' },
  { id: 'github', url: 'https://github.com/', label: 'GitHub', icon: '🐙' },
  { id: 'github2', url: 'https://github.com/explore', label: 'GitHub', icon: '🔗' },
  { id: 'excel', url: 'https://excel.cloud.microsoft/', label: 'Excel', icon: '📗' },
  { id: 'photos', url: 'https://photos.google.com/', label: 'Photos', icon: '📷' },
  { id: 'cloud', url: 'https://drive.google.com/', label: 'Cloud', icon: '☁️' },
  { id: 'insnot', url: 'https://www.inshot.com/', label: 'InShot', icon: '💡' },
  { id: 'blender', url: 'https://www.blender.org/', label: 'Blender', icon: '🔀' },
];
