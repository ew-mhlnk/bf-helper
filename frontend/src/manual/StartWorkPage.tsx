import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StartWorkPage: React.FC = () => {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  return (
    <div className="bg-[#141414] min-h-screen text-white p-4 pb-24">
      {/* Заголовок */}
      <h1 className="text-2xl font-bold text-center mb-6 mt-4">
        Проверка аккаунта перед выездом
      </h1>

      {/* Важное предупреждение */}
      <div className="bg-red-900/30 border border-red-600 rounded-xl p-5 mb-6">
        <p className="text-lg font-bold text-red-400 mb-2">
          Обязательно убедитесь, что в приложении ваш аккаунт!
        </p>
        <p className="text-md leading-relaxed">
          Особенно важно, если машина <span className="font-semibold">сменная</span> или за вами{' '}
          <span className="font-semibold">не закреплён тягач</span>.
        </p>
      </div>

      {/* Критически важное */}
      <div className="bg-orange-900/30 border border-orange-600 rounded-xl p-5 mb-6">
        <p className="text-lg font-bold text-orange-300">
          Перед рейсом всегда проверяйте аккаунт
        </p>
        <p className="mt-2 leading-relaxed">
          В каждом тягаче стоит телефон с приложением.{' '}
          <span className="font-bold text-white">Не выезжайте</span>, пока не увидите свои данные!
        </p>
      </div>

      {/* Как проверить — шаги */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700">
        <h2 className="text-xl font-bold mb-5 text-center text-blue-300">
          Как проверить аккаунт:
        </h2>

        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
              1
            </div>
            <p className="pt-2">Нажмите три полоски ☰ в правом верхнем углу</p>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
              2
            </div>
            <p className="pt-2">Посмотрите имя и фото в открывшемся меню</p>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center font-bold text-lg">
              3
            </div>
            <p className="pt-2">
              Если это <span className="font-bold text-green-400">вы</span> — тапните в пустое место и работайте дальше
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold text-lg">
              4
            </div>
            <p className="pt-2">
              Если <span className="font-bold text-red-400">чужой аккаунт</span> — нажмите «Выйти» и войдите под своими данными
            </p>
          </div>
        </div>
      </div>

      {/* Изображение с увеличением */}
      <div className="flex flex-col items-center mb-8">
        <p className="text-gray-400 mb-3 text-center">Нажмите на фото для увеличения</p>
        <img
          src="/photo/1.png"
          alt="Проверка аккаунта в приложении"
          className="w-72 max-w-full h-auto rounded-xl shadow-2xl border-2 border-gray-600 cursor-pointer transition-transform hover:scale-105"
          onClick={() => setIsImageEnlarged(true)}
        />
      </div>

      {/* Успешное завершение */}
      <div className="text-center py-6 bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl border border-green-600">
        <p className="text-2xl font-bold text-green-300">
          Готово! Теперь можно ехать!
        </p>
      </div>

      {/* Кнопка назад */}
      <Link
        to="/manual"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white font-bold py-4 px-8 rounded-2xl text-center shadow-lg transition-all duration-200"
      >
        ← Вернуться к инструкциям
      </Link>

      {/* Модальное окно для фото */}
      {isImageEnlarged && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-6"
          onClick={() => setIsImageEnlarged(false)}
        >
          <img
            src="/photo/1.png"
            alt="Увеличенное изображение"
            className="max-w-full max-h-full rounded-xl shadow-2xl"
          />
          <button
            className="absolute top-6 right-6 text-white text-4xl font-light opacity-80 hover:opacity-100"
            onClick={() => setIsImageEnlarged(false)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default StartWorkPage;