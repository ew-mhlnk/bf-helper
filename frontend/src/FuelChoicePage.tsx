import React from 'react';
import { Link } from 'react-router-dom';

const FuelChoicePage: React.FC = () => {
  return (
    <div className="bg-[#141414] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Выберите тягач</h1>
      <Link
        to="/belarus"
        className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mb-2 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
      >
        Белорусский
      </Link>
      <Link
        to="/kazakh"
        className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mb-2 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
      >
        Казахский
      </Link>
    </div>
  );
};

export default FuelChoicePage;