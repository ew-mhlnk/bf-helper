import React, { useState } from 'react';
import { Menu, User, CheckCircle, LogOut, AlertTriangle, X, ZoomIn } from 'lucide-react';
import Layout from '../components/Layout';

const StartWorkPage: React.FC = () => {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  return (
    <Layout title="Проверка аккаунта">
      <div className="space-y-6 pb-8">
        
        {/* БЛОК 1: Критическое предупреждение */}
        {/* Используем стиль "Callout" - блок внимания */}
        <div className="p-4 rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 flex gap-3 items-start">
          <div className="text-red-600 dark:text-red-400 shrink-0 mt-1">
            <AlertTriangle size={24} />
          </div>
          <div>
            <h3 className="font-bold text-red-700 dark:text-red-400 text-lg">
              Обязательно проверьте аккаунт!
            </h3>
            <p className="text-red-600/90 dark:text-red-300/90 text-sm mt-1 leading-relaxed">
              В каждом тягаче стоит телефон. Не выезжайте, если в приложении открыт чужой профиль.
            </p>
          </div>
        </div>

        {/* БЛОК 2: Инструкция по шагам */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white px-1">
            Как проверить:
          </h2>

          {/* Шаг 1 */}
          <StepCard 
            number={1} 
            icon={<Menu className="text-blue-500" />}
            text={<span>Нажмите <span className="font-bold">три полоски ☰</span> в правом верхнем углу.</span>}
          />

          {/* Шаг 2 */}
          <StepCard 
            number={2} 
            icon={<User className="text-blue-500" />}
            text="Посмотрите имя и фото в открывшемся меню."
          />

          {/* Шаг 3 (Вариант ОК) */}
          <StepCard 
            number={3} 
            icon={<CheckCircle className="text-green-500" />}
            borderColor="border-green-200 dark:border-green-900"
            bgColor="bg-green-50/50 dark:bg-green-900/10"
            text={<span>Если это <span className="font-bold text-green-600 dark:text-green-400">вы</span> — нажмите на экран и работайте.</span>}
          />

          {/* Шаг 4 (Вариант Ошибка) */}
          <StepCard 
            number={4} 
            icon={<LogOut className="text-red-500" />}
            borderColor="border-red-200 dark:border-red-900"
            bgColor="bg-red-50/50 dark:bg-red-900/10"
            text={<span>Если <span className="font-bold text-red-600 dark:text-red-400">чужой аккаунт</span> — нажмите «Выйти» и войдите под своими данными.</span>}
          />
        </div>

        {/* БЛОК 3: Фото-подсказка */}
        <div className="mt-6">
          <p className="text-center text-sm text-gray-500 mb-2 flex items-center justify-center gap-2">
            <ZoomIn size={16} /> Нажмите на фото для увеличения
          </p>
          <div 
            className="relative group cursor-pointer rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-md"
            onClick={() => setIsImageEnlarged(true)}
          >
            <img
              src="/photo/1.png"
              alt="Скриншот меню"
              className="w-full object-cover"
            />
            {/* Оверлей при наведении */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
               {/* Можно добавить иконку лупы по центру, если хочется */}
            </div>
          </div>
        </div>

        {/* БЛОК 4: Итог */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg text-center text-white">
          <CheckCircle size={48} className="mx-auto mb-2 opacity-90" />
          <h3 className="text-xl font-bold">Готово!</h3>
          <p className="opacity-90">Теперь можно ехать.</p>
        </div>

      </div>

      {/* МОДАЛЬНОЕ ОКНО ДЛЯ ФОТО */}
      {isImageEnlarged && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsImageEnlarged(false)}
        >
          <div className="relative max-w-full max-h-full">
            <img
              src="/photo/1.png"
              alt="Увеличенное изображение"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            />
            <button
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-gray-800/50 rounded-full"
              onClick={() => setIsImageEnlarged(false)}
            >
              <X size={32} />
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

// Вспомогательный компонент для карточки шага
interface StepProps {
  number: number;
  text: React.ReactNode;
  icon: React.ReactNode;
  borderColor?: string;
  bgColor?: string;
}

const StepCard: React.FC<StepProps> = ({ 
  number, 
  text, 
  icon, 
  borderColor = "border-gray-100 dark:border-gray-800",
  bgColor = "bg-white dark:bg-[#1e1e1e]" 
}) => (
  <div className={`flex items-center gap-4 p-4 rounded-xl border shadow-sm ${borderColor} ${bgColor}`}>
    {/* Номер шага */}
    <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold text-lg shadow-inner">
      {number}
    </div>
    
    {/* Текст и иконка */}
    <div className="flex-1">
      <div className="flex items-start justify-between gap-2">
        <p className="text-gray-700 dark:text-gray-200 text-base leading-snug">
          {text}
        </p>
        <div className="shrink-0 mt-1 opacity-80">
          {icon}
        </div>
      </div>
    </div>
  </div>
);

export default StartWorkPage;