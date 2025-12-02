import React, { useState } from 'react';
import { FileText, Navigation, ScanLine, Camera, Image, CheckCircle, AlertTriangle, FileCheck, ZoomIn, X } from 'lucide-react';
import Layout from '../components/Layout';

const AddCMRPage: React.FC = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  return (
    <Layout title="Как добавить CMR">
      <div className="space-y-6 pb-8">

        {/* ГЛАВНОЕ ПРАВИЛО (Красный блок) */}
        <div className="p-4 rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 flex gap-3 items-start">
          <div className="text-red-600 dark:text-red-400 shrink-0 mt-1">
            <AlertTriangle size={24} />
          </div>
          <div>
            <h3 className="font-bold text-red-700 dark:text-red-400 text-lg">
              Важное правило
            </h3>
            <p className="text-red-600/90 dark:text-red-300/90 text-sm mt-1 leading-relaxed">
              Любой документ загружается <span className="font-bold underline">только</span> внутри конкретного рейса и заказа. Не загружайте документы в один заказ, если у вас их было 2.
            </p>
          </div>
        </div>

        {/* ШАГ 1: Навигация */}
        <StepSection 
          number={1}
          title="Заходим в заказ"
          icon={<Navigation size={20} className="text-white" />}
          headerColor="bg-blue-600"
          content={
            <div className="space-y-3">
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400">1.</span>
                  Раздел «Рейсы» → Выберите текущий рейс.
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400">2.</span>
                  Нажмите на <span className="font-bold">ЗАКАЗ</span>.
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400">3.</span>
                  Нажмите синюю кнопку <span className="font-bold">«+»</span> → Отправить документ → Прочие документы (CMR).
                </li>
              </ul>
              
              {/* Сетка фото */}
              <div className="grid grid-cols-2 gap-2 mt-2">
                 <ImageThumbnail src="/photo/11.png" onClick={() => setEnlargedImage('/photo/11.png')} />
                 <ImageThumbnail src="/photo/12.png" onClick={() => setEnlargedImage('/photo/12.png')} />
              </div>
            </div>
          }
        />

        {/* ШАГ 2: Выбор способа (Карточки) */}
        <StepSection 
          number={2}
          title="Способ загрузки"
          icon={<ScanLine size={20} className="text-white" />}
          headerColor="bg-purple-600"
          content={
            <div className="space-y-3">
              <p className="mb-2">Выберите один из вариантов:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {/* Сканер */}
                <div className="p-3 rounded-lg border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20 text-center">
                  <div className="flex justify-center mb-1 text-purple-600 dark:text-purple-400"><ScanLine size={24}/></div>
                  <div className="font-bold text-purple-900 dark:text-purple-100 text-sm">Сканер</div>
                  <div className="text-xs text-purple-700/70 dark:text-purple-300/70 mt-1">Обрежет лишнее (Рекомендуем)</div>
                </div>

                {/* Камера */}
                <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-center">
                  <div className="flex justify-center mb-1 text-gray-600 dark:text-gray-400"><Camera size={24}/></div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm">Камера</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Обычное фото</div>
                </div>

                {/* Галерея */}
                <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-center">
                  <div className="flex justify-center mb-1 text-gray-600 dark:text-gray-400"><Image size={24}/></div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm">Галерея</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Если фото уже есть</div>
                </div>
              </div>

              <ImageThumbnail src="/photo/13.png" onClick={() => setEnlargedImage('/photo/13.png')} />
            </div>
          }
        />

        {/* ШАГ 3: Фотографирование */}
        <StepSection 
          number={3}
          title="Правила фото"
          icon={<Camera size={20} className="text-white" />}
          headerColor="bg-amber-500"
          content={
            <div className="space-y-3">
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  Положите лист на ровную поверхность.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  Протрите камеру.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  Следите, чтобы текст читался.
                </li>
              </ul>
              <ImageThumbnail src="/photo/14.png" onClick={() => setEnlargedImage('/photo/14.png')} />
            </div>
          }
        />

        {/* ШАГ 4: Проверка */}
        <StepSection 
          number={4}
          title="Проверка"
          icon={<FileCheck size={20} className="text-white" />}
          headerColor="bg-teal-600"
          content={
            <div className="space-y-3">
              <p>
                Убедитесь, что файл прикрепился. Цифра на заказе покажет количество документов.
                <br/>
                Чтобы посмотреть список, нажмите <span className="font-bold">«Файлы»</span>.
              </p>
              <ImageThumbnail src="/photo/15.png" onClick={() => setEnlargedImage('/photo/15.png')} />
            </div>
          }
        />

        {/* НАПОМИНАЛКА */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-lg border border-gray-700">
          <h3 className="text-lg font-bold mb-3 text-center border-b border-gray-600 pb-2">
            Обязательный пакет документов:
          </h3>
          <div className="flex justify-around text-center">
            <div className="flex flex-col items-center gap-1">
              <FileText size={24} className="text-blue-400" />
              <span className="text-sm">CMR</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <FileText size={24} className="text-yellow-400" />
              <span className="text-sm">Карта простоя</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <FileText size={24} className="text-green-400" />
              <span className="text-sm">Чеки</span>
            </div>
          </div>
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

// --- ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ ---

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

export default AddCMRPage;