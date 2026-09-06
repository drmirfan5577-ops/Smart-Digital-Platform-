import { useEffect } from 'react';
import { useAppStore } from '@/stores/appStore';
import AppLayout from '@/components/layout/AppLayout';
import HomeTab from './HomeTab';
import GuestsTab from './GuestsTab';
import GlobalTab from './GlobalTab';
import ParadiseTab from './ParadiseTab';
import ESmartTab from './ESmartTab';
import ESOneWorldTab from './ESOneWorldTab';

const Index: React.FC = () => {
  const { activeTab, theme } = useAppStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const renderTab = () => {
    switch (activeTab) {
      case 'home': return <HomeTab />;
      case 'guests': return <GuestsTab />;
      case 'global': return <GlobalTab />;
      case 'esmart': return <ESmartTab />;
      case 'paradise': return <ParadiseTab />;
      case 'esonewold': return <ESOneWorldTab />;
      default: return <HomeTab />;
    }
  };

  return (
    <AppLayout>
      {renderTab()}
    </AppLayout>
  );
};

export default Index;
