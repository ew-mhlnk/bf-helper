import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddCMRPage: React.FC = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const images = [
    '/photo/12.png',
    '/photo/13.png',
    '/photo/14.png',
    '/photo/15.png',
    '/photo/16.png',
    '/photo/17.png',
    '/photo/18.png',
  ];

  return (
    <div className="bg-[#141414] min-h-screen text-white p-4 pb-32">
      {/* Заголовок */}
      <h1 className="text-3xl font-bold text-center mb-6 mt-4">
        Как добавить CMR
      </h1>

      {/* Важное предупреждение */}
      <div className="bg-red-900/50 border-2 border-red-600 rounded-2xl p-6 mb-8 text-center">
        <p className="text-xl font-bold text-red-300">
          Отправка ЛЮБЫХ документов начинается с выбора РЕЙСА
        </p>
      </div>

      <div className="space-y-8">

        {/* Шаг 1 */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">1</div>
            <div>
              <p className="text-lg">Перейдите в раздел <strong>«Рейсы»</strong></p>
              <p className="mt-2">Найдите нужный рейс (текущий обычно сверху)</p>
              <p className="text-yellow-400 font-bold mt-3">
                Убедитесь, что выбрали правильный заказ!
              </p>
            </div>
          </div>
          <img
            src={images[0]}
            alt="Выбор рейса"
            className="w-full max-w-sm mx-auto rounded-xl shadow-2xl border-2 border-gray-600 cursor-pointer hover:border-blue-500 transition-all"
            onClick={() => setEnlargedImage(images[0])}
          />
        </div>

        {/* Шаг 2 */}
        <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-6 border border-purple-600">
          <div className="text-center mb-5">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full text-2xl font-bold shadow-lg mb-3">2</div>
            <p className="text-lg font-bold text-purple-300">
              Нажмите три точки рядом с нужным заказом
            </p>
            <p className="text-yellow-300 font-semibold mt-2">
              Это критически важно — документ привяжется именно к этому заказу!
            </p>
          </div>
          <img
            src={images[1]}
            alt="Меню заказа"
            className="w-full max-w-sm mx-auto rounded-xl shadow-2xl border-2 border-purple-500 cursor-pointer hover:scale-105 transition-all"
            onClick={() => setEnlargedImage(images[1])}
          />
        </div>

        {/* Шаг 3 */}
        <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-2xl p-6 border border-cyan-600">
          <h2 className="text-xl font-bold text-cyan-300 text-center mb-4">Выберите «Отправить файл из…»</h2>
          <div className="grid grid-cols-2 gap-4 mb-5 text-center">
            <div className="bg-cyan-800/50 rounded-xl p-4 border border-cyan-500">
              <p className="font-bold">Сканер</p>
              <p className="text-sm opacity-90">сфотографировать сейчас</p>
            </div>
            <div className="bg-cyan-800/50 rounded-xl p-4 border border-cyan-500">
              <p className="font-bold">Галерея</p>
              <p className="text-sm opacity-90">уже есть фото</p>
            </div>
          </div>
          <p className="text-center font-semibold text-yellow-300">
            Главное — документ попал в правильный заказ!
          </p>
          <img
            src={images[2]}
            alt="Выбор источника"
            className="w-full max-w-sm mx-auto rounded-xl shadow-2xl border-2 border-cyan-500 cursor-pointer hover:scale-105 transition-all mt-4"
            onClick={() => setEnlargedImage(images[2])}
          />
        </div>

        {/* Шаг 4 — BY/KZ */}
        <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-2xl p-6 border-2 border-green-500">
          <p className="text-xl font-bold text-green-300 text-center mb-4">
            Белорусские и казахстанские водители<br />
            выбирают пункт <span className="text-2xl">«ДОКУМЕНТЫ»</span>
          </p>
          <p className="text-center mb-4">Затем выберите нужный тип: CMR, карта простоя и т.д.</p>
          <img
            src={images[3]}
            alt="Выбор типа документа"
            className="w-full max-w-sm mx-auto rounded-xl shadow-2xl border-4 border-green-500 cursor-pointer hover:scale-105 transition-all"
            onClick={() => setEnlargedImage(images[3])}
          />
        </div>

        {/* Шаг 5 — Как фотографировать */}
        <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 rounded-2xl p-6 border border-amber-600">
          <h2 className="text-xl font-bold text-amber-300 text-center mb-4">
            Фотографируйте документы ровно!
          </h2>
          <ul className="space-y-3 text-center">
            <li>Положите документ на ровную поверхность</li>
            <li>Протрите камеру</li>
            <li>Установите «маячки» по углам</li>
            <li>Проверьте — нажмите галочку или крестик</li>
          </ul>
          <img
            src={images[4]}
            alt="Сканер документов"
            className="w-full max-w-sm mx-auto rounded-xl shadow-2xl border-2 border-amber-500 cursor-pointer hover:scale-105 transition-all mt-5"
            onClick={() => setEnlargedImage(images[4])}
          />
        </div>

        {/* Успех */}
        <div className="bg-gradient-to-r from-green-900/60 to-emerald-900/60 rounded-2xl p-6 border-4 border-green-500 text-center">
          <p className="text-2xl font-bold text-green-300 mb-4">Готово!</p>
          <p className="text-lg mb-4">Цифра = количество прикреплённых документов</p>
          <img
            src={images[5]}
            alt="Документ добавлен"
            className="w-full max-w-sm mx-auto rounded-xl shadow-2xl border-4 border-green-500 cursor-pointer hover:scale-105 transition-all"
            onClick={() => setEnlargedImage(images[5])}
          />
        </div>

        {/* Проверка */}
        <div className="bg-gray-800/70 rounded-2xl p-6 border border-gray-600 text-center">
          <p className="text-xl font-bold text-blue-300 mb-4">Проверка: откройте «Файлы»</p>
          <img
            src={images[6]}
            alt="Список файлов"
            className="w-full max-w-sm mx-auto rounded-xl shadow-2xl border-2 border-blue-500 cursor-pointer hover:scale-105 transition-all"
            onClick={() => setEnlargedImage(images[6])}
          />
        </div>

        {/* Обязательные документы */}
        <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 rounded-2xl p-6 border-2 border-yellow-600 text-center">
          <p className="text-xl font-bold text-yellow-300 mb-4">
            В каждом завершённом заказе должны быть:
          </p>
          <ul className="space-y-2 text-lg">
            <li>CMR</li>
            <li>Карта простоя</li>
            <li>Чеки понесённых расходов</li>
          </ul>
        </div>
      </div>

      {/* Фиксированная кнопка */}
      <Link
        to="/manual"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 active:scale-95 text-white font-bold text-lg py-5 rounded-3xl text-center shadow-2xl transition-all duration-200 z-10"
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

export default AddCMRPage;