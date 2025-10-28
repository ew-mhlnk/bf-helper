import React from 'react';
import { Link } from 'react-router-dom';

const StartWorkPage: React.FC = () => {
  return (
    <div className="bg-[#141414] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Начало работы с TruckOffice</h1>
      <p>1. Установите приложение TruckOffice на своё устройство.</p>
      <p>2. Зарегистрируйтесь, используя корпоративные учетные данные.</p>
      <p>3. Настройте профиль, указав данные о транспорте и маршрутах.</p>
      <p>4. Начните работу, следуя уведомлениям приложения.</p>
      <Link
        to="/manual"
        className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mt-4 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
      >
        Вернуться к инструкциям
      </Link>
    </div>
  );
};

export default StartWorkPage;