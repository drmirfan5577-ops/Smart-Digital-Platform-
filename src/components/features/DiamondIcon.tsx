import { AppIcon } from '@/types';

interface DiamondIconProps {
  app: AppIcon;
  size?: number;
  onClick?: () => void;
}

const DiamondIcon: React.FC<DiamondIconProps> = ({ app, size = 60, onClick }) => {
  const s = size;
  const innerS = s * 0.7;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (app.url) {
      window.open(app.url, '_blank');
    }
  };

  return (
    <button
      className="flex flex-col items-center gap-1 group"
      onClick={handleClick}
      style={{ width: s + 16, minHeight: s + 28 }}
    >
      {/* Diamond container */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: s, height: s }}
      >
        {/* Outer diamond */}
        <div
          className="absolute inset-0 transition-all duration-200 group-active:scale-95"
          style={{
            background: `linear-gradient(135deg, ${app.gradientFrom} 0%, ${app.gradientTo} 100%)`,
            transform: 'rotate(45deg)',
            borderRadius: '22%',
            boxShadow: `
              0 6px 0 rgba(0,0,0,0.18),
              0 8px 16px rgba(0,0,0,0.14),
              inset 0 1px 0 rgba(255,255,255,0.9),
              inset 0 -2px 0 rgba(0,0,0,0.1),
              0 0 20px ${app.gradientTo}40
            `,
            border: '1.5px solid rgba(255,255,255,0.7)',
          }}
        />
        {/* Glass shine overlay */}
        <div
          className="absolute"
          style={{
            top: '8%',
            left: '8%',
            right: '8%',
            height: '45%',
            transform: 'rotate(45deg)',
            borderRadius: '20% 20% 0 0',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)',
            zIndex: 1,
          }}
        />
        {/* Icon */}
        <span
          className="relative z-10 select-none transition-transform duration-200 group-active:scale-90"
          style={{ fontSize: innerS * 0.45 }}
        >
          {app.icon}
        </span>
      </div>

      {/* Label */}
      <span
        className="text-center leading-tight font-medium text-gray-700 group-hover:text-gray-900 transition-colors"
        style={{ fontSize: 9, maxWidth: s + 16, wordBreak: 'break-word', lineHeight: 1.2 }}
      >
        {app.name}
      </span>
    </button>
  );
};

export default DiamondIcon;
