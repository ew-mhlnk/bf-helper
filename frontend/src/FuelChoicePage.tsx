import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, RefreshCw } from 'lucide-react';
import Layout from './components/Layout';

const FuelChoicePage: React.FC = () => {
  const navigate = useNavigate();

  // Общий стиль для карточек
  const cardStyle = "flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98]";
  // Стиль темы
  const themeStyle = "bg-white border-gray-200 hover:border-blue-500 dark:bg-[#1a1a1a] dark:border-gray-800 dark:hover:border-blue-500";

  return (
    <Layout title="Выберите тягач">
      <div className="grid grid-cols-1 gap-4 mt-2">
        <p className="text-center text-gray-500 dark:text-gray-400 mb-2 text-sm">
          Выберите, на какой машине вы работаете
        </p>

        {/* 1. Белорусский тягач */}
        <div 
          onClick={() => navigate('/belarus')}
          className={`${cardStyle} ${themeStyle}`}
        >
          <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3 text-blue-600 dark:text-blue-400">
            <Truck size={32} />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Белорусский</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">BY номера</p>
        </div>

        {/* 2. Казахский тягач */}
        <div 
          onClick={() => navigate('/kazakh')}
          className={`${cardStyle} ${themeStyle}`}
        >
          <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-full mb-3 text-yellow-600 dark:text-yellow-400">
            <Truck size={32} />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Казахский</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">KZ номера</p>
        </div>

        {/* 3. Кнопка "Перецепка" (НОВАЯ) */}
        <div 
          onClick={() => navigate('/trailer-swap')}
          className={`${cardStyle} bg-white border-gray-200 hover:border-purple-500 dark:bg-[#1a1a1a] dark:border-gray-800 dark:hover:border-purple-500`}
        >
          <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-3 text-purple-600 dark:text-purple-400">
            <RefreshCw size={32} />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Перецепка</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Правило 240/240</p>
        </div>

      </div>
    </Layout>
  );
};

export default FuelChoicePage;