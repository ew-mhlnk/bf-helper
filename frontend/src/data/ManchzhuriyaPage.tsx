import React, { useState } from 'react';
import Layout from '../components/Layout';
import { MapPin, CreditCard, Droplet, Copy, ExternalLink, Check, ArrowRight, ArrowLeft, ChevronDown, ChevronUp, Info, GitMerge, ArrowDown } from 'lucide-react';

type TabType = 'there' | 'back';
type RouteId = 'm5_there' | 'm7_there' | 'm5_back' | 'm7_back' | null;

const ManchzhuriyaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('there');
  const [openRoute, setOpenRoute] = useState<RouteId>(null);

  // Функция виброотклика
  const vibration = () => {
    if (navigator.vibrate) {
      navigator.vibrate(15);
    }
  };

  const toggleRoute = (id: RouteId) => {
    vibration();
    if (openRoute === id) {
      setOpenRoute(null);
    } else {
      setOpenRoute(id);
    }
  };

  const handleTabChange = (tab: TabType) => {
    vibration();
    setActiveTab(tab);
    setOpenRoute(null);
  };

  return (
    <Layout title="Маньчжурия (BY-тягач)">
      
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
            
            <section>
              <SectionHeader title="🇧🇾 Беларусь" color="text-green-600 dark:text-green-400" />
              <StationCard 
                title="Газпром"
                payment="Карта Газпром"
                volume="Полные баки"
              />
            </section>

            <section>
              <SectionHeader title="🇷🇺 Россия (Центр)" color="text-blue-600 dark:text-blue-400" />
              
              <div className="px-1 mb-3 text-sm font-bold text-gray-500 uppercase tracking-wide">
                Выберите трассу:
              </div>

              {/* Увеличил отступ */}
              <div className="space-y-4">
                <RouteAccordion 
                  title="Трасса М5" 
                  isOpen={openRoute === 'm5_there'} 
                  onClick={() => toggleRoute('m5_there')}
                >
                  <div className="space-y-2">
                    <StationCard 
                      title="Aris"
                      coords="53.17996, 47.87732"
                      payment="E1 Card"
                      volume="До полных баков"
                    />
                    <OrDivider />
                    <StationCard 
                      title="Газпром"
                      coords="53.496066, 50.072105"
                      payment="E1 Card"
                      volume="До полных баков"
                    />
                    <OrDivider />
                    <StationCard 
                      title="Таиф-НК"
                      coords="54.476888, 53.324735"
                      payment="E1 Card"
                      volume="До полных баков"
                    />
                  </div>
                </RouteAccordion>

                <RouteAccordion 
                  title="Трасса М7" 
                  isOpen={openRoute === 'm7_there'} 
                  onClick={() => toggleRoute('m7_there')}
                >
                  <div className="space-y-2">
                    <StationCard 
                      title="Иликом"
                      coords="55.89424, 48.883128"
                      payment="E1 Card"
                      volume="До полных баков"
                    />
                    <OrDivider />
                    <StationCard 
                      title="Таиф НК"
                      coords="55.704133, 53.035245"
                      payment="E1 Card"
                      volume="До полных баков"
                    />
                  </div>
                </RouteAccordion>
              </div>
            </section>

            <section className="mt-4">
              <SectionHeader title="🛣 Сибирь" color="text-blue-600 dark:text-blue-400" />
              <div className="space-y-3">
                <RouteGroup name="Омская обл.">
                  <StationCard 
                    title="Газпром"
                    coords="54.881233, 73.3552"
                    payment="Карта Газпром"
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
            
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 flex items-center gap-3">
              <div className="text-blue-600 dark:text-blue-400"><Info size={24} /></div>
              <p className="text-sm text-blue-800 dark:text-blue-300 font-medium">
                <span className="font-bold underline">Вход в РБ должен быть 100 л.</span>
              </p>
            </div>

            <section>
              <SectionHeader title="🇷🇺 Россия (Домой)" color="text-green-600 dark:text-green-400" />
              
              <div className="space-y-3">
                <StationCard 
                  title="Импульс"
                  coords="52.400797, 104.013977"
                  payment="E1 Card"
                  volume="До полных баков"
                />
                
                <div className="flex flex-col items-center py-1 text-gray-400"><ArrowDown size={20} /></div>

                <StationCard 
                  title="Газпром"
                  coords="54.881233, 73.3552"
                  payment="Карта Газпром"
                  volume="До полных баков"
                />
              </div>
            </section>

            <div className="px-1 mb-2 text-sm font-bold text-gray-500 uppercase tracking-wide">
              Выберите маршрут выхода:
            </div>

            {/* Увеличил отступ */}
            <div className="space-y-4">
              <RouteAccordion 
                title="Через Трассу М5" 
                isOpen={openRoute === 'm5_back'} 
                onClick={() => toggleRoute('m5_back')}
              >
                <div className="space-y-3">
                  <div className="text-center text-xs font-bold text-gray-400 mb-2">НА ВЫБОР (Вход в РБ 100л)</div>
                  
                  <StationCard 
                    title="Aris"
                    coords="53.17996, 47.87732"
                    payment="E1 Card"
                    volume="До РБ (вход 100 л.)"
                  />
                  <OrDivider />
                  <StationCard 
                    title="Газпром"
                    coords="53.496066, 50.072105"
                    payment="E1 Card"
                    volume="До РБ (вход 100 л.)"
                  />
                  <OrDivider />
                  <StationCard 
                    title="Таиф-НК"
                    coords="54.476888, 53.324735"
                    payment="E1 Card"
                    volume="До РБ (вход 100 л.)"
                  />
                </div>
              </RouteAccordion>

              <RouteAccordion 
                title="Через Трассу М7" 
                isOpen={openRoute === 'm7_back'} 
                onClick={() => toggleRoute('m7_back')}
              >
                <div className="space-y-3">
                  <div className="text-center text-xs font-bold text-gray-400 mb-2">НА ВЫБОР (Вход в РБ 100л)</div>
                  
                  <StationCard 
                    title="Иликом"
                    coords="55.89424, 48.883128"
                    payment="E1 Card"
                    volume="До РБ (вход 100 л.)"
                  />
                  <OrDivider />
                  <StationCard 
                    title="Таиф НК"
                    coords="55.704133, 53.035245"
                    payment="E1 Card"
                    volume="До РБ (вход 100 л.)"
                  />
                </div>
              </RouteAccordion>
            </div>

          </div>
        )}

      </div>
    </Layout>
  );
};

// --- КОМПОНЕНТЫ ---

const OrDivider = () => (
  <div className="flex items-center justify-center gap-2 py-2 text-[10px] font-bold text-gray-400 uppercase">
    <GitMerge size={12} /> Или
  </div>
);

const RouteAccordion = ({ title, isOpen, onClick, children }: { title: string, isOpen: boolean, onClick: () => void, children: React.ReactNode }) => (
  <div className={`overflow-hidden rounded-xl border transition-all duration-300 ${isOpen ? 'border-blue-500 bg-white dark:bg-[#1e1e1e] shadow-md' : 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1a1a1a]'}`}>
    <button 
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 text-left"
    >
      <span className={`font-bold ${isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}>
        {title}
      </span>
      {isOpen ? <ChevronUp size={20} className="text-blue-500"/> : <ChevronDown size={20} className="text-gray-400"/>}
    </button>
    
    {isOpen && (
      <div className="p-4 pt-0 border-t border-gray-100 dark:border-gray-800 animate-in fade-in slide-in-from-top-2">
        <div className="mt-3">
          {children}
        </div>
      </div>
    )}
  </div>
);

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

export default ManchzhuriyaPage;