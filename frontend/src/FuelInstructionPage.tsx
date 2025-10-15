import React from 'react';
import { Link } from 'react-router-dom';

const FuelInstructionPage: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Инструкция: Как заправляться?</h1>
      <p className="mb-4">
        1. Остановите транспортное средство у заправки и выключите двигатель.
        2. Используйте топливную карту компании для оплаты.
        3. Выберите тип топлива (дизель) и начните заправку.
        4. После завершения сохраните чек и загрузите его в приложение.
      </p>
      <Link
        to="/"
        className="bg-blue-700 w-full text-white py-2 mb-2 rounded block text-center"
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default FuelInstructionPage;