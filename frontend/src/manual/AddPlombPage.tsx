import React, { useState } from 'react';
import { Navigation, FileText, ZoomIn, X, PlayCircle, Video, Lock } from 'lucide-react';
import Layout from '../components/Layout';

const AddPlombPage: React.FC = () => {
  const [enlargedMedia, setEnlargedMedia] = useState<{ type: 'img' | 'video'; src: string } | null>(null);

  const openMedia = (type: 'img' | 'video', src: string) => {
    setEnlargedMedia({ type, src });
  };

  return (
    <Layout title="Как добавить фото пломбы">
      <div className="space-y-6 pb-8">
        {/* Блок видео-инструкции */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 shadow-sm mt-2">
          <div className="flex items-start gap-3 mb-3">
            <div className="shrink-0 mt-1 text-blue-600 dark:text-blue-400">
              <Video size={28} />
            </div>
            <div>
              <h3 className="font-bold text-blue-800 dark:text-blue-300 text-lg">
                Видео-инструкция
              </h3>
              <p className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed mt-1">
                Можно сразу посмотреть видео или ознакомиться со скриншотами пошагово ниже.
              </p>
            </div>
          </div>
          <MediaThumbnail
            src="/photo/plomb1.mp4"
            type="video"
            onClick={() => openMedia('video', '/photo/plomb1.mp4')}
          />
        </div>

        {/* Шаг 1 */}
        <StepSection
          number={1}
          title="Выбор текущего рейса"
          icon={<Navigation size={20} className="text-white pl-0.5" />}
          headerColor="bg-blue-600"
          content={
            <div className="space-y-2">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                Зайдите в раздел <span className="font-bold">«Рейсы»</span> и выберите свой текущий выполняемый рейс.
              </p>
            </div>
          }
        />

        {/* Шаг 2 */}
        <StepSection
          number={2}
          title="Кнопка отправки документа"
          icon={<Lock size={20} className="text-white" />}
          headerColor="bg-purple-600"
          content={
            <div className="space-y-3">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                В меню текущего заказа нажмите на синюю кнопку <span className="font-bold">«Отправить документ»</span> (или значок <span className="font-bold">«+»</span>).
              </p>
              <MediaThumbnail
                src="/photo/bf.png"
                type="img"
                onClick={() => openMedia('img', '/photo/bf.png')}
              />
            </div>
          }
        />

        {/* Шаг 3 */}
        <StepSection
          number={3}
          title="Выбор типа «Фото Замок+Пломба»"
          icon={<FileText size={20} className="text-white" />}
          headerColor="bg-amber-500"
          content={
            <div className="space-y-3">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                Перейдите в категорию <span className="font-bold">«Прочие документы»</span> и выберите из списка пункт <span className="font-bold">«Фото Замок+Пломба»</span>. Сделайте или прикрепите снимок.
              </p>
              <MediaThumbnail
                src="/photo/bf-1.png"
                type="img"
                onClick={() => openMedia('img', '/photo/bf-1.png')}
              />
            </div>
          }
        />
      </div>

      {/* Модальный просмотрщик медиа */}
      <ModalViewer media={enlargedMedia} onClose={() => setEnlargedMedia(null)} />
    </Layout>
  );
};

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

export default AddPlombPage;