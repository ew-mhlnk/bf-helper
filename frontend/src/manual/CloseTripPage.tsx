import React, { useState } from 'react';
import { LogOut, FileText, Camera, AlertTriangle, Clock, CheckCircle, ZoomIn, X } from 'lucide-react';
import Layout from '../components/Layout';

const CloseTripPage: React.FC = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  return (
    <Layout title="Завершение рейса">
      <div className="space-y-6 pb-8">

        {/* ШАГ 1: Кнопка завершения */}
        <StepSection 
          number={1}
          title="Находим кнопку"
          icon={<LogOut size={20} className="text-white pl-0.5" />}
          headerColor="bg-blue-600"
          content={
            <div className="space-y-3">
              <p>
                Зайдите в текущий рейс и нажмите кнопку <span className="font-bold text-blue-600 dark:text-blue-400">«Завершить»</span>.
              </p>
              <ImageThumbnail src="/photo/16.png" onClick={() => setEnlargedImage('/photo/16.png')} />
            </div>
          }
        />

        {/* ШАГ 2: Заполнение формы (Самое важное) */}
        <StepSection 
          number={2}
          title="Заполнение отчета"
          icon={<FileText size={20} className="text-white" />}
          headerColor="bg-purple-600"
          content={
            <div className="space-y-4">
              {/* Правило */}
              <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 text-purple-800 dark:text-purple-300 text-sm font-semibold text-center">
                ⬇️ Заполняйте строго сверху вниз, ничего не пропуская!
              </div>

              <div className="space-y-4">
                {/* Пункт 1 */}
                <div className="flex gap-3">
                  <div className="shrink-0 mt-1 text-gray-400"><FileText size={18} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">1. Показания приборов</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Внесите цифры пробега.</p>
                  </div>
                </div>

                {/* Пункт 2 (Фото) */}
                <div className="flex gap-3">
                  <div className="shrink-0 mt-1 text-red-500"><Camera size={18} /></div>
                  <div>
                    <h4 className="font-bold text-red-600 dark:text-red-400">2. Фото (Обязательно!)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Прикрепите фото одометра и рефрижератора. Без них рейс закрыть нельзя.</p>
                  </div>
                </div>

                {/* Пункт 3 */}
                <div className="flex gap-3">
                  <div className="shrink-0 mt-1 text-gray-400"><FileText size={18} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">3. Топливо и Замечания</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Укажите остатки в баках и технические проблемы (если есть).</p>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        {/* ПРЕДУПРЕЖДЕНИЕ: 6 секунд */}
        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800 flex gap-3 items-start">
          <div className="text-amber-600 dark:text-amber-400 shrink-0 mt-1">
            <Clock size={24} />
          </div>
          <div>
            <h3 className="font-bold text-amber-700 dark:text-amber-400 text-lg">
              Осторожно!
            </h3>
            <p className="text-amber-600/90 dark:text-amber-300/90 text-sm mt-1 leading-relaxed">
              После нажатия «Завершить» у вас будет всего <span className="font-bold">6 секунд</span> на отмену, если вы ошиблись.
            </p>
          </div>
        </div>

        {/* ФИНАЛ */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 shadow-lg text-white text-center">
          <CheckCircle size={48} className="mx-auto mb-3 opacity-90" />
          <h3 className="text-xl font-bold">Готово!</h3>
          <p className="opacity-90">Рейс успешно закрыт.</p>
        </div>

      </div>

      {/* МОДАЛЬНОЕ ОКНО */}
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

// --- ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ (Те же, что и в OpenTripPage, для единства стиля) ---

interface StepProps {
  number: number;
  title: string;
  icon: React.ReactNode;
  headerColor: string;
  content: React.ReactNode;
}

const StepSection: React.FC<StepProps> = ({ number, title, icon, headerColor, content }) => (
  <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1e1e1e] overflow-hidden shadow-sm">
    <div className="flex items-center gap-3 p-3 border-b border-gray-100 dark:border-gray-800">
      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-md ${headerColor}`}>
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 dark:text-white flex-1">
        Шаг {number}: <span className="font-normal opacity-80">{title}</span>
      </h3>
    </div>
    <div className="p-4 text-gray-700 dark:text-gray-300 leading-relaxed">
      {content}
    </div>
  </div>
);

const ImageThumbnail = ({ src, onClick }: { src: string, onClick: () => void }) => (
  <div 
    className="relative group cursor-pointer rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm mt-2"
    onClick={onClick}
  >
    <img src={src} alt="Скриншот" className="w-full object-cover max-h-60" />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
      <div className="bg-black/50 text-white px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 backdrop-blur-sm">
        <ZoomIn size={12} /> Увеличить
      </div>
    </div>
  </div>
);

export default CloseTripPage;