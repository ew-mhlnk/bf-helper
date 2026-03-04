import React, { useState } from 'react';
import { LogOut, FileText, CheckCircle, Timer, Undo, Camera, Fuel, Wrench, ZoomIn, X, PlayCircle, AlertCircle, Video } from 'lucide-react';
import Layout from '../components/Layout';

const CloseTripPage: React.FC = () => {
  const [enlargedMedia, setEnlargedMedia] = useState<{ type: 'img' | 'video', src: string } | null>(null);

  const openMedia = (type: 'img' | 'video', src: string) => {
    setEnlargedMedia({ type, src });
  };

  return (
    <Layout title="Как закрыть рейс">
      <div className="space-y-6 pb-8">

        {/* --- ВИДЕО ВСТУПЛЕНИЕ --- */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 shadow-sm">
           <div className="flex items-start gap-3 mb-3">
             <div className="shrink-0 mt-1 text-blue-600 dark:text-blue-400">
               <Video size={28} />
             </div>
             <div>
               <h3 className="font-bold text-blue-800 dark:text-blue-300 text-lg">
                 Видео-инструкция
               </h3>
               <p className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed mt-1">
                 Рекомендуем посмотреть короткий ролик <span className="font-bold">(~1 мин)</span>, чтобы быстрее разобраться, а затем прочитать шаги ниже.
               </p>
             </div>
           </div>
           
           <MediaThumbnail 
             src="/photo/howtoclose.mp4" 
             type="video" 
             onClick={() => openMedia('video', '/photo/howtoclose.mp4')} 
           />
        </div>

        {/* ШАГ 1: Кнопка завершения */}
        <StepSection 
          number={1}
          title="Начало завершения"
          icon={<LogOut size={20} className="text-white pl-0.5" />}
          headerColor="bg-blue-600"
          content={
            <div className="space-y-3">
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <li>Откройте раздел <strong>«Рейсы»</strong>.</li>
                <li>Самый верхний рейс — это ваш текущий.</li>
                <li>Нажмите на кнопку <strong>«Завершить»</strong>.</li>
              </ol>
              <MediaThumbnail 
                src="/photo/End.png" 
                type="img" 
                onClick={() => openMedia('img', '/photo/End.png')} 
              />
            </div>
          }
        />

        {/* ШАГ 2: Заполнение данных */}
        <StepSection 
          number={2}
          title="Заполнение данных"
          icon={<FileText size={20} className="text-white" />}
          headerColor="bg-purple-600"
          content={
            <div className="space-y-4">
              {/* Предупреждение */}
              <div className="flex gap-2 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
                <AlertCircle size={20} className="text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                <p className="text-sm text-purple-900 dark:text-purple-200 font-medium">
                  Обязательно заполните все поля, отмеченные звездочкой (*).
                </p>
              </div>

              <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                {/* Одометр */}
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-1">
                    <Camera size={16} className="text-blue-500" /> Одометр
                  </h4>
                  <ul className="list-disc list-inside ml-1 space-y-1">
                    <li>Сравните одометр в кабине с цифрой в приложении.</li>
                    <li>Если не совпадают — исправьте.</li>
                    <li><strong>Сфотографируйте одометр</strong> (нажмите на значок фотоаппарата).</li>
                  </ul>
                </div>

                {/* Прицеп */}
                <div className="border-t border-gray-100 dark:border-gray-800 pt-3">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Прицеп-рефрижератор</h4>
                  <p>Проверьте показания так же, как у тягача. Исправьте цифры и сделайте фото.</p>
                </div>

                {/* Топливо */}
                <div className="border-t border-gray-100 dark:border-gray-800 pt-3">
                  <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-1">
                    <Fuel size={16} className="text-amber-500" /> Топливо
                  </h4>
                  <ul className="list-disc list-inside ml-1 space-y-1">
                    <li>Впишите остаток в <strong>тягаче</strong>.</li>
                    <li>Впишите остаток в <strong>прицепе</strong> (рефрижераторе).</li>
                  </ul>
                </div>

                {/* Тех проблемы */}
                <div className="border-t border-gray-100 dark:border-gray-800 pt-3">
                  <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-1">
                    <Wrench size={16} className="text-red-500" /> Технические проблемы
                  </h4>
                  <p>Если всё в порядке — пропускайте.</p>
                  <p>Если есть поломка — напишите текстом и приложите фото.</p>
                </div>
              </div>

              <MediaThumbnail 
                src="/photo/brief.png" 
                type="img" 
                onClick={() => openMedia('img', '/photo/brief.png')} 
              />
            </div>
          }
        />

        {/* ШАГ 3: Отправка */}
        <StepSection 
          number={3}
          title="Отправка"
          icon={<CheckCircle size={20} className="text-white" />}
          headerColor="bg-green-600"
          content={
            <div className="space-y-2">
              <p>Проверьте, всё ли верно заполнено.</p>
              <p>Нажмите кнопку <span className="font-bold text-green-600 dark:text-green-400">«Завершить рейс»</span>.</p>
            </div>
          }
        />

        {/* ШАГ 4: Подтверждение */}
        <StepSection 
          number={4}
          title="Подтверждение (Таймер)"
          icon={<Timer size={20} className="text-white" />}
          headerColor="bg-amber-500"
          content={
            <div className="space-y-3">
              <p>
                После нажатия начнется обратный отсчет <span className="font-bold">6 секунд</span>.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>Если ошиблись — нажмите <strong>«Отменить»</strong>.</li>
                <li>Если всё верно — просто ждите.</li>
              </ul>
              <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded text-sm text-center font-medium">
                Сообщение «Запрос на завершение отправлен» означает успех.
              </div>
              <MediaThumbnail 
                src="/photo/zav.png" 
                type="img" 
                onClick={() => openMedia('img', '/photo/zav.png')} 
              />
            </div>
          }
        />

        {/* ШАГ 5: Отмена */}
        <StepSection 
          number={5}
          title="Как отменить?"
          icon={<Undo size={20} className="text-white" />}
          headerColor="bg-red-500"
          content={
            <div className="space-y-3">
              <p className="font-bold text-red-600 dark:text-red-400">
                Таймер 1 час
              </p>
              <p className="text-sm">
                Если вы закрыли рейс по ошибке или забыли что-то добавить — у вас есть 1 час, чтобы вернуть всё назад.
              </p>
              <p className="text-sm">
                Нажмите кнопку <strong>«Отменить действие»</strong> рядом с закрытым рейсом.
              </p>
              <MediaThumbnail 
                src="/photo/Otmena.png" 
                type="img" 
                onClick={() => openMedia('img', '/photo/Otmena.png')} 
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
        <ZoomIn size={12} /> {type === 'video' ? 'Смотреть видео' : 'Увеличить'}
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

export default CloseTripPage;