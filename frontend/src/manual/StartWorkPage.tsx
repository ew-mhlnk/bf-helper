import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StartWorkPage: React.FC = () => {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const handleImageClick = () => {
    setIsImageEnlarged(true);
  };

  const handleCloseImage = () => {
    setIsImageEnlarged(false);
  };

  return (
    <div className="bg-[#141414] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">▶️ Начало работы с приложением</h1>
      <p className="text-yellow-400 font-semibold mb-2">⚠️ Важно: убедитесь, что используется именно ваш аккаунт!</p>
      <div className="mb-4">
        <p>Нажмите на изображение для увеличения:</p>
        <img
          src="/photo/1.png" // Путь к изображению
          alt="Инструкция по аккаунту"
          className="w-64 h-auto cursor-pointer border border-gray-500 rounded"
          onClick={handleImageClick}
        />
        {isImageEnlarged && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleCloseImage}
          >
            <img
              src="/photo/1.png"
              alt="Инструкция по аккаунту (увеличено)"
              className="max-w-full max-h-full"
            />
          </div>
        )}
      </div>
      <p className="text-red-400 font-semibold mb-2">❗️ Перед началом рейса проверьте, что в приложении активирован ваш аккаунт. Это особенно важно, если вы работаете на сменном автомобиле или за вами не закреплён конкретный тягач. Каждый тягач оснащён мобильным телефоном. Перед выездом убедитесь, что в приложении открыт ваш аккаунт.</p>
      <h2 className="text-xl font-semibold mt-4">Как проверить:</h2>
      <ol className="list-decimal list-inside ml-4 mb-4">
        <li>Нажмите на значок с тремя полосками в правом верхнем углу.</li>
        <li>В появившемся окне убедитесь, что указан ваш аккаунт.</li>
        <li>Если это вы — просто нажмите на пустое место и продолжайте работу.</li>
        <li>Если это не вы — нажмите «Выйти» и войдите под своими данными.</li>
      </ol>
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