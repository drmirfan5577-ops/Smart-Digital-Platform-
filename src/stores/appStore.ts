import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TabId } from '@/types';

interface AppStore {
  activeTab: TabId;
  theme: string;
  isDark: boolean;
  language: string;
  leftSidebarOpen: boolean;
  rightSidebarOpen: boolean;
  isAdminLoggedIn: boolean;
  adminPassword: string;
  showThemeSelector: boolean;
  currentUrl: string;
  bookmarks: string[];

  setActiveTab: (tab: TabId) => void;
  setTheme: (theme: string) => void;
  toggleDark: () => void;
  setLanguage: (lang: string) => void;
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
  closeAllSidebars: () => void;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  setShowThemeSelector: (show: boolean) => void;
  setCurrentUrl: (url: string) => void;
  addBookmark: (url: string) => void;
  removeBookmark: (url: string) => void;
  changeAdminPassword: (oldPass: string, newPass: string) => boolean;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      activeTab: 'home',
      theme: 'arctic-white',
      isDark: false,
      language: 'en',
      leftSidebarOpen: false,
      rightSidebarOpen: false,
      isAdminLoggedIn: false,
      adminPassword: '@1122#',
      showThemeSelector: false,
      currentUrl: '',
      bookmarks: [],

      setActiveTab: (tab) => set({ activeTab: tab, leftSidebarOpen: false, rightSidebarOpen: false }),
      
      setTheme: (theme) => {
        set({ theme });
        document.documentElement.setAttribute('data-theme', theme);
      },
      
      toggleDark: () => set((s) => ({ isDark: !s.isDark })),
      
      setLanguage: (lang) => set({ language: lang }),
      
      toggleLeftSidebar: () => set((s) => ({
        leftSidebarOpen: !s.leftSidebarOpen,
        rightSidebarOpen: false,
      })),
      
      toggleRightSidebar: () => set((s) => ({
        rightSidebarOpen: !s.rightSidebarOpen,
        leftSidebarOpen: false,
      })),
      
      closeAllSidebars: () => set({ leftSidebarOpen: false, rightSidebarOpen: false }),
      
      loginAdmin: (password) => {
        const { adminPassword } = get();
        if (password === adminPassword) {
          set({ isAdminLoggedIn: true });
          return true;
        }
        return false;
      },
      
      logoutAdmin: () => set({ isAdminLoggedIn: false }),
      
      setShowThemeSelector: (show) => set({ showThemeSelector: show }),
      
      setCurrentUrl: (url) => set({ currentUrl: url }),
      
      addBookmark: (url) => set((s) => ({
        bookmarks: s.bookmarks.includes(url) ? s.bookmarks : [...s.bookmarks, url],
      })),
      
      removeBookmark: (url) => set((s) => ({
        bookmarks: s.bookmarks.filter((b) => b !== url),
      })),

      changeAdminPassword: (oldPass, newPass) => {
        const { adminPassword } = get();
        if (oldPass === adminPassword) {
          set({ adminPassword: newPass });
          return true;
        }
        return false;
      },
    }),
    {
      name: 'esonewworld-store',
      partialize: (s) => ({
        theme: s.theme,
        isDark: s.isDark,
        language: s.language,
        adminPassword: s.adminPassword,
        bookmarks: s.bookmarks,
      }),
    }
  )
);
