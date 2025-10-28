import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import FuelChoicePage from './FuelChoicePage';
import DirectionChoicePage from './DirectionChoicePage';
import AsianTripPage from './data/AsianTripPage';
import EuropeanTripPage from './data/EuropeanTripPage';
import ManchzhuriyaPage from './data/ManchzhuriyaPage';
import KrasnodarPage from './data/KrasnodarPage';
import KazakhAsianTripPage from './data/KazakhAsianTripPage';
import KazakhEuropeanTripPage from './data/KazakhEuropeanTripPage';
import KazakhManchzhuriyaPage from './data/KazakhManchzhuriyaPage';
import KazakhKrasnodarPage from './data/KazakhKrasnodarPage';
import ManualChoicePage from './manual/ManualChoicePage';
import StartWorkPage from './manual/StartWorkPage';
import LoginPasswordPage from './manual/LoginPasswordPage'; // Новый импорт

function App() {
  return (
    <Router>
      <div className="bg-[#141414] min-h-screen text-white p-4">
        <h1 className="text-2xl font-bold mb-4">BelFrost помощник</h1>
        <nav>
          <Link
            to="/fuel-choice"
            className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mb-2 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
          >
            Как заправляться?
          </Link>
          <Link
            to="/manual"
            className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mb-2 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
          >
            Инструкции к TruckOffice
          </Link>
        </nav>
        <Routes>
          <Route path="/fuel-choice" element={<FuelChoicePage />} />
          <Route path="/:truckType" element={<DirectionChoicePage />} />
          <Route path="/belarus/asian-trip" element={<AsianTripPage />} />
          <Route path="/belarus/european-trip" element={<EuropeanTripPage />} />
          <Route path="/belarus/manchzhuriya" element={<ManchzhuriyaPage />} />
          <Route path="/belarus/krasnodar" element={<KrasnodarPage />} />
          <Route path="/kazakh/asian-trip" element={<KazakhAsianTripPage />} />
          <Route path="/kazakh/european-trip" element={<KazakhEuropeanTripPage />} />
          <Route path="/kazakh/manchzhuriya" element={<KazakhManchzhuriyaPage />} />
          <Route path="/kazakh/krasnodar" element={<KazakhKrasnodarPage />} />
          <Route path="/manual" element={<ManualChoicePage />} />
          <Route path="/manual/start-work" element={<StartWorkPage />} />
          <Route path="/manual/login-password" element={<LoginPasswordPage />} /> {/* Новый маршрут */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;