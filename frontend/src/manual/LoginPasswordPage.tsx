import React, { useState } from 'react';
import { QrCode, ScanLine, Keyboard, MessageCircle, AlertCircle, ZoomIn, X } from 'lucide-react';
import Layout from '../components/Layout';

const LoginPasswordPage: React.FC = () => {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  return (
    <Layout title="Вход в аккаунт">
      <div className="space-y-6 pb-8">

        {/* Заголовок секции */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white px-1 mb-4">
            Три способа входа:
          </h2>
          
          <div className="space-y-3">
            {/* Способ 1 */}
            <MethodCard 
              number={1}
              icon={<QrCode size={24} className="text-purple-600 dark:text-purple-400" />}
              bgColor="bg-purple-50 dark:bg-purple-900/20"
              borderColor="border-purple-100 dark:border-purple-800"
              text={
                <span>
                  Наведите камеру на <span className="font-bold text-gray-900 dark:text-white">QR-код путевого листа</span>.
                </span>
              }
            />

            {/* Способ 2 */}
            <MethodCard 
              number={2}
              icon={<ScanLine size={24} className="text-blue-600 dark:text-blue-400" />}
              bgColor="bg-blue-50 dark:bg-blue-900/20"
              borderColor="border-blue-100 dark:border-blue-800"
              text={
                <span>
                   Наведите камеру на <span className="font-bold text-gray-900 dark:text-white">QR-код пропуска</span>.
                </span>
              }
            />

            {/* Способ 3 */}
            <MethodCard 
              number={3}
              icon={<Keyboard size={24} className="text-orange-600 dark:text-orange-400" />}
              bgColor="bg-orange-50 dark:bg-orange-900/20"
              borderColor="border-orange-100 dark:border-orange-800"
              text={
                <span>
                  Введите <span className="font-bold text-gray-900 dark:text-white">логин и пароль</span> вручную.
                </span>
              }
            />
          </div>
        </div>

        {/* Блок с фото */}
        <div className="mt-4">
          <p className="text-center text-sm text-gray-500 mb-2 flex items-center justify-center gap-2">
            <ZoomIn size={16} /> Нажмите на фото для увеличения
          </p>
          <div 
            className="relative group cursor-pointer rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-md transition-transform active:scale-[0.98]"
            onClick={() => setIsImageEnlarged(true)}
          >
            <img
              src="/photo/2.png"
              alt="Способы входа"
              className="w-full object-cover"
            />
            {/* Эффект затемнения при наведении */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
        </div>

        {/* Блок "Нужна помощь" (Контакты) */}
        <div className="p-5 rounded-2xl border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800">
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 bg-red-100 dark:bg-red-900/40 rounded-full text-red-600 dark:text-red-400">
              <AlertCircle size={24} />
            </div>
            <div>
              <h3 className="font-bold text-red-700 dark:text-red-300 text-lg">
                Не получается войти?
              </h3>
              <p className="text-sm text-red-600/80 dark:text-red-400/80 mt-1">
                Если QR-коды не считываются или вы забыли данные для входа.
              </p>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-red-200 dark:border-red-800/50">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Напишите или позвоните Евгении:</p>
            <a 
              href="https://wa.me/375292468990"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold transition-colors shadow-sm active:scale-[0.98]"
            >
              <MessageCircle size={20} />
              WhatsApp: +375 29 246-89-90
            </a>
          </div>
        </div>

      </div>

      {/* МОДАЛЬНОЕ ОКНО */}
      {isImageEnlarged && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsImageEnlarged(false)}
        >
          <div className="relative max-w-full max-h-full">
            <img
              src="/photo/2.png"
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

// Компонент карточки способа
interface MethodProps {
  number: number;
  icon: React.ReactNode;
  text: React.ReactNode;
  bgColor: string;
  borderColor: string;
}

const MethodCard: React.FC<MethodProps> = ({ number, icon, text, bgColor, borderColor }) => (
  <div className={`flex items-center gap-4 p-4 rounded-xl border shadow-sm ${bgColor} ${borderColor}`}>
    {/* Номер */}
    <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white font-bold text-sm shadow-sm">
      {number}
    </div>
    
    {/* Иконка */}
    <div className="shrink-0">
      {icon}
    </div>

    {/* Текст */}
    <div className="text-gray-700 dark:text-gray-300 text-base leading-snug">
      {text}
    </div>
  </div>
);

export default LoginPasswordPage;