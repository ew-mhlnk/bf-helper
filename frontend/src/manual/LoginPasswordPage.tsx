import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPasswordPage: React.FC = () => {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  return (
    <div className="bg-[#141414] min-h-screen text-white p-4 pb-24">
      {/* Заголовок */}
      <h1 className="text-2xl font-bold text-center mb-8 mt-4 leading-tight">
        Как войти в аккаунт
      </h1>

      {/* Три способа входа */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700">
        <h2 className="text-xl font-bold text-center mb-6 text-blue-300">
          Три способа входа:
        </h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
              1
            </div>
            <p className="pt-2 text-lg">
              Наведите камеру приложения на <strong>QR-код путевого листа</strong>
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
              2
            </div>
            <p className="pt-2 text-lg">
              Наведите камеру на <strong>QR-код пропуска</strong>
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-600 to-red-600 rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
              3
            </div>
            <p className="pt-2 text-lg">
              Введите <strong>логин и пароль</strong> вручную в соответствующие поля
            </p>
          </div>
        </div>
      </div>

      {/* Изображение */}
      <div className="flex flex-col items-center mb-8">
        <p className="text-gray-400 mb-4 text-center">Нажмите на фото для увеличения</p>
        <img
          src="/photo/2.png"
          alt="Способы входа в приложение"
          className="w-80 max-w-full h-auto rounded-2xl shadow-2xl border-2 border-gray-600 cursor-pointer transition-all duration-300 hover:scale-105 hover:border-blue-500"
          onClick={() => setIsImageEnlarged(true)}
        />
      </div>

      {/* Важное предупреждение */}
      <div className="bg-red-900/40 border-2 border-red-500 rounded-2xl p-6 mb-8">
        <p className="text-lg font-bold text-red-300 mb-3 text-center">
          Если QR-коды не считываются или вы не знаете логин/пароль
        </p>
        <p className="text-center">
          <span className="block text-sm opacity-90 mb-2">Обратитесь к Евгении:</span>
          <a
            href="tel:+375292468990"
            className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors underline decoration-2 underline-offset-4"
          >
            +375 29 246-89-90
          </a>
        </p>
      </div>

      {/* Кнопка назад — фиксированная внизу */}
      <Link
        to="/manual"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 active:scale-95 text-white font-bold text-lg py-5 px-8 rounded-3xl text-center shadow-2xl transition-all duration-200"
      >
        ← Вернуться к инструкциям
      </Link>

      {/* Увеличенное изображение */}
      {isImageEnlarged && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-6"
          onClick={() => setIsImageEnlarged(false)}
        >
          <img
            src="/photo/2.png"
            alt="Увеличенное изображение"
            className="max-w-full max-h-full rounded-2xl shadow-2xl"
          />
          <button
            onClick={() => setIsImageEnlarged(false)}
            className="absolute top-6 right-6 text-white text-5xl font-light opacity-80 hover:opacity-100 transition"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPasswordPage;