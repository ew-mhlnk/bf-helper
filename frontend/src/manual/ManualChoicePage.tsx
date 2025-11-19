import React from 'react';
import { Link } from 'react-router-dom';

const ManualChoicePage: React.FC = () => {
  return (
    <div className="bg-[#141414] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Инструкции к TruckOffice</h1>

      <div className="space-y-4 max-w-md mx-auto">
        <Link
          to="/manual/start-work"
          className="bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white font-medium py-4 px-6 rounded-xl block text-center transition-all duration-200 shadow-lg"
        >
          Начало работы
        </Link>

        <Link
          to="/manual/login-password"
          className="bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white font-medium py-4 px-6 rounded-xl block text-center transition-all duration-200 shadow-lg"
        >
          Логин и пароль
        </Link>

        <Link
          to="/manual/open-trip"
          className="bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white font-medium py-4 px-6 rounded-xl block text-center transition-all duration-200 shadow-lg"
        >
          Как открыть рейс?
        </Link>

        <Link
          to="/manual/close-trip"
          className="bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white font-medium py-4 px-6 rounded-xl block text-center transition-all duration-200 shadow-lg"
        >
          Как закрыть рейс?
        </Link>

        <Link
          to="/manual/add-cmr"
          className="bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white font-medium py-4 px-6 rounded-xl block text-center transition-all duration-200 shadow-lg"
        >
          Как добавить CMR
        </Link>

        <Link
          to="/manual/add-receipt"
          className="bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white font-medium py-4 px-6 rounded-xl block text-center transition-all duration-200 shadow-lg"
        >
          Как добавить чек
        </Link>
      </div>
    </div>
  );
};

export default ManualChoicePage;