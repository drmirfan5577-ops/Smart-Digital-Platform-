export interface AppIcon {
  id: string;
  name: string;
  nameUrdu?: string;
  icon: string;
  url?: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  category: string;
}

export interface Theme {
  id: string;
  name: string;
  nameUrdu: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  accentColor: string;
}

export interface ChatMessage {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'voice' | 'image' | 'video';
  isOwn: boolean;
}

export interface Contact {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline' | 'away';
  lastMessage: string;
  unread: number;
  lastSeen: string;
}

export interface IslamicContent {
  type: 'quran' | 'hadees' | 'prayer';
  title: string;
  arabic: string;
  urdu: string;
  english: string;
  reference: string;
}

export type TabId = 'home' | 'guests' | 'global' | 'esmart' | 'paradise' | 'esonewold';

export interface AppState {
  activeTab: TabId;
  theme: string;
  isDark: boolean;
  language: string;
  leftSidebarOpen: boolean;
  rightSidebarOpen: boolean;
  isAdminLoggedIn: boolean;
}
