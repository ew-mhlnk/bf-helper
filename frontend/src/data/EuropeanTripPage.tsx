import React, { useState } from 'react';
import Layout from '../components/Layout';
import { MapPin, CreditCard, Droplet, Copy, ExternalLink, Check, ArrowRight, ArrowLeft, AlertTriangle, MessageCircle } from 'lucide-react';

type TabType = 'there' | 'back';

const EuropeanTripPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('there');

  const handleTabChange = (tab: TabType) => {
    if (navigator.vibrate) navigator.vibrate(15);
    setActiveTab(tab);
  };

  return (
    <Layout title="Европа (Гросберен)">
      
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

      <div className="space-y-4 pb-8">
        
        {/* ======================= ТУДА ======================= */}
        {activeTab === 'there' && (
          <div className="animate-in fade-in slide-in-from-left-4 duration-300 space-y-4">
            
            {/* БАЗА */}
            <section>
              <SectionHeader title="🏠 На базе" color="text-indigo-600 dark:text-indigo-400" />
              <div className="bg-white dark:bg-[#1e1e1e] p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex items-center gap-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-500">
                  <Droplet size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">AdBlue</h3>
                  <p className="text-sm text-gray-500">Залить полный бак перед выездом</p>
                </div>
              </div>
            </section>

            {/* БЕЛАРУСЬ */}
            <section>
              <SectionHeader title="🇧🇾 Беларусь" color="text-green-600 dark:text-green-400" />
              <StationCard 
                title="Газпром"
                payment="Карта Газпром"
                volume="Полные баки"
              />
            </section>

            {/* РОССИЯ (ЗАПРЕТ) */}
            <section>
              <SectionHeader title="🇷🇺 Россия" color="text-red-600 dark:text-red-400" />
              <div className="p-4 rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 flex gap-3 items-center">
                <div className="text-red-600 dark:text-red-400 shrink-0">
                  <AlertTriangle size={24} />
                </div>
                <p className="text-red-700 dark:text-red-300 text-sm font-bold leading-relaxed">
                  На территории РФ дизельным топливом НЕ заправляться!
                </p>
              </div>
            </section>
          </div>
        )}

        {/* ======================= ОБРАТНО ======================= */}
        {activeTab === 'back' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-4">
            
            {/* РОССИЯ (AdBlue) */}
            <section>
              <SectionHeader title="🇷🇺 Россия (AdBlue)" color="text-blue-600 dark:text-blue-400" />
              
              <div className="space-y-3">
                <StationCard 
                  title="AdBlue"
                  coords="54.861146, 31.978176"
                  payment="E1 Card"
                  volume="Полный бак"
                />

                {/* Запрет ДТ */}
                <div className="p-3 rounded-lg border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 flex gap-2 items-center">
                  <AlertTriangle size={20} className="text-red-600 dark:text-red-400" />
                  <p className="text-red-700 dark:text-red-300 text-xs font-bold">
                    Дизелем в РФ не заправляться!
                  </p>
                </div>
              </div>
            </section>

            {/* БЕЛАРУСЬ */}
            <section>
              <SectionHeader title="🇧🇾 Беларусь" color="text-green-600 dark:text-green-400" />
              
              <div className="space-y-4">
                {/* 1. Основная - Газпром */}
                <StationCard 
                  title="Газпром"
                  coords="55.186410, 30.095450"
                  payment="Карта Газпром"
                  volume="Полные баки"
                />

                {/* 2. Блок с предупреждением и Белоруснефтью */}
                <div className="p-4 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800">
                  <div className="flex gap-2 items-start mb-3">
                    <AlertTriangle size={20} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-amber-800 dark:text-amber-300 text-sm">
                        Белоруснефть (Дозаправка)
                      </h3>
                      <p className="text-xs text-amber-900/80 dark:text-amber-200/80 mt-1 leading-relaxed">
                        Если нужно заправиться здесь — предварительно напишите, чтобы открыли лимиты!
                      </p>
                    </div>
                  </div>

                  <a 
                    href="https://wa.me/375292468990"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 mb-4 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-bold transition-colors shadow-sm active:scale-[0.98]"
                  >
                    <MessageCircle size={18} />
                    Написать в WhatsApp
                  </a>

                  {/* Карточка заправки внутри блока (теперь стандартная) */}
                  <StationCard 
                    title="Белоруснефть"
                    coords="55.755285, 27.955635"
                    payment="Карта Белоруснефть"
                    volume="Доехать до Газпрома"
                  />
                </div>

              </div>
            </section>

          </div>
        )}

      </div>
    </Layout>
  );
};

// --- КОМПОНЕНТЫ (Compact Style) ---

const SectionHeader = ({ title, color }: { title: string, color: string }) => (
  <h2 className={`text-base font-bold mb-2 flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-1 ${color}`}>
    {title}
  </h2>
);

interface StationProps {
  title: string;
  coords?: string;
  payment: string;
  volume: string;
}

const StationCard: React.FC<StationProps> = ({ title, coords, payment, volume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.vibrate) navigator.vibrate(15);
    if (coords) {
      navigator.clipboard.writeText(coords);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white dark:bg-[#1e1e1e] p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-start gap-2 mb-2">
        <div className="min-w-0">
          <h3 className="text-base font-bold text-gray-900 dark:text-white truncate leading-tight">{title}</h3>
        </div>
        
        {/* Кнопки действий */}
        {coords && (
          <div className="flex gap-1.5 shrink-0">
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${coords}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => navigator.vibrate && navigator.vibrate(15)}
              className="p-2 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-100 transition-colors"
            >
              <ExternalLink size={18} />
            </a>
            <a 
              href={`https://yandex.ru/maps/?text=${coords}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => navigator.vibrate && navigator.vibrate(15)}
              className="p-2 rounded-lg bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400 hover:bg-red-100 transition-colors text-xs font-bold w-[34px] flex items-center justify-center"
            >
              Ya
            </a>
            <button
              onClick={handleCopy}
              className={`p-2 rounded-lg transition-colors ${
                copied 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
              }`}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>
        )}
      </div>

      <div className="space-y-1.5 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 shrink-0 text-gray-400"><CreditCard size={14}/></div>
          <span className="text-gray-700 dark:text-gray-300 font-medium">{payment}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 shrink-0 text-gray-400"><Droplet size={14}/></div>
          <span className="text-gray-700 dark:text-gray-300">{volume}</span>
        </div>
        {coords && (
          <div className="flex items-center gap-2 pt-0.5">
             <div className="w-4 shrink-0 text-gray-400"><MapPin size={14}/></div>
             <span className="text-[10px] text-gray-500 font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
               {coords}
             </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EuropeanTripPage;