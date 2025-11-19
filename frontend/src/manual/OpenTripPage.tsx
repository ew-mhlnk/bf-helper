import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OpenTripPage: React.FC = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const images = [
    '/photo/3.png',
    '/photo/4.png',
    '/photo/5.png',
    '/photo/6.png',
    '/photo/7.png',
    '/photo/8.png',
    '/photo/9.png',
  ];

  return (
    <div className="bg-[#141414] min-h-screen text-white p-4 pb-32">
      {/* Заголовок */}
      <h1 className="text-3xl font-bold text-center mb-6 mt-4">
        Как открыть рейс
      </h1>

      {/* Важная заметка */}
      <div className="bg-amber-900/40 border border-amber-600 rounded-2xl p-5 mb-8 text-center">
        <p className="text-lg font-bold text-amber-300">
          Рейс открывается только на базе или при перецепке
        </p>
      </div>

      {/* Шаги */}
      <div className="space-y-8">

        {/* Начало */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">1</div>
            <div>
              <p className="text-lg">Откройте раздел <strong>«Рейсы»</strong> в главном меню</p>
              <p className="mt-2">Нажмите большую кнопку <strong>внизу экрана</strong></p>
            </div>
          </div>
          <img
            src={images[0]}
            alt="Кнопка создания рейса"
            className="w-full max-w-sm mx-auto rounded-xl shadow-2xl border-2 border-gray-600 cursor-pointer hover:border-blue-500 transition-all"
            onClick={() => setEnlargedImage(images[0])}
          />
        </div>

        {/* Шаг 1 */}
        <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-2xl p-6 border border-blue-600">
          <h2 className="text-xl font-bold text-blue-300 mb-4 text-center">Шаг 1 → Выбор тягача и полуприцепа</h2>
          <p className="text-center mb-4">В списках только техника в радиусе 1,5 км</p>
          <p className="text-lg text-center mb-4">
            Выберите тягач → выберите прицеп → нажмите <strong>Далее</strong>
          </p>
          <img
            src={images[1]}
            alt="Выбор техники"
            className="w-full max-w-sm mx-auto rounded-xl shadow-2xl border-2 border-blue-500 cursor-pointer hover:scale-105 transition-all"
            onClick={() => setEnlargedImage(images[1])}
          />
        </div>

        {/* Шаг 2 */}
        <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 rounded-2xl p-6 border border-emerald-600">
          <h2 className="text-xl font-bold text-emerald-300 mb-4 text-center">Шаг 2 → Показания приборов</h2>
          <p className="text-center mb-4">Обязательные поля отмечены *</p>
          <p className="text-lg text-center mb-4">
            Введите остатки топлива в тягаче и прицепе<br />
            Прикрепите фото одометра и датчиков топлива
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {[images[2], images[3], images[4]].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Фото приборов ${i + 1}`}
                className="w-full rounded-xl shadow-xl border-2 border-emerald-500 cursor-pointer hover:scale-105 transition-all"
                onClick={() => setEnlargedImage(src)}
              />
            ))}
          </div>
          <p className="text-center mt-4 font-semibold text-emerald-300">Нажмите Далее</p>
        </div>

        {/* Шаг 3 */}
        <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 rounded-2xl p-6 border border-orange-600">
          <h2 className="text-xl font-bold text-orange-300 mb-4 text-center">Шаг 3 → Техническое состояние</h2>
          <p className="text-center mb-4">Укажите замечания, если есть</p>
          <p className="text-lg text-center mb-4">
            Поставьте галочки напротив всех исправных пунктов<br />
            <span className="font-bold">Сверяйтесь с фактическим состоянием!</span>
          </p>
          <img
            src={images[5]}
            alt="Техсостояние"
            className="w-full max-w-sm mx-auto rounded-xl shadow-2xl border-2 border-orange-500 cursor-pointer hover:scale-105 transition-all"
            onClick={() => setEnlargedImage(images[5])}
          />
          <p className="text-center mt-4 font-bold text-orange-300">Нажмите «Начать новый рейс»</p>
        </div>

        {/* Финал */}
        <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-2xl p-6 border-2 border-green-500 text-center">
          <p className="text-2xl font-bold text-green-300 mb-4">Появится окно подтверждения</p>
          <p className="text-lg mb-4">Проверьте всё ещё раз → подтвердите</p>
          <p className="text-yellow-400 font-bold text-lg mb-4">
            У вас будет 6 секунд на отмену
          </p>
          <img
            src={images[6]}
            alt="Подтверждение рейса"
            className="w-full max-w-sm mx-auto rounded-xl shadow-2xl border-4 border-green-500 cursor-pointer hover:scale-105 transition-all"
            onClick={() => setEnlargedImage(images[6])}
          />
          <p className="text-3xl font-bold text-green-400 mt-6">Готово! Рейс открыт</p>
        </div>
      </div>

      {/* Фиксированная кнопка */}
      <Link
        to="/manual"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 active:scale-95 text-white font-bold text-lg py-5 rounded-3xl text-center shadow-2xl transition-all duration-200 z-10"
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
            alt="Увеличенное изображение"
            className="max-w-full max-h-full rounded-2xl shadow-2xl"
          />
          <button
            onClick={() => setEnlargedImage(null)}
            className="absolute top-6 right-6 text-white text-5xl font-light opacity-80 hover:opacity-100"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default OpenTripPage;