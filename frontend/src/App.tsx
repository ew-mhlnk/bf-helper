import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Fuel, BookOpen } from 'lucide-react';
import Layout from './components/Layout';

// Импорты страниц
import FuelChoicePage from './FuelChoicePage';
import DirectionChoicePage from './DirectionChoicePage';
import ManualChoicePage from './manual/ManualChoicePage';
import StartWorkPage from './manual/StartWorkPage';
import LoginPasswordPage from './manual/LoginPasswordPage';
import OpenTripPage from './manual/OpenTripPage';
import CloseTripPage from './manual/CloseTripPage';
import AddCMRPage from './manual/AddCMRPage';
import AddReceiptPage from './manual/AddReceiptPage';

// Импорты страниц с данными (Рейсы)
import AsianTripPage from './data/AsianTripPage';
import EuropeanTripPage from './data/EuropeanTripPage';
import ManchzhuriyaPage from './data/ManchzhuriyaPage';
import KrasnodarPage from './data/KrasnodarPage';
import KazakhAsianTripPage from './data/KazakhAsianTripPage';
import KazakhEuropeanTripPage from './data/KazakhEuropeanTripPage';
import KazakhManchzhuriyaPage from './data/KazakhManchzhuriyaPage';
import KazakhKrasnodarPage from './data/KazakhKrasnodarPage';

// Компонент главной страницы (Dashboard)
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Layout title="Главное меню" showBack={false}>
      <div className="space-y-6 mt-4">
        
        {/* Карточка 1: Заправки */}
        <div 
          onClick={() => navigate('/fuel-choice')}
          className="group cursor-pointer relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-blue-600 to-blue-800 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
        >
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Схемы заправок</h2>
              <p className="text-blue-100 text-sm">Где заправляться в рейсе</p>
            </div>
            <Fuel size={40} className="text-blue-200 opacity-80" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity" />
        </div>

        {/* Карточка 2: Инструкции */}
        <div 
          onClick={() => navigate('/manual')}
          className="group cursor-pointer relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-purple-600 to-indigo-800 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
        >
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Инструкции</h2>
              <p className="text-indigo-100 text-sm">Как открыть/закрыть рейс, CMR</p>
            </div>
            <BookOpen size={40} className="text-indigo-200 opacity-80" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity" />
        </div>

      </div>
    </Layout>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Главная страница */}
        <Route path="/" element={<HomePage />} />
        
        {/* Меню выбора */}
        <Route path="/fuel-choice" element={<FuelChoicePage />} />
        <Route path="/manual" element={<ManualChoicePage />} />
        
        {/* Конкретные инструкции */}
        <Route path="/manual/start-work" element={<StartWorkPage />} />
        <Route path="/manual/login-password" element={<LoginPasswordPage />} />
        <Route path="/manual/open-trip" element={<OpenTripPage />} />
        <Route path="/manual/close-trip" element={<CloseTripPage />} />
        <Route path="/manual/add-cmr" element={<AddCMRPage />} />
        <Route path="/manual/add-receipt" element={<AddReceiptPage />} />

        {/* Страницы выбора направления (/:truckType обрабатывает и belarus, и kazakh) */}
        <Route path="/:truckType" element={<DirectionChoicePage />} />

        {/* Маршруты для Белорусского тягача */}
        <Route path="/belarus/asian-trip" element={<AsianTripPage />} />
        <Route path="/belarus/european-trip" element={<EuropeanTripPage />} />
        <Route path="/belarus/manchzhuriya" element={<ManchzhuriyaPage />} />
        <Route path="/belarus/krasnodar" element={<KrasnodarPage />} />

        {/* Маршруты для Казахского тягача */}
        <Route path="/kazakh/asian-trip" element={<KazakhAsianTripPage />} />
        <Route path="/kazakh/european-trip" element={<KazakhEuropeanTripPage />} />
        <Route path="/kazakh/manchzhuriya" element={<KazakhManchzhuriyaPage />} />
        <Route path="/kazakh/krasnodar" element={<KazakhKrasnodarPage />} />
      </Routes>
    </Router>
  );
}

export default App;