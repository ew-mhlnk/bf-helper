import React from 'react';
import { Link } from 'react-router-dom';

const ManualChoicePage: React.FC = () => {
  return (
    <div className="bg-[#141414] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Инструкции к TruckOffice</h1>
      <Link
        to="/manual/start-work"
        className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mb-2 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
      >
        Начало работы
      </Link>
      <Link
        to="/manual/login-password"
        className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mb-2 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
      >
        Логин и пароль
      </Link>
      <Link
  to="/manual/open-trip"
  className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mb-2 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
>
  Как открыть рейс?
</Link>
    </div>
  );
};

export default ManualChoicePage;