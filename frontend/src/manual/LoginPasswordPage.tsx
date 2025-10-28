import React from 'react';
import { Link } from 'react-router-dom';

const LoginPasswordPage: React.FC = () => {
  return (
    <div className="bg-[#141414] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">🤔 Как войти в свой аккаунт в мобильном приложении?</h1>
      <h2 className="text-xl font-semibold mt-4">👉 ТРИ способа входа:</h2>
      <ol className="list-decimal list-inside ml-4 mb-4">
        <li>По QR-коду на путевом листе.</li>
        <li>По QR-коду на пропуске.</li>
        <li>Ручной вход. Введите логин и пароль вручную в соответствующие поля приложения.</li>
      </ol>
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