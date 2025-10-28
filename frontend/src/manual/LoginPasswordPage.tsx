import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPasswordPage: React.FC = () => {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const handleImageClick = () => {
    setIsImageEnlarged(true);
  };

  const handleCloseImage = () => {
    setIsImageEnlarged(false);
  };

  return (
    <div className="bg-[#141414] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">🤔 Как войти в свой аккаунт в мобильном приложении?</h1>
      <h2 className="text-xl font-semibold mt-4">👉 ТРИ способа входа:</h2>
      <ol className="list-decimal list-inside ml-4 mb-4">
        <li>По QR-коду на путевом листе.</li>
        <li>По QR-коду на пропуске.</li>
        <li>Ручной вход. Введите логин и пароль вручную в соответствующие поля приложения.</li>
      </ol>
      <div className="mb-4">
        <p>Нажмите на изображение для увеличения:</p>
        <img
          src="/photo/2.png" // Путь к изображению
          alt="Инструкция по входу"
          className="w-64 h-auto cursor-pointer border border-gray-500 rounded"
          onClick={handleImageClick}
        />
        {isImageEnlarged && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleCloseImage}
          >
            <img
              src="/photo/2.png"
              alt="Инструкция по входу (увеличено)"
              className="max-w-full max-h-full"
            />
          </div>
        )}
      </div>
      <p className="text-yellow-400 font-semibold mb-2">⚠️ Если QR-коды не работают или у вас нет логина и пароля (забыли, потеряли, не выдали) — обратитесь к Евгении: <a href="tel:+375292468990" className="text-blue-400 hover:underline">+375 29 246 89 90</a></p>
      <Link
        to="/manual"
        className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mt-4 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
      >
        Вернуться к инструкциям
      </Link>
    </div>
  );
};

export default LoginPasswordPage;