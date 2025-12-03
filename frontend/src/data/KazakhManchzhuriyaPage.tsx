import React, { useState } from 'react';
import Layout from '../components/Layout';
import { MapPin, CreditCard, Droplet, Copy, ExternalLink, Check, ArrowRight, ArrowLeft, Info } from 'lucide-react';

type TabType = 'there' | 'back';

const KazakhManchzhuriyaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('there');

  return (
    <Layout title="Маньчжурия (KZ-тягач)">
      
      {/* ПЕРЕКЛЮЧАТЕЛЬ ВКЛАДОК */}
      <div className="flex p-1 bg-gray-200 dark:bg-gray-800 rounded-xl mb-4 sticky top-[60px] z-40 shadow-sm mx-[-8px]">
        <button
          onClick={() => setActiveTab('there')}
          className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'there'
              ? 'bg-blue-600 text-white shadow-md transform scale-[1.02]' 
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          Туда <ArrowRight size={18} />
        </button>
        <button
          onClick={() => setActiveTab('back')}
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
            
            {/* РОССИЯ (СТАРТ) */}
            <section>
              <SectionHeader title="🇷🇺 Россия (Начало)" color="text-green-600 dark:text-green-400" />
              <div className="relative">
                <div className="absolute -left-2 top-3 w-1 h-8 bg-green-500 rounded-r"></div>
                <StationCard 
                  title="Ермаки"
                  coords="54.843884, 31.674989"
                  payment="E1 Card"
                  volume="Полные баки"
                />
              </div>
            </section>

            {/* РОССИЯ (ВЫБОР ТРАССЫ) */}
            <section>
              <SectionHeader title="🇷🇺 Россия (Центр/Урал)" color="text-blue-600 dark:text-blue-400" />
              <div className="space-y-3">
                
                {/* М5 ВАРИАНТЫ */}
                <RouteGroup name="Трасса М5 (Варианты)">
                  <StationCard 
                    title="Aris"
                    coords="53.17996, 47.87732"
                    payment="E1 Card"
                    volume="До полных баков"
                  />
                  <div className="text-center text-xs text-gray-400 font-bold py-1">- ИЛИ -</div>
                  <StationCard 
                    title="Газпром (Самара)"
                    coords="53.496066, 50.072105"
                    payment="E1 Card"
                    volume="До полных баков"
                  />
                  <div className="text-center text-xs text-gray-400 font-bold py-1">- ИЛИ -</div>
                  <StationCard 
                    title="Таиф-НК"
                    coords="54.476888, 53.324735"
                    payment="E1 Card"
                    volume="До полных баков"
                  />
                </RouteGroup>

                {/* М7 ВАРИАНТЫ */}
                <RouteGroup name="Трасса М7 (Варианты)">
                  <StationCard 
                    title="Иликом"
                    coords="55.89424, 48.883128"
                    payment="E1 Card"
                    volume="До полных баков"
                  />
                  <div className="text-center text-xs text-gray-400 font-bold py-1">- ИЛИ -</div>
                  <StationCard 
                    title="Таиф НК"
                    coords="55.704133, 53.035245"
                    payment="E1 Card"
                    volume="До полных баков"
                  />
                </RouteGroup>
              </div>
            </section>

            {/* СИБИРЬ */}
            <section>
              <SectionHeader title="🛣 Сибирь" color="text-blue-600 dark:text-blue-400" />
              <div className="space-y-3">
                <RouteGroup name="Омская обл.">
                  <StationCard 
                    title="Газпром"
                    coords="54.881233, 73.3552"
                    payment="E1 Card"
                    volume="До полных баков"
                  />
                </RouteGroup>

                <RouteGroup name="Иркутская обл.">
                  <StationCard 
                    title="Импульс"
                    coords="52.400797, 104.013977"
                    payment="E1 Card"
                    volume="До полных баков"
                  />
                </RouteGroup>
              </div>
            </section>
          </div>
        )}

        {/* ======================= ОБРАТНО ======================= */}
        {activeTab === 'back' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-4">
            
            {/* ИНФО */}
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 flex items-center gap-3">
              <div className="text-blue-600 dark:text-blue-400"><Info size={24} /></div>
              <p className="text-sm text-blue-800 dark:text-blue-300 font-medium">
                Двигаемся в обратном порядке.
              </p>
            </div>

            {/* СИБИРЬ */}
            <section>
              <SectionHeader title="🇷🇺 Россия (Домой)" color="text-green-600 dark:text-green-400" />
              
              <div className="space-y-3">
                <RouteGroup name="Иркутская обл.">
                  <StationCard 
                    title="Импульс"
                    coords="52.400797, 104.013977"
                    payment="E1 Card"
                    volume="До полных баков"
                  />
                </RouteGroup>

                <RouteGroup name="Омская обл.">
                  <StationCard 
                    title="Газпром"
                    coords="54.881233, 73.3552"
                    payment="E1 Card"
                    volume="До полных баков"
                  />
                </RouteGroup>
              </div>
            </section>

            {/* ЦЕНТР / УРАЛ */}
            <section>
              <SectionHeader title="🛣 Перед финишем" color="text-red-600 dark:text-red-400" />
              <div className="space-y-3">
                
                {/* М5 ВАРИАНТЫ */}
                <RouteGroup name="Трасса М5 (На выбор)">
                  <StationCard 
                    title="Таиф-НК"
                    coords="54.476888, 53.324735"
                    payment="E1 Card"
                    volume="До Ермаков"
                  />
                  <div className="text-center text-xs text-gray-400 font-bold py-1">- ИЛИ -</div>
                  <StationCard 
                    title="Газпром (Самара)"
                    coords="53.496066, 50.072105"
                    payment="E1 Card"
                    volume="До Ермаков"
                  />
                  <div className="text-center text-xs text-gray-400 font-bold py-1">- ИЛИ -</div>
                  <StationCard 
                    title="Aris"
                    coords="53.17996, 47.87732"
                    payment="E1 Card"
                    volume="До Ермаков"
                  />
                </RouteGroup>

                {/* М7 ВАРИАНТЫ */}
                <RouteGroup name="Трасса М7 (На выбор)">
                  <StationCard 
                    title="Таиф НК"
                    coords="55.704133, 53.035245"
                    payment="E1 Card"
                    volume="До Ермаков"
                  />
                  <div className="text-center text-xs text-gray-400 font-bold py-1">- ИЛИ -</div>
                  <StationCard 
                    title="Иликом"
                    coords="55.89424, 48.883128"
                    payment="E1 Card"
                    volume="До Ермаков"
                  />
                </RouteGroup>
              </div>
            </section>

            {/* ФИНИШ */}
            <section>
              <SectionHeader title="🏁 Финиш (Смоленская обл.)" color="text-green-600 dark:text-green-400" />
              <div className="relative">
                <div className="absolute -left-2 top-3 w-1 h-8 bg-green-500 rounded-r"></div>
                <StationCard 
                  title="Ермаки"
                  coords="54.843884, 31.674989"
                  payment="E1 Card"
                  volume="Полные баки"
                />
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

const RouteGroup = ({ name, children }: { name: string, children: React.ReactNode }) => (
  <div className="bg-gray-50 dark:bg-[#1a1a1a] p-2.5 rounded-xl border border-gray-200 dark:border-gray-800">
    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 text-center">
      {name}
    </h3>
    <div className="space-y-2">
      {children}
    </div>
  </div>
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
    if (coords) {
      navigator.clipboard.writeText(coords);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white dark:bg-[#1e1e1e] p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      {/* Заголовок и координаты */}
      <div className="flex justify-between items-start gap-2 mb-2">
        <div className="min-w-0">
          <h3 className="text-base font-bold text-gray-900 dark:text-white truncate leading-tight">{title}</h3>
        </div>
        
        {/* Кнопки действий */}
        {coords && (
          <div className="flex gap-1.5 shrink-0">
            {/* Google */}
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${coords}`}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-100 transition-colors"
            >
              <ExternalLink size={18} />
            </a>
            
            {/* Yandex */}
            <a 
              href={`https://yandex.ru/maps/?text=${coords}`}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400 hover:bg-red-100 transition-colors text-xs font-bold w-[34px] flex items-center justify-center"
            >
              Ya
            </a>

            {/* Copy */}
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

      {/* Информация */}
      <div className="space-y-1.5 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 shrink-0 text-gray-400"><CreditCard size={14}/></div>
          <span className="text-gray-700 dark:text-gray-300 font-medium">{payment}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 shrink-0 text-gray-400"><Droplet size={14}/></div>
          <span className="text-gray-700 dark:text-gray-300 font-bold">{volume}</span>
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

export default KazakhManchzhuriyaPage;