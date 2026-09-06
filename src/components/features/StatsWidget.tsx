import { useState, useEffect } from 'react';

interface StatItem {
  label: string;
  value: string;
  icon: string;
  color: string;
}

const StatsWidget: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const stats: StatItem[] = [
    { label: 'Active Users', value: '2.4M', icon: '👥', color: '#1d4ed8' },
    { label: 'Messages Today', value: '18.7K', icon: '💬', color: '#059669' },
    { label: 'Quran Readers', value: '847K', icon: '📖', color: '#c8930a' },
    { label: 'Streams Live', value: '342', icon: '🔴', color: '#dc2626' },
    { label: 'App Downloads', value: '5.2M', icon: '⬇️', color: '#7c3aed' },
    { label: 'Prayer Alerts', value: '1.1M', icon: '🕌', color: '#065f46' },
  ];

  return (
    <div className="px-3 mb-3">
      <div
        className="rounded-2xl p-3"
        style={{
          background: 'rgba(255,255,255,0.75)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.7)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-gray-700">📊 Live Statistics</span>
          <span className="text-[10px] text-teal-600 font-mono font-bold pulse-glow">
            ● LIVE
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center py-2 rounded-xl"
              style={{ background: `${s.color}12` }}
            >
              <span className="text-base">{s.icon}</span>
              <span className="text-sm font-bold mt-0.5" style={{ color: s.color }}>
                {s.value}
              </span>
              <span className="text-[8px] text-gray-500 text-center leading-tight mt-0.5">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Time display */}
        <div className="mt-2 pt-2 border-t border-white/60 flex items-center justify-between">
          <span className="text-[9px] text-gray-400">Updated: {time.toLocaleTimeString()}</span>
          <span className="text-[9px] text-emerald-600 font-medium">ESOneWorld Platform</span>
        </div>
      </div>
    </div>
  );
};

export default StatsWidget;
