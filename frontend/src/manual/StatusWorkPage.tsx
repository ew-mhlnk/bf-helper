import React, { useState } from 'react';
import { 
  CheckCircle, 
  AlertTriangle, 
  MapPin, 
  Wifi, 
  ArrowRight, 
  RefreshCw, 
  Camera, 
  FileText, 
  ZoomIn, 
  X, 
  Info 
} from 'lucide-react';
import Layout from '../components/Layout';

const StatusWorkPage: React.FC = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  return (
    <Layout title="Работа со статусом">
      <div className="space-y-6 pb-8">
        
        {/* Главное правило */}
        <section className="bg-green-50 dark:bg-green-900/10 rounded-2xl border-2 border-green-500/30 p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0 shadow-md">
              <CheckCircle size={22} />
            </div>
            <h2 className="text-xl font-bold text-green-900 dark:text-green-400">
              🟢 Главное правило работы со статусами
            </h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            Чтобы приложение правильно зафиксировало статус, всегда выполняйте одну простую последовательность:
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 bg-white dark:bg-[#1a1a1a] p-4 rounded-xl border border-gray-100 dark:border-gray-800 text-center sm:text-left">
            <div className="flex-1">
              <span className="text-xs text-gray-400 block uppercase font-mono mb-1">Шаг 1</span>
              <span className="font-bold text-gray-900 dark:text-white">Нажали кнопку статуса</span>
            </div>
            <ArrowRight size={20} className="text-gray-400 rotate-90 sm:rotate-0" />
            <div className="flex-1">
              <span className="text-xs text-gray-400 block uppercase font-mono mb-1">Шаг 2</span>
              <span className="font-bold text-gray-900 dark:text-white">Подтвердили («Да»)</span>
            </div>
            <ArrowRight size={20} className="text-gray-400 rotate-90 sm:rotate-0" />
            <div className="flex-1">
              <span className="text-xs text-green-500 block uppercase font-mono mb-1">Шаг 3</span>
              <span className="font-bold text-green-600 dark:text-green-400">Дождались зеленую галочку</span>
            </div>
          </div>
          
          <p className="text-xs text-center text-gray-500 mt-3">
            <span className="font-bold underline text-green-600 dark:text-green-400">Только зеленая галочка</span> на экране означает, что статус успешно отправлен.
          </p>

          <div className="mt-4">
            <ImageThumbnail 
              src="/photo/Status.png" 
              onClick={() => setEnlargedImage('/photo/Status.png')} 
            />
          </div>
        </section>

        {/* Геопозиция и связь */}
        <section className="bg-amber-50 dark:bg-amber-900/15 border border-amber-200 dark:border-amber-900/50 rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="flex items-start gap-3">
            <AlertTriangle size={24} className="text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-800 dark:text-amber-300 text-base leading-tight">
                ⚠️ Важные правила по геопозиции и связи
              </h3>
            </div>
          </div>
          
          <div className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
            <div className="flex gap-3">
              <MapPin size={18} className="text-red-500 shrink-0 mt-0.5" />
              <p>
                <strong>«Здесь и сейчас»:</strong> Отмечайте статусы строго на месте. Не нажимайте кнопки заранее (за 5 км до склада) или позже. Координаты должны совпадать с адресом склада.
              </p>
            </div>
            <div className="flex gap-3 pt-2 border-t border-amber-200/30">
              <Wifi size={18} className="text-blue-500 shrink-0 mt-0.5" />
              <p>
                <strong>Интернет:</strong> Проверяйте интернет заранее. При въезде в новую страну сразу настраивайте роуминг, перезапускайте сеть и проверяйте связь.
              </p>
            </div>
          </div>
        </section>

        {/* Этап 1. Загрузка */}
        <section className="bg-white dark:bg-[#1e1e1e] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
          <div className="bg-blue-600 p-4 text-white flex items-center gap-3">
            <span className="text-2xl">📦</span>
            <h2 className="text-lg font-bold">Этап 1. Загрузка</h2>
          </div>
          <div className="p-5 space-y-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Отмечайте статусы строго в следующие моменты:
            </p>
            <div className="space-y-4">
              <StatusStep 
                name="«Прибыл»" 
                desc="Нажимайте сразу, как только припарковались на территории склада (или у ворот)." 
              />
              <StatusStep 
                name="«В процессе»" 
                desc="Нажимайте в момент, когда вы открыли двери рефрижератора и началась погрузка." 
              />
              <StatusStep 
                name="«Завершено»" 
                desc={
                  <span>
                    Нажимайте, когда погрузка окончена, двери прицепа закрыты и вы забрали документы. <br/>
                    <strong className="text-red-600 dark:text-red-400 flex items-center gap-1 mt-1">
                      <Camera size={14} /> Сразу после этого сфотографируйте в приложении CMR. Прикрепляйте на этом этапе строго СМР на загрузку!
                    </strong>
                  </span>
                } 
              />
              <StatusStep 
                name="«Убыл»" 
                desc="Нажимайте непосредственно перед тем, как начать движение на выезд с территории." 
              />
            </div>
          </div>
        </section>

        {/* Этап 2. Разгрузка */}
        <section className="bg-white dark:bg-[#1e1e1e] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
          <div className="bg-indigo-600 p-4 text-white flex items-center gap-3">
            <span className="text-2xl">🚚</span>
            <h2 className="text-lg font-bold">Этап 2. Разгрузка</h2>
          </div>
          <div className="p-5 space-y-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Порядок действий точно такой же:
            </p>
            <div className="space-y-4">
              <StatusStep 
                name="«Прибыл»" 
                desc="Припарковались на месте разгрузки." 
              />
              <StatusStep 
                name="«В процессе»" 
                desc="Открыли двери рефрижератора, началась выгрузка паллет." 
              />
              <StatusStep 
                name="«Завершено»" 
                desc={
                  <span>
                    Выгрузка окончена, вы забрали документы. <br/>
                    <strong className="text-red-600 dark:text-red-400 flex items-center gap-1 mt-1">
                      <Camera size={14} /> Сразу после этого сфотографируйте в приложении CMR. Прикрепляйте именно СМР на разгрузку!
                    </strong>
                  </span>
                } 
              />
              <StatusStep 
                name="«Убыл»" 
                desc="Готовы уезжать со склада." 
              />
            </div>
          </div>
        </section>

        {/* Особый случай: Перецепка */}
        <section className="bg-purple-50 dark:bg-purple-900/10 rounded-2xl border border-purple-200 dark:border-purple-800 p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <RefreshCw className="text-purple-600 dark:text-purple-400" size={24} />
            <h2 className="text-lg font-bold text-purple-950 dark:text-purple-300">
              🔄 Особый случай: Перецепка
            </h2>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Если вы забираете полуприцеп, который уже был загружен другим водителем (например, в Берлине или Бельгии):
          </p>
          <div className="mt-3 p-3 bg-white dark:bg-[#1c1c1e] rounded-xl border border-purple-100 dark:border-purple-900/50 space-y-3">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              🛑 Все статусы в блоке <strong>«Загрузка»</strong> уже будут отмечены зеленым цветом до вас. <strong>Вам ничего там нажимать не нужно.</strong>
            </p>
            <div className="h-px bg-purple-100 dark:bg-purple-900/40"></div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Вы забираете прицеп, едете к месту выгрузки и отмечаете только свой этап — <strong>«Разгрузка»</strong>:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-sm text-gray-800 dark:text-gray-200 font-medium">
              <li>«Прибыл» <span className="font-normal text-xs text-gray-500">(на выгрузку)</span></li>
              <li>«В процессе» <span className="font-normal text-xs text-gray-500">(открыли двери)</span></li>
              <li>«Завершено» <span className="font-normal text-xs text-gray-500">(+ фото СМР на разгрузку)</span></li>
              <li>«Убыл»</li>
            </ul>
          </div>
        </section>

      </div>

      {/* Просмотр увеличенных изображений */}
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

/* Вспомогательные компоненты */
interface StatusStepProps {
  name: string;
  desc: React.ReactNode;
}
const StatusStep: React.FC<StatusStepProps> = ({ name, desc }) => (
  <div className="flex gap-3 items-start p-3 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800/50">
    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
    <div>
      <h4 className="font-bold text-gray-900 dark:text-white text-base">{name}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ImageThumbnail = ({ src, onClick }: { src: string; onClick: () => void }) => (
  <div
    className="relative group cursor-pointer rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm max-w-xs mx-auto"
    onClick={onClick}
  >
    <img src={src} alt="Статус" className="w-full object-cover max-h-48" onError={(e) => {
      // Плейсхолдер, если картинка Status.png еще отсутствует на сервере
      e.currentTarget.style.display = 'none';
    }} />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
      <div className="bg-black/50 text-white px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 backdrop-blur-sm">
        <ZoomIn size={12} /> Увеличить скриншот
      </div>
    </div>
  </div>
);

export default StatusWorkPage;