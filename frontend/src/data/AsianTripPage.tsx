import React from 'react';
import { Link } from 'react-router-dom';

const AsianTripPage: React.FC = () => {
  return (
    <div className="bg-[#141414] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Схема заправок для Азиатских рейсов</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">Туда:</h2>

      <div className="mb-4">
        <h3 className="font-semibold text-lg">Беларусь:</h3>
        <p>Заправка: Газпром</p>
        <p>Способ оплаты: карта Газпром</p>
        <p>Объем: полные баки</p>
        <p className="text-red-400 font-semibold mt-2">‼️ При подъезде к Казахстану в рабочий день и в рабочие часы необходимо связаться с Саком Д. М. для уточнения топливного задания.</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-lg">Россия:</h3>
        <p><strong>Вход через Яйсан:</strong></p>
        <p>Заправка: Башнефть</p>
        <p>Координаты: <a href="https://maps.app.goo.gl/gXtZQp7iZNj6ZEWj7" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">51.172763, 55.009327</a></p>
        <p>Способ оплаты: карта Роснефть</p>
        <p>Объем: полный дополнительный бак</p>

        <p className="mt-3"><strong>Вход через Троицк:</strong></p>
        <p>Заправка: Газпром</p>
        <p>Координаты: <a href="https://maps.app.goo.gl/1g9tvQTbwfKZEHnd8" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">54.17594, 61.434121</a></p>
        <p>Способ оплаты: карта Газпром</p>
        <p>Объем: полный дополнительный бак</p>

        <p className="mt-3"><strong>Вход через Петухово:</strong></p>
        <p>Заправка: Роснефть</p>
        <p>Координаты: <a href="https://maps.app.goo.gl/1Vwz2jPdXrawbDuJ7" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">55.246520, 67.267816</a></p>
        <p>Способ оплаты: карта Газпром</p>
        <p>Объем: полный дополнительный бак</p>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Обратно:</h2>

      <div className="mb-4">
        <h3 className="font-semibold text-lg">Казахстан:</h3>
        <p>Заправка: Газпром (приоритет), Qazaq Oil, SinoOil, Helios</p>
        <p>Способ оплаты: карта Газпром, если заправка Газпром. Остальное – e1card.</p>
        <p>Объем: полный дополнительный бак</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-lg">Россия</h3>
        <p><strong>Выход через Ольховку:</strong></p>
        <p>Заправка: Газпром</p>
        <p>Координаты: <a href="https://maps.app.goo.gl/L33j4Yk74C1YTy428" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">54.172333, 74.782399</a></p>
        <p>Способ оплаты: карта Газпром</p>
        <p>Объем: до Газпрома РБ с учетом нормы входа в РБ</p>
        <p>Норма входа в РБ: 100 л.</p>
        <p className="text-red-400 font-semibold mt-2">‼️ КЗ топливом РЭФ НЕ заправляем! Ни туда, ни обратно.</p>
      </div>

      <Link
        to="/belarus"
        className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mt-6 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
      >
        Вернуться к выбору направления
      </Link>
    </div>
  );
};

export default AsianTripPage;