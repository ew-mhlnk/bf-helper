import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CloseTripPage: React.FC = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  return (
    <div className="bg-[#141414] min-h-screen text-white p-4 pb-32">

      {/* Заголовок */}
      <h1 className="text-3xl font-bold text-center mb-6 mt-4">
        Завершение рейса
      </h1>

      {/* Начало */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700">
        <div className="space-y-5 text-lg">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
              1
            </div>
            <p>Зайдите в раздел <strong>«Рейсы»</strong></p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
              2
            </div>
            <p>Откройте текущий рейс → нажмите кнопку <strong>«Завершить»</strong></p>
          </div>
        </div>

        <img
          src="/photo/16.png"
          alt="Кнопка завершения рейса"
          className="w-full max-w-md mx-auto rounded-xl shadow-2xl border-2 border-gray-600 cursor-pointer hover:border-blue-500 transition-all mt-6"
          onClick={() => setEnlargedImage('/photo/16.png')}
        />
      </div>

      {/* Форма заполнения */}
      <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 rounded-2xl p-6 mb-8 border-2 border-red-600">
        <h2 className="text-xl font-bold text-red-300 text-center mb-5">
          Заполняйте форму строго сверху вниз, ничего не пропуская
        </h2>

        <div className="space-y-6 text-lg">
          {/* Показания приборов */}
          <div className="bg-gray-800/60 rounded-xl p-5 border border-gray-600">
            <p className="font-bold text-blue-300 mb-2">Показания приборов</p>
            <p>• Внесите цифры</p>
            <p className="text-red-400 font-semibold mt-2">
              • Обязательно прикрепите фото одометра и рефрижератора (Без этих фото закрыть рейс нельзя)
            </p>
          </div>

          {/* Остаток топлива */}
          <div className="bg-gray-800/60 rounded-xl p-5 border border-gray-600">
            <p className="font-bold text-blue-300 mb-2">Остаток топлива</p>
            <p>• Укажите остатки в тягаче и прицепе (поля обязательные)</p>
          </div>

          {/* Замечания */}
          <div className="bg-gray-800/60 rounded-xl p-5 border border-gray-600">
            <p className="font-bold text-blue-300 mb-2">Замечания по техсостоянию</p>
            <p>• Если есть проблемы — напишите их здесь</p>
          </div>
        </div>

        <p className="text-center mt-6 font-bold text-xl text-green-300">
          Всё заполнено и фото на месте → нажмите «Завершить рейс»
        </p>
      </div>

      {/* 6 секунд на отмену */}
      <div className="bg-yellow-900/40 border-2 border-yellow-600 rounded-2xl p-6 mb-8 text-center">
        <p className="text-xl font-bold text-yellow-300">
          После нажатия будет 6 секунд на отмену, если вдруг ошиблись
        </p>
      </div>

      {/* Готово */}
      <div className="bg-gradient-to-r from-green-900/60 to-emerald-900/60 rounded-2xl p-8 text-center border-4 border-green-500">
        <p className="text-3xl font-bold text-green-300">
          Готово! Рейс закрыт
        </p>
      </div>

      {/* Кнопка назад — фиксированная */}
      <Link
        to="/manual"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95 text-white font-bold text-lg py-5 rounded-3xl text-center shadow-2xl transition-all duration-200 z-10"
      >
        ← Вернуться к инструкциям
      </Link>

      {/* Увеличенное изображение */}
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-6"
          onClick={() => setEnlargedImage(null)}
        >
          <img
            src={enlargedImage}
            alt="Увеличенное фото"
            className="max-w-full max-h-full rounded-xl shadow-2xl"
          />
          <button
            onClick={() => setEnlargedImage(null)}
            className="absolute top-5 right-5 text-white text-5xl opacity-80 hover:opacity-100"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default CloseTripPage;