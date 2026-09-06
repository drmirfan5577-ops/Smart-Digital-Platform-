import { useAppStore } from '@/stores/appStore';
import { Star } from 'lucide-react';
import bismillahBanner from '@/assets/bismillah-banner.png';

const BismillahHeader: React.FC = () => {
  const { toggleLeftSidebar, toggleRightSidebar } = useAppStore();

  return (
    <div className="relative px-4 py-3">
      {/* Star buttons */}
      <button
        onClick={toggleLeftSidebar}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 active:scale-90"
        style={{
          background: 'linear-gradient(135deg, #ffd700, #ff8c00)',
          boxShadow: '0 4px 12px rgba(255,165,0,0.4), 0 0 20px rgba(255,165,0,0.3)',
        }}
      >
        <Star size={18} className="text-white fill-white" />
      </button>

      {/* Bismillah */}
      <div className="flex flex-col items-center mx-12">
        <img
          src={bismillahBanner}
          alt="Bismillah ir-Rahman ir-Rahim"
          className="w-full max-w-[220px] h-12 object-cover rounded-xl opacity-0 absolute"
          onLoad={(e) => { (e.target as HTMLImageElement).style.opacity = '1'; }}
        />
        <div className="text-center">
          <p
            className="font-arabic text-xl font-bold leading-tight"
            style={{
              color: '#c8930a',
              textShadow: '0 0 10px rgba(200,147,10,0.3)',
              fontFamily: "'Amiri', serif",
            }}
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="text-[10px] text-gray-500 font-medium mt-0.5">
            Bismillah ir-Rahman ir-Rahim
          </p>
          <p className="text-[9px] text-emerald-700 font-urdu" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
            اللہ کے نام سے جو بڑا مہربان، نہایت رحم والا ہے
          </p>
        </div>
      </div>

      {/* Right star */}
      <button
        onClick={toggleRightSidebar}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 active:scale-90"
        style={{
          background: 'linear-gradient(135deg, #ffd700, #ff8c00)',
          boxShadow: '0 4px 12px rgba(255,165,0,0.4), 0 0 20px rgba(255,165,0,0.3)',
        }}
      >
        <Star size={18} className="text-white fill-white" />
      </button>
    </div>
  );
};

export default BismillahHeader;
