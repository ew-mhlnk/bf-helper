import React from 'react';
import './App.css';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">BelFrost помощник</h1>
      <button className="bg-blue-700 w-full text-white py-2 mb-2 rounded">Как заправляться?</button>
      <button className="bg-blue-700 w-full text-white py-2 mb-2 rounded">Топливный калькулятор</button>
      <button className="bg-blue-700 w-full text-white py-2 mb-2 rounded">Мой переход</button>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Инструкции к приложению</h2>
        <button className="bg-blue-700 w-full text-white py-2 mb-2 rounded">Как открыть рейс?</button>
        <button className="bg-blue-700 w-full text-white py-2 mb-2 rounded">Как закрыть рейс?</button>
        <button className="bg-blue-700 w-full text-white py-2 mb-2 rounded">Как добавить CMR?</button>
        <button className="bg-blue-700 w-full text-white py-2 mb-2 rounded">Как добавить карту простоя?</button>
        <button className="bg-blue-700 w-full text-white py-2 mb-2 rounded">Как добавить чек?</button>
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Другие вопросы</h2>
          <button className="bg-blue-700 w-full text-white py-2 mb-2 rounded">Перечень. Что я должен знать?</button>
          <button className="bg-blue-700 w-full text-white py-2 mb-2 rounded">Я приехал из рейса. Что дальше?</button>
        </div>
      </div>
    </div>
  );
}

export default App;