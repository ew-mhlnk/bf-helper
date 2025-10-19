import React from 'react';
import { Link } from 'react-router-dom';

const KazakhEuropeanTripPage: React.FC = () => {
  return (
    <div className="bg-[#141414] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Схема заправок для Европейского рейса (Казахский тягач)</h1>
      <p>Qazaq Oil AZS #1</p>
      <p>Карта оплаты: Qazaq Oil Card</p>
      <p>Объём: 120 liters</p>
      <p>Координаты: 47.106, 51.926</p>
      <Link
        to="/kazakh"
        className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mt-4 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
      >
        Вернуться к выбору направления
      </Link>
    </div>
  );
};

export default KazakhEuropeanTripPage;