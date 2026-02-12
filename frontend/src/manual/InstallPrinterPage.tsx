import React, { useState } from 'react';
import { Wifi, Download, SearchX, Settings, Printer, PlusCircle, Save, ZoomIn, X, PlayCircle, Building } from 'lucide-react';
import Layout from '../components/Layout';

const InstallPrinterPage: React.FC = () => {
  const [enlargedMedia, setEnlargedMedia] = useState<{ type: 'img' | 'video', src: string } | null>(null);

  const openMedia = (type: 'img' | 'video', src: string) => {
    setEnlargedMedia({ type, src });
  };

  return (
    <Layout title="Установка принтера">
      <div className="space-y-6 pb-8">

        {/* ШАГ 1: Офис */}
        <StepSection 
          number={1}
          title="Приходим в офис"
          icon={<Building size={20} className="text-white" />}
          headerColor="bg-gray-600"
          content={
            <p>Настройка производится только в офисе, так как нужен доступ к локальной сети.</p>
          }
        />

        {/* ШАГ 2: WiFi (ВАЖНО) */}
        <StepSection 
          number={2}
          title="Подключение WiFi"
          icon={<Wifi size={20} className="text-white" />}
          headerColor="bg-red-600"
          content={
            <div className="space-y-3">
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-lg">
                <p className="font-bold text-red-700 dark:text-red-400 text-sm">
                  ОЧЕНЬ ВАЖНО:
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Подключитесь к сети <span className="font-bold">BF_GUEST</span>. Без этого принтер не найдется!
                </p>
              </div>
              <MediaThumbnail src="/photo/WifICheck.jpg" type="img" onClick={() => openMedia('img', '/photo/WifICheck.jpg')} />
            </div>
          }
        />

        {/* ШАГ 3: Скачивание */}
        <StepSection 
          number={3}
          title="Скачивание приложения"
          icon={<Download size={20} className="text-white" />}
          headerColor="bg-blue-600"
          content={
            <div className="space-y-3">
              <p>Скачайте приложение <strong>KYOCERA Mobile Print</strong>.</p>
              <a 
                href="https://play.google.com/store/apps/details?id=com.kyocera.kyoprint&hl=ru" 
                target="_blank" 
                rel="noreferrer"
                className="block w-full py-3 bg-green-600 hover:bg-green-700 text-white text-center rounded-lg font-bold transition-colors"
              >
                Скачать в Google Play
              </a>
            </div>
          }
        />

        {/* ШАГ 4: Игнорируем автопоиск */}
        <StepSection 
          number={4}
          title="Пропуск автопоиска"
          icon={<SearchX size={20} className="text-white" />}
          headerColor="bg-orange-500"
          content={
            <div className="space-y-3">
              <p>Нажмите «Выберите устройство». Начнется автопоиск — он нам <span className="font-bold text-red-500">НЕ</span> нужен.</p>
              <p className="text-sm text-gray-500">«Тыкните» в любое свободное место экрана, чтобы закрыть поиск.</p>
              <div className="grid grid-cols-2 gap-2">
                <MediaThumbnail src="/photo/Vybor.png" type="img" onClick={() => openMedia('img', '/photo/Vybor.png')} />
                <MediaThumbnail src="/photo/Tyk.png" type="img" onClick={() => openMedia('img', '/photo/Tyk.png')} />
              </div>
            </div>
          }
        />

        {/* ШАГ 5: Ручной режим */}
        <StepSection 
          number={5}
          title="Ручной режим"
          icon={<Settings size={20} className="text-white" />}
          headerColor="bg-indigo-600"
          content={
            <div className="space-y-2">
              <p>Нажмите на кнопку <strong>«Вручную»</strong> (Сверху).</p>
              <MediaThumbnail src="/photo/Manual.png" type="img" onClick={() => openMedia('img', '/photo/Manual.png')} />
            </div>
          }
        />

        {/* ШАГ 6: Принтер Техотдела */}
        <StepSection 
          number={6}
          title="Принтер 1: Техотдел"
          icon={<Printer size={20} className="text-white" />}
          headerColor="bg-teal-600"
          content={
            <div className="space-y-3">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg font-mono text-center text-lg font-bold border border-gray-300 dark:border-gray-700 select-all">
                192.168.93.24
              </div>
              <p className="text-sm">Введите этот IP и нажмите <strong>Подключить</strong>.</p>
              <div className="grid grid-cols-2 gap-2">
                 <MediaThumbnail src="/photo/AddPrint-1.png" type="img" onClick={() => openMedia('img', '/photo/AddPrint-1.png')} />
                 <MediaThumbnail src="/photo/PodklPrint-1.png" type="img" onClick={() => openMedia('img', '/photo/PodklPrint-1.png')} />
              </div>
            </div>
          }
        />

        {/* ШАГ 7: Принтер Бухгалтерии */}
        <StepSection 
          number={7}
          title="Принтер 2: Бухгалтерия"
          icon={<Printer size={20} className="text-white" />}
          headerColor="bg-purple-600"
          content={
            <div className="space-y-3">
              <p>Нажмите на название принтера сверху еще раз, снова выберите «Вручную».</p>
              <MediaThumbnail src="/photo/eshoraz.png" type="img" onClick={() => openMedia('img', '/photo/eshoraz.png')} />
              
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg font-mono text-center text-lg font-bold border border-gray-300 dark:border-gray-700 select-all mt-2">
                192.168.93.23
              </div>
              <p className="text-sm">Введите этот IP и нажмите <strong>Подключить</strong>.</p>
              
              <div className="grid grid-cols-2 gap-2">
                 <MediaThumbnail src="/photo/AddPrint-2.png" type="img" onClick={() => openMedia('img', '/photo/AddPrint-2.png')} />
                 <MediaThumbnail src="/photo/PodklPrint-2.png" type="img" onClick={() => openMedia('img', '/photo/PodklPrint-2.png')} />
              </div>
            </div>
          }
        />

        {/* ШАГ 8: Итог установки */}
        <StepSection 
          number={8}
          title="Список принтеров"
          icon={<PlusCircle size={20} className="text-white" />}
          headerColor="bg-green-600"
          content={
            <div className="space-y-2">
              <p>В списке должно быть два устройства:</p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 p-2 rounded-lg">
                <li><strong>Ecosys M4125idn</strong> (Бухгалтерия)</li>
                <li><strong>TASKalfa 221</strong> (Техотдел)</li>
              </ul>
              <MediaThumbnail src="/photo/AllPrinters.png" type="img" onClick={() => openMedia('img', '/photo/AllPrinters.png')} />
            </div>
          }
        />

        {/* ШАГ 9-10: Настройка отчета */}
        <StepSection 
          number={9}
          title="Настройка печати"
          icon={<Save size={20} className="text-white" />}
          headerColor="bg-pink-600"
          content={
            <div className="space-y-3">
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>Нажмите на <strong>шестеренку</strong> (настройки).</li>
                <li>Выберите <strong>«Двусторонняя печать»</strong>.</li>
                <li>Нажмите «Сохранить» → Рабочий процесс назовите <strong>«Отчет»</strong>.</li>
              </ol>
              <div className="grid grid-cols-2 gap-2">
                 <MediaThumbnail src="/photo/OtchetSettings.png" type="img" onClick={() => openMedia('img', '/photo/OtchetSettings.png')} />
                 <MediaThumbnail src="/photo/OtchetSave.png" type="img" onClick={() => openMedia('img', '/photo/OtchetSave.png')} />
              </div>
            </div>
          }
        />

        {/* ВИДЕО ИНСТРУКЦИИ */}
        <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-800">
           <h3 className="font-bold text-lg text-gray-900 dark:text-white px-1">Видео-инструкции:</h3>
           
           <div className="space-y-2">
             <p className="text-sm font-bold text-gray-500">1. Добавление принтеров</p>
             <MediaThumbnail src="/photo/AddPrinters.mp4" type="video" onClick={() => openMedia('video', '/photo/AddPrinters.mp4')} />
           </div>

           <div className="space-y-2">
             <p className="text-sm font-bold text-gray-500">2. Настройка профиля "Отчет"</p>
             <MediaThumbnail src="/photo/OtchetSettingsVideo.mp4" type="video" onClick={() => openMedia('video', '/photo/OtchetSettingsVideo.mp4')} />
           </div>
        </div>

      </div>

      {/* МОДАЛКА */}
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

export default InstallPrinterPage;