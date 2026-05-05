import React, { useState } from 'react';
import { Smartphone, Navigation, FileText, Image, CheckCircle, AlertTriangle, ZoomIn, X } from 'lucide-react';
import Layout from '../components/Layout';

const EssersErrorPage: React.FC = () => {
  const[enlargedImage, setEnlargedImage] = useState<string | null>(null);

  return (
    <Layout title="Ошибка в Essers">
      <div className="space-y-6 pb-8">
        
        {/* Блок с важным предупреждением */}
        <div className="p-4 rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 flex gap-3 items-start mt-2">
          <div className="text-red-600 dark:text-red-400 shrink-0 mt-1">
            <AlertTriangle size={24} />
          </div>
          <div>
            <h3 className="font-bold text-red-700 dark:text-red-400 text-lg">
              Для чего это нужно?
            </h3>
            <p className="text-red-600/90 dark:text-red-300/90 text-sm mt-1 leading-relaxed">
              Скриншот с проблемой отправляется <span className="font-bold underline">напрямую заказчику</span>, чтобы доказать, что сбой произошел в приложении Essers. <br/><br/>
              Пожалуйста, будьте очень внимательны при прикреплении скриншота!
            </p>
          </div>
        </div>

        {/* Шаг 1 */}
        <StepSection
          number={1}
          title="Сделайте скриншот"
          icon={<Smartphone size={20} className="text-white" />}
          headerColor="bg-blue-600"
          content={
            <div className="space-y-2">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                Как только вы увидели ошибку в приложении <strong>Essers</strong>, сразу сделайте снимок экрана (скриншот) на вашем телефоне.
              </p>
            </div>
          }
        />

        {/* Шаг 2 */}
        <StepSection
          number={2}
          title="Вход в заказ"
          icon={<Navigation size={20} className="text-white" />}
          headerColor="bg-purple-600"
          content={
            <div className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>Откройте приложение <strong>TruckOffice</strong>.</li>
                <li>Зайдите в раздел <strong>«Рейсы»</strong> и выберите нужный рейс.</li>
                <li>Нажмите на выполняемый <strong>«Заказ»</strong>.</li>
                <li>Нажмите синюю кнопку <strong>«Отправить документ»</strong>.</li>
              </ol>
              <ImageThumbnail src="/photo/Essers1.png" onClick={() => setEnlargedImage('/photo/Essers1.png')} />
            </div>
          }
        />

        {/* Шаг 3 */}
        <StepSection
          number={3}
          title="Выбор типа документа"
          icon={<FileText size={20} className="text-white" />}
          headerColor="bg-amber-500"
          content={
            <div className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>В появившемся меню выберите <strong>«Прочие документы»</strong>.</li>
                <li>В списке типов выберите <strong>«Проект Essers»</strong>.</li>
              </ol>
            </div>
          }
        />

        {/* Шаг 4 */}
        <StepSection
          number={4}
          title="Загрузка скриншота"
          icon={<Image size={20} className="text-white" />}
          headerColor="bg-indigo-600"
          content={
            <div className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>Нажмите на кнопку <strong>«Галерея»</strong> или <strong>«Камера»</strong>.</li>
                <li>Внимательно найдите и выберите скриншот с ошибкой (или сфотографируйте экран с другого телефона так, чтобы ошибка была четко видна).</li>
                <li>Нажмите <strong>«Подтвердить»</strong>.</li>
              </ol>
              <ImageThumbnail src="/photo/Essers2.png" onClick={() => setEnlargedImage('/photo/Essers2.png')} />
            </div>
          }
        />

        {/* Финал */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-600 to-green-600 shadow-lg text-white text-center">
          <CheckCircle size={48} className="mx-auto mb-3 opacity-90" />
          <h3 className="text-xl font-bold">Готово!</h3>
          <p className="opacity-90">Ошибка зафиксирована и отправлена.</p>
        </div>
      </div>

      {/* Модальное окно для увеличения картинок */}
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

export default EssersErrorPage;