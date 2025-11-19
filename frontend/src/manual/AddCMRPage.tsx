import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddCMRPage: React.FC = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const images = [
    '/photo/10.png',
    '/photo/11.png',
    '/photo/12.png',
    '/photo/13.png',
    '/photo/14.png',
    '/photo/15.png',
  ];

  return (
    <div className="bg-[#141414] min-h-screen text-white p-4 pb-32">
      <h1 className="text-2xl font-bold text-center mb-6 mt-3">
        Как добавить CMR
      </h1>

      {/* Главное правило */}
      <div className="bg-red-900/40 border-2 border-red-600 rounded-2xl p-5 mb-7 text-center">
        <p className="text-lg font-bold text-red-300">
          Любой документ загружается только через нужный рейс
        </p>
        <p className="text-base mt-2">
          Отправка <span className="font-bold">ЛЮБЫХ</span> документов начинается с выбора РЕЙСА
        </p>
      </div>

      {/* 10.png */}
      <div className="flex justify-center mb-7">
        <img
          src={images[0]}
          alt="Главный экран"
          className="w-80 max-w-full rounded-xl shadow-xl border border-gray-600 cursor-pointer"
          onClick={() => setEnlargedImage(images[0])}
        />
      </div>

      {/* Пошаговая инструкция */}
      <div className="bg-[#1e1e1e] rounded-2xl p-5 mb-7 border border-gray-700">
        <h2 className="text-lg font-bold text-blue-300 mb-4 text-center">
          Как попасть в нужный заказ
        </h2>

        <div className="space-y-4">
          {[
            'Зайдите в раздел «Рейсы»',
            'Найдите свой рейс (текущий обычно сверху) → нажмите на него',
            'Нажмите на ЗАКАЗ, к которому прикрепляете документ',
            'Нажмите синюю кнопку → Отправить документ → Прочие документы → выберите нужный вид CMR',
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
              <p className="text-base pt-0.5">{text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 mt-5">
          <img
            src={images[1]}
            alt="Шаги 1–2"
            className="rounded-lg border border-gray-600 cursor-pointer"
            onClick={() => setEnlargedImage(images[1])}
          />
          <img
            src={images[2]}
            alt="Шаги 3–4"
            className="rounded-lg border border-gray-600 cursor-pointer"
            onClick={() => setEnlargedImage(images[2])}
          />
        </div>
      </div>

      {/* Способы загрузки */}
      <div className="bg-[#1e1e1e] rounded-2xl p-5 mb-7 border border-gray-700">
        <h2 className="text-lg font-bold text-cyan-300 mb-5 text-center">
          Выберите способ загрузки
        </h2>

        <div className="space-y-4">
          <div className="bg-cyan-900/30 rounded-lg p-4 text-center border border-cyan-700">
            <p className="font-semibold">Сканер</p>
            <p className="text-sm opacity-90 mt-1">приложение само обрежет и выпрямит</p>
          </div>
          <div className="bg-cyan-900/30 rounded-lg p-4 text-center border border-cyan-700">
            <p className="font-semibold">Камера</p>
            <p className="text-sm opacity-90 mt-1">просто сделать фото</p>
          </div>
          <div className="bg-cyan-900/30 rounded-lg p-4 text-center border border-cyan-700">
            <p className="font-semibold">Галерея</p>
            <p className="text-sm opacity-90 mt-1">готовый снимок из телефона</p>
          </div>
        </div>

        <img
          src={images[3]}
          alt="Выбор способа"
          className="w-full max-w-xs mx-auto rounded-lg border border-gray-600 cursor-pointer mt-5"
          onClick={() => setEnlargedImage(images[3])}
        />
      </div>

      {/* Как фотографировать */}
      <div className="bg-[#1e1e1e] rounded-2xl p-5 mb-7 border border-gray-700">
        <h2 className="text-lg font-bold text-amber-300 text-center mb-5">
          Как фотографировать правильно
        </h2>

        <ul className="space-y-4 text-base">
          <li className="flex items-center gap-3">
            <span>✔️</span> Положите лист на ровную поверхность
          </li>
          <li className="flex items-center gap-3">
            <span>✔️</span> Протрите камеру телефона
          </li>
          <li className="flex items-center gap-3">
            <span>✔️</span> Снимайте так, чтобы весь документ был в кадре и текст читался
          </li>
        </ul>


        <img
          src={images[4]}
          alt="Пример хорошего фото"
          className="w-full max-w-lg mx-auto rounded-lg border border-gray-600 cursor-pointer"
          onClick={() => setEnlargedImage(images[4])}
        />
      </div>

      {/* Готово */}
      <div className="bg-green-900/50 rounded-2xl p-6 mb-7 text-center border-2 border-green-600">
        <p className="text-2xl font-bold text-green-300 mb-3">Готово! CMR загружен</p>
        <p className="text-base">
          Цифра на заказе показывает количество прикреплённых документов
        </p>
      </div>

      {/* Проверка файлов */}
      <div className="bg-[#1e1e1e] rounded-2xl p-5 mb-7 border border-gray-700 text-center">
        <p className="text-lg font-bold text-blue-300 mb-3">
          Где посмотреть загруженные файлы?
        </p>
        <p className="mb-4">Рейс → кнопка «Файлы»</p>
        <img
          src={images[5]}
          alt="Список файлов"
          className="w-full max-w-sm mx-auto rounded-lg border border-gray-600 cursor-pointer"
          onClick={() => setEnlargedImage(images[5])}
        />
      </div>

      {/* Обязательные документы */}
      <div className="bg-yellow-900/40 rounded-2xl p-6 border-2 border-yellow-600 text-center">
        <p className="text-xl font-bold text-yellow-300 mb-4">
          В каждом завершённом заказе обязательно должны быть:
        </p>
        <div className="space-y-3 text-lg">
          <p>CMR</p>
          <p>Карта простоя</p>
          <p>Чеки расходов</p>
        </div>
      </div>

      {/* Кнопка назад */}
      <Link
        to="/manual"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95 text-white font-bold py-4 rounded-2xl text-center shadow-xl transition-all z-10"
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
            className="max-w-full max-h-full rounded-xl"
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

export default AddCMRPage;