import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import FuelInstructionPage from './FuelInstructionPage';

function App() {
  return (
    <Router>
      <div className="bg-[#141414] min-h-screen text-white p-4">
        <h1 className="text-2xl font-bold mb-4">BelFrost помощник</h1>
        <nav>
          <Link
            to="/fuel-instruction"
            className="custom-button bg-[var(--Miscellaneous-Keyboards-Emoji-+-Mic,#222b59)] bg-opacity-60 text-white hover:bg-opacity-80 active:bg-opacity-100"
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