import { useState } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

const QURAN_SURAHS = [
  { num: 1, name: 'Al-Fatiha', nameUrdu: 'الفاتحہ', nameAr: 'الْفَاتِحَة', verses: 7, juz: 1 },
  { num: 2, name: 'Al-Baqarah', nameUrdu: 'البقرہ', nameAr: 'الْبَقَرَة', verses: 286, juz: 1 },
  { num: 3, name: 'Aal-E-Imran', nameUrdu: 'آل عمران', nameAr: 'آل عِمْرَان', verses: 200, juz: 3 },
  { num: 4, name: "An-Nisa'", nameUrdu: 'النساء', nameAr: 'النِّسَاء', verses: 176, juz: 4 },
  { num: 5, name: 'Al-Maidah', nameUrdu: 'المائدہ', nameAr: 'الْمَائِدَة', verses: 120, juz: 6 },
  { num: 36, name: 'Ya-Sin', nameUrdu: 'یٰسین', nameAr: 'يس', verses: 83, juz: 22 },
  { num: 55, name: 'Ar-Rahman', nameUrdu: 'الرحمن', nameAr: 'الرَّحْمَان', verses: 78, juz: 27 },
  { num: 112, name: 'Al-Ikhlas', nameUrdu: 'الاخلاص', nameAr: 'الإِخْلَاص', verses: 4, juz: 30 },
  { num: 113, name: 'Al-Falaq', nameUrdu: 'الفلق', nameAr: 'الْفَلَق', verses: 5, juz: 30 },
  { num: 114, name: 'An-Nas', nameUrdu: 'الناس', nameAr: 'النَّاس', verses: 6, juz: 30 },
];

const HADEES = [
  {
    arabic: 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ',
    urdu: 'اعمال کا دارومدار نیتوں پر ہے',
    english: 'Actions are according to intentions',
    reference: 'Bukhari & Muslim',
  },
  {
    arabic: 'الدِّينُ النَّصِيحَةُ',
    urdu: 'دین خیر خواہی کا نام ہے',
    english: 'Religion is sincere counsel',
    reference: 'Muslim',
  },
  {
    arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
    urdu: 'تم میں سے بہترین وہ ہے جو قرآن سیکھے اور سکھائے',
    english: 'The best among you is one who learns and teaches the Quran',
    reference: 'Bukhari',
  },
];

const PRAYER_TIMES = [
  { name: 'Fajr', nameUrdu: 'فجر', time: '05:12 AM', status: 'passed' },
  { name: 'Sunrise', nameUrdu: 'سورج طلوع', time: '06:38 AM', status: 'passed' },
  { name: 'Dhuhr', nameUrdu: 'ظہر', time: '12:30 PM', status: 'next' },
  { name: 'Asr', nameUrdu: 'عصر', time: '04:15 PM', status: 'upcoming' },
  { name: 'Maghrib', nameUrdu: 'مغرب', time: '06:52 PM', status: 'upcoming' },
  { name: 'Isha', nameUrdu: 'عشاء', time: '08:20 PM', status: 'upcoming' },
];

type Section = 'quran' | 'hadees' | 'prayer' | 'series';

const ParadiseTab: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('quran');
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSurah, setSelectedSurah] = useState(QURAN_SURAHS[0]);

  return (
    <div className="fade-in pb-4">
      <div className="px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">☪️</span>
          <div>
            <h1 className="text-lg font-bold text-gray-800">Paradise</h1>
            <p className="text-xs text-emerald-600 font-urdu" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>جنت - اسلامی مواد</p>
          </div>
        </div>
      </div>

      {/* Section Nav */}
      <div className="px-4 mb-4">
        <div className="grid grid-cols-4 gap-1 p-1 rounded-2xl" style={{ background: 'rgba(255,255,255,0.7)' }}>
          {(['quran', 'hadees', 'prayer', 'series'] as Section[]).map((s) => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              className="py-2 rounded-xl text-[10px] font-bold transition-all"
              style={{
                background: activeSection === s ? 'linear-gradient(135deg, #065f46, #10b981)' : 'transparent',
                color: activeSection === s ? 'white' : '#64748b',
                boxShadow: activeSection === s ? '0 2px 8px rgba(6,95,70,0.3)' : 'none',
              }}
            >
              {s === 'quran' ? '📖 Quran' : s === 'hadees' ? '📜 Hadees' : s === 'prayer' ? '🕌 Prayer' : '📺 Series'}
            </button>
          ))}
        </div>
      </div>

      {/* Quran Section */}
      {activeSection === 'quran' && (
        <div className="px-4">
          {/* Player */}
          <div
            className="rounded-3xl p-4 mb-4"
            style={{
              background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 50%, #6ee7b7 100%)',
              boxShadow: '0 8px 24px rgba(6,95,70,0.2)',
            }}
          >
            <div className="text-center mb-3">
              <p className="text-2xl font-bold text-emerald-800" style={{ fontFamily: "'Amiri', serif" }}>
                {selectedSurah.nameAr}
              </p>
              <p className="text-sm font-semibold text-emerald-700">{selectedSurah.name}</p>
              <p className="text-[10px] text-emerald-600 font-urdu" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                {selectedSurah.nameUrdu} - {selectedSurah.verses} آیات
              </p>
            </div>

            {/* Audio Controls */}
            <div className="flex items-center justify-center gap-4">
              <button className="p-2 rounded-full bg-emerald-800/20 hover:bg-emerald-800/30">
                <ChevronLeft size={16} className="text-emerald-800" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-14 h-14 rounded-full flex items-center justify-center transition-all active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #065f46, #059669)',
                  boxShadow: '0 4px 16px rgba(6,95,70,0.4)',
                }}
              >
                {isPlaying ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white ml-1" />}
              </button>
              <button className="p-2 rounded-full bg-emerald-800/20 hover:bg-emerald-800/30">
                <ChevronRight size={16} className="text-emerald-800" />
              </button>
            </div>

            {/* Progress bar */}
            <div className="mt-3 mx-2">
              <div className="h-1.5 rounded-full bg-emerald-800/20">
                <div className="h-full w-1/3 rounded-full bg-emerald-800/60" />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[9px] text-emerald-700">2:30</span>
                <span className="text-[9px] text-emerald-700">7:45</span>
              </div>
            </div>
          </div>

          {/* Surah List */}
          <div className="space-y-2">
            {QURAN_SURAHS.map((s) => (
              <button
                key={s.num}
                onClick={() => setSelectedSurah(s)}
                className="w-full flex items-center gap-3 p-3 rounded-2xl text-left transition-all"
                style={{
                  background: selectedSurah.num === s.num ? 'rgba(6,95,70,0.08)' : 'rgba(255,255,255,0.6)',
                  border: selectedSurah.num === s.num ? '1px solid rgba(6,95,70,0.25)' : '1px solid rgba(255,255,255,0.7)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold"
                  style={{ background: 'linear-gradient(135deg, #d1fae5, #6ee7b7)', color: '#065f46' }}
                >
                  {s.num}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-semibold text-gray-800">{s.name}</span>
                    <span className="text-[10px] text-gray-400 font-urdu" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>{s.nameUrdu}</span>
                  </div>
                  <span className="text-[10px] text-gray-500">{s.verses} Verses · Juz {s.juz}</span>
                </div>
                <span className="text-lg" style={{ fontFamily: "'Amiri', serif", color: '#065f46' }}>{s.nameAr}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hadees Section */}
      {activeSection === 'hadees' && (
        <div className="px-4 space-y-4">
          {HADEES.map((h, i) => (
            <div
              key={i}
              className="rounded-2xl p-4"
              style={{
                background: 'rgba(255,255,255,0.8)',
                border: '1px solid rgba(255,255,255,0.8)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
              }}
            >
              <p
                className="text-xl text-right text-gray-800 mb-3 leading-loose"
                style={{ fontFamily: "'Amiri', serif", direction: 'rtl' }}
              >
                {h.arabic}
              </p>
              <p className="text-sm text-right text-emerald-700 mb-2 font-urdu" style={{ fontFamily: "'Noto Nastaliq Urdu', serif", direction: 'rtl' }}>
                {h.urdu}
              </p>
              <p className="text-xs text-gray-600 italic mb-2">{h.english}</p>
              <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                <span className="text-[10px] text-amber-600 font-semibold">{h.reference}</span>
                <BookOpen size={12} className="text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Prayer Times */}
      {activeSection === 'prayer' && (
        <div className="px-4">
          <div
            className="rounded-2xl overflow-hidden mb-4"
            style={{ background: 'linear-gradient(135deg, #065f46, #059669)', boxShadow: '0 8px 24px rgba(6,95,70,0.25)' }}
          >
            <div className="p-4 text-center">
              <p className="text-white/80 text-xs">Next Prayer</p>
              <p className="text-white text-2xl font-bold">Dhuhr · ظہر</p>
              <p className="text-green-200 text-lg font-mono">12:30 PM</p>
              <p className="text-white/70 text-xs mt-1">In 45 minutes</p>
            </div>
          </div>

          <div className="space-y-2">
            {PRAYER_TIMES.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-between p-3 rounded-xl"
                style={{
                  background: p.status === 'next'
                    ? 'rgba(6,95,70,0.1)'
                    : 'rgba(255,255,255,0.65)',
                  border: p.status === 'next'
                    ? '1.5px solid rgba(6,95,70,0.3)'
                    : '1px solid rgba(255,255,255,0.7)',
                }}
              >
                <div>
                  <span className="font-semibold text-sm text-gray-800">{p.name}</span>
                  <span className="ml-2 text-[10px] text-gray-400 font-urdu" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                    {p.nameUrdu}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-emerald-700">{p.time}</span>
                  {p.status === 'passed' && <span className="text-[9px] text-gray-400">✓</span>}
                  {p.status === 'next' && <span className="text-[9px] text-emerald-600 font-bold pulse-glow">NEXT</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Islamic Series */}
      {activeSection === 'series' && (
        <div className="px-4 text-center py-8">
          <div className="text-5xl mb-4">📺</div>
          <p className="font-semibold text-gray-700">Islamic Series & Lectures</p>
          <p className="text-sm text-gray-400 mt-2">Coming soon with full video integration</p>
          <div className="grid grid-cols-2 gap-3 mt-6">
            {['Quran Tafsir', 'Seerah', 'Fiqh Classes', 'Islamic History'].map((s) => (
              <div
                key={s}
                className="p-3 rounded-2xl text-center"
                style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.7)' }}
              >
                <div className="text-2xl mb-1">🎬</div>
                <p className="text-xs font-semibold text-gray-700">{s}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ParadiseTab;
