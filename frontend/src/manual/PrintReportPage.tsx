import React, { useState } from 'react';
import { Printer, Power, Bluetooth, Smartphone, FileText, ZoomIn, X, PlayCircle, AlertTriangle, MessageCircle } from 'lucide-react';
import Layout from '../components/Layout';

const PrintReportPage: React.FC = () => {
  const [enlargedMedia, setEnlargedMedia] = useState<{ type: 'img' | 'video', src: string } | null>(null);

  return (
    <Layout title="Печать температурного отчета">
      <div className="space-y-6 pb-8">

        {/* --- ВАЖНОЕ СООБЩЕНИЕ --- */}
        <div className="p-4 rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <div className="shrink-0 text-red-600 dark:text-red-400 mt-1">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h3 className="font-bold text-red-700 dark:text-red-300 text-lg">
                ВАЖНО
              </h3>
              <p className="text-red-600/90 dark:text-red-300/90 text-sm mt-1 leading-relaxed">
                Перед печатью отчета необходимо <span className="font-bold underline">согласовать его с Солодухо Викторией</span>.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/375447963407"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold transition-colors shadow-md active:scale-[0.98]"
          >
            <MessageCircle size={20} />
            Написать в WhatsApp
          </a>
        </div>

        {/* ШАГ 1: Включение */}
        <StepSection 
          number={1}
          title="Включение"
          icon={<Power size={20} className="text-white" />}
          headerColor="bg-green-600"
          content={
            <div className="space-y-3">
              <p>
                Включаем принтер: зажмите кнопку питания, пока она не загорит <span className="font-bold text-green-600 dark:text-green-400">зеленым</span> светом.
              </p>
              <MediaThumbnail 
                src="/photo/vkl.jpg" 
                type="img"
                onClick={() => setEnlargedMedia({ type: 'img', src: '/photo/vkl.jpg' })} 
              />
            </div>
          }
        />

        {/* ШАГ 2: Проверка Bluetooth */}
        <StepSection 
          number={2}
          title="Проверка связи"
          icon={<Bluetooth size={20} className="text-white" />}
          headerColor="bg-blue-600"
          content={
            <div className="space-y-3">
              <p>
                Зайдите в настройки Bluetooth телефона. Проверьте, есть ли в списке устройств:
                <br/>
                <span className="font-bold">MRT-II</span> или <span className="font-bold">Printer_147F</span>.
              </p>
              <MediaThumbnail 
                src="/photo/ustr.jpg" 
                type="img"
                onClick={() => setEnlargedMedia({ type: 'img', src: '/photo/ustr.jpg' })} 
              />
            </div>
          }
        />

        {/* ШАГ 3: Подключение (Видео) */}
        <StepSection 
          number={3}
          title="Сопряжение"
          icon={<Smartphone size={20} className="text-white" />}
          headerColor="bg-indigo-600"
          content={
            <div className="space-y-3">
              <p>
                Если подключения нет, нажмите на название принтера.
                <br/>
                Пароль для сопряжения: <span className="font-mono font-bold bg-gray-100 dark:bg-gray-800 px-1 rounded">0000</span>
              </p>
              <MediaThumbnail 
                src="/photo/bluetooth.mp4" 
                type="video"
                onClick={() => setEnlargedMedia({ type: 'video', src: '/photo/bluetooth.mp4' })} 
              />
            </div>
          }
        />

        {/* ШАГ 4: Печать (Видео) */}
        <StepSection 
          number={4}
          title="Печать в приложении"
          icon={<FileText size={20} className="text-white" />}
          headerColor="bg-orange-500"
          content={
            <div className="space-y-3">
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>Заходим в «Рейсы» → Выбираем нужный рейс</li>
                <li>Нажимаем на нужный <span className="font-bold">ЗАКАЗ</span></li>
                <li>Нажимаем <span className="font-bold">«Отчеты»</span></li>
                <li>Выбираем <span className="font-bold">«Температурный отчет»</span></li>
                <li>Нажимаем <span className="font-bold">«Печать»</span></li>
              </ol>
              <MediaThumbnail 
                src="/photo/reis.mp4" 
                type="video"
                onClick={() => setEnlargedMedia({ type: 'video', src: '/photo/reis.mp4' })} 
              />
            </div>
          }
        />

        {/* ШАГ 5: Выключение */}
        <StepSection 
          number={5}
          title="Выключение"
          icon={<Power size={20} className="text-white" />}
          headerColor="bg-red-600"
          content={
            <div className="space-y-3">
              <p>
                Выключаем принтер: зажмите кнопку питания, пока лампочка не потухнет.
              </p>
            </div>
          }
        />

        {/* ФИНАЛ */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-700 to-gray-800 shadow-lg text-white text-center">
          <Printer size={48} className="mx-auto mb-3 opacity-90" />
          <h3 className="text-xl font-bold">Готово!</h3>
          <p className="opacity-90">Не забудьте поставить принтер на зарядку.</p>
        </div>

      </div>

      {/* МОДАЛЬНОЕ ОКНО */}
      {enlargedMedia && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setEnlargedMedia(null)}
        >
          <div className="relative w-full max-w-4xl flex flex-col items-center">
            
            {enlargedMedia.type === 'img' ? (
              <img
                src={enlargedMedia.src}
                alt="Просмотр"
                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
              />
            ) : (
              <video 
                src={enlargedMedia.src}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Чтобы клик по видео не закрывал модалку
              />
            )}

            <button
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-gray-800/50 rounded-full transition-colors"
              onClick={() => setEnlargedMedia(null)}
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

interface MediaProps { 
  src: string; 
  type: 'img' | 'video'; 
  onClick: () => void; 
}

const MediaThumbnail: React.FC<MediaProps> = ({ src, type, onClick }) => (
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

export default PrintReportPage;