import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import FuelChoicePage from './FuelChoicePage';
import BelarusFuelPage from './BelarusFuelPage';
import KazakhFuelPage from './KazakhFuelPage';

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
        </nav>
        <Routes>
          <Route path="/fuel-choice" element={<FuelChoicePage />} />
          <Route path="/belarus-fuel" element={<BelarusFuelPage />} />
          <Route path="/kazakh-fuel" element={<KazakhFuelPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;