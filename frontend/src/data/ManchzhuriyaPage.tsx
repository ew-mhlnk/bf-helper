import React from 'react';
import { Link } from 'react-router-dom';

const ManchzhuriyaPage: React.FC = () => {
  return (
    <div className="bg-[#141414] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">
        Схема заправок для рейсов в Маньчжурию
      </h1>

      {/* ---------- ТУДА ---------- */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Туда:</h2>

      <div className="mb-5">
        <h3 className="font-semibold text-lg">Беларусь:</h3>
        <p>Заправка: Газпром</p>
        <p>Способ оплаты: карта Газпром</p>
        <p>Объем: полные баки</p>
      </div>

      <div className="mb-5">
        <h3 className="font-semibold text-lg">Россия:</h3>

        <div className="mb-3">
          <p>Заправка: Газпром</p>
          <p>
            Координаты:{' '}
            <a
              href="https://maps.app.goo.gl/ZuYypsuAW9EXYP8X7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              53.496066, 50.072105
            </a>
          </p>
          <p>Способ оплаты: e1card</p>
          <p>Объем: до полных баков</p>
        </div>

        <div className="mb-3">
          <p>Заправка: Газпром</p>
          <p>
            Координаты:{' '}
            <a
              href="https://maps.app.goo.gl/hnnfVgudHtRKbqbP9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              54.881233, 73.3552
            </a>
          </p>
          <p>Способ оплаты: Газпром</p>
          <p>Объем: до полных баков</p>
        </div>

        <div className="mb-3">
          <p>Заправка: Импульс</p>
          <p>
            Координаты:{' '}
            <a
              href="https://maps.app.goo.gl/yBwS9EUWN2vDy3Qm8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              52.400797, 104.013977
            </a>
          </p>
          <p>Способ оплаты: e1card</p>
          <p>Объем: до полных баков</p>
        </div>
      </div>

      {/* ---------- ОБРАТНО ---------- */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Обратно:</h2>
      <p className="mb-4">
        В обратном порядке с тем учётом, что <strong>вход в РБ = 100 л.</strong>
      </p>

      {/* Кнопка назад */}
      <Link
        to="/belarus"
        className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mt-6 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
      >
        Вернуться к выбору направления
      </Link>
    </div>
  );
};

export default ManchzhuriyaPage;