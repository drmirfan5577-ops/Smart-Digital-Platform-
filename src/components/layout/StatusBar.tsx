import { useState, useEffect } from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

const StatusBar: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (d: Date) => {
    let h = d.getHours();
    const m = String(d.getMinutes()).padStart(2, '0');
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return `${h}:${m} ${ampm}`;
  };

  return (
    <div className="relative z-20 flex items-center justify-between px-4 py-1.5 glass-card border-b border-white/40" style={{ minHeight: 32 }}>
      <span className="text-xs font-semibold text-gray-600">{formatTime(time)}</span>
      <div className="flex items-center gap-1.5">
        <Signal size={13} className="text-gray-500" />
        <Wifi size={13} className="text-gray-500" />
        <Battery size={14} className="text-gray-500" />
      </div>
    </div>
  );
};

export default StatusBar;
