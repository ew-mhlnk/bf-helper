import React, { useState } from 'react';
import Layout from '../components/Layout';
import { CreditCard, Droplet, ArrowRight, ArrowLeft, AlertTriangle, Info, Ban } from 'lucide-react';

type TabType = 'there' | 'back';

const AsianTripPage: React.FC = () => {
  const[activeTab, setActiveTab] = useState<TabType>('there');

  const handleTabChange = (tab: TabType) => {
    if (navigator.vibrate) navigator.vibrate(15);
    setActiveTab(tab);
  };

  return (
    <Layout title="Азия (BY-тягач)">
      
      {/* ПЕРЕКЛЮЧАТЕЛЬ ВКЛАДОК */}
      <div className="flex p-1 bg-gray-200 dark:bg-gray-800 rounded-xl mb-4 sticky top-[60px] z-40 shadow-sm mx-[-8px]">
        <button
          onClick={() => handleTabChange('there')}
          className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'there'
              ? 'bg-blue-600 text-white shadow-md transform scale-[1.02]' 
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          Туда <ArrowRight size={18} />
        </button>
        <button
          onClick={() => handleTabChange('back')}
          className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'back'
              ? 'bg-green-600 text-white shadow-md transform scale-[1.02]' 
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          <ArrowLeft size={18} /> Обратно
        </button>
      </div>

      <div className="space-y-6 pb-8">
        
        {/* ======================= ТУДА ======================= */}
        {activeTab === 'there' && (
          <div className="animate-in fade-in slide-in-from-left-4 duration-300 space-y-5">
            
            {/* БЕЛАРУСЬ */}
            <section>
              <SectionHeader title="🇧🇾 Беларусь" color="text-green-600 dark:text-green-400" />
              <StationCard 
                title="Газпром"
                payment="Карта Газпром"
                volume="Полные баки"
              />
              <div className="mt-2 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-sm font-bold p-3 rounded-lg border border-green-200 dark:border-green-900">
                Норма выхода из РБ: <span className="underline">полные баки</span>
              </div>
            </section>

            {/* РОССИЯ */}
            <section>
              <SectionHeader title="🇷🇺 Россия" color="text-red-600 dark:text-red-400" />
              <div className="p-4 rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 flex gap-3 items-center">
                <Ban size={24} className="text-red-600 dark:text-red-400 shrink-0" />
                <p className="text-red-800 dark:text-red-300 text-base font-bold uppercase">
                  Не заправляемся
                </p>
              </div>
            </section>

            {/* КАЗАХСТАН */}
            <section>
              <SectionHeader title="🇰🇿 Казахстан" color="text-blue-600 dark:text-blue-400" />
              <StationCard 
                title="Газпром"
                payment="Карта Газпром"
                volume="Полные баки"
              />
              <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-sm font-bold p-3 rounded-lg border border-blue-200 dark:border-blue-900">
                Норма выхода из КЗ: <span className="underline">полные баки</span>
              </div>

              <div className="mt-3 flex items-start gap-2 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-200 dark:border-amber-800">
                <AlertTriangle size={20} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <p className="text-sm font-bold text-amber-800 dark:text-amber-300">
                  <span className="text-red-600 dark:text-red-400">!!!</span> E1card (Гелиос, QazaqOil, SinoOil, КазМунайГаз) — <span className="underline">только дозаправка до Газпрома</span>
                </p>
              </div>
            </section>

          </div>
        )}

        {/* ======================= ОБРАТНО ======================= */}
        {activeTab === 'back' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-5">
            
            {/* КАЗАХСТАН */}
            <section>
              <SectionHeader title="🇰🇿 Казахстан" color="text-blue-600 dark:text-blue-400" />
              <StationCard 
                title="Газпром"
                payment="Карта Газпром"
                volume="Полные баки"
              />
              <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-sm font-bold p-3 rounded-lg border border-blue-200 dark:border-blue-900">
                Норма выхода из КЗ: <span className="underline">полные баки</span>
              </div>

              <div className="mt-3 flex items-start gap-2 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-200 dark:border-amber-800">
                <AlertTriangle size={20} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <p className="text-sm font-bold text-amber-800 dark:text-amber-300">
                  <span className="text-red-600 dark:text-red-400">!!!</span> E1card (Гелиос, QazaqOil, SinoOil, КазМунайГаз) — <span className="underline">только дозаправка до Газпрома</span>
                </p>
              </div>
            </section>

            {/* РОССИЯ */}
            <section>
              <SectionHeader title="🇷🇺 Россия" color="text-red-600 dark:text-red-400" />
              <div className="p-4 rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 flex gap-3 items-center mb-3">
                <Ban size={24} className="text-red-600 dark:text-red-400 shrink-0" />
                <p className="text-red-800 dark:text-red-300 text-base font-bold uppercase">
                  Не заправляемся
                </p>
              </div>

              {/* ИСКЛЮЧЕНИЕ */}
              <div className="bg-gray-50 dark:bg-[#1a1a1a] p-4 rounded-xl border border-gray-200 dark:border-gray-800">
                <div className="flex gap-2 items-start mb-2">
                  <Info size={20} className="text-blue-600 dark:text-blue-400 shrink-0" />
                  <p className="text-sm font-bold text-gray-900 dark:text-white uppercase">
                    ЕСЛИ случай нестандартный и требует заправки в РФ:
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300 ml-1">
                  <li>Согласовать заправку с Михаленок Е.В.</li>
                  <li className="font-bold text-red-600 dark:text-red-400 pt-1">Норма входа в РБ: не более 100 л.</li>
                </ul>
              </div>
            </section>

          </div>
        )}

      </div>
    </Layout>
  );
};

// --- КОМПОНЕНТЫ ---

const SectionHeader = ({ title, color }: { title: string, color: string }) => (
  <h2 className={`text-base font-bold mb-2 flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-1 ${color}`}>
    {title}
  </h2>
);

interface StationProps {
  title: string;
  payment: string;
  volume: string;
}

const StationCard: React.FC<StationProps> = ({ title, payment, volume }) => {
  return (
    <div className="bg-white dark:bg-[#1e1e1e] p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="mb-2">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{title}</h3>
      </div>
      <div className="space-y-1.5 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-5 shrink-0 text-gray-400"><CreditCard size={16}/></div>
          <span className="text-gray-700 dark:text-gray-300 font-medium">Карта: {payment}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 shrink-0 text-gray-400"><Droplet size={16}/></div>
          <span className="text-gray-700 dark:text-gray-300">Объем: <span className="font-bold">{volume}</span></span>
        </div>
      </div>
    </div>
  );
};

export default AsianTripPage;