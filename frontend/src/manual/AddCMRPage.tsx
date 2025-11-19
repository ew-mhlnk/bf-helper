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
      <h1 className="text-3xl font-bold text-center mb-6 mt-4">Как добавить CMR</h1>

      <div className="bg-red-900/50 border-2 border-red-600 rounded-2xl p-6 mb-8 text-center">
        <p className="text-xl font-bold text-red-300">
          Любой документ загружается только через нужный рейс
        </p>
        <p className="text-lg mt-3">
          Отправка <span className="font-bold">ЛЮБЫХ</span> документов начинается с выбора РЕЙСА
        </p>
      </div>

      <div className="space-y-8">

        <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-2xl p-6 border border-blue-600">
          <h2 className="text-xl font-bold text-blue-300 text-center mb-6">
            Как попасть в нужный заказ
          </h2>

          <div className="space-y-5">
            {[
              'Зайдите в раздел «Рейсы»',
              'Найдите свой рейс (текущий обычно сверху) → нажмите на него',
              'Нажмите на ЗАКАЗ, к которому прикрепляете документ',
              'Нажмите синюю кнопку → Отправить документ → Прочие документы → выберите нужный вид CMR',
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {i + 1}
                </div>
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {images.slice(0, 3).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Шаг ${i + 1}`}
                className="w-full rounded-xl shadow-2xl border-2 border-blue-500 cursor-pointer hover:scale-105 transition-all"
                onClick={() => setEnlargedImage(src)}
              />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-900/40 to-teal-900/40 rounded-2xl p-6 border border-cyan-600">
          <h2 className="text-xl font-bold text-cyan-300 text-center mb-6">
            Выберите способ загрузки
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            <div className="bg-cyan-800/50 rounded-xl p-5 text-center border border-cyan-500">
              <span className="text-4xl block mb-2">Scanner</span>
              <p className="font-bold">Сканер</p>
              <p className="text-sm opacity-90 mt-1">приложение само обрежет и выпрямит</p>
            </div>
            <div className="bg-cyan-800/50 rounded-xl p-5 text-center border border-cyan-500">
              <span className="text-4xl block mb-2">Camera</span>
              <p className="font-bold">Камера</p>
              <p className="text-sm opacity-90 mt-1">просто сделать фото</p>
            </div>
            <div className="bg-cyan-800/50 rounded-xl p-5 text-center border border-cyan-500">
              <span className="text-4xl block mb-2">Gallery</span>
              <p className="font-bold">Галерея</p>
              <p className="text-sm opacity-90 mt-1">готовый снимок из телефона</p>
            </div>
          </div>

          <img
            src={images[3]}
            alt="Выбор способа"
            className="w-full max-w-sm mx-auto rounded-xl shadow-2xl border-2 border-cyan-500 cursor-pointer hover:scale-105 transition-all"
            onClick={() => setEnlargedImage(images[3])}
          />
        </div>

        <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 rounded-2xl p-6 border-2 border-amber-600">
          <h2 className="text-xl font-bold text-amber-300 text-center mb-5">
            Как фотографировать правильно
          </h2>

          <div className="space-y-4 text-center">
            <p className="text-lg">Положите лист на ровную поверхность</p>
            <p className="text-lg">Протрите камеру телефона</p>
            <p className="text-lg">Снимайте так, чтобы весь документ был в кадре и текст читался</p>
          </div>

          {/* Исправлено здесь — все теги закрыты */}
          <div className="flex justify-center gap-12 my-7 text-6xl">
            <span className="text-green-400">Checkmark</span>
            <span className="text-red-400">Cross</span>
          </div>

          <img
            src={images[4]}
            alt="Качественное фото"
            className="w-full max-w-md mx-auto rounded-xl shadow-2xl border-4 border-amber-500 cursor-pointer hover:scale-105 transition-all"
            onClick={() => setEnlargedImage(images[4])}
          />
        </div>

        <div className="bg-gradient-to-r from-green-900/60 to-emerald-900/60 rounded-2xl p-8 border-4 border-green-500 text-center">
          <p className="text-3xl font-bold text-green-300 mb-4">Готово! CMR загружен</p>
          <p className="text-xl mb-6">
            Цифра на заказе = количество прикреплённых документов
          </p>
        </div>

        <div className="bg-gray-800/70 rounded-2xl p-6 border border-gray-500 text-center">
          <p className="text-xl font-bold text-blue-300 mb-4">
            Где посмотреть загруженные файлы?
          </p>
          <p className="text-lg mb-4">Рейс → кнопка «Файлы»</p>
          <img
            src={images[5]}
            alt="Список файлов"
            className="w-full max-w-sm mx-auto rounded-xl shadow-2xl border-2 border-blue-500 cursor-pointer hover:scale-105 transition-all"
            onClick={() => setEnlargedImage(images[5])}
          />
        </div>

        <div className="bg-gradient-to-r from-yellow-900/60 to-orange-900/60 rounded-2xl p-7 border-4 border-yellow-500 text-center">
          <p className="text-2xl font-bold text-yellow-300 mb-5">
            В каждом завершённом заказе обязательно должны быть:
          </p>
          <div className="space-y-4 text-xl">
            <p>CMR</p>
            <p>Stop Card</p>
            <p>Expense Receipts</p>
          </div>
        </div>
      </div>

      <Link
        to="/manual"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 active:scale-95 text-white font-bold text-lg py-5 rounded-3xl text-center shadow-2xl transition-all duration-200 z-10"
      >
        ← Вернуться к инструкциям
      </Link>

      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-6"
          onClick={() => setEnlargedImage(null)}
        >
          <img
            src={enlargedImage}
            alt="Увеличенное фото"
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

export default AddCMRPage;