import React from 'react';
import { Link } from 'react-router-dom';

const FuelInstructionPage: React.FC = () => {
  return (
    <div className="bg-[#141414] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Инструкция: Как заправляться?</h1>
      <p className="mb-4">
        1. Остановите транспортное средство у заправки и выключите двигатель.
        2. Используйте топливную карту компании для оплаты.
        3. Выберите тип топлива (дизель) и начните заправку.
        4. После завершения сохраните чек и загрузите его в приложение.
      </p>
      <Link
        to="/"
        className="custom-button bg-[var(--Miscellaneous-Keyboards-Emoji-+-Mic,#222b59)] bg-opacity-60 text-white hover:bg-opacity-80 active:bg-opacity-100"
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default FuelInstructionPage;