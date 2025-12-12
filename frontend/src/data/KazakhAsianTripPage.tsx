import React, { useState } from 'react';
import Layout from '../components/Layout';
import { MapPin, CreditCard, Droplet, Copy, ExternalLink, Check, ArrowRight, ArrowLeft, ChevronDown, ChevronUp, AlertTriangle, GitMerge, ArrowDown } from 'lucide-react';

type TabType = 'there' | 'back';
type RouteId = 'm5_there' | 'm7_there' | 'olkhovka' | 'mashtakovo' | 'troitsk' | 'yaisan' | null;

const KazakhAsianTripPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('there');
  const [openRoute, setOpenRoute] = useState<RouteId>(null);

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
    <Layout title="Азия (KZ-тягач)">
      
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

            <section>
              <SectionHeader title="🛣 Выбор трассы" color="text-blue-600 dark:text-blue-400" />
              
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
                    <div className="flex items-center justify-center gap-2 py-1 text-xs font-bold text-gray-400">
                      <GitMerge size={12} /> ИЛИ
                    </div>
                    <StationCard 
                      title="Газпром"
                      coords="53.496066, 50.072105"
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
                  </div>
                </RouteAccordion>
              </div>
            </section>

            {/* ПОГРАНИЧНЫЕ ПЕРЕХОДЫ */}
            <section className="mt-4 space-y-3">
              <div className="px-1 text-sm font-bold text-gray-500 uppercase tracking-wide border-b border-gray-200 dark:border-gray-800 pb-1">
                Пограничные переходы
              </div>

              <RouteGroup name="Яйсан">
                <StationCard 
                  title="Башнефть"
                  coords="51.172763, 55.009327"
                  payment="E1 Card"
                  volume="До полных баков"
                />
              </RouteGroup>

              <RouteGroup name="Троицк">
                <StationCard 
                  title="Газпром"
                  coords="54.96274, 61.379"
                  payment="Карта Газпром"
                  volume="До полных баков"
                />
              </RouteGroup>

              <RouteGroup name="Маштаково">
                <StationCard 
                  title="Роснефть"
                  coords="52.104272, 50.84312"
                  payment="E1 Card"
                  volume="До полных баков"
                />
              </RouteGroup>
            </section>

            <KazakhstanWarning />
          </div>
        )}

        {/* ======================= ОБРАТНО ======================= */}
        {activeTab === 'back' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-4">
            
            <KazakhstanWarning />

            <div className="px-1 mb-2 text-sm font-bold text-gray-500 uppercase tracking-wide">
              Выберите маршрут выхода:
            </div>

            {/* Увеличил отступ */}
            <div className="space-y-4">
              <RouteAccordion 
                title="Через Ольховку" 
                isOpen={openRoute === 'olkhovka'} 
                onClick={() => toggleRoute('olkhovka')}
              >
                <div className="space-y-2">
                  <StationCard 
                    title="Газпром (Черлак)"
                    coords="54.1723, 74.78265"
                    payment="Карта Газпром"
                    volume="Заправиться до М5 или М7"
                  />
                  
                  <div className="flex flex-col items-center py-1 text-gray-400"><ArrowDown size={20} /></div>

                  <div className="bg-gray-50 dark:bg-[#151515] p-3 rounded-xl border border-gray-200 dark:border-gray-800">
                    <div className="text-center text-xs font-bold text-gray-400 mb-2">ДАЛЕЕ НА ВЫБОР</div>
                    <StationCard 
                      title="М5: Таиф-НК"
                      coords="54.476888, 53.324735"
                      payment="E1 Card"
                      volume="До Ермаков"
                    />
                    <div className="flex items-center justify-center gap-2 py-2 text-xs font-bold text-gray-400">
                      <GitMerge size={14} /> ИЛИ
                    </div>
                    <StationCard 
                      title="М7: Таиф-НК"
                      coords="55.704133, 53.035245"
                      payment="E1 Card"
                      volume="До Ермаков"
                    />
                  </div>
                </div>
              </RouteAccordion>

              <RouteAccordion 
                title="Через Маштаково" 
                isOpen={openRoute === 'mashtakovo'} 
                onClick={() => toggleRoute('mashtakovo')}
              >
                <div className="space-y-2">
                  <StationCard 
                    title="Роснефть"
                    coords="52.104272, 50.84312"
                    payment="E1 Card"
                    volume="До Ермаков"
                  />
                  
                  <div className="flex flex-col items-center py-1 text-gray-400"><ArrowDown size={20} /></div>

                  <StationCard 
                    title="М5: Таиф-НК"
                    coords="53.416196, 49.481666"
                    payment="E1 Card"
                    volume="До Ермаков"
                  />
                </div>
              </RouteAccordion>

              <RouteAccordion 
                title="Через Троицк" 
                isOpen={openRoute === 'troitsk'} 
                onClick={() => toggleRoute('troitsk')}
              >
                <div className="space-y-2">
                  <StationCard 
                    title="Газпром"
                    coords="54.963249, 61.383050"
                    payment="Карта Газпром"
                    volume="Заправиться до М5 или М7"
                  />
                  
                  <div className="flex flex-col items-center py-1 text-gray-400"><ArrowDown size={20} /></div>

                  <div className="bg-gray-50 dark:bg-[#151515] p-3 rounded-xl border border-gray-200 dark:border-gray-800">
                    <div className="text-center text-xs font-bold text-gray-400 mb-2">ДАЛЕЕ НА ВЫБОР</div>
                    <StationCard 
                      title="М5: Таиф-НК"
                      coords="54.476888, 53.324735"
                      payment="E1 Card"
                      volume="До Ермаков"
                    />
                    <div className="flex items-center justify-center gap-2 py-2 text-xs font-bold text-gray-400">
                      <GitMerge size={14} /> ИЛИ
                    </div>
                    <StationCard 
                      title="М7: Таиф-НК"
                      coords="55.704133, 53.035245"
                      payment="E1 Card"
                      volume="До Ермаков"
                    />
                  </div>
                </div>
              </RouteAccordion>

              <RouteAccordion 
                title="Через Яйсан" 
                isOpen={openRoute === 'yaisan'} 
                onClick={() => toggleRoute('yaisan')}
              >
                <div className="space-y-2">
                  <StationCard 
                    title="Башнефть"
                    coords="51.172763, 55.009327"
                    payment="E1 Card"
                    volume="До заправки по М5"
                  />
                  
                  <div className="flex flex-col items-center py-1 text-gray-400"><ArrowDown size={20} /></div>

                  <StationCard 
                    title="М5: Таиф-НК"
                    coords="53.416196, 49.481666"
                    payment="E1 Card"
                    volume="До Ермаков"
                  />
                </div>
              </RouteAccordion>
            </div>

            <section className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
              <SectionHeader title="🏁 Финиш (Ермаки)" color="text-green-600 dark:text-green-400" />
              <StationCard 
                title="Ермаки"
                coords="54.843884, 31.674989"
                payment="E1 Card"
                volume="Полные баки"
              />
            </section>

          </div>
        )}

      </div>
    </Layout>
  );
};

// --- КОМПОНЕНТЫ ---

const KazakhstanWarning = () => (
  <div className="p-3 rounded-xl bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-800 shadow-sm text-sm">
    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-100 dark:border-gray-800">
      <span className="text-xl">🇰🇿</span>
      <h3 className="font-bold text-gray-900 dark:text-white">Казахстан</h3>
    </div>
    
    <div className="mb-3 flex items-start gap-2 bg-red-50 dark:bg-red-900/20 p-2 rounded-lg">
      <AlertTriangle size={18} className="text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
      <span className="text-xs font-bold text-red-700 dark:text-red-300">
        Разрешена только ДОзаправка!
      </span>
    </div>
    
    <div className="space-y-2 text-xs sm:text-sm">
      <div className="flex justify-between">
        <span className="font-bold text-gray-900 dark:text-white">Газпром (Приоритет)</span>
        <span className="text-gray-500">Карта Газпром</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium text-gray-700 dark:text-gray-300">QazaqOil, SinoOil, Helios</span>
        <span className="text-gray-500">E1 Card</span>
      </div>
    </div>
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

export default KazakhAsianTripPage;