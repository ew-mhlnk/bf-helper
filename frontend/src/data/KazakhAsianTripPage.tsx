import React, { useState } from 'react';
import Layout from '../components/Layout';
import { CreditCard, Droplet, ArrowRight, ArrowLeft, AlertTriangle } from 'lucide-react';

type TabType = 'there' | 'back';

const KazakhAsianTripPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('there');

  const handleTabChange = (tab: TabType) => {
    if (navigator.vibrate) navigator.vibrate(15);
    setActiveTab(tab);
  };

  return (
    <Layout title="Азия (KZ-тягач)" showBack={true}>
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
        {activeTab === 'there' && (
          <div className="animate-in fade-in slide-in-from-left-4 duration-300 space-y-5">
            {/* 1. Беларусь */}
            <section>
              <SectionHeader title="🇧🇾 Беларусь" color="text-red-600 dark:text-red-400" />
              <StationCard
                title="Газпром"
                payment="Карта Газпром"
                volume="До Казахстана"
              />
            </section>

            {/* 2. Россия */}
            <section>
              <SectionHeader title="🇷🇺 Россия" color="text-green-600 dark:text-green-400" />
              <div className="bg-gray-100 dark:bg-[#1e1e1e] p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex items-center gap-2 text-gray-700 dark:text-gray-300 font-bold text-sm">
                <AlertTriangle size={18} className="text-amber-500 shrink-0" /> Только дозаправка
              </div>
              <div className="mt-2 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-400 text-sm font-bold p-3 rounded-lg border border-red-200 dark:border-red-900">
                Норма входа в Казахстан: <span className="underline">не более 100 л.</span>
              </div>
            </section>

            {/* 3. Казахстан */}
            <section>
              <SectionHeader title="🇰🇿 Казахстан" color="text-blue-600 dark:text-blue-400" />
              <StationCard
                title="Газпром"
                payment="Газпром / E1 Card"
                volume="Полные баки"
              />
              <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-sm font-bold p-3 rounded-lg border border-blue-200 dark:border-blue-900">
                Норма выхода из КЗ: <span className="underline">полные баки</span>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'back' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-5">
            {/* 🇰🇿 Казахстан */}
            <section>
              <SectionHeader title="🇰🇿 Казахстан" color="text-blue-600 dark:text-blue-400" />
              <StationCard
                title="Газпром"
                payment="Газпром / E1 Card"
                volume="Полные баки"
              />
              <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-sm font-bold p-3 rounded-lg border border-blue-200 dark:border-blue-900">
                Норма выхода из КЗ: <span className="underline">полные баки</span>
              </div>
            </section>
          </div>
        )}
      </div>
    </Layout>
  );
};

const SectionHeader = ({ title, color }: { title: string; color: string }) => (
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

export default KazakhAsianTripPage;