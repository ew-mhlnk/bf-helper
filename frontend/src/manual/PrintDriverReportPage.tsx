import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Share2, Printer, Smartphone, ArrowLeft, Trash2, AlertTriangle, ZoomIn, X, PlayCircle, Info } from 'lucide-react';
import Layout from '../components/Layout';

const PrintDriverReportPage: React.FC = () => {
  const [enlargedMedia, setEnlargedMedia] = useState<{ type: 'img' | 'video', src: string } | null>(null);

  const openMedia = (type: 'img' | 'video', src: string) => {
    setEnlargedMedia({ type, src });
  };

  return (
    <Layout title="Печать отчета">
      <div className="space-y-6 pb-8">

        {/* ПРЕДУПРЕЖДЕНИЕ */}
        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="shrink-0 text-amber-600 dark:text-amber-400 mt-1">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h3 className="font-bold text-amber-800 dark:text-amber-300 text-lg">
                Важно!
              </h3>
              <p className="text-amber-800/90 dark:text-amber-300/90 text-sm mt-1 mb-3 leading-relaxed">
                Напечатать отчет <strong>без установки приложения</strong> невозможно. Если вы этого не сделали, перейдите по ссылке ниже.
              </p>
              <Link 
                to="/manual/install-printer"
                className="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold rounded-lg transition-colors"
              >
                Инструкция по установке
              </Link>
            </div>
          </div>
        </div>

        {/* ШАГ ВВЕДЕНИЕ */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 flex gap-3">
           <Info size={24} className="text-blue-600 dark:text-blue-400 shrink-0" />
           <p className="text-sm text-blue-900 dark:text-blue-200">
             Чеки, которые вы добавляли в рейсе, формируют отчет автоматически. Больше не нужно писать от руки — просто напечатайте то, что внесли в приложение.
           </p>
        </div>

        {/* ШАГ 1: Генерация (Картинка Phase1 теперь здесь) */}
        <StepSection 
          number={1}
          title="Генерация отчета"
          icon={<FileText size={20} className="text-white" />}
          headerColor="bg-blue-600"
          content={
            <div className="space-y-3">
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>В приложении TruckDrivers выберите нужный рейс.</li>
                <li>Нажмите кнопку <strong>Отчета</strong>.</li>
                <li>Дождитесь генерации PDF (откроется предпросмотр).</li>
              </ol>
              <MediaThumbnail src="/photo/Phase1.png" type="img" onClick={() => openMedia('img', '/photo/Phase1.png')} />
            </div>
          }
        />

        {/* ШАГ 2: Поделиться */}
        <StepSection 
          number={2}
          title="Отправка на печать"
          icon={<Share2 size={20} className="text-white" />}
          headerColor="bg-indigo-600"
          content={
            <div className="space-y-3">
              <p>На экране с отчетом нажмите кнопку <strong>«Поделиться»</strong> (сверху справа).</p>
            </div>
          }
        />

        {/* ШАГ 3: Выбор приложения KYOCERA */}
        <StepSection 
          number={3}
          title="Выбор приложения KYOCERA"
          icon={<Smartphone size={20} className="text-white" />}
          headerColor="bg-purple-600"
          content={
            <div className="space-y-3">
              <p>В списке приложений пролистайте вправо, пока не найдете <strong>KYOCERA Print</strong>. Нажмите на него.</p>
              <MediaThumbnail src="/photo/Phase2.png" type="img" onClick={() => openMedia('img', '/photo/Phase2.png')} />
            </div>
          }
        />

        {/* ШАГ 4: Печать */}
        <StepSection 
          number={4}
          title="Выбор принтера"
          icon={<Printer size={20} className="text-white" />}
          headerColor="bg-green-600"
          content={
            <div className="space-y-3">
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Выберите нужный принтер (Бухгалтерия или Техотдел).</li>
                <li>Нажмите большую кнопку <strong>«Печать»</strong>.</li>
              </ul>
              <MediaThumbnail src="/photo/Phase3.png" type="img" onClick={() => openMedia('img', '/photo/Phase3.png')} />
            </div>
          }
        />

        {/* ШАГ 5: Завершение */}
        <StepSection 
          number={5}
          title="Завершение"
          icon={<ArrowLeft size={20} className="text-white" />}
          headerColor="bg-gray-600"
          content={
            <div className="space-y-3">
              <p>Появится надпись «Режим ожидания».</p>
              <p>Когда документы напечатаются, нажимайте треугольник <strong>«Назад»</strong> на телефоне, пока не вернетесь в приложение TruckDrivers.</p>
              <MediaThumbnail src="/photo/Phase4.png" type="img" onClick={() => openMedia('img', '/photo/Phase4.png')} />
            </div>
          }
        />

        {/* ШАГ 6: Очистка (Видео) */}
        <StepSection 
          number={6}
          title="Очистка (Рекомендуем)"
          icon={<Trash2 size={20} className="text-white" />}
          headerColor="bg-red-500"
          content={
            <div className="space-y-3">
              <p>Рекомендуем закрыть лишние окна: нажмите на «квадратик» (список приложений) и очистите всё («мусорка» или «закрыть всё»).</p>
              <MediaThumbnail src="/photo/ClearAll.mp4" type="video" onClick={() => openMedia('video', '/photo/ClearAll.mp4')} />
            </div>
          }
        />

        {/* ПОЛНОЕ ВИДЕО */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
           <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 px-1">Полная видео-инструкция:</h3>
           <MediaThumbnail src="/photo/Printing.mp4" type="video" onClick={() => openMedia('video', '/photo/Printing.mp4')} />
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

export default PrintDriverReportPage;