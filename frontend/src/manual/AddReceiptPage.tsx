import React, { useState } from 'react';
import { Receipt, Navigation, ScanLine, Camera, Image, CheckCircle, AlertTriangle, BrainCircuit, ZoomIn, X, FileText, CreditCard } from 'lucide-react';
import Layout from '../components/Layout';

const AddReceiptPage: React.FC = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  return (
    <Layout title="Как добавить чек">
      <div className="space-y-6 pb-8">

        {/* ГЛАВНОЕ ПРАВИЛО */}
        <div className="p-4 rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 flex gap-3 items-start">
          <div className="text-red-600 dark:text-red-400 shrink-0 mt-1">
            <AlertTriangle size={24} />
          </div>
          <div>
            <h3 className="font-bold text-red-700 dark:text-red-400 text-lg">
              Внимание
            </h3>
            <p className="text-red-600/90 dark:text-red-300/90 text-sm mt-1 leading-relaxed">
              Загружайте чек только в тот рейс, к которому он относится.
            </p>
          </div>
        </div>

        {/* ШАГ 1: Навигация */}
        <StepSection 
          number={1}
          title="Раздел «Платежи»"
          icon={<Navigation size={20} className="text-white" />}
          headerColor="bg-blue-600"
          content={
            <div className="space-y-3">
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400">1.</span>
                  Откройте текущий рейс → нажмите на <span className="font-bold">ЗАКАЗ</span>.
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400">2.</span>
                  Нажмите синюю кнопку <span className="font-bold">«+»</span> → Отправить документ.
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400">3.</span>
                  Выберите пункт <span className="font-bold">«Платежи»</span>.
                </li>
              </ul>
              
              <div className="grid grid-cols-2 gap-2 mt-2">
                 <ImageThumbnail src="/photo/10.png" onClick={() => setEnlargedImage('/photo/10.png')} />
                 <ImageThumbnail src="/photo/17.png" onClick={() => setEnlargedImage('/photo/17.png')} />
              </div>
            </div>
          }
        />

        {/* ШАГ 2: Выбор способа */}
        <StepSection 
          number={2}
          title="Способ загрузки"
          icon={<ScanLine size={20} className="text-white" />}
          headerColor="bg-purple-600"
          content={
            <div className="space-y-3">
              <p className="mb-2">Выберите вариант:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {/* Сканер */}
                <div className="p-3 rounded-lg border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20 text-center">
                  <div className="flex justify-center mb-1 text-purple-600 dark:text-purple-400"><ScanLine size={24}/></div>
                  <div className="font-bold text-purple-900 dark:text-purple-100 text-sm">Сканер</div>
                  <div className="text-xs text-purple-700/70 dark:text-purple-300/70 mt-1">Обрежет лишнее</div>
                </div>

                {/* Камера */}
                <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-center">
                  <div className="flex justify-center mb-1 text-gray-600 dark:text-gray-400"><Camera size={24}/></div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm">Камера</div>
                </div>

                {/* Галерея */}
                <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-center">
                  <div className="flex justify-center mb-1 text-gray-600 dark:text-gray-400"><Image size={24}/></div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm">Галерея</div>
                </div>
              </div>

              <ImageThumbnail src="/photo/13.png" onClick={() => setEnlargedImage('/photo/13.png')} />
            </div>
          }
        />

        {/* ШАГ 3: Проверка ИИ (САМОЕ ВАЖНОЕ) */}
        <StepSection 
          number={3}
          title="Проверка ИИ"
          icon={<BrainCircuit size={20} className="text-white" />}
          headerColor="bg-pink-600"
          content={
            <div className="space-y-4">
              <div className="flex gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-100 dark:border-pink-900/50">
                <div className="shrink-0 mt-0.5 text-pink-600 dark:text-pink-400"><AlertTriangle size={18}/></div>
                <p className="text-sm text-pink-800 dark:text-pink-300 font-medium">
                  ИИ заполнит поля автоматически, но он часто ошибается. Проверьте каждую строку!
                </p>
              </div>

              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 text-green-500"><CheckCircle size={16}/></div>
                  <span><span className="font-bold">Сумма и Валюта:</span> Самое важное поле. Сверьте с бумажкой.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 text-blue-500"><CreditCard size={16}/></div>
                  <span><span className="font-bold">Карта оплаты:</span> Для заправок обязательно выберите правильную карту (Газпром/E1 и т.д.).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 text-gray-400"><FileText size={16}/></div>
                  <span><span className="font-bold">Тип расхода:</span> Топливо, Стоянка или Платон?</span>
                </li>
              </ul>

              <ImageThumbnail src="/photo/18.png" onClick={() => setEnlargedImage('/photo/18.png')} />
            </div>
          }
        />

        {/* ФИНАЛ */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-600 to-green-600 shadow-lg text-white text-center">
          <Receipt size={48} className="mx-auto mb-3 opacity-90" />
          <h3 className="text-xl font-bold">Готово!</h3>
          <p className="opacity-90">Чек сохранен в системе.</p>
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

export default AddReceiptPage;