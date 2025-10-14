import React from 'react';
import './App.css';

function App() {
  const handleButtonClick = (command: string) => {
    // Отправка данных в бот через Telegram Web App API
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.sendData(JSON.stringify({ command }));
    } else {
      console.error('Telegram WebApp is not available');
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">BelFrost помощник</h1>
      <button
        className="bg-blue-700 w-full text-white py-2 mb-2 rounded"
        onClick={() => handleButtonClick("Как заправляться?")}
      >
        Как заправляться?
      </button>
      <button
        className="bg-blue-700 w-full text-white py-2 mb-2 rounded"
        onClick={() => handleButtonClick("Топливный калькулятор")}
      >
        Топливный калькулятор
      </button>
      <button
        className="bg-blue-700 w-full text-white py-2 mb-2 rounded"
        onClick={() => handleButtonClick("Мой переход")}
      >
        Мой переход
      </button>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Инструкции к приложению</h2>
        <button
          className="bg-blue-700 w-full text-white py-2 mb-2 rounded"
          onClick={() => handleButtonClick("Как открыть рейс?")}
        >
          Как открыть рейс?
        </button>
        <button
          className="bg-blue-700 w-full text-white py-2 mb-2 rounded"
          onClick={() => handleButtonClick("Как закрыть рейс?")}
        >
          Как закрыть рейс?
        </button>
        <button
          className="bg-blue-700 w-full text-white py-2 mb-2 rounded"
          onClick={() => handleButtonClick("Как добавить CMR?")}
        >
          Как добавить CMR?
        </button>
        <button
          className="bg-blue-700 w-full text-white py-2 mb-2 rounded"
          onClick={() => handleButtonClick("Как добавить карту простоя?")}
        >
          Как добавить карту простоя?
        </button>
        <button
          className="bg-blue-700 w-full text-white py-2 mb-2 rounded"
          onClick={() => handleButtonClick("Как добавить чек?")}
        >
          Как добавить чек?
        </button>
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Другие вопросы</h2>
          <button
            className="bg-blue-700 w-full text-white py-2 mb-2 rounded"
            onClick={() => handleButtonClick("Перечень. Что я должен знать?")}
          >
            Перечень. Что я должен знать?
          </button>
          <button
            className="bg-blue-700 w-full text-white py-2 mb-2 rounded"
            onClick={() => handleButtonClick("Я приехал из рейса. Что дальше?")}
          >
            Я приехал из рейса. Что дальше?
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;