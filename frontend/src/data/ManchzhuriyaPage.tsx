import React, { useState } from 'react';
import Layout from '../components/Layout';
import {
  MapPin,
  CreditCard,
  Droplet,
  Copy,
  ExternalLink,
  Check,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  GitMerge,
  ArrowDown
} from 'lucide-react';

type TabType = 'there' | 'back';
type RouteId = 'm5_there' | 'm7_there' | 'm5_back' | 'm7_back' | null;

const ManchzhuriyaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('there');
  const [openRoute, setOpenRoute] = useState<RouteId>('m5_there');

  const vibration = () => {
    if (navigator.vibrate) navigator.vibrate(15);
  };

  const toggleRoute = (id: RouteId) => {
    vibration();
    setOpenRoute(openRoute === id ? null : id);
  };

  const handleTabChange = (tab: TabType) => {
    vibration();
    setActiveTab(tab);
    setOpenRoute(tab === 'there' ? 'm5_there' : 'm5_back');
  };

  return (
    <Layout title="Маньчжурия (BY-тягач)">
      {/* Переключатель Туда / Обратно */}
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
        {/* ==================== ТУДА ==================== */}
        {activeTab === 'there' && (
          <div className="animate-in fade-in slide-in-from-left-4 duration-300 space-y-4">
            {/* БЕЛАРУСЬ */}
            <section>
              <SectionHeader title="🇧🇾 Беларусь" color="text-green-600 dark:text-green-400" />
              <StationCard
                title="Газпром"
                payment="Карта Газпром"
                volume="Полные баки"
              />
            </section>

            {/* РОССИЯ (ЦЕНТР - ТРАССЫ) */}
            <section>
              <SectionHeader title="🇷🇺 Россия (Центр)" color="text-blue-600 dark:text-blue-400" />
              <div className="px-1 mb-2 text-xs font-bold text-gray-500 uppercase tracking-wide">
                Выберите трассу следования:
              </div>

              <div className="space-y-3">
                {/* М5 */}
                <RouteAccordion
                  title="Трасса М5"
                  isOpen={openRoute === 'm5_there'}
                  onClick={() => toggleRoute('m5_there')}
                >
                  <div className="space-y-2">
                    <StationCard
                      title="Роснефть"
                      coords="53.192745, 48.358653"
                      payment="E1 Card"
                      volume="До полных баков"
                    />
                    <OrDivider />
                    <StationCard
                      title="Роснефть"
                      coords="53.513105, 49.60082"
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

                {/* М7 */}
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

            {/* СИБИРЬ (СТРОГО С ЗАПАДА НА ВОСТОК) */}
            <section className="mt-4">
              <SectionHeader title="🛣 Сибирь (по маршруту)" color="text-blue-600 dark:text-blue-400" />
              <div className="space-y-3">
                {/* 1. Омск (Запад) */}
                <RouteGroup name="1. Омская обл. (Запад)">
                  <StationCard
                    title="Газпром"
                    coords="54.985716, 72.633436"
                    payment="E1 Card"
                    volume="До полных баков"
                  />
                </RouteGroup>

                {/* 2. Омск (Восток) */}
                <RouteGroup name="2. Омская обл. (Восток)">
                  <StationCard
                    title="Газпром"
                    coords="54.976484, 74.12261"
                    payment="E1 Card"
                    volume="До полных баков"
                  />
                </RouteGroup>

                {/* 3. Иркутская обл. */}
                <RouteGroup name="3. Иркутская обл.">
                  <StationCard
                    title="Импульс"
                    coords="52.400797, 104.013977"
                    payment="E1 Card"
                    volume="До полных баков"
                  />
                </RouteGroup>

                {/* 4. Байкал / Култук */}
                <RouteGroup name="4. Иркутская обл. (Байкал)">
                  <StationCard
                    title="Роснефть"
                    coords="51.516222, 104.135411"
                    payment="E1 Card"
                    volume="До полных баков"
                  />
                </RouteGroup>

                {/* 5. Бурятия */}
                <RouteGroup name="5. Республика Бурятия">
                  <StationCard
                    title="Роснефть"
                    coords="51.487511, 107.36355"
                    payment="E1 Card"
                    volume="До полных баков"
                  />
                </RouteGroup>
              </div>
            </section>
          </div>
        )}

        {/* ==================== ОБРАТНО ==================== */}
        {activeTab === 'back' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-4">
            {/* Памятка о норме входа */}
            <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-center gap-3 shadow-xs">
              <AlertTriangle className="text-red-600 dark:text-red-400 shrink-0" size={24} />
              <p className="text-xs sm:text-sm text-red-900 dark:text-red-200 font-medium leading-tight">
                <span className="font-bold underline text-sm sm:text-base">Вход в РБ: строго не более 200 л.</span>
                <span className="block text-xs mt-0.5 text-red-700/90 dark:text-red-300/90">
                  Суммарно во всех топливных баках (тягач + полуприцеп-рефрижератор)!
                </span>
              </p>
            </div>

            {/* СИБИРЬ В ОБРАТНОМ ПОРЯДКЕ (С ВОСТОКА НА ЗАПАД) */}
            <section>
              <SectionHeader title="🇷🇺 Россия (Домой — Сибирь по порядку)" color="text-green-600 dark:text-green-400" />
              <div className="space-y-2">
                <StationCard
                  title="Роснефть (Бурятия)"
                  coords="51.487511, 107.36355"
                  payment="E1 Card"
                  volume="До заправки в Иркутске"
                />

                <div className="flex flex-col items-center py-0.5 text-gray-400">
                  <ArrowDown size={18} />
                </div>

                <StationCard
                  title="Роснефть (Байкал)"
                  coords="51.516222, 104.135411"
                  payment="E1 Card"
                  volume="До заправки в Иркутске"
                />

                <div className="flex flex-col items-center py-0.5 text-gray-400">
                  <ArrowDown size={18} />
                </div>

                <StationCard
                  title="Импульс (Иркутская обл.)"
                  coords="52.400797, 104.013977"
                  payment="E1 Card"
                  volume="До заправки в Омске"
                />

                <div className="flex flex-col items-center py-0.5 text-gray-400">
                  <ArrowDown size={18} />
                </div>

                <StationCard
                  title="Газпром (Омская обл. Восток)"
                  coords="54.976484, 74.12261"
                  payment="E1 Card"
                  volume="До заправки по М5 или М7"
                />

                <div className="flex flex-col items-center py-0.5 text-gray-400">
                  <ArrowDown size={18} />
                </div>

                <StationCard
                  title="Газпром (Омская обл. Запад)"
                  coords="54.985716, 72.633436"
                  payment="E1 Card"
                  volume="До заправки по М5 или М7"
                />
              </div>
            </section>

            {/* ВЫБОР ТРАССЫ ВЫХОДА К РБ */}
            <div className="pt-2">
              <div className="px-1 mb-2 text-xs font-bold text-gray-500 uppercase tracking-wide">
                Выберите трассу выхода к Беларуси:
              </div>

              <div className="space-y-3">
                {/* М5 */}
                <RouteAccordion
                  title="Через Трассу М5"
                  isOpen={openRoute === 'm5_back'}
                  onClick={() => toggleRoute('m5_back')}
                >
                  <div className="space-y-3">
                    <div className="text-center text-xs font-bold text-gray-500 mb-2">
                      НА ВЫБОР (с расчетом входа в РБ 200 л суммарно)
                    </div>
                    <StationCard
                      title="Таиф-НК"
                      coords="54.476888, 53.324735"
                      payment="E1 Card"
                      volume="До РБ (вход 200 л)"
                    />
                    <OrDivider />
                    <StationCard
                      title="Роснефть"
                      coords="53.513105, 49.60082"
                      payment="E1 Card"
                      volume="До РБ (вход 200 л)"
                    />
                    <OrDivider />
                    <StationCard
                      title="Роснефть"
                      coords="53.192745, 48.358653"
                      payment="E1 Card"
                      volume="До РБ (вход 200 л)"
                    />
                  </div>
                </RouteAccordion>

                {/* М7 */}
                <RouteAccordion
                  title="Через Трассу М7"
                  isOpen={openRoute === 'm7_back'}
                  onClick={() => toggleRoute('m7_back')}
                >
                  <div className="space-y-3">
                    <div className="text-center text-xs font-bold text-gray-500 mb-2">
                      НА ВЫБОР (с расчетом входа в РБ 200 л суммарно)
                    </div>
                    <StationCard
                      title="Таиф НК"
                      coords="55.704133, 53.035245"
                      payment="E1 Card"
                      volume="До РБ (вход 200 л)"
                    />
                    <OrDivider />
                    <StationCard
                      title="Иликом"
                      coords="55.89424, 48.883128"
                      payment="E1 Card"
                      volume="До РБ (вход 200 л)"
                    />
                  </div>
                </RouteAccordion>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

/* --- Вспомогательные компоненты --- */

const OrDivider = () => (
  <div className="flex items-center justify-center gap-2 py-1.5 text-[10px] font-bold text-gray-400 uppercase">
    <GitMerge size={12} /> Или
  </div>
);

const RouteAccordion = ({
  title,
  isOpen,
  onClick,
  children
}: {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <div
    className={`overflow-hidden rounded-xl border transition-all duration-200 ${
      isOpen
        ? 'border-blue-500 bg-white dark:bg-[#1e1e1e] shadow-md'
        : 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1a1a1a]'
    }`}
  >
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-3.5 text-left"
    >
      <span
        className={`text-sm font-bold ${
          isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
        }`}
      >
        {title}
      </span>
      {isOpen ? (
        <ChevronUp size={18} className="text-blue-500" />
      ) : (
        <ChevronDown size={18} className="text-gray-400" />
      )}
    </button>
    {isOpen && (
      <div className="p-3.5 pt-0 border-t border-gray-100 dark:border-gray-800 animate-in fade-in slide-in-from-top-1">
        <div className="mt-2">{children}</div>
      </div>
    )}
  </div>
);

const SectionHeader = ({ title, color }: { title: string; color: string }) => (
  <h2 className={`text-base font-bold mb-2 flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-1 ${color}`}>
    {title}
  </h2>
);

const RouteGroup = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <div className="bg-gray-50 dark:bg-[#1a1a1a] p-2.5 rounded-xl border border-gray-200 dark:border-gray-800">
    <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 text-center">
      {name}
    </h3>
    <div className="space-y-2">{children}</div>
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
    <div className="bg-white dark:bg-[#1e1e1e] p-3 rounded-lg shadow-xs border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-start gap-2 mb-2">
        <div className="min-w-0">
          <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white truncate leading-tight">
            {title}
          </h3>
        </div>

        {coords && (
          <div className="flex gap-1 shrink-0">
            {/* Google Maps */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${coords}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => navigator.vibrate && navigator.vibrate(15)}
              className="p-1.5 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-100 transition-colors"
              title="Открыть в Google Maps"
            >
              <ExternalLink size={16} />
            </a>

            {/* Яндекс Карты */}
            <a
              href={`https://yandex.ru/maps/?text=${coords}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => navigator.vibrate && navigator.vibrate(15)}
              className="px-2 py-1.5 rounded-lg bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400 hover:bg-red-100 transition-colors text-xs font-bold flex items-center justify-center"
              title="Открыть в Яндекс.Картах"
            >
              Я
            </a>

            {/* Копирование */}
            <button
              onClick={handleCopy}
              className={`p-1.5 rounded-lg transition-colors ${
                copied
                  ? 'bg-green-100 text-green-600'
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
              }`}
              title="Скопировать координаты"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        )}
      </div>

      <div className="space-y-1 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 shrink-0 text-gray-400">
            <CreditCard size={14} />
          </div>
          <span className="text-gray-700 dark:text-gray-300 font-medium">Карта: {payment}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 shrink-0 text-gray-400">
            <Droplet size={14} />
          </div>
          <span className="text-gray-700 dark:text-gray-300 font-bold">Объем: {volume}</span>
        </div>
        {coords && (
          <div className="flex items-center gap-2 pt-0.5">
            <div className="w-4 shrink-0 text-gray-400">
              <MapPin size={14} />
            </div>
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