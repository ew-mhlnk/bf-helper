import React, { useState } from 'react';
import Layout from '../components/Layout';
import { MapPin, CreditCard, Droplet, Copy, ExternalLink, Check, ArrowRight, ArrowLeft, Info } from 'lucide-react';

type TabType = 'there' | 'back';

const AsianTripPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('there');

  return (
    <Layout title="Азия (BY-тягач)">
      
      {/* ПЕРЕКЛЮЧАТЕЛЬ ВКЛАДОК (Контрастный) */}
      <div className="flex p-1 bg-gray-200 dark:bg-gray-800 rounded-xl mb-4 sticky top-[60px] z-40 shadow-sm mx-[-8px]">
        <button
          onClick={() => setActiveTab('there')}
          className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'there'
              ? 'bg-blue-600 text-white shadow-md transform scale-[1.02]' // Активная: Синяя
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          Туда <ArrowRight size={18} />
        </button>
        <button
          onClick={() => setActiveTab('back')}
          className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'back'
              ? 'bg-green-600 text-white shadow-md transform scale-[1.02]' // Активная: Зеленая
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
            
            {/* --- БЕЛАРУСЬ --- */}
            <section>
              <SectionHeader title="🇧🇾 Беларусь" color="text-green-600 dark:text-green-400" />
              <StationCard 
                title="Газпром"
                payment="Карта Газпром"
                volume="Полные баки"
              />
            </section>

            {/* --- РОССИЯ --- */}
            <section>
              <SectionHeader title="🇷🇺 Россия" color="text-blue-600 dark:text-blue-400" />
              
              <div className="space-y-3">
                {/* М5 */}
                <RouteGroup name="Трасса М5">
                  <StationCard 
                    title="Aris"
                    coords="53.17996, 47.87732"
                    payment="E1 Card"
                    volume="До полных баков"
                  />
                  <div className="text-center text-xs text-gray-400 font-bold py-1">- ИЛИ -</div>
                  <StationCard 
                    title="Газпром"
                    coords="53.496066, 50.072105"
                    payment="E1 Card"
                    volume="До полных баков"
                  />
                </RouteGroup>

                {/* М7 */}
                <RouteGroup name="Трасса М7">
                  <StationCard 
                    title="Иликом"
                    coords="55.89424, 48.883128"
                    payment="E1 Card"
                    volume="До полных баков"
                  />
                </RouteGroup>

                {/* Пограничные переходы */}
                <RouteGroup name="Погранпереходы">
                  <div className="space-y-3">
                    <div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 ml-1">Яйсан</div>
                      {/* Добавил координаты */}
                      <StationCard 
                        title="Башнефть / Роснефть"
                        coords="51.172763, 55.009327" 
                        payment="Карта Роснефть"
                        volume="До полных баков"
                      />
                    </div>

                    <div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 ml-1">Троицк</div>
                      <StationCard 
                        title="РегионUNO"
                        coords="54.873185, 61.320128"
                        payment="E1 Card"
                        volume="До полных баков"
                      />
                    </div>

                    <div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 ml-1">Маштаково</div>
                      <StationCard 
                        title="Роснефть"
                        coords="52.104272, 50.84312"
                        payment="Карта Роснефть"
                        volume="До полных баков"
                      />
                    </div>

                    <div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 ml-1">Петухово</div>
                      <StationCard 
                        title="Роснефть"
                        coords="55.246521, 67.267814"
                        payment="Карта Роснефть"
                        volume="До полных баков"
                      />
                    </div>
                  </div>
                </RouteGroup>
              </div>
            </section>

            {/* --- КАЗАХСТАН --- */}
            <section>
              <SectionHeader title="🇰🇿 Казахстан" color="text-yellow-600 dark:text-yellow-400" />
              <div className="p-3 rounded-xl bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-800 shadow-sm text-sm">
                <div className="mb-2 font-bold text-red-500 dark:text-red-400 text-xs uppercase tracking-wide">
                  ‼️ Только при необходимости
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-1">
                    <span className="font-bold text-gray-900 dark:text-white">Газпром (Приоритет)</span>
                    <span className="text-gray-500">Карта Газпром</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700 dark:text-gray-300">QazaqOil, SinoOil, Helios</span>
                    <span className="text-gray-500">E1 Card</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ======================= ОБРАТНО ======================= */}
        {activeTab === 'back' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-4">
            
            {/* --- ВХОД В РФ --- */}
            <section>
              <SectionHeader title="🇷🇺 Вход в РФ" color="text-blue-600 dark:text-blue-400" />
              <div className="mb-2">
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 ml-1">Пункт пропуска Черлак</div>
                <StationCard 
                  title="Газпром"
                  payment="Карта Газпром"
                  volume="Заправиться до М5 или М7" 
                />
              </div>
            </section>

            {/* --- ТРАССЫ РФ --- */}
            <section>
              <SectionHeader title="🛣 Трассы РФ" color="text-blue-600 dark:text-blue-400" />
              <div className="space-y-3">
                
                <RouteGroup name="Трасса М5">
                  <StationCard 
                    title="Таиф-НК"
                    coords="54.476888, 53.324735"
                    payment="E1 Card"
                    volume="Заправка до РБ (Вход в РБ = 100 л.)" 
                  />
                </RouteGroup>

                <RouteGroup name="Трасса М7">
                  <StationCard 
                    title="Таиф-НК"
                    coords="55.704133, 53.035245"
                    payment="E1 Card"
                    volume="Заправка до РБ (Вход в РБ = 100 л.)"
                  />
                </RouteGroup>
              </div>
            </section>

             {/* --- ИНФОБЛОК ПРО ДРУГОЙ МАРШРУТ --- */}
             <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50 dark:bg-indigo-900/20 dark:border-indigo-800 flex gap-3 items-start">
              <div className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                <Info size={20} />
              </div>
              <div>
                <h3 className="font-bold text-indigo-700 dark:text-indigo-400 text-sm">
                  Если выход не через Ольховку
                </h3>
                <p className="text-indigo-600/90 dark:text-indigo-300/90 text-xs mt-1 leading-relaxed">
                  Двигайтесь в обратном порядке по схеме «Туда», но рассчитывайте топливо так, чтобы <span className="font-bold underline">вход в РБ был 100 литров</span>.
                </p>
              </div>
            </div>

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
        
        {/* Кнопки действий (УВЕЛИЧЕННЫЕ) */}
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

export default AsianTripPage;