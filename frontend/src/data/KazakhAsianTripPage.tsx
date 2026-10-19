import React, { useState } from 'react';
import Layout from '../components/Layout';
import {
  CreditCard,
  Droplet,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  GitMerge
} from 'lucide-react';

type TabType = 'there' | 'back';
type HighwayId = 'm5' | 'm7' | null;
type BorderId = 'mashtakovo' | 'yaysan' | 'petukhovo' | 'troitsk' | null;

type BackBorderId = 'olkhovka' | 'troitsk_back' | 'mashtakovo_back' | null;
type BackHighwayId = 'm5_back' | 'm7_back' | null;

const KazakhAsianTripPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('there');

  // Аккордеоны для "Туда" (в Беларусь)
  const [openBackBorder, setOpenBackBorder] = useState<BackBorderId>('olkhovka');
  const [openBackHighway, setOpenBackHighway] = useState<BackHighwayId>('m5_back');

  // Аккордеоны для "Обратно" (в Казахстан)
  const [openHighway, setOpenHighway] = useState<HighwayId>('m5');
  const [openBorder, setOpenBorder] = useState<BorderId>('mashtakovo');

  const vibrate = () => {
    if (navigator.vibrate) navigator.vibrate(15);
  };

  const handleTabChange = (tab: TabType) => {
    vibrate();
    setActiveTab(tab);
  };

  const toggleBackBorder = (id: BackBorderId) => {
    vibrate();
    setOpenBackBorder(openBackBorder === id ? null : id);
  };

  const toggleBackHighway = (id: BackHighwayId) => {
    vibrate();
    setOpenBackHighway(openBackHighway === id ? null : id);
  };

  const toggleHighway = (id: HighwayId) => {
    vibrate();
    setOpenHighway(openHighway === id ? null : id);
  };

  const toggleBorder = (id: BorderId) => {
    vibrate();
    setOpenBorder(openBorder === id ? null : id);
  };

  return (
    <Layout title="Китай (через Казахстан - KZ тягач)" showBack={true}>
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
          Туда (в РБ) <ArrowRight size={18} />
        </button>
        <button
          onClick={() => handleTabChange('back')}
          className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'back'
              ? 'bg-green-600 text-white shadow-md transform scale-[1.02]'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          <ArrowLeft size={18} /> Обратно (в КЗ)
        </button>
      </div>

      <div className="space-y-6 pb-8">
        {/* ==================== ТУДА (Казахстан -> Россия -> Беларусь) ==================== */}
        {activeTab === 'there' && (
          <div className="animate-in fade-in slide-in-from-left-4 duration-300 space-y-5">
            {/* 1. КАЗАХСТАН (СТАРТ) */}
            <section>
              <SectionHeader title="🇰🇿 Казахстан (Старт)" color="text-blue-600 dark:text-blue-400" />
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-300 text-sm">
                    <AlertTriangle size={18} className="text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>Только ДОЗАПРАВКА</span>
                  </div>
                  <span className="bg-blue-600 text-white font-bold text-xs px-2.5 py-1 rounded-full shadow-xs">
                    Выход: 150 – 200 л.
                  </span>
                </div>
                <p className="text-xs text-amber-800/90 dark:text-amber-300/90 leading-relaxed">
                  В Казахстане полные баки <strong>НЕ заливаем</strong> — разрешена только минимальная дозаправка для движения. На выезде из КЗ в баках должно оставаться строго <strong>150–200 л (суммарно тягач + п/п)</strong>.
                </p>

                {/* Проверенные сети АЗС по E1 Card */}
                <div className="p-3 bg-white/90 dark:bg-[#1a1a1a] rounded-xl border border-amber-200/80 dark:border-amber-800/60 space-y-1.5 shadow-2xs">
                  <div className="text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                    <CreditCard size={15} className="text-blue-600 dark:text-blue-400" />
                    <span>Карта оплаты: E1 Card</span>
                  </div>
                  <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="font-semibold text-amber-900 dark:text-amber-300">Проверенная сеть АЗС:</span> SinoOil, Газпром, КазМунайГаз, Helios.
                  </div>
                </div>
              </div>
            </section>

            {/* 2. РОССИЯ (ТРАНЗИТ) */}
            <section>
              <SectionHeader title="🇷🇺 Россия (Транзит)" color="text-green-600 dark:text-green-400" />

              {/* 2.1: Погранпереходы при въезде в РФ */}
              <div className="mb-4">
                <div className="px-1 mb-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  1. Заправка после границы (Погранпереход):
                </div>
                <div className="space-y-3">
                  {/* Ольховка */}
                  <RouteAccordion
                    title="МАПП Ольховка"
                    isOpen={openBackBorder === 'olkhovka'}
                    onClick={() => toggleBackBorder('olkhovka')}
                  >
                    <StationCard
                      title="Газпром"
                      coords="54.1723, 74.78265"
                      payment="E1 Card"
                      volume="До заправки по М5 или М7"
                    />
                  </RouteAccordion>

                  {/* Троицк */}
                  <RouteAccordion
                    title="МАПП Троицк"
                    isOpen={openBackBorder === 'troitsk_back'}
                    onClick={() => toggleBackBorder('troitsk_back')}
                  >
                    <StationCard
                      title="Газпром"
                      coords="54.1759, 61.4341"
                      payment="E1 Card"
                      volume="До заправки по М5 или М7"
                    />
                  </RouteAccordion>

                  {/* Маштаково */}
                  <RouteAccordion
                    title="МАПП Маштаково"
                    isOpen={openBackBorder === 'mashtakovo_back'}
                    onClick={() => toggleBackBorder('mashtakovo_back')}
                  >
                    <StationCard
                      title="Роснефть"
                      coords="52.104272, 50.84312"
                      payment="E1 Card"
                      volume="До заправки по М5 или М7"
                    />
                  </RouteAccordion>
                </div>
              </div>

              {/* 2.2: Трасса к Беларуси */}
              <div>
                <div className="px-1 mb-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  2. Заправка на трассе (М5 или М7):
                </div>
                <div className="space-y-3">
                  <RouteAccordion
                    title="Трасса М5"
                    isOpen={openBackHighway === 'm5_back'}
                    onClick={() => toggleBackHighway('m5_back')}
                  >
                    <StationCard
                      title="Роснефть"
                      coords="53.510747, 49.56536"
                      payment="E1 Card"
                      volume="Согласно объему входа в РБ"
                    />
                  </RouteAccordion>

                  <RouteAccordion
                    title="Трасса М7"
                    isOpen={openBackHighway === 'm7_back'}
                    onClick={() => toggleBackHighway('m7_back')}
                  >
                    <StationCard
                      title="Иликом"
                      coords="55.895176, 48.882491"
                      payment="E1 Card"
                      volume="Согласно объему входа в РБ"
                    />
                  </RouteAccordion>
                </div>
              </div>
            </section>

            {/* 3. БЕЛАРУСЬ (ФИНИШ) */}
            <section className="pt-2">
              <SectionHeader title="🇧🇾 Беларусь (Финиш)" color="text-red-600 dark:text-red-400" />

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 text-xs sm:text-sm font-bold mb-3 shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-base">
                  <AlertTriangle size={18} className="text-red-600 dark:text-red-400 shrink-0" />
                  <span>Вход в РБ: <span className="underline">200 л.</span></span>
                </div>
                <p className="text-xs font-normal text-red-700/90 dark:text-red-300/90">
                  Суммарно во всех топливных баках (тягач + полуприцеп-рефрижератор).
                </p>
              </div>

              <StationCard
                title="Газпром"
                payment="Карта Газпром"
                volume="Полные баки"
              />
            </section>
          </div>
        )}

        {/* ==================== ОБРАТНО (Беларусь -> Россия -> Казахстан) ==================== */}
        {activeTab === 'back' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-5">
            {/* 1. БЕЛАРУСЬ (ВЫЕЗД) */}
            <section>
              <SectionHeader title="🇧🇾 Беларусь (Выезд)" color="text-red-600 dark:text-red-400" />
              <StationCard
                title="Газпром"
                payment="Карта Газпром"
                volume="Полные баки"
              />
              <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 text-xs sm:text-sm font-bold p-3 rounded-xl border border-blue-200 dark:border-blue-900">
                Норма выхода из РБ: <span className="underline">полные баки</span>
                <span className="font-normal text-xs block mt-1 opacity-90">
                  (которые были заправлены на Газпроме)
                </span>
              </div>
            </section>

            {/* 2. РОССИЯ (ТРАНЗИТ В КЗ) */}
            <section>
              <SectionHeader title="🇷🇺 Россия (Транзит)" color="text-green-600 dark:text-green-400" />

              {/* 2.1: Выбор трассы */}
              <div className="mb-4">
                <div className="px-1 mb-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  1. Выберите трассу следования:
                </div>
                <div className="space-y-3">
                  <RouteAccordion
                    title="Трасса М5"
                    isOpen={openHighway === 'm5'}
                    onClick={() => toggleHighway('m5')}
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
                    </div>
                  </RouteAccordion>

                  <RouteAccordion
                    title="Трасса М7"
                    isOpen={openHighway === 'm7'}
                    onClick={() => toggleHighway('m7')}
                  >
                    <div className="space-y-2">
                      <StationCard
                        title="Иликом"
                        coords="55.728233, 48.342069"
                        payment="E1 Card"
                        volume="До полных баков"
                      />
                      <OrDivider />
                      <StationCard
                        title="Иликом"
                        coords="55.89424, 48.883128"
                        payment="E1 Card"
                        volume="До полных баков"
                      />
                    </div>
                  </RouteAccordion>
                </div>
              </div>

              {/* 2.2: Выбор погранперехода */}
              <div>
                <div className="px-1 mb-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  2. Заправка перед границей (Погранпереход):
                </div>
                <div className="space-y-3">
                  <RouteAccordion
                    title="МАПП Маштаково"
                    isOpen={openBorder === 'mashtakovo'}
                    onClick={() => toggleBorder('mashtakovo')}
                  >
                    <StationCard
                      title="Роснефть"
                      coords="52.104272, 50.84312"
                      payment="E1 Card"
                      volume="До полных баков"
                    />
                  </RouteAccordion>

                  <RouteAccordion
                    title="МАПП Яйсан (Сагарчин)"
                    isOpen={openBorder === 'yaysan'}
                    onClick={() => toggleBorder('yaysan')}
                  >
                    <div className="space-y-2">
                      <StationCard
                        title="Башнефть"
                        coords="51.172763, 55.009327"
                        payment="E1 Card"
                        volume="До полных баков"
                      />
                      <OrDivider />
                      <StationCard
                        title="Башнефть"
                        coords="50.99687, 55.631703"
                        payment="E1 Card"
                        volume="До полных баков"
                      />
                    </div>
                  </RouteAccordion>

                  <RouteAccordion
                    title="МАПП Петухово"
                    isOpen={openBorder === 'petukhovo'}
                    onClick={() => toggleBorder('petukhovo')}
                  >
                    <StationCard
                      title="Роснефть"
                      coords="55.246674, 67.267227"
                      payment="E1 Card"
                      volume="До полных баков"
                    />
                  </RouteAccordion>

                  <RouteAccordion
                    title="МАПП Троицк"
                    isOpen={openBorder === 'troitsk'}
                    onClick={() => toggleBorder('troitsk')}
                  >
                    <div className="space-y-2">
                      <StationCard
                        title="Регион Uno"
                        coords="54.87323, 61.32007"
                        payment="E1 Card"
                        volume="До полных баков"
                      />
                      <OrDivider />
                      <StationCard
                        title="Газпром"
                        coords="54.1759, 61.4341"
                        payment="E1 Card"
                        volume="До полных баков"
                      />
                    </div>
                  </RouteAccordion>
                </div>
              </div>
            </section>

            {/* 3. КАЗАХСТАН (ВОЗВРАЩЕНИЕ) */}
            <section className="pt-2">
              <SectionHeader title="🇰🇿 Казахстан (Возвращение)" color="text-blue-600 dark:text-blue-400" />

              <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-bold p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-800 flex items-center gap-2.5 mb-3 shadow-xs">
                <Check size={20} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>
                  Вход в КЗ: <span className="underline">полные баки</span> (заправленные перед границей)
                </span>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold text-sm">
                  <AlertTriangle size={20} className="text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>Казахстан: только ДОЗАПРАВКА</span>
                </div>
                <p className="text-xs text-amber-800/90 dark:text-amber-300/90 leading-relaxed">
                  Допускается только минимальная дозаправка для движения по маршруту.
                </p>

                {/* Проверенные сети АЗС по E1 Card */}
                <div className="p-3 bg-white/90 dark:bg-[#1a1a1a] rounded-xl border border-amber-200/80 dark:border-amber-800/60 space-y-1.5 shadow-2xs">
                  <div className="text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                    <CreditCard size={15} className="text-blue-600 dark:text-blue-400" />
                    <span>Карта оплаты: E1 Card</span>
                  </div>
                  <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="font-semibold text-amber-900 dark:text-amber-300">Проверенная сеть АЗС:</span> SinoOil, Газпром, КазМунайГаз, Helios.
                  </div>
                </div>

                <div className="pt-2 border-t border-amber-200 dark:border-amber-800/60 flex items-center justify-between text-xs sm:text-sm font-bold text-blue-900 dark:text-blue-300">
                  <span>Выход из КЗ:</span>
                  <span className="bg-blue-100 dark:bg-blue-900/50 px-2.5 py-0.5 rounded-full text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800">
                    150 – 200 л. (тягач + п/п)
                  </span>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </Layout>
  );
};

/* --- Вспомогательные компоненты UI --- */

const SectionHeader = ({ title, color }: { title: string; color: string }) => (
  <h2 className={`text-base font-bold mb-2 flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-1 ${color}`}>
    {title}
  </h2>
);

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

            {/* Копирование координат */}
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

export default KazakhAsianTripPage;