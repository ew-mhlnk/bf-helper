import React from 'react';
import { Link } from 'react-router-dom';

const AsianTripPage: React.FC = () => {
  return (
    <div className="bg-[#141414] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">🚚 Схема заправок для рейсов в Гросберен (BY-тягач)</h1>
      <h2 className="text-xl font-semibold mt-4">➡️ Туда:</h2>
      <p>Адблю: полный бак на базе</p>
      <p>Заправка: Газпром</p>
      <p>Способ оплаты: карта Газпром</p>
      <p>Объем: полные баки</p>
      <p>‼️ На территории РФ дизельным топливом не дозаправляемся!</p>
      <h2 className="text-xl font-semibold mt-4">⬅️ Обратно:</h2>
      <p>Основная заправка: Газпром</p>
      <p>Координаты: <a href="https://maps.app.goo.gl/AEpZCh6gRX6ppC5L8" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">55.186410, 30.095450</a></p>
      <p>Способ оплаты: карта Газпром</p>
      <p>Объем: полные баки</p>
      <p>Если нужна дозаправка: Белоруснефть</p>
      <p>Способ оплаты: карта Белоруснефть</p>
      <p>Координаты: <a href="https://maps.app.goo.gl/Gvwd2XQTEoA19J7E7" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">55.755285, 27.955635</a></p>
      <p>Объем: до Газпрома</p>
      <p>‼️ На территории РФ дизельным топливом не дозаправляемся!</p>
      <h2 className="text-xl font-semibold mt-4">Адблю:</h2>
      <p>Заправка: GreenOil</p>
      <p>Координаты: <a href="https://maps.app.goo.gl/axrMHebnho3WNYKE6" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">54.853292, 31.858721</a></p>
      <p>Способ оплаты: Монополия, по СТС транспорта</p>
      <p>Объем: полный бак</p>
      <Link
        to="/belarus"
        className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mt-4 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
      >
        Вернуться к выбору направления
      </Link>
    </div>
  );
};

export default AsianTripPage;