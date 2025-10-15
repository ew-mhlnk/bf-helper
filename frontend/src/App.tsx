import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import FuelInstructionPage from './FuelInstructionPage'; // Убираем .tsx

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white p-4">
        <h1 className="text-2xl font-bold mb-4">BelFrost помощник</h1>
        <nav>
          <Link
            to="/fuel-instruction"
            className="bg-blue-700 w-full text-white py-2 mb-2 rounded block text-center"
          >
            Как заправляться?
          </Link>
        </nav>
        <Routes>
          <Route path="/fuel-instruction" element={<FuelInstructionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;