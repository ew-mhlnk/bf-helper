import React, { useState } from 'react';
import Layout from '../components/Layout';
import { CreditCard, Droplet, ArrowRight, ArrowLeft, AlertTriangle, Ban, MapPin, ExternalLink, Info } from 'lucide-react';

type TabType = 'there' | 'back';

const AsianTripPage: React.FC = () => {
  const[activeTab, setActiveTab] = useState<TabType>('there');

  const handleTabChange = (tab: TabType) => {
    if (navigator.vibrate) navigator.vibrate(15);
    setActiveTab(tab);
  };

  return (
    <Layout title="Азия" showBack={true}>
      
      {/* ======================= ВКАДКИ (Стиль KZ-тягача) ======================= */}
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
              <SectionHeader title="🇧🇾 Беларусь" color="text-red-600 dark:text-red-400" />
              <StationCard 
                title="Газпром"
                payment="Карта Газпром"
                volume="Полные баки"
              />
              <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-sm font-bold p-3 rounded-lg border border-blue-200 dark:border-blue-900">
                Норма выхода из РБ: <span className="underline">полные баки</span>
                <span className="font-normal text-xs block mt-1.5 opacity-90">
                  (которые были заправлены на Газпроме)
                </span>
              </div>
            </section>

            {/* РОССИЯ */}
            <section>
              <SectionHeader title="🇷🇺 Россия" color="text-green-600 dark:text-green-400" />
              <div className="bg-gray-100 dark:bg-[#1e1e1e] p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex items-center gap-2 text-gray-700 dark:text-gray-300 font-bold text-sm">
                <Ban size={18} className="text-gray-500" /> Не заправляемся
              </div>
            </section>

            {/* КАЗАХСТАН */}
            <section>
              <SectionHeader title="🇰🇿 Казахстан" color="text-blue-600 dark:text-blue-400" />
              
              <div className="mb-3 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 text-sm p-3 rounded-lg border border-yellow-200 dark:border-yellow-900">
                <div className="flex items-start gap-2 font-bold">
                  <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                  <div>
                    E1card <span className="font-normal text-xs block mt-0.5">(Гелиос, QazaqOil, SinoOil, КазМунайГаз)</span>
                    <span className="underline block mt-1">только дозаправка до Газпрома.</span>
                  </div>
                </div>
              </div>

              <StationCard 
                title="Газпром"
                payment="Карта Газпром"
                volume="Полные баки"
              />

              <div className="mt-3">
                <div className="flex items-center justify-between mb-1.5 px-1">
                   <div className="flex items-center gap-1.5 text-sm font-bold text-gray-900 dark:text-white">
                     <MapPin className="w-4 h-4 text-red-500" /> Карта АЗС Газпромнефть
                   </div>
                   <a href="https://www.google.com/maps/d/u/0/edit?hl=ru&mid=1wBABmhguk01P-vYxwb_9opSFg7w_AG8&ll=46.25409794785733%2C64.69691350000002&z=5" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-xs flex items-center gap-1 font-bold">
                    Открыть <ExternalLink size={12} />
                   </a>
                </div>
                <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1e1e1e] aspect-video relative shadow-sm">
                  <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1wBABmhguk01P-vYxwb_9opSFg7w_AG8&ehbc=2E312F" className="absolute inset-0 w-full h-full border-0" title="Карта АЗС Газпромнефть КЗ"></iframe>
                </div>
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

              <div className="mt-3 mb-4">
                <div className="flex items-center justify-between mb-1.5 px-1">
                   <div className="flex items-center gap-1.5 text-sm font-bold text-gray-900 dark:text-white">
                     <MapPin className="w-4 h-4 text-red-500" /> Карта АЗС Газпромнефть
                   </div>
                   <a href="https://www.google.com/maps/d/u/0/edit?hl=ru&mid=1wBABmhguk01P-vYxwb_9opSFg7w_AG8&ll=46.25409794785733%2C64.69691350000002&z=5" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-xs flex items-center gap-1 font-bold">
                    Открыть <ExternalLink size={12} />
                   </a>
                </div>
                <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1e1e1e] aspect-video relative shadow-sm">
                  <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1wBABmhguk01P-vYxwb_9opSFg7w_AG8&ehbc=2E312F" className="absolute inset-0 w-full h-full border-0" title="Карта АЗС Газпромнефть КЗ"></iframe>
                </div>
              </div>

              <div className="mb-3 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 text-sm p-3 rounded-lg border border-yellow-200 dark:border-yellow-900">
                <div className="flex items-start gap-2 font-bold">
                  <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                  <div>
                    E1card <span className="font-normal text-xs block mt-0.5">(Гелиос, QazaqOil, SinoOil, КазМунайГаз)</span>
                    <span className="underline block mt-1">только дозаправка.</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-sm font-bold p-3 rounded-lg border border-blue-200 dark:border-blue-900">
                <div className="flex items-start gap-2">
                   <Info size={18} className="shrink-0 mt-0.5" />
                   <div className="space-y-1 w-full">
                     <p>Норма выхода из КЗ: <span className="underline">полные баки</span> <span className="font-normal text-xs block mt-0.5">(которые были заправлены на Газпроме)</span></p>
                     <div className="w-full h-px bg-blue-200 dark:bg-blue-800/50 my-2"></div>
                     <p className="text-xs font-normal">
                       Если была дозаправка по карте E1card, норма входа в РБ — <span className="font-bold underline text-[13px]">до 200л суммарно.</span>
                     </p>
                   </div>
                </div>
              </div>
            </section>

            {/* РОССИЯ */}
            <section>
              <SectionHeader title="🇷🇺 Россия" color="text-green-600 dark:text-green-400" />
              <div className="bg-gray-100 dark:bg-[#1e1e1e] p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex items-center gap-2 text-gray-700 dark:text-gray-300 font-bold text-sm">
                <Ban size={18} className="text-gray-500" /> Не заправляемся
              </div>

              <div className="mt-2 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-400 text-sm font-bold p-3 rounded-lg border border-red-200 dark:border-red-900">
                <div className="flex items-start gap-2">
                  <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                  <div>
                    ЕСЛИ случай нестандартный и требует заправки в РФ:
                    <ul className="font-normal text-xs mt-1.5 space-y-1">
                      <li>• Согласовать заправку с Михаленок Е.В.</li>
                      <li>• Норма входа в РБ: <span className="font-bold underline text-[13px]">не более 100 л.</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

          </div>
        )}

      </div>
    </Layout>
  );
};

// --- КОМПОНЕНТЫ (Стиль KZ-тягача) ---

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