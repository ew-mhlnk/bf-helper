import React, { useState } from 'react';
import { Navigation, FileText, Camera, UserCheck, AlertTriangle, ZoomIn, X, PlayCircle, ScanLine } from 'lucide-react';
import Layout from '../components/Layout';

const AddCMRPage: React.FC = () => {
  const [enlargedMedia, setEnlargedMedia] = useState<{ type: 'img' | 'video', src: string } | null>(null);

  const openMedia = (type: 'img' | 'video', src: string) => {
    setEnlargedMedia({ type, src });
  };

  return (
    <Layout title="Как добавить CMR">
      <div className="space-y-6 pb-8">

        {/* ШАГ 1: Вход в заказ */}
        <StepSection 
          number={1}
          title="Вход в заказ"
          icon={<Navigation size={20} className="text-white" />}
          headerColor="bg-blue-600"
          content={
            <div className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>Зайдите в раздел <strong>«Рейсы»</strong> и выберите свой текущий рейс.</li>
                <li>Нажмите на <strong>«Заказ»</strong>.</li>
                <li>Нажмите синюю кнопку <strong>«Отправить документ»</strong>.</li>
              </ol>
              <MediaThumbnail 
                src="/photo/vybor_reisa.png" 
                type="img" 
                onClick={() => openMedia('img', '/photo/vybor_reisa.png')} 
              />
            </div>
          }
        />

        {/* ШАГ 2: Выбор типа */}
        <StepSection 
          number={2}
          title="Выбор типа документа"
          icon={<FileText size={20} className="text-white" />}
          headerColor="bg-purple-600"
          content={
            <div className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>В меню выберите пункт <strong>«Прочие документы»</strong>.</li>
                <li>Выберите тип <strong>«CMR»</strong> (после загрузки или разгрузки).</li>
                <li>Нажмите <strong>«Сканер»</strong> <ScanLine size={16} className="inline mb-1"/>.</li>
              </ol>
              <MediaThumbnail 
                src="/photo/CMR-choice.png" 
                type="img" 
                onClick={() => openMedia('img', '/photo/CMR-choice.png')} 
              />
            </div>
          }
        />

        {/* ШАГ 3: Фотографирование */}
        <StepSection 
          number={3}
          title="Фотографирование (Советы)"
          icon={<Camera size={20} className="text-white" />}
          headerColor="bg-amber-500"
          content={
            <div className="space-y-3">
              <p className="text-sm font-bold text-gray-900 dark:text-white mb-2">
                Чтобы фото приняли с первого раза:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li><strong>Подготовка:</strong> Положите документ на ровную поверхность. Обязательно <strong>протрите камеру</strong>.</li>
                <li><strong>Освещение:</strong> Используйте вспышку (значок молнии), если темно.</li>
                <li><strong>Дистанция:</strong> Не фотографируйте слишком далеко — текст будет размытым.</li>
                <li><strong>Фокус:</strong> Если камера не фокусируется, нажмите на экран пальцем (на текст).</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                После того как фото готово, нажмите <strong>«Далее»</strong>.
              </p>
              
              <div className="grid grid-cols-2 gap-2 mt-2">
                <MediaThumbnail 
                  src="/photo/CMR-photo.png" 
                  type="img" 
                  onClick={() => openMedia('img', '/photo/CMR-photo.png')} 
                />
                <MediaThumbnail 
                  src="/photo/CMR-photo2.png" 
                  type="img" 
                  onClick={() => openMedia('img', '/photo/CMR-photo2.png')} 
                />
              </div>
            </div>
          }
        />

        {/* ШАГ 4: Проверка */}
        <StepSection 
          number={4}
          title="Проверка менеджером"
          icon={<UserCheck size={20} className="text-white" />}
          headerColor="bg-teal-600"
          content={
            <div className="space-y-3">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                После загрузки появится статус <strong>«Ожидание»</strong>. Это значит, что менеджер проверяет качество.
              </p>
              <MediaThumbnail 
                src="/photo/CMR-waiting.png" 
                type="img" 
                onClick={() => openMedia('img', '/photo/CMR-waiting.png')} 
              />
            </div>
          }
        />

        {/* ШАГ 5: Если отклонили */}
        <StepSection 
          number={5}
          title="Если фото НЕ одобрят"
          icon={<AlertTriangle size={20} className="text-white" />}
          headerColor="bg-red-500"
          content={
            <div className="space-y-3">
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-lg text-sm text-red-800 dark:text-red-300">
                Вам придет уведомление об ошибке.
              </div>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>Нажмите на <strong>«Три точки»</strong> (меню) рядом с отклоненным фото.</li>
                <li>Выберите пункт <strong>«Заменить фото»</strong>.</li>
                <li>Сделайте новый снимок и отправьте снова.</li>
              </ol>
              <MediaThumbnail 
                src="/photo/CMR-rephoto.png" 
                type="img" 
                onClick={() => openMedia('img', '/photo/CMR-rephoto.png')} 
              />
            </div>
          }
        />

      </div>

      {/* МОДАЛЬНОЕ ОКНО */}
      <ModalViewer media={enlargedMedia} onClose={() => setEnlargedMedia(null)} />
    </Layout>
  );
};

// --- ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ ---

const StepSection = ({ number, title, icon, headerColor, content }: any) => (
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

const MediaThumbnail = ({ src, type, onClick }: any) => (
  <div 
    className="relative group cursor-pointer rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm mt-2 bg-black/5"
    onClick={onClick}
  >
    {type === 'img' ? (
      <img src={src} alt="Медиа" className="w-full object-cover max-h-60" />
    ) : (
      <div className="relative w-full h-48 bg-gray-900 flex items-center justify-center">
        <video src={src} className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayCircle size={48} className="text-white opacity-90" />
        </div>
      </div>
    )}
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
      <div className="bg-black/50 text-white px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 backdrop-blur-sm">
        <ZoomIn size={12} /> {type === 'video' ? 'Смотреть' : 'Увеличить'}
      </div>
    </div>
  </div>
);

const ModalViewer = ({ media, onClose }: any) => {
  if (!media) return null;
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl flex flex-col items-center">
        {media.type === 'img' ? (
          <img src={media.src} alt="View" className="max-w-full max-h-[85vh] rounded-lg shadow-2xl" />
        ) : (
          <video src={media.src} controls autoPlay className="max-w-full max-h-[85vh] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
        )}
        <button className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-gray-800/50 rounded-full" onClick={onClose}>
          <X size={32} />
        </button>
      </div>
    </div>
  );
};

export default AddCMRPage;