import React, { useState } from 'react';
import { Play, Truck, Gauge, Wrench, CheckCircle, AlertTriangle, ZoomIn, X, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';

const OpenTripPage: React.FC = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  return (
    <Layout title="Как открыть рейс">
      <div className="space-y-6 pb-8">

        {/* ПРЕДУПРЕЖДЕНИЕ */}
        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800 flex gap-3 items-start">
          <div className="text-amber-600 dark:text-amber-400 shrink-0 mt-1">
            <AlertTriangle size={24} />
          </div>
          <div>
            <h3 className="font-bold text-amber-700 dark:text-amber-400 text-lg">
              Важно знать
            </h3>
            <p className="text-amber-600/90 dark:text-amber-300/90 text-sm mt-1 leading-relaxed">
              Рейс можно открыть только находясь на базе или при перецепке (радиус 1.5 км от машины).
            </p>
          </div>
        </div>

        {/* ШАГ 1: Начало */}
        <StepSection 
          number={1}
          title="Запуск"
          icon={<Play size={20} className="text-white" />}
          headerColor="bg-blue-600"
          content={
            <div className="space-y-3">
              <p>
                Откройте раздел <span className="font-bold">«Рейсы»</span> и нажмите большую кнопку внизу экрана.
              </p>
              <ImageThumbnail src="/photo/3.png" onClick={() => setEnlargedImage('/photo/3.png')} />
            </div>
          }
        />

        {/* ШАГ 2: Выбор техники */}
        <StepSection 
          number={2}
          title="Тягач и прицеп"
          icon={<Truck size={20} className="text-white" />}
          headerColor="bg-indigo-600"
          content={
            <div className="space-y-3">
              <p>
                Выберите тягач и полуприцеп из списка.
                <br />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  (В списке отображается только техника рядом с вами)
                </span>
              </p>
              <ImageThumbnail src="/photo/4.png" onClick={() => setEnlargedImage('/photo/4.png')} />
            </div>
          }
        />

        {/* ШАГ 3: Приборы (Сетка фото) */}
        <StepSection 
          number={3}
          title="Показания приборов"
          icon={<Gauge size={20} className="text-white" />}
          headerColor="bg-emerald-600"
          content={
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>Введите остаток топлива в тягаче</li>
                <li>Введите остаток в рефе (если есть)</li>
                <li>Сделайте фото одометра и датчиков</li>
              </ul>
              
              {/* Сетка из 3 фото */}
              <div className="grid grid-cols-3 gap-2">
                {['/photo/5.png', '/photo/6.png', '/photo/7.png'].map((src, i) => (
                  <div key={i} className="aspect-square relative group cursor-pointer rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700" onClick={() => setEnlargedImage(src)}>
                    <img src={src} alt="Прибор" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-center text-gray-400 flex items-center justify-center gap-1">
                <ZoomIn size={12} /> Нажмите на фото
              </p>
            </div>
          }
        />

        {/* ШАГ 4: Техсостояние */}
        <StepSection 
          number={4}
          title="Тех. состояние"
          icon={<Wrench size={20} className="text-white" />}
          headerColor="bg-orange-500"
          content={
            <div className="space-y-3">
              <p>
                Укажите замечания текстом (если есть).
                Проставьте галочки, подтверждая исправность узлов.
              </p>
              <ImageThumbnail src="/photo/8.png" onClick={() => setEnlargedImage('/photo/8.png')} />
            </div>
          }
        />

        {/* ФИНАЛ */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-green-600 to-teal-700 shadow-lg text-white text-center">
          <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
            <CheckCircle size={28} className="text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Подтверждение</h3>
          <p className="opacity-90 text-sm mb-4">
            Проверьте данные. После нажатия «Начать» у вас будет 6 секунд на отмену.
          </p>
          <div 
            className="rounded-xl overflow-hidden cursor-pointer border-2 border-white/30 shadow-inner max-w-[200px] mx-auto"
            onClick={() => setEnlargedImage('/photo/9.png')}
          >
            <img src="/photo/9.png" alt="Финал" className="w-full opacity-90 hover:opacity-100 transition-opacity" />
          </div>
        </div>

      </div>

      {/* МОДАЛЬНОЕ ОКНО ДЛЯ ПРОСМОТРА ФОТО */}
      {enlargedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <img
              src={enlargedImage}
              alt="Увеличенное изображение"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            />
            <button
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-gray-800/50 rounded-full"
              onClick={() => setEnlargedImage(null)}
            >
              <X size={32} />
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

// --- ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ ---

// 1. Компонент Секции Шага
interface StepProps {
  number: number;
  title: string;
  icon: React.ReactNode;
  headerColor: string;
  content: React.ReactNode;
}

const StepSection: React.FC<StepProps> = ({ number, title, icon, headerColor, content }) => (
  <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1e1e1e] overflow-hidden shadow-sm">
    {/* Заголовок шага */}
    <div className="flex items-center gap-3 p-3 border-b border-gray-100 dark:border-gray-800">
      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-md ${headerColor}`}>
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 dark:text-white flex-1">
        Шаг {number}: <span className="font-normal opacity-80">{title}</span>
      </h3>
    </div>
    
    {/* Контент шага */}
    <div className="p-4 text-gray-700 dark:text-gray-300 leading-relaxed">
      {content}
    </div>
  </div>
);

// 2. Компонент Миниатюры Картинки
const ImageThumbnail = ({ src, onClick }: { src: string, onClick: () => void }) => (
  <div 
    className="relative group cursor-pointer rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm mt-2"
    onClick={onClick}
  >
    <img src={src} alt="Скриншот" className="w-full object-cover max-h-60" />
    
    {/* Оверлей с лупой */}
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
      <div className="bg-black/50 text-white px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 backdrop-blur-sm">
        <ZoomIn size={12} /> Увеличить
      </div>
    </div>
  </div>
);

export default OpenTripPage;